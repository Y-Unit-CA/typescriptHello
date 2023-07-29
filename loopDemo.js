var cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
var luckyCharms = ["Green clover", "Purple diamons", "Rainbow horseshoes"];
// we want to see one string that goes, "Hearts and Diamonds and Clubs and Spades"
function joinArray(joinables, joiner) {
    var retVal = joinables[0];
    for (var i = 1; i < joinables.length; i++) {
        retVal += joiner;
        var word = joinables[i];
        retVal += word;
    }
    return retVal;
}
var result = joinArray(cardSuits, " and ");
console.log(result);
