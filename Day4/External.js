function externalSum(num){
    let sum=0;
    let temp=num;
    do{
        let rem=num%10;
        if(temp==num || num<=9){
            sum+=rem;

        }
        
        num=Math.floor(num/10);
    }
    while(num>0){
        return sum;
    }

}
console.log(externalSum(425));