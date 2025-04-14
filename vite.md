# vite

特点

- 开发效率极高
- 开箱即用
- rollup
- 超高速热重载
- 预设应用和类库打包模式

使用简单--例如已经集成了devServer

快--- 启动项目只需要几秒，

便于扩展 

**vite 本身没有编译能力，他的编译能力源于esbuild和rollup，vite本身不参与编译。他开发时完全基于esm加载方式进行**

#### 相比于webpack减少的工作

​		vite中已经内置了

1. dev server
2. 各类loader
3. build命令

### 速度快的

传统模式，根据所有的文件进行打包

vite 访问到入口文件，是依托于浏览器的





