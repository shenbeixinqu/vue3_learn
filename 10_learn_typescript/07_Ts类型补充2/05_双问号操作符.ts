//  ?? 空值合并操作符  如果左边的值为null或者undefined  使用右边的值 类似三元运算符

let messgae:string|null = null

const content = message ?? "你好啊,李银河"

console.log(content);  // 打印  你好啊,李银河
