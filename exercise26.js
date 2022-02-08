function stupid_addition(value1, value2) {
    let newstr = ""
    if(value1 === Number(value1) && value2 === Number(value2)) {
        newstr += String(value1).concat(String(value2))
    } else if (value1 === String(value1) && value2 === String(value2)) {
        newstr += Number(value1) + Number(value2);
        newstr = Number(newstr)
    } else {
        newstr += "None"
    }

    return `${newstr}`
}


console.log(stupid_addition("1", 1))


