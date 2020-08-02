import $ from 'jquery'
import { GET_LIST } from '../config/config'
import createItem from './CreateItem'

export default class List {
    constructor (app, id) {
        this.app = app
        this.$list = $('<div>') // 创建一个div
    }

    // 获取数据
    loadData() {
        return fetch(GET_LIST).then(res => { return res.json() })
    }
    //生成列表
    initItemList(data) {
        data.forEach(itemData => {
            // 创建一个 item 然后 init
            let item = createItem(this, itemData)
            item.init()
        })
    }
    //渲染
    render() {
        this.app.$app.append(this.$list)
    }

    init() {
        this.loadData().then(data => {
            this.initItemList(data)
        }).then(() => {
            this.render()
        })
    }
}