function maximum(str){
    let obj={};
    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(obj[ch]){
            obj[ch]=obj[ch]+1;
        }
        else{
            obj[ch]=1;
        }
    }

let maxchar=''
let max=0
for(let key in obj){
    if(max<obj[key]){
        max=obj[key];
        maxchar=key
    }
}
return `the character ${maxchar} is for ${max} times`

}
console.log(maximum('abccd'));