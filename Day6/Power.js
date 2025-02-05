
function Power(num){
    if(num==1) return true;
  while(num!=1){
   
    if(num%2!==0){
        return  false;
    }
    else{
        num=Math.floor(num/2)
    }
    return true;

  }
  

}
console.log(Power(130));