(function($,doc,win) {
	win.App = win.App || {};
	$.extend(true, App, {
		_q: [],
		window: $(win),
		document: $(doc),
		page: $('html, body'),
		body: $('body'),
		params: {
			lazyload: {
				threshold: 200
			}
		},
		_currentNiche: App._currentNiche || 0,
		
		initPage: function() {
			$(win).scroll(function(event) {
				var scroll_pos=$(this).scrollTop();
				if (scroll_pos>=($('.about').offset().top-$(win).height()+150)) {
					if (!$('.about .item h1').hasClass('animated')) {
						$('.about .item:even h1').addClass('animated slideInLeft');
						$('.about .item:odd h1').addClass('animated slideInRight')
					};
				};
				if (scroll_pos>=($('.cost').offset().top-$(win).height()+150)) {
					if (!$('.cost .item h1').hasClass('animated')) {
						$('.cost .item:even h1').addClass('animated slideInLeft');
						$('.cost .item:odd h1').addClass('animated slideInRight')
					};
				};
				if (scroll_pos>=($('.feedback').offset().top-$(win).height()+150)) {
					if (!$('.feedback h1').hasClass('animated')) {
						$('.feedback h1').addClass('animated slideInLeft');
					};
				};
			});
			$('[data-tab]').on('click',function(e){
				e.preventDefault();
				$('[data-tab]').removeClass('active');
				$(this).addClass('active');
				$('.order .container .box').hide();
				var data_value=$(this).data('tab');
				$(data_value).css('display', 'flex');;
			})
			$('.vacancies_list li').on('click', function(e){
				e.preventDefault();
				$(this).toggleClass('active');
			})
			$('.signin span').on('click', function(e){
				e.preventDefault();
				$('.signin').toggleClass('active');
			})
			$('.modal_contain .modal_window .head .close').on('click',function(){
				$('.shadow_site, .modal_contain').fadeOut();
				$('body').removeClass('disable_scroll');
			})
			$('#callback').on('click', function(e){
				e.preventDefault();
				$('.shadow_site, .modal_contain').fadeIn();
				$('body').addClass('disable_scroll');
			})
			if ($('#map')) {
				ymaps.ready(init);
				function init () {
					var myMap = new ymaps.Map('map', {
						center: [55.709368, 37.657196],  
						zoom: 16
					});
					var myPlacemark = new ymaps.Placemark([55.709118, 37.654140] , {
						iconCaption: 'ул. Ленинская Cлобода, 19',
						hintContent: 'офис 21г4, бизнес-центр "Омега-плаза"'
					},{
						preset: 'islands#redCircleDotIconWithCaption',
					});
					var myPolyline = new ymaps.Polyline([
						[55.708641, 37.657276],
						[55.710325, 37.657514],
						[55.709251, 37.653990]
					], {
					}, {
						balloonCloseButton: false,
						// Цвет линии.
						strokeColor: "#30B418",
						// Ширина линии.
						strokeWidth: 4,
					});
					myMap.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier'])
					myMap.geoObjects.add(myPlacemark).add(myPolyline);
				}
			};
		
		},
		initHoverDisable: function() {
		},
		initApp: function() {
			App.initHoverDisable();
			App.initPage();
		}
	});
	App.initApp();
})(jQuery,document,window);


//App._q.push(function(){
// App.init();
//});