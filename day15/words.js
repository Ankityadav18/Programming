function words(str){
    str=str.split(' ')
    console.log(str);

    let reverserd=str.reverse();
    return reverserd.join(' ')

}
console.log(words('THE SUN IS SHINING'));