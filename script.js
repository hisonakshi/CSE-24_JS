
let num = 10;
console.log(num)
console.log(typeof(num))
num = false;
console.log(num)
console.log(typeof(num))


//FUNCTION
var sayHello = function(){
    alert("hello world")
}

//ARRAY
var numberArray = [1,2,3]
var animals = new Array("cat","dog")

//OBJECT
var person = {
    name : "Sonakshi",
    age : "20",
    title : "Student of ABESEC",
}

// TO CREATE A UNIQUE IDENTITY
const sym1 = Symbol(4)
console.log(sym1);
const sym2 = Symbol(4)
console.log(sym2);
if(sym1 == sym2){
console.log("true")
}else{
    console.log("false")
}

//JS Operators
// = : assign the value
// == compare the values
// === : stritly check data type and values both


b = 20
a = 40
b = b + a

//Maximum out of the three no. by using ternary operator 

//LOOPS - For, 
let x;
for(i=0;i<3;i++){
    console.log(i)
}

let count;
document.write("starting loop" + "</br>");
for(let count=0; count < 10;count++){
    document.write("Current count:" +count + "</br>")
}




