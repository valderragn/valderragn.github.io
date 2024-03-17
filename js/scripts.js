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

$(document).ready(function () {
  $("#mainNavbar").click(function(){
    $("#navbarResponsive").css("display") == "none" ? $("#navbarResponsive").css("display", "block") : $("#navbarResponsive").css("display", "none") ;
    $("#navbarResponsive").css("display") == "block" ? $("#mainNavbar").addClass('bg-secondary') : $("#mainNavbar").removeClass('bg-secondary');
    $("#navbarResponsive").css("display") == "block" ? $("#barLogo").css('filter', 'invert(0%)') : $("#barLogo").css('filter', 'invert(100%)');
  });

  $(".navbar-item").click(function(){
    console.log("navbarItem");
    $("#navbarResponsive").css("display", "none") ;
  });
});