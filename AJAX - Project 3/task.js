/* global $ */
$(document).ready(function() {
  
  // create tasks table
  $("#tasks").append('<table id="tasksTable"></table>');
  
  // loading gif
  $(document).ajaxStart(function () {
    $("#loading").show();
  }).ajaxStop(function () {
    $("#loading").hide();
  });
  
  // display all tasks
  $.ajax({
    type: "GET",
    url: "allTasks.php",
    dataType: "xml",
    success: function(xml){
      console.log("Populating To Do List!");
      // iterate through xml tasks
      $(xml).find('task').each(function(){
        if ($(this).find('complete').text() == 0) {
          // declare
          var id = $(this).find('id').text();
          var description = $(this).find('description').text();
          // for each iteration desplay the task row
          $("<tr></tr>")
            .attr("id","row" + id)
            .appendTo("#tasksTable");
          $("<td></td>") // delete icon cell
            .attr("class","deleteCell")
            .html("<a class='deleteIcon' id=" + id + ">&#10062;</a>")
            .css("cursor", "pointer")
            .appendTo("#row" + id);
          $("<td></td>") // task description cell
            .html(description)
            .appendTo("#row" + id);
        }
      });
    },
    error: function() {
      alert("Error loading...");
    }
  });
  
  // add task functionality
  $('#addNewTask').on('click',function(e){
    console.log("'Add New Task' Clicked!");
    var $btn = $(e.currentTarget);
    $btn.prop('disabled', true);
    // send ajax call to addTask.php
    $.ajax({
      type: "GET",
      url: "addTask.php",
      data:{description:document.getElementById("newTask").value},
      dataType: "json",
      success: function(task){
        console.log("Task with Id:" + task.id + " Added!");
        // display the new task row
        $("<tr></tr>")
          .attr("id","row" + task.id)
          .appendTo("#tasksTable");
        $("<td></td>") // delete icon cell
          .attr("class","deleteCell")
          .html("<a class='deleteIcon' id=" + task.id + ">&#10062;</a>")
          .css("cursor", "pointer")
          .appendTo("#row" + task.id);
        $("<td></td>") // task description cell
          .html(task.description)
          .appendTo("#row" + task.id);
      },
      error: function() {
        alert("Error adding...");
      }, 
      complete: function () {
        $btn.prop('disabled', false);
      }
    }); 
	});

  // enter key functionality to add a task
  $('#newTask').keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      $('#addNewTask').click();
    }
  });

  // delete functionality
  $('body').on('click', 'a.deleteIcon', function () {
    $
    console.log("'Delete Icon' Clicked!");
    // declare
    var task = $(this);
    // remove the task row, storing it to re-append if error
    var tr = task.closest('tr').remove();
    // send ajax call to deleteTask.php
		$.ajax({
	    type: "GET",
	    url: "deleteTask.php",
	    data:{id:task.attr("id")},
	    success: function(){
	      console.log("Task with Id:" + task.attr("id") + " Deleted!");
	    },
	    error: function(){
	      alert("Error deleting...");
	      tr.appendTo("#tasksTable");
	    }
	  });
  });

});