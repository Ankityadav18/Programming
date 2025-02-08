function Maximum(str) {
    str = str.trim();
    console.log(str);
    let max = 0;

    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            if (max < cnt) {
                max = cnt;
           
            } 
            cnt=0;
        }
            else {
                cnt++;
            }

            if (max < cnt) {  // we are writting this because if the last word in the sentence is having more character then we cannot be able to find that word count in the iteration.
                max = cnt;
            }
        }
        return max;
    }
    console.log(Maximum("The sky is blue"))


