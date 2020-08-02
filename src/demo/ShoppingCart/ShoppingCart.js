import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'

export default class ShoppingCart {
    constructor (app) {
        this.app = app
        this.$shoppingCart = $("<div>").css({
            "paddig-bottom": "10px",
            "border-bottom": "1px solid #ccc"
        })
        this.cart = getCart()
    }

    initBtn() {
        let $btn = $('<button>购物车</button>')

        $btn.click(() => {
            this.showCart()
        })

        this.$shoppingCart.append($btn)
    }

    showCart() {
        alert(this.cart.getList())
    }

    render() {
        this.app.$app.append(this.$shoppingCart)
    }

    init() {
        this.initBtn()
        this.render()
    }
}