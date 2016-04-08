// User enters in field
// User hits F to C button

$('#fahrenheit_to_celsius').on('click', function () {
	var fahrenheit = $("#temperature").val();

	if (fahrenheit === "") {
		$("#temperature").addClass("error");
	}
	
	fahrenheit = parseFloat(fahrenheit);
	console.log(fahrenheit);


	var celsius = (fahrenheit - 32)/1.8;
	console.log(celsius);

	$("#result").html(celsius);



	if (celsius > 10) {
		$("body").addClass("red");
	}

	else if (celsius < 10) {
		$("body").addClass("blue");
	}

	else {
		$("body").removeClass('red blue');
	}
});


// if value in #temperature is empty string, error message shows



// Store number as var
// Convert var to number
// Calculate to C
// Change HTML to display new number




// Background color change is conditional {if else}

// function convertToFahrenheit (num) {
// 	num = 
// }