const Question = require("../models/questions");
//const User = require("../models/users")

class QuestionCtrl {
  async checkQuestionExist(ctx, next) {
    const question = await Question.findById(ctx.params.id).select(
      "+questioner"
    );
    //select why?  优化代码，用了这个中间件的后面代码就不用findbyid了
    if (!question) {
      ctx.throw(404, "话题不存在");
    }
    ctx.state.question = question;
    await next();
  }
  async checkQuestioner(ctx, next) {
    const { question } = ctx.state;
    if (question.questioner.toString() !== ctx.state.user._id)
      ctx.throw(403, "无权限");
    await next();
  }
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page, 1) - 1;
    const perPage = Math.max(per_page, 1);
    const q = new RegExp(ctx.query.q);
    ctx.body = await Question.find({ $or: [{ title: q }, { desc: q }] })
      .limit(perPage)
      .skip(page * perPage);
  }
  async findById(ctx) {
    const { fields = "" } = ctx.query;
    const selectFields = fields
      .split(";")
      .filter(f => f)
      .map(v => "+" + v)
      .join(" ");
    const question = (ctx.body = await Question.findById(ctx.params.id)
      .select(selectFields)
      .populate("questioner topics"));
    //感觉加不加populate没有必要，加了可能会影响查询字段
    if (!question) {
      ctx.throw(404, "问题不存在");
    }
    ctx.body = question;
  }
  async create(ctx) {
    ctx.verifyParams({
      title: { type: "string", required: true },
      desc: { type: "string", required: false }
      //questioner: { type: "string", required: true }
    });
    const question = await new Question({
      ...ctx.request.body,
      questioner: ctx.state.user._id
    }).save();
    ctx.body = question;
  }
  async del(ctx) {
    const question = await Question.findByIdAndRemove(ctx.params.id);
    if (!question) ctx.throw(404, "问题不存在");
    ctx.status = 204;
  }
  async update(ctx) {
    ctx.verifyParams({
      title: { type: "string", required: false },
      desc: { type: "string", required: false }
    });
    const question = await Question.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    ctx.body = question;
  }
}

module.exports = new QuestionCtrl();
