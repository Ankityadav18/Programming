let n = 3;
let number = 0;
for (let i = 0; i < n; i++) {
    let res = '';
    for (let j = 0; j <= i; j++) {
        res = res + (String.fromCharCode(65 + number)) + ' '
        number++;
    }
    console.log(res);
}