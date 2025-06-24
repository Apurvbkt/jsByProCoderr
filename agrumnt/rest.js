const num = [1,2,3,4,5,6]

// function add(...agr){
//     // console.log(agr);
    
//     let num = 0;
//     for(a=0; a< agr.length; a++){
//         num+=agr[a]
//     }
//     console.log(num);
    
    
     
// }

// add(...num)


function add(...arg){
    // console.log(arg);
   const ans = arg.reduce((a, c)=>{
        return a+c
    },0)
    console.log(ans);
    
}

add(...num)