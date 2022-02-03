const paths = (number1) => {
    let count = 1;
    for (let i = 1 ; i <= number1; i++) {
        count *= i
    }
    return count
}

console.log(paths(9))