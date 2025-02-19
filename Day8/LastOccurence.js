function Occurence(str) {
    str = str.trim();

    let max_Word = 0;
    let count = 0;
    let start = 0;
    let end = 0;

       for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            if (max_Word < count) {
                max_Word = count
                start = i - count;
                end = i - 1;
            }

            count = 0;
        }
        else {
            count++;
        }
       }

        if (max_Word <= count) {
            max_Word = count;
            start = str.length - count;
            end = str.length - 1;
        }
    


    return str.slice(start, end + 1);

}

console.log(Occurence('The Sky is blue and dark'));