/* global $ */
$(document).ready(function() {
    console.log("Document is ready.");

    $(document).ajaxStart(function () {
        console.log("Thinking...");
    })
    
/*
    Create a click event handler for btnText. In the click event handler, make 
    a $.get request to a url that returns the plain text "hello". Output the 
    server response to the console.
*/
    $("#btnText").click(function() {

        $.get("text.php", function(response) {
			console.log(response);
		})

    })

/*
    Create a click event handler for btnJSON. In the click event handler, make 
    a $.post request to a url that returns a JSON object with the fields: id, 
    name, and email (along with corresponding data). Output the id, name, and 
    email using jQuery DHTML. The $.post method should pass the user-entered 
    value from txtName and that value should be embedded into the JSON response 
    as the value of the name field
*/
    $("#btnJSON").click(function() {

        $.post("json.php", {"name":$("#txtName").val()}, function(response) {

            var output = $("<div>");
			output.html( " | Id: "    + response.id 
			           + " | Name: "  + response.name 
			           + " | Email: " + response.email 
			           + " |");
			$("body").append(output);

		}, "json")

    })

/*
    Create a click event handler for btnXML. In the click event handler, make a 
    $.ajax request to a url that returns xml: 
    <user>
      <id>1</id>
      <name>bill</name>
      <email>bgates@msn.com</email>
    </user>
*/
    $("#btnXML").click(function() {

        $.ajax({
    	    type: "GET",
    	    url: "user.xml",
            dataType: "xml",
    	    success: function(xml){
                
                console.log(xml);
                
    	        var user = $(xml).find('user').text();
    	        var output = $("<div>");
    	        output.html(user);
    			$("body").append(output);

    	    },
    	    error: function(){

    	        console.log("Error retrieving xml...");

    	    }
    	});

    })
    
})