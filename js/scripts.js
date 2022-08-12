var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainNav").style.top = "0";
    
  } else {
    document.getElementById("mainNav").style.top = "-120px";
  }

  if (window.pageYOffset >= 650){
    console.log(window.pageYOffset);
    document.getElementById("mainNav").style.background = "rgba(26, 188, 156, 100)";
    } else {
    document.getElementById("mainNav").style.background = "rgba(26, 188, 156, 0)";
    }

  prevScrollpos = currentScrollPos;
}
// $("#mainNavbar").click(function(){
//   if($("#navbarResponsive").hasClass("show")){
//     document.getElementById("mainNav").style.background = "rgba(26, 188, 156, 100)";
//   }else{
//     document.getElementById("mainNav").style.background = "rgba(26, 188, 156, 0)";
//   }
// });