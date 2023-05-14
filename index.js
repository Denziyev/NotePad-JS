const savebutton=document.getElementById("savebuttonn");
const inputtittle=document.getElementById("inputtittle");
const textarea=document.getElementById("textarea");
const color1=document.getElementById("col1");
const color2=document.getElementById("col2");
const color3=document.getElementById("col3");
const color4=document.getElementById("col4");
const color5=document.getElementById("col5");
const colorr=document.getElementsByClassName("colorr");
const notesdiv=document.getElementById("notearea");

// const boolchoosecolor=()=>{return colorr.find((element)=>{element.querySelector("span").style.display="inline"});} 

// const boolchoosecolor=()=>{ return colorr.filter((element)=>{element.querySelector("span").style.display="inline"}).length};
// const boolchoosecolor=()=>{
//     for(let i=0;i<colorr.length;i++){
//         if(colorr[i].querySelector("span").style.display=="inline"){
//             return colorr[i];
//         }
//         if(i==colorr.length-1){
//             return false;
//         }
//     }
// }

console.log(colorr);

savebutton.addEventListener("click",()=>{
      if(!inputtittle.value.trim()){
        alert("Please write note title");  return;      
      }
      if(!textarea.value.trim()){
        alert("Please write note");      return;
      }
    //   if(true){
    //     console.log(boolchoosecolor); 
    //   }

     const newdiv=document.createElement("div");
     newdiv.style.width="300px";
     newdiv.style.height="350px";
     newdiv.style.display="inline-block";
     newdiv.style.borderRadius="15px";
     newdiv.style.border="2px dashed rgb(255, 213, 79)";
     newdiv.style.margin="20px 20px 10px";
     newdiv.innerHTML= `
        <div style="border-top-left-radius: 15px; display:flex; justify-content: space-between;   border-top-right-radius: 15px;background-color: rgba(255, 213, 79, 0.4);text-align: left; padding: 10px;position: relative;">
        <h4>inputtittle.value.trim()<h4>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="Content_deleteBtn__mQsUR" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path></svg>
        </div>
     `
     notearea.append(newdiv);

      inputtittle.value=null;
      textarea.value=null;
      for(let i=0;i<colorr.length;i++){
        colorr[i].querySelector("span").style.display="none";
    }

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







