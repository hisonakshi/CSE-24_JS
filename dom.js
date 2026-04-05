// DOCUMENT OBJECT MODEL (DOM)
// JavaScript can change HTML content, attributes, styles,
// create new elements, and remove existing elements.

// 1. Select element by id and change content
let x = document.getElementById("demo");
if (x) {
    x.innerHTML = "HELLO WORLD";
}

// 2. Select element(s) by tag name and change first matching element
let z = document.getElementsByTagName("h3");
if (z.length > 0) {
    z[0].innerHTML = "I am Tag name";
}

// 3. Select element(s) by class name and change first matching element
let y = document.getElementsByClassName("hello");
if (y.length > 0) {
    y[0].innerHTML = "I am class name";
}

// 4. querySelector and querySelectorAll examples
let q1 = document.querySelector("#demo");
let q2 = document.querySelectorAll(".hello");

// 5. Get attribute
let attr = document.getElementById("demo");
if (attr) {
    console.log(attr.getAttribute("id"));
}

// 6. Set attribute
let d = document.getElementById("demo");
if (d) {
    d.setAttribute("class", "demoClass");
}

// 7. Change CSS style
let s = document.getElementById("demo");
if (s) {
    s.style.color = "blue";
    s.innerHTML = "hello world";
}

// 8. Create a new element and append it to body
let c = document.createElement("h2");
c.innerHTML = "This is a new heading added by JavaScript";
document.body.appendChild(c);

// 9. Remove the created element
c.remove();