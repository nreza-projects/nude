// RELLAX PLUGIN
//--------------
(function(h,f){"function"===typeof define&&define.amd?define([],f):"object"===typeof module&&module.exports?module.exports=f():h.Rellax=f()})(this,function(){var h=function(f,l){var b=Object.create(h.prototype),g=0,k=0,c=[],p=!1,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},m=function(a,b,d){return a<=b?b:a>=d?d:a};b.options={speed:-2,center:!1};l&&
Object.keys(l).forEach(function(a){b.options[a]=l[a]});b.options.speed=m(b.options.speed,-10,10);f||(f=".rellax");var q=document.querySelectorAll(f);if(0<q.length)b.elems=q;else throw Error("The elements you're trying to select don't exist.");var v=function(a){var e=a.getAttribute("data-rellax-percentage"),d=a.getAttribute("data-rellax-speed"),c=e||b.options.center?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0,f=c+a.getBoundingClientRect().top,h=a.clientHeight||
a.offsetHeight||a.scrollHeight,g=e?e:(c-f+k)/(h+k);b.options.center&&(g=.5);c=d?m(d,-10,10):b.options.speed;if(e||b.options.center)c=m(d||b.options.speed,-5,5);e=Math.round(100*c*(1-g));a=a.style.cssText;d="";0<=a.indexOf("transform")&&(d=a.indexOf("transform"),d=a.slice(d),d=(g=d.indexOf(";"))?" "+d.slice(11,g).replace(/\s/g,""):" "+d.slice(11).replace(/\s/g,""));return{base:e,top:f,height:h,speed:c,style:a,transform:d}},r=function(){var a=g;g=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||
document.body.parentNode||document.body).scrollTop;return a!=g?!0:!1},t=function(){r()&&!1===p&&n();u(t)},n=function(){for(var a=0;a<b.elems.length;a++){var e=" translate3d(0,"+(Math.round(100*c[a].speed*(1-(g-c[a].top+k)/(c[a].height+k)))-c[a].base)+"px,0)"+c[a].transform;b.elems[a].style.cssText=c[a].style+"-webkit-transform:"+e+";-moz-transform:"+e+";transform:"+e+";"}};b.destroy=function(){for(var a=0;a<b.elems.length;a++)b.elems[a].style.cssText=c[a].style;p=!0};(function(){k=window.innerHeight;
r();for(var a=0;a<b.elems.length;a++){var e=v(b.elems[a]);c.push(e)}window.addEventListener("resize",function(){n()});t();n()})();return b};return h});
//--------------
//--


jQuery(document).ready(function(){	
//viewport checker
//----------------	
	
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'space-visible',
            offset: 100,
            repeat: false,
            callbackFunction: function(elem, action){},
			scrollHorizontal: false
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
            scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');

        this.checkElements = function(){
        
            // Set some vars to check with
			if(!options.scrollHorizontal){
				var viewportTop = $(scrollElem).scrollTop(),
					viewportBottom = (viewportTop + windowSize);
			}
			else{
				var viewportTop = $(scrollElem).scrollLeft(),
					viewportBottom = (viewportTop + windowSize);
			}
            

            $elem.each(function(){
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd) && !options.repeat){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = (!options.scrollHorizontal) ? Math.round( $obj.offset().top ) + options.offset : Math.round( $obj.offset().left ) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(options.classToAdd);

                    // Do the callback function. Callback will send the jQuery object as parameter
                    options.callbackFunction($obj, "add");
                    
                // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(options.classToAdd) && (options.repeat)){
                    $obj.removeClass(options.classToAdd);

                    // Do the callback function.
                    options.callbackFunction($obj, "remove");
                }
            });
        
        };

        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", this.checkElements);

        // On resize change the height var
        $(window).resize(function(e){
            windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        });
        
        // trigger inital check if elements already visible
        this.checkElements();
        
        return this;
    };
//--------
//--

// Scrolling Plugin
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1600, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } 
        });
      }
    }
  });
//--------
//--

// NAVSCRIPT
//----------
jQuery('#navBttn').on('click', function() {
      		jQuery('#navBox').fadeIn(400);
});
jQuery('#navBttnX').on('click', function() {
    		jQuery('#navBox').fadeOut(350);
});
//----------
//-- 
   

//VIEWPORT CHECKER 
//----------------

//BlurIn
jQuery('.vp-BlurIn').addClass("space-invisible").viewportChecker({
		    classToRemove: 'space-invisible', 
		    classToAdd: 'motion-BlurIn',
		    removeClassAfterAnimation: false,		   	repeat: true,
		    scrollHorizontal: false
});
    
//----------------
//--
    
    
});

// PRELOADER
//----------
jQuery(window).load(function( $ ){
		jQuery('#wall').fadeOut(900, function( $ ) {(this).remove;		
		});
});


//----------
//--