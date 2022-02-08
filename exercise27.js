function takingsentence (value1) {
    let newstr = ""
    for (let i = 0 ; i < value1.length ; i ++) {
        if(isNaN(value1[i])) {
            newstr += value1[i]
        } 
    }

    return newstr
}

console.log(takingsentence("242Edabit2345can3443be3254324addictive!"))