function secondLargest(array1) {
    array1.sort()
    return array1[array1.length-2]
}

console.log(secondLargest([1, 2, 8, 6, 4]));

