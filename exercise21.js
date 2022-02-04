function isSpecialArray(arr1) {

    let newarr = [];
    for (let i = 0; i < arr1.length; i++ ) {
        if(i%2 == 0 && arr1[i] % 2 == 0) {
            newarr.push(true);
        } else if (i %2 != 0 && arr1[i]%2 != 0) {
            newarr.push(true);
        } else {
            newarr.push(false);
        }
    }
    newarr.every(check);

    function check(item) {
        return item == true
    }
return(newarr.every(check));
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]))