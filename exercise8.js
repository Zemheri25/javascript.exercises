function reversing(array1) {
    let newarray = array1.split(" ");
    console.log(newarray)
    newarray = newarray.reverse();
    console.log(newarray)
    newarray = newarray.join(" ")
    console.log(newarray)
}

reversing("My name is Ömer")

