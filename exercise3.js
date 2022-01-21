function list_of_multiples(number1, number2) {
    let myArray = []
    myArray.push(number1);
    for (let i = 1; i < number2 ; i ++) {
        myArray.push(myArray[myArray.length-1] + number1)
    }
    return myArray
}


console.log(list_of_multiples(7, 5));
console.log(list_of_multiples(12, 10));


