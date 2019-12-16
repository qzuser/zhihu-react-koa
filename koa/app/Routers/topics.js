const Router = require("koa-router");
const jwt = require("koa-jwt");
const { secret } = require("../config");
const {
  find,
  create,
  findById,
  update,
  listTopicFollowings,
  checkTopicExist,
  listQuestions
} = require("../controllers/topics");


const router = new Router({ prefix: "/topics" });
const auth = jwt({ secret });

router.get("/", find);
router.get("/:id", findById);
router.post("/create", auth, create);
router.patch("/:id", auth, checkTopicExist, update);
router.get("/:id/followers", checkTopicExist, listTopicFollowings);
router.get('/:id/questions', listQuestions);
module.exports = router;
