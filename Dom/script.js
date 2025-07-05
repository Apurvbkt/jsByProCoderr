
function sayHi() {
  document.body.children[4].src =
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
}


let img = document.querySelectorAll("img")

// console.log(img);


imgData = ['https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=2048x2048&w=is&k=20&c=oo7SGfjmPkybpqoNccDsYWG-4uxSmn8G79NiLA1mNvs=',
    
'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=',

'https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=1024x1024&w=is&k=20&c=iPdhO2H3jeYh4UWmNlrXNmiiK04iaLykIMiD9u1yDq4='
]


// img[0].src = imgData[0]   
// img[1].src = imgData[1]
// img[2].src = imgData[2]

// for(i=0; i<img.length; i++){
//     img[i].src = imgData[i];
    
// }

// img.forEach((e, i)=>{
//     console.log(e.src = imgData[i]);
    
// })



let anc = document.querySelectorAll('a');
console.log(anc);



for(i = 0; i< anc.length; i++){
  
  console.log(anc[i].style.backgroundColor = 'teal');
  

}

anc.forEach((e)=>{
  e.style.backgroundColor = 'teal'
})

