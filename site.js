// slidein images

(function() {

	document.write("<style>.not-yet {opacity:0}\
					.come-in {transform: translateY(10px);opacity:0;animation: come-in 0.8s ease forwards;}\
			 		.come-in:nth-child(odd) {animation-duration: 1s;}\
			 		.come-in-bg {transform: translateY(10px);opacity:0;animation: come-in 0.8s ease forwards;}\
			 		@keyframes come-in {to { transform: translateY(0); opacity:1}}</style>");

	var isVisible = function(el) {
		var bottom_of_object = $(el).offset().top + ($(el).outerHeight() / 2);
		var bottom_of_window = $(window).scrollTop() +  window.innerHeight;
		bottom_of_window = bottom_of_window;  
		return( bottom_of_window > bottom_of_object );
	}

	var win = $(window);
	var allMods = $(".animate-in");

	allMods.each(function(i, el) {
	  var el = $(el);
	  if (!isVisible(el))
	    el.addClass("not-yet"); 
	});

	win.scroll(function(event) {
	  allMods.each(function(i, el) {
	    var el = $(el);
	    if (isVisible(el)) {
	      	el.addClass("come-in"); 
	  		el.removeClass("not-yet"); 
	    } 
	  });
	});

})();

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
    


