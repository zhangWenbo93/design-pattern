class LoginFrom {
    constructor () {
        this.state = "hide"
    }

    show() {
        if (this.state === "show") {
            alert('已经展示')
            return
        }
        this.state = "show"

        console.log("登录框显示成功");
    }

    hide() {
        if (this.state === "hide") {
            alert('已经隐藏')
            return
        }
        this.state = "hide"

        console.log("登录框隐藏成功");
    }
}

LoginFrom.getInstance = (function () {
    let instance;

    return function () {
        if (!instance) {
            instance = new LoginFrom()
        }
        return instance
    }
})()

let login1 = LoginFrom.getInstance()
login1.show()
let login2 = LoginFrom.getInstance()
login2.hide()

console.log(login1 === login2);