/*
*   Thirty days hath September,
*   April, June, and Novemebr
*   All the rest hath 31
*   Except February 28 in fine,
*   And 29 on leap, because Bill forgot the rhyme.
*/
// January = 1
// Febraruy = 2
// 
// December = 12
// let monthNum : number = 6; //keep changing the value test
// let isLeapYear : boolean = false;
// Your job is to print the number of days in monthNum.
// Just print it, using console.log
// You only need one if/else structure (maybe with multiple else ifs)
// one more thing!  I need you to put typescriptHello into github.
//      1.  Create a project in github
//      2.  Use the commands in github to connect to your local
//      3.  Push the files from local to github (3 steps)
/*  January => 31
    February => 28  // leap year => 29
    March => 31
    April => 30
    May => 31
    June => 30
    July => 31
    August => 31
    September => 30
    October => 31
    November => 30
    December => 31
*/
var monthNum = 2; // change this value to test
var isLeapYear = true; // change this value to test
var January = 1, February = 2, March = 3, April = 4, May = 5, June = 6, July = 7, August = 8, September = 9, October = 10, November = 11, December = 12;
if (monthNum == January) {
    console.log("January has 31 days.");
}
else if (monthNum == February) {
    if (isLeapYear) {
        console.log("February has 29 days since this is a leap year.");
    }
    else {
        console.log("February has 28 days.");
    }
}
else if (monthNum == March) {
    console.log("March has 31 days.");
}
else if (monthNum == April) {
    console.log("April has 30 days.");
}
else if (monthNum == May) {
    console.log("May has 31 days.");
}
else if (monthNum == June) {
    console.log("June has 30 days.");
}
else if (monthNum == July) {
    console.log("July has 31 days.");
}
else if (monthNum == August) {
    console.log("August has 31 days.");
}
else if (monthNum == September) {
    console.log("September has 30 days.");
}
else if (monthNum == October) {
    console.log("October has 31 days.");
}
else if (monthNum == November) {
    console.log("November has 30 days.");
}
else if (monthNum == December) {
    console.log("December has 31 days.");
}
else {
    console.log("Invalid month number.");
}
