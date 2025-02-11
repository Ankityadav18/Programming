let str = 'HELLO';
let n = str.length;
for (let i = 0; i < n; i++) {
    let res = ''
    for (let j = 0; j <= i; j++) {
        res = res + (str[j]) + ' '
    }
    console.log(res);
}



//! H 
//! H E 
//! H E L
//! H E L L
//! H E L L O