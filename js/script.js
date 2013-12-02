$(document).ready(function() {
	$('a').live('click', function() {
	    var clicked_link = $(this);
		$.ajax({
			dataType: "html",
			url: $(this).attr('href'),
			success: function(data){
			    if (clicked_link.hasClass('slideInLeft')){
			        $('#container').after('<section id="transitionContainerLeft" style="position:absolute; width: 320px; height: 568px; right: 320px; top: 0; background-color: rgb(230,231,232);"></section>');
			        $('#transitionContainerLeft').html(data);
			        $('#transitionContainerLeft').animate({right:0}, 500, function() {
			            $('#container').remove();
			            $('#transitionContainerLeft').attr('id','container');
			        });
			    }else if (clicked_link.hasClass('slideInRight')){
    			    $('#container').after('<section id="transitionContainerRight" style="position:absolute; width: 320px; height: 568px; left: 320px; top: 0; background-color: rgb(230,231,232);"></section>');
    			    $('#transitionContainerRight').html(data);
    			    $('#transitionContainerRight').animate({left:0}, 500, function() {
    			        $('#container').remove();
    			        $('#transitionContainerRight').attr('id','container');
    			    });
    			    
    			}else if (clicked_link.hasClass('slideInBottom')){
        		    $('#container').after('<section id="transitionContainerBottom" style="position:absolute; width: 320px; height: 568px; left: 0; top: 568px; background-color: rgba(230,231,232, .5);"></section>');
        		    $('#transitionContainerBottom').html(data);
        		    $('#transitionContainerBottom').animate({top:0}, 500, function() {
        		        $('#container').attr('id','background');
        		        $('#transitionContainerBottom').attr('id','container');
        		    });
        		}  else {
        		    $('#background').remove();
			        $('#container').html(data);
			    }
			}
		});
		return false;
	});
});