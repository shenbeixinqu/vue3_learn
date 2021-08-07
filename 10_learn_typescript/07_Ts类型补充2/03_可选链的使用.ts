// 可选链使用操作符 ?.
// 作用 当对象的属性不存在时 返回undefined 如果存在才会继续执行

type Person = {
    name: string
    friend?:{
        name:string
        age?:number
    }
}

const Info:Person = {
    name:"why"
}

console.log(Info.name);
console.log(Info.friend?.name);

