$(document).ready(function(){
	//Variable to store if password tooltip should show
	var pwToolTipShow;

	//Show Password Tooltip on Focus
	$('input[data-index="pwToolTip"]').focus(function(){
		if (pwToolTipShow !== false){
			$('.pwToolTip').slideDown("fast");
			$('.strengthAlert').css("display", "none");
		}
	});

	//Hide tooltip on unfocus and show alert underneath box if password is not strong
	$('input[data-index="pwToolTip"]').focusout(function(){
		$('.pwToolTip').css('display','none');
		if (pwToolTipShow !== false){
			$('.strengthAlert').css("display", "block");
		}
	});

	//Show alert underneath confirm box on unfocus if passwords don't match and hide it if they do
	$('input[data-index="pwMatchToolTip"]').focusout(function(){
		var originalPass = $('input[data-index="pwToolTip"]').val();
		var confirmedPass = $(this).val();	
		if (confirmedPass !== ""){
			if (originalPass !== confirmedPass){
				$('.confirmedAlert').css('display', 'block');				
				$('input[data-index="pwMatchToolTip"]').removeClass("passwordCorrect");
				$('input[data-index="pwMatchToolTip"]').addClass("passwordIncorrect");
				$('input[data-index="button"]').removeClass("greenButton");
			}else{
				$('.confirmedAlert').css('display', 'none');
				$('input[data-index="pwMatchToolTip"]').addClass("passwordCorrect");
				$('input[data-index="pwMatchToolTip"]').removeClass("passwordIncorrect");
				
				//Change color of 'Change Password' button if password meets criteria and matches
				if(pwToolTipShow === false){
					$('input[data-index="button"]').addClass("greenButton");
				}
			}
		}
	});

	//Hide confirm password alert underneath confirm box as soon as the correct pass is entered
	$('input[data-index="pwMatchToolTip"]').keyup(function(){
		var originalPass = $('input[data-index="pwToolTip"]').val();
		var conirfmedPass = $('input[data-index="pwMatchToolTip"]').val();		
		if (originalPass === conirfmedPass){
			$('.confirmedAlert').css('display', 'none');
			$('input[data-index="pwMatchToolTip"]').addClass("passwordCorrect");
			$('input[data-index="pwMatchToolTip"]').removeClass("passwordIncorrect");
			//Change color of 'Change Password' button if password meets criteria and matches
			if(pwToolTipShow === false){
				$('input[data-index="button"]').addClass("greenButton");
			}
		}
	});

	//Determine which rules have been met and which haven't and show the check mark or x mark accordingly
	$('input[data-index="pwToolTip"]').keyup(function(){
		// set password variable
		var pswd = $(this).val();
		//validate the length
		if (pswd.length < 6 ){
		    $('#length').removeClass('valid').addClass('invalid');
		} else {
		    $('#length').removeClass('invalid').addClass('valid');
		}
		//validate lower case letter
		if ( pswd.match(/[a-z]/) ) {
		    $('#lower').removeClass('invalid').addClass('valid');
		} else {
		    $('#lower').removeClass('valid').addClass('invalid');
		}
		//validate upper case letter
		if ( pswd.match(/[A-Z]/) ) {
		    $('#upper').removeClass('invalid').addClass('valid');
		} else {
		    $('#upper').removeClass('valid').addClass('invalid');
		}
		//validate number
		if ( pswd.match(/\d/) ) {
		    $('#number').removeClass('invalid').addClass('valid');
		} else {
		    $('#number').removeClass('valid').addClass('invalid');
		}
		
		//reset confirm password field when user changes original password field
		$('input[data-index="pwMatchToolTip"]').val('');
		$('.confirmedAlert').css("display", "none");	
		$('input[data-index="pwMatchToolTip"]').removeClass("passwordIncorrect");
		$('input[data-index="pwMatchToolTip"]').removeClass("passwordCorrect");
		$('input[data-index="button"]').removeClass("greenButton");

		//Set value for pwToolTipShow and show or hide tooltip box and strengthAlert accordingly
		if ( ($('#length').hasClass('valid')) && ($('#lower').hasClass('valid')) && ($('#upper').hasClass('valid')) && ($('#number').hasClass('valid')) ){
			$('.pwWeak').css('display','none');
			$('.pwStrong').css('display','inline');
			$('.pwToolTip').slideUp('slow');
			pwToolTipShow = false;
			$('.strengthAlert').css("display", "none");
			$('input[data-index="pwToolTip"]').addClass("passwordCorrect");
			$('input[data-index="pwToolTip"]').removeClass("passwordIncorrect");

		} else {
			$('.pwToolTip').slideDown( "fast" );
			$('.pwWeak').css('display','inline');
			$('.pwStrong').css('display','none');
			pwToolTipShow = true;
			$('input[data-index="pwToolTip"]').removeClass("passwordCorrect");
			$('input[data-index="pwToolTip"]').addClass("passwordIncorrect");
		}

	});
});
