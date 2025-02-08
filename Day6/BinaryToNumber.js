function binaryToDecimal(num){
let sum=0;
let power=0
do{  
     let l_digit=num%10;
   sum=l_digit*(2**power)+sum;
   power++;
   num=Math.floor(num/10)
}
while(num>0){
    return sum;
}
   
}
console.log(binaryToDecimal(1010));

