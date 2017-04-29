$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "text.txt",
		cache: false
	}).done(function( text ) {
		$("#second").html(text);
	});

	$("#third").click(function(){
		$.ajax({
			type: "GET",
			url: "text2.txt",
			cache: false
		}).done(function(text) {
			$("#fourth").html(text);
		});
	});
});
