$(document).ready(function() {
	$('a').live('click', function() {
	    var clicked_link = $(this);
		$.ajax({
			dataType: "html",
			url: $(this).attr('href'),
			success: function(data){
			    if (clicked_link.hasClass('slideInLeft')){
			        $('#container').after('<section id="transitionContainerLeft" style="position:fixed; width: 320px; height: 568px; right: 320px; top: 0px; background-color: rgb(230,231,232);"></section>');
			        $('#transitionContainerLeft').html(data);
			        $('#transitionContainerLeft').animate({right:0}, 500, function() {
			            $('#container').remove();
			            $('#transitionContainerLeft').attr('style','');
			            $('#transitionContainerLeft').attr('id','container');
			        });
			    }else if (clicked_link.hasClass('slideInRight')){
    			    $('#container').after('<section id="transitionContainerRight" style="position:fixed; width: 320px; height: 568px; left: 320px; top: 0px; background-color: rgb(230,231,232);"></section>');
    			    $('#transitionContainerRight').html(data);
    			    $('#transitionContainerRight').animate({left:0}, 500, function() {
    			        $('#container').remove();
    			        $('#transitionContainerRight').attr('style','');
    			        $('#transitionContainerRight').attr('id','container');
    			    });
    			    
    			}else if (clicked_link.hasClass('slideInBottom')){
        		    $('#container').after('<section id="transitionContainerBottom" style="position:absolute; width: 320px; height: 568px; left: 0; top: 568px;"></section>');
        		    $('#transitionContainerBottom').html(data);
        		    $('#container').attr('id','background');
        		    $( "#background" ).animate({opacity: 0.25}, 200, function() {
                        // Animation complete.
                      });
        		    $('#transitionContainerBottom').animate({top:0}, 500, function() {
        		        $('.settingsSlide').remove();
        		        $('#transitionContainerBottom').attr('id','container');
        		        $('#container').attr('class','addSlide');
        		    });
        		}else if (clicked_link.hasClass('slideInTop')){
            	    $('#container').after('<section id="transitionContainerTop" style="position:absolute; width: 320px; height: 500px; left: 0; top: -568px;"></section>');
            	    $('#transitionContainerTop').html(data);
            	    $('#container').attr('id','background');
            	    $( "#background" ).animate({opacity: 0.25}, 200, function() {
                        // Animation complete.
                      });
            	    $('#transitionContainerTop').animate({top:35}, 500, function() {
            	        $('.addSlide').remove();
            	        $('#transitionContainerTop').attr('id','container');
            	        $('#container').attr('class','settingsSlide');
            	    });
            	}else if (clicked_link.hasClass('minimize')){
                    $('#container').remove();
                    $('#background').attr('id','container');
                }else {
        		    $('#background').remove();
			        $('#container').html(data);
			        $('#container').attr('style','top:0;');
			        $('#container').removeClass('settingsSlide addSlide');
			    }
			}
		});
		return false;
	});
	

	//$('.makeAvailable').on('click', function(event) {
	//    $('.unavailableOptions').animate({ opacity: 1.0}, function() {
	//        //$row.find('.hidden').fadeIn();
	//    });
	//});

});