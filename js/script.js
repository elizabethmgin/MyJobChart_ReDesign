$(document).ready(function() {
	$('a').live('click', function() {
	    var clicked_link = $(this);
		$.ajax({
			dataType: "html",
			url: $(this).attr('href'),
			success: function(data){
			    if (clicked_link.hasClass('slideInLeft')){
			        $('#container').after('<section id="transitionContainerLeft" style="position:absolute; width: 320px; right: 320px;"></section>');
			        $('#transitionContainerLeft').html(data);
			        $('#transitionContainerLeft').animate({right:0}, 500, function() {
			            $('#container').remove();
			            $('#transitionContainerLeft').attr('id','container');
			        });
			    }else {
			        $('#container').html(data);
			    }
			}
		});
		return false;
	});
});