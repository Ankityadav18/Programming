let n=8;
for(let i=0;i<n;i++){
    let res='';
    for(let j=0;j<i;j++){
        res=res + ' ' + ' '
    }
    for(let k=0;k<n-i;k++){
        res+= "*" + ' '
    }
    console.log(res);
}