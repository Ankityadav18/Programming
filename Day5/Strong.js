function  isStrong(n){
    let sum=0;
    let  temp=n;

    do{
        let rem=n%10;
        sum+=factorial(rem);
        n=Math.floor(n/10);

    }while
        (n>0)
        return temp=sum;
    
}

isStrong(145);

function factorial(n){
    if(n==0){
        return 1;
    }
    let fact=1;
    for(let i=n;i>=1;i--){
        fact=fact*i
    }
    return fact;
}