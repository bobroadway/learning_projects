/* global $ */
/* global jQuery */
(function($) {
    
    $(document).ready(function(){
        console.log('Ready!');
        
        /*
        1. Create an html button with the following details: value='click me', 
        type='button', and a click event handler that logs 'cubs stink' to the console
        */
        $('body').append('<input type="button" id="button" value="Click Me!" />');
        $('#button').on('click',function(e){
            console.log("Cubs Won!"); // please don't dock me, lol
        });

        /*
        2. Add a mouseover and mouseout event to the li tags in the toDoList. The 
        mouseover event should change the background color to yellow and the 
        mouseout event should change the background color to white.
        */
        /*
        $('li').mouseover(function() {
			$(this).css('backgroundColor', 'yellow');
		}).mouseout(function() {
			$(this).css('backgroundColor', 'white');			
		})
		*/
		
		/*
        4. Comment out the mouseout and mouseover events from above. Instead of 
        using the mouseover and mouseout events, change the code to function the 
        same way using the .on() event
        */
		$('body').on('mouseenter', 'li', function(){
            $(this).css('backgroundColor', 'yellow');
        });
        $('body').on('mouseleave', 'li', function(){
            $(this).css('backgroundColor', 'white');
        });
        /*
        5. Verify that the mouseover and mouseout events work for the original list 
        items and the dynamically created list item
        */
        // moved code block above the added li to verify just that

        /*
        3. Add a new list item to the toDoList. why does the new list item not have 
        the same mouseover and mouseout events attached?
        */
        // does not work (with .mouseover/.mouseout) because css was applied to 
        // existing li before this one existed
        $('<li></li>').html('add new "li"').appendTo("#toDoList");
        
        /*
        6. Add a new button with the following details: value='remove mouse 
        events', and a click event handler that removes the mouseover and mouseout 
        events from all the list items (use the .off() event)
        */
        $('body').append('<input type="button" id="remove" value="Remove Mouse Events" />');
        $('#remove').on('click',function(e){
            console.log('Event Handlers Removed!');
            $('body').off('mouseenter');
            $('body').off('mouseleave');
        });
        
    });
    
})(jQuery)