$(function () {

  $('.header__link').on('click', function () {
    $(this).addClass("header__link--active");
    $(".header__link").not(this).removeClass("header__link--active");
  });

  $('.category__button').on('click', function () {
    $(this).addClass("category__button--active");
    $(".category__button").not(this).removeClass("category__button--active");
  });

  var mixer = mixitup('.cards');


});

$(document).ready(function () {
  $('.reviews__items').slick({
    dots: true,
    infinite: true,
    focusOnChange: true,
    accessibility: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="restaurant__slider-icon"><use xlink: href="images/sprite.svg#arrow-prev"></use></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="restaurant__slider-icon"><use xlink: href="images/sprite.svg#arrow-next"></use></svg ></button >'

  });

  $('.slick-dots button').attr('tabindex', 0)

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    onChange: function (data) {
      $('.catalog__price-from').text(data.from);
      $('.catalog__price-to').text(data.to);
    },

  });

});
