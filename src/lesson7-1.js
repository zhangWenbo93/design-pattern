function mixin(...list) {
    return function (target) {
        console.log('target', target.prototype)
        Object.assign(target.prototype, ...list) // 把传入的方法或者属性合并到需要装饰的类的原型上
    }
}

const Foo = {
    foo() {
        console.log('foo')
    }
}

@mixin(Foo)
class MyClass {
}

let obj = new MyClass()
obj.foo()

function log(target, name, descriptor) {
    let oldValue = descriptor.value

    descriptor.value = function () {
        console.log(`calling ${name} with`, arguments);
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

class Math {
    @log
    add(a, b) {
        return a + b
    }
}

let math = new Math()
const result = math.add(2, 4)
console.log(result);

import { readonly, deprecate } from 'core-decorators'
class Person {
    constructor () {
        this.first = "A"
        this.last = "B"
    }

    //装饰方法
    @readonly
    @deprecate('We will deprecate this method')
    name() {
        return `${this.first} ${this.last}`
    }
}

let p = new Person()
console.log(p.name())
// p.name = function () {
//     alert(111)
// }