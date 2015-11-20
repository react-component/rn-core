## 基于Facebook的开发套件
> 基于官方`0.14.2`

1. 全局安装打包工具

    ```
    $ tnpm install @alipay/antpack -g
    ```

2. 项目依赖配置

    在rn工程项目`package.json`中配置后执行`tnpm install`
    ```
    "devDependencies": {
          "@alipay/antpack": "~0.0.1"
    }
    ```

3. 打包命令
> 在项目工程根目录下执行打包命令，默认不打包框架代码及polyfills

    ```
    $ antpack bundle --entry-file  entry/file/path.js --bundle-output out/file/path.jsbundle --platform ios
    ```
    Options:
    *  --entry-file         Path to the root JS file, either absolute or relative to JS root                       [required]
    *  --platform           Either "ios" or "android"                                                              [required]
    *  --include-framework  Whether to bundle include module `react-native` and polyfills                          [default: false]
    *  --transformer        Specify a custom transformer to be used (absolute path)                                
    *  --dev                If false, warnings are disabled and the bundle is minified                             [default: true]
    *  --bundle-output      File name where to store the resulting bundle, ex. /tmp/groups.bundle                  [required]
    *  --sourcemap-output   File name where to store the sourcemap file for resulting bundle, ex. /tmp/groups.map
    *  --assets-dest        Directory name where to store assets referenced in the bundle
    *  --verbose            Enables logging                                                                        [default: false]
    
    新增参数: `--include-framework`: 是否把`react-native`框架及polyfill代码打包进去，默认`false`

    单独打框架
    ```
    $ antpack bundle --entry-file node_modules/\@alipay/antpack/src/react-native/Libraries/react-native/react-native.js --bundle-output ~/Desktop/react-native-debug.js --platform ios --include-framework
    ```
4. http服务命令
```
$ antpack start
```
url新增请求参数`framework=true`: 是否把`react-native`框架及polyfill代码打包进去，默认`false`

5. 集成构建
```
var antPack = require('@alipay/antpack');
...
gulp.task('task', function(){
      return antPack.bundle({
        "--entry-file": "tests/index.ios.js",
        "--bundle-output": "tests/index.ios.bundle",
        "--platform": "ios"
      });
});
```