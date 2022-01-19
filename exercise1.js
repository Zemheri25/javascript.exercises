let value1 = "great"
let value2 = "grand"

let value3 = "father"
let value4 = "mother"
let value5 = "son"
let value6 = "daughter"
let value7 = "me"

function gereneration (number, letter) {
    if (number == 1 && letter == "f") {
        return value6
    } else if (number == 1 && letter == "m") {
        return value5
    } else if (number == 0) {
        return value7
    } else if (number == 2 && letter == "m") {
        return value2 + value5
    } else if (number == 2 && letter == "f") {
        return value2 + value6
    } else if (number == 3 && letter == "m") {
        return value1 +" "+ value2 + value5 
    } else if (number == 3 && letter == "f") {
        return value1 +" "+ value2 + value6
    } else if (number == -1 && letter == "m") {
        return value3
    } else if (number == -1 && letter == "f") {
        return value4
    } else if (number == -2 && letter == "m") {
        return value2 + value3
    } else if (number == -2 && letter == "f") {
        return value2 + value4
    } else if (number == -3 && letter == "m") {
        return value1 + " " + value2 + value3
    } else if (number == -3 && letter == "f") {
        return value1 + " " + value2 + value4
    }
}

let myvalue1 = gereneration(2, "f");
let myvalue2 = gereneration(-3, "f");
let myvalue3 = gereneration(1, "f");
let myvalue4 = gereneration(-2, "m")




console.log(myvalue2)