// Different ways to create arrays in JavaScript

// using Array constructor
var myInfo = new Array();
var myInfo1 = Array();

// using array literal (most common)
var myInfo2 = [];

// add values in different ways
myInfo[0] = "Sonakshi";
myInfo[1] = 33;
myInfo[2] = true;

myInfo1.push("Tanishq");
myInfo1.push(32);
myInfo1.push(false);

myInfo2 = ["JS", "HTML", "CSS"];

// print arrays
console.log(myInfo);
console.log(myInfo1);
console.log(myInfo2);

// loop over myInfo2
for (var i = 0; i < myInfo2.length; i++) {
    console.log(myInfo2[i]);
}