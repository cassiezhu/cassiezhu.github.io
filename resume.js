 

$(document).ready(function(){


	$('#phone').click(function(){
		$('#hoverphone').slideToggle('fast');
	});

	
	$('#settings').click(function(){
		$('#hoverset').slideToggle('fast');
	});


	$('.hoverbox').click(function() {
		if($('.hoverbox').is(':visible')){
			$('.hoverbox').fadeOut('slow');
		}
        
     });

	$('.modal').on('show.bs.modal', function(e){
		$('.hidenav').hide();
		
	});

	$('.modal').on('hide.bs.modal', function(e){
		$('.hidenav').show();
	});

	$('.expdescription').hide();

	$('#label1').click(function(){
		$('#descrip1').slideToggle('slow');
		$('#descrip2').hide('fast');
		$('#descrip3').hide('fast');
		$('#descrip4').hide('fast');


	});

	$('#label2').click(function(){
		$('#descrip2').slideToggle('slow');
		$('#descrip1').hide('fast');
		$('#descrip3').hide('fast');
		$('#descrip4').hide('fast');


	});

	$('#label3').click(function(){
		$('#descrip3').slideToggle('slow');
		$('#descrip2').hide('fast');
		$('#descrip1').hide('fast');
		$('#descrip4').hide('fast');

	});

		$('#label4').click(function(){
		$('#descrip4').slideToggle('slow');
		$('#descrip3').hide('fast');
		$('#descrip2').hide('fast');
		$('#descrip1').hide('fast');

	});



});
