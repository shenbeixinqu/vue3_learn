class Person{
     static time:string = "2000"
     static attendClass(){
         console.log('去学习');
         
     }
}

// 静态成员 也叫类成员  可以直接用类进行访问

console.log(Person.time);
console.log(Person.attendClass());


export {}