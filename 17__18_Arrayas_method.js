let num = [ 1,2,3,4,5];
 let b = num.toString() // convert num in string
 console.log(b, typeof b)

 let c= num.join(" and ")
 console.log(c)

 let r = num.pop() // delet last element 
 console.log(num)

  // add last element 
  z = num.push(56);
 console.log(num)

 z = num.shift();
 console.log(num) // remove frist element 

 z = num.unshift(56); // add frist element 
 console.log(num)

 let d = [7,8,9,10]
delete d[1]    // delete is an operator
console.log(d)  // delet element but not change length


let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]
 let newarray = a1.concat(a2,a3)    
 console.log(newarray)

// concat returns a new array and does not change the existing arra

let a = [7,9,8]
a.sort()  
console.log(a)


// with function 

const compare =(a,b)=>

{
    return b-a;

}
num.sort(compare)
console.log(num)


let x = [ 12, 35 , 56]
x.reverse()
console.log(x)


const numbers = [1,2,3,4,5,45,67,78,]
numbers.splice(2,3,23,24,344)// there are 2 means start index of add element 3 mens add contity of elemnt 3
console.log(numbers)

const man = [1,2,3,4]
num.slice(2)        //  do not visable element of array 0 index to 2 but 2 index elemnt is visble
num.slice(1,3)        // [2,3]  3 index element not visable  0 index 1 index visble

