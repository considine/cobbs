var hide = 0;  //specifies whether the hideme caption should appear.

var width = function () {
	var w = $(window).width();
	var percent;
	if (w>890) {
		
	}
	if (w > 978) {
		percent = "220";
	}  if (w>928 && w<978 ) {
		percent = "200"

	}  if (w>890 && w<928) {
		percent = "180";
	} if (w<890) {
		console.log(-$(window).width()/2);        //Here we are going to fixed
		$(".floatHead").css("width", "801px");   //change from percent to pixels for floathead
		$(".floatHead").css("left", "50%");       // these two lines fix the margin
		$(".floatHead").css("margin-left", -400);
		$(".underhead").css("width", "801px");      //and likewise for the bottom
		


	}

	$(".main").css("font-size", percent+"%");
	$(".mainright").css("font-size", percent+"%");

}



$(window).scroll(function() {
	if (hide === 0 && $(window).scrollTop() >100){
		$(".hidecontainer").css("visibility", "visible");
		$(".hidecontainer").css("display", "inline-block");
	}
});

$(".hideme").click(function() {
	$(".floatHead").css("position", "relative");
	$(".underhead").css("top", "-0px");
	hide = 1;
	$(".hidecontainer").css("visibility", "hidden");


});

$(window).resize(function() {
	width();
});



// $(window).scroll(function(event) {
// 	var scroll = $(window).scrollTop();
// 	if (scroll < 70) {
// 		$(".floatHead").css("visibility", "visible");
// 		hide = 0;   //so the hideme may appear again
// 	}

// });


$(document).ready(width);

