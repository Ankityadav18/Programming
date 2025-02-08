function count(str){
    let cnt=0;
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            cnt++;

        }
    }
    return cnt;

}
console.log(count("Hello World"));