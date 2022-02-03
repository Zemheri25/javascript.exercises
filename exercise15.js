function numbersSUM(arr1) {
    let count = 0;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] === Number(arr1[i])) {
            count += arr1[i]
        } 
    }
    return count;
}   

console.log(numbersSUM([1, 2, "13", "4", "645"]));

console.log(numbersSUM([1, 2, 3, 4, 5, true]));



