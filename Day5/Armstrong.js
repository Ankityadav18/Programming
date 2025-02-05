function isArmstrong(num){
    
    
    do{
    let sum=0;
    let rem=num%10;
    sum+=rem*rem*rem;
    num/=10;
    }
    while(num>0)
    if(sum===num){
        console.log("Armstrong");
    }
    else{
        console.log("Not a Armstrong Number");
    }



}
isArmstrong(153)