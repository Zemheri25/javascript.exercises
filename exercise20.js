function reverse(sentence) {
    let array1 = []
    for(let i = 1; i <= sentence.length; i++) {
        array1.push(sentence[sentence.length-i])
    }
    return array1.join("")
}

console.log(reverse("Clarusway Rocks!"))

console.log(reverse("Happy"))