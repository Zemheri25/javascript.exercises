function repetiton(string1, seperator, number1) {
    let mystr = ""
    for(let i = 0; i < number1; i++) {
        mystr += string1 + seperator
    }
    return mystr.substring(0, mystr.length-1)
}

console.log(repetiton("ömer", "?", 30))

