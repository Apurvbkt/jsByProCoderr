const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

// months.forEach((e)=>{
//     console.log(e);
    
// })

// const mnt =  months.map((e, index )=>{
//                 console.log(index + 1 ,e);  
//                 // return e.toLowerCase()
//                 return e.toUpperCase() // map array return krta hai. to agar kuch return krna hoto go for map
//             })
            
// console.log(mnt);



// const mnt1 =  months.forEach((e, index )=>{
//                 console.log(index + 1 ,e);  
//                 // return e.toLowerCase()
//                 return e.toUpperCase() // forEach undefine return krta hai.
//             })
            
// console.log(mnt1);


const mnt =  months.filter((e, index )=>{
                // console.log(e);
                
                for(i = 0; i < e.length; i++){
                    // console.log(e[i]);
                    
                    if(e[i]=='m' || e[i] == "M"){
                        console.log(e);
                        
                    }
                    
                }
                
                
            })
            
// console.log(mnt);

// // if(e.length <= 5){
//                 //     console.log(e);                    
//                 // }  
            
//                 return e.length >= 5