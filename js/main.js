$(document).ready(function(){
    if ($(window).width() < 990) {
      $("#ham").click(function(){

          $(".nav-all").toggle().css("visibility","visible")
      })
    }
})