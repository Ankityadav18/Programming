function Difference(num){
    let sum=0;
    let product=1;
    let diff;
    for(let i=1;i<=num;i++){
        sum+=i;
        product*=i;
        diff=product-sum;
    }
    return diff;
   

}

console.log(Difference(5));