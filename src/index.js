// import '@babel/polyfill'; // 不需要显式导入, `useBuiltIns: 'usage'`会根据代码使用情况动态引入

// 打包警告: When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed. Please remove the direct import of `core-js` or use `useBuiltIns: 'entry'` instead.
// 翻译: 当设置 useBuiltIns: 'usage' 时，根据需要自动导入polyfill。请删除“core-js”的直接导入，或者使用 useBuiltIns: 'entry' 代替。

// @babel/preset-env
// 官网: https://babeljs.io/docs/en/babel-preset-env
// 翻译: @babel/preset-env是一个智能预置，允许您使用最新的JavaScript，而不需要对目标环境所需的语法转换(以及可选的浏览器polyfill)进行微管理。这不仅使您的生活更轻松，而且JavaScript包也更小!
//      .babelrc中通过`targets`选项来设置浏览器支持的版本
//      .browserslistrc设置浏览器支持的版本(推荐)

// @babel/polyfill
// 官网: https://www.babeljs.cn/docs/babel-polyfill
// 翻译: babel 包含一个定制化的 regenerator runtime 和 core-js。
//      这将模拟整个 ES2015+ 的执行环境（不包含 < Stage 4 提案），并将用于应用程序而不是库/工具。（该 polyfill 将在使用 babel-node 时自动引入）
//      这意味着你可以使用新的内置插件，像 Promise 或 WeakMap，静态方法像 Array.from 或 Object.assign，实例方法像 Array.prototype.includes，和 generator 函数（提供给你 regenerator 插件）。本 polyfill 为了实现以上目标，向 全局作用域 和像 String 这样的 原生原型 上添加了这些方法。

// @babel/plugin-transform-runtime
// 官网: https://babeljs.io/docs/en/babel-plugin-transform-runtime
// 翻译: 一个用于开启复用 babel 注入的 helper 帮助函数（即用于辅助 babel 转译代码的函数）的插件。即，处于多个文件中的相同的 helper 帮助函数，将被提取到 babel runtime 中以实现代码复用，减小打包体积。

console.log('hello world!');

// 查找: 在 bundle.js 中根据 ./src/index.js 查找需要引入的 core-js

// --------------------------------------------------
// ES2015 === ES6
// yarn add -D babel-loader @babel/core @babel/preset-env
// 如果没有用babel-loader处理, 原样输出

// 1. arrow-functions
const arrow_function = () => {
  return 'arrow-function';
};

console.log('ES2015', 'arrow-functions', arrow_function());

// 2. block-scoped-functions
{
  function name(n) {
    return n;
  }
}
try {
  console.log('ES2015', 'block-scoped-functions', name('Devin'));
} catch (e) {
  console.log('ES2015', 'block-scoped-functions', e);
}

// 3. block-scoping
{
  let a = '1';
}
try {
  console.log('ES2015', 'block-scoping', a);
} catch (e) {
  console.log('ES2015', 'block-scoping', e);
}

// // 4. classes
// // core-js/modules/es.function.name.js
// class Student {
//   constructor(name) {
//     this.name = name;
//   }
//   logger() {
//     return 'Hello ' + this.name;
//   }
// }
// const student = new Student('Devin');
// console.log('ES2015', 'classes', student.logger());

// 5. computed-properties
let foo = 'foo';
let bar = 'bar';
var computed_properties = {
  ['x' + foo]: 'heh',
  ['y' + bar]: 'noo',
  foo: 'foo',
  bar: 'bar',
};
console.log('ES2015', 'computed-properties', computed_properties);

// // 6. destructuring
// // core-js/modules/es.array.slice.js
// const object_destructuring = { x: 1, y: 2 };
// let { x, y } = object_destructuring;
// console.log('ES2015', 'destructuring(object)', x, y);
// const array_destructuring = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = array_destructuring;
// console.log('ES2015', 'destructuring(array)', a, b, rest);

// 7. duplicate-keys
let objDuplicateKeys1 = { a: 5, a: 6 };
let objDuplicateKeys2 = {
  get a() {},
  set a(x) {},
  a: 3,
};
console.log('ES2015', 'duplicate-keys', objDuplicateKeys1, objDuplicateKeys2);

// 8. for-of
let arr = [1, 2, 3];
let result = [];
for (const i of arr) {
  result.push(i);
}
console.log('ES2015', 'for-of', result);

// 9. function-name
let num = x => x;
console.log('ES2015', 'function-name', num(1));

// 10. instanceof
class Animal {}
const isInstanceof = new Animal() instanceof Animal;
console.log('ES2015', 'instanceof', isInstanceof);

// 11. literals
let binary_integer_literal = 0b11; // binary integer literal
let octal_integer_literal = 0o7; // octal integer literal
let unicode_string_literals = 'Hello\u{000A}\u{0009}!'; // unicode string literals, newline and tab
console.log(
  'ES2015',
  'literals',
  binary_integer_literal,
  octal_integer_literal,
  unicode_string_literals,
);

// 12. new-target
function Foo() {
  return new.target;
}
let str1 = Foo(); // => undefined
let str2 = new Foo(); // => Foo
console.log('ES2015', 'new-target', str1, str2);

// 13. object-super

// 14. parameters
function test(x = 'hello', { a, b }, ...args) {
  console.log('ES2015', 'parameters', x, a, b, args);
}
test(undefined, { a: 1, b: 2 }, 3, 4, 5);

// 15. shorthand-properties
let shorthand_properties = 1;
let obj = { shorthand_properties };
console.log('ES2015', 'shorthand-properties', obj);

// // 16. spread
// // core-js/modules/es.array.concat.js
// var arr1 = ['a', 'b', 'c'];
// var arr2 = [...arr1, 'foo'];
// console.log('ES2015', 'spread', arr2);

// // 17. sticky-regex
// core-js/modules/es.regexp.constructor.js
// core-js/modules/es.regexp.to-string.js
// const sticky_regex = /o+/y;
// console.log('ES2015', 'sticky-regex', sticky_regex);

// 18. template-literals
let name = 123;
console.log('ES2015', 'template-literals', `foo${name}`);

// // 19. typeof-symbol
// // core-js/modules/es.symbol.js
// // core-js/modules/es.symbol.description.js
// // core-js/modules/es.symbol.iterator.js
// // core-js/modules/es.array.iterator.js
// // core-js/modules/es.object.to-string.js
// // core-js/modules/es.string.iterator.js
// // core-js/modules/web.dom-collections.iterator.js
// console.log('ES2015', 'typeof-symbol', typeof Symbol() === 'symbol');

// // 20. unicode-regex
// // core-js/modules/es.string.match.js
// var string = 'foo💩bar';
// var match = string.match(/foo(.)bar/u);
// console.log('ES2015', 'unicode-regex', match);

// // --------------------------------------------------
// // ES2016 === ES7

// 1. exponentiation-operator
// babel-loader 可以直接转换, 不需要core-js
let value = 10 ** 2;
console.log('ES2016', 'exponentiation-operator', value);

// // --------------------------------------------------
// // ES2017 === ES8

// 1. async-to-generator
// core-js/modules/es.promise.js
// let fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('async-to-generator');
//     }, 3000);
//   });
// };

// async function getData() {
//   const result = await fetchData();
//   return result;
// }

// getData().then(result => {
//   console.log('ES2017', 'async-to-generator', result);
// });

// --------------------------------------------------
// ES2018 === ES9
// 1. async-generator-functions
// 2. dotall-regex
// 3. named-capturing-groups-regex
// 4. object-rest-spread
// 5. optional-catch-binding
// 6. unicode-property-regex

// --------------------------------------------------
// Experimental
// 需要在.babelrc中添加插件

// 1. 类属性
// yarn add -D @babel/plugin-proposal-class-properties
// core-js/modules/es.function.name.js
// 2. 装饰器
// yarn add -D @babel/plugin-proposal-decorators
// core-js/modules/es.array.slice.js
// core-js/modules/es.function.name.js
// core-js/modules/es.object.get-own-property-descriptor.js
// core-js/modules/es.object.keys.js
// core-js/modules/web.dom-collections.for-each.js

// @testable(true) // 类装饰器, stage 1
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   legs = 2; // 类属性, stage 2

//   @enumerable(false) // 类方法装饰器, stage 1
//   getAge() {
//     return this.age;
//   }

//   @enumerable(true) // 类方法装饰器, stage 1
//   getName() {
//     return this.name;
//   }
// }

// function testable(value) {
//   return function decorator(target) {
//     target.testable = value;
//   };
// }

// function enumerable(value) {
//   return function(target, key, descriptor) {
//     descriptor.enumerable = value;
//     return descriptor;
//   };
// }

// const person = new Person('web', 20);
// console.log('person.legs', person.legs);
// console.log('Person.testable', Person.testable);
// // for...in 包括原型上可枚举属性或方法
// for (const key in person) {
//   console.log('person instance key:', key);
// }
// // for (const key in person.__proto__)
// // for (const key in Person.prototype) {
// //   console.log('Person prototype key:', key);
// // }

// // --------------------------------------------------
// // 未安装包时, 如果index.js有类的语法, one.js有类的语法, 会生成重复代码"_classCallCheck"
// // 开发需要 @babel/plugin-transform-runtime
// // 生产需要 @babel/runtime
// // 如果在.babelrc添加插件, 那么会共用代码"_classCallCheck"
// // @babel/runtime/helpers/classCallCheck.js
// // @babel/runtime/helpers/defineProperty.js

import './one';

// // --------------------------------------------------
// // 未安装包时, 会添加 regeneratorRuntime 方法, 不会自动引入内置api
// // 开发需要 @babel/plugin-transform-runtime
// // 生产需要 @babel/runtime
// // 如果在.babelrc添加插件, 且.browserlistrc文件中设置为非现代浏览器, 则动态引入如下模块
// // @babel/runtime/regenerator/index.js
// // regenerator-runtime/runtime.js

function* gen() {
  yield 'generator';
}

console.log(gen().next());

// // --------------------------------------------------
// // @babel/runtime 不会对实例方法添加兼容, 比如: "foobar".includes("foo")
// // yarn add @babel/polyfill
// // 一定要在.babelrc文件中设置"useBuiltIns": "usage", 因为它可以按需引入兼容方法, 入口文件不需要 import '@babel/polyfill';
// // 如果未设置"useBuiltIns": "usage", 则会把全部兼容方法打包到入口文件
// // core-js/modules/es.string.includes.js
// // core-js/modules/es.array.includes.js

// core-js/modules/es.string.includes.js
const includes = 'foobar'.includes('foo');
console.log('includes:', includes);

// core-js/modules/es.array.includes.js
const includes2 = [1, 2, 3].includes(1);
console.log('includes2:', includes2);

// --------------------------------------------------
// tree shaking

// lodash
// import _ from 'lodash'; // 这种方式不支持树摇
// _.groupBy(['lin', 'bin', 'devin'], 'length');
// // => { '3': ['lin', 'bin'], '5': ['devin'] }
// import { groupBy } from 'lodash'; // 这种方式不支持树摇
// import groupBy from 'lodash/groupBy'; // 这种方式支持树摇
// groupBy(['lin', 'bin', 'devin'], 'length');
// => { '3': ['lin', 'bin'], '5': ['devin'] }

import { cube } from './math.js';
console.log('tree shaking', 'math.cube', cube(3));
