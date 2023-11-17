 let getColor1 = () =>{
    let randomColor = Math.floor(Math.random()* 16777215);
     let color1 = "#" + randomColor.toString(16);
     let main1 = document.querySelector(".main1")
      main1.style.backgroundColor = color1;
      let h2 =document.querySelector("#color-code1") 
      h2.innerText =color1
      navigator.clipboard.writeText(color1)
 }
 let btn1 = document.querySelector("#btn1")
 btn1.addEventListener("click" , getColor1)




 let getColor2 = () =>{
    let r = Math.floor(Math.random()*225 ) ;
    let g = Math.floor(Math.random()*225 );
    let b = Math.floor(Math.random()*225 );
    let color2 =  `rgb(${r},${g},${b})` ;
   let main2 = document.querySelector(".main2")
   main2.style.backgroundColor = color2;
   let h2 =document.querySelector("#color-code2") 
   h2.innerText = color2

   navigator.clipboard.writeText(color2)

 }

 let btn2 = document.querySelector("#btn2")
 btn2.addEventListener("click" , getColor2)








 let getColor3 = () =>{
    let r = Math.floor(Math.random()*225 ) ;
    let g = Math.floor(Math.random()*225 );
    let b = Math.floor(Math.random()*225 );
    let color2 =  `rgb(${r} ,${g} ,${b})` ;
    let randomColor = Math.floor(Math.random()* 16777215);
     let color1 = "#" + randomColor.toString(16);


     let LGC =  `linear-gradient( ${color1},${color2})`; 
    
   let main3 = document.querySelector(".main3")
   main3.style.background =LGC;

   let h2 =document.querySelector("#color-code3") 
   h2.innerText =LGC;

   navigator.clipboard.writeText(LGC);

 }

 let btn3 = document.querySelector("#btn3")
 btn3.addEventListener("click" , getColor3)

 
 getColor1();
 getColor3();
 getColor2();