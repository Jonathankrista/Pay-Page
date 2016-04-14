$(document).ready(function() {
    $('.mobileFilterSort input[type=checkbox]').click(function(){
        $('.mobileFilterSort input[type=checkbox]').attr("disabled", true);
        $('.mobileFilterSort label').css('color','#ccc !important');

    });
    //selectboxit function for select boxes in the filter section
  $('.filterSelect').selectBoxIt({
      autoWidth: false,
      copyClasses: 'container',
      showFirstOption: false,
      'theme':{
          'arrow':'fa fa-chevron-down'
      }
  });
  $('.sortSelect').selectBoxIt({
      autoWidth: false,
      copyClasses: 'container',
      'theme':{
          'arrow':'fa fa-chevron-down'
      }
  });

  //Creates Show More/Less buttons for filters with contents that overflow containers
      $( ".desktopFilterContent" ).each(function() {
        if ($(this).prop('clientHeight') < $(this).prop('scrollHeight') ) {
          var myIndex=$(this).data("index");
          $(".fullFilter[data-index='" + myIndex +"']").css("display","block");
        }
      });

  // Scripts for Mobile Sort and Filter

  $("#mobileSort a").click(function() {
      if ( $('#filterOptions').is(':visible') ){
          $(this).parent().toggleClass("tabClosed");
          $("#mobileFilter a").parent().toggleClass("tabClosed");
          $("#sortOptions").slideDown("fast");
          $("#filterOptions").css("display", "none");
      }
      return false;

  });

  $("#mobileFilter a").click(function() {
      if ( $('#sortOptions').is(':visible') ){
          $(this).parent().toggleClass("tabClosed");
          $("#mobileSort a").parent().toggleClass("tabClosed");
          $("#filterOptions").slideDown("fast");
          $("#sortOptions").css("display", "none");
      }
      return false;
  });
  $(".filterLink").click(function(e){
    var filterID = $(this).attr('data-index');
    // Commented Out Code to Collapse Sibling Accordions
    /*var openFilterID = $(".openFilter").not(this).attr('data-index');
      $(".filterLink[data-index='"+openFilterID+"']").removeClass("openFilter");
      $(".filterContent[data-index='"+openFilterID+"']").hide();
      if ($(this).hasClass("openFilter")){
        $(".filterContent[data-index='"+filterID+"']").hide();
      }else{
        $(window).scrollTop($(this).offset().top - 50);
        $(".filterContent[data-index='"+filterID+"']").slideDown(200);
      }
      $(this).toggleClass("openFilter");
      */
        $(this).toggleClass("openFilter");
        $(".filterContent[data-index='"+filterID+"']").slideToggle(100);
        e.preventDefault();
  });

});
