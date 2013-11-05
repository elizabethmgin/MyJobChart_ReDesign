$(document).ready(function() {
	$('a').live('click', function() {
		$.ajax({
			dataType: "html",
			url: $(this).attr('href'),
			success: function(data){
				console.dir(data);
				$('section').html(data);
			}
		});
		return false;
	});
});