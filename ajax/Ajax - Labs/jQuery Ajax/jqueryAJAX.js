/* global $ */
$(document).ready(function() {
	
	//load existing tasks - (xml)
	//$.get(url, data, callback, responseType)

	$("#addTask").click(function() {
		
		$.get("addTask.php", {"description": $("#task").val()}, function(t) {
			//t.id
			//t.description
			console.log(t.id);
			console.log(t.description);
		}, "json");
		
		
	})

	$.get("allTasks.php", function(t) {
		/*
		t -> plain text
		t -> jquery XML Parser
		t -> javascript object
		t -> javascript file
		*/
		console.log(t);
		//parsing xml using jquery
		//for each task -> output the task
	}, "xml");

})

function outputTask(id, desc) {
	
}