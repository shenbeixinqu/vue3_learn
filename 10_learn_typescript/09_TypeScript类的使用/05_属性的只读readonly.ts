class Person{

    // 只读属性可以在构造器中进行赋值 赋值之后不可以进行更改
    // 属性本身不能进行更改 但是如果是对象类型 对象中的属性是可以进行更改的

    readonly name:string
    age?:number
    readonly friend:Person

    constructor(name:string, friend?:Person){
        this.name = name
        this.friend = friend
    }
}

const p = new Person("why", new Person("kobe"))

if (p.friend){
    p.friend.age = 30
}

export {}