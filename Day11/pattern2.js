let n = 4;
for (let i = 0; i < n; i++) {
    let res = ''
    for (let j = 0; j <= i; j++) {
        res = res + (j + 1) + ' '
    }
    console.log(res);
}