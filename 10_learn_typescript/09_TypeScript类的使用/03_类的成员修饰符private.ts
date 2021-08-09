class Person {
  private name:string = ""

  getName(){
      return this.name
  }

}

const per = new Person()
// 无法在外部进行访问 只能在自己的类中进行访问
// console.log(per.name);
console.log(per.getName());


export {}