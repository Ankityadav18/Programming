// ! 1 
// ! 2 4 
// ! 3 5 7 
// ! 6 8 10 12         
// ! 9 11 13 15 17     
// ! 14 16 18 20 22 24 

let n=6;
let odd=1;
let even=2;
for(let i=0;i<n;i++){
    let res=''
    for(let j=0;j<=i;j++){
        if(i%2==0){
            res=res + odd + ' '
            odd+=2
        }
        else{
            res=res + even + ' ';
            even+=2;
        }
    }
    console.log(res);
}







