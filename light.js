let getlight=document.querySelector("#light");
let getonbtn=document.querySelector("#onbtn");
let getoffbtn=document.querySelector("#offbtn");

getonbtn.addEventListener("click",function(){
    getlight.style.backgroundColor="yellow";
    getlight.style.borderColor="yellow";
})

getoffbtn.addEventListener("click",function(){
    getlight.style.backgroundColor="white";
    getlight.style.borderColor="black";
  
})