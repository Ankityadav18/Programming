let n=4;
for(let i=0;i<n;i++){
    let res='';
    for(let j=0;j<n-i-1;j++){
        res+= ' ' + ' '
    }
    for(k=0;k<2*i+1;k++){
        if((i==n-1) || (k==0) || (k==2*i) ){
            res+='1' + ' '
        }
        else {
            res=res + '0' + ' '
        }
    }
    console.log(res);
}

 