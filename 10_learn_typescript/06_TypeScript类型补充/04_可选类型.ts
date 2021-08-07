function printPoint(point:{x:number, y:number, z?:number}){
    console.log(point.x);
    console.log(point.y);
    console.log(point.z);  // 不选z的话 这里为undefined
    
}

printPoint({x:12, y:34})

export {}