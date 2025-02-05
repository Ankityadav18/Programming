function Square(num){
    let sum=0;
    do{
        let res=num%10;
        res*=res;
        sum+=res;
        num=Math.floor(num/10);
    }
    while(num>0)
        return sum;

}
console.log(Square(123));