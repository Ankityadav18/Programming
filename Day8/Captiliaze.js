function capitiliaze(str){
    let res=' ';
    let character=' ';
    for(let i=0;i<str.length;i++){
        if(character==' ' && str.charAt(i)!=' '){
            res+=str[i].toUpperCase();
        }
        else {
            res+=str[i];
        }
        character=str.charAt(i);
    }
    return res;
}
console.log(capitiliaze("this is a javascript dsa class"));