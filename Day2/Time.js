/**
 * Given a time in the form of 24 hours and convert it into 12 hours format
 */


let res;
let hours = 13;
if (hours == 12) {
    res = hours + "pm"
}
else if (hours > 12) {
    res = (hours - 12) + 'pm'
}
else {
    res = hours + 'am'
}
console.log(`the current time in India is ${res}`);