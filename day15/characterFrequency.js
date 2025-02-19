// let str='abacd'
// for(let i=0;i<str.length;i++){
//     let ch=str[i];
//     let count=1;
//     for(let j=i+1;j<str.length;j++){
//         if(ch==str[j]){
//             count++;
//         }
//     }
//     console.log(`The ${ch} is repeating for ${count} times`);
// }
//! This will not give the exact output.






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
        
            console.log(`The ${ch} is repeating for ${count} times`);
        }
       

    
    }

}
characterFrequency('abcd');

