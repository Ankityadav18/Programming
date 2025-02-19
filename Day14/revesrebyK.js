function reverseByK(arr,d){
    let n=arr.length;
    d=d%n;
    reverse(arr,0,d-1);
    reverse(arr,d,n-1);
    reverse(arr,0,n-1)

}
function reverse(arr,start,end){
    while(start<=end){
        let temp=arr[start]
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }

}
const arr=[1,2,3,4,5,6];
const d=2;
reverseByK(arr,d);
console.log(arr.join(' '));




