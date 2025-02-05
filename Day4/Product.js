function Product(num) {
    let prod = 1;
    do {
        let rem = num % 10;
        prod *= rem;
        num = Math.floor(num / 10)

    }
    while (num > 0)
    return prod;

}
console.log(Product(123));