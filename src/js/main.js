$(document).ready(function () {
  $('.offer__content').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 5000,
    fade: true,
  });

  $('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (
          !$svg.attr('viewBox') &&
          $svg.attr('height') &&
          $svg.attr('width')
        ) {
          $svg.attr(
            'viewBox',
            '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width')
          );
        }
        $img.replaceWith($svg);
      },
      'xml'
    );
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.scroll').addClass('show');
    } else {
      $('.scroll').removeClass('show');
    }
  });
  $('.scroll').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '2000');
  });
  $('.call').on('click', function () {
    $('.modal').addClass('active');
  });
});

$(function () {
  $('.service').on('click', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $('.trigger').offset().top }, 1000);
    e.preventDefault();
  });
  $('.faq').on('click', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $('.interest').offset().top }, 1000);
    e.preventDefault();
  });
  $('.cont').on('click', function (e) {
    $('html,body')
      .stop()
      .animate({ scrollTop: $('.contact').offset().top }, 1000);
    e.preventDefault();
  });
  $('.fa').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('fa-chevron-down fa-chevron-up');
  });

  $('.overlay').on('click', function () {
    $('.modal').removeClass('active');
  });
  $('.modal__close').on('click', function () {
    $('.modal').removeClass('active');
  });
});
