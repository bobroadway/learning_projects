/* global $ */
$(document).ready(function() {
	loadAllTasks();
	$("#tasks").sortable({"update": function() {
		var newOrder = $("#tasks").sortable("serialize");
		console.log(newOrder);
		$.post("updateTaskRank.php", newOrder);
	}});
})

function loadAllTasks() {

	
	$.get("allTasks.php", function(tasks) {
		$(tasks).each(function(index, item) {
			addTaskToUI(item);
		})
	}, "json")
	
	
}

function addTaskToUI(task) {
	//<li id="">adsjksdjfaksdf</li>
	var li = $("<li>").text(task.description).attr("id", "task_" + task.id);
	$("#tasks").append(li);
}