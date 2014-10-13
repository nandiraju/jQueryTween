/*!
 * More usage examples for jQueryTween
 */

 (function($) {
	
	$(document).ready(function() {

	
		/* jQueryTween DEMOS */
		
		// top animations
		$('.btn-play').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-success').addClass('btn-info disabled');
			
			if ( $(bt).hasClass('once') ) {
				$('.jQueryTween').jQueryTween({ to: { opacity: 0 }, easing: TWEEN.Easing.Cubic.Out, duration : 1000 }, null, function() {
					$(bt).text('Animating..' );					
				});				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {x: -500, z: 150}, rotate: {x: 180, y: -90,  z: 3600} }, to: { opacity: 1, translate: {x: 0, z: 0}, rotate: {x:0, y:0, z: 0} }, easing: TWEEN.Easing.Cubic.Out, duration : 2500, delay: 1000 }, function() {				
					$(bt).removeClass('btn-info disabled once').addClass('btn-success').text('Play Again');
				});
			} else {
				$('.jQueryTween').jQueryTween(  { to: { opacity: 0 }, easing: TWEEN.Easing.Cubic.Out, duration : 1000 }, null, function() {
					$(bt).text('Animating..' );					
				});				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {y: 800} }, to: { opacity: 1, translate: {y: 0}}, easing: TWEEN.Easing.Cubic.Out, duration : 300, delay: 1000 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {z: -800}, rotate: {z: 720} }, to: { opacity: 1, translate: {z: 0}, rotate: {z: 0}}, easing: TWEEN.Easing.Cubic.Out, duration : 300, delay: 1300 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {x: 800} }, to: { opacity: 1, translate: {x: 0}}, easing: TWEEN.Easing.Cubic.Out, duration : 300, delay: 1600 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {z: 800}, rotate: {y:-360} }, to: { opacity: 1, translate: {z: 0}, rotate: {y:0}}, easing: TWEEN.Easing.Cubic.Out, duration : 300, delay: 1900 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, scale: 4, translate: { x: -100, y: 100, z: -100}, rotate: {z:-3600} }, to: { opacity: 1, scale: 1, translate: { x: 0, y: 0, z:0}, rotate: {z:0}}, easing: TWEEN.Easing.Back.Out, duration : 1000, delay: 2200 }, function() {			
					$(bt).removeClass('btn-info disabled').addClass('btn-success once').text('Play Again');
				});
			}
		});
		$('.btn-stop').on('click',function() {
			$('.jQueryTween').pauseTween();
		});

		//colors
		$('.btn-color').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info');
			$('#color-example').jQueryTween({ to: { color: '#069' }, duration: 1500, yoyo:true }, 
				function() { // callback when tween is finished
					$(bt).removeClass('btn-info').addClass('btn-jtween').text('Play color again' );	
				}, function() { // special callback while tweening
					$(bt).text('Animating..' );	
			});	
		});	
		$('.btn-bg').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info');
			$('#color-example').jQueryTween({ to: { backgroundColor: 'rgb(0,102,153)' }, duration: 1500, yoyo:true }, 
				function() {
					$(bt).removeClass('btn-info').addClass('btn-jtween').text('Play bg again' );	
				}, function() {
					$(bt).text('Animating..' );	
			});	
		});	
		
		//width and height
		$('.btn-width').on('click',function() {
			var bt = $(this);
			$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#size-example').jQueryTween({ to: { width: 150 }, duration: 1000, yoyo: true }, 
				function() { // callback when tween is finished
					$(bt).text('Play W again' );	
					$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-info disabled').addClass('btn-jtween');	
				}, function() { // special callback while tweening
					$(bt).text('Width: ' + $('#size-example').width() + 'px' );	
			});	
		});	
		$('.btn-height').on('click',function() {
			var bt = $(this);
			$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#size-example').jQueryTween({ to: { height: 150 }, duration: 1000, yoyo: true }, 
				function() {
					$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Play H again' );	
				}, function() {
					$(bt).text('Height: ' + $('#size-example').height() + 'px' );	
			});	
		});	
		$('.btn-width-height').on('click',function() {
			var bt = $(this);
			$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#size-example').jQueryTween({ to: { width: 150 }, yoyo: true, duration: 1500 }, null, function() {
				$(bt).text('Both: ' + $('#size-example').width() + 'px and ' + $('#size-example').height() + 'px' );	
			});
			$('#size-example').jQueryTween({ to: { height: 150 }, yoyo: true, duration: 1000, delay: 500, easing: TWEEN.Easing.Exponential.InOut }, function() {
				$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-info disabled').addClass('btn-jtween');	
				$(bt).text('Play both again' );	
			});	
		});	
		
		// translation
		$('.btn-trx').on('click',function() {
			var bt = $(this);
			$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { x: 150 } }, yoyo: true }, 
				function() { // callback when tween is finished
					$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Play X again' );	
				}, function() { // special callback while tweening
					$(bt).text('Translating..' );	
			});	
		});	
		$('.btn-try').on('click',function() {
			var bt = $(this);
			$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { y: -150 } }, yoyo: true }, 
				function() {
					$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Play Y again' );	
				}, function() {
					$(bt).text('Translating..' );	
			});	
		});	
		$('.btn-trz').on('click',function() {
			var bt = $(this);
			$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { z: 150 } }, yoyo: true }, 
				function() {
					$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Play Z again' );	
				}, function() {
					$(bt).text('Translating..' );	
			});	
		});	
		$('.btn-translate').on('click',function() {
			var bt = $(this);
			$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { x: 150, y: -150, z: -300 } }, yoyo: true }, 
				function() {
					$('.btn-trx,.btn-try,.btn-trz,.btn-translate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Play all again' );	
				}, function() {
					$(bt).text('Translating..' );	
			});	
		});
		
		//rotation
		$('.btn-rox').on('click',function() {
			var bt = $(this);
			$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { x: 180 } }, yoyo: true }, 
				function() { // callback when tween is finished
					$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('RotateX again' );	
				}, function() { // special callback while tweening
					$(bt).text('Rotating..' );	
			});	
		});	
		$('.btn-roy').on('click',function() {
			var bt = $(this);
			$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { y: -180 } }, yoyo: true }, 
				function() {
					$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('RotateY again' );	
				}, function() {
					$(bt).text('Rotating..' );	
			});	
		});	
		$('.btn-roz').on('click',function() {
			var bt = $(this);
			$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { z: -180 } }, yoyo: true }, 
				function() {
					$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('RotateZ again' );	
				}, function() {
					$(bt).text('Rotating..' );	
			});	
		});	
		$('.btn-rotate').on('click',function() {
			var bt = $(this);
			$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { x: 90, y: -180, z: -360 } }, yoyo: true }, 
				function() {
					$('.btn-rox,.btn-roy,.btn-roz,.btn-rotate').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Rotate3D again' );	
				}, function() {
					$(bt).text('Rotating..' );	
			});	
		});	
		
		//scale
		$('.btn-sc1').on('click',function() {
			var bt = $(this);
			$('.btn-sc1, .btn-sc2').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#scale-example').jQueryTween({ to: { scale: 0, opacity: 0 }, duration: 1500, yoyo: true, easing: TWEEN.Easing.Circular.In }, 
				function() {
					$('.btn-sc1, .btn-sc2').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Scale out again' );	
				}, function() {
					$(bt).text('Scaling out..' );	
			});	
		});	
		$('.btn-sc2').on('click',function() {
			var bt = $(this);
			$('.btn-sc1, .btn-sc2').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#scale-example').jQueryTween({ from: {scale: 2, opacity: 0.3}, to: { scale: 1, opacity: 1 }, duration: 1500, easing: TWEEN.Easing.Cubic.Out }, 
				function() {
					$('.btn-sc1, .btn-sc2').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Scale in again' );	
				}, function() {
					$(bt).text('Scaling in..' );	
			});	
		});			
		
		// background position
		$('.btn-bpx').on('click',function() {
			var bt = $(this);
			$('.btn-bpx,.btn-bpy,.btn-bpb').removeClass('btn-jtween').addClass('btn-info disabled');				
			$('#background-example').jQueryTween({ to: { backgroundPosition: { x: 'left' } }, yoyo: true, easing: TWEEN.Easing.Circular.InOut, duration: 1000 }, 
				function() { // callback when tween is finished
					$('.btn-bpx,.btn-bpy,.btn-bpb').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Move X again' );	
				}, function() { // special callback while tweening
					$(bt).text('Moving..'  + parseInt($('#background-example').css('background-position-x')) + '%' );	
			});	
		});	
		$('.btn-bpy').on('click',function() {
			var bt = $(this);
			$('.btn-bpx,.btn-bpy,.btn-bpb').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#background-example').jQueryTween({ to: { backgroundPosition: { y: 'top' } }, yoyo: true, easing: TWEEN.Easing.Circular.InOut, duration: 1000 }, 
				function() {
					$('.btn-bpx,.btn-bpy,.btn-bpb').removeClass('btn-info disabled').addClass('btn-jtween');	
					$(bt).text('Move Y again' );	
				}, function() {
					$(bt).text('Moving..'  + parseInt($('#background-example').css('background-position-y')) +'%' );	
			});	
		});	
		$('.btn-bpb').on('click',function() {
			var bt = $(this);
			$('.btn-bpx,.btn-bpy,.btn-bpb').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#background-example').jQueryTween({ to: { backgroundPosition: { x: 'right', y: '100%' } }, yoyo: true, easing: TWEEN.Easing.Circular.InOut, duration: 1500 }, function() {
				$('.btn-bpx,.btn-bpy,.btn-bpb').removeClass('btn-info disabled').addClass('btn-jtween');	
				$(bt).text('Move both again' );	
			}, function() {
				$(bt).text('Moving.. '  + parseInt($('#background-example').css('background-position-x')) + '% ' + parseInt($('#background-example').css('background-position-x')) +'%'  );	
			});
		});
		
		//advanced example
		$('.btn-pos').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#position-example').jQueryTween({ from: { position: {left: '-100%'} }, to: { position: {left: '45%'} }, easing: TWEEN.Easing.Cubic.Out, duration: 1000 }, null, function() { $(bt).text( 'Running 8 tweens.. ' ); });
			$('#position-example').jQueryTween({ from: { position: {left: '45%'} }, to: { position: { left: '-100%' } }, easing: TWEEN.Easing.Cubic.InOut, duration: 1000, delay: 1500 }, function() { $('#position-example').css({left: 'auto'}); });
			
			$('#position-example').jQueryTween({ from: { position: {right: '-100%'} }, to: { position: { right: '45%'} }, easing: TWEEN.Easing.Cubic.Out, duration: 1000, delay: 2500 });
			$('#position-example').jQueryTween({ from: { position: {right: '45%'} }, to: { position: { right: '-100%' } }, easing: TWEEN.Easing.Cubic.InOut, duration: 1000, delay: 4000 }, function() { $('#position-example').css({right: 'auto'}); });
		
			$('#position-example').jQueryTween({ from: { position: {top: '-100%'} }, to: { position: { top: '25%'} }, easing: TWEEN.Easing.Cubic.Out, duration: 1000, delay: 5000 });
			$('#position-example').jQueryTween({ from: { position: {top: '25%'} }, to: { position: { top: '-100%' } }, easing: TWEEN.Easing.Cubic.InOut, duration: 1000, delay: 6500 }, function() { $('#position-example').css({top: 'auto'}); });

			$('#position-example').jQueryTween({ from: { position: {bottom: '-100%'} }, to: { position: {bottom: '25%'} }, easing: TWEEN.Easing.Cubic.Out, duration: 1000, delay: 7500 });
			$('#position-example').jQueryTween({ from: { position: {bottom: '25%'} }, to: { position: { bottom: '-100%' } }, easing: TWEEN.Easing.Cubic.InOut, duration: 1000, delay: 9000 }, function() { 
				$('#position-example').css({bottom: 'auto', left: '-100%'}); 
				$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('Play again' ); 
			});
		});

		
		// window scrolling
		$('a[href^="#"]:not([href="#"])').on('click',function(e) {
			e.preventDefault();	
			var target = $( $.attr(this, 'href') ),d;
			if ( target.length > 0) {
				var targetPosition = $(target).offset().top;
				var scrollD = Math.abs(parseInt($(window).scrollTop()) - parseInt($(target).offset().top) );
				if ( scrollD < 500 ) {
					d = 500;
				} else if ( scrollD > 500 && scrollD < 1000 ) {
					d = 1000;
				} else { d = 1500; }
		
				$(this).jQueryTween( { to : { scroll: $(target).offset().top }, easing: TWEEN.Easing.Quartic.Out, duration : d } );
			}
		});

		//smooth scroll
		// $(window).on('mousewheel DOMMouseScroll',function(e) { // you better use a javascript listener than just jQuery to improve performance
			// e.preventDefault();							
			// var el = $(this);
			// var scrollAmount = 300, currentScroll = $(el).scrollTop();
			// var delta = e.originalEvent.wheelDelta/120 || -e.originalEvent.detail/3;
			// var finalScroll = currentScroll - parseInt(delta*scrollAmount);
			// $('body').jQueryTween( { to : { scroll: finalScroll }, easing: TWEEN.Easing.Circular.Out, duration : 400 } );
		// });
		
		// easing functions	
		$('#easing tbody tr').on('click', function(){
			$(this).each(function(){
				var tr = $(this);
				var es = eval($(this).find('code').text());
				var el = $(tr).find('i.fa');
				$(el).jQueryTween({ to: { translate: { x: -400 }, rotate: { z: -360 } }, yoyo: true, easing: es, duration: 1500, repeat: 5 });
			});
		});
	
		/*
		* BOOTSTRAP
		*/
	 
		//some scrollspy work
		$(window).scrollspy({ target: '#side-navigation' });	

		//some affix work
		$('#side-nav').affix({
			offset: {
				top: function () {
					return (this.top = ( $('#overview').outerHeight(true) + $('#header').outerHeight(true) ) )
				}
			}
		});

		// init tooltips
		$('a,button,abbr').each(function(){
			if ( $(this).attr("title") != null &&  $(this).attr("title") != "undefined" && $(this).attr("title").length != 0 && $(this).data('toggle') != "popover" && $(this).parent().not('.menu-item') ){
				if ( $(this).data("placement") == null ) {
					$(this).tooltip( {'placement': 'auto', 'container': 'body'} );
				} else {
					$(this).tooltip( {'container': 'body'} );
				}
			}
		});

		//trigger to top
		$('.gotop').on('click',function(e) {
			e.preventDefault();
			$('body').jQueryTween( { to : { scroll: 0 }, easing: TWEEN.Easing.Cubic.Out, duration : 1000 } );			
		});
		
		
		// donate button
		$('#donate-link').popover({
			text: 'You can support with Bitcoins!',
			placement: 'auto top',
			container: 'body',
			template: '<div class="popover donate-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content donate-content"></div></div>'
		}).on('click', function() {
			var btn = $(this), address = btn.attr('href').replace("bitcoin:", "");
			
			if ( $('.donate-content > img').length == 0 ) {
				setTimeout(function() {
					$('.donate-content').qrcode({
						size: 160,
						fill: '#000000',
						radius: 0,
						text: address,
						render: "image"
					}).appendTo('.donate-content');
					var address = btn.attr('href').replace("bitcoin:", "");
				}, 100);			
			}
		});
		
		$('.donate-link').on('click',function(e) {
			e.preventDefault();
			var address = $(this).attr('href').replace("bitcoin:", "");
			setTimeout(function() {
				copyToClipboard( address );
			}, 200);	
		});
		
		//nice trick
		function copyToClipboard(text) {
		  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
		}		
	});
 
 })(jQuery);