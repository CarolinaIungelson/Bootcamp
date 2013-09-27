$(document).ready(function() {
	$(".salutation").fadeIn();
	$(".alias").focus();
	getTweets();
});

$('button').click(function() {
	nameResponse();	
});

function nameResponse() {
	$.ajax({
		type: "GET",
		url: "http://bootcamp.aws.af.cm/welcome/Carolina",		
		contentType: "application/json",		
		success: function(data) {
			if (data.response) {
				$('.text-salutation').append('<p class="name">'+data.response+'</p>');
				highlight();
			}
			else {
				$('.salutation').addClass('server-error');
			}
		},
		error: function() {			
			$('.salutation').addClass('server-error');
		}
	});
}
function highlight() {
	$('.name').addClass('highlight-text');
}

function getTweets() {
	$.ajax({
		type: "GET",
		url: "http://tweetproxy.ap01.aws.af.cm/search",
		data: "q=html5",
		contentType: "application/json",
		dataType: "jsonp",		
		success: function(data) {
			var statusesLength = data.statuses.length,
					htmlDataArray = [],
					i, info;

			for (i = 0; i < statusesLength; i++) {
				info = data.statuses[i];
				htmlDataArray.push('<ul>'+
										'<li>'+info.user.name+'</li>'+
										'<li>'+info.text+'</li>'+
										'<li>'+info.created_at+'</li>'+
										'<li><a href="'+info.user.profile_image_url+'" target="_blank">See picture</a></li></ul>');
			}

			$('.tweets').append(htmlDataArray.join(''));
			$('.bottom').append('<a href="#top">Back to Top</a>');
	}
	});
}
