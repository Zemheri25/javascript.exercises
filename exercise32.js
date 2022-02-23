function countingMiss(array1) {
    let newarr = [];
    let newarr2 = [];
    let newarr3 = [];
    for (let i = Math.min(...array1); i <= Math.max(...array1); i++) {
        newarr.push(i)
    }
    for (let i = 0 ; i < newarr.length; i++) {
        if(!array1.includes(newarr[i])) {
            newarr2.push(newarr[i])
        }
    }

    if(newarr2.length != 0) {
    for (let i = 0; i < newarr2.length; i ++ ) {
        if(newarr2[i] > 0) {
            newarr3.push(newarr2[i])
        }    
    }

        return Math.min(...newarr3)
    } else {
        return Math.max(...array1) + 1
    }

}

console.log(countingMiss([-1,0,2,3 ]));
console.log(countingMiss([2, 3, 4]));




