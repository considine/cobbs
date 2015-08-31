var hide = 0;  //specifies whether the hideme caption should appear.

var width = function () {
	console.log($(window).width());
}

$(window).scroll(function() {
	if (hide === 0 && $(window).scrollTop() >100){
		$(".hidecontainer").css("visibility", "visible");
		$(".hidecontainer").css("display", "inline-block");
	}
});

$(".hideme").click(function() {
	$(".floatHead").css("visibility", "hidden");
	$("")
	hide = 1;
	$(".hidecontainer").css("visibility", "hidden");


});



$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	if (scroll < 70) {
		$(".floatHead").css("visibility", "visible");
		hide = 0;   //so the hideme may appear again
	}

});


$(document).ready(width);
