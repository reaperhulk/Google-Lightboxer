$(window).load(function() {
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
})