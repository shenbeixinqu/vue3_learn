 class Person {
     name:string;
     age: number

    constructor(name:string, age:number){
        this.name = name;
        this.age = age
    }

     eating(){
         console.log(this.name + 'eating');
         
     }
 }

 var p = new Person("why", 19)
 console.log(p.age);
 console.log(p.name);
 
 export {}
 