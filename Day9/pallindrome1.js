function pallindrome(str){
    str=str.toLowerCase().trim();
    let res=''
    for(let i=str.length-1;i>=0;i--){
        res+=str[i];
    }
    return str==res?true:false


}
console.log(pallindrome('hello'));