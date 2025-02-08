function Captital(str){
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            console.log( `The charcater is ${str[i]}`);
        }
    }

}
Captital("Hello")