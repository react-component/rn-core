## 基于Facebook的开发套件

不打包框架代码

1. 全局安装打包工具
```
$ tnpm install @alipay/antpack -g
```

2. 项目依赖配置
```
"devDependencies": {
  "@alipay/antpack": "^0.0.6"
}
```
`tnpm install`

3. 打包命令
```
antpack bundle --entry-file  entry/file/path.js --bundle-output out/file/path.jsbundle --platform ios/android
```