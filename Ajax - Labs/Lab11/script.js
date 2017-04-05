/* global $ */
$(document).ready(function() {
	console.log("Document is ready.");
/*
    1. add tooltips to each of the input fields (email, password, birthdate) that 
    indicate what the user should do - for example: enter your email
*/
    // email
    $( "#inputEmail" ).tooltip().attr( "title", "Example: email@fakeemail.com" );
    // password
    $( "#inputPassword" ).tooltip().attr( "title", "Include one number and one special character." );
    // birthdate
    $( "#inputBirthdate" ).tooltip().attr( "title", "Choose your birthday!" );
    // remember me
    $( ".checkbox" ).tooltip().attr( "title", "Check this box!" );

/*
    2. change the birthdate textbox to a datepicker
    3. within the birthdate datepicker, allow the user to select the month and 
    the year via a drop down list
*/
	$("#inputBirthdate").datepicker({changeMonth:true, changeYear:true});
	
})