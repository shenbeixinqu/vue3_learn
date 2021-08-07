// typeof 类型缩小
type IDtype = string | number
function printID(id:IDtype){
    if (typeof id === 'string'){
        console.log(id.toUpperCase())
    } else {
        console.log(id);
    }
}


// 平等的类型缩小 (=== !== !=/switch)
type Direction = "up"|"bottom"|"left"|"right"
function printDirection(direction:Direction){
    if (direction === "left"){
        console.log("left");
    }
}

// instanceof
function printTime(time:string|Date){
    if (time instanceof Date){
        console.log(time.toUTCString());
    } else {
        console.log(time);
        
    }
}

class Student{
    studying(){

    }
}

class Teacher{
    teaching(){

    }
}

function work(p: Student|Teacher){
    if (p instanceof Student){
        p.studying
    } else {
        p.teaching
    }
}

const stu = new Student()
work(stu)


// in 

type Fish = {
   swimming: () => void
}

type Dog = {
    running: () => void
}

function walk(animal: Fish|Dog){
    if ('swimming' in animal){
        animal.swimming
    } else {
        animal.running
    }
}

const fish: Fish = {
    swimming(){
        console.log('swimming');
        
    }
}

walk(fish)

export {}