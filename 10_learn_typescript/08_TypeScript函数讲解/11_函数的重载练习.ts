// 联合类型

function printLength(args:string|any[]){
    return args.length
}

console.log(printLength("abc"));


// 函数重载

function printLength1(args:string):number;
function printLength1(args:any[]):number;

function printLength1(arg:any):number{
    return arg.length
}

printLength1("abc")


export {}