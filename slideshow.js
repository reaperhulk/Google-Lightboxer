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
			parentId = $(this).parent().attr('id');
			var textId = '#'+parentId.replace('tDataImage','tDataText');
			metadata = $(textId);
			name = '<div style="float:right;"><a href="'+parsedUrl+'">'+name.join()+'</a></div>'+metadata.html()
			return name;
		},
		rel:'gImages',
		current:"{current}/{total}",
		maxWidth:'98%',
		maxHeight:'98%',
		minWidth:'200',
		minHeight:'200',
		transition: 'fade',
		speed: 150
	})
}

$(window).load(function() {
	triggerColorBox();
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
				$(this).removeClass('cboxElement');
			}
		})
})
