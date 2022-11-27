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
    /* цей кусок кода для табі на сторінці */
     $('ul.catolog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass
          ('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    /* щоб зявлялось модальневікно при кліці на кнопку */
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    /* щоб закривалось вікно при кліці на іконку Х */
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    /* щоб зявлялось модальне вікно купити годиник та змінювалась назва товара*/

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); /* це для назви товара */
            $('.overlay, #order').fadeIn('slow');
        })
    });

    /* щоб перевіряло чи всі поля заповнені і показує що потрібно */
    function validateForms(form){
        $(form).validate({
            rules:{
                name:"required",
                phone:"required",
                email: { /* це щоб перевіряло яи правильно ведений емаіл */
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Будь ласка введіть своє імя",
                phone: "Будь ласка введіть свій номер телефону",
                email: {
                    required: "Будь ласка введіть свою пошту",
                    email: "Невірний формат пошти name@email.com"
                }
            }
        });
    };
    
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

});