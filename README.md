## 使用开发语言node 

   1.博客服务端应用

   2.服务端框架express

   3.进程管理器pm2 需要提前安装 npm install -g pm2

## 启动方式

   1.npm start 默认开启进程监听

   2.默认启动端口为3001 127.0.0.1:3001

   3.端口修改方式为 环境变量 PORT=端口 npm start 或者 npm start -- -p 端口
   
   4.1000一下 需要suod权限默认启动不成功 建议不要1000一下

## 跳转控制器在router下单独文件为单独控制器

   1.路由配置为config下router.js 哈希表存放即可

   2.如果路由存在但是没有相应控制器可能会报错

   3.日志文件在logs下对象文件夹 文件

   4.日志配置项config下logger.json 日志记录使用log4js

   5.启动入口为bin/start 文件 node 执行即可启动
   