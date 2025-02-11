// ! 1 0 1 0
// ! 1 0 1 0
// ! 1 0 1 0
// ! 1 0 1 0

let n=4
for(let i=0;i<n;i++){
    let res=''
    for(let j=0;j<n;j++){
        if(j%2==0){
            res=res + '1' + ' '
        }
        else{
            res=res + '0' + ' '
        }
    }
    console.log(res);
}