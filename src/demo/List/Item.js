import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from "javascript-state-machine"
import { log } from '../util/log'
export default class Item {
    constructor (list, data) {
        this.list = list
        this.data = data
        this.$item = $("<div>")
        this.cart = getCart()
    }

    initContent() {
        let $item = this.$item
        let data = this.data
        $item.append(`<p>名称：${data.name}</p>`)
        $item.append(`<p>价格：${data.price}元</p>`)
    }

    initBtn() {
        let $item = this.$item
        let $btn = $("<button>")

        let _this = this
        let fsm = new StateMachine({
            init: "加入购物车",
            transitions: [
                {
                    name: "addToCart",
                    from: "加入购物车",
                    to: "从购物车删除"
                }, {
                    name: "deleteFromCart",
                    from: "从购物车删除",
                    to: "加入购物车"
                }
            ],
            methods: {
                onAddToCart() {
                    _this.addToCartHandle()
                    updateText()
                },
                onDeleteFromCart() {
                    _this.deleteFromCartHandle()
                    updateText()
                }
            }
        })

        function updateText() {
            $btn.text(fsm.state)
        }
        // 状态模式
        $btn.click(() => {
            if (fsm.is("加入购物车")) {
                fsm.addToCart()
            } else {
                fsm.deleteFromCart()
            }
        })


        updateText()
        $item.append($btn)
    }
    // 添加到购物车
    @log("add")
    addToCartHandle() {
        this.cart.add(this.data)
    }
    // 从购物车删除
    @log("del")
    deleteFromCartHandle() {
        this.cart.del(this.data.id)
    }

    render() {
        this.list.$list.append(this.$item)
    }

    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }
}