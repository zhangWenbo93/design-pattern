export function log(type) {
    return function (target, name, descriptor) {
        let oldValue = descriptor.value
        descriptor.value = function (...args) {
            // 再次打印日志
            console.log(`日志上报 ${type}`);

            return oldValue.apply(this, args)
        }
        return descriptor
    }
}