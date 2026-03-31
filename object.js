var person = { 
    name:'sonakshi',
     age:33, 
     isMarried:true };

var person2 = new Object();
person2.name = "Tanishq";
person2.age = 32;  // Also fix this line from your original
person2.isMarried = true;
person2.address = {};
person2.address.street = "nagar road";
person2.address.flatNo = 33;  // Fixed key

console.log(person2);

var person2 = {
    name: "Tanishq",
    age: 32,
    isMarried: true,
    address: {
        street: "nagar road",
        flatNo: 33
    },
    greet: function() {
        return "Hi, I'm " + this.name;
    },
    hasValidAddress: function() {
        return this.address && this.address.flatNo > 0;
    }
};

console.log(person2.greet());           // "Hi, I'm Tanishq"
console.log(person2.hasValidAddress()); // true