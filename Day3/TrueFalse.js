function sum(num){
    let sum=0;
    for(let i=0;i<=num;i++){
        sum+=i;


    }
    if(sum%2==0){
        return true;
    }

    return false;

}

console.log(sum(5));