/* global $ */

$(document).ready(function() {
    console.log("Document is ready.");

    // <a href="<c:url value="/jsp/index.htm"/>">TEST</a>
    
    // change hibernate properties: tomcat/hahatomcat
    // change uploadDirectory path
    
    // fix null pointer in else statement for adduser.java (model if statement)
    // fix call to /home in insertsight

    // confirm password validation for createUser.jsp
    $('#submitNewUser').prop('disabled', true);
    $('.passwordMatch').keyup(function(){
        console.log('username: ' + $('#username').val());
        console.log('password: ' + $('#password').val());
        console.log('confirm: ' + $('#confirmPassword').val());

        if ($('#password').val() != "" && $('#confirmPassword').val() != ""
                && $('#password').val() == $('#confirmPassword').val()) {
                
            console.log('password: [ ' + $('#password').val() + ' ] == confirm: [ ' + $('#confirmPassword').val() + ' ] :: enabled');
            $('#submitNewUser').prop('disabled', false);
            
        } else {
              
            console.log('password: [ ' + $('#password').val() + ' ] != confirm: [ ' + $('#confirmPassword').val() + ' ] :: disabled');
            $('#submitNewUser').prop('disabled', true);
            
        }

    });

});