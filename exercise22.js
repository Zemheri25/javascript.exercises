function isObject(arr1) {
    let newarr = []
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] === Object(arr1[i])) {
            newarr.push(true)
        } else {
            newarr.push(false)
        }
    }
    function even(item) {
        return item == true
    }
return newarr.some(even)

}


console.log(isObject([1, 2, 3,1, 1, 2, 3, "omer"]));

