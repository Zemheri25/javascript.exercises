function ascDesNone(array1, value) {
    if(value == "None") {
        return array1
    } else if(value == "Desc") {
        array1.sort((a, b) => b-a)
        return array1
    } else if (value == "Asc") {
        array1.sort((a, b) => a - b)
        return array1
    } else {
        return "You have entered nonvalue"
    }

    
}

console.log(ascDesNone([3, 5, 7, 2, 87, 68], "Asc"));
console.log(ascDesNone([7, 8, 11, 66], "Desc"));
console.log(ascDesNone([1, 2, 3, 4], "None"));



