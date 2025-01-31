//given a month number starting from print the number of days in the given month number.

let month = 1;
if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
    console.log('These month contains :31 DAYS');
}
else if (month == 0 || month == 3 || month == 5 || month == 8 || month == 10) {
    console.log('These month are having :30 DAYS');
}
else if (month == 1) {
    console.log('This is 28DAYS or 29DAYS Month');
}
else {
    console.log('Invalid month entered');
}
