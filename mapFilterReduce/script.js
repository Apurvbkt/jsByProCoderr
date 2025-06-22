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
                
                // for(i = 0; i < e.length; i++){
                //     // console.log(e[i]);
                    
                //     if(e[i]=='m' || e[i] == "M"){
                //         console.log(e);
                        
                //     }
                    
                // }
                
                return e.toLocaleLowerCase().includes('m')
                
                
            })
            
// console.log(mnt);

// // if(e.length <= 5){
//                 //     console.log(e);                    
//                 // }  
            
//                 return e.length >= 5









const sdt = [
    {
        name:'apu',
        age:24
    },
    {
        name:'bholu',
        age:16
    },
    {
        name:'ram',
        age:10
    },
    {
        name:'lal',
        age:20
    },
    {
        name:'kalu',
        age:18
    },
    {
        name:'ralu',
        age:21
    },
    {
        name:'dholu',
        age:22
    }
]

const student = sdt.filter((e)=>{
    // console.log(e.age );
    
    // if(e.age <= 20){
    //     console.log(e);
        
    // }

    return e.age <= 20
    
})

const stdname = student.map((e)=>{
    // console.log(e.name);
    return e.name
}).filter((e)=>{
    // console.log(e);
    
    return e.includes('a')
})


console.log(stdname);