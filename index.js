const savebutton=document.getElementById("savebuttonn");
const inputtittle=document.getElementById("inputtittle");
const textarea=document.getElementById("textarea");
const color1=document.getElementById("col1");


savebutton.addEventListener("click",()=>{
     if(true){};

});

col1.addEventListener("click",()=>{
    col1.querySelector("span").style.display="inline";
    col2.querySelector("span").style.display="none";
    col3.querySelector("span").style.display="none";
    col4.querySelector("span").style.display="none";
    col5.querySelector("span").style.display="none";
});

col2.addEventListener("click",()=>{
    col1.querySelector("span").style.display="none";
    col2.querySelector("span").style.display="inline";
    col3.querySelector("span").style.display="none";
    col4.querySelector("span").style.display="none";
    col5.querySelector("span").style.display="none";
});

col3.addEventListener("click",()=>{
    col1.querySelector("span").style.display="none";
    col2.querySelector("span").style.display="none";
    col3.querySelector("span").style.display="inline";
    col4.querySelector("span").style.display="none";
    col5.querySelector("span").style.display="none";
});

col4.addEventListener("click",()=>{
    col1.querySelector("span").style.display="none";
    col2.querySelector("span").style.display="none";
    col3.querySelector("span").style.display="none";
    col4.querySelector("span").style.display="inline";
    col5.querySelector("span").style.display="none";
});

col5.addEventListener("click",()=>{
    col1.querySelector("span").style.display="none";
    col2.querySelector("span").style.display="none";
    col3.querySelector("span").style.display="none";
    col4.querySelector("span").style.display="none";
    col5.querySelector("span").style.display="inline";
});