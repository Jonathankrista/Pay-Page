$(document).ready(function () {
    var sliderWrapper = $("#homeSlider");

    function slideToFirst() {
        try {
            sliderWrapper.slick("slickGoTo", 0, true);
        }
        catch(error) {
            setTimeout(slideToFirst, 100);
            return;
        }
            $('.heroLoaderWrapper').css('display','none');
    }
    slideToFirst();

    if($('#mobileTell').is(':visible')) {
        $('.myImage').each(function(i, obj) {
            var initMobileImage = "img/mobileloader.gif";
            $(this).attr("src", initMobileImage);
        });
    }else if($('#tabletTell').is(':visible')) {
        $('.myImage').each(function(i, obj) {
            var initTabletImage = "img/tabletloader.gif";
            $(this).attr("src", initTabletImage);
        });
    }else if($('#tabletTell').is(':hidden') && $('#mobileTell').is(':hidden') ) {
        $('.myImage').each(function(i, obj) {
            var initLargeImage = "img/desktoploader.gif";
            $(this).attr("src", initLargeImage);
        });
    }

    var myImage = $('.myImage');
    var mobileTell = $('#mobileTell');
    var tabletTell = $('#tabletTell');
    function loadHeroImages(){
        if(mobileTell.is(':visible')) {
            myImage.each(function(i, obj) {
                var mobileImage = $(this).attr("data-src-mobile");
                $(this).attr("src", mobileImage);
            });
        }else if(tabletTell.is(':visible')) {
            myImage.each(function(i, obj) {
                var tabletImage = $(this).attr("data-src-tablet");
                $(this).attr("src", tabletImage);
            });
        }else if(tabletTell.is(':hidden') && mobileTell.is(':hidden') ) {
            myImage.each(function(i, obj) {
                var largeImage = $(this).attr("data-src-large");
                $(this).attr("src", largeImage);
            });
        }
    }

    loadHeroImages();

    var mySlider = sliderWrapper.slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
            }
        }]
    });



    //modifies scripts on browser window resize
    var resizeId;
    var windowWidth = $(window).width();
    $(window).resize(function() {
    if ($(window).width() !== windowWidth) {
        clearTimeout(resizeId);
        resizeId = setTimeout(resizeActions, 500);
    }
    });

    function resizeActions(){
        loadHeroImages();
        sliderWrapper.slick('refresh');
    }

    $(window).on("orientationchange",function(){
    resizeActions();
    });

});
