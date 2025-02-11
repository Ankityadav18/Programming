let n = 4;
let number = 0;
for (let i = 0; i < n; i++) {
    let res = '';
    for (let j = 0; j <= i; j++) {
        number++;
        res = res + number + ' '
    }
    console.log(res);
}