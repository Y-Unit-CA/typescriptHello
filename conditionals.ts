let actualRetailPrice : number = 15347;

let contestantNumber1Guess : number = 2233;
let contestantNumber2Guess : number = 34786;
let contestantNumber3Guess : number = 15347;
let contestantNumber4Guess : number = 14244;

if(contestantNumber1Guess > actualRetailPrice) {
    console.log("Contestant Number 1 is OVER!");
    console.log("Sorry you lost.");
} else if (contestantNumber1Guess < actualRetailPrice) {
    console.log("Contestant Number 1 is under!");
    console.log("Sorry you lost.");
} else {
    console.log("Contestant Number 1 got a PERFECT MATCH!");
    console.log("You win an extra $100!");
}

if(contestantNumber2Guess > actualRetailPrice) {
    console.log("Contestant Number 2 is OVER!");
    console.log("Sorry you lost.");
} else if (contestantNumber2Guess < actualRetailPrice)  {
    console.log("Contestant Number 2 is under!");
    console.log("Sorry you lost.");
} else {
    console.log("Contestant Number 2 got a PERFECT MATCH!");
    console.log("You win an extra $100!");
}

if(contestantNumber3Guess > actualRetailPrice) {
    console.log("Contestant Number 3 is OVER!");
    console.log("Sorry you lost.");
} else if (contestantNumber3Guess < actualRetailPrice)  {
    console.log("Contestant Number 3 is under!");
    console.log("Sorry you lost.");
} else {
    console.log("Contestant Number 3 got a PERFECT MATCH!");
    console.log("You win an extra $100!");
}

if(contestantNumber4Guess > actualRetailPrice) {
    console.log("Contestant Number 4 is OVER!");
    console.log("Sorry you lost.");
} else if (contestantNumber4Guess < actualRetailPrice)  {
    console.log("Contestant Number 4 is under!");
    console.log("Sorry you lost.");
} else {
    console.log("Contestant Number 4 got a PERFECT MATCH!");
    console.log("You win an extra $100!");
}