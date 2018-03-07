# react-router-redux-eslint-parcel
### 安装

```
npm i  antd axios bundle-loader classnames history immutable lodash prop-types react react-dom react-loadable react-redux react-router react-router-dom react-router-redux redux redux-logger redux-thunk reqwest -S
```

```
npm i autoprefixer babel-eslint babel-plugin-import babel-plugin-syntax-dynamic-import babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-runtime babel-preset-env babel-preset-react babel-runtime body-parser eslint eslint-plugin-prettier eslint-plugin-react express less@2.x mockjs node-sass parcel-bundler postcss-modules prettier rimraf -D
```


## NPM构建

```
npm install       # 安装依赖模块
```

```
npm start     # 运行开发环境，默认监听8888端口
```

```
npm run build     # 正式打包，用于生产环境
```

```
npm run dist     # 运行正式打包后的最终文件（build目录下的文件），默认监听8888端口
```

```
npm prettier       # 自动格式化src、mock目录下的所有.js/.css/.scss/.less文件
```

## 分支

* 主分支：Parcel打包工具，自带HMR，react-loadable代码分割
* react-router-redux-eslint-parcel-webpack分支：webpack打包工具，bundle-loader代码分割

## 特性

* HMR局部热替换

* 代码分割按需加载

* Prettier自动代码格式化

* HappyPack多线程编译(webpack分支)

* 最终打包后，会在/build文件夹下生成最终代码。


## 更新日志 Update log
* 2018-02-24
  <br/>1.使用了Parcel对项目进行打包，主分支移除了webpack及相关插件
  <br/>2.建立了react-router-redux-eslint-parcel-webpack分支，沿用webpack
  <br/>3.主分支代码分割有所变化，参见src/a_container/root/index.js
* 2018-02-23
    <br/>1.增加了prettier自动代码格式化，npm run prettier 将自动按照prettier风格对{src,mock}/**/*.{js,css,scss,less}的文件进行格式化
    <br/>2.Eslint现在会根据pretter风格进行代码检测，不符合的会在控制台输出warning
* 2018-02-21
  <br/>1.mock改为随server.js一起使用，请求在server.js中有配置。代码正式打包不再包含mock
* 2018-01-25
  <br/>1.propTypes父级参数类型判断均提到了class的顶部
  <br/>2.高阶组件等方法均用@修饰器提到了class的顶部，比如@connect、@From.create
* 2018-01-10
  <br/>1.className均改为module形式,自动设置局部css命名空间
  <br/>2.npm i classnames --save, 用于添加多个className时，对所有className进行封装
* 2018-01-07
  <br/>1.支持修饰器，修改了Eslint的检测规则
  <br/>2.支持class中定义箭头函数的语法
  <br/>3.Babel插件设置细节调整
  <br/>4.增加了依赖清单说明(依赖清单.js)
* 2017-11-10
  <br/>1.action均改为async/await形式
  <br/>2.加入mock模拟数据测试ajax请求
  <br/>3.加入axios库，可用于fetch请求，reqwest仍然保留
  <br/>4.a_container/root/index.js中用render方法渲染路由，加入了模拟onEnter方法的例子
* 2017-10-13
  <br/>1.HMR热更新现在使用了webpack-dev-middleware 和 webpack-hot-middleware 的配置方式
  <br/>2.更合理的路由跳转方式
  <br/>3.其他包更新
* 2017-10-11
  <br/>1.加入代码分割的例子，运用bundle-loader的懒加载方式
  <br/>2.babel-preset-env代替原来的其他babel插件
* 2017-09-21
  <br/>1.主分支master也已升级为react-router 4.2
  <br/>2.其他包更新

* 2017-09-13
  <br/>1.创建了新的分支 配置了react-router 4.0

* 2017-09-07
  <br/>1.使用react-hot-loader 3.0.0 配置了HMR热替换，不再需要以前的静态资源预编译了
  <br/>2.配置了Antd自定义主题所需的代码，现在可以直接在package.json中的theme字段定义自己的Antd主题


## 目录结构 Structure

```
.
├── build				# 正式打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
├── mock				# Mock.js模拟数据相关配置
├── src                                 # 项目代码目录
│   ├── a_action                        # 所有的action
│   ├── a_component                     # 所有的公共类UI组件
│   ├── a_container                     # 所有的页面级容器组件
|	├── ...
|   	└── root			# 根页，里面配置了顶级的路由
│   ├── a_reducer                       # 所有的reducer
│   ├── assets                          # 所有的图片、文件等静态资源
│   ├── styles                          # 所有的样式文件
│   ├── store                           # store数据中心
│   ├── util                            # 自己封装的常用工具函数（字符串转换，API请求什么的）
│   ├── index.js                        # 项目入口JS
│   ├── index.html			# 主页html文件,生产环境打包使用
│   └── index-mock.html                 # 主页html文件,开发环境使用（自带mock模拟数据）
└── server.js				# 用于开发环境的服务部署

```


## 参阅资料 Consult
React GitHub地址：https://github.com/facebook/react <br/>
react-router GitHub地址：https://github.com/ReactTraining/react-router <br/>
React官方更新日志：https://github.com/facebook/react/releases <br/>
React16更新内容：http://blog.csdn.net/lx376693576/article/details/78192768 <br/>
mockjs官网：http://mockjs.com/ <br/>
Eslint中文站：http://eslint.cn/ <br/>
Parcel中文站：https://parceljs.org/ <br/>
