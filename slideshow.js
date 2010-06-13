/*
to capture and re-colorbox when sizes and types are changed on the left sidebar we need to bind a live 
event. i'd rather watch for div content changes but i'm not sure how to do that at this time.
*/

triggerColorBox = function() {
	$('#ImgContent a > img').parent().colorbox({
		href:function() {
			href = $(this).attr('href');
			parsedUrl = href.split('?')[1].split('&')[0].split('=')[1];
			return parsedUrl;
		},
		title:function() {
			href = $(this).attr('href');
			parsedUrl = href.split('?')[1].split('&')[0].split('=')[1];
			var name = parsedUrl.split('/').pop().split('.');
			name.pop();
			name = '<a href="'+parsedUrl+'">'+name.join()+'</a>'
			return name;
		},
		rel:'gImages',
		current:"{current}/{total}",
		maxWidth:'100%',
		maxHeight:'100%',
		minWidth:'200',
		minHeight:'200'
	})
}

$(window).load(function() {
	$('#ImgContent a').live('mouseover',function(event) {
		if(event.metaKey) {
			event.stopPropagation();
			$(this).removeClass('cboxElement');
		} else {
			triggerColorBox();
		}
		return false;
	})
		$('#ImgContent a').live('click',
		function(event) {
			if(event.metaKey) {
				event.stopPropagation();
				triggerColorBox()
			}
		})
})
