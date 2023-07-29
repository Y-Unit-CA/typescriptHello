console.log("Traditional For");
let fibonnacciSequence : Array <number> = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
for(let i : number = 0; i < fibonnacciSequence.length; i++) {
    let k = "Thing at " + i;
    console.log(`Fibonnacci number at ${i} is ${fibonnacciSequence[i]}, with thing of ${k}`);
}

console.log("For each");
for (let num of fibonnacciSequence) {
    console.log("Next Fibonnacci number is " + num);
}