// 1. Function WITHOUT parameters
function myFunction() {
    alert("Hello world");
}

// calling it:
myFunction();


// 2. Function WITH parameters
function sayHello(name, age) {
    console.log(name + " is " + age + " years old");
}

// calling it:
sayHello("Sonakshi", 20);


// 3. Normal function that RETURNS a value
function mul(x, y) {
    return x * y;
}

let res = mul(12, 30);
console.log("Multiplication:", res);


// 4. Arrow function (anonymous function stored in a variable)
let add = (x, y) => {
    return x + y;
};

console.log("Addition:", add(2, 3));


// 5. Shorter arrow function (implicit return)
let square = x => x * x;

console.log("Square of 5:", square(5));


