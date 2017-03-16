$(document).ready(function() {
	var img = Math.floor((Math.random()*4)+1);
	var bg = 'url(https://github.toiyeuwp.com/bg-img/' + img + '.jpg)';
	$('body').css({'background':bg 'no-repeat center center fixed', '-webkit-background-size':'cover', '-moz-background-size':'cover', '-o-background-size':'cover', 'background-size':'cover', 'background-color':'grey', 'background-blend-mode':'multiply' });
});
