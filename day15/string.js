function sum(str){

    let sum=0;
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
            sum+= parseInt(str[i])

        }
    }
return sum;
}
console.log(sum('23@*570'));