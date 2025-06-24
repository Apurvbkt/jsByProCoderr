const num = [1,2,3,4,5,6]

function add(...agr){
    console.log(agr);
    
    let num = 0
    for(a=0; a< agr.length; a++){
        num+=agr[a]
    }
    console.log(num);
    
    
    
}

add(1,2,3,4,5,6)