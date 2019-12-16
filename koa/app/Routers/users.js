const Router = require('koa-router');
const jwt = require('koa-jwt');
const { secret } = require("../config");

const router = new Router({ prefix: "/users" });
const {
  find,
  findById,
  create,
  update,
  deleteById,
  login,
  listFollowing,
  listFollowers,
  checkUserIsExist,
  follow,
  unfollow,
  listFollowingTopics,
  followTopics,
  unfollowTopics,
  listQuestions,
  listLikingAnswers,
  listDislikingAnswers,
  likeAnswer,
  unlikeAnswer,
  dislikeAnswer,
  undislikeAnswer,
  listCollectingAnswers,
  collectAnswer,
  uncollectAnswer
} = require("../controllers/users");

const { checkTopicExist } = require("../controllers/topics");
const { checkAnswerExist } = require("../controllers/answers");
// const auth = async(ctx, next) => {
//   const {authorization = ''} = ctx.request.header;
//   const token = authorization.replace('Bearer ', '');
//   try{
//     const user = jsonwebtoken.verify(token, secret);
//     ctx.state.user = user;
//   }catch(err){
//     ctx.throw(401, '1111111')
//   }

//   await next();
// }

//postman全局token未解决
const auth = jwt({secret});
// const checkOwner = async(ctx, next) => {
//   if(ctx.params.id !== ctx.state.user._id){
//     ctx.throw(403, 'you are 无权限')
//   }
//   await next();
// }
router.get("/", find);
router.post("/", create);
router.get("/:id", findById);
router.patch("/:id", auth, update);
router.delete("/:id", auth, deleteById);
router.post('/login', login);
//  关注的人   粉丝   关注    取消关注  
router.get("/:id/following", listFollowing);
router.get("/:id/followers", listFollowers);
router.put('/follow/:id', auth, checkUserIsExist, follow);
router.delete("/unfollow/:id", auth, checkUserIsExist, unfollow);
//   关注的话题  关注   取消关注
router.get("/:id/followingTopics", listFollowingTopics);
router.put("/followTopics/:id", auth, checkTopicExist, followTopics);
router.delete("/unfollowTopics/:id", auth, checkTopicExist, unfollowTopics);
//一个人的问题
router.get("/:id/questions", listQuestions);
//  赞的答案     赞    取消赞
router.get("/:id/likeAnswers", listLikingAnswers);
router.put("/likeAnswers/:id", auth, checkAnswerExist, likeAnswer, undislikeAnswer);
router.delete("/likeAnswers/:id", auth, checkAnswerExist, unlikeAnswer);
//   踩的答案    踩    取消踩
router.get("/:id/dislikeAnswers", listDislikingAnswers);
router.put("/dislikeAnswers/:id", auth, checkAnswerExist, dislikeAnswer, unlikeAnswer);
router.delete("/dislikeAnswers/:id", auth, checkAnswerExist, undislikeAnswer);
//  收藏的答案   收藏  取消收藏
router.get("/:id/collectAnswers", listCollectingAnswers);
router.put("/collectAnswers/:id", auth, checkAnswerExist, collectAnswer);
router.delete("/collectAnswers/:id", auth, checkAnswerExist, uncollectAnswer);

module.exports = router;