
// let num=456;
// do{
//     let rem=num%10;
//     console.log(rem);
//     num=Math.floor(num/10)
// }
// while(num>0)

function Digit(num) {
    do {
        let rem = num % 10;
        console.log(rem);
        num = Math.floor(num / 10)

    }
    while (num > 0)

}

Digit(456)