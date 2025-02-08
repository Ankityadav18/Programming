function countVowel(str){
    let count=0;
for(let i=0;i<str.length;i++){
    str=str.toLowerCase();
    if(str.charCode(i)>=97 && str.charCodeAt(i)<=122){
    if(!((str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u'))){
        count++;
     
    }
}
   
}
return count;


}
console.log(countVowel("welCome"));
