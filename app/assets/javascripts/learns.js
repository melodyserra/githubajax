$(document).ready(function(){

	$(".getInfo").on("submit", function(e) {
	  e.preventDefault();

		var username = $("#repoName").val();
		$.getJSON( "https://api.github.com/users/" + username, function( data ) {
		 
		  // var image = data.avatar_url;
		  // console.log(image); 

		  var img = $('<img>'); 
    	img.attr('src', data.avatar_url);
    	$('.userData').html(img);
    	});
		});
	});






// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
