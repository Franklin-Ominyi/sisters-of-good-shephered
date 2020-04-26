 //toggler
 var togglerbar = document.getElementById("togglerbar");
 var togglemenu = document.getElementById("togglemenu");
 togglemenu.style.display = "none";
 const toggle =()=>{
  if(togglemenu.style.display == "none"){
   togglemenu.style.display = "block";
   togglerbar.style.color = "red";
  }else{
   togglemenu.style.display = "none";
   togglerbar.style.color = "purple";
  }
 }
document.getElementById("togglerbar").addEventListener("click", toggle);

 
//Image slider
var i = 0;
var images = [];
images[0] = "download (16).jpg";
images[1] = "download (15).jpg";
const slider=()=>{
 var slides = document.getElementById('slide').src = images[i];
 if(i<images.length - 1){
  i++;
  
 }else{
  i = 0;
 }
 
 
 setTimeout("slider()", 3000)
}

window.onload = slider;