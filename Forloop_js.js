for(i=0;i<=10;i++){
    console.log(i);
}

// sum of 10 numbers 

let sum=0;
let num=10;
for(i=1; i<num; i++){
    sum += i+1;

}
console.log("sum of 10 number is",sum);


// foor in loop 
let obj ={
    manoj:45,
    sagar:78,
    ram:85,
    ganesh:100
}

for(let a in obj){
    console.log("MArks of "+a+"are=" + obj[a])
}

// for of loop 

for(let b of "manoj"){
    console.log(b)
// print one by one caractor
}