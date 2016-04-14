// Tool Tip Script
var ddimgtooltip = {
    tiparray: function () {
        var tooltips = [];                   
        tooltips[0] = ["http://www.softmoc.com/Items/images/WL574CPW_SSS.jpg"];

        return tooltips; //do not remove/change this line
    }(),
    tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips
    tipprefix: 'imgtip', //tooltip ID prefixes
    createtip: function ($, tipid, tipinfo) {
        if ($('#' + tipid).length === 0) { //if this tooltip doesn't exist yet
            return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
                    '<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>' + ((tipinfo[1]) ? '<div style="text-align:left; margin-top:5px">' + tipinfo[1] + '</div>' : '')
                )
                .css(tipinfo[2] || {})
                .appendTo(document.body);
        }
        return null;
    },
    positiontooltip: function ($, $tooltip, e) {
        var x = e.pageX + this.tooltipoffsets[0],
            y = e.pageY + this.tooltipoffsets[1];
        var tipw = $tooltip.outerWidth(),
            tiph = $tooltip.outerHeight(),
            x = (x + tipw > $(document).scrollLeft() + $(window).width()) ? x - tipw - (ddimgtooltip.tooltipoffsets[0] * 2) : x;
        y = (y + tiph > $(document).scrollTop() + $(window).height()) ? $(document).scrollTop() + $(window).height() - tiph - 10 : y;
        $tooltip.css({
            left: x,
            top: y
        });
    },
    showbox: function ($, $tooltip, e) {
        $tooltip.show();
        this.positiontooltip($, $tooltip, e);
    },
    hidebox: function ($, $tooltip) {
        $tooltip.hide();
    },
    init: function (targetselector) {
        jQuery(document).ready(function ($) {
                var tiparray = ddimgtooltip.tiparray;
                var $targets = $(targetselector);
                if ($targets.length === 0) {
                    return;
                }
                var tipids = [];
                $targets.each(function () {
                    var $target = $(this);
                    $target.attr('rel').match(/\[(\d+)\]/); //match d of attribute rel="imgtip[d]"
                    var tipsuffix = parseInt(RegExp.$1); //get d as integer
                    var tipid = this._tipid = ddimgtooltip.tipprefix + tipsuffix; //construct this tip's ID value and remember it
                    var $tooltip = ddimgtooltip.createtip($, tipid, tiparray[tipsuffix]);
                    $target.mouseenter(function (e) {
                        var $tooltip = $("#" + this._tipid);
                        ddimgtooltip.showbox($, $tooltip, e);
                    });
                    $target.mouseleave(function (e) {
                        var $tooltip = $("#" + this._tipid);
                        ddimgtooltip.hidebox($, $tooltip);
                    });
                    $target.mousemove(function (e) {
                        var $tooltip = $("#" + this._tipid);
                        ddimgtooltip.positiontooltip($, $tooltip, e);
                    });
                    if ($tooltip) { //add mouseenter to this tooltip (only if event hasn't already been added)
                        $tooltip.mouseenter(function () {
                            ddimgtooltip.hidebox($, $(this));
                        });
                    }
                });
            }); //end dom ready
    }
};

jQuery(function ($) {
    //Initialize Select Box Replacement
    $(".itemDetailSizeInput").selectBoxIt({
        autoWidth: false,
        'theme':{
            'arrow':'fa fa-chevron-down'
        }
    });
    //End Select Box Init 
        
    //Check If Page is Responsive & Store Value in Variable
    var isResponsive = $("#responsiveTell").is(':visible');

    //Fire tooltip script
    if (isResponsive === false) {
        ddimgtooltip.init("*[rel^=imgtip]");
    }
        
    //This function plays the 3d slider when the button is clicked
    var threesixtyVisible = false;
    $("#itemDetail360play").bind('click', function (e) {
        $("#itemDetailPhotos .bx-wrapper").addClass("itemDetailHide");
        $("#itemDetail360Container").css("display", "block");
        show360();
        $("#itemDetailZoomIcon").addClass("itemDetailHide");
        $(".threesixty").css("height", "inherit");
        threesixtyVisible = true;
        return false;
    });

    //This function hides the 3d slider when the user clicks on the thumbnail images
    $("#itemDetailThumbs a").bind('click', function (e) {
        if (threesixtyStarted === true) {
            shoe.stop();
            $("#itemDetailPhotos .bx-wrapper").removeClass("itemDetailHide");
            $("#itemDetailZoomIcon").removeClass("itemDetailHide");
            $("#itemDetail360Container").css("display", "none");
            threesixtyVisible = false;
            threesixtyStarted = false;
            largeSlider.reloadSlider();
            $(".threesixty_images").replaceWith('<ol class="threesixty_images"></ol>');
        }

    });

    //This stops the 360 from rotating on mouseover 
    $(".threesixty_images").mouseover(function () {
        shoe.stop();
    });

    //This starts the 360 playing again on mouseout
    $(".threesixty_images").mouseout(function () {
        shoe.play();
    });

    //This stops the 360 from playing when a mobile user touches the screen
    $(window).on("touchstart", function () {
        shoe.stop();
    });

    //This starts the 360 playing again after a user stops touching the screen
    $(window).on("touchend", function () {
        shoe.play();
    });

    //Checks to see if 360 is playing or not
    var shoe;
    var threesixtyStarted = false;
    function playMyShoe(){
        shoe.play();
        threesixtyStarted = true;
    }

    //Initializes 360 jQuery Script
    function show360() {
        if (threesixtyStarted === false) {
            shoe = null;
            shoe = $('.360shoe').ThreeSixty({
                totalFrames: 24, // Total no. of image you have for 360 slider
                endFrame: 24, // end frame for the auto spin animation
                currentFrame: 1, // This the start frame for auto spin
                imgList: '.threesixty_images', // selector for image list
                progress: '.spinner', // selector to show the loading progress
                height: 400,
                width: 400,
                navigation: true,
                responsive: true,
                imgArray: arr,
                playSpeed: 100,
                onReady: function() {
                    playMyShoe();
                }
            });
        }
    }
    //End 360 Stuff


    //If page is not responsive, then use thumbnails as pager for bxslider
    var myCustomPager = "";
    if (isResponsive === false) {
        myCustomPager = '#itemDetailThumbs';
    }

    //Initialize bxslider for product photos
     var largeSlider = $('.itemDetailProductImageLarge').bxSlider({
        preventDefaultSwipeY: false,
        preventDefaultSwipeX: false,
        pagerCustom: myCustomPager,
        controls: false,
        infiniteLoop: false,
        touchEnabled: true,
        swipeThreshold: 100,
        onSliderLoad: function () {
            $(".itemDetailProductImageLarge").css("visibility", "visible");
        }
    });

    // Script for ensuring users must select a size before adding to cart
    $("a.addToCartButton").click(function (event) {
        var buttonGroup = $(this).attr("data-btngroup");
        var selectedValue = $('select.itemDetailSizeInput[data-btngroup ="' + buttonGroup + '"]').val();
        if (selectedValue === "") {
            event.preventDefault();
            $('.selectWrapper[data-btngroup ="' + buttonGroup + '"] .selectboxit-container .selectboxit').addClass("sizeAlert");
        }
    });
    $(".itemDetailSizeInput").change(function () {
        var selectedValue = $(this).val();
        var buttonGroup = $(this).attr("data-btngroup");
        $('.selectWrapper[data-btngroup ="' + buttonGroup + '"] .selectboxit-container .selectboxit').removeClass("sizeAlert");
    }); 
    //End Add to Cart Check


    // Pretty Photo for Product Photos
    if (isResponsive === false) {
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false,
            theme: 'pp_softmoc',
            horizontal_padding: 20,
            opacity: 0.8,
            deeplinking: false,
            allow_resize: true,
            default_width: 600,
            default_height: 600,
            show_title: true,
            slideshow: 5000,
            autoplay_slideshow: false
        });
    } else {
        $("a[rel^='prettyPhoto']").unbind('click');
    }
    $("#itemDetailZoomIcon a").click(function () {
        $(".itemDetailProductImageLarge #firstProduct").click();
        return false;
    });
    // End Pretty Photo for Product Photos


    //Script to collapse areas on mobile
    var showCollapse = false;
    if (isResponsive) {
        showCollapse = true;
    }

    //modifies scripts on browser window resize  
    var resizeId;
    var windowWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() !== windowWidth) {
            clearTimeout(resizeId);
            resizeId = setTimeout(resizeActions, 500);
        }
    });
     $(window).on("orientationchange",function(){
        resizeActions();
    });
    function resizeActions(){
        isResponsive = $("#responsiveTell").is(':visible');
        if (isResponsive) {
            showCollapse = true;
            $("a[rel^='prettyPhoto']").unbind('click');
            largeSlider.reloadSlider({
                preventDefaultSwipeY: false,
                preventDefaultSwipeX: false,
                controls: false,
                infiniteLoop: false,
                swipeThreshold:100,
                onSliderLoad: function () {
                $(".itemDetailProductImageLarge").css("visibility", "visible");
                }
            });
        if (threesixtyStarted === true) {
            shoe.stop();
            $("#itemDetailPhotos .bx-wrapper").removeClass("itemDetailHide");
            $("#itemDetailZoomIcon").removeClass("itemDetailHide");
            $("#itemDetail360Container").css("display", "none");
            threesixtyVisible = false;
            threesixtyStarted = false;
            $(".threesixty_images").replaceWith('<ol class="threesixty_images"></ol>');
        }
        } else {
            showCollapse = false;
            $('.mobileCollapse').css('display', '');
            $("a[rel^='prettyPhoto']").prettyPhoto({
                social_tools: false,
                theme: 'pp_softmoc',
                horizontal_padding: 20,
                opacity: 0.8,
                deeplinking: false,
                default_width: 600,
                default_height: 600,
                show_title: true,
                slideshow: 5000,
                autoplay_slideshow: false
            });
            if (threesixtyVisible !== true) {
            largeSlider.reloadSlider({
                preventDefaultSwipeY: false,
                preventDefaultSwipeX: false,
                pagerCustom: '#itemDetailThumbs',
                controls: false,
                infiniteLoop: false,
                swipeThreshold:100,
                onSliderLoad: function () {
                    $(".itemDetailProductImageLarge").css("visibility", "visible");
                }
            });
            }
        }
    }

    $(".mobileSectionHeader").click(function () {
        if (showCollapse === true) {
            $(".mobileSectionHeader").not(this).parent().children(".mobileCollapse").slideUp("fast");
            $(this).parent().children(".mobileCollapse").slideToggle("fast");
            $(this).toggleClass("mobileSectionHeaderOpen");
            $(".mobileSectionHeader").not(this).removeClass("mobileSectionHeaderOpen");
        }
        return false;
    });

    // Initialize BX Slider for Products & Upsell Carousel 
    var upsellSlider = $('.upSellSlider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 80,
        slideMargin: 10,
        pager: false,
        prevText: 'Previous',
        nextText: 'Next'
    });

    // initalize popup
    $(".qvOpen").click(function(e){

    e.preventDefault();
    var startAt = Number($(this).attr('data-index'));
    var inited = false;
    var mySelectIt;
    var showSizes = false;

    $.magnificPopup.open({
      items: data,
      type: 'inline',
      closeMarkup: "<a title='%title%' class='mfp-close'>Close</a>",
        mainClass: "qvBox",
      inline: {
        // Define markup. Class names should match key names.
        markup: '<div class="qvWrapper"><div class="mfp-close"></div>'+
                    '<div class="qvLeftColumn qvMainImg"></div>'+
                        '<div class="qvRightColumn">'+
                            '<h2 class="qvTitle"></h2>'+
                            '<div class="pricewrapper"></div>'+
                            '<div class="qvSizePlaceholder"></div>'+
                            '<div class="qvAddtoCartButton">'+
                                '<a href="#" class="addToCartButton"><i class="fa fa-shopping-cart fa-lg"></i> Ajouter au Panier</a>'+
                            '</div>'+
                            '<div class="qvItemDetails">'+
                                '<p class="qvItemID"></p>'+
                                '<p class="qvItemDesc"></p>'+
                                '<p><strong>Caractéristiques et Avantages::</strong>'+
                                '</p>'+
                                '<ul class="qvFeatures"></ul>'+
                            '</div>'+
                        '</div>'+
                        '<div style="clear:both"></div>'+
                    '</div>',
      },
      gallery: {
        enabled: true,
        arrowMarkup: '<button title="%title%" type="button" class="qvBox-arrow-%dir%"></button>'
      },
      callbacks: {

        open: function () {
             $(".qvSizeInput").change(function () {
                            var selectedValue = $(this).val();
                            if (($('.qvBox .selectboxit').hasClass('sizeAlert')) && (selectedValue !== "")) {
                                $('.qvBox .selectWrapper .selectboxit-container .selectboxit').removeClass("sizeAlert");
                            }
                        });

                        $(".qvBox a.addToCartButton").click(function (event) {

                            var selectedValue = $('.qvBox select.qvSizeInput').val();
                            if (selectedValue === "") {
                                event.preventDefault();

                                $('.qvBox .selectboxit').addClass("sizeAlert");
                            }
                        });

            mySelectIt = this.contentContainer.find('.qvSizeInput').selectBoxIt({
                autoWidth: false,
                'theme':{
                    'arrow':'fa fa-chevron-down'
                }
            });
            inited = true;
            return inited;
        },
        afterChange: function(){
            if (inited === true){
                 //mySelectIt.data('selectBox-selectBoxIt').refresh();

            }
            if (showSizes === true){
                mySelectIt = this.contentContainer.find('.qvSizeInput').selectBoxIt({
                    autoWidth: false,
                    'theme':{
                        'arrow':'fa fa-chevron-down'
                    }
                });
            }
        },

        buildControls: function () {
                        // re-appends controls inside the main container
                        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        },
        closeOnContentClick: false,
        markupParse: function(template, values) {
          var qvobject = {
            qv_id: "<strong>ID d'Article:</strong> "+values.item_id,
            qv_title: values.item_title,
            qv_img: "<img src="+values.item_img+" />",
            qv_features: function() {
                var qv_item_features ="";
                $.each( values.item_features, function( index, value ) {
                    qv_item_features += '<li>'+ value +'</li>';
                });
                return qv_item_features;
            },
            qv_desc: values.item_desc,
            qv_has_sizes: values.has_sizes,
            qv_sizes: function(){
                var qv_item_sizes;
                if(this.qv_has_sizes===true){

                qv_item_sizes=  '<div class="selectWrapper" data-btngroup="1">'+
                                '<select name="I_Size" class="qvSizeInput" data-btngroup="1">'+
                                "<option value=\"\">Choose Size</option>";
                $.each( values.sizes, function( index, value ) {
                    qv_item_sizes +=  '<option value="'+value[0]+'">'+value[1]+'</option>';
                 });
                qv_item_sizes += '</select>'+
                                '</div>';
                showSizes = true;
            }else{
                qv_item_sizes = '<div class="qvSizePlaceholder"></div>';
            }
                 return qv_item_sizes;
            },
            qv_sale: values.is_sale,
            qv_reg_price: values.reg_price,
            qv_sale_price: values.sale_price,
            qv_price: function (){
                var qv_price_markup;
                if(this.qv_sale===true){
                    qv_price_markup = "<div class=\"qvSalePriceWrapper\">Sale: $"+this.qv_sale_price+"<div class=\"qvRegPrice\">Reg: $"+this.qv_reg_price+"</div></div>";
                }else{
                    qv_price_markup = "<div class=\"qvPrice\">$"+this.qv_reg_price+"</div>";
                }
                return qv_price_markup;
            }

          };

          template.find('.qvMainImg').html(qvobject.qv_img);
          template.find('.qvTitle').html(qvobject.qv_title);
          template.find('.pricewrapper').html(qvobject.qv_price());
          template.find('.qvSizePlaceholder').html(qvobject.qv_sizes());
          template.find('.qvItemDesc').html(qvobject.qv_desc);
          template.find('.qvItemID').html(qvobject.qv_id);
          template.find('.qvFeatures').html(qvobject.qv_features());
          template.find('.qvSizeAlert').css("display", "none");
        }
      }
    },startAt);

});




// QUICK VIEW END







});

