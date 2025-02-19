function captial(str){
    let res='';
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            res+=str[i]
        }
    }
return res;
}
console.log(captial('The Sky is Blue'));