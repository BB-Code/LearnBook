## Object.defineProperty（访问器属性）

```js
var book ={
    _year:2004,
    edition: 1
};

Object.defineProperty(book,"year",{
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
console.log(book.edition);
```

```js
var book ={
    _year:2004,
    edition: 1
};

book.__defineGetter__("year",function(){
    return this._year;
});
book.__defineSetter__("year",function(newValue){
    if(newValue > 2004){
        this._year = newValue;
        this.edition += newValue - 2004;
    }
});

book.year = 2005;
console.log(book.edition);
```

## Object.defineProperties(定义多个属性)


```js
var book = {};

Object.defineProperties(book,{
    _year:{
        value: 2004
    },
    edition:{
        value: 1
    },
    year:{
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if(newValue > 2004){
                this_year = newValue;
                this.edition += newValue;
            }
        }
    },
   
})
```

## Object.getOwnPropertyDescriptor(读取属性的特征)

- 访问器属性 (configurable,enumerable,get,set) 
- 对象属性 (configureable,enumerable,writable,value)

```js
var desc = Object.getOwnPropertyDescriptor(book,"_year");
console.log(desc.value);//2004
console.log(desc.configurable);//false
console.log(typeof desc.get);//undefine

console.log("---------");

var desc = Object.getOwnPropertyDescriptor(book,"year");
console.log(desc.value);//undefine
console.log(desc.enumerable);//false
console.log(typeof desc.get);//function
```

## 工厂模式

```js
function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return 0;
}

var p1 = new createPerson('Mike',22,'Engineer');
var p2 = new createPerson('John',24,'Doctor');

```

## 构造函数模式

- 缺点： 每个实例创建一遍，不同的Function实例

```js
this.sayName = new Function('console.log(this.name)');
等价于
this.sayName = function(){
        console.log(this.name);
};

console.log(p1.sayName == p2.sayName);//false

```

- 虽然解决了两个函数做同一件事，但污染全局环境，不可取

```js

function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName(){
    console.log(this.name);
}

```

```js
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    };
}

//构造函数调用
var p1 = new Person('Mike',22,'Engineer');
var p2 = new Person('John',24,'Doctor');
p1.sayName();//Mike

//普通函数调用
Person('Grey',25,'Teacher');
window.sayName();//Grey

//另外一个对象的作用域中调用
var o = new Object();
Person.call(o,"Uzi",22,"Gamer");
o.sayName();//Uzi

console.log(p1.constructor == Person);//true
console.log(p2.constructor == Person);//true

console.log(p1 instanceof Object);//true
console.log(p1 instanceof Person); //true
console.log(p2 instanceof Object);//true
console.log(p2 instanceof Person); //true

```