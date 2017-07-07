var fs = {};
fs.log = function(c) {
	console.log(c);
};
fs.error = function(c) {
	console.error(c);
};
fs.drawSprite = function(context, image, sx, sy, sx1, sy1, x, y, x1, y1) {
	context.drawImage(image, sx, sy, sx1, sy1, x, y, x1, y1);
};