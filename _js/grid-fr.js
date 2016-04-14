jQuery(document).ready(function($) {
    //Crop Description Titles
    $(".itemSubtitle").dotdotdot({
        wrap: 'word',
        watch: "window"
    });

      var qvSlider;
      var shoe;
      var threesixtyVisible = false;
      var mySelectIt;
      var threesixtyStarted = false;
      var quickViewPopup = $('.ajax-popup-link').magnificPopup({
        type: 'ajax',
        closeMarkup: "<a title='%title%' class='mfp-close'>Close</a>",
        mainClass: "qvBox",
        gallery: {
                    enabled: true,
                    arrowMarkup: '<button title="%title%" type="button" class="qvBox-arrow-%dir%"></button>'
                },
        callbacks: {
                    buildControls: function() {
                        // re-appends controls inside the main container
                        if (this.arrowLeft){
                            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                        };                   
                    },
                    ajaxContentAdded: function() {
                      qvSlider = $('.qvMainImg').bxSlider({
                            pagerCustom: '.qvThumbs',
                            controls: false,
                            infiniteLoop: false
                        });
                      $(".qvSizeInput").change(function() {
                            var selectedValue = $(this).val();
                            if (($('.selectWrapper .selectboxit-container .selectboxit').hasClass('sizeAlert')) && (selectedValue !== "")) {
                                $('.selectWrapper .selectboxit-container .selectboxit').removeClass('sizeAlert');
                            }
                        });

                        $("a.addToCartButton").click(function(event) {

                            var selectedValue = $('select.qvSizeInput').val();
                            if (selectedValue === "") {
                                event.preventDefault();
                                $('.selectWrapper .selectboxit-container .selectboxit').addClass('sizeAlert');
                            }
                        });

                        $(".detailTab").click(function() {
                            $(".qvDetail").css("display", "block");
                            $(".qvInitialView").css("display", "none");
                            $(".detailTab").addClass("qvActive");
                            $(".quickViewTab").removeClass("qvActive");
                        });
                        $(".quickViewTab").click(function() {
                            $(".qvDetail").css("display", "none");
                            $(".qvInitialView").css("display", "block");
                            $(".quickViewTab").addClass("qvActive");
                            $(".detailTab").removeClass("qvActive");
                        });

                        mySelectIt = $('.qvSizeInput').selectBoxIt({
                            autoWidth: false,
                            'theme':{
                                'arrow':'fa fa-chevron-down'
                            }
                        });
                        $(".qv360play").bind('click', function() {
                            $(".bx-wrapper").addClass("qvHide");
                            $(".qv360Container").css("display", "block");
                            show360();
                            $(".threesixty").css("height", "inherit");
                            threesixtyVisible = true;
                            return false;
                        });

                        $(".qvThumbs a").bind('click', function() {
                            if (threesixtyStarted === true) {
                                shoe.stop();
                                $(".bx-wrapper").removeClass("qvHide");
                                $(".qv360Container").css("display", "none");
                                threesixtyVisible = false;
                                threesixtyStarted = false;
                                qvSlider.reloadSlider();
                                $(".threesixty_images").replaceWith('<ol class="threesixty_images"></ol>');
                            }
                        });
                        $(".threesixty_images").mouseover(function() {
                            shoe.stop();
                        });

                        $(".threesixty_images").mouseout(function() {
                            shoe.play();
                        });

                        $(window).on("touchstart", function() {
                            shoe.stop();
                        });

                        $(window).on("touchend", function() {
                            shoe.play();
                        });
                                                threesixtyStarted = false;

                        function playMyShoe(){
                            shoe.play();
                            threesixtyStarted = true;
                        }

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
                    }
                  },
                    closeOnContentClick: false,
                    modal:true,
                    ajax: {
                            settings: {
                                type: 'GET', // or POST, whatever you need...
                                cache: false,
                                dataType: 'html'
                            },
                            tError: '<div class="qvWrapper" id="qvItem1">Le contenu ne peut &ecirc;tre charg&eacute;.</p></div>'
                           }
      });
});
