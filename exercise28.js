function remove_letters(array1, string1) {
    let newarray = []
    for(let i = 0; i < array1.length; i++) {
        if(!string1.includes(array1[i])) {
            newarray.push(array1[i])
        }
    }

    return newarray
}

console.log(remove_letters(["s", "t", "r", "i", "n", "g", "w"], "string"));
