$(document).ready(function() {

    $("#scrollup").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '0').css("scroll-behavior","smooth");
      });
})