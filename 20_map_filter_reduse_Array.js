// Array map method

let array =[ 1,2,3,4,5]

let narr = array.map((value ,index, array) =>
{
    console.log(value,index, array)
    return value +2;
   
});
console.log(narr)

//  diifrens between map and forEach map create new array


// Array filter methode

let array1 =[ 1,2,3,4,5]
let array2= array1.filter((value) =>
{
    return value > 3
});
 console.log(array2)

//  Array Reduse method

let arr3= [1,45,67,87,98]
let arr4= arr3.reduce((h1,h2)=>
{
  return h1+h2
});

console.log(" the product of all array number is " +arr4)