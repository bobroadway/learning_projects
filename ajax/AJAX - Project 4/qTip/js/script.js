/* global $ */
$(document).ready(function() { 
    console.log("Document is ready.");
    
    $('#demo1').qtip({
        content: {
            text: 'Just a regular ol\' tooltip.'
        }
    })
    
    $('#demo2').qtip({
        content: {
            text: 'Also check out dat styling!',
			title: {
				text: 'With a title and close button!',
				button: true
			}
        },
        hide: { 
			event: 'click',
			inactive: 3000
		},
		style: { 
            classes: 'qtip-dark qtip-rounded' 
        }
    });
    
    $('#demo3').qtip({
        content: {
			text: '<iframe src="js/script.js" />'
		},
		hide: {
			delay: 90,
			fixed: true
		},
		position: {
			viewport: $(window)
		}
    });
    
});
