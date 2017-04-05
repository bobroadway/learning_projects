/* global $ */
$(document).ready(function() {
	var currentTask;
	$(".glyphicon-trash").click(function() {
		currentTask = $(this).parent();
		console.log(currentTask);
		$("#deleteConfirmation").dialog("open");
	})
	
	$("#deleteConfirmation").dialog({
		"modal":true,
		"autoOpen":false,
		"buttons": {
			"Cancel": function() {
					  currentTask = undefined;
			          $( this ).dialog( "close" );
			        },
			"Delete Task": function() {
				currentTask.remove();
				currentTask = undefined;
				$( this ).dialog( "close" );
			}
		}
	});
	
	$("#cal").datepicker();
	
	$("#btnShow").click(function() {
		//$("#worstTeam").dialog("open");
		var dialogDiv = $("<div>");
		dialogDiv.dialog({
		      autoOpen: false,
		      show: {
		        effect: "slide",
		        duration: 1000
		      },
		      hide: {
		        effect: "slideOut",
		        duration: 1000
		      }
		    });
		dialogDiv.load("index.php").dialog("open");
	})
	
	$("#worstTeam").dialog({
      autoOpen: false,
      show: {
        effect: "slide",
        duration: 1000
      },
      hide: {
        effect: "slideOut",
        duration: 1000
      }
    });
	
	
})