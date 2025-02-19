let n=20;
for(let i=0;i<n;i++){
    let res='';
    for(let j=0;j<i;j++){
        res=res + ' ' + ' '
    }
    for(let k=0;k<2*n-(2*i+1);k++){
        res+='*' + ' '
    }

    console.log(res);
}