function product(num){
    let prod=1;
    for(let i=1;i<=num;i++){
        prod*=i;

    }
    return prod;
}
console.log(product(5));