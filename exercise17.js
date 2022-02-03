function totalVolume(arr1) {
    let count1 = 0;
    for (let i = 0; i < arr1.length; i ++) {
        let count2 = 1;
        for (let j = 0; j < arr1[i].length; j++) {
            count2 *= arr1[i][j]
        }
        count1 += count2
    }
    return(count1)

}


console.log(totalVolume([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]]))
console.log(totalVolume([[2, 2, 2], [2, 1, 1]]))