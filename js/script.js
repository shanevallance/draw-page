// Create size x size table grid
function createGrid(size) {
	//var responsiveSize = (100 / size) + '%';
	//clears any previous table
	$('#drawsquare').empty();
	//create rows
	for (i = 0; i < size; i++){
		$('#drawsquare').append("<div class='drawrow'></div>");
	}
	//create cells
	for(j = 0; j < size; j++){
		$('#drawsquare').find('.drawrow').append("<div class='drawcell'></div>");
	}
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
	return rgbDarker;
}

$(document).ready(function() {

	// Buttons
	/*
	$('.button').on('mouseover',function() {
		$(this).css({color: "black", border:"1px solid black"});
	});
	$('.button').on('mouseleave',function() {
		$(this).css({color: "gray", border:"1px solid gray"});
	});
	*/
	//reset button #btnReset
	$('#btnReset').click(function() {
		var grid = parseInt(prompt("How many rows and columns would you like to create?", "16"), 0);
		if(grid>0){
			createGrid(grid);
		} else {
			alert("Please enter a valid number.")
		}
	});
	//color button #btnColor #colorStatus
	$('#btnColor').click(function(){
		colorCheck = !colorCheck;
		$('#colorStatus').text(colorCheck.toString().toUpperCase());
	});
	//create initial 16 x 16 div grid
	createGrid(16);
	//variable determines if drawing in B&W or color(default: true)
	var colorCheck = true;
	//mouse over cells to draw .drawcell
	$('#drawsquare').on("mouseenter", '.drawcell', function(){
		var backgroundColor = $(this).css("background-color");
		if(colorCheck) {
			if(backgroundColor === 'rgb(255, 255, 255)'){
				$(this).css("background-color", randomColor());
			} else {
				$(this).css("background-color", darkenColor(backgroundColor));
			}
		} else {
			if(backgroundColor !== 'rgb(0, 0, 0)'){
				$(this).css("background-color", "black");
			}
		}
	});
});

