function getOrder (str) {
    let newstr = ""
    for(let i = 0; i < str.length - 1; i++) {
        if(str[i].charCodeAt() > str[i + 1].charCodeAt()) {
            newstr += str[i + 1]
        }
    }
    return newstr
};


console.log(getOrder("BEEHIVE"))

