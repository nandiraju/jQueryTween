jQueryTween
======
Lightest Tweening Engine for jQuery

Why jQueryTween?
======
* A super light &amp; simple jQuery plugin that works as a controller for <code>tween.js</code> (javascript animation engine), and for jQuery users, makes work alot easier. Imagine writing <code>init()</code>, <code>animate()</code> and <code>update()</code> over and over again?
* Supports most popular transitions such as <code>transform</code>, <code>opacity</code>, <code>color</code> and <code>backgroundPosition</code> for up to <code>60</code> frames per second.
* Can also do smooth <code>scrollTo</code>
* It's about <code>8k</code> minified and plus <code>6k</code> of <code>tween.js</code>, you can do a ton of cool things without the need to use expensive or complicated animation engines.
* This one is simple, light and I dare to say it's much more performance driven when it comes to simple tweens. 
* Keep in mind that <code>tween.js</code> is not included into the jQueryTween plugin, except for the AIO package. See demo for details.

DEMO
======
<a href="http://thednp.github.io/jQueryTween/"><img src="http://thednp.github.io/jQueryTween/assets/img/jQueryTween.png" alt="jQueryTween"></a>


Get to know some features
======
* works with jQuery, yes I know it's cool for n00bs and scary for advanced devs
* developer friendly and heavily documented
* commercial use friendly license
* can use all tween.js easing functions, can do delays and repeats
* supports callback functions to be used for <code>onUpdate</code> or <code>onComplete</code> events
* <code>performance</code> tweaks, when only a few tween properties are used, the others don't update
* for most properties you don't need to set an initial value, it gets it's current properties values, except <code>transform</code> (translate,rotate,scale) and <code>position</code> (top,right,bottom,left)
* tween control: play/pause/stop
* tween <code>scrollTo</code> window or target
* tween text <code>color</code> and <code>background-color</code>
* tween <code>position</code>: top, bottom, left, right (for absolute/relative positioned objects)
* tween <code>background-position</code>, but only when using percent values for X and Y
* tween <code>transform</code> - <code>translate3d</code>
* tween <code>transform</code> - <code>rotateX</code>, <code>rotateY</code>, <code>rotateZ</code>
* tween <code>transform</code> - <code>scale</code>
* tween <code>opacity</code>
 
 
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
	easing: TWEEN.Easing.Exponential.InOut, // my favorite
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


Tween Control
======
<pre>// stops all the object's tweens
$('.selector').stop();
 // pauses all the object's tweens 
$('.selector').pause();
// resumes all the object's tweens
$('.selector').play(); 
</pre>


TO DO / known issues
======
* tween to relative values (such as "+200" or "-150") does not work properly with some properties
* tweening background position only works for percent values
* tween chaining is not implemented
* does not tween text properties, spacing, etc, only what's shown in the examples
* scroll events are only available for document.body, no other containers available

License
======
jQueryTween is licensed under MIT.

You want to support the project?
======
Please feel free to fork, report issues or donate. 
