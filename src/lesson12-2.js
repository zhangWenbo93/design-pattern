// 实现一个Promise
import StateMachine from "javascript-state-machine"

// 初始化状态机模型
let fsm = new StateMachine({
    init: "pending", // 初始化状态
    transitions: [
        {
            name: "resolve",
            from: "pending",
            to: "fullfilled"
        },
        {
            name: "reject",
            from: "pending",
            to: "rejected"
        }
    ],
    methods: {
        // 成功
        onResolve(state, data) {
            // 参数：state - 当前状态示例； data - fsm.resolve(xxx) 执行时传递过来的参数
            data.successList.forEach(fn => fn());
        },
        // 失败
        onReject() {
            // 参数：state - 当前状态示例； data - fsm.reject(xxx) 执行时传递过来的参数
            data.failList.forEach(fn => fn());
        }
    }
})


//定义Promise
class MyPromise {
    constructor (fn) {
        this.successList = []
        this.failList = []

        fn(() => {
            // resolve函数
            fsm.resolve(this)
        }, () => {
            // reject函数
            fsm.reject(this)
        })
    }

    then(successFn, failFn) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}

//test

function loading(src) {
    const promise = new Promise((resolve, reject) => {
        let img = document.createElement("img")
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    return promise
}

let src = "https://wiki.imzhiliao.com/download/attachments/39589886/image2020-7-28%2015%3A43%3A11.png?version=1&modificationDate=1595922191000&api=v2"
let src2 = "1.jpg"
let result = loading(src)
let result2 = loading(src2)

result.then(() => {
    console.log('ok1');
}, () => {
    console.log('fail1');
})

result2.then(() => {
    console.log('ok2');
}, () => {
    console.log('fail2');
})