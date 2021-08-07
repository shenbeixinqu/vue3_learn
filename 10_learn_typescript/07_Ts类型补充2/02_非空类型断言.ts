// message?: 等价于 undefined|string 类型

function printMessageLength(message?:string){
    console.log(message!.length);
    
}

printMessageLength("aaa")