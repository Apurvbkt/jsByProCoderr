const frt = ['mango', 'guava', 'orange', 'Apple', 'grapes']

// for(i=0; i< frt.length; i++){
//     console.log(frt[i]);
    
// }

for(indexNum of frt){  //this is the syntex
    // console.log(indexNum);
    
}

for(frts of frt){  // this syntex is acceptable (optional)
    // console.log(frts);
    
}


// const name = 'Apurva bhakat'

// for(const names of name){
//     console.log(names);
    
// }

const info = {
    name: 'apu',
    last: 'bkt',
    roll : 5,
    class: 10,
    
}

for(let infos in info){
    // console.log(infos + " :" + info[infos]);
    
}

console.log(Object.keys(info));
