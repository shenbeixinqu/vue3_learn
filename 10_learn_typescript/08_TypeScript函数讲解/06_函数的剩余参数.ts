function sum(...nums:number[]){
    let total = 0
    for(const num of nums){
        total += num
    }
    return total
}

sum(10, 20)
sum(10, 20, 30)