// 历史代码
// $.ajax({})

//自己封装的ajax,现在使用的格式
ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType"
}).done(function () { })

//做一层适配器

let $ = {
    ajax: function (options) {
        return ajax(options)
    }
}