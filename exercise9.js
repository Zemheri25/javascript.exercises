function Repdigit(number1) {
    if(number1 < 0 ) {
        return false
    } else {
        let newNumber1 = String(number1)
        for (let i  =0; i < newNumber1.length; i++) {
            if (newNumber1[i] == newNumber1[i+1]) {
                return true
            } else {
                return false
            }
        }
    }
}

