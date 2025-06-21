const frt = ['mango', 'guava', 'orange', 'Apple', 'grapes']

// for(i=0; i< frt.length; i++){
//     console.log(frt[i]);
    
// }

for(indexNum of frt){  //this is the syntex
    console.log(indexNum);
    
}

for(frt of frt){  // this syntex is acceptable (optional)
    console.log(frt);
    
}