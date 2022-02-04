function indexMultiplier(arr1) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        count += arr1[i]*i
    }
    return count
}

console.log(indexMultiplier([1, 2, 3, 4, 5]));
console.log(indexMultiplier([-3, 0, 8, -6]));