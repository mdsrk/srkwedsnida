;(function (_0x6826d1) {
    'use strict'
    _0x6826d1('.select').niceSelect()
    function _0x8ee916() {
      var _0x181d01 = _0x6826d1('.navigation-holder'),
        _0x42f562 = _0x6826d1('.mobail-menu .open-btn'),
        _0x6e943b = _0x6826d1('.mobail-menu .navbar-toggler')
      _0x42f562.on('click', function (_0x5409a4) {
        return (
          _0x5409a4.stopImmediatePropagation(),
          _0x181d01.toggleClass('slideInn'),
          _0x6e943b.toggleClass('x-close'),
          false
        )
      })
    }
    _0x8ee916()
    function _0x5bc0cf() {
      var _0x27f574 = window.innerWidth,
        _0x297136 = _0x6826d1('#navbar > ul')
      _0x27f574 <= 991
        ? _0x297136.addClass('small-nav')
        : _0x297136.removeClass('small-nav')
    }
    _0x5bc0cf()
    function _0x303872() {
      var _0x4e9510 = window.innerWidth,
        _0x17f686 = _0x6826d1('.navigation-holder'),
        _0x44be83 = _0x6826d1('.navigation-holder > .small-nav'),
        _0x49a64e = _0x44be83.find('.sub-menu'),
        _0x96a7fb = _0x44be83.find('.mega-menu'),
        _0x3eabb8 = _0x44be83.find('.menu-item-has-children > a')
      if (_0x4e9510 <= 991) {
        _0x49a64e.hide()
        _0x96a7fb.hide()
        _0x3eabb8.on('click', function (_0x2a66c1) {
          var _0x59bb39 = _0x6826d1(this)
          _0x59bb39.siblings().slideToggle()
          _0x2a66c1.preventDefault()
          _0x2a66c1.stopImmediatePropagation()
          _0x59bb39.toggleClass('rotate')
        })
      } else {
        _0x4e9510 > 991 &&
          (_0x17f686.find('.sub-menu').show(),
          _0x17f686.find('.mega-menu').show())
      }
    }
    _0x303872()
    function _0x254361(_0x4e98a9) {
      var _0x1e723b = _0x6826d1(window).scrollTop(),
        _0x2f9c43 = _0x6826d1(window).height(),
        _0x459026 = _0x6826d1(document).height(),
        _0xa766d5 = _0x1e723b + 2,
        _0xc4f31c = _0x6826d1('section'),
        _0x46efbf = _0x4e98a9,
        _0x5167a1 = _0x46efbf.outerHeight()
      _0xc4f31c.each(function () {
        var _0x1665e9 = _0x6826d1(this).offset().top - _0x5167a1,
          _0x5d67b5 = _0x1665e9 + _0x6826d1(this).outerHeight()
        if (_0xa766d5 >= _0x1665e9 && _0xa766d5 <= _0x5d67b5) {
          _0x46efbf
            .find('> ul > li > a')
            .parent()
            .removeClass('current-menu-item')
          _0x46efbf
            .find("a[href='#" + _0x6826d1(this).attr('id') + "']")
            .parent()
            .addClass('current-menu-item')
        } else {
          _0xa766d5 === 2 &&
            _0x46efbf
              .find('> ul > li > a')
              .parent()
              .removeClass('current-menu-item')
        }
      })
    }
    function _0x4db3aa(_0x18a752, _0x1f4932) {
      var _0x5190f6 = _0x18a752,
        _0x212ad0 = _0x1f4932
      _0x5190f6.on('click', function () {
        if (
          location.pathname.replace(/^\//, '') ===
            this.pathname.replace(/^\//, '') &&
          location.hostname === this.hostname
        ) {
          var _0x2d9862 = _0x6826d1(this.hash)
          _0x2d9862 = _0x2d9862.length
            ? _0x2d9862
            : _0x6826d1('[name=' + this.hash.slice(1) + ']')
          if (_0x2d9862.length) {
            return (
              _0x6826d1('html, body').animate(
                { scrollTop: _0x2d9862.offset().top - _0x212ad0 },
                1000,
                'easeInOutExpo'
              ),
              false
            )
          }
        }
        return false
      })
    }
    _0x6826d1('body').on('click', function () {
      _0x6826d1('.navigation-holder').removeClass('slideInn')
    })
    _0x6826d1('.menu-close').on('click', function () {
      _0x6826d1('.navigation-holder').removeClass('slideInn')
    })
    _0x6826d1('.menu-close').on('click', function () {
      _0x6826d1('.open-btn').removeClass('x-close')
    })
    _0x6826d1('#toggle1').on('click', function () {
      _0x6826d1('.create-account').slideToggle()
      _0x6826d1('.caupon-wrap.s1').toggleClass('active-border')
    })
    _0x6826d1('#toggle2').on('click', function () {
      _0x6826d1('#open2').slideToggle()
      _0x6826d1('.caupon-wrap.s2').toggleClass('coupon-2')
    })
    _0x6826d1('#toggle3').on('click', function () {
      _0x6826d1('#open3').slideToggle()
      _0x6826d1('.caupon-wrap.s2').toggleClass('coupon-2')
    })
    _0x6826d1('#toggle4').on('click', function () {
      _0x6826d1('#open4').slideToggle()
      _0x6826d1('.caupon-wrap.s3').toggleClass('coupon-2')
    })
    _0x6826d1('.payment-select .addToggle').on('click', function () {
      _0x6826d1('.payment-name').addClass('active')
      _0x6826d1('.payment-option').removeClass('active')
    })
    _0x6826d1('.payment-select .removeToggle').on('click', function () {
      _0x6826d1('.payment-option').addClass('active')
      _0x6826d1('.payment-name').removeClass('active')
    })
    _0x6826d1(function () {
      _0x6826d1('#datepicker').datepicker()
    })
    if (_0x6826d1('#scene').length) {
      var _0x12cf6d = document.getElementById('scene'),
        _0x53cd26 = new Parallax(_0x12cf6d)
    }
    if (_0x6826d1('#scene-2').length) {
      var _0x12cf6d = document.getElementById('scene-2'),
        _0x53cd26 = new Parallax(_0x12cf6d)
    }
    function _0x155100() {
      _0x6826d1('.pointparallax').length &&
        _0x6826d1('.pointparallax').pointparallax()
    }
    _0x155100()
    var _0x26f81c = _0x6826d1('.moreload'),
      _0xea34ac = _0x6826d1('.loadmore-btn'),
      _0x160090 = _0x26f81c.length
    _0x26f81c.hide()
    _0x160090 > 8 && _0xea34ac.show()
    _0x26f81c.slice(0, 8).show()
    _0xea34ac.on('click', function () {
      var _0x5d7b66 = _0x26f81c.filter(':visible').length
      _0x26f81c.slice(_0x5d7b66 - 1, _0x5d7b66 + 8).fadeIn()
      var _0xf8b457 = _0x26f81c.filter(':visible').length
      _0xf8b457 >= _0x160090 && _0xea34ac.hide()
    })
    var _0x2cb976 = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      ),
      _0x11e527 = _0x2cb976.map(function (_0x3e8078) {
        return new bootstrap.Tooltip(_0x3e8078)
      })
    function _0x2cc451() {
      _0x6826d1('.parallax').length &&
        _0x6826d1('.parallax').each(function () {
          var _0x1fb1ae = _0x6826d1(this).position().top,
            _0x1c25f5 = _0x1fb1ae - _0x6826d1(window).scrollTop(),
            _0xa7fef2 = -(_0x1c25f5 / 5),
            _0x51bd52 = _0xa7fef2 + 'px',
            _0x5781b5 = _0x6826d1(this).data('bg-image')
          _0x6826d1(this).css({
            backgroundImage: 'url(' + _0x5781b5 + ')',
            backgroundPosition: '50%' + _0x51bd52,
            backgroundSize: 'cover',
          })
        })
    }
    var _0x5d0445 = []
    jQuery('.swiper-slide').each(function (_0x111354) {
      _0x5d0445.push(jQuery(this).find('.slide-inner').attr('data-text'))
    })
    var _0x5396c4 = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (_0x1d0a6a, _0x5c98de) {
            return (
              '<span class="' + _0x5c98de + '">' + (_0x1d0a6a + 1) + '</span>'
            )
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          progress: function () {
            var _0x7c3c37 = this
            for (
              var _0x6add7e = 0;
              _0x6add7e < _0x7c3c37.slides.length;
              _0x6add7e++
            ) {
              var _0x29ea8b = _0x7c3c37.slides[_0x6add7e].progress,
                _0x90423d = _0x7c3c37.width * 0.5,
                _0x12a41d = _0x29ea8b * _0x90423d
              _0x7c3c37.slides[_0x6add7e].querySelector(
                '.slide-inner'
              ).style.transform = 'translate3d(' + _0x12a41d + 'px, 0, 0)'
            }
          },
          touchStart: function () {
            var _0x800602 = this
            for (
              var _0x4e5b09 = 0;
              _0x4e5b09 < _0x800602.slides.length;
              _0x4e5b09++
            ) {
              _0x800602.slides[_0x4e5b09].style.transition = ''
            }
          },
          setTransition: function (_0x1dcdd2) {
            var _0x2148c8 = this
            for (
              var _0x77691e = 0;
              _0x77691e < _0x2148c8.slides.length;
              _0x77691e++
            ) {
              _0x2148c8.slides[_0x77691e].style.transition = _0x1dcdd2 + 'ms'
              _0x2148c8.slides[_0x77691e].querySelector(
                '.slide-inner'
              ).style.transition = _0x1dcdd2 + 'ms'
            }
          },
        },
      },
      _0x5b9e32 = new Swiper('.swiper-container', _0x5396c4),
      _0x2c4287 = _0x6826d1('.slide-bg-image')
    _0x2c4287.each(function (_0x5bfe14) {
      _0x6826d1(this).attr('data-background') &&
        _0x6826d1(this).css(
          'background-image',
          'url(' + _0x6826d1(this).data('background') + ')'
        )
    })
    function _0x5b2e50() {
      _0x6826d1('.preloader').length &&
        _0x6826d1('.preloader')
          .delay(100)
          .fadeOut(500, function () {
            _0x4eb317.init()
          })
    }
    var _0x4eb317 = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    })
    _0x6826d1('.fancybox').length &&
      _0x6826d1('.fancybox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        wrapCSS: 'project-fancybox-title-style',
      })
    _0x6826d1('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    })
    _0x6826d1('.video-btn').length &&
      _0x6826d1('.video-btn').on('click', function () {
        return (
          _0x6826d1.fancybox({
            href: this.href,
            aspectRatio: true,
            type: _0x6826d1(this).data('type'),
            title: this.title,
            helpers: {
              title: { type: 'inside' },
              media: {},
            },
            beforeShow: function () {
              _0x6826d1('.fancybox-wrap').addClass('gallery-fancybox')
            },
          }),
          false
        )
      })
    _0x6826d1('.popup-gallery').length &&
      _0x6826d1('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true },
        zoom: {
          enabled: true,
          duration: 300,
          easing: 'ease-in-out',
          opener: function (_0x45e402) {
            return _0x45e402.is('img') ? _0x45e402 : _0x45e402.find('img')
          },
        },
      })
    function _0x2eab9c() {
      if (_0x6826d1('.sortable-gallery .gallery-filters').length) {
        var _0x4d42fc = _0x6826d1('.gallery-container')
        _0x4d42fc.isotope({
          filter: '*',
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        })
        _0x6826d1('.gallery-filters li a').on('click', function () {
          _0x6826d1('.gallery-filters li .current').removeClass('current')
          _0x6826d1(this).addClass('current')
          var _0x10e120 = _0x6826d1(this).attr('data-filter')
          return (
            _0x4d42fc.isotope({
              filter: _0x10e120,
              animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
              },
            }),
            false
          )
        })
      }
    }
    _0x2eab9c()
    function _0x78e8a4() {
      if (_0x6826d1('.masonry-gallery').length) {
        var _0xc98e7 = _0x6826d1('.masonry-gallery').masonry({
          itemSelector: '.grid-item',
          columnWidth: '.grid-item',
          percentPosition: true,
        })
        _0xc98e7.imagesLoaded().progress(function () {
          _0xc98e7.masonry('layout')
        })
      }
    }
    _0x6826d1('.odometer').length &&
      (_0x6826d1('.odometer').appear(),
      _0x6826d1(document.body).on('appear', '.odometer', function (_0x4e21f7) {
        var _0x361dd2 = _0x6826d1('.odometer')
        _0x361dd2.each(function () {
          var _0xd0ede0 = _0x6826d1(this).attr('data-count')
          _0x6826d1(this).html(_0xd0ede0)
        })
      }))
    function _0x5c8e12(_0x91414a, _0x27e173) {
      _0x91414a
        .addClass('original')
        .clone()
        .insertAfter(_0x91414a)
        .addClass(_0x27e173)
        .removeClass('original')
    }
    _0x6826d1('.wpo-site-header .navigation').length &&
      _0x5c8e12(_0x6826d1('.wpo-site-header .navigation'), 'sticky-header')
    var _0x30f5ab = ''
    function _0x490f3f(_0x48d1c9, _0x59b5ec, _0x3b2b8e) {
      var _0x41b66f = _0x6826d1(window).scrollTop(),
        _0x4387fe = _0x6826d1('.wpo-site-header .navigation')
      _0x6826d1(window).scrollTop() > 500
        ? _0x41b66f > _0x30f5ab
          ? _0x48d1c9.addClass(_0x59b5ec)
          : _0x48d1c9.addClass(_0x59b5ec)
        : _0x48d1c9.removeClass(_0x59b5ec)
      _0x30f5ab = _0x41b66f
    }
    if (_0x6826d1('.header-search-form-wrapper').length) {
      var _0x5d140c = _0x6826d1('.search-toggle-btn'),
        _0xab0624 = _0x6826d1('.search-toggle-btn i'),
        _0x2548c3 = _0x6826d1('.header-search-form'),
        _0x59090f = _0x6826d1('body')
      _0x5d140c.on('click', function (_0x1af2f2) {
        _0x2548c3.toggleClass('header-search-content-toggle')
        _0xab0624.toggleClass('fi flaticon-search fi ti-close')
        _0x1af2f2.stopPropagation()
      })
      _0x59090f
        .on('click', function () {
          _0x2548c3.removeClass('header-search-content-toggle')
        })
        .find(_0x2548c3)
        .on('click', function (_0x39cb09) {
          _0x39cb09.stopPropagation()
        })
    }
    if (_0x6826d1('.mini-cart').length) {
      var _0x3f8523 = _0x6826d1('.cart-toggle-btn'),
        _0x178bfd = _0x6826d1('.mini-cart-content'),
        _0x4587ec = _0x6826d1('.mini-cart-close'),
        _0x59090f = _0x6826d1('body')
      _0x3f8523.on('click', function (_0x26212d) {
        _0x178bfd.toggleClass('mini-cart-content-toggle')
        _0x26212d.stopPropagation()
      })
      _0x4587ec.on('click', function (_0x250afa) {
        _0x178bfd.removeClass('mini-cart-content-toggle')
        _0x250afa.stopPropagation()
      })
      _0x59090f
        .on('click', function () {
          _0x178bfd.removeClass('mini-cart-content-toggle')
        })
        .find(_0x178bfd)
        .on('click', function (_0xfe08d2) {
          _0xfe08d2.stopPropagation()
        })
    }
    _0x6826d1('.portfolio-slide').length &&
      _0x6826d1('.portfolio-slide').owlCarousel({
        autoplay: true,
        smartSpeed: 300,
        margin: 0,
        loop: false,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [
          '<i class="fi flaticon-left-arrow"></i>',
          '<i class="fi flaticon-right-arrow-1"></i>',
        ],
        items: 5,
        responsive: {
          0: {
            items: 1,
            dots: true,
          },
          767: { items: 2 },
          1200: { items: 3 },
          1300: { items: 4 },
          1400: { items: 4 },
          1500: { items: 5 },
        },
      })
    _0x6826d1('.wpo-testimonial-wrap').length &&
      (_0x6826d1('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        dots: false,
        responsive: [
          {
            breakpoint: 991,
            settings: { dots: false },
          },
        ],
      }),
      _0x6826d1('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 991,
            settings: { dots: true },
          },
        ],
      }))
    _0x6826d1('.wpo-testimonial-wrap').length &&
      _0x6826d1('.wpo-testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: true,
      })
    _0x6826d1('.wpo-testimonial-wrap-s2').length &&
      _0x6826d1('.wpo-testimonial-active-s2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: true,
      })
    _0x6826d1('.wpo-portfolio-section-s4').length &&
      _0x6826d1('.gallery-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        loop: false,
        autoplay: false,
      })
    _0x6826d1('.wpo-portfolio-section-s4').length &&
      _0x6826d1('.gallery-slide2').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        loop: false,
        autoplay: false,
      })
    _0x6826d1('.static-hero-s6').length &&
      (_0x6826d1('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        dots: false,
      }),
      _0x6826d1('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
        fade: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
      }))
    _0x6826d1('.wpo-service-slider').length &&
      _0x6826d1('.wpo-service-slider').owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 20,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [
          '<i class="fi flaticon-left-arrow"></i>',
          '<i class="fi flaticon-right-arrow-1"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            dots: true,
            nav: false,
          },
          500: {
            items: 1,
            dots: true,
            nav: false,
          },
          768: {
            items: 2,
            dots: false,
          },
          1200: { items: 3 },
          1400: { items: 3 },
        },
      })
    _0x6826d1('.partners-slider').length &&
      _0x6826d1('.partners-slider').owlCarousel({
        autoplay: true,
        smartSpeed: 300,
        margin: 0,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        arrows: false,
        nav: false,
        responsive: {
          0: { items: 2 },
          550: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 },
        },
      })
    _0x6826d1('.hero-items').length &&
      _0x6826d1('.hero-items').owlCarousel({
        autoplay: true,
        smartSpeed: 400,
        margin: 30,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        arrows: false,
        nav: true,
        center: true,
        navText: [
          '<i class="fi flaticon-left-arrow"></i>',
          '<i class="fi flaticon-right-arrow-1"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            margin: 10,
          },
          450: {
            items: 1,
            margin: 10,
          },
          575: {
            items: 2,
            center: false,
            margin: 20,
          },
          767: {
            items: 2,
            center: false,
          },
          992: { items: 3 },
          1200: { items: 3 },
        },
      })
    _0x6826d1('.post-slider'.length) &&
      _0x6826d1('.post-slider').owlCarousel({
        mouseDrag: false,
        smartSpeed: 500,
        margin: 30,
        loop: true,
        nav: true,
        navText: [
          '<i class="fi ti-arrow-left"></i>',
          '<i class="fi ti-arrow-right"></i>',
        ],
        dots: false,
        items: 1,
      })
    _0x6826d1('.shop-single-slider').length &&
      (_0x6826d1('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
      }),
      _0x6826d1('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 5,
              infinite: true,
            },
          },
          {
            breakpoint: 400,
            settings: { slidesToShow: 5 },
          },
        ],
      }))
    _0x6826d1("input[name='product-count']").length &&
      _0x6826d1("input[name='product-count']").TouchSpin({
        verticalbuttons: true,
      })
    _0x6826d1('#slider-range').length &&
      (_0x6826d1('#slider-range').slider({
        range: true,
        min: 12,
        max: 200,
        values: [0, 100],
        slide: function (_0x12153c, _0x1a9ee1) {
          _0x6826d1('#amount').val(
            '$' + _0x1a9ee1.values[0] + ' - $' + _0x1a9ee1.values[1]
          )
        },
      }),
      _0x6826d1('#amount').val(
        '$' +
          _0x6826d1('#slider-range').slider('values', 0) +
          ' - $' +
          _0x6826d1('#slider-range').slider('values', 1)
      ))
    _0x6826d1('.cart-plus-minus').append(
      '<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>'
    )
    _0x6826d1('.qtybutton').on('click', function () {
      var _0x47b82a = _0x6826d1(this),
        _0x4c1e21 = _0x47b82a.parent().find('input').val()
      if (_0x47b82a.text() == '+') {
        var _0x41cf37 = parseFloat(_0x4c1e21) + 1
      } else {
        if (_0x4c1e21 > 0) {
          var _0x41cf37 = parseFloat(_0x4c1e21) - 1
        } else {
          _0x41cf37 = 0
        }
      }
      _0x47b82a.parent().find('input').val(_0x41cf37)
    })
    _0x6826d1('body').append(
      "<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>"
    )
    function _0x28dea8() {
      _0x6826d1(window).scrollTop() > 1000
        ? _0x6826d1('a.back-to-top').fadeIn('slow')
        : _0x6826d1('a.back-to-top').fadeOut('slow')
    }
    _0x6826d1('.back-to-top').on('click', function () {
      return _0x6826d1('html,body').animate({ scrollTop: 0 }, 700), false
    })
    _0x6826d1('#clock').length &&
      _0x6826d1('#clock').countdown('2024-06-27 12:30:00', function (_0x28e919) {
        var _0x5252aa = _0x6826d1(this).html(
          _0x28e919.strftime(
            '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div><div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div><div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div><div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'
          )
        )
      })
    _0x6826d1('#clock2').length &&
      _0x6826d1('#clock2').countdown('2024-11-17 12:30:00', function (_0x4a7874) {
        var _0x5563a5 = _0x6826d1(this).html(
          _0x4a7874.strftime(
            '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div><div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div><div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div><div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'
          )
        )
      })
    _0x6826d1('#clock3').length &&
      _0x6826d1('#clock3').countdown('2024-11-17 12:30:00', function (_0x5218c4) {
        var _0x3e8ab4 = _0x6826d1(this).html(
          _0x5218c4.strftime(
            '<div class="box"><div><div class="time">%D</div> <span>أيام</span> </div></div><div class="box"><div><div class="time">%H</div> <span>ساعات</span> </div></div><div class="box"><div><div class="time">%M</div> <span>دقيقة</span> </div></div><div class="box"><div><div class="time">%S</div> <span>ثانية</span> </div></div>'
          )
        )
      })
    _0x6826d1('#contact-form-main').length &&
      _0x6826d1('#contact-form-main').validate({
        rules: {
          name: {
            required: true,
            minlength: 2,
          },
          email: 'required',
          phone: 'required',
          adress: 'required',
          guest: 'required',
          meal: 'required',
          date: 'required',
          what: 'required',
          service: 'required',
        },
        messages: {
          name: 'Please enter your name',
          email: 'Please enter your email address',
          phone: 'Please enter your phone number',
          adress: 'Please enter your adress',
          guest: 'Please select your guest Number',
          meal: 'Please select your Meal Name',
          date: 'Please select your Date',
          what: 'Please select your Reason',
          service: 'Please select your Service',
        },
        submitHandler: function (_0x167d31) {
          return (
            _0x6826d1.ajax({
              type: 'POST',
              url: 'mail-contact.php',
              data: _0x6826d1(_0x167d31).serialize(),
              success: function () {
                _0x6826d1('#loader').hide()
                _0x6826d1('#success').slideDown('slow')
                setTimeout(function () {
                  _0x6826d1('#success').slideUp('slow')
                }, 3000)
                _0x167d31.reset()
              },
              error: function () {
                _0x6826d1('#loader').hide()
                _0x6826d1('#error').slideDown('slow')
                setTimeout(function () {
                  _0x6826d1('#error').slideUp('slow')
                }, 3000)
              },
            }),
            false
          )
        },
      })
    _0x6826d1(window).on('load', function () {
      _0x5b2e50()
      _0x2eab9c()
      _0x8ee916()
      _0x303872()
      _0x155100()
      _0x4db3aa(
        _0x6826d1("#navbar > ul > li > a[href^='#'], a.scrool[href^='#'] "),
        _0x6826d1('.wpo-site-header .navigation, .site-header .nav').innerHeight()
      )
    })
    _0x6826d1(window).on('scroll', function () {
      _0x28dea8()
      _0x254361(_0x6826d1('.navigation-holder'))
      _0x6826d1('.wpo-site-header').length &&
        _0x490f3f(_0x6826d1('.wpo-site-header .navigation'), 'sticky-on')
    })
    _0x6826d1(window).on('resize', function () {
      _0x5bc0cf()
      clearTimeout(_0x6826d1.data(this, 'resizeTimer'))
      _0x6826d1.data(
        this,
        'resizeTimer',
        setTimeout(function () {
          _0x303872()
        }, 200)
      )
    })
    _0x6826d1('.reveal6').on('click', function () {
      var _0x512f6e = _0x6826d1('.pwd6')
      _0x512f6e.attr('type') === 'text'
        ? _0x512f6e.attr('type', 'password')
        : _0x512f6e.attr('type', 'text')
    })
    _0x6826d1('.reveal3').on('click', function () {
      var _0x1ff444 = _0x6826d1('.pwd2')
      _0x1ff444.attr('type') === 'text'
        ? _0x1ff444.attr('type', 'password')
        : _0x1ff444.attr('type', 'text')
    })
    _0x6826d1('.reveal2').on('click', function () {
      var _0x13520a = _0x6826d1('.pwd3')
      _0x13520a.attr('type') === 'text'
        ? _0x13520a.attr('type', 'password')
        : _0x13520a.attr('type', 'text')
    })
  })(window.jQuery)
  