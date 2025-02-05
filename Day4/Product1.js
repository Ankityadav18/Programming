function Product1(num) {
    let prod = 1;
    do {
        let rem = num % 10;
        if (rem % 2 == 0) {
            prod *= rem;
        }
        num = Math.floor(num / 10);
    }
    while (num > 0)
    return prod;


}
console.log(Product1(123));