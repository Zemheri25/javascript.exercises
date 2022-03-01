function editWords(sentence) {
    let newarray = sentence.toUpperCase();
    newarray = newarray.split(" ");
    let newarra2 = []
    for (let i = 0; i < newarray.length; i++) {
       newarra2.push(newarray[i].split("").reverse().join(""))
    }

    return newarra2.join(" ")
}


console.log(editWords("new york city"))



