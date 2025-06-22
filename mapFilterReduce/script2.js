const num = [1,2,3,4] 

const ans =  num.reduce((acc, curr)=>{
    console.log(acc, curr);
    return(acc+curr);
    
    
},0)

console.log(ans);
