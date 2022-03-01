function lineLenght (array1, array2) {
    let a;
    let first = array1[0] - array2[0];
    let second = array1[1] - array2[1];
    a = (first **2) + (second **2)
    return (a **0.5).toFixed(2)
}

console.log(lineLenght([15, 7], [22, 11]));
console.log(lineLenght([0, 0], [0, 0]));
console.log(lineLenght([0, 0], [1, 1]))