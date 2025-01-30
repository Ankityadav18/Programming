let k = 95
let e = 90
let m = 90
if (k >= 35 && e >= 35 && m >= 35) {
    let average = (k + e + m) / 3;
    if (average >= 85) {
        console.log("Distinction");
    }
    else if (average >= 70) {
        console.log("First class");
    }
    else if (average >= 60) {
        console.log("Second class");
    }
    else {
        console.log("Just pass");
    }
}else{
    console.log("Fail");
}