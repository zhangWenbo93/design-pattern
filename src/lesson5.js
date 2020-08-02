class SingleObject {
    login() {
        console.log("login...");
    }
}

SingleObject.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log(obj1 === obj2);

console.log("------------");

let obj3 = new SingleObject();// 假如有人不了解这块的机制，没有使用单例引用静态方法，而是通过new初始化实例obj3,login方法也可以使用，js是弱类型，并不会报错，但是obj1!== obj3
obj3.login()

console.log(obj1 === obj3);