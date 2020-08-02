import $ from 'jquery'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import List from './List/List'

// 初始化容器
export default class App {
    constructor (id) {
        this.$app = $(`#${id}`)
    }

    // 初始化购物车
    initShoppingCart() {
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }
    // 初始化列表
    initList() {
        let list = new List(this)
        list.init()
    }


    init() {
        this.initShoppingCart()
        this.initList()
    }
}