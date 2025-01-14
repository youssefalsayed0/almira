function initEcrait() {
  var o;
  function e() {
    $(".gallery-items").length &&
      ((i = $(".gallery-items").isotope({
        singleMode: !0,
        transformsEnabled: !0,
        transitionDuration: "800ms",
        columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
        itemSelector:
          ".gallery-item, .gallery-item-second, .gallery-item-three",
      })).imagesLoaded(function () {
        i.isotope("layout");
      }),
      $(".gallery-filters").on("click  ", "a.gallery-filter", function (e) {
        e.preventDefault(),
          $("html, body").animate(
            { scrollTop: $("#port-scroll").offset().top - 178 },
            600
          );
        var t = $(this).attr("data-filter");
        $(this).text();
        setTimeout(function () {
          i.isotope({ filter: t });
        }, 700),
          $(".gallery-filters a").removeClass("gallery-filter-active"),
          $(this).addClass("gallery-filter-active");
      })),
      $(".gallery-items").isotope("on", "layoutComplete", function (e, t) {
        t = e.length;
        $(".num-album")
          .html("0" + t)
          .shuffleLetters({});
      });
    var i,
      e = $(".gallery-item").length;
    $(".num-album_total , .num-album").html("0" + e),
      $(".gallery-item").each(function (e) {
        $(this)
          .find(".pr_num")
          .text("0" + ++e + ".");
      });
  }
  function t() {
    if ($(".post-items").length) {
      let e = $(".post-items").isotope({
        singleMode: !0,
        columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
        itemSelector: ".post-item",
      });
      e.imagesLoaded(function () {
        e.isotope("layout");
      });
    }
  }
  TweenMax.to($(".double-bounce2"), 1.2, {
    force3D: !0,
    right: "0",
    delay: 0.3,
    ease: Expo.easeInOut,
    onComplete: function () {
      TweenMax.to($(".spinner"), 1, {
        force3D: !0,
        y: "-150px",
        opacity: 0,
        ease: Expo.easeInOut,
        onComplete: function () {
          $("#main").addClass("vis-main"),
            $(".loader .pl-row-anim").each(function (e, t) {
              new TimelineLite().to(
                t,
                0.6,
                { force3D: !0, bottom: "100%", ease: Expo.easeInOut },
                0.1 * e
              );
            }),
            $(".loader .pl-row-anim2").each(function (e, t) {
              new TimelineLite().to(
                t,
                0.8,
                {
                  force3D: !0,
                  bottom: "100%",
                  ease: Expo.easeInOut,
                  onComplete: function () {
                    $(".loader").fadeOut(1);
                  },
                },
                0.1 * e
              );
            });
        },
      });
    },
  }),
    $(".bg").each(function (e) {
      $(this).attr("data-bg") &&
        $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    }),
    $(".fixed-bar").outerHeight(!0) < $(".fix-container-init").outerHeight(!0)
      ? ($(".fixed-bar").addClass("fixbar-action"),
        $(".fixbar-action").scrollToFixed({
          minWidth: 1064,
          marginTop: function () {
            var e = $(window).height() - $(".fixed-bar").outerHeight(!0) - 10;
            return 0 <= e ? 0 : e;
          },
          removeOffsets: !0,
          limit: function () {
            return $(".limit-box").offset().top - $(".fixed-bar").outerHeight();
          },
        }))
      : $(".fixed-bar").removeClass("fixbar-action"),
    $(".fbi_init").scrollToFixed({
      minWidth: 1068,
      zIndex: 111,
      marginTop: 90,
      removeOffsets: !0,
      limit: function () {
        return (
          $(".limit-box").offset().top - $(".fbi_init").outerHeight() - 180
        );
      },
    }),
    $(".init-fc").scrollToFixed({
      minWidth: 1068,
      zIndex: 111,
      marginTop: 90,
      removeOffsets: !0,
      limit: function () {
        return $(".limit-box").offset().top - $(".init-fc").outerHeight() - 180;
      },
    }),
    $(".image-popup , .single-popup-image").lightGallery({
      selector: "this",
      cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
      download: !1,
      counter: !1,
    }),
    $(".lightgallery").lightGallery({
      selector: ".lightgallery a.popup-image , .lightgallery  a.popgal",
      cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
      download: !1,
      loop: !0,
      counter: !1,
    }),
    $("#html5-videos").lightGallery({
      selector: "this",
      counter: !1,
      download: !1,
      zoom: !1,
    }),
    (d = $(".popup_video").data("videolink")),
    $(".lg-video-object").find("source").attr("src", d),
    t(),
    $("#portfolio_horizontal_container").length &&
      ((o = $("#portfolio_horizontal_container")).imagesLoaded(function (
        e,
        t,
        i
      ) {
        $(window).width() < 764
          ? (o.isotope({
              itemSelector: ".portfolio_item",
              layoutMode: "packery",
              packery: { isHorizontal: !1, gutter: 0 },
              resizable: !0,
              transformsEnabled: !0,
              transitionDuration: "700ms",
            }),
            o.isotope("layout"),
            o.removeAttr("style"),
            $(".horizontal-grid-wrap").getNiceScroll().remove())
          : (o.isotope({
              itemSelector: ".portfolio_item",
              layoutMode: "packery",
              packery: { isHorizontal: !0, gutter: 0 },
              resizable: !0,
              transformsEnabled: !0,
              transitionDuration: "700ms",
            }),
            o.isotope("layout"),
            $(".horizontal-grid-wrap").niceScroll({
              cursorwidth: "2px",
              cursorborder: "none",
              cursorborderradius: "0px",
              touchbehavior: !0,
              autohidemode: !1,
              cursorcolor: "#F57500",
              bouncescroll: !1,
              scrollspeed: 120,
              mousescrollstep: 90,
              grabcursorenabled: !0,
              horizrailenabled: !0,
              preservenativescrolling: !0,
              cursordragontouch: !1,
              railpadding: { top: -70, right: 0, left: 0, bottom: -4 },
            })),
          $(".horizontal-grid-wrap").scroll(function () {
            var e =
                $("#portfolio_horizontal_container").width() -
                $(".horizontal-grid-wrap").width(),
              e = ($(".horizontal-grid-wrap").scrollLeft() / e) * 100;
            $(".js-progress-bar").css("stroke-dashoffset", 100 - e);
          }),
          $(".gallery-filters").on("click", "a", function (e) {
            e.preventDefault(),
              $(".horizontal-grid-wrap").animate({ scrollLeft: 0 }, 500);
            var t = $(this).attr("data-filter");
            setTimeout(function () {
              o.isotope({ filter: t });
            }, 600),
              $(".gallery-filters a").removeClass("gallery-filter-active"),
              $(this).addClass("gallery-filter-active"),
              $(window).width() < 778 &&
                setTimeout(function () {
                  $(".horizontal-grid-container").animate(
                    { scrollTop: 0 },
                    500
                  );
                }, 1200);
          }),
          o.isotope("on", "layoutComplete", function (e, t) {
            t = e.length;
            $(".num-album")
              .html("0" + t)
              .shuffleLetters({});
          });
        var n = $(".portfolio_item").length;
        $(".num-album_total , .num-album").html("0" + n);
      }),
      $(".portfolio_item").each(function (e) {
        $(this)
          .find(".pr_num")
          .text("0" + ++e + ".");
      })),
    $(".horizontal-grid-wrap").on("scroll", function () {
      var e =
          $("#portfolio_horizontal_container").width() -
          $(".horizontal-grid-wrap").width(),
        e = ($(".horizontal-grid-wrap").scrollLeft() / e) * 100;
      $(".progress-bar").css({ height: e + "%" });
    }),
    e(),
    $(window).on("load", function () {
      e(), t();
    }),
    $(".show-filter").on("click", function () {
      $(".init_hidden_filter").fadeToggle(300);
    }),
    $(".gallery-filters a").on("click", function () {
      $(window).width() < 1064 &&
        $(".init_hidden_filter").delay(1e3).fadeOut(300);
    }),
    $(window).on("scroll", function () {
      $(document).height(), $(window).height();
      var e = $(this).scrollTop();
      $(".hero-section_bg .bg").css(
        "transform",
        "translate3d(0, " + 0.25 * e + "px, 0)"
      );
    });
  var i,
    n,
    a,
    r,
    s,
    l,
    c,
    d = $(window);
  function u() {
    $(".height-emulator").css({ height: "450px" }),
      $(".fslider-fw-item").css({ height: $(".slider-fw").outerHeight(!0) }),
      $(".ms-item_fs").css({
        height: $(".slideshow-container").outerHeight(!0),
      });
  }
  if (
    (u(),
    d.on("resize", function () {
      u();
    }),
    0 < $(".slideshow-container_wrap").length)
  ) {
    let i = new Swiper(".slideshow-container_wrap .swiper-container", {
      preloadImages: !1,
      loop: !0,
      speed: 1400,
      spaceBetween: 0,
      effect: "fade",
      autoplay: { delay: 4e3, disableOnInteraction: !1 },
      pagination: { el: ".init-hspag", clickable: !0 },
    });
    i.on("slideChangeTransitionStart", function () {
      $(".slide-progress").css({ width: 0, transition: "width 0s" });
    }),
      i.on("slideChangeTransitionEnd", function () {
        $(".slide-progress").css({ width: "100%", transition: "width 2000ms" });
      });
    var p = $(
      ".slideshow-container_wrap .swiper-slide:not(.swiper-slide-duplicate)"
    ).length;
    $(".total_c").html("0" + p),
      i.on("slideChange", function () {
        var e = i.realIndex + 1,
          t = $(".current_c");
        $(".hc_counter .current_c");
        t.html("0" + e).shuffleLetters({});
      });
  }
  0 < $("#single-slider-1").length &&
    new Swiper("#single-slider-1 .swiper-container", {
      effect: $(".single-slider").data("effects"),
      pagination: {
        el: "#single-slider-1 .ss-slider-pagination",
        clickable: !0,
      },
      loop: !0,
      grabCursor: !0,
      autoHeight: !0,
      navigation: {
        nextEl: "#single-slider-1 .ss-slider-cont-next",
        prevEl: "#single-slider-1 .ss-slider-cont-prev",
      },
    }),
    0 < $("#sec2").length &&
      new Swiper("#sec2 .swiper-container", {
        effect: $(".single-slider").data("effects"),
        pagination: { el: "#sec2 .ss-slider-pagination", clickable: !0 },
        loop: !0,
        grabCursor: !0,
        autoHeight: !0,
        navigation: {
          nextEl: "#sec2 .ss-slider-cont-next",
          prevEl: "#sec2 .ss-slider-cont-prev",
        },
      }),
    0 < $(".testimonilas-carousel").length &&
      new Swiper(".testimonilas-carousel .swiper-container", {
        loop: !0,
        grabCursor: !0,
        autoHeight: !1,
        centeredSlides: !1,
        slidesPerView: 3,
        spaceBetween: 40,
        speed: 1400,
        pagination: { el: ".testi-slider-pagination", clickable: !0 },
        navigation: { nextEl: ".tc-button-next", prevEl: ".tc-button-prev" },
        breakpoints: {
          1620: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 1, spaceBetween: 0 },
        },
      }),
    0 < $(".team-carousel").length &&
      new Swiper(".team-carousel .swiper-container", {
        loop: !0,
        grabCursor: !0,
        autoHeight: !1,
        centeredSlides: !0,
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1400,
        pagination: { el: ".team-carousel-slider-pagination", clickable: !0 },
        navigation: { nextEl: ".tmc-button-next", prevEl: ".tmc-button-prev" },
        breakpoints: {
          1464: { slidesPerView: 2, centeredSlides: !0 },
          768: { slidesPerView: 1, centeredSlides: !1 },
        },
      }),
    0 < $(".clients-carousel").length &&
      new Swiper(".clients-carousel .swiper-container", {
        loop: !0,
        grabCursor: !0,
        autoHeight: !1,
        centeredSlides: !1,
        slidesPerView: 4,
        spaceBetween: 1,
        speed: 1400,
        mousewheel: !1,
        navigation: { nextEl: ".cc-button-next", prevEl: ".cc-button-prev" },
        breakpoints: {
          1064: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 0 },
          540: { slidesPerView: 1, spaceBetween: 0 },
        },
      }),
    $(".fw-carousel .swiper-wrapper").addClass("no-horizontal-slider"),
    0 < $(".fw-carousel").length &&
      (768 <= $(window).width() &&
        null == i &&
        ((d = $(".fw-carousel").data("mousecontrol")),
        (i = new Swiper(".fw-carousel .swiper-container", {
          preloadImages: !1,
          loop: !0,
          freeMode: !1,
          slidesPerView: "auto",
          spaceBetween: 2,
          grabCursor: !0,
          mousewheel: d,
          speed: 1400,
          centeredSlides: !0,
          direction: "horizontal",
          pagination: { el: ".hc-pag", clickable: !0 },
          effect: "slide",
          navigation: {
            nextEl: ".carousel-btn_control-next",
            prevEl: ".carousel-btn_control-prev",
          },
        })),
        (d = $(
          ".fw-carousel .swiper-slide:not(.swiper-slide-duplicate)"
        ).length),
        $(".total_c").html("0" + d),
        i.on("slideChange", function () {
          var e = i.realIndex + 1,
            t = $(".current_c");
          $(".hc_counter .current_c");
          t.html("0" + e).shuffleLetters({});
        })),
      $(window).width() < 768) &&
      void 0 !== i &&
      (i.destroy(),
      (i = void 0),
      $(".fw-carousel .swiper-wrapper")
        .removeAttr("style")
        .addClass("no-horizontal-slider"),
      $(".swiper-slide").removeAttr("style")),
    $(".photo-info-btn").on("click", function () {
      $(".show-info_act").toggleClass("vis-phot_det");
    }),
    0 < $(".slider-fw").length &&
      ($(".slider-fw.thumb-contr .swiper-slide .bg").each(function () {
        var e = $(this).attr("data-bg");
        $("<div class='thumb-img'><img src='" + e + "'></div>").appendTo(
          ".thumbnail-wrap"
        );
      }),
      $(".thumb-img").on("click", function () {
        768 < $(window).width() &&
          (n.slideTo($(this).index(), 500), hideThumbnails());
      }),
      (n = new Swiper(".slider-fw .swiper-container", {
        preloadImages: !1,
        loop: !0,
        grabCursor: !0,
        slidesPerView: 1,
        centeredSlides: !0,
        speed: 1400,
        spaceBetween: 0,
        effect: "slide",
        mousewheel: !1,
        parallax: !0,
        pagination: { el: ".hc-pag", clickable: !0 },
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        navigation: { nextEl: ".hs_btn_next", prevEl: ".hs_btn_prev" },
      })),
      (d = $(
        ".slider-fw  .swiper-slide:not(.swiper-slide-duplicate) .bg"
      ).length),
      (a = $(
        ".slider-fw .swiper-container .swiper-wrapper .swiper-slide:not(.swiper-slide-duplicate)"
      )),
      $(".total").html("0" + d),
      (d = a.eq(n.realIndex).next()),
      (s = a.eq(n.realIndex).prev()),
      $(".hs_btn_next .hs_btn_wrap_preview .bg").css(
        "background-image",
        "url(" + d.find(".bg").attr("data-bg") + ")"
      ),
      $(".hs_btn_prev .hs_btn_wrap_preview .bg").css(
        "background-image",
        "url(" + s.find(".bg").attr("data-bg") + ")"
      ),
      n.on("slideChange", function () {
        var e = n.realIndex + 1,
          e = ($(".current").html("0" + e), a.eq(n.realIndex).next()),
          t = a.eq(n.realIndex).prev();
        $(".hs_btn_next .hs_btn_wrap_preview .bg").css(
          "background-image",
          "url(" + e.find(".bg").attr("data-bg") + ")"
        ),
          $(".hs_btn_prev .hs_btn_wrap_preview .bg").css(
            "background-image",
            "url(" + t.find(".bg").attr("data-bg") + ")"
          );
      }),
      n.on("slideChangeTransitionStart", function () {
        $(".slide-progress").css({ width: 0, transition: "width 0s" });
      }),
      n.on("slideChangeTransitionEnd", function () {
        $(".slide-progress").css({ width: "100%", transition: "width 2000ms" });
      }),
      (p = $(".slider-fw .swiper-slide:not(.swiper-slide-duplicate)").length),
      $(".total_c").html("0" + p),
      n.on("slideChange", function () {
        var e = n.realIndex + 1,
          t = $(".current_c");
        $(".hc_counter .current_c");
        t.html("0" + e).shuffleLetters({});
      })),
    0 < $(".main-hero-carousel").length &&
      ((r = new Swiper(".main-hero-carousel .swiper-container", {
        preloadImages: !1,
        loop: !0,
        centeredSlides: !0,
        freeMode: !1,
        slidesPerView: 3,
        spaceBetween: 0,
        grabCursor: !0,
        mousewheel: !1,
        effect: "coverflow",
        speed: 1400,
        init: !0,
        autoplay: { delay: 3500, disableOnInteraction: !1 },
        coverflowEffect: {
          rotate: 15,
          stretch: 1,
          depth: 150,
          modifier: 1,
          slideShadows: !1,
        },
        pagination: { el: ".hc-pag", clickable: !0 },
        navigation: {
          nextEl: ".carousel-btn_control-next",
          prevEl: ".carousel-btn_control-prev",
        },
        breakpoints: {
          1268: { slidesPerView: 2 },
          768: { slidesPerView: 1, centeredSlides: !1, effect: "slide" },
        },
      })).on("slideChangeTransitionStart", function () {
        $(".slide-progress").css({ width: 0, transition: "width 0s" });
      }),
      r.on("slideChangeTransitionEnd", function () {
        $(".slide-progress").css({ width: "100%", transition: "width 2000ms" });
      }),
      (p = $(
        ".main-hero-carousel .swiper-slide:not(.swiper-slide-duplicate)"
      ).length),
      $(".total_c").html("0" + p),
      r.on("slideChange", function () {
        var e = r.realIndex + 1,
          t = $(".current_c");
        $(".hc_counter .current_c");
        t.html("0" + e).shuffleLetters({});
      })),
    $(".filter-button").on("click  ", function () {
      $(".hid-filter").slideToggle(500);
    }),
    $(".mob-filter_btn").on("click  ", function () {
      $(".gfm").slideToggle(500);
    }),
    $(".stats").appear(function () {
      $(".num").countTo();
    }),
    $(".custom-scroll-link").on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname
      ) {
        var e = $(this.hash);
        if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length)
          return (
            $("html,body").animate(
              { scrollTop: e.offset().top - 90 },
              { queue: !1, duration: 1200, easing: "easeInOutExpo" }
            ),
            !1
          );
      }
    }),
    $(".init_onepagenav  ul").singlePageNav({
      filter: ":not(.external)",
      updateHash: !1,
      offset: 90,
      threshold: 1,
      speed: 1200,
      currentClass: "act-sec",
      onComplete: function () {
        $(window).width() < 1258 &&
          ($(".main-menu").removeClass("vismobmenu"),
          $(".nav-button").removeClass("cmenu"));
      },
    }),
    $(".to-top").on("click", function (e) {
      return (
        e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 800), !1
      );
    }),
    $(".toglle-header").on("click", function () {
      $(this).parent(".toogle-item").find(".toglle-content").slideToggle(200),
        $(this)
          .parent(".toogle-item")
          .delay(200)
          .toggleClass("toogle-item_vis");
    }),
    $(
      ".shuffleLetter , .header-social a , .footer-contacts a , .main-social a , .commentform button , .custom-form button   , .box_gallery-filters a strong   , .shb_init span , .offer-box_btn , .half-carousel-content h3 a , .hc_controls_link a , .team-social li a  , .home_services_btn_wrap a   , .testi-link  , .order-wrap_btn , .column-filters-item a"
    ).on({
      mouseenter: function () {
        $(this).shuffleLetters({});
      },
    }),
    $(".gallery-item , .portfolio_item").on({
      mouseenter: function () {
        $(this).find(".grid-det_link span").shuffleLetters({});
      },
    }),
    $(".share-button-wrap").on({
      mouseenter: function () {
        $(this).find(".share-button_title").shuffleLetters({});
      },
    }),
    $(
      ".btn , .fixed-bar_item_btn , .strt_btn , .post-item_footer a , .subscribe-button  , .main-hero-carousel-item_link  "
    ).on({
      mouseenter: function () {
        $(this).find("span").shuffleLetters({});
      },
    }),
    setInterval(function () {
      $(".error-wrap h2").shuffleLetters({});
    }, 5e3),
    $(".block_img_fs-let").rotaterator({ fadeSpeed: 800, pauseSpeed: 1500 }),
    0 < $(".video-holder-wrap").length &&
      ((d = $(".background-vimeo").data("vim")),
      (s = $(".background-vimeo")),
      (p = $(".media-container")),
      (l = $(".background-vimeo iframe ")),
      (c = $(".video-container")),
      s.append(
        '<iframe src="//player.vimeo.com/video/' +
          d +
          '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>'
      ),
      $(".video-holder").height(p.height()),
      1024 < $(window).width()
        ? 0 < $(".video-holder").length &&
          ((p.height() / 9) * 16 > p.width()
            ? (l.height(p.height()).width((p.height() / 9) * 16),
              l.css({
                "margin-left": (-1 * $("iframe").width()) / 2 + "px",
                top: "-75px",
                "margin-top": "0px",
              }))
            : (l.width($(window).width()).height(($(window).width() / 16) * 9),
              l.css({
                "margin-left": (-1 * $("iframe").width()) / 2 + "px",
                "margin-top": (-1 * $("iframe").height()) / 2 + "px",
                top: "50%",
              })))
        : ($(window).width(),
          $(".video-holder").height(p.height()),
          l.height(p.height())),
      c.css("width", $(window).width() + "px"),
      c.css("height", Number(0.5625 * $(window).width()) + "px"),
      c.height() < $(window).height()) &&
      (c.css("height", $(window).height() + "px"),
      c.css("width", Number((1280 / 720) * $(window).height()) + "px")),
    $(
      ".dark-section , .aside-column , .main-header , .main-footer  , .fs-holder , .gallery-item , .column-filters-wrap"
    ).on({
      mouseenter: function () {
        $(".element-item").addClass("white_blur");
      },
      mouseleave: function () {
        $(".element-item").removeClass("white_blur");
      },
    }),
    $(
      "a , .btn ,   textarea,   input  , .leaflet-control-zoom , .aside-show_cf , .close-contact_form , .closedet_style  , .nav-button , .swiper-pagination-bullet , .to-top-btn  , .gc-slider-cont , .hsc , .ss-slider-cont , .fw_scb , .hsc_pp2 , .hsc_pp , .hcw_btn , .cbc_btn , .cc-button , .tc-button , .tmc-button"
    ).on({
      mouseenter: function () {
        $(".element-item").addClass("elem_hover");
      },
      mouseleave: function () {
        $(".element-item").removeClass("elem_hover");
      },
    }),
    $(".swiper-slide ,  #portfolio_horizontal_container").on({
      mouseenter: function () {
        $(".element-item").addClass("slider_hover");
      },
      mouseleave: function () {
        $(".element-item").removeClass("slider_hover");
      },
    }),
    $(
      ".swiper-slide a , .next-project-swiper-link , #portfolio_horizontal_container a"
    ).on({
      mouseenter: function () {
        $(".element-item").removeClass("slider_hover");
      },
      mouseleave: function () {
        $(".element-item").addClass("slider_hover");
      },
    }),
    $(".next-project-swiper-link").on({
      mouseenter: function () {
        $(".element-item").addClass("slider_linknext");
      },
      mouseleave: function () {
        $(".element-item").removeClass("slider_linknext");
      },
    }),
    $(".nav-overlay , .det-overlay").on({
      mouseenter: function () {
        $(".element-item").addClass("close-icon");
      },
      mouseleave: function () {
        $(".element-item").removeClass("close-icon");
      },
    });
  var h = $(".share-wrapper"),
    d = $(".close-share-btn"),
    m = $(".showshare");
  function f() {
    m.removeClass("uncl-share"),
      h.addClass("isShare").removeClass("share-wrapper_vis");
  }
  d.on("click", function () {
    f();
  }),
    m.on("click", function () {
      h.hasClass("isShare")
        ? (m.addClass("uncl-share"),
          h.removeClass("isShare").addClass("share-wrapper_vis"))
        : f();
    }),
    ($.fn.duplicate = function (e, t) {
      for (var i = [], n = 0; n < e; n++) $.merge(i, this.clone(t).get());
      return this.pushStack(i);
    }),
    $("<span class='arrow_dec_dot'></span>")
      .duplicate(15)
      .appendTo(".arrow_dec");
}
function contentAnimShow() {
  $(".main-header  nav  a").removeClass("act-link");
  var e = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $("a.ajax").each(function () {
    ($(this).attr("href") != e && "" != $(this).attr("href")) ||
      $(this).addClass("act-link");
  }),
    $(".page-load , .menumasc").fadeIn(1),
    $(".page-load .pl-row-anim2").each(function (e, t) {
      new TimelineLite().to(
        t,
        0.6,
        { force3D: !0, bottom: "0", ease: Expo.easeInOut },
        0.1 * e
      );
    }),
    $(".page-load .pl-row-anim").each(function (e, t) {
      new TimelineLite().to(
        t,
        0.8,
        { force3D: !0, bottom: "0", ease: Expo.easeInOut },
        0.1 * e
      );
    }),
    $(".pl-spinner").addClass("act-loader"),
    setTimeout(function () {
      $("html, body").animate({ scrollTop: 0 }, { queue: !0, duration: 10 });
    }, 1e3),
    $(".element-item").addClass("loader_element"),
    $(".share-btn").removeClass("uncl-share"),
    $(window).width() < 1258 &&
      ($(".main-menu").removeClass("vismobmenu"),
      $(".nav-button").removeClass("cmenu"));
}
function contentAnimHide() {
  var e = $(".content-holder").data("pagetitle");
  $(".pl-spinner strong")
    .text(e)
    .shuffleLetters({
      step: 5,
      fps: 20,
      callback: function () {
        setTimeout(function () {
          $(".pl-spinner").removeClass("act-loader");
        }, 300),
          setTimeout(function () {
            $(".page-load .pl-row-anim").each(function (e, t) {
              new TimelineLite().to(
                t,
                0.6,
                { force3D: !0, top: "100%", ease: Expo.easeInOut },
                0.1 * e
              );
            }),
              $(".page-load .pl-row-anim2").each(function (e, t) {
                new TimelineLite().to(
                  t,
                  0.8,
                  { force3D: !0, top: "100%", ease: Expo.easeInOut },
                  0.1 * e
                );
              }),
              setTimeout(function () {
                $(".page-load , .menumasc").fadeOut(1),
                  TweenMax.to(
                    $(".page-load .pl-row-anim , .page-load .pl-row-anim2"),
                    0,
                    { force3D: !0, bottom: "100%", top: "0" }
                  ),
                  $(".pl-spinner strong").text("");
              }, 1400);
          }, 800),
          $(".element-item").removeClass("loader_element");
      },
    });
}
function mouseMove(e) {
  var t = window.pageYOffset || document.documentElement.scrollTop;
  (mouse.x = e.pageX), (mouse.y = e.pageY - t);
}
function updatePosition() {
  active ||
    ((pos.x += (mouse.x - pos.x) * ratio),
    (pos.y += (mouse.y - pos.y) * ratio),
    TweenMax.set(ball, { x: pos.x, y: pos.y }));
}
0 < $(".element-item").length &&
  ((mouse = { x: 0, y: 0 }),
  (pos = { x: 0, y: 0 }),
  (active = !(ratio = 0.15)),
  (ball = document.querySelector(".element-item")),
  TweenLite.set(ball, { xPercent: -50, yPercent: -50 }),
  document.addEventListener("mousemove", mouseMove),
  TweenMax.ticker.addEventListener("tick", updatePosition));
var mouse,
  pos,
  ratio,
  active,
  ball,
  $window = $(window);
function mobMenuInit() {
  $(window).width() < 1258
    ? ($(".menusb").remove(),
      $(".main-menu").removeClass("nav-holder"),
      $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu"),
      $(".menusb").menu())
    : ($(".menusb").remove(), $(".main-menu").addClass("nav-holder"));
}
function readyFunctions() {
  initEcrait(), initHalfCarousel("#slider1"), initHalfCarousel("#slider2");
}
function initHalfCarousel(i) {
  if (0 < $(i + " .half-carousel-conatiner").length) {
    let t = new Swiper(i + " .half-carousel .swiper-container", {
      preloadImages: !1,
      loop: !0,
      centeredSlides: !1,
      freeMode: !1,
      slidesPerView: 2,
      spaceBetween: 1,
      grabCursor: !0,
      mousewheel: !1,
      parallax: !1,
      speed: 1400,
      pagination: {
        el: i + " .cen-slider-pagination",
        clickable: !0,
        dynamicBullets: !1,
      },
      navigation: {
        nextEl: i + " .hcw-cont-next",
        prevEl: i + " .hcw-cont-prev",
      },
      breakpoints: { 1258: { slidesPerView: 2 }, 1068: { slidesPerView: 1 } },
    });
    var e = $(
      i +
        " .half-carousel .swiper-slide:not(.swiper-slide-duplicate) .half-carousel-item"
    ).length;
    $(i + " .total").html("0" + e),
      t.on("slideChange", function () {
        var e = t.realIndex + 1;
        $(i + " .current")
          .html("0" + e)
          .shuffleLetters({});
      }),
      $(
        i +
          " .swiper-slide:not(.swiper-slide-duplicate) a[data-fancybox='gallery']"
      ).each(function () {
        $(this).attr("data-fancybox-origin", "true");
      }),
      Fancybox.bind("[data-fancybox='gallery'][data-fancybox-origin='true']", {
        Thumbs: { autoStart: !0 },
      });
  }
}
$window.on("scroll", function (e) {
  var e = $(document).height(),
    t = $(window).height(),
    e = ($(window).scrollTop() / (e - t)) * 100;
  $(".progress-bar").css({ height: e + "%" });
}),
  $(".nav-button").on("click", function () {
    $(".main-menu").toggleClass("vismobmenu"), $(this).toggleClass("cmenu");
  }),
  mobMenuInit(),
  $("#menu2").menu(),
  ($window = $(window)).on("resize", function () {
    mobMenuInit();
  }),
  $("a.ajax").on("click", function () {
    $("nav li a").removeClass("act-link"), $(this).addClass("act-link");
  }),
  ($.fn.duplicate = function (e, t) {
    for (var i = [], n = 0; n < e; n++) $.merge(i, this.clone(t).get());
    return this.pushStack(i);
  }),
  $(
    "<div class='page-load'><span class='pl-spinner'><strong></strong></span></div>"
  ).appendTo("#main"),
  $("<div class='menumasc fs-wrapper'></div>").appendTo(".nav-holder"),
  $(
    "<div class='pl-row'><span class='pl-row-anim'></span><span class='pl-row-anim2'></span></div>"
  )
    .duplicate(5)
    .appendTo(".loader"),
  $(
    "<div class='pl-row'><span class='pl-row-anim'></span><span class='pl-row-anim2'></span></div>"
  )
    .duplicate(5)
    .appendTo(".page-load"),
  $("head").append(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">'
  ),
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  }),
  $(function () {
    $.coretemp({ reloadbox: "#wrapper", outDuration: 1e3, inDuration: 100 }),
      readyFunctions(),
      $(document).on({
        ksctbCallback: function () {
          readyFunctions();
        },
      });
  }),
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
  });
let adSection = document.querySelector(".img-ad"),
  adShown = !1;
function handleAdVisibility() {
  var e = window.scrollY;
  400 < e && !adShown
    ? (adSection.classList.add("show"), (adShown = !0))
    : e <= 400 &&
      adShown &&
      (adSection.classList.remove("show"), (adShown = !1));
}
document.addEventListener("DOMContentLoaded", function () {
  adSection.style.cssText = `
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease-in-out;
    `;
  var e = document.createElement("style"),
    e =
      ((e.textContent = `
        .img-ad.show {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
        }
    `),
      document.head.appendChild(e),
      document.createElement("button"));
  (e.innerHTML = "×"),
    (e.style.cssText = `
        position: absolute;
        top: 0;
        right: 5px;
        background: none;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
        color: #333;
        padding: 0 10px;
        z-index: 11;
    `),
    e.addEventListener("click", function () {
      adSection.style.display = "none";
    }),
    adSection.appendChild(e);
}),
  window.addEventListener("scroll", handleAdVisibility);
