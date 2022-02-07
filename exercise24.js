let myarr = "10 20 20 10 10 30 50 10 20 ? :"

const strArr = myarr.split(" ");
const cleaned = strArr.filter(item => item == parseInt(item));
console.log(cleaned)
let myobject = {};
cleaned.map(elem => {
    myobject[elem] = myobject[elem] ? myobject[elem] +1 : 1                 //THIS SOLUTİON WİTH NORMAL METHODS
})


count = 0;
for(let i = 0 ; i < Object.keys(myobject).length; i++) {
    count += parseInt(Object.values(myobject)[i] / 2)
}
console.log(count)


//-------------------------------------------------------------------------------------------

function howManycouple(array1) {
   const strArr = array1.split(" ");
   const cleaned = strArr.filter(item => item == parseInt(item));
   let myObject = {};
   cleaned.map(elem => {
       myObject[elem] = myObject[elem] ? myObject[elem] + 1 : 1
   })
   count = 0;
   for (let i = 0; i < Object.values(myObject).length; i++) {               //THIS SOLUTİON WİTH FUNCTİON
        count += parseInt(Object.values(myObject)[i] / 2)
   };

   return count
}


console.log(howManycouple("10 10 10 10 20 30 20 40 50 40"))



    
