function load() {
	var game = [];
	game.images = [];
	game.requiredImages = 0;
	game.doneImages = 0;
	game.canvas = document.getElementById("canvas");
	game.context = game.canvas.getContext('2d');
	game.map = [
		[0,1,2,3,4,5,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0]
	];
	var clicked = window.addEventListener("click", function(e) {
		
		var x = e.pageX - document.getElementById("canvas").offsetLeft;
		var y = e.pageY - document.getElementById("canvas").offsetTop;
		console.log(x);
		for(var i = 0; i < game.map.length; i++) {
			for(var j = 0; j < game.map[i].length; j++) {
				if(x > j*32 && x < j*32+32 && y > i*32 && y < i*32+32) {
					game.map[i][j] += 1;
					if(game.map[i][j] >= 6) {
						game.map[i][j] = 0;
					}
				}
			}
		}
	});
	function init() {
		loop();
	}
	
	function loop() {
		
		window.requestAnimFrame(function() {
			loop();
		});
		update();
		render();
	}
	function update() {
		
	}
	function render() {
		for(var i = 0; i < game.map.length; i++) {
			for(var j = 0; j < game.map[i].length; j++) {
				switch(game.map[i][j]) {
					case 0:
						fs.drawSprite(game.context, game.images[0], 0, 0.5, 16, 14, j*32, i*32, 32, 32);
					break;
					case 1:
						fs.drawSprite(game.context, game.images[0], 0+16, 0.5, 16, 14, j*32, i*32, 32, 32);
					break;
					case 2:
						fs.drawSprite(game.context, game.images[0], 0+32, 0.5, 16, 14, j*32, i*32, 32, 32);
					break;
					case 3:
						fs.drawSprite(game.context, game.images[0], 0+48, 0.5, 16, 14, j*32, i*32, 32, 32);
					break;
					case 4:
						fs.drawSprite(game.context, game.images[0], 0, -0.5+16, 16, 14, j*32, i*32, 32, 32);
					break;
					case 5:
						fs.drawSprite(game.context, game.images[0], 0+16, -0.5+16, 16, 14, j*32, i*32, 32, 32);
					break;
					
				}
			}
		}
	}
	

	function initImages(paths) {
		game.requiredImages = paths.length;
		for(i in paths) {
			var img = new Image();
			img.src = paths[i];
			game.images[i] = img;
			game.images[i].onload = function() {
				game.doneImages++;
			};
			checkImages();
		}
	}
	function checkImages() {
		if(game.doneImages >= game.requiredImages) {
			init();
		} else {
			setTimeout(function() {
				checkImages();
			}, 1);
		}
	}
	initImages(["spritesheet.png"]);
}
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		function( callback) {
			window.setTimeout( callback, 1000/60);
		};
		
})();







load();