function longestString (s1) {
    let maxlength = 0;
    let newarr = [];
    let setarray = []
    for(let i = 0; i < s1.length; i++) {
        for (let j = s1.length-1; j > i; j--) {
            newarr.push(s1.slice(i, j))
        }

    }
    for (let i = 0; i < newarr.length; i++) {
        let setarr = new Set(newarr[i])
        if(setarr.size === newarr[i].length) {
            setarray.push(newarr[i])
        }

        
    }

    for (let i = 0; i < setarray.length; i++) {
        if(setarray[i].length > maxlength) {
           maxlength = setarray[i].length
        }
    }
    return maxlength
    
}

console.log(longestString("bbbbb"))



