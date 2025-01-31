/**
 * Given a number print
 * case1:if it divisible by 3,print geeta
 * case2:if it is divisble by 5,print Sanju
 * case3:if divisble by both print Sanju weds Geeta
 */


let num=37
if(num%3==0 && num%5==0){
    console.log('Sanju weds Geeta💛💛');
}
else if(num%3==0){
    console.log("Geeta❤");
}

else if(num%5==0){
    console.log("Sanju💜💜💜");
}
else{
    console.log("Divorce💔💔");
}