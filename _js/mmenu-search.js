 $(document).ready(function() {

   $("#countryFlagBtn").click(function() {
     $("#countryChange").slideToggle(50);
     $("#countryFlagBtn").toggleClass("borderBottomRadius");
   });

   $("#countryFlagBtnMobile").click(function() {
     $("#countryChangeMobile").slideToggle(50);
     $("#countryChangeMobile").toggleClass("countryChangeML");
     $("#countryFlagBtnMobile").toggleClass("borderBottomRadiusMobile");
   });

   $("#header-search").click(function() {
     if ($("#textfield").hasClass("searchOn")) {
       $("#textfield").removeClass("searchOn").blur();
       $("#search").hide(200);
     } else {
       $("#search").show(200);
       $("#textfield").addClass("searchOn").focus();
     }
   });

   $("textfield.searchOn").blur(function() {
     $("#search").hide(200);
     $("#textfield").removeClass("searchOn");
   });



   $('#mobile-menu').mmenu({
     "extensions": ["border-full", "effect-slide-panels-100", "pageshadow", "theme-dark", "multiline"],
     "navbar": {
       "title": "<a href='/ca' id='mmhome-top'>HOME</a>"
     },
     "navbars": [{
       "position": "top"
     }]
   });

   $('#myaccount-menu').mmenu({
     "offCanvas": {
       "position": "right"
     },
     "extensions": ["border-full", "effect-slide-panels-100", "pageshadow", "theme-dark", "multiline"],
     "navbar": {
       "title": "My Account Rewards"
     },
     "navbars": [{
       "position": "top"
     }]
   });

   $("#my-account").click(function() {
     $("#myAccountArea").slideToggle(100);
     $("#my-account .fa-times").toggle();
     $("#my-account .fa-chevron-down").toggle();
   });

   $('.open-magnific').magnificPopup({
     type: 'inline',
     mainClass: "advSearch",
     prelaoder: false,
     closeMarkup: "<a title='%title%' class='mfp-close'>Close</a>",
     midClick: true
       // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
   });

   if (jQuery().selectBoxIt) {
     $(".customSelect").selectBoxIt({
       autoWidth: false,
       copyClasses: 'container',
       aggressiveChange: true,
       'theme': {
         'arrow': 'fa fa-chevron-down'
       }
     });
   }
   $(window).scroll(function() {
     if ($(window).scrollTop() > 800) {
       $("#back-to-top").fadeIn(200);
     } else {
       $("#back-to-top").fadeOut(200);
     }
   });

   $('#back-to-top, .back-to-top').click(function() {
     $('html, body').animate({
       scrollTop: 0
     }, '800');
     return false;
   });

   $("#orderTrackingNavButton").click(function(e) {
     $("#trackingOrderBox").slideToggle(100);
     e.preventDefault();
     $(this).toggleClass('orderTrackingNavButtonActive');
   });
   $("#orderTrackingCloseButton").click(function(e) {
     e.preventDefault();
     $("#trackingOrderBox").slideToggle(100);
     $('#orderTrackingNavButton').toggleClass('orderTrackingNavButtonActive');
   });
 });
