/**
 * jQueryTween - The Lightest Tweening Engine for jQuery
 * License - MIT license
 * https://github.com/thednp/jQueryTween
 * @author Dan Partac / http://themeforest.net/user/dnp_theme
 */
 
;(function($) {

	"use strict";	
	// init jQueryTween main object
	var jQueryTween = function( item, options, callback, special ) {
			
		//get some variables
		var sct = gSC(window);	
		var el = $(item)[0];
	
		
		// these are the default start values for all tweens if not specified by user call
		var ops = $.extend(true,{
			from: {
				opacity		: 1, // integer
				width		: '', // integer/px/%
				height		: '', // integer/px/%
				position	: {top:'',right:'',bottom:'',left:''},
				backgroundPosition: {x:'',y:''}, // integer/%/string[left,center,bottom,etc]
				translate	: {x:0, y:0, z:0}, // integer only
				rotate		: {x:0, y:0, z:0}, // integer only
				scale		: 1, // integer only
				scroll		: $(sct).scrollTop(), // integer only		
			},
			to: {
				opacity		: '',
				width		: '', 
				height		: '',
				position	: {top:'',right:'',bottom:'',left:''},
				backgroundPosition: {x: '', y: ''},			
				translate	: {x:'', y:'', z:''},
				rotate		: {x:'', y:'', z:''},
				scale		: '',
				scroll		: '',			
			},
			easing			: 'TWEEN.Easing.Linear.None', // we need to wrap in quotes the Easing function as jQuery does not recognize it as defined variable
			delay			: 0,
			duration		: 500,			
			repeat			: 0,	// 0 / n / 'Infinity'		
			yoyo			: false,				
		}, options );
		
		//properly process repeat and handle yoyo
		if ( ops.repeat === 0 && ops.yoyo === true ) {
			var repeatValue = 1;
		} else {
			if ( !$.isNumeric(ops.repeat) && ops.repeat !== 'Infinity' ) { // if misstyped
				var repeatValue = 0;
			} else {
				var repeatValue = eval(ops.repeat);			
			}
		}		
		
		//from/initial values
		var iwi	= cv(ops.from.width) ? truD(ops.from.width)[0] : truD( $(item).width())[0];
		var ihe	= cv(ops.from.height) ? truD(ops.from.height)[0] : truD($(item).height())[0];
		
		var ito = cv(ops.from.position.top) ? truD(ops.from.position.top)[0] : '';
		var iri	= cv(ops.from.position.right) ? truD(ops.from.position.right)[0] : '';
		var ibo	= cv(ops.from.position.bottom) ? truD(ops.from.position.bottom)[0] : '';
		var ile	= cv(ops.from.position.left) ? truD(ops.from.position.left)[0] : '';
		
		if ( cv( ops.to.backgroundPosition.x ) || cv( ops.to.backgroundPosition.y ) ) {
			var ibx	= cv( ops.from.backgroundPosition.x ) ? truX(ops.from.backgroundPosition.x) : bPos(item)[0];
			var iby	= cv( ops.from.backgroundPosition.y ) ? truY(ops.from.backgroundPosition.y) : bPos(item)[1];
		} else {
			var ibx	= '';
			var iby	= '';		
		}
		
		var itx	= cv(ops.from.translate.x) ? truD(ops.from.translate.x)[0] :'';
		var ity	= cv(ops.from.translate.y) ? truD(ops.from.translate.y)[0] :'';
		var itz	= cv(ops.from.translate.z) ? truD(ops.from.translate.z)[0] :'';
		
		var irx = cv(ops.from.rotate.x) ? truD(ops.from.rotate.x)[0] :''; //always deg
		var iry = cv(ops.from.rotate.y) ? truD(ops.from.rotate.y)[0] :'';
		var irz = cv(ops.from.rotate.z) ? truD(ops.from.rotate.z)[0] :'';
		
		var isa = ops.from.scale; // always int
		var iop = ops.from.opacity;
		var isc = ops.from.scroll;
		
				
		//target values
		var wi	= cv( ops.to.width ) ? truD(ops.to.width)[0] : '';
		var he	= cv( ops.to.height ) ? truD(ops.to.height)[0] : '';
				
		var top	= cv(ops.to.position.top) ? truD(ops.to.position.top)[0] : '';
		var ri	= cv(ops.to.position.right) ? truD(ops.to.position.right)[0] : '';
		var bo	= cv(ops.to.position.bottom) ? truD(ops.to.position.bottom)[0] : '';
		var le	= cv(ops.to.position.left) ? truD(ops.to.position.left)[0] : '';
		
		if ( cv( ops.to.backgroundPosition.x ) || cv( ops.to.backgroundPosition.y ) ) {
			var bx	= cv( ops.to.backgroundPosition.x ) ? truX(ops.to.backgroundPosition.x) : ibx;
			var by	= cv( ops.to.backgroundPosition.y ) ? truY(ops.to.backgroundPosition.y) : iby;
		} else {
			var bx	= '';
			var by	= '';		
		}
		
		var tx	= cv( ops.to.translate.x ) ? truD(ops.to.translate.x)[0] : '';
		var ty	= cv( ops.to.translate.y ) ? truD(ops.to.translate.y)[0] : '';
		var tz	= cv( ops.to.translate.z ) ? truD(ops.to.translate.z)[0] : '';
		
		var rx = cv( ops.to.rotate.x ) ? ops.to.rotate.x : '';
		var ry = cv( ops.to.rotate.y ) ? ops.to.rotate.y : '';
		var rz = cv( ops.to.rotate.z ) ? ops.to.rotate.z : '';
		
		var sa 	= cv( ops.to.scale ) ?  ops.to.scale : '';
		var op 	= cv( ops.to.opacity ) ? ops.to.opacity : '';
		var sc 	= cv( ops.to.scroll ) ? ops.to.scroll : '';

		//check unit
		var wiu	= cv( wi ) ? truD(ops.to.width)[1] : '';
		var heu	= cv( he ) ? truD(ops.to.height)[1] : '';
		
		var tou	= cv( top ) ? truD(ops.to.top)[1] : '';
		var riu	= cv( top ) ? truD(ops.to.right)[1] : '';
		var bou	= cv( top ) ? truD(ops.to.bottom)[1] : '';
		var leu	= cv( top ) ? truD(ops.to.left)[1] : '';
		
		var txu	= cv( tx ) ? truD(ops.to.translate.x)[1] : '';
		var tyu	= cv( ty ) ? truD(ops.to.translate.y)[1] : '';
		var tzu	= cv( tz ) ? truD(ops.to.translate.z)[1] : '';					
						
		// init tween.js
		animateTween();
		
		var from = { w: iwi, h: ihe, t: ito, right: iri, b: ibo, l: ile, bgX: ibx, bgY: iby, scale: isa, trX: itx, trY: ity, trZ: itz, roX: irx, roY: iry, roZ: irz, opacity: iop, scroll: isc };
		var target = { w: wi, h: he, t: top, right: ri, b: bo, l: le, bgX: bx, bgY: by, scale: sa, trX: tx, trY: ty, trZ: tz, roX: rx, roY: ry, roZ: rz, opacity: op, scroll: sc };
		
		var tween = new TWEEN.Tween( from )				
			.to( target, ops.duration )
			.delay( ops.delay )
			.easing( eval(ops.easing) )
			.yoyo( ops.yoyo )
			.repeat( repeatValue )
			.onUpdate(
				function () {					
					//set tween values
					var trxt	= cv(tx) ? ' translateX(' + this.trX + txu + ')' : '';
					var tryt	= cv(ty) ? ' translateY(' + this.trY + tyu + ')' : '';
					var trzt	= cv(tz) ? ' translateZ(' + this.trZ + tzu + ')' : '';
					
					var roxt = cv(rx) ? ' rotateX(' + this.roX + 'deg)' : '';
					var royt = cv(ry) ? ' rotateY(' + this.roY + 'deg)' : '';
					var rozt = cv(rz) ? ' rotateZ(' + this.roZ + 'deg)' : '';
					
					var sca = cv(sa) ? ' scale(' + this.scale + ')' : '';
					
					var transform = sca + trxt + tryt + trzt + roxt + royt + rozt;
					if ( cv(transform) ) { tr(transform); }
					
					//dimensions
					if ( cv(wi) ) { el.style.width = this.w + wiu; }					
					if ( cv(he) ) { el.style.height = this.h + heu; }
					
					//positioning
					if ( cv(top) ) { el.style.top = this.t + tou; }					
					if ( cv(ri ) ) { el.style.right = this.r + riu; }
					if ( cv(bo ) ) { el.style.bottom = this.b + bou; }
					if ( cv(le ) ) { el.style.left = this.l + leu; }
					
					// scrolling
					if ( cv(sc) ) { sct[0].scrollTop = this.scroll; }
					
					//background position
					if ( cv(bx) || cv(by) ) {
						var bXX = this.bgX;
						var bYY = this.bgY;
						el.style.backgroundPosition = bXX.toString()+'% '+bYY.toString()+'%';
					}
		
					//opacity					
					if ( cv(op) ) { el.style.opacity = this.opacity; }
					
					//run special function onUpdate
					if ( special && typeof special === "function") { special(); }					
				}
			)
			.onComplete( runCallback )
			.start();
		
		function animateTween(time) {
			requestAnimationFrame( animateTween );
			TWEEN.update(time);
		}
		
		//callback when tween is finished
		function runCallback() {
			if ( callback && typeof callback === "function") { 
				callback();
			}
		}
		
		/* Process values utils
		*
		*/
		//value checker
		function cv(val) {
			if ( val !== 'undefined' && val !== '' && val !== 'NaN' ) return true;
		};
		
		//get true w/h
		function truD(d){
			var v,u;
			if (/px/i.test(d)) { 
				u = 'px'; v = parseInt( d.replace('px',d) );
			} else if (/%/i.test(d)) {
				u = '%'; v = parseInt( d.replace('%',d) );
			} else {
				v = d; u = 'px';
			}	
			return [v,u];
		}
		
		//get background position true values
		function truX(x) {
			if ( x == 'left' ) { 
				return 0; 
			} else if ( x == 'center' ) { 
				return 50; 
			} else if ( x == 'right' ) { 
				return 100; 		
			} else { 
				return parseInt( x.toString().replace('%', '')); 
			} 			
		};
		function truY(y) {
			if ( y == 'top' ) { 
				return 0; 
			} else if ( y == 'center' ) { 
				return 50; 
			} else if ( y == 'bottom' ) { 
				return 100; 		
			} else { 
				return parseInt( y.toString().replace('%', '')); 
			} 			
		};
		
		//get current background position
		function bPos(elem) {	
			var style = $(elem).css('background-position'),x,y;			
			var pos = style.split(" ");		
				x = truX(pos[0]);			
			if ( cv(pos[1]) ) {
				y = truY(pos[1])
			} else {
				y = 0;
			}
			return [ x, y ]; 
		};
		
		//process transform
		function tr(prop) {	
			el.style.webkitTransform = prop;
			el.style.MozTransform = prop;
			el.style.Transform = prop;			
		}
		
		//get true container for scroll events
		function gSC(container) {
			return $(container).map(function() {
				var cnt = this,
					isWin = !cnt.nodeName || $.inArray( cnt.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;
					if (!isWin) return cnt;

				var doc = (cnt.contentWindow || cnt).document || cnt.ownerDocument || cnt;

				return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ?
					doc.body :
					doc.documentElement;
			});
		};
	
	};
	
	$.fn.jQueryTween = function( options, callback, special ) {
		return this.each(function() {
			new jQueryTween( this, options, callback, special );
		});
	};	
	
})(jQuery);