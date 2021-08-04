// never 表示永远不会发生值的类型 比如一个函数死循环或者抛出一个异常 可以使用never类型
function foo():never{
    // 死循环
    while (true){
        
    }
}