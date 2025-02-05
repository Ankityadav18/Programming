function power3(num){
    if(num==1){
        return true;
    }
    while(num!==1){
        if(num%3!=0){
            return false;
        }else{
            num=Math.floor(num/3);
        }
        
    }
    return true;
}
console.log(power3(90));