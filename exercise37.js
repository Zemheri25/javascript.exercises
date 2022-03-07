function maxsubarray (array1, k){
    let newarray = [];
    let count1 = k
    for(let i = 0; i < array1.length-k +1; i ++) {
        let a = array1.slice(i, count1);
        newarray.push(Math.max(...a))
        count1 ++
    }
    return newarray
    
};

console.log(maxsubarray([10, 5, 2, 7, 8, 7], 3));
console.log(maxsubarray([3,  5, 7, 9, 34, 54, 23, 45, 65], 2))








