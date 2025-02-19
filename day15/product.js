function product(str) {
    let product = 1;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            product *= parseInt(str[i])
        }
    }
    return product;

}
console.log(product('23@*57'));