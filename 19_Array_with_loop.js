 let num = [1,23,45,67,87,34]
 for(let i=0;i<num.length;i++)
 {
    console.log(num[i])
 }


//  forEach lopp
    
 num.forEach((Element) =>
 {
    console.log(Element*Element)
 });

 let a="manoj"

 let arr= Array.from(a) // convert to array
 console.log(arr)


 for(let i of num)  // for of loop in Array
{
    console.log(i)
} 

for(let j in num) 
{
  console.log(num[j])  // j is the keay
} 


