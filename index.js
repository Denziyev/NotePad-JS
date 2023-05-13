const savebutton=document.getElementById("savebuttonn");
const inputtittle=document.getElementById("inputtittle");
const textarea=document.getElementById("textarea");
const color1=document.getElementById("col1");
const color2=document.getElementById("col2");
const color3=document.getElementById("col3");
const color4=document.getElementById("col4");
const color5=document.getElementById("col5");
const colorr=document.getElementsByClassName("colorr");



savebutton.addEventListener("click",()=>{
     if(true){};

});



const tick = (i) =>{
    for(let i=0;i<colorr.length;i++){
        colorr[i].querySelector("span").style.display="none";
    }
    colorr[i].querySelector("span").style.display="inline";
}
color1.addEventListener("click",()=>{tick(0)});
color2.addEventListener("click",()=>{tick(1)});
color3.addEventListener("click",()=>{tick(2)});
color4.addEventListener("click",()=>{tick(3)});
color5.addEventListener("click",()=>{tick(4)});







