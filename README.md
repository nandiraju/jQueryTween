jTween
======

Lightest Tweening Engine for jQuery

About
======

A simple plugin to easily bridge tween.js with jQuery, 
so tween.js is not included into the jTween plugin

Get to know some features
- works with jQuery, yes I know it's cool for n00bs and scary for advanced devs
- can use all tween.js easing functions, can do delays and repeats, and more
- supports 
- supports callback function 
- tween scrollTo events
- tween transform translate2d or translate3d
- tween transform rotate2d or rotate3d
- tween transform scale
- tween opacity 
 
 
Quick Example 
======
 <pre>//Simple example jTween syntax, very simple indeed
 $('#selector').jTween({ to: { opacity: 0.5, translate: {y: 50} }, duration: 700 });
 </pre>
 
Please notice that it's best to use a unique ID selector to perform an jTween animation,
you don't want all your things to fly around.
 
Advanced Example
======
<pre> // Complex example jTween syntax, with all supported features 
$('#selector').jTween({
	from: {
		opacity: 1,
		translate: {x:0, y:0, z:0},
		rotate: {x:0, y:0, z:0},
		scale: 1
	}, 
	to: {
		opacity: 0.5, 
		translate: {x: 150, y: 50, z: -100}, 
		rotate: {x: 5, y:15,z:-25},
		scale: 1.5
	}, 
	repeat: 2, // can be 
	duration: 1500,
	easing: 'TWEEN.Easing.Exponential.InOut', // my favorite
	delay: 500,
}, function() {
	//do some cool stuff when tween finished animating
}, function() {
	//do some cool stuff when tween finished animating
});
</pre>


ScrollTo Tweens
======
<pre>// Scroll to top of window
$('#button').on('click', function() {
	$('body').jTween({ to: { scroll: 0 } });
});
</pre>

<pre>// Scroll to element when clicking anchor links
$('a#button').on('click', function(e) {
	var target = $( $.attr(this, 'href') );
	$('#element').jTween({ to: { scroll: $(target).offset().top } });
});
</pre>

Known Issues
======
- tween transform translate only supports pixels as unit
- tween chaining is not implemented
- does not tween text properties, colors, spacing, etc, only what's shown in the complex jTween example
- scroll events are only available for document.body, no other containers available
- there is no way to stop tweens, pause rewind or control them via jTween

License
======
Licensed under MIT
