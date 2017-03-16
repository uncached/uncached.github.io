$(document).ready(function() {
	var img = Math.floor((Math.random()*4)+1);
	var bg = 'url(https://github.toiyeuwp.com/bg-img/' + img + '.jpg)';
	$('body').css({'background':bg, 'background-size':'cover', });
});
