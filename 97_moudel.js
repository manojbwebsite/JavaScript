// ES6 module transfer 

import impfun , {hello,ahello}from "./1_module.js"  // use with destruchering
hello()
ahello("manoj");    // transfer file show output  with arrgument
ahello("ram");
impfun()  // default function sepretly call




 // transfer file   and change jsion file type= module
 export  const hello =()=>{
    console.log("Hellow manoj")

}
 // transfer anothe file use with module

  export const ahello=(name)=>{
    console.log(` ${name} is good boy`)

}

const impfun=()=>{          
    console.log("hellow"+"manoj")
}
export default impfun;  // syntax to export function