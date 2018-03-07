# react-router-redux-parcel
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
