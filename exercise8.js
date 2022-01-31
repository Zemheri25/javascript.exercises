function reversing(array1) {
    let newarray = array1.split(" ");
    newarray = newarray.reverse();
    newarray = newarray.join(" ")
    return newarray
}

console.log(reversing("My name is Ömer"));
