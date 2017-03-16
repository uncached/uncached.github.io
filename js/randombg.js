$(function() {
var body = $('body');
var backgrounds = new Array(
'url(https://github.toiyeuwp.com/bg-img/1.jpg)',
'url(https://github.toiyeuwp.com/bg-img/2.jpg)'
);
var current = 0;

function nextBackground() {
body.css(
'background',
backgrounds[current = ++current % backgrounds.length]
);

setTimeout(nextBackground, 5000);
}
setTimeout(nextBackground, 5000);
body.css('background', backgrounds[0]);
});
