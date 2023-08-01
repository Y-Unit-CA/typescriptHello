class Personage {   // Class scope - is only defined within this structure
    name : String;
    phone ?: String; // "?" means optional

    constructor( val : String ) {
        this.name = val;
    }
}

// Structural typing
let examplePerson : Personage = {
    "name" : "Bob"
};

let foo : any = {   // "any" means "I don't care about the type" - DANGEROUS to use, easy to make mistakes, open to ambiguity
    "name" : "Bob"
};
let examplePerson1 : Personage = foo;


// let size : number = 42;

let bob : Personage = { "name" : "Bob" };       // Both of these are valid
let anna : Personage = new Personage( "Anna" ); // Both of these are valid

anna.phone = "867-5309";
bob.phone = "1 800 528 1234";

console.log( `Person ${anna.name} has a phone number of ${anna.phone}`);
console.log( `Person ${bob.name} has a phone number of ${bob.phone}`);
