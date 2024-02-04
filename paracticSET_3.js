let marks ={
    manoj:34,
    ganesh:78,
    rahul:44
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of" + Object.keys(marks)[i] +"are " + marks[Object.keys(marks[i])])
}