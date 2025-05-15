// true ? 'apurv' : 100

let name = 'apurv'

// if(name == 'apurv'){
//     console.log('true name matched');
    
// }else{
//     console.log('name not matched');
    
// }

 
let ans = ((name == 'apurv') && (name.length == 5)) ? 'true name matched' : 'false not matched'
console.log(ans);


//2

let gender  = 'f'

let res = `${(gender.toLocaleUpperCase() == 'F') || (gender.toLocaleUpperCase() == 'M') ? 'She' : 'He'  } is a collage student  `

console.log(res);



let res = (gender.toLocaleUpperCase() === 'F')  ? 'She is a college student' : (gender.toLocaleUpperCase() === 'M') ? 'He is a college student' 
    : 'Not a student.';



