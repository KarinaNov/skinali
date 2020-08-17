$(function(){


    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 5,
        from: 200,
        to: 500
    });
    

    
    var helpers = {
        addZeros: function (n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };
    
    function sliderInit() {
      var $slider = $('.finished-works__slider');
      $slider.each(function() {
        var $sliderParent = $(this).parent();
        $(this).slick({
        prevArrow: ' <button class="slider-btn slider-btn__left"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd" d="M16 7.56098H3.8L9.4 2.05204L8 0.674805L0 8.54472L8 16.4146L9.4 15.0374L3.8 9.52846H16V7.56098Z" fill="black"/></svg></button>',
        nextArrow: ' <button class="slider-btn slider-btn__right"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd" d="M8 0.674805L6.6 2.05204L12.2 7.56098H0V9.52846H12.2L6.6 15.0374L8 16.4146L16 8.54472L8 0.674805Z" fill="black"/></svg></button>',
        dots: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
        });
    
        if ($(this).find('.finished-works__slider-item').length > 1) {
          $(this).siblings('.slides-numbers').show();
        }
    
        $(this).on('afterChange', function(event, slick, currentSlide){
          $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });
    
        var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
    
      });
      
      $('.slider-btn__left').on('click', function () {
        console.log('test');
        $('.finished-works__slider').slick('slickGoTo', 5);
    });
    };
    
    sliderInit();

    
$('.question__item-title').on('click', function(){

  $('.question__item').removeClass('question__item--active');
  $(this).parent().addClass('question__item--active');
});

  

});