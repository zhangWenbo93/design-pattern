class Circle {
    draw() {
        console.log("画一个圆形");
    }
}

class Decorator {
    constructor (circle, num) {
        this.circle = circle
        this.num = num
    }

    draw() {
        this.circle.draw()
        this.setRedBorder(circle, this.num)
    }

    setRedBorder(circle, num) {
        console.log('circle', circle);
        console.log('num', num);
        console.log("设置红色边框");
    }
}

// class Client {

//     main() {
//     }
// }

let circle = new Circle()
circle.draw()

console.log('---------');

let dec = new Decorator(circle, 3)
dec.draw()



function testDes(isDec) {
    return function (target) {
        target.isDec = isDec
    }
}

@testDes(false)
class Demo {
    //
}
console.log("Demo.isDec===>", Demo.isDec)