// function add(){
    // console.log(arguments[0]);
    // console.log(arguments[2]);
    // console.log(arguments.length);
//     let ans = 0
//     for(i = 0; i< arguments.length; i++){
//         ans += arguments[i]
//     }
//     // console.log(ans);
    
    
    
//     return ans
    
// }



// const add =  function(){
    
//     let ans = 0
//     for(i = 0; i< arguments.length; i++){
//         ans += arguments[i]
//     } 
    
    
//     return ans
    
// }




// const add =  (...nums)=>{ // we can not use argument word in ES6 because it's old and have some vurnabilities. 
        
//     let ans = 0
//     for(i = 0; i< nums.length; i++){
//         ans += nums[i]
//     } 
    
    
//     return ans
    
// }



  function add(){
      
      // console.log(arguments);
      const nwArr = Array.from(arguments)
      // console.log(nwArr);
      
      
    // debugger
   const arr =  nwArr.reduce((acc, crr)=>{
        // console.log(acc, crr);
        return acc + crr
        
    },0)
    
    console.log(arr)
     
}
// add(1,2,3,4,5)




function add2(){

    
    // console.log(arguments)
    const arr = Array.from(arguments)
    
    const ans = arr.reduce((a, c)=>{
        return  a + c
    },0)
    
    console.log(ans);
    
}


// add2(1,2,3,4,5)