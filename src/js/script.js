$(document).ready(function(){
    $('.carousel__inner').slick({
            speed: 800, /* швидкість преключення слайду */
           /*  adaptiveHeight: true, адаптація слайдів по висоті якщо різні розміри картинок */
            /* autoplay: true, авто переключення сладів  */
            /* autoplaySpeed: 2000 ,  довжина паузи між переключеннями  */
            prevArrow: '<button type="button" class="slick-prev"> <img src="icon/chevron-left-solid.png"></button>',
            nextArrow: '<button type="button" class="slick-next"> <img src="icon/chevron-right-solid.png"> </button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                      dots: true,
                      arrows: false,
                }
            }
        ]
    });

    $('ul.catolog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass
          ('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
});