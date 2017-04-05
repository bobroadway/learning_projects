/* global jQuery */
(function($) {

	//$ always refers to the parameter
	$(document).ready(function() {
		
		var textbox = $("input[type='text']");
		console.log(textbox);
		var val = textbox.val();
		alert(val);
		
		
		//document.createElement("h1")
		var h1 = $("<h1>");
		h1.html("<p>cubs stink</p>");
		alert(h1.html());
		
		//referenceElement.appendChild(newChild)
		//$("body").append(h1);
		//h1.appendTo($("body"));
		
		/*
		h1.addClass("heading");
		h1.addClass("info");
		*/
		
		h1.attr("class", "heading info");
		h1.attr("id", "heading");
		h1.attr("display", "inline-block");
		alert(h1.attr("class"));
		
		//$("body").append(h1);
		//h1.insertAfter(textbox);
		textbox.after(h1);
		
		textbox.remove();
		
		var anotherHeader = document.createElement("h1");
		$(anotherHeader).text("hello");
		
	})
	
})(jQuery)