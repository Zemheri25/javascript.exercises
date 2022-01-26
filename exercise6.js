function sevenBoom(array1) {
  let array2 = []
  let newarray = String(array1)
  for (let i = 0; i < newarray.length; i++) {
    if (newarray[i] == "7") {
      array2.push(true)
    } else {
      array2.push(false)
    }
  }
  return array2
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));