const Answer = require("../models/answers");
//const User = require("../models/users")

class AnswerCtrl {
  async checkAnswerExist(ctx, next) {
    const answer = await Answer.findById(ctx.params.id).select("+Answerer");
    //select why?  优化代码，用了这个中间件的后面代码就不用findbyid了
    if (!answer) {
      ctx.throw(404, "答案不存在");
    }
    //只有路由中包含questionId时才进行比对，赞和踩答案时不检查
    if (ctx.params.questionId && answer.questionId !== ctx.params.questionId) {
      ctx.throw(404, "该问题下没有此答案");
    }
    ctx.state.answer = answer;
    await next();
  }
  async checkAnswerer(ctx, next) {
    const { answer } = ctx.state;
    if (answer.answerer.toString() !== ctx.state.user._id)
      ctx.throw(403, "无权限");
    await next();
  }
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page, 1) - 1;
    const perPage = Math.max(per_page, 1);
    const q = new RegExp(ctx.query.q);
    ctx.body = await Answer.find({
      content: q,
      questionId: ctx.params.questionId
    })
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
    const answer = (ctx.body = await Answer.findById(ctx.params.id)
      .select(selectFields)
      .populate("answerer"));
    //感觉加不加populate没有必要，加了可能会影响查询字段
    if (!answer) {
      ctx.throw(404, "问题不存在");
    }
    ctx.body = answer;
  }
  async create(ctx) {
    ctx.verifyParams({
      content: { type: "string", required: true }
      //Answerer: { type: "string", required: true }
    });
    const answer = await new Answer({
      ...ctx.request.body,
      answerer: ctx.state.user._id,
      questionId: ctx.params.questionId
    }).save();
    ctx.body = answer;
  }
  async del(ctx) {
    const answer = await Answer.findByIdAndRemove(ctx.params.id);
    if (!answer) ctx.throw(404, "问题不存在");
    ctx.status = 204;
  }
  async update(ctx) {
    ctx.verifyParams({
      content: { type: "string", required: false },
    });
    const answer = await Answer.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    ctx.body = answer;
  }
}

module.exports = new AnswerCtrl();
