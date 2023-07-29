let cardSuits : Array <string> = ["Hearts", "Diamonds", "Clubs", "Spades"];
let luckyCharms : Array <string> = ["Green clover", "Purple diamons", "Rainbow horseshoes"];
// we want to see one string that goes, "Hearts and Diamonds and Clubs and Spades"

function joinArray(joinables : Array <string>, joiner : string ) : string {
    
    let retVal : string = joinables[0];
    for(let i : number =1; i < joinables.length; i++) {
        retVal += joiner;
        let word : string = joinables [i];
        retVal += word;
    }
    return retVal;
}
let result = joinArray (cardSuits, " and ");
console.log(result);