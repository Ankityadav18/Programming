function characterFrequency(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(arr.includes(ch)){
            continue;
        }
        else {
            arr.push(ch);
            let count=1
            for(let j=i+1;j<str.length;j++){
                if(ch==str[j])
                count++;
            }
        
          if(count>1){
            console.log(`the first character is ${ch}`);
            break;
          }
        }    
    }

}
characterFrequency('abccd');


