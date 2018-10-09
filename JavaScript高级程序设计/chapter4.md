- ECMAScript: 

  - 基本数据类型
    - Undefined,Null,Boolean,Number,String
  -  引用类型

  > javascript 不允许直接访问内存的位置，也就是不能直接操作对象的内存空间

- 动态的属性

  - 只能给**引用类型值**动态地添加属性
  - 复制值变量，复制基本数据类型值,变量完全独立
    - ![1539082975268](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539082975268.png)
  - 复制引用类型值,值是指针,指向**堆**中的同一个对象
    - ![1539083008421](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539083008421.png)

- 传递参数

  - 函数的**参数**都是**按值传递**的，参数只能按值传递
  - 被传递的值复制给一个局部变量
    -	![1539083435041](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539083435041.png)
  - 参数是对象的比较难理解
    - ![1539083700590](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539083700590.png)
    - ![1539083808288](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539083808288.png)


- 检查类型

  - 基本类型用 **typeof**
  - 引用类型用 **instanceof**
  - 扩展  
    - typeof 正则表达式时,在不同浏览器和规范下，会出现的结果是 **function**(Safari 5及前,Chrome 7及前),**object**(IE,Firfox)


- 执行环境及作用域
  -  变量或函数有权访问其他数据，决定各自的行为叫执行环境（解析器）
  -  全局环境(作为**window**对象创建的)，最外围执行环境（线性的,有序的），关闭网页或浏览器销毁
  -  环境执行，会创建变量对象（活动对象）的 **作用域链**（作用: 变量和函数的有效访问）
  -  内部环境访问外部环境，外部不能访问内部环境的任何变量和函数
     -  ![1539084883852](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539084883852.png)


- 延迟作用域链
  - 1. try-catch 语句的catch块 （IE9 修复了catch外部也能访问错误对象）
  - 2. with 语句 
  	- ![1539085160018](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1539085160018.png)
  	

- 没有块级作用域
  - javascript 没有块级作用域（if,for 能体现到）
    - 没有使用var声明, 该变量会添加到全局变量
    - 在严格模式下，初始化未声明的变量会导致错误
    - 查寻标识符（作用域链）
    - 访问局部变量要比全局变量更快

- 垃圾收集
  - javascript 有自动垃圾收集机制,找到不继续使用的变量,释放占用的内存，有固定的时间间隔（周期性）
  - 局部变量只在函数执行时存在
  - 两个策略
    - 标记清除 进入环境=》离开环境 内存清除工作
    - 引用计数 
      - 跟踪记录每个值的引用次数 
      - Netscape Navigator 3.0 最早使用，但遇到循环引用的问题，Netscape Navigator4.0 放弃引用计数方式，采用标记清除
      - IE javascript 引擎用标记清除，访问的COM对象是引用计数 
      - 为避免循环引用的问题，要将变量设置null,切断变量与它之前引用值得连接
      - IE 把BOM DOM 对象转换成真正的javascript 对象
  - 性能问题
    - window.collectGarbage( ) IE执行垃圾收集的方法
    - window.opera.collect( )  Opera 7以及高版本执行垃圾收集的方法
  - 内存管理
    - 解除引用(设置为null)
    - 全局变量需要我们手工解除引用
    - 解除引用的作用并不是意味着回收该变量所占的内存，而是让值脱离执行环境，以便垃圾收集器下次运行时将其回收