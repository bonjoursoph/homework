// User enters in field
// User hits F to C button

$('#fahrenheit_to_celsius').on('click', function () {
	var fahrenheit = $("#temperature").val();
	fahrenheit = parseFloat(fahrenheit);
	console.log(fahrenheit);

	var celsius = (fahrenheit - 32)/1.8;
	console.log(celsius);

	$("#result").html(celsius);
});






// Store number as var
// Convert var to number
// Calculate to C
// Change HTML to display new number




