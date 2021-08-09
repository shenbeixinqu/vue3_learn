class Person{
    name:string
    age:number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    eating(){
        console.log('person eating');
    }
}

class Student extends Person{
    sno:number

    constructor(name:string,age:number,sno:number){
        // 调用父类构造器
        super(name,age)
        this.sno = sno
    }

    studying(){
        console.log('studying');
    }

    eating(){
        // 重新定义自己的方法并且继承父亲的方法
        super.eating()
        console.log('student eating');
        
    }
}

const stu = new Student('why', 12, 123)

console.log(stu.age);
console.log(stu.eating());


