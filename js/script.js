// JavaScript Document

$(document).ready(function(e) {
	
    $(document).on('mouseover','.item_Container',function(){
		$(this).find('.slideContainer').addClass('show_slide')
		
	});
	$(document).on('mouseout','.item_Container',function(){
		$(this).find('.slideContainer').removeClass('show_slide')
		
	});
	
	$('#on_btn').on('click',function(){
		$('.on_Popup').removeClass('hide_modal');
		setTimeout(function(){
			$('.on_Popup').addClass('show_modal');	
		},100);
	});
	
	$('.cancelBtn').on('click',function(){
		$('.on_Popup').removeClass('show_modal');
		setTimeout(function(){
			$('.on_Popup').addClass('hide_modal');	
		},100);
	});
	
	$('.snd_msg').on('click',function(){
		var u_name = $('#inp_name').val();
		var u_email = $('#inp_email').val();
		var u_subject = $("#inp_subject").val();
		var u_contact = $('#inp_phone').val();
		
		var msg = $('#txt_msg');
		$('.on_Popup').removeClass('show_modal');
		setTimeout(function(){
			$('.on_Popup').addClass('hide_modal');	
		},100);
	});
});

function isNumberKey(evt){
	console.log("NUmber Key");
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}