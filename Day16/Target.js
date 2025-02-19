

let target=2
function repeatTarget(str,target){
    let obj={};
    let array=[];
    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(obj[ch]){
            obj[ch]=obj[ch]+1;
        }
        else {
            obj[ch]=1;
        }
    }

    for(let key in obj){
        if(obj[key]==target){
            array.push(key)
        }
    }
    return array;
}
console.log(repeatTarget('aabbc',target));
console.log(`the char repeated for ${target} times are ${repeatTarget("aabbc",target)}`);