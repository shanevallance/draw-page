// Create size x size table grid
function createGrid(size) {
	//var responsiveSize = (100 / size) + '%';
	//clears any previous table
	$('.draw-area').empty();
	//create new table 
	$('.draw-area').append("<div id='drawsquare'></div>");
	//create rows
	for (i = 0; i < size; i++){
		$('#drawsquare').append("<div class='drawrow'></div>");
	}
	//create cells
	for(j = 0; j < size; j++){
		$('#drawsquare').find('.drawrow').append("<div class='drawcell'></div>");
	}
	//$('.drawrow').css('height', responsiveSize);
	//$('.drawcell').css('width', responsiveSize);
}

//generate random color
function randomColor() {
	var randomInteger = [];
	for (i=0;i<3;i++) {
		randomInteger[i] = Math.floor(Math.random() * 255);
	}
	var color = 'rgb(' + randomInteger[0] + ', ' + randomInteger[1] + ', ' + randomInteger[2] + ')';
	return color;
}

//take current background color and add 10% black to it
function darkenColor(rgb) {
	//regex thanks to StackOverflow: https://stackoverflow.com/a/10971090
	rgb = rgb.replace(/[^\d,]/g, '').split(',');
	// make each rgb integer 10% darker
	for (i = 0; i < 3; i++) {
		rgb[i] = Math.floor(rgb[i] * .9);
	}
	rgbDarker = 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
	console.log(rgbDarker);
	return rgbDarker;
}

$(document).ready(function() {

	// Buttons
	$('.button').on('mouseover',function() {
		$(this).css({color: "black", border:"1px solid black"});
	});
	$('.button').on('mouseleave',function() {
		$(this).css({color: "gray", border:"1px solid gray"});
	});
	//create initial 16 x 16 div grid
	createGrid(16);
	//variable determines if drawing in B&W or color(default: true)
	var colorCheck = true;
	//mouse over cells to draw .drawcell
	$('.drawcell').on("mouseenter", function(){
		var backgroundColor = $(this).css("background-color");
		if(colorCheck) {
			if(backgroundColor === 'rgb(255, 255, 255)'){
				$(this).css("background-color", randomColor());
			} else {
				$(this).css("background-color", darkenColor(backgroundColor));
			}
		} else {
			if(backgroundColor === 'rgb(255, 255, 255)'){
				$(this).css("background-color", "black");
			}
		}
	});
	//reset button #btnReset
	
	
	//color button #btnColor #colorStatus
	
});

