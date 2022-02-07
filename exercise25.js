
function numInStr(array1) {
    let newarr1 = []
    for (let i = 0; i < array1.length; i++) {
        let newarr2 = []
        for (let j = 0; j < array1[i].length; j++) {
            if(isNaN(array1[i][j])) {
                newarr2.push(false)
            } else {
                newarr2.push(true)
            }
        }
        newarr1.push(newarr2)
    }
    return newarr1
}

console.log(numInStr(["1a", "a", "2b", "b"]))


