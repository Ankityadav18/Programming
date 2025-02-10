// 01 02 03 04 
// 05 06 07 08 
// 09 10 11 12
// 13 14 15 16

let n=4;
let number=0;
for(let i=0;i<n;i++){
    let res=''

    for(let j=0;j<n;j++){
        if(number>=0 && number<9){

        
        number++;

        res+= '0'+ number + ' '
        }
        else{
            number++;

            res+=number + ' '
        }
 
    }

    console.log(res);
}