# zhihu-react-koa
使用React+Koa2框架实现了知乎网站的部分功能。这是一个Restful风格的网站，包括知乎首页，新闻详情页，写文章页，登陆页。该项目技术栈为：  

使用React hook编写函数组件来取代传统的class组件；  

通过redux来进行状态管理，通过react-redux以简化redux的使用；  

充分运用了社区优秀的组件，例如axios，redux-thunk，immutable.js，redux-immutable，styled-components，react-router-dom；  

后端采用Koa2，使用了很多常见Koa模块，如jsonwebtoken，koa-router，koa-static等；  

使用mango数据库存储数据，并借助mongoose模块查询数据库；  

[前端演示](https://github.com/qzuser/zhihu-react-koa/blob/master/zhihu.gif)  

[后端API演示](https://github.com/qzuser/zhihu-react-koa/blob/master/api.gif)  

*总结：从10月份开始写这个项目的前端部分，写了10多天，写了大概2000多行代码。写的时候感觉react不是很难，因为逻辑都差不多，感觉再写更多的页面也不会有提高了。于是放下react去学习nodejs了，直接上手koa，准备给项目加个服务端，然后再弄个服务器端渲染（next.js）嗯...想法总是好的，然而过了半个月，当我写完API后准备把项目捏到一起时我发现我看不懂我写的react代码了。what?!!这是什么东西，乱糟糟的一团...我甚至花费了2天时间才把半个月前写的代码看的有点眉目。为什么会这样呢，结论就是自己代码写的太臃肿了，有的地方也很暴力，逻辑很混乱，样式也不够清晰...深深的感受到自己的react学的还远远不到位，以后还要继续努力啊！*
