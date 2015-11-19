## 基于Facebook的开发套件

不打包框架代码，基于官方`0.14.2`

1. 全局安装打包工具
```
$ tnpm install @alipay/antpack -g
```

2. 项目依赖配置
```
"devDependencies": {
  "@alipay/antpack": "^0.0.7"
}
```
`tnpm install`

3. 打包命令
```
$ antpack bundle --entry-file  entry/file/path.js --bundle-output out/file/path.jsbundle --platform ios/android
```

新增参数: `--include-framework`: 是否把`react-native`框架及polyfill代码打包进去，默认`false`

4. http服务命令
```
$ antpack start
```

url新增请求参数`framework=true`: 是否把`react-native`框架及polyfill代码打包进去，默认`false`