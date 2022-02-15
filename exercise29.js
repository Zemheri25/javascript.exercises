function chunkify(array1, number1) {
    let newarr1 = [];
    
    for(let i = 0; i < array1.length; i+=2) {
        newarr1.push(array1.slice(i, i+number1))
       
    }

    return newarr1
}

console.log(chunkify([2, 3, 4, 5], 2));
console.log(chunkify([2, 3, 4, 5, 6], 2));
console.log(chunkify([2, 3, 4, 5, 6, 7], 3))


