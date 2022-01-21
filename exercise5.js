function keysAndValues (object1) {
    let keys = Object.keys(object1)
    let values = Object.values(object1)
    let array = []
    array.push(keys, values)
    return array
}
    
let object2 = { a: 1, b: 2, c: 3 }
let object3 = { a: "Apple", b: "Microsoft", c: "Google" }
let object4 = { key1: true, key2: false, key3: undefined }


console.log(keysAndValues(object2))
console.log(keysAndValues(object3))
console.log(keysAndValues(object4))