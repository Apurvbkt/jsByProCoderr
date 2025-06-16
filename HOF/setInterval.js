// one method 
const timer1 = setInterval(function(){console.log('hello')
}, 3000)
clearInterval(timer1)



// second method
const timerTest =  setInterval(timer2, 2000)

function timer2(){
    console.log('hello world');
    
}
clearInterval(timerTest)
