/*!
 * More usage examples for jQueryTween
 */

 (function($) {
	
	$(document).ready(function() {

	
		/* jQueryTween DEMOS */
		
		// top animations
		$('.btn-play').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-danger').addClass('btn-info disabled');
			
			if ( $(bt).hasClass('once') ) {
				$('.jQueryTween').jQueryTween({ to: { opacity: 0 }, easing: 'TWEEN.Easing.Cubic.Out', duration : 1000 }, null, function() {
					$(bt).text('Animating..' );					
				});				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {x: -500, z: 150}, rotate: {x: 180, y: -90,  z: 3600} }, to: { opacity: 1, translate: {x: 0, z: 0}, rotate: {x:0, y:0, z: 0} }, easing: 'TWEEN.Easing.Cubic.Out', duration : 2500, delay: 1000 }, function() {				
					$(bt).removeClass('btn-info disabled once').addClass('btn-danger').text('Play Again');
				});
			} else {
				$('.jQueryTween').jQueryTween(  { to: { opacity: 0 }, easing: 'TWEEN.Easing.Cubic.Out', duration : 1000 }, null, function() {
					$(bt).text('Animating..' );					
				});				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {y: 800} }, to: { opacity: 1, translate: {y: 0}}, easing: 'TWEEN.Easing.Cubic.Out', duration : 300, delay: 1000 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {z: -800}, rotate: {z: 720} }, to: { opacity: 1, translate: {z: 0}, rotate: {z: 0}}, easing: 'TWEEN.Easing.Cubic.Out', duration : 300, delay: 1300 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {x: 800} }, to: { opacity: 1, translate: {x: 0}}, easing: 'TWEEN.Easing.Cubic.Out', duration : 300, delay: 1600 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, translate: {z: 800}, rotate: {y:-360} }, to: { opacity: 1, translate: {z: 0}, rotate: {y:0}}, easing: 'TWEEN.Easing.Cubic.Out', duration : 300, delay: 1900 });				
				$('.jQueryTween').jQueryTween({ from: { opacity: 0, scale: 4, translate: { x: -100, y: 100, z: -100}, rotate: {z:-3600} }, to: { opacity: 1, scale: 1, translate: { x: 0, y: 0, z:0}, rotate: {z:0}}, easing: 'TWEEN.Easing.Back.Out', duration : 1000, delay: 2200 }, function() {			
					$(bt).removeClass('btn-info disabled').addClass('btn-danger once').text('Play Again');
				});
			}				

		});		

		//width and height
		$('.btn-width').on('click',function() {
			var bt = $(this);
			$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#size-example').jQueryTween({ to: { width: 150 }, duration: 1000, yoyo: true }, 
				function() { // callback when tween is finished
					$(bt).text('Play width again' );	
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
					$(bt).text('Play height again' );	
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
			$('#size-example').jQueryTween({ to: { height: 150 }, yoyo: true, duration: 1000, delay: 500, easing: 'TWEEN.Easing.Exponential.InOut' }, function() {
				$('.btn-width, .btn-height, .btn-width-height').removeClass('btn-info disabled').addClass('btn-jtween');	
				$(bt).text('Play both again' );	
			});	
		});	
		
		// translation
		$('.btn-trx').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { x: 150 } }, yoyo: true }, 
				function() { // callback when tween is finished
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('TranslateX again' );	
				}, function() { // special callback while tweening
					$(bt).text('Translating..' );	
			});	
		});	
		$('.btn-try').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { y: -150 } }, yoyo: true }, 
				function() {
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('TranslateY again' );	
				}, function() {
					$(bt).text('Translating..' );	
			});	
		});	
		$('.btn-trz').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { z: -150 } }, yoyo: true }, 
				function() {
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('TranslateZ again' );	
				}, function() {
					$(bt).text('Translating..' );	
			});	
		});	
		$('.btn-translate').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#translate-example').jQueryTween({ to: { translate: { x: 150, y: -150, z: -300 } }, yoyo: true }, 
				function() {
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('Translate3D again' );	
				}, function() {
					$(bt).text('Translating..' );	
			});	
		});
		
		//rotation
		$('.btn-rox').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { x: 180 } }, yoyo: true }, 
				function() { // callback when tween is finished
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('RotateX again' );	
				}, function() { // special callback while tweening
					$(bt).text('Rotating..' );	
			});	
		});	
		$('.btn-roy').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { y: -180 } }, yoyo: true }, 
				function() {
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('RotateY again' );	
				}, function() {
					$(bt).text('Rotating..' );	
			});	
		});	
		$('.btn-roz').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { z: -180 } }, yoyo: true }, 
				function() {
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('RotateZ again' );	
				}, function() {
					$(bt).text('Rotating..' );	
			});	
		});	
		$('.btn-rotate').on('click',function() {
			var bt = $(this);
			$(bt).removeClass('btn-jtween').addClass('btn-info disabled');
			$('#rotate-example').jQueryTween({ to: { rotate: { x: 90, y: -180, z: -360 } }, yoyo: true }, 
				function() {
					$(bt).removeClass('btn-info disabled').addClass('btn-jtween').text('Rotate3D again' );	
				}, function() {
					$(bt).text('Rotating..' );	
			});	
		});	
		
		//scale
		$('.btn-sc1').on('click',function() {
			var bt = $(this);
			$('.btn-sc1, .btn-sc2').removeClass('btn-jtween').addClass('btn-info disabled');
			$('#scale-example').jQueryTween({ to: { scale: 0, opacity: 0 }, duration: 1500, yoyo: true, easing: 'TWEEN.Easing.Bounce.In' }, 
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
			$('#scale-example').jQueryTween({ from: {scale: 2, opacity: 0.3}, to: { scale: 1, opacity: 1 }, duration: 1500, easing: 'TWEEN.Easing.Cubic.Out' }, 
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
			$('#background-example').jQueryTween({ to: { backgroundPosition: { x: 'left' } }, yoyo: true }, 
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
			$('#background-example').jQueryTween({ to: { backgroundPosition: { y: 'top' } }, yoyo: true }, 
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
			$('#background-example').jQueryTween({ to: { backgroundPosition: { x: 'right', y: '100%' } }, yoyo: true, easing: 'TWEEN.Easing.Cubic.InOut', duration: 1500 }, function() {
				$('.btn-bpx,.btn-bpy,.btn-bpb').removeClass('btn-info disabled').addClass('btn-jtween');	
				$(bt).text('Move both again' );	
			}, function() {
				$(bt).text('Moving.. '  + parseInt($('#background-example').css('background-position-x')) + '% ' + parseInt($('#background-example').css('background-position-x')) +'%'  );	
			});
		});
		
		
		// window scrolling
		$('a[href^="#"]:not([href="#"])').on('click',function(e) {
			e.preventDefault();	
			var target = $( $.attr(this, 'href') );
			if ( target.length > 0) {
				var targetPosition = $(target).offset().top;
				var dynamicDuration = Math.abs(parseInt($(window).scrollTop() - $(target).offset().top));
				$(this).jQueryTween( { to : { scroll: $(target).offset().top }, easing: 'TWEEN.Easing.Cubic.Out', duration : dynamicDuration } );
			}
		});
		//smooth scroll
		// $(window).on('mousewheel DOMMouseScroll',function(e) {
			// e.preventDefault();							
			// var el = $(this);
			// var scrollAmount = 250, currentScroll = $(el).scrollTop();
			// var delta = e.originalEvent.wheelDelta/120 || -e.originalEvent.detail/3;
			// var finalScroll = currentScroll - parseInt(delta*scrollAmount);

			// $('body').jQueryTween( { to : { scroll: finalScroll }, easing: 'TWEEN.Easing.Exponential.Out', duration : 500 } );
		// });		
		
		
		// easing functions	
		$('#easing tbody').on('click', function(){
			$(this).find('tr').each(function(){
				var tr = $(this);
				var es = $(this).find('code').text();
				var el = $(tr).find('i.fa');
				$(el).jQueryTween({ to: { translate: { x: -500 }, rotate: { z: -360 } }, yoyo: true, easing: es, duration: 1500, repeat: 5 });
				
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
			$('body').jQueryTween( { to : { scroll: 0 }, easing: 'TWEEN.Easing.Cubic.Out', duration : 1000 } );			
		});
		
		
		// donate button
		$('#donate-link').popover({
			text: 'You can support with Bitcoins!',
			placement: 'auto top',
			container: 'body',
			template: '<div class="popover donate-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content donate-content"></div></div>'
		}).on('click', function(e) {
			e.preventDefault();

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
		
		$('.donate-link').on('click',function() {
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