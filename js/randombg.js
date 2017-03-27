$(document).ready(function() {
	var bgImgs = [
url('https://nodejs.vn/uploads/files/1490606729205-1.jpg'),
url('https://nodejs.vn/uploads/files/1490606755733-10.jpg'),
url('https://nodejs.vn/uploads/files/1490606773206-11.jpg'),
url('https://nodejs.vn/uploads/files/1490606785815-9.jpg'),
url('https://nodejs.vn/uploads/files/1490606797991-6.jpg'),
url('https://nodejs.vn/uploads/files/1490606809707-5.jpg'),
url('https://nodejs.vn/uploads/files/1490606820692-4.jpg'),
url('https://nodejs.vn/uploads/files/1490606836348-3.jpg'),
url('https://nodejs.vn/uploads/files/1490606857006-7.jpg'),
	];
	var bgId = Math.floor((Math.random()*9));
	var bgImg = bgImgs[bgId];
	$('body').css({'background':bgImg, 'background-size':'cover', });
});
