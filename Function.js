let a=2;
let b= 5;
let c=7;

function oneplusavg(x, y){
    return 1 + (x + y) /2
}



console.log(" one pluse average of a & b is ", oneplusavg(a,b))
console.log(" one pluse average of a & c is ", oneplusavg(a,c))
console.log(" one pluse average of a & d is ", oneplusavg(b,c))

// New type of function wrting 

const sum=(p,q)=>{
    return p+q
}
let p=1;
let q=2;
console.log("sum of ",sum(p,q))