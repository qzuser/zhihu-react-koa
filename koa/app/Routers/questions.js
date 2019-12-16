const Router = require("koa-router");
const jwt = require("koa-jwt");
const { secret } = require("../config");
const {
  find,
  create,
  del,
  findById,
  update,
  checkQuestioner,
  checkQuestionExist,
} = require("../controllers/questions");


const router = new Router({ prefix: "/questions" });
const auth = jwt({ secret });

router.get("/", find);
router.get("/:id", findById);
router.post("/create", auth, create);
router.delete("/:id", auth, checkQuestionExist, checkQuestioner, del);
router.patch("/:id", auth, checkQuestionExist, checkQuestioner, update);
module.exports = router;
