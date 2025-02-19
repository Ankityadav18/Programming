function character(str){
    let obj={};
    for(let i=0;i<str.length;i++){
        let ch=str[i]
        if(obj[ch]){
            obj[ch]=obj[ch]+1;

        }else{
            obj[ch]=1;
        }
    }
return obj;
}
let res=character('abccd');
for(let key in res){
    console.log(`the ${key} is repeating for ${res[key]} times`);
}