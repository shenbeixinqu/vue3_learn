function foo1(){
    return "123"
}

function foo2(){
    return 123
}

// unknown类型只能赋值给any和unknown
// any 类型可以赋值给任何类型
let flag = true
let result:unknown  //最好不要用any

if (flag){
    result = foo1()
} else {
    result = foo2()
}