$(document).ready(function(){
    $('.offer__content').slick({
      autoplay : true,
      dots : true,
      arrows : false,
      autoplaySpeed : 5000,
      fade : true
    });

    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
      });
      $(window).scroll(function() {     
        if ($(window).scrollTop() > 300) {
           $('.scroll').addClass('show');
         } else {
            $('.scroll').removeClass('show');
         }
       });
       $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '2000');
      });
      $('.call').on('click', function(){
          $('.modal').addClass('active');
      })
  });

  var rellax = new Rellax('.rellax');

  $(function(){

    $('.service').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.trigger').offset().top }, 1000);
      e.preventDefault();
    });
    $('.faq').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('.interest').offset().top }, 1000);
        e.preventDefault();
      });
      $('.cont').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('.contact').offset().top }, 1000);
        e.preventDefault();
      });
      $('.ar').click(function () {
        $(this).toggleClass('active').next().slideToggle();
    })
    $('.overlay').on('click', function(){
        $('.modal').removeClass('active');
    })
    $('.modal__close').on('click', function(){
        $('.modal').removeClass('active');
    })
    });

    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #777 }";
        document.body.appendChild(css);
      };