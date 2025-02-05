function number(num){
    let ex_sum=0;
    let int_sum=0;
    let temp=num;
    do{
        rem=num%10;
        if(temp==num || num<=9){
            ex_sum=ex_sum+rem;
        }
        else{
            int_sum+=rem;
        }
        num=Math.floor(num/10)
    }while(num>0)
        return ex_sum==int_sum;

}
console.log(number(4567));