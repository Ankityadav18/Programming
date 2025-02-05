function Count(num){
    let cnt=0;
    do{
        cnt++;
        num=Math.floor(num/10)

    }
    while(num>0)
        return cnt;
}
console.log(Count(123));