// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     seyName() {

//     }
// }

// class A extends Person {
//     constructor (name, age) {
//         super(name, age)
//     }
//     seyName() {
//         console.log("this is A");
//     }
// }


// class B extends Person {
//     constructor (name, age) {
//         super(name, age)
//     }
//     seyName() {
//         console.log("this is B");
//     }
// }

// let a = new A('a', 33)
// let b = new B('b', 43)
// a.seyName();
// b.seyName();
class Product {
    constructor (name) {
        this.name = name
    }

    init() {
        console.log('init');
    }
    fn1() {
        console.log('fn1');
    }
    fn2() {
        console.log('fn2');
    }
}

class Creator {
    creat(name) {
        return new Product(name)
    }
}

// 测试

let creator = new Creator()
let p = creator.creat("p1")
p.init()
p.fn1()
p.fn2()


class jQuery {
    constructor (selector) {
        let slice = Array.prototype.slice;

        let dom = slice.call(document.querySelectorAll(selector))

        let len = dom ? dom.length : 0

        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }

        this.length = len

        this.selector = selector || ""
    }

    append(node) {

    }

    addClass(name) {

    }
}

window.$ = function (selector) {
    return new jQuery(selector)
}