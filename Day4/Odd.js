function  Odd(num) {
    let sum=0;
    do {
        let res = num % 10;
        if (res % 2!=0) {
          sum+=res;
        }
            num = Math.floor(num / 10)
    } while(num > 0)
        return sum;
}
console.log(Odd(123));