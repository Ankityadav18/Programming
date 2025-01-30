// let a=200;
// if((a%4===0&& a%100!==0) || (a%400===0)){
// console.log("leap year");
// }
// else{
//     console.log("not leap year ");
// }



/**
 * Every year which is multiple of 4 is a leap year except multiple of 100.
 * Every century is not leap year except multiple of 400. 
 * 
 */
let year=160;

if(year%4===0){
    if(year%100!==0 || year%400===0){
        console.log("leap year");
    }
    else {
        console.log("not leap year");
    }
   
}
else{
    console.log("It is not a leap year");
}








