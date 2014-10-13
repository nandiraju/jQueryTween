jQueryTween
======
Lightest Tweening Engine for jQuery

Why jQueryTween?
======
* A simple plugin to easily bridge tween.js with jQuery, and for jQuery users, makes work alot easier. Imagine writing init(), animate() and update() over and over again?
* It's about 8k minified and plus 6k of tween.js, you can do a ton of cool things without the need to use expensive or complicated animation engines.
* This one is simple, light and I dare to say it's much more performance driven when it comes to simple tweens. 
* Keep in mind that tween.js is not included into the jQueryTween plugin. You will have to download at source.

DEMO
======
<a href="http://thednp.github.io/jQueryTween/"><img src="http://thednp.github.io/jQueryTween/assets/img/jQueryTween.png" alt="jQueryTween"></a>


Get to know some features
======
* works with jQuery, yes I know it's cool for n00bs and scary for advanced devs
* can use all tween.js easing functions, can do delays and repeats, and more
* supports callback functions to be used onUpdate or onComplete
* performance tweaks, when only a few tween properties are used, the others don't update
* for most properties you don't need to set an initial value, it gets it's current properties values, except transform 
* tween scrollTo events
* tween text color and background-color
* tween positions: top, bottom, left, right (for absolute position objects)
* tween background position, but only when using percent values for X and Y
* tween transform translate2d or translate3d
* tween transform rotate2d or rotate3d
* tween transform scale
* tween opacity 
 
 
Quick Example 
======
 <pre>//Simple example jQueryTween syntax, very simple indeed
 $('#selector').jQueryTween({ to: { opacity: 0.5, translate: {y: 50} }, duration: 700 });
 </pre>
 
Please notice that it's best to use a unique ID selector to perform an jQueryTween animation,
you don't want all your things to fly around.
 
Advanced Example
======
<pre> // Complex example jQueryTween syntax 
$('#selector').jQueryTween({
	from: {
		opacity: 1,
		translate: {x:0, y:0, z:0},
		rotate: {x:0, y:0, z:0},
		scale: 1
	}, 
	to: {
		opacity: 0.5, 
		translate: {x: 150, y: 50, z: -100}, 
		rotate: {x: 5, y:15, z:-25},
		scale: 1.5
	}, 
	repeat: 2, // can be number or 'Infinity'
	duration: 1500,
	easing: 'TWEEN.Easing.Exponential.InOut', // my favorite
	delay: 500,
}, function() {
	//do some cool stuff when tween finished animating
}, function() {
	//do some cool stuff while tween is running 
});
</pre>


ScrollTo Tweens
======
<pre>// Scroll to top of window
$('#button').on('click', function() {
	$('body').jQueryTween({ to: { scroll: 0 } });
});
</pre>

<pre>// Scroll to element when clicking anchor links
$('a#button').on('click', function(e) {
	var target = $( $.attr(this, 'href') );
	$('#element').jQueryTween({ to: { scroll: $(target).offset().top } });
});
</pre>


TO DO / known issues
======
* tween to relative values (such as "+200" or "-150") does not work properly with some properties
* tweening background position only works for percent values
* tween chaining is not implemented
* tween stop/play/pause is not implemented
* does not tween text properties, spacing, etc, only what's shown in the examples
* scroll events are only available for document.body, no other containers available

License
======
jQuery Tween is licensed under MIT.

You want to support the project?
======
Please feel free to donate 
