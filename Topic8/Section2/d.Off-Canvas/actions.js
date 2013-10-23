$(".left-button").on('click', function(){	
	$(".content").css('display', 'none');
	if ( $(".left-aside").css('display') == 'none' ){		
		$(".right-aside").css('display', 'none');	
		$(".left-aside").css('width', '100%');	
		$(".left-aside").css('display', 'inline');	
	}else{		
		$(".left-aside").css('width', '20%');	
		$(".left-aside").css('display', 'none');	
		$(".content").css('display', 'inline');
	}
});
$(".right-button").on('click', function(){	
	$(".content").css('display', 'none');		
	if ( $(".right-aside").css('display') == 'none' ){	
		$(".left-aside").css('display', 'none');	
		$(".right-aside").css('width', '100%');	
		$(".right-aside").css('display', 'inline');	
	}else{
		$(".right-aside").css('width', '20%');	
		$(".right-aside").css('display', 'none');	
		$(".content").css('display', 'inline');
	}
});