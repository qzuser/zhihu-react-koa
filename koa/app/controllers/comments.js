const Comment = require("../models/comments");

class CommentCtrl {
  async checkCommentExist(ctx, next) {
    const comment = await Comment.findById(ctx.params.id).select("+commentor");
    //select why?  优化代码，用了这个中间件的后面代码就不用findbyid了
    if (!comment) {
      ctx.throw(404, "评论不存在");
    }
    //只有路由中包含questionId时才进行比对，赞和踩答案时不检查
    if (ctx.params.questionId && comment.questionId !== ctx.params.questionId) {
      ctx.throw(404, "该问题下没有此答案");
    }
    ctx.state.comment = comment;
    await next();
  }
  async checkCommenter(ctx, next) {
    const { comment } = ctx.state;
    if (comment.commentor.toString() !== ctx.state.user._id)
      ctx.throw(403, "无权限");
    await next();
  }
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page, 1) - 1;
    const perPage = Math.max(per_page, 1);
    const q = new RegExp(ctx.query.q);
    const {questionId, answerId} = ctx.params
    ctx.body = await Comment.find({
      content: q,
      questionId,
      answerId
    })
      .limit(perPage)
      .skip(page * perPage).populate('commentor')
  }
  async findById(ctx) {
    const { fields = "" } = ctx.query;
    const selectFields = fields
      .split(";")
      .filter(f => f)
      .map(v => "+" + v)
      .join(" ");
    const comment = (ctx.body = await Comment.findById(ctx.params.id)
      .select(selectFields)
      .populate("commentor"));
    //感觉加不加populate没有必要，加了可能会影响查询字段
    if (!Commcommentent) {
      ctx.throw(404, "问题不存在");
    }
    ctx.body = comment;
  }
  async create(ctx) {
    ctx.verifyParams({
      content: { type: "string", required: true }
      //Commenter: { type: "string", required: true }
    });
    const comment = await new Comment({
      ...ctx.request.body,
      commentor: ctx.state.user._id,
      questionId: ctx.params.questionId
    }).save();
    ctx.body = Comment;
  }
  async del(ctx) {
    const comment = await Comment.findByIdAndRemove(ctx.params.id);
    if (!comment) ctx.throw(404, "问题不存在");
    ctx.status = 204;
  }
  async update(ctx) {
    ctx.verifyParams({
      content: { type: "string", required: false },
    });
    const comment = await Comment.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    ctx.body = comment;
  }
}

module.exports = new CommentCtrl();
