/* ----------------------------
        Preloader
-------------------------------- */
//ensures website is loaded
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});




/* ----------------------------
        Typeit.js
-------------------------------- */
new TypeIt('#typeItIntro', {
    strings: ["Hey, I am an iOS and Web Developer fascinated by the future!"],
    speed: 40,
    breakLines: false,
    autoStart: false
});

/* ----------------------------
       Navigation
-------------------------------- */

$(function () {
    
    showHideNav()

    $(window).scroll(function () {
        
        showHideNav()

    });

    function showHideNav() {
        if ($(window).scrollTop() < 600) {

            $("nav").hide()

        } else {

            $("nav").show()

        }
    }

});


/* ----------------------------
       Smooth Scrolling
-------------------------------- */

$(function () {
    
    $("a.smooth-scroll").click(function(event) {
        
        event.preventDefault()
        
        var section_id = $(this).attr("href")
        
        $("html, body").animate({

            scrollTop: $(section_id).offset().top - 100
        
        }, 1250);
        
    })
      
});



/* ----------------------------
      WOW.js
-------------------------------- */

$(function () {
    
  new WOW().init();  
       
})

$(window).on('load', function() {
    
    
    $("#arrow-down i").addClass("animated fadeInDown infinite");
  
   
    
    
    
})
















    