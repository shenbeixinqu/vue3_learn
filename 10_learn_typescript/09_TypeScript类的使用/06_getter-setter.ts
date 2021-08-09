class Person{
    private _age:number

    constructor(age:number){
        this._age = age
    }

    set age(newValue){
        this._age = newValue
    }

    get age(){
        return this._age
    }

}

const p = new Person(29)
console.log(p.age);
p.age = 15


export {}