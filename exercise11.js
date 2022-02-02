let number1 = 9119;
let newnumber = String(number1);
newString = "";
for (let i = 0; i < newnumber.length; i ++) {             //THIS SOLUTİON WİTH NORMAL METHODS
    newString += Number(newnumber[i])**2
    
}




function squareDigits(number1) {
    let newNumber = String(number1);
    let newString = "";
    for (let i = 0; i< newNumber.length; i++) {
        newString += Number(newNumber[i]**2)                  //THIS SOLUTION WİTH FUNCTİON
    }

    return newString
}

console.log(squareDigits(9119))

