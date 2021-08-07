// 函数的重载 函数的名称相同 但是参数不同的几个函数，就是函数的重载 
// 类型从上向下进行匹配 符合后执行 第三个add函数

function add(num1:number, num2:number):number;
function add (num1:string, num2:string): string;

function add(num1:any, num2:any):any{
    if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1.length + num2.length
    }
    return num1 + num2
}

add(20, 40)

export {}