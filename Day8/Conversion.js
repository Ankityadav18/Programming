function Conversion(str){

    let res="";
    for(let i=0;i<str.length;i++){
        
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            res+=str[i].toLowerCase();
         
           
        }
        else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
         res+=str[i].toUpperCase();
        }
        else{
            res+=str[i];
        }

        
    }
    return res;

}
console.log(Conversion("thiS iS DsA ClaSS"));