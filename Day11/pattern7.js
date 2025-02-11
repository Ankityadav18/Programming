let n=4
for(let i=0;i<n;i++){
    let res=''
    for(let j=0;j<n-i-1;j++){
        res+= ' '
    }
    for(let j=0;j<=i;j++){
        res+= "*" 
    }
    console.log(res);
}




 //!   *
// !  **
// ! ***
// !****