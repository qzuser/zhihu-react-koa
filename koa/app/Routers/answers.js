const Router = require("koa-router");
const jwt = require("koa-jwt");
const { secret } = require("../config");
const {
  find,
  create,
  del,
  findById,
  update,
  checkAnswerer,
  checkAnswerExist,
} = require("../controllers/answers");


const router = new Router({ prefix: "/questions/:questionId/answers" });
const auth = jwt({ secret });

router.get("/", find);
router.get("/:id", findById);
router.post("/create", auth, create);
router.delete("/:id", auth, checkAnswerExist, checkAnswerer, del);
router.patch("/:id", auth, checkAnswerExist, checkAnswerer, update);
module.exports = router;
