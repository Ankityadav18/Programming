function Prime(num){
    if(num==0 || num==1){
        return "Not Prime"
    }
for(let i=2;i<= Math.floor(num/2);i++){
    if(num%i==0){
        return "Not Prime Number";
    }
}
return "Prime";

}
console.log(Prime());

function countDigit(num){
    let count=0;

    do{
        let rem=num%10;
        let res=Prime(rem);
        if(res){
            count++;

        }
        num=Math.floor(num/10)
    }while(num<0){
        return count;
    }

}
console.log(countDigit(425))