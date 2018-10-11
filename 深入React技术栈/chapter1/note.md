## 现代前端开发

- ES6
- Component
- Tools
	- Package Manager（包管理）
	- Task Runner （任务流）
	- Bundler （模块打包）


## ES6(ES2015)

- 语言特性
	- const(常量,引用类型可以修改对象属性),let(块级作用域)
	- Arrow函数（语法糖）
		- this在Arrow 的使用
		- 函数默认参数（Rest参数） arguments不是真正的数组，Rest参数才是
	- 展开操作符
		- 函数调用
		- 数组字面量
		- 结构赋值
			- 解构数组
			- 解构对象
		- 模板字符串
	- 类
		- constructor
		- static
		- super(在非构造函数使用时采用super(). + 方法名)
		- extends
	- 模块
		- AMD(Require.js)
		- CommonJS(Browserify)
		- ES6(babel) 
			- 配置（.bebelrc）

## 前端组件化方案

- 模块（语言层）
- 组件（业务层）
	- javascript的模块化方案为基础
- javascript的模块化方案
	- 第一阶段 全局变量+ 命名空间（jQuery）
		- 缺点： 不安全性，不可靠性，不容错性，需手动
	- 第二阶段 AMD & CommonJS
	- 第三阶段 ES6
- 前端的模块化组件化
	- 第一阶段 基于**命名空间**多入口文件组件
	- 第二阶段 基于**模块**多入口文件组件
	- 第三阶段 单javascript入口组件（主流）
	- 第四阶段 web Component(浏览器支持还不够)

## 辅助工具

- Package Manager（包管理）
	- npm, Bower,Component,spm
- Task Runner （任务流）
	- grunt(Gruntfile.js),gulp(gulpfile.js)流
- Bundler （模块打包）
	- browserify
	- webpack