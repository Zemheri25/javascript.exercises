function firstPlace(arr1) {
    let newarr = []
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] != "=") {
            newarr.push(arr1[i])
        }
    }
    return newarr[newarr.length-1]
}

console.log(firstPlace("====b===O===e===U=A=="))
console.log(firstPlace("proeNeoOJGnfl"))