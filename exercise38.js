function bracketsClosing(str1) {
   for (let i of str1) {
       if(str1.includes("()") || str1.includes("[]") || str1.includes("{}")) {
           str1 =  str1.replace("()", "");
           str1 = str1.replace("[]", "");
           str1 = str1.replace("{}", "");
       }
   }
   return str1 == "" ? true : false
};

console.log(bracketsClosing("([)]"));
console.log(bracketsClosing("([])"))

