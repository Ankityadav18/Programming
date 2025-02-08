function targetNumber(num, target) {
while(num>0){
        let rem = num % 10;
        if (rem === target) {
            console.log("target is  present in number");
            return;
   
        }
        
    
          
          num=Math.floor(num/10)
        }
        
        
       console.log("Not present");

  


}

targetNumber(455, 66)