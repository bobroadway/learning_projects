/* global $ */
$(document).ready(function() {
	
	$("#startDate").datepicker({changeMonth:true, changeYear:true});
	
	$("#placeholder").draggable({revert:true});
	
	$("#cart").droppable({
		drop: function(event, ui) {
			ui.draggable.html("this was dragged into a droppable");
		}
	});
	
})