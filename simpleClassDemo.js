var Personage = /** @class */ (function () {
    function Personage(val) {
        this.name = val;
    }
    return Personage;
}());
// Structural typing
var examplePerson = {
    "name": "Bob"
};
var foo = {
    "name": "Bob"
};
var examplePerson1 = foo;
// let size : number = 42;
var bob = { "name": "Bob" }; // Both of these are valid
var anna = new Personage("Anna"); // Both of these are valid
anna.phone = "867-5309";
bob.phone = "1 800 528 1234";
console.log("Person ".concat(anna.name, " has a phone number of ").concat(anna.phone));
console.log("Person ".concat(bob.name, " has a phone number of ").concat(bob.phone));
