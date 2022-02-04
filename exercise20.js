function reverse(sentence) {
    let str1 = ""
    for(let i = 1; i <= sentence.length; i++) {
        str1 += sentence[sentence.length-i]
    }
    return str1
}

console.log(reverse("Clarusway Rocks!"))

console.log(reverse("Happy"))