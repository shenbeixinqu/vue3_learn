class Person{
    name:string = "why"
}

const p1:Person = {
    name:"kobe"
}


function printPerson(p:Person){
    console.log(p.name);
}

printPerson(new Person())
printPerson({name:"james"})

export {}