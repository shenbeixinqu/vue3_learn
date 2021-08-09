// 在类和子类中可以进行访问

class Person{
    protected name:string = "123"
}


class Student extends Person{
    getName(){
        return this.name
    }
}

const stu = new Student()

// 外部不能进行访问
// console.log(stu.name);



export {}