jQuery(function($){
	"use script";
	//Header slider
	if($('.slider_home').length){
		$('.slider_home').slick({
		vertical: true,
		arrows: false,
		dots: true
	});
	}
	//burger menu
	if($('.fa-bars').length){
		$('.fa-bars').on('click', function(){
			$('.header_top .inner_header nav>ul').show();
			$(this).hide();
			$('.fa-times').show();
		});

		$('.fa-times').on('click', function(){
			$('.header_top .inner_header nav>ul').hide();
			$(this).hide();
			$('.fa-bars').show();
		})
	}
	//twitter slider
	if($('.slid_twitt').length){
		$('.slid_twitt').slick({
		vertical: true,
		appendArrows: $(".arows_twitter"),
		prevArrow: "<span class=\"up\"><i class=\"fas fa-arrow-up\"></i></span>",
		nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
	});
	}
	
	if($('.open_video').length){
		$('.open_video').magnificPopup({
	 	disableOn: 700,
	  	type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
	}); 
	}
	//corousel slider for shop items
	if($('.wrapper_offers').length){
		$('.wrapper_offers').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		appendArrows: $(".shop_slider_navigation"),
		prevArrow: "<div class=\"arrow_left\"><i class=\"fas fa-arrow-left\"></i></div>",
		nextArrow: "<div class=\"arrow_right\"><i class=\"fas fa-arrow-right\"></i></div>",
		 responsive: [
		    {
		     	 breakpoint: 768,
		      	settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		     {
		      	breakpoint: 512,
		      	settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
      			}
    		}
		  ]
	});
	}
//corousel slider for coment
	if($('.carusel_people').length){
		$('.carusel_people').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $(".carusel_coment"),
		prevArrow: "<div class=\"left_arrow\"><i class=\"fas fa-arrow-left\"></i></div>",
		nextArrow: "<div class=\"right_arrow\"><i class=\"fas fa-arrow-right\"></i></div>",
		 responsive: [
		    {
		     	 breakpoint: 768,
		      	settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		     {
		      	breakpoint: 512,
		      	settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
      			}
    		}
		  ]
	});
		// On before slide change
		$('.carusel_people').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  var tabs_container = $('.testimonial_tab_container');

		  tabs_container.find($('.tab_item')).hide();
		  tabs_container.find($('.tab_' + nextSlide)).show();
		});
     
	}

});
