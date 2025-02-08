let DL = false;
let Tired = false;
let Sober = true;
if (DL !== true && Tired != true) {
    console.log("You cannot drive ");
}
else if (Tired === true || Sober === false) {
    console.log("You should not drive ");

}
else if (Tired === false || Sober === true) {
    console.log("You can drive the car");
}
