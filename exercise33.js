function substring1(string1, number1) {
    let newstr = "";
    let max = 0;
    for(let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string1.length; j++) {
            if((new Set(string1.substring(i, j)).size) == number1 && string1.substring(i, j).length >max) {
                max = string1.substring(i, j).length;
                newstr = string1.substring(i, j)
            }
        }
    }
    return newstr
}

console.log(substring1("abcbbba",2))