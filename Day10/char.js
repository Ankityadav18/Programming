let n=3;
for(let i=0;i<n;i++){
    let res='';
    for(let j=0;j<n;j++){
        res =res + (String.fromCharCode(65+i)) + ' '
    }
    console.log(res);
}