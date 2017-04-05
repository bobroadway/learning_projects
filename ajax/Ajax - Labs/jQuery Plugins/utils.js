/* global $ */
$(document).ready(function() {
	
	//$.ajax("some.php", {"async":true})
	
	$.fn.highlighter.defaults.color = "blue";
	
	$("li").highlighter({"color":"red"});

	$("p").highlighter();
	
	/*
	.mouseover(function() {
		$(this).css("backgroundColor", "yellow");
	});
	*/
	
	var tasks = [{"id":1, "description":"eat pizza"},
				{"id":2, "description":"eat chips"},
				{"id":3, "description":"drink beer"}];
	
	var moreTasks = [{"id":4, "description":"walk the dog"}];
	
	$.merge(tasks, moreTasks);	
	
	var aTask = {"id":5, "description":"watch tv"};
	var bTask = {"id":6, "created":"1/1/1030"};
	
	$.extend(aTask, bTask);
	console.log(aTask);
			
				
	$(tasks).each(function(index, item) {
		//tasks[i]
		console.log(item);
	})
	
})