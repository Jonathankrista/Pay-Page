 $(document).ready(function() {

	 $("#countryFlagBtn").click(function() {
         $("#countryChange").slideToggle(50);
				 $("#countryFlagBtn").toggleClass("borderBottomRadius");
     });

     $("#header-search").click(function() {
         $("#search").toggle(100);
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
          type: 'iframe',
          mainClass: 'advSearch advSearchFrameBox',
          closeMarkup: "<a title='%title%' class='mfp-close'>Close</a>",
          iframe: {
            markup: '<div class="mfp-iframe-scaler">'+                    
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '<div class="mfp-close"></div>'+
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
            }
     });

     $("#advSearch").click(function(e){
        e.preventDefault();
        $('.open-magnific').magnificPopup('open');
     });
     


      if(jQuery().selectBoxIt) {
         $(".customSelect").selectBoxIt({
            autoWidth: false,
            copyClasses: 'container',
            aggressiveChange: true,
            'theme':{
                'arrow':'fa fa-chevron-down'
            }
        });
     }
     $(window).scroll(function(){
        if($(window).scrollTop() > 800){
            $("#back-to-top").fadeIn(200);
        } else{
            $("#back-to-top").fadeOut(200);
        }
    });

    $('#back-to-top, .back-to-top').click(function() {
        $('html, body').animate({ scrollTop:0 }, '800');
        return false;
    });

    $("#orderTrackingNavButton").click(function(e){
        $("#trackingOrderBox").slideToggle(100);
        e.preventDefault();
        $(this).toggleClass('orderTrackingNavButtonActive');
    });

 });
