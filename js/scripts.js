;(function($){
  $(document).ready(function(){
    "use strict";
        /*
        |---------------------------------------------
        | Preloader
        |---------------------------------------------
        */
        if($('#preloader').length > 0){
            $(window).on('load', function () {
              $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
              $('body').delay(1000).css({ 'overflow': 'visible' });
            });
        }


        /* -------------------------------------------------------------
            Menu
        ------------------------------------------------------------- */
        $( "#superMenu" ).superMegaMenu();



        /* -------------------------------------------------------------
            Inner linking
        ------------------------------------------------------------- */
        if ($('.intro-select a[href^="#"]').length){
            $('.intro-select a[href^="#"]').not("#scrollUp").on('click',function (e) {
                e.preventDefault();
                var target = this.hash;
                var $target = $(target);
                $('html, body').stop().animate({
                     'scrollTop': $target.offset().top
                }, 900, 'swing');
            });
        }

        /*
        |---------------------------------------------
        | counter-up
        |---------------------------------------------
        */
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
            
        /*
        |---------------------------------------------
        | owl-carouse
        |---------------------------------------------
        */
        $('.client-carousel').owlCarousel({
            loop:true,
            autoplay: true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })  

        /*
        |---------------------------------------------
        | owl-carouse
        |---------------------------------------------
        */
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:10,
            items:3,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })  

        /*
        |---------------------------------------------
        | owl-carouse
        |---------------------------------------------
        */
        /* Owl Carousel */
        $('.screenshot-carousel').owlCarousel({
          center: true,
            loop:true,
            margin:0,
            nav:false,
            items: 5,
            smartSpeed: 750,
            responsive : {
              0 : {
                items: 1
              },
              413 : {
                items: 3
              },
              768 : {
                items: 3
              },
              992 : {
                items: 5
              }
          }

        });



        /*
        |---------------------------------------------
        | wow-js
        |---------------------------------------------
        */
        new WOW().init();
        $('.nav.nav-pills .nav-link').on('click', function(){
           $('.tab-content .wow').addClass('animated');
           $('.tab-content .wow').attr('style', 'visibility: visible; animation-name: fadeInUp;');
        });

        /*
        |---------------------------------------------
        | nav-js
        |---------------------------------------------
        */
        $('.intro-select').onePageNav({
            scrollThreshold: 0.2,
            scrollOffset: 130 
        });

        /* -------------------------------------------------------------
            swiper-slider
        ------------------------------------------------------------- */            
        var swiper = new Swiper('.swiper-container', {
            mode:'horizontal',
            loop: true,
            speed: 950,
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          nextButton: '.arrow-right',
          prevButton: '.arrow-left',
          coverflowEffect: {
            rotate: -10,
              stretch: 110,
              depth: 120,
              modifier: 1,
            slideShadows : false,
          },
          pagination: {
            el: '.swiper-pagination',
          },
          // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });

        // /* -------------------------------------------------------------
        //     swiper-slider
        // ------------------------------------------------------------- */            
        // var swiper = new Swiper('.swiper-screenshot', {
        //     mode:'horizontal',
        //     loop: true,
        //     speed: 950,
        //   effect: 'coverflow',
        //   grabCursor: true,
        //   centeredSlides: true,
        //   slidesPerView: 'auto',
        //   nextButton: '.arrow-right',
        //   prevButton: '.arrow-left',
        //   coverflowEffect: {
        //     rotate: -10,
        //       stretch: 110,
        //       depth: 120,
        //       modifier: 1,
        //     slideShadows : false,
        //   },
        //   pagination: {
        //     el: '.swiper-pagination',
        //   },
        //   // Navigation arrows
        //     navigation: {
        //       nextEl: '.swiper-button-next',
        //       prevEl: '.swiper-button-prev',
        //     },
        // });

        /* -------------------------------------------------------------
            MAGNIFIC JS
        ------------------------------------------------------------- */
        $('.play-video').magnificPopup({
          type: 'iframe'
        });
        
        $.extend(true, $.magnificPopup.defaults, {
          iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/', 
                id: 'v=', 
                src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
              }
            }
          }
        });

        /*
        |----------------------------------------------------------------------------
        | Google Map
        |----------------------------------------------------------------------------
        */
        if($('#map-canvas').length > 0){
          function popup_sassage_map(){
             var map;        
              var myCenter=new google.maps.LatLng(53, -1.33);
              var marker=new google.maps.Marker({
                  position:myCenter
              });
              function initialize() {
                  var mapProp = {
                    center:myCenter,
                    zoom: 14,
                    draggable: false,
                    scrollwheel: false,
                    mapTypeId:google.maps.MapTypeId.ROADMAP
                  };

                  map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);

                   //Map Marker
                  var marker = new google.maps.Marker({
                      position:myCenter,
                      map: map,
                      icon: 'images/marker.png'
                  });

                  google.maps.event.addListener(marker, 'click', function() {
                    
                  infowindow.setContent(contentString);
                  infowindow.open(map, marker);

                  }); 
              };
              google.maps.event.addDomListener(window, 'load', initialize);
              
              $('#popupmodal').on('hidden.bs.modal', function (e) {
                //map-modal
              })
          }
          popup_sassage_map();

        }


        /*
        |----------------------------------------------------------------------------
        | Ajax Mailchimp
        |----------------------------------------------------------------------------
        */
        $(document).ready(function () {
            var $form = $('#mc-embedded-subscribe-form')
            if ($form.length > 0) {
                $('form input[type="submit"]').bind('click', function (event) {
                    if (event) event.preventDefault()
                    register($form)
                })
            }
        })

        function register($form) {
            $('#mc-embedded-subscribe').val('Sending...');
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache: false,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
                success: function (data) {
                    $('#mc-embedded-subscribe').val('subscribe')
                    if (data.result === 'success') {
                        // Yeahhhh Success
                        console.log(data.msg)
                        $('#mce-EMAIL').css('borderColor', '#ffffff')
                        $('#subscribe-result').css('color', 'rgb(53, 114, 210)')
                        $('#subscribe-result').html('<p>Thank you for subscribing. We have sent you a confirmation email.</p>')
                        $('#mce-EMAIL').val('')
                    } else {
                        // Something went wrong, do something to notify the user.
                        console.log(data.msg)
                        $('#mce-EMAIL').css('borderColor', '#ff8282')
                        $('#subscribe-result').css('color', '#ff8282')
                        $('#subscribe-result').html('<p>' + data.msg.substring(4) + '</p>')
                    }
                }
            })
        };


      /* -------------------------------------------------------------
          Scroll To Top
      ------------------------------------------------------------- */
      $.scrollUp({
          scrollText: '<i class="fa fa-angle-up"></i>',
      });

      $("#platform-nav").on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#platforms").offset().top},
            'slow');
    });
    $("#solutions-nav").on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#solutions").offset().top},
            'slow');
    });
    $("#tools-nav").on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#tools").offset().top},
            'slow');
    });
    $("#components-nav").on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#components").offset().top},
            'slow');
    });
});
 
}(jQuery));
