// <------工厂模式 代理模式------>
import Item from './Item'

//用代理模式处理折扣显示
function createDiscount(itemData) {
    return new Proxy(itemData, {
        get(target, key, receiver) {
            if (key === "name") {
                return `${target[key]}【折扣】 `
            }
            if (key === "price") {
                return (target[key] * 100 * 0.8) / 100
            }
        }
    })
}

// 补充折扣商品逻辑
// 工厂函数
export default function (list, itemData) {
    if (itemData.discount) {
        itemData = createDiscount(itemData)
    }
    return new Item(list, itemData)
}