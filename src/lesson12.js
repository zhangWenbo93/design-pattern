// class Iterator {
//     constructor (container) {
//         this.list = container.list
//         this.index = 0
//     }

//     next() {
//         if (this.hasNext()) {
//             return this.list[this.index++]
//         }
//         return null

//     }

//     hasNext() {
//         if (this.index >= this.list.length) {
//             return false
//         }
//         return true
//     }
// }


// class Container {
//     constructor (list) {
//         this.list = list
//     }

//     getIterator() {
//         return Iterator(this)
//     }
// }

// var arr = [1, 2, 3, 4, 5]
// const container = new Container(arr)
// const iterator = new Iterator(container)
// while (iterator.hasNext()) {
//     console.log(iterator.next());
// }

// function each(data) {
//     //生成迭代器
//     let iterator = data[Symbol.iterator]()
// console.log(iterator.next()); // 有数据时返回 {value: 1, done: false}
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next()); // 无数据时返回 {value: undefined, done: true}

//     let item = { done: false }
//     while (!item.done) {
//         item = iterator.next()
//         if (!item.done) {
//             console.log(item.value);
//         }
//     }
// }

function each(data) {
    // 必须带有遍历器特性
    for (const item of data) {
        console.log(item);
    }
}
let arr = [1, 2, 3, 4]
let nodeList = document.getElementsByTagName("h3")
let m = new Map()
m.set('a', 100)
m.set('b', 200)

each(arr)
each(nodeList)
each(m)