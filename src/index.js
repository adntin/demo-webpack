console.log('hello world!');

// --------------------------------------------------
// yarn add -D babel-loader @babel/core @babel/preset-env
// 如果没有用babel-loader处理, 原样输出

const fn = () => {
  console.log('arrow function');
};
fn();

// --------------------------------------------------
// yarn add -D @babel/plugin-proposal-class-properties
// yarn add -D @babel/plugin-proposal-decorators

@testable(true) // 类装饰器, stage 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  legs = 2; // 类属性, stage 2

  @enumerable(false) // 类方法装饰器, stage 1
  getAge() {
    return this.age;
  }

  @enumerable(true) // 类方法装饰器, stage 1
  getName() {
    return this.name;
  }
}

function testable(value) {
  return function decorator(target) {
    target.testable = value;
  };
}

function enumerable(value) {
  return function(target, key, descriptor) {
    descriptor.enumerable = value;
    return descriptor;
  };
}

const person = new Person('web', 20);
console.log('person.legs', person.legs);
console.log('Person.testable', Person.testable);
// for...in 包括原型上可枚举属性或方法
for (const key in person) {
  console.log('person instance key:', key);
}
// for (const key in person.__proto__)
// for (const key in Person.prototype) {
//   console.log('Person prototype key:', key);
// }

// --------------------------------------------------
// 会生成相同代码, _classCallCheck

import './one';

// --------------------------------------------------
// 未安装包时, 会添加regeneratorRuntime方法, 不会自动引入内置api
// 开发需要 @babel/plugin-transform-runtime
// 生产需要 @babel/runtime
// 如果有用到generator语法, 且.browserlistrc文件中设置为非现代浏览器, 则动态引入 @babel/runtime/regenerator/index.js

function* gen() {
  yield 'generator';
}

console.log(gen().next());

// --------------------------------------------------
// @babel/runtime 不会对实例方法添加兼容, 比如: "foobar".includes("foo")
// yarn add @babel/polyfill
// 一定要在.babelrc文件中设置"useBuiltIns": "usage", 因为它可以按需引入兼容方法, 入口文件不需要 import '@babel/polyfill';
// 如果未设置"useBuiltIns": "usage", 则会把全部兼容方法打包到入口文件

// core-js/modules/es.string.includes.js
const includes = 'foobar'.includes('foo');
console.log('includes:', includes);

// core-js/modules/es.array.includes.js
const includes2 = [1, 2, 3].includes(1);
console.log('includes2:', includes2);
