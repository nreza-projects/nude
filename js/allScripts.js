jQuery(document).ready(function() {


// Viewport Checker Animations

	//sample animation
	jQuery('.vp-theBounceUp').addClass("space-invisible").viewportChecker({
		    classToRemove: 'space-invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'space-visible nuM-theBounceUp', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});
	//--
	
	
	
//----------------------------
//--


});


// rellax.js
	var rellax = new Rellax('.rellax');
//--







