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
console.log(Prime(17));