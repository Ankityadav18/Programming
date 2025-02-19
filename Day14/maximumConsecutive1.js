function maximumConsecutiveOne(arr) {

    let n = arr.length;
    let count = 0;
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            count = 0
        } else {
            count++;
            result = Math.max(result, count);
        }
    }
    return result

}
console.log(maximumConsecutiveOne([1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]));