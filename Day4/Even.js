function Even(num) {
    do {
        let res = num % 10;
        if (res % 2 == 0) {
            console.log(res);
        }
            num = Math.floor(num / 10)
    } while(num > 0)
}
Even(123)