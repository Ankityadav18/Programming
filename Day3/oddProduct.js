function oddProduct(num){
    let product=1;
    for(let i=1;i<=num;i++){
        if(i%2!=0){
            product*=i;
        }
    }
    return product;

}
console.log(oddProduct(5));