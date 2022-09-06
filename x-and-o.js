//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//Examples input/output:

//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

//SOLUTION 1
function xAndO(str){
let xsum = 0, // numbers are better
        osum = 0;

    for (var i = 0; i < str.length; i++) { // changed from '<=' to '<'
        if (str[i].toLowerCase() === "x") {
            xsum++;
        } else if (str[i].toLowerCase() === "o") {
            osum++;
        }
    }
    return xsum === osum;
}