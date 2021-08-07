// 使用联合类型时一定要特别的小心
function printId(id:string|number|boolean){
    if (typeof id === 'string'){
        console.log(id.toUpperCase);
    } else {
        console.log(id);
    }
}

export {}