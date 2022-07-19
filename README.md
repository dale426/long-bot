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