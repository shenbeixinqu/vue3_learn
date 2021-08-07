// 两个缺点
// 进行很多的逻辑判断  返回值的类型依然不能判断

function add(a1:number|string, a2:number|string){
    if (typeof a1 === 'string' && typeof a2 === 'string'){
        return a1 + a2
    } else if (typeof a1 === 'number' && typeof a2 === 'number'){
        return a1 + a2
    }
}

add(10,20)

export {}