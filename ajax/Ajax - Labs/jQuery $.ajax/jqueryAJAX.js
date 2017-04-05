/* global $ */
$(document).ready(function() {
    console.log("Document is ready.");
	$("#btnAJAX").click(function() {
		
		$.get("serverHTML.php", function(response) {
			$("#output").html(response);
		})
		
		
		
		var ajaxLoading;
		$.ajax("longRunningServerProcess.php", {
			async: true,
			data: {},
			success: function() {
				//confirm success
			},
			error: function() {
				//notify user of error
			},
			complete: function() {
				ajaxLoading.remove();
			},
			responseType: "json",
			
			dataType: "json"
		})
		//start some animation
		ajaxLoading = $("<img>").attr("src", "ajax-loader.gif").appendTo($("body"));
		
		$.get("simple.php", {"name":"bill"}, function(response) {
			//xhr.responseText or xhr.responseXML
			/*
			var output = $("<div>");
			output.html(response);
			$("body").append(output);
			*/
			
			console.log(response.id);
			console.log(response.name);
			console.log(response.email);

			console.log(response);
		}, "json")
	})
})