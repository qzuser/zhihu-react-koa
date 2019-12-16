const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/users");
const Question = require("../models/questions");
const Answer = require("../models/answers");
const { secret } = require("../config");
class UserCtrl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query;
    const page = Math.max(ctx.query.page, 1) - 1;
    const perPage = Math.max(per_page, 1);
    ctx.body = await User.find({ name: new RegExp(ctx.query.q) })
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
    const populateStr = fields
      .split(";")
      .filter(f => f)
      .map(v => {
        if (v === "employments") return "employments.company employments.job";
        if (v === "educations") return "educations.school, educations.major";
        return v;
      })
      .join(" ");
    const user = (ctx.body = await User.findById(ctx.params.id)
      .select(selectFields)
      .populate(populateStr));
    if (!user) {
      ctx.throw(404, "用户不存在");
    }
    ctx.body = user;
  }
  async create(ctx) {
    ctx.verifyParams({
      name: { type: "string", required: true },
      password: { type: "string", required: true }
    });
    const { name } = ctx.request.body;
    const repeatName = await User.findOne({ name });
    if (repeatName) ctx.throw(409, "用户名冲突");
    const user = await new User(ctx.request.body).save();
    ctx.body = user;
  }

  async update(ctx) {
    ctx.verifyParams({
      name: { type: "string", required: false },
      password: { type: "string", required: false },
      avatar_url: { type: "string", required: false },
      gender: { type: "string", required: false },
      headline: { type: "string", required: false },
      locations: { type: "array", itemType: "string", required: false },
      business: { type: "string", required: false },
      employments: { type: "array", itemType: "object", required: false },
      educations: { type: "array", itemType: "object", required: false }
    });
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    if (!user) ctx.throw(404, "用户不存在");
    ctx.body = user;
  }
  async deleteById(ctx) {
    const user = User.findByIdAndRemove(ctx.params.id);
    if (!user) ctx.throw(404, "用户不存在");
    ctx.status = 204;
  }
  async login(ctx) {
    ctx.verifyParams({
      name: { type: "string", required: true },
      password: { type: "string", required: true }
    });
    const user = await User.findOne(ctx.request.body);
    if (!user) ctx.throw(401, "用户名或密码不正确");
    const { _id, name } = user;
    const token = jsonwebtoken.sign({ _id, name }, secret, { expiresIn: "1d" });
    ctx.body = { token };
  }
  async listFollowing(ctx) {
    const user = await User.findById(ctx.params.id)
      .select("+following")
      .populate("following");
    if (!user) ctx.throw(404, "用户不存在");
    ctx.body = user.following;
  }
  async listFollowers(ctx) {
    const users = await User.find({ following: ctx.params.id });
    ctx.body = users;
  }
  async checkUserIsExist(ctx, next) {
    const user = await User.findById(ctx.params.id);
    if (!user) {
      ctx.throw(404, "用户不存在");
    }
    await next();
  }
  async follow(ctx) {
    const me = await User.findById(ctx.state.user._id).select("+following");
    if (!me.following.map(id => id.toString()).includes(ctx.params.id)) {
      me.following.push(ctx.params.id);
      me.save();
    }
    ctx.status = 204;
  }
  async unfollow(ctx) {
    const me = await User.findById(ctx.state.user._id).select("+following");
    const index = me.following.map(id => id.toString()).indexOf(ctx.params.id);
    if (index > -1) {
      me.following.splice(index, 1);
      me.save();
    }
    ctx.status = 204;
  }
  async listFollowingTopics(ctx) {
    const user = await User.findById(ctx.params.id)
      .select("+followingTopics")
      .populate("followingTopics");
    if (!user) ctx.throw(404, "用户不存在");
    ctx.body = user.followingTopics;
  }
  async followTopics(ctx) {
    const me = await User.findById(ctx.state.user._id).select(
      "+followingTopics"
    );
    if (!me.followingTopics.map(id => id.toString()).includes(ctx.params.id)) {
      me.followingTopics.push(ctx.params.id);
      me.save();
    }
    ctx.status = 204;
  }
  async unfollowTopics(ctx) {
    const me = await User.findById(ctx.state.user._id).select(
      "+followingTopics"
    );
    const index = me.followingTopics
      .map(id => id.toString())
      .indexOf(ctx.params.id);
    if (index > -1) {
      me.followingTopics.splice(index, 1);
      me.save();
    }
    ctx.status = 204;
  }
  //这个人有哪些问题
  async listQuestions() {
    const question = await Question.find({ questioner: ctx.params.id });
    ctx.body = question;
  }
  //下面三个接口分别为   喜欢的答案     点赞     取消赞
  async listLikingAnswers(ctx) {
    const user = await User.findById(ctx.params.id)
      .select("+likingAnswers")
      .populate("likingAnswers");
    if (!user) ctx.throw(404, "用户不存在");
    ctx.body = user.likingAnswers;
  }
  async likeAnswer(ctx, next) {
    console.log("start");
    const me = await User.findById(ctx.state.user._id).select("+likingAnswers");
    if (!me.likingAnswers.map(id => id.toString()).includes(ctx.params.id)) {
      me.likingAnswers.push(ctx.params.id);
      me.save();
      await Answer.findByIdAndUpdate(ctx.params.id, { $inc: { voteCount: 1 } });
    }
    ctx.status = 204;
    await next();
  }
  async unlikeAnswer(ctx) {
    const me = await User.findById(ctx.state.user._id).select("+likingAnswers");
    const index = me.likingAnswers
      .map(id => id.toString())
      .indexOf(ctx.params.id);
    if (index > -1) {
      me.likingAnswers.splice(index, 1);
      me.save();
      await Answer.findByIdAndUpdate(ctx.params.id, {
        $inc: { voteCount: -1 }
      });
    }
    ctx.status = 204;
  }

  async listDislikingAnswers(ctx) {
    const user = await User.findById(ctx.params.id)
      .select("+dislikingAnswers")
      .populate("dislikingAnswers");
    if (!user) ctx.throw(404, "用户不存在");
    ctx.body = user.dislikingAnswers;
  }
  async dislikeAnswer(ctx, next) {
    const me = await User.findById(ctx.state.user._id).select(
      "+dislikingAnswers"
    );
    if (!me.dislikingAnswers.map(id => id.toString()).includes(ctx.params.id)) {
      me.dislikingAnswers.push(ctx.params.id);
      me.save();
      await Answer.findByIdAndUpdate(ctx.params.id, { $inc: { voteCount: 1 } });
    }
    ctx.status = 204;
    await next();
  }
  async undislikeAnswer(ctx) {
    const me = await User.findById(ctx.state.user._id).select(
      "+dislikingAnswers"
    );
    const index = me.dislikingAnswers
      .map(id => id.toString())
      .indexOf(ctx.params.id);
    if (index > -1) {
      me.dislikingAnswers.splice(index, 1);
      me.save();
      await Answer.findByIdAndUpdate(ctx.params.id, {
        $inc: { voteCount: 1 }
      });
    }
    ctx.status = 204;
  }
  async listCollectingAnswers(ctx) {
    const user = await User.findById(ctx.params.id)
      .select("+collectingAnswers")
      .populate("collectingAnswers");
    if (!user) ctx.throw(404, "用户不存在");
    ctx.body = user.collectingAnswers;
  }
  async collectAnswer(ctx, next) {
    const me = await User.findById(ctx.state.user._id).select(
      "+collectingAnswers"
    );
    if (!me.collectingAnswers.map(id => id.toString()).includes(ctx.params.id)) {
      me.collectingAnswers.push(ctx.params.id);
      me.save();
      await Answer.findByIdAndUpdate(ctx.params.id, { $inc: { voteCount: 1 } });
    }
    ctx.status = 204;
    await next();
  }
  async uncollectAnswer(ctx) {
    const me = await User.findById(ctx.state.user._id).select(
      "+collectingAnswers"
    );
    const index = me.collectingAnswers
      .map(id => id.toString())
      .indexOf(ctx.params.id);
    if (index > -1) {
      me.collectingAnswers.splice(index, 1);
      me.save();
      await Answer.findByIdAndUpdate(ctx.params.id, {
        $inc: { voteCount: -1 }
      });
    }
    ctx.status = 204;
  }
}

module.exports = new UserCtrl();
