// NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
// NAVBAR


// HERO TITLE
 let words = ["Website","Application","Wordpress"]
function changeText(){
  i = 0;
  setInterval(function(){ $('#words').fadeOut(function(){
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 2000)
}
changeText();
// HERO TITLE