## 基于wechaty的微信机器人项目

### 安装

1. 安装node环境
2. npm install 安装依赖
3. 启动时会自动安装 puppet

puppet安装报错问题详见： [错误处理](https://www.yuque.com/dale/blog/rvgk64)

### ts环境搭建

安装ts的相关依赖`typescript`, `ts-node`, `tslib`, `@types/node`
```shell
npm install -D typescript
npm install -D ts-node
npm install -D tslib @types/node
```

`tsconfig.ts`文件中配置  `"target": "es2016", "module": "CommonJS"`这两个参数，同时package.json中不能配置 `type: module`,否则会报错

[配置项参考](https://blog.csdn.net/qq_45534118/article/details/104301916?utm_term=ts%20%E9%85%8D%E7%BD%AEpaths&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-1-104301916-null-null&spm=3001.4430)

### wechaty依赖安装

1. 设置镜像源

```shell
npm config set registry https://registry.npmmirror.com/
npm config set disturl https://npm.taobao.org/dist
npm config set puppeteer_download_host https://npm.taobao.org/mirrors
```
2. 安装依赖
```shell
npm install wechaty-puppet-wechat
npm install wechaty
```