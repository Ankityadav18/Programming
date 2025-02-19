let n=4;
for(let i=0;i<n;i++){
    let res='';
    for(let j=0;j<i;j++){
        res+= ' ' + ' '
    }
    for(k=0;k<(2*(n-1-i)+1);k++){
        if((i==0) || (k==0) || k==(2*(n-i)-2) ){
            res+='*' + ' '
        }
        else {
            res=res + ' ' + ' '
        }
    }
    console.log(res);
}
