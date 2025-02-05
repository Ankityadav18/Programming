function Sum(num){
    let sum=0;
    do{
        let rem=num%10;
        sum+=rem;
        num=Math.floor(num/10);
      

    }
    while(num>0)
        return sum;
}
console.log(Sum(123));