function adding1(arrray, number1) {
    let myarray = [];
    for (let i = 0 ; i < arrray.length; i++) {
        let first = arrray.indexOf(arrray[i]);
        let newarr = arrray.slice(first);
        let myarray2 = []
        for (let j = 0; j < newarr.length; j++) {
            if(arrray[i] + newarr[j] == number1) {
                myarray2.push(arrray[i]);
                myarray2.push(newarr[j]);
            }
        }
        myarray.push(myarray2)
    }
    let generalarray = [];
    for (let i = 0; i < myarray.length; i++) {
        if(myarray[i].length > 1) {
            generalarray.push(myarray[i])
        }
    }

    return generalarray
}

console.log(adding1([10, 15, 3, 7, 14], 17))