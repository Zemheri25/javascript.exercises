function minMax(arrey1) {
    let newarray = [];
    
    newarray.push(Math.min(...arrey1))
    newarray.push(Math.max(...arrey1))
    return newarray
}

console.log(minMax([1, 0, 98, 5, 3, 8]))



