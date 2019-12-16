const Koa = require("koa");
const koaBody = require("koa-body");
const koaStatic = require('koa-static');
const Routes = require('./Routers')
const error = require("koa-json-error");
const parameter = require('koa-parameter');
const mongoose = require('mongoose')
const path = require('path');
const { connectionStr } = require('./config');
const app = new Koa();

/**mongoose配置，消除警告 */
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(connectionStr, () => console.log('mongodb连接成功'));
mongoose.connection.on('error', console.error);

app.use(koaStatic(path.join(__dirname, '/public'))) /**这个目录下面的文件就是静态文件*/
app.use(error({
  postFormat: (err, {stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack, rest}
}))
app.use(koaBody({
  multipart: true,
  formidable:{
    uploadDir: path.join(__dirname, 'public/upload'),
    keepExtensions: true
  }
}));
app.use(parameter(app));
Routes(app)
app.listen(3000, () => console.log('程序启动在3000端口了'));
