const path = require('path');

class HomeCtrl{
  index(ctx){
    ctx.body = '这是主页'
  }
  upload(ctx){
    const file = ctx.request.files.file;//获取上传文件
    const basename = path.basename(file.path);
    ctx.body = {url: `${ctx.origin}/upload/${basename}`}
    /**了解细节 */
  }
}

module.exports = new HomeCtrl();