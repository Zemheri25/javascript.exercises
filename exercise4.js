function dis (cost, discount) {
    return cost - (cost*discount/100)
}

console.log(dis(1500, 50));
console.log(dis(89, 20));