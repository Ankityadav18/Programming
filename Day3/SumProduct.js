function sumProduct(num){
    let sum=0;
    let product=1;

    for(let i=1;i<=num;i++){
        sum+=i;
        product*=i;

    }
    return [sum,product]
}
// console.log(sumProduct(5));
let [a,b]=sumProduct(5);
console.log(a);
console.log(b);