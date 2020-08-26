$(document).ready(function(){
	console.log('ready');
	$('#results').hide();

var images = document.getElementsByClassName("slide");
	console.log(images)

// var images = $.makeArray("slide");
// console.log(images); ASK NATHAN

var slideIndex = 0;

// set var = i, set i=0, start by hiding all the images by setting display to none
showSlide();

function showSlide() {
	var i;
	for(i = 0; i<images.length; i++) {
	images[i].style.display= "none";	
} 

//increment the slideIndex. if the slideIndex is greater than the number of the number of images in array, set it back to 1
slideIndex++; 
if (slideIndex > images.length) {slideIndex =1}
	images[slideIndex-1].style.display = "block";
	setTimeout(showSlide, 3000);

}	
	
});



	function showResults () {
		$(".images").hide();
		$("#results").show();
		// Get value of user input
		var selectLocation = $('.locationList').val();
		$(".option1 div").hide();
		$(".option2 div").hide();
		$(".option3 div").hide();


		if (selectLocation == "Harlem") {
			$(".option1 div.harlem").show();
			$(".option2 div.harlem").show();
			$(".option3 div.harlem").show();
		} else if (selectLocation == "UWS") {
			$(".option1 div.uws").show();
			$(".option2 div.uws").show();
			$(".option3 div.uws").show();
		} else if (selectLocation == "UES" ) {
			$(".option1 div.ues").show();
			$(".option2 div.ues").show();
			$(".option3 div.ues").show();
		} else if (selectLocation == "Midtown West") {
			$(".option1 div.midtown-west").show();
			$(".option2 div.midtown-west").show();
			$(".option3 div.midtown-west").show(); 
		} else if (selectLocation == "Midtown East") {
			$(".option1 div.midtown-east").show();
			$(".option2 div.midtown-east").show();
			$(".option3 div.midtown-east").show();
		} else if (selectLocation == "Chelsea") {
			$(".option1 div.chelsea").show();
			$(".option2 div.chelsea").show();
			$(".option3 div.chelsea").show();
		} else if (selectLocation == "East Village") {
			$(".option1 div.east-village").show();
			$(".option2 div.east-village").show();
			$(".option3 div.east-village").show();
		} else if (selectLocation == "LES") {
			$(".option1 div.les").show();
			$(".option2 div.les").show();
			$(".option3 div.les").show(); 
		} else if (selectLocation == "FiDi") {
			$(".option1 div.fidi").show();
			$(".option2 div.fidi").show();
			$(".option3 div.fidi").show(); 
		}	else {
			$("#results").hide();
	
		}

		window.scrollTo({top: 0, behavior: 'smooth'});
	
	}


