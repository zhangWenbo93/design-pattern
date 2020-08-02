// function formatMoney(str) {
//     const first = str.split('.')[0].split('').reverse().join('');
//     const last = str.split('.')[1]
//     let newStr = "";
//     for (let i = 0; i < first.length; i++) {
//         if (i % 3 === 2 && i < first.length - 1) {
//             newStr += first[i] + ","
//         } else {
//             newStr += first[i]
//         }
//     }
//     return newStr.split('').reverse().join('') + "." + last
// }

// console.log(formatMoney("1112116.515"));

// class RealImg {
//     constructor (fileName) {
//         this.fileName = fileName
//         this.loadFromDisk() // 初始化即从硬盘中加载，模拟
//     }

//     display() {
//         console.log("display..." + this.fileName);
//     }

//     loadFromDisk() {
//         console.log("loading..." + this.fileName);
//     }
// }

// class ProxyImg {
//     constructor (fileName) {
//         this.realImg = new RealImg(fileName)
//     }

//     display() {
//         this.realImg.display()
//     }
// }

// let proxyImg = new ProxyImg('1.png')
// proxyImg.display()

let star = {
    name: "张三",
    age: 25,
    phone: "13209898765"
}

let agent = new Proxy(star, {
    get(target, key) {
        if (key === "phone") {
            return "agent 1888888787"
        }

        if (key === "price") {
            return 120000
        }

        return target[key]
    },
    set(target, key, val) {
        if (key === "customPrice") {
            if (val < 100000) {
                throw new Error('价格太低')
            } else {
                target[key] = val
                return true
            }
        }
    }
})


console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);
agent.customPrice = 15000

console.log(agent.customPrice);