(function ($, window, document) {
    'use strict';
    var pluginName = "Aisconverse",
        defaults = {
            sliderFx: 'crossfade', // Slider effect. Can be 'scroll',
            // 'fade', 'crossfade', 'directscroll',
            // 'uncover', 'uncover-fade'
            sliderInterval: 6000, // Interval
            speedAnimation: 300, // Default speed of the animation
            defFx: 'easeInSine', // Default animate Fx
            countdownTo: '2015/06/01', // Change this in the format: 'YYYY/MM/DD'
            scrollTopButtonOffset: 500, // when scrollTop Button will show
            successText: 'You have successfully subscribed', // text after successful subscribing
            errorText: 'Please, enter a valid email', // text, if email is invalid
            collapseMenuWidth: 969 // Browser width, when menu
            // will collapse
        },
        $win = $(window),
        $html = $('html'),
        $htmlBody = $('html, body'),
        onMobile = false;

    // The plugin constructor
    function Plugin(element, options) {
        var that = this;
        that.element = $(element);
        that.options = $.extend({}, defaults, options);

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            onMobile = true;
            $(document.body).addClass('mobile');
        } else {
            $(document.body).addClass('no-mobile');
        }

        that.init();

        $win.appear();

        // onLoad function
        $win.load(function () {
            if (that.preloader.length) {
                that.preloader.delay(defaults.speedAnimation)
                    .fadeOut(defaults.speedAnimation);
            }

            that.activate();

        }).scroll(function () { // onScroll function
            that.scrll();
        }).resize(function () {
            that.fSize();
        }).afterResize(function () {
            that.rez();
            that.sliders('.product-slider');
            that.sliders('.related-products');
            that.sliders('.carousel');
        }, true, 320);
    }

    Plugin.prototype = {
        init: function () {
            this.body = $(document.body);
            this.preloader = $('.preloader');
            this.wrapper = $('.wrapper');
            this.header = $('.header');

            this.slider = $('.slider');
            this.fullpage = $('.fullpage');
            this.fullscreen = $('.fullscreen');
            this.gallery = $('.gallery');

            this.vmiddle = $('.middle');

            this.internalLinks = $('.internal');
            this.scrTop = $('.scrolltop');
            this.remove = $('.remove');

            this.audio = $('audio');
            this.chart = $('.chart');
            this.select = $('select');

            this.timer = $('.countdown');
            this.counting = $('.counting');
            this.countup = $('.countup');

            this.map = $('.google-map');
            this.modal = $('.modal');
            this.modalLink = $('[data-toggle=modal]');

            this.magnific = $('.magnific');
            this.magnificWrap = $('.magnific-wrap');
            this.magnificGallery = $('.magnific-gallery');
            this.magnificVideo = $('.magnific-video');
            this.masonryWrap = $('.masonry-wrap');

            this.jslider = $('.jslider');
            this.rating = $('.raty');
            this.quantity = $('.product-quantity');
            this.productRemove = $('.product-remove');
            this.catalogBar = $('.catalog-bar');

            this.navCategory = $('.nav-category');
            this.mixList = $('.mix-list');

            this.anim = $('.animate');
            this.appearwrap = $('.appear-wrap');
            this.isotopeList = $('.isotope-list');

            this.feedbackForm = $('#feedback-form');
            this.newsletter = this.feedbackForm.find('form');

            this.navFixedTop = $('.navbar-fixed-top');
            this.navbarToggle = $('.menu-toggle');
            this.dropdown = $('.dropdown');
        },
        activate: function () {
            var instance = this,
                spd = instance.options.speedAnimation;

            instance.body.children().css('opacity', 1);

            if (instance.body.hasClass('error404')) {
                $html.addClass('html404');
            }

            if (instance.audio.length > 0) {
                instance.audio.mediaelementplayer();
            }

            // Modal shift, bug for fixed header, when modal is open
            instance.modalLink.on('click', function () {
                instance.navFixedTop.css('paddingRight', instance.scrollbarWidth());
            });

            instance.modal.on('hide.bs.modal', function () {
                if ($(this).hasClass('fade')) {
                    setTimeout(function () {
                        instance.navFixedTop.removeAttr('style');
                    }, 305);
                } else {
                    instance.navFixedTop.removeAttr('style');
                }
            });

            instance.navbarToggle.on('click', function () {
                instance.body.toggleClass('overlaymenu');
                $('.navbar-menu').stop(true, true).fadeToggle(spd);
                $('.mainmenu').toggleClass('in');
            });

            $('body[data-spy]').find('.mainmenu a').on('click', function () {
                if (instance.body.hasClass('overlaymenu')){
                    instance.body.toggleClass('overlaymenu');
                    $('.navbar-menu').stop(true, true).fadeToggle(spd);
                    $('.mainmenu').toggleClass('in');
                }
            });

            if (instance.anim.length > 0) {
                instance.anim.on('appear', function () {
                    var t = $(this),
                        fx = t.data('animate');

                    t.addClass('animated ' + fx);
                }).appear();

                instance.anim.on('click', function (e) {
                    var self = $(this),
                        ani = self.data('animate');

                    if (self.hasClass('animate-toggle')) {
                        e.preventDefault();
                        self.removeClass('animated').removeClass(ani);
                    }

                    setTimeout(function () {
                        self.addClass('animated').addClass(ani);
                    }, spd / 2);
                });
            }

            if (instance.appearwrap.length > 0) {
                instance.appearwrap.find('[class*=col-]').on('appear', function () {
                    var self = $(this);

                    self.animate({
                        'opacity': 1
                    }, spd, instance.options.defFx, function () {
                        $(this).addClass('appeared');
                    });
                }).appear();
            }

            // Internal Links
            instance.internalLinks.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    url = $this.attr('href').replace('#', ''),
                    $url = $('#' + url),
                    urlTop;

                if ($url.length) {
                    urlTop = $url.offset().top - 100;
                } else {
                    urlTop = $('[name="' + url + '"]').offset().top - 100;
                }

                $htmlBody.stop(true, true).animate({
                    scrollTop: urlTop
                }, spd * 1.5, instance.options.defFx);
            });

            // Custom Select
            if (instance.select.length > 0) {
                instance.select.chosen({
                    width: '100%'
                });
            }

            // Custom input[type=range]
            if (instance.jslider.length > 0 && instance.jslider.is(':visible')) {
                instance.jslider.slider({
                    from: 0,
                    to: 1000,
                    step: 1,
                    limits: false,
                    scale: [0, 1000],
                    dimension: "$&nbsp;",
                    onstatechange: function (value) {
                        var val = value.split(';'),
                            val1 = val[0],
                            val2 = val[1],
                            priceLabel = $('.price-label'),
                            from = priceLabel.find('.from'),
                            to = priceLabel.find('.to');

                        from.text('$ ' + val1);
                        to.text('$ ' + val2);
                    }
                });
            }

            // Third level bootstrap menu
            $('.dropdown-menu.sub-menu > li.dropdown > a').on('click', function (e) {
                var self = $(this),
                    current = self.next(),
                    grandparent = self.parent().parent();

                grandparent.find(".dropdown-menu:visible").not(current).slideUp(spd);
                grandparent.find(".sub-menu:visible").not(current).hide();
                current.slideToggle(spd);

                e.stopPropagation();
                e.preventDefault();
            });

            $('.dropdown-menu:not(.sub-menu) > li > a').on('click', function () {
                var root = $(this).closest('.dropdown');

                root.find('.sub-menu:visible').slideUp(spd);
            });

            instance.dropdown.on('show.bs.dropdown', function () {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown(spd);
            });

            instance.dropdown.on('hide.bs.dropdown', function () {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp(spd);
            });

            // Product Incrementers
            instance.quantity.find('a').on('click', function (e) {
                e.preventDefault();

                var el = $(this),
                    inpt = el.parent().find('input'),
                    oldValue = inpt.val(),
                    newVal;

                if (el.hasClass('plus')) {
                    newVal = parseFloat(oldValue) + 1;
                } else if (el.hasClass('minus')) {
                    newVal = (oldValue > 1) ? parseFloat(oldValue) - 1 : 1;
                }

                inpt.val(newVal);
            });

            // scrollTop function
            instance.scrTop.on('click', function (e) {
                e.preventDefault();
                $('html, body').stop(true, true).animate({
                    scrollTop: 0
                }, spd, instance.options.defFx);
            });

            if (instance.navCategory.length > 0) {
                var hsh = window.location.hash.replace('#', '.'),
                    hshArray = [],
                    navIndx,
                    navEq;

                if (!onMobile) {
                    instance.navCategory.lavalamp({
                        duration: spd
                    });
                }

                instance.navCategory.find('a').each(function () {
                    var self = $(this),
                        atr = self.attr('href').replace('#', '.');

                    hshArray.push(atr);
                });

                navIndx = hshArray.indexOf(hsh.replace('#', '.'));

                if (navIndx < 0) {
                    navIndx = 0;
                }

                navEq = instance.navCategory.children('.lavalamp-item').eq(navIndx);
                if (!onMobile) {
                    instance.navCategory.data('active', navEq).lavalamp('update');
                }
                instance.navCategory.children().eq(navEq.index()).addClass('selected').siblings().removeClass('selected');

                if (hsh == '.all' || hshArray.indexOf(hsh) < 0) {
                    hsh = '*';
                }

                if (instance.mixList.length > 0) {
                    instance.mixList.mixItUp({
                        load: {
                            filter: hsh !== '' ? hsh : '*'
                        }
                    });
                }

                instance.navCategory.find('a').on('click', function () {
                    var self = $(this),
                        fltr = self.data('filter');

                    if (instance.isotopeList.length > 0) {
                        instance.isotopeList.isotope({
                            filter: fltr
                        });
                    }

                });
            }

            $('.noty-success .close').on('click', function () {
                $(this).parent().fadeOut(spd, function () {
                    $(this).removeClass('scale');
                });
            });

            instance.productRemove.find('a').on('click', function (e) {
                e.preventDefault();
                var $this = $(this);

                $this.parents('tr').fadeOut(spd, function () {
                    $(this).remove();
                });
            });

            $('.product-info').on('click', function (e) {
                e.stopPropagation();
            }).find('.btn').on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();

                // Add To Cart action goes here!
            });

            $('.single-product-page-cart-form select').on('change', function () {
                $('.collapse-group').slideDown(spd);
            });

            $('.collapse-group .reset').on('click', function (e) {
                e.preventDefault();

                $(this).parents('.collapse-group').slideUp(spd);
                $('.single-product-page-cart-form select').val('').trigger("chosen:updated");
            });

            // Demo Validation
            $('.btn-validation').on('click', function (e) {
                var self = $(this),
                    form = self.parents('form');

                form.find('input, textarea').each(function () {
                    var $this = $(this);

                    if ($this.val() === '') {
                        $this.parent().addClass('has-error');
                    } else {
                        $this.parent().removeClass('has-error');
                    }
                });

                if (form.find('.has-error').length > 0) {
                    e.preventDefault();
                }
            });

            $(document).on('keydown focusin', '.has-error > *', function () {
                if ($(this).parents('form').find('.btn-validation').length) {
                    $(this).parent().removeClass('has-error');
                }
            });

            instance.masonryMix();
            instance.isotopeMix();
            instance.countDown();
            instance.ratings();
            instance.contactMap();
            instance.magnificPopup();
            instance.sendForm();
            instance.feedForm();

            setTimeout(function () {
                instance.scrll();
                instance.fSize();
                instance.sliders();
                instance.rez();
            }, spd / 2);
        },
        masonryMix: function () {
            var instance = this;

            if (instance.masonryWrap.length > 0) {
                instance.masonryWrap.each(function () {
                    var posts = $(this)[0],
                        msnry;

                    setTimeout(function () {
                        msnry = new Masonry(posts, {
                            itemSelector: '.mix'
                        });
                    }, instance.options.speedAnimation);
                });
            }
        },
        isotopeMix: function () {
            var instance = this;

            if (instance.isotopeList.length > 0) {
                var isohsh = window.location.hash !== '' ? window.location.hash : '#all';

                instance.navCategory.find('a').removeClass('active');
                instance.navCategory.find('a[href=' + isohsh + ']').addClass('active');

                isohsh = isohsh == '#all' ? '*' : isohsh.replace('#', '.');

                if (isohsh === '*') {
                    instance.isotopeList.css('opacity', 1);
                }

                setTimeout(function () {
                    if (isohsh !== '*') {
                        instance.isotopeList.css('opacity', 1);
                    }
                    instance.isotopeList.isotope({
                        itemSelector: '.mix',
                        layoutMode: 'masonry',
                        filter: isohsh
                    });
                }, instance.options.speedAnimation);
            }
        },
        sliders: function (sliderContent) {
            var instance = this;

            if (sliderContent === '' || sliderContent === null || sliderContent === undefined) {
                sliderContent = '.slider';
            }

            sliderContent = $(sliderContent);

            if (sliderContent.length > 0) {
                sliderContent.each(function (e) {
                    var $this = $(this),
                        slidewrap = $this.find('ul:first'),
                        sliderFx = slidewrap.data('fx'),
                        sliderAuto = slidewrap.data('auto'),
                        sliderTimeout = slidewrap.data('timeout'),
                        sliderSpeedAnimation = slidewrap.data('speed-animation'),
                        sliderCircular = slidewrap.data('circular'),
                        sliderWidth = ($this.hasClass('mix-list')) ? '100%' : 'auto',
                        sliderItems = (!$this.hasClass('oneslider')) ? {
                            height: 'variable',
                            visible: {
                                min: 1,
                                max: 6
                            }
                        } : {
                            visible: 1,
                            width: 870,
                            height: 'variable'
                        };

                    if ($this.attr('id') === undefined) {
                        $this.attr('id', 'slider-' + (+Math.random().toFixed(5) * 100000));
                    }

                    $this.find('li').each(function (j) {
                        $(this).attr('id', 'slideritem-' + e + j);
                    });

                    $this.find('.product-color > a').each(function (j) {
                        var ct = $(this),
                            clr = ct.data('color');

                        ct.attr('href', '#slideritem-' + e + j).css('background-color', clr);
                    });

                    slidewrap.carouFredSel({
                        responsive: true,
                        width: sliderWidth,
                        infinite: (typeof sliderCircular) ? sliderCircular : true,
                        circular: (typeof sliderCircular) ? sliderCircular : true,
                        auto: sliderAuto ? sliderAuto : false,
                        scroll: {
                            fx: sliderFx ? sliderFx : instance.options.sliderFx,
                            duration: sliderSpeedAnimation ? sliderSpeedAnimation : instance.options.speedAnimation,
                            timeoutDuration: sliderTimeout ? sliderTimeout : instance.options.sliderInterval,
                            items: 'page',
                            onBefore: function (data) {
                                var self = $(this),
                                    classes = self.find('li:first').attr('class'),
                                    oldItems = $(data.items.old),
                                    visItem = $(data.items.visible),
                                    visId = visItem.attr('id'),
                                    oldAnimate = oldItems.find('.animate');

                                if (visItem.find('video').length > 0) {
                                    visItem.find('video').get(0).play();
                                }

                                if ($this.hasClass('img-medium')) {
                                    $(this).trigger("currentPosition", function (pos) {
                                        var txt = Math.ceil((pos + 1)) + " &#47; " + $(this).children().length;
                                        $('.product-count').html(txt);
                                    });
                                }
                                if (oldAnimate.length > 0 && !$this.parents('.slider').hasClass('vertical')) {
                                    self.parent().removeClass().addClass('caroufredsel_wrapper ' + classes);

                                    self.parent().find('ul:last .animated').removeClass('animated');

                                    setTimeout(function () {
                                        oldAnimate.each(function () {
                                            var self = $(this),
                                                animateFx = self.data('animate');
                                            self.removeClass(animateFx).removeClass('animated');
                                        });
                                    }, instance.options.speedAnimation);
                                }

                                if ($this.find('.product-color').length > 0) {
                                    $this.find('.product-color a[href="#' + visId + '"]').addClass('active').siblings().removeClass();
                                }
                            },
                            onAfter: function (data) {
                                var self = $(this),
                                    visItem = $(data.items.visible),
                                    visAnimate = visItem.find('.animate');

                                if (visAnimate.length > 0) {
                                    self.parent().removeClass().addClass('caroufredsel_wrapper');

                                    visAnimate.each(function () {
                                        var thatis = $(this),
                                            animateFx = thatis.data('animate');
                                        thatis.addClass(animateFx).addClass('animated');
                                    });
                                }
                            }
                        },
                        onCreate: function (data) {
                            var visItem = $(data.items);

                            if (visItem.find('video').length > 0) {
                                visItem.find('video').get(0).play();
                            }

                            if ($this.hasClass('img-medium')) {
                                $(this).trigger("currentPosition", function () {
                                    var txt = "1 &#47; " + $(this).children().length;
                                    $('.product-count').html(txt);
                                });
                            }
                        },
                        items: sliderItems,
                        swipe: {
                            onTouch: true,
                            onMouse: false
                        },
                        prev: $('#' + $this.attr('id') + ' .prev'),
                        next: $('#' + $this.attr('id') + ' .next'),
                        pagination: {
                            container: $('#' + $this.attr('id') + ' .nav-pages'),
                            anchorBuilder: function () {
                                if ($(this).parents(instance.slider.hasClass('pricing'))) {
                                    var per = $(this).data('period');
                                    return '<a href="#">' + per + '</a>';
                                }
                            }
                        }
                    });

                    if ($this.hasClass('msnr-container')) {
                        setTimeout(function () {
                            $this.filter('.msnr-container').find('.caroufredsel_wrapper')
                                .height($this.filter('.msnr-container').find('li:first').height());
                        }, 100);
                    }

                    $(".product-slider ul").trigger("linkAnchors", [".product-color", "a"]);
                });
            }
        },
        fMiddle: function () {
            this.vmiddle.each(function () {
                var $this = $(this);
                if (!$this.prev().length) {
                    $this.css({
                        'marginTop': ($this.parent().outerHeight() - $this.outerHeight()) / 2
                    });
                } else {
                    $this.css({
                        'marginTop': ($this.parent().height() - $this.height()) / 2 - $this.prev().css('paddingTop').replace('px', '')
                    });
                }

            });
        },
        fSize: function () {
            var instance = this,
                winHeight = $win.height(),
                mVis = function () {
                    instance.body.removeClass('menu-collapse').addClass('menu-visible');
                    $('.navbar-collapse').removeClass('collapse');
                },
                mHid = function () {
                    instance.body.removeClass('menu-visible').addClass('menu-collapse');
                    $('.navbar-collapse').addClass('collapse');
                };

            instance.fullscreen.height($win.height());
            instance.fullscreen.find('li').height($win.height());

            if (instance.modal.length > 0) {
                instance.modal.height(winHeight);
            }

            if (instance.body.hasClass('comingsoon-page')) {
                instance.options.collapseMenuWidth = 9999;
            }

            if ($win.width() > instance.options.collapseMenuWidth) {
                mVis();
            } else {
                mHid();
            }

        },
        megaMenu: function () {
            var instance = this,
                winWidth = $win.width(),
                navLang = $('.nav-lang'),
                mainmenu = $('.mainmenu'),
                fishOpts = {
                    delay: instance.options.speedAnimation / 2,
                    speed: instance.options.speedAnimation / 3
                };

            navLang.superfish(fishOpts);

            if (winWidth <= instance.options.collapseMenuWidth) {
                if (mainmenu.length > 0) {
                    mainmenu.superfish('destroy');
                }
            } else {
                if (mainmenu.length > 0) {
                    mainmenu.superfish(fishOpts);
                }
            }
        },
        ratings: function () {
            var instance = this;

            if (instance.rating.length > 0) {
                instance.rating.raty({
                    half: true,
                    starType: 'i',
                    readOnly: function () {
                        return $(this).data('readonly');
                    },
                    score: function () {
                        return $(this).data('score');
                    },
                    starOff: 'fa fa-star-o',
                    starOn: 'fa fa-star',
                    starHalf: 'fa fa-star-half-o'
                });
            }
        },
        countUp: function () {
            var instance = this,
                obj = {
                    signPos: 'after',
                    delay: 35,
                    orderSeparator: ' ',
                    decimalSeparator: ','
                };
            if (instance.countup.length > 0) {
                instance.countup.hsCounter(obj);
            }
        },
        countDown: function () {
            var instance = this;

            if (instance.timer.length > 0) {
                instance.timer.countdown(instance.options.countdownTo, function (event) {
                    var self = $(this);

                    self.html(event.strftime(
                        '<div><span>%D<ins>Day%!D</ins></span></div>' + '<div><span>%H<ins class="cd1">Hours</ins></span><i>:</i></div>' + '<div><span>%M<ins class="cd2">Minutes</ins></span><i>:</i></div>' + '<div><span>%S<ins class="cd3">Seconds</ins></span></div>'));
                });
            }
        },
        contactMap: function () {
            var instance = this,
                marker;

            if (instance.map.length > 0) {
                $.each(instance.map, function (index, map) {
                    var mapContainer = $(map).find('.google-map-container'),
                        mapDataCenter = mapContainer.data('center').split(','),
                        mapDataMarkers = mapContainer.data('markers').split('; '),
                        mapOptions = {
                            zoom: mapContainer.data('zoom'),
                            scrollwheel: false,
                            navigationControl: false,
                            mapTypeControl: false,
                            scaleControl: false,
                            draggable: true,
                            center: new google.maps.LatLng(mapDataCenter[0], mapDataCenter[1])
                        },
                        mapIcon = {
                            path: fontawesome.markers.MAP_MARKER,
                            scale: 0.65,
                            fillColor: '#323232',
                            fillOpacity: 1,
                            anchor: new google.maps.Point(15, -5)
                        },
                        googleMap = new google.maps.Map(mapContainer.get(0), mapOptions),
                        i = 0,
                        markerLength = mapContainer.data('markers').split('; ').length;

                    for (i; i < markerLength; i++) {
                        marker = new google.maps.Marker({
                            map: googleMap,
                            position: new google.maps.LatLng(mapDataMarkers[i].split(',')[0], mapDataMarkers[i].split(',')[1]),
                            icon: mapIcon
                        });
                    }

                    $('.a-map').on('click', function () {
                        var self = $(this),
                            popupContainer = $(self.attr('href')),
                            mapPopup = popupContainer.find('.google-map-popup');

                        setTimeout(function () {
                            var googlePopup = new google.maps.Map(mapPopup.get(0), mapOptions);
                            for (i = 0; i < markerLength; i++) {
                                marker = new google.maps.Marker({
                                    map: googlePopup,
                                    position: new google.maps.LatLng(mapDataMarkers[i].split(',')[0], mapDataMarkers[i].split(',')[1]),
                                    icon: mapIcon
                                });
                            }
                        }, 150);
                    });

                    $('.map-close').on('click', function () {
                        $('.google-map-popup').removeAttr('style').children().remove();
                    });
                });
            }
        },
        magnificPopup: function () {
            var instance = this;

            instance.magnificWrap.each(function () {
                var $this = $(this);

                $this.find(instance.magnific).magnificPopup({
                    type: 'image',
                    tLoading: '',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true
                    },
                    image: {
                        titleSrc: function (item) {
                            return item.el.attr('title');
                        }
                    },
                    removalDelay: 200,
                    mainClass: 'mfp-fade'
                });
            });

            instance.magnificVideo.on('click', function (e) {
                e.preventDefault();

                var $this = $(this),
                    url = $this.attr('href');

                if (!$this.parents('.mix').hasClass('inactive')) {
                    $.magnificPopup.open({
                        items: {
                            src: url,
                            type: 'iframe',
                            fixedContentPos: true
                        }
                    });
                }
            });

            instance.magnificGallery.on('click', function (e) {
                e.preventDefault();

                var $this = $(this),
                    items = [],
                    im = $this.data('gallery'),
                    imA = im.split(','),
                    imL = imA.length,
                    titl = $this.attr('title');

                for (var i = 0; i < imL; i++) {
                    items.push({
                        src: imA[i]
                    });
                }

                $.magnificPopup.open({
                    items: items,
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                    image: {
                        titleSrc: function () {
                            return titl;
                        }
                    }
                });
            });
        },
        feedForm: function () {
            var instance = this;

            if (instance.newsletter.length === 1) {
                instance.newsletter.find('input[type=email]').on('keyup', function () {
                    var sucBlock = $('.success-block');
                    if (sucBlock.is(':visible')) sucBlock.css('display', 'none');
                });

                instance.newsletter.validatr({
                    showall: true,
                    location: 'top',
                    template: '<div class="error-email">' + instance.options.errorText + '</div>',
                    valid: function () {
                        var form = instance.newsletter,
                            msgwrap = $('.feedback-success'),
                            url = form.attr('action'),
                            email = form.find('input[type=email]');

                        url = url.replace('/post?', '/post-json?').concat('&c=?');

                        var data = {};
                        var dataArray = form.serializeArray();

                        $.each(dataArray, function (index, item) {
                            data[item.name] = item.value;
                        });

                        $.ajax({
                            url: url,
                            data: data,
                            success: function (resp) {
                                var successText = instance.options.successText;

                                function notHide() {
                                    form.attr('style', ' ');
                                }

                                if (resp.result === 'success') {
                                    msgwrap.show().addClass('scale').find('span').html(successText);
                                    instance.notyOut();
                                    setTimeout(notHide, 0);
                                } else {
                                    setTimeout(notHide, 0);
                                    var msg;
                                    try {
                                        var parts = resp.msg.split(' - ', 2);
                                        if (parts[1] === undefined) {
                                            msg = resp.msg;
                                        } else {
                                            var i = parseInt(parts[0], 10);
                                            if (i.toString() === parts[0]) {
                                                msg = parts[1];
                                            } else {
                                                msg = resp.msg;
                                            }
                                        }
                                    } catch (e) {
                                        msg = resp.msg;
                                    }
                                    msgwrap.show().addClass('scale has-error').find('span').html(msg);
                                    instance.notyOut();
                                }
                                form.slideUp(0, function () {
                                    msgwrap.slideDown();
                                });
                            },
                            dataType: 'jsonp',
                            error: function (resp, text) {
                                alert('Oops! AJAX error: ' + text);
                            }
                        });
                        return false;
                    }
                });
            }
        },
        sendForm: function () {
            var instance = this,
                forms = $('.send-form'),
                emailValidationRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (forms.length) {
                $.each(forms, function (form_index, form) {
                    form = $(form);
                    form.find('input, textarea').not('[type="radio"]').focusout(function () {
                        var self = $(this),
                            required = self.attr('required') ? true : false;

                        if (self.attr('type') == 'email') {
                            if ((required && self.val() === '') || (self.val() && !emailValidationRegex.test(self.val()))) {
                                self.parent().addClass('has-error');
                            }
                        } else {

                            if (required && self.val() === '') {
                                self.parent().addClass('has-error');
                            }
                        }
                    }).focusin(function () {
                        $(this).parent().removeClass('has-error');
                    });

                    form.find('input[type="radio"]').on('change', function () {
                        var self = $(this),
                            required = self.attr('required') ? true : false;

                        if (required && self.val() === '') {
                            self.parent().addClass('has-error');
                        }
                    });


                    form.find('select').on('change', function () {
                        var self = $(this),
                            required = self.attr('required') ? true : false;

                        self.parent().removeClass('has-error');

                        if (required && self.val() === '') {
                            self.parent().addClass('has-error');
                        }
                    });

                    form.on('submit', function () {
                        var hasErrors = false,
                            form = $(this);

                        $.each(form.find('input, textarea').not('[type="radio"]'), function (index, input) {
                            var self = $(input),
                                required = self.attr('required') ? true : false;

                            if (self.attr('type') == 'email') {
                                if ((required && self.val() === '') || (self.val() && !emailValidationRegex.test(self.val()))) {
                                    hasErrors = true;
                                    self.parent().addClass('has-error');
                                }
                            } else {
                                if (required && self.val() === '') {
                                    hasErrors = true;
                                    self.parent().addClass('has-error');
                                }
                            }
                        });

                        $.each(form.find('select'), function (index, input) {
                            var self = $(input),
                                required = self.attr('required') ? true : false;

                            if (required && self.val() === '') {
                                hasErrors = true;
                                self.parent().addClass('has-error');
                            }
                        });

                        $.each(form.find('input[type="radio"]'), function (index, input) {
                            var self = $(input),
                                required = self.attr('required') ? true : false;

                            if (required && self.val() === '') {
                                hasErrors = true;
                                self.parent().addClass('has-error');
                            }
                        });

                        var inputs_data = {};

                        $.each(form.find('input, textarea, select'), function (index, input) {
                            input = $(input);

                            if (input.attr('name')) {
                                inputs_data[input.attr('name')] = {
                                    required: input.attr('required'),
                                    value: input.val(),
                                    type: input.attr('type')
                                };
                            }
                        });

                        if (!hasErrors) {
                            $.ajax({
                                type: 'POST',
                                url: form.attr('action'),
                                data: inputs_data,
                                dataType: 'json'
                            }).done(function (answer) {
                                if ((typeof answer.status != 'undefined') && (answer.status == 'ok')) {
                                    form[0].reset();
                                    $('.noty-success').show().addClass('scale');
                                    instance.notyOut();

                                } else {
                                    alert('Message was not sent. Server-side error!');
                                }
                            }).fail(function () {
                                alert('Message was not sent. Client error or Internet connection problems.');
                            });
                        }
                        return false;
                    });
                });
            }
        },
        notyOut: function () {
            var instance = this;

            setTimeout(function () {
                $('.noty-success').fadeOut(instance.options.speedAnimation, function () {
                    $(this).removeClass('scale has-error');
                });
            }, instance.options.speedAnimation * 10);
        },
        rez: function () {
            var instance = this,
                footer = $('body > footer'),
                winHeight = $win.height(),
                hh = instance.header.outerHeight(true) || 0,
                fh = footer.outerHeight(true) || 0;

            instance.wrapper.css('minHeight', winHeight - hh - fh);

            if (instance.body.hasClass('home')) {
                $('.topfwd-slider').css('marginTop', -hh);
            }

            if (instance.catalogBar.length > 0) {
                setTimeout(function () {
                    instance.catalogBar.css('minHeight', $('.products').height());
                }, 200);
            }

            if (!onMobile && $('.lavalamp-object').length > 0) {
                instance.navCategory.lavalamp('update');
            }

            instance.fMiddle();
            instance.megaMenu();
        },
        scrll: function () {
            var instance = this;

            if ($win.scrollTop() > 130) {
                $('.sidemenu-toggle').css('top', 130);
                $('.vertical-menu .sidemenu-toggle').css('top', 50);
            } else {
                $('.sidemenu-toggle').css('top', 340);
                $('.vertical-menu .sidemenu-toggle, .archive .sidemenu-toggle, .single .sidemenu-toggle').css('top', 290);
            }

            if ($win.scrollTop() > instance.options.scrollTopButtonOffset) {
                instance.scrTop.addClass('vis');
            } else {
                instance.scrTop.removeClass('vis').removeAttr('style');
            }

            instance.countUp();
        },
        scrollbarWidth: function () {
            var a,
                b,
                c;

            if (c === undefined) {
                a = $('<div style="width:50px; height:50px; overflow:auto;"><div/>').appendTo('body');
                b = a.children();
                c = b.innerWidth() - b.height(99).innerWidth();
                a.remove();
            }

            return c;
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin(this, options));
            }
        });
    };
})(jQuery, window, document);

(function ($) {
    $(document.body).Aisconverse();
})(jQuery);