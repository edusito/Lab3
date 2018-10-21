$(function () { "use strict"; var e, a, i, t, o, n, s, l, r, c, d, u, f, h, g, m, p, v, w, C, b, x, k, y, S, T, P, O = $(window), H = $(document), I = 991; $("body"); function D() { var e = $(window).height(); $(".js-fullscreen-height").css("height", e) } function z() { var e = $(".container-masonry"); e.imagesLoaded(function () { e.isotope({ itemSelector: ".nf-item", layoutMode: "masonry", masonry: { columnWidth: 0, gutter: 0 } }) }), $(".container-filter").on("click", ".categories", function () { var a = $(this).attr("data-filter"); e.isotope({ filter: a }) }); var a = $(".container-grid"); a.imagesLoaded(function () { a.isotope({ itemSelector: ".nf-item", layoutMode: "fitRows" }) }), $(".container-filter").on("click", ".categories", function () { var e = $(this).attr("data-filter"); a.isotope({ filter: e }) }), $(".categories-filter").each(function (e, a) { var i = $(a); i.on("click", ".categories", function () { i.find(".active").removeClass("active"), $(this).addClass("active") }) }), $(".masonry").masonry({ itemSelector: ".nf-item" }) } function N(e) { var a = $(window).scrollTop(), i = .5 * a, t = -.5 * a, o = a / $(".parallax").height(); $(".parallax").hasClass("parallax-section1") && e.css("top", i), $(".parallax").hasClass("parallax-section2") && e.css("top", t), $(".parallax").hasClass("parallax-static") && e.css("top", 1 * a), $(".parallax").hasClass("parallax-opacity") && e.css("opacity", 1 - 1 * o), $(".parallax").hasClass("parallax-background1") && e.css("background-position", "left " + i + "px"), $(".parallax").hasClass("parallax-background2") && e.css("background-position", "left " + -i + "px") } function M() { $(".cbox-gallary1").colorbox({ rel: "gallary", maxWidth: "95%", maxHeight: "95%" }), $(".cbox-iframe").colorbox({ iframe: !0, maxWidth: "95%", maxHeight: "95%", innerWidth: 640, innerHeight: 390 }), $(".skillbar").each(function () { $(this).find(".skillbar-bar").animate({ width: $(this).attr("data-percent") }, 2e3) }), $(".tipped").tipper(), $(".counter").each(function () { var e = $(this), a = e.attr("data-count"); $({ countNum: e.text() }).animate({ countNum: a }, { duration: 8e3, easing: "linear", step: function () { e.text(Math.floor(this.countNum)) }, complete: function () { e.text(this.countNum) } }) }) } $(window).load(function () { $("#loader").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({ overflow: "visible" }), z() }), $(document).ready(function () { !function () { $(".fullscreen-carousel").length > 0 && $(".fullscreen-carousel").flexslider({ animation: "slide", animationSpeed: 700, animationLoop: !0, slideshow: !0, easing: "swing", controlNav: !1, before: function (e) { $(".fullscreen-carousel .intro-content-inner").fadeOut().animate({ top: "80px" }, { queue: !1, easing: "easeOutQuad", duration: 700 }), e.slides.eq(e.currentSlide).delay(400), e.slides.eq(e.animatingTo).delay(400) }, after: function (a) { $(".fullscreen-carousel .flex-active-slide").find(".intro-content-inner").fadeIn(2e3).animate({ top: "0" }, { queue: !1, easing: "easeOutQuad", duration: 1200 }), e() }, start: function (a) { $("body").removeClass("loading"), e() }, useCSS: !0 }); function e() { var e = $(".fullscreen-carousel").find("li.flex-active-slide").attr("data-slide"); "dark-slide" == e && ($("#header").addClass("header").removeClass("header--dark"), $("#header").removeClass("header-default")), "light-slide" == e && ($("#header").addClass("header--dark").removeClass("header--light"), $("#header").removeClass("header-default")), "default-slide" == e && ($("#header").removeClass("header--light"), $("#header").removeClass("header--dark"), $("#header").addClass("header")) } function a() { $(window).width(); var e = $(window).height(); $(window).width() > 767 ? $(".hero-slider-1 .slides .js-Slide-fullscreen-height").css("height", e) : $(".hero-slider-1 .slides .js-Slide-fullscreen-height").css("height", "400px") } a(), $(window).resize(function () { a() }) }(), D(), $(window).scroll(function () { $(this).scrollTop() > 300 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut() }), $(".scroll-top").click(function () { return $("html, body").animate({ scrollTop: 0 }, 800), !1 }), $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on("click", function (e) { e.preventDefault(); var a = this.hash, i = $(a); $("html, body").stop().animate({ scrollTop: i.offset().top }, 900, "swing", function () { window.location.hash = a }) }), function () { $(".video").mediaelementplayer({ loop: !0, enableKeyboard: !1, iPadUseNativeControls: !1, pauseOtherPlayers: !1, iPhoneUseNativeControls: !1, AndroidUseNativeControls: !1, enableAutosize: !0 }), $(".bg-video").mediaelementplayer({ loop: !0, enableKeyboard: !1, iPadUseNativeControls: !1, pauseOtherPlayers: !1, iPhoneUseNativeControls: !1, AndroidUseNativeControls: !1, enableAutosize: !0, alwaysShowControls: !1 }), $(".audio").mediaelementplayer({ audioWidth: "100%", pauseOtherPlayers: !1 }), $(".video, .audio, .post-media, .post-media iframe").fitVids() }(), function () { $(".slider-hero").owlCarousel({ navigation: !0, slideSpeed: 700, paginationSpeed: 400, pagination: !0, addClassActive: !0, touchDrag: !0, singleItem: !0, navigationText: !1, autoPlay: !1, autoHeight: !1, beforeMove: function () { $(".slider-hero .overlay-hero .caption-hero").fadeOut(1) }, afterMove: function () { $(".slider-hero .owl-item.active ").find(".caption-hero").delay(500).fadeIn(1500), BackgroundCheck.refresh() }, afterInit: function () { $(".slider-hero .owl-item.active ").find(".caption-hero").delay(500).fadeIn(1500), BackgroundCheck.init({ targets: ".full-intro", images: ".owl-carousel .item img" }) } }), $(window).height(function () { function e() { var e = $(window).innerHeight(); $(".slider-hero, .full-screen-intro").css("height", e) } e(), $(window).resize(function () { e() }) }) }(), $(".fullwidth-slider").owlCarousel({ slideSpeed: 400, singleItem: !0, autoHeight: !0, navigation: !0, pagination: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), $(".image-slider").owlCarousel({ navigation: !0, pagination: !0, slideSpeed: 350, paginationSpeed: 400, singleItem: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], autoPlay: !1, autoHeight: !0, responsive: !0 }), $(".testimonial-carousel").owlCarousel({ autoPlay: !0, autoHeight: !0, stopOnHover: !0, singleItem: !0, slideSpeed: 350, pagination: !0, navigation: !1, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), $(".team-carousel").owlCarousel({ autoPlay: !1, stopOnHover: !0, items: 3, itemsDesktop: [1170, 3], itemsDesktopSmall: [1024, 2], itemsTabletSmall: [768, 1], itemsMobile: [480, 1], pagination: !1, navigation: !1, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), $(".client-carousel").owlCarousel({ autoPlay: 2500, stopOnHover: !0, items: 5, itemsDesktop: [1170, 4], itemsDesktopSmall: [1024, 3], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], pagination: !1, navigation: !1, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), $(".content-carousel").owlCarousel({ autoPlay: !0, autoHeight: !0, stopOnHover: !0, singleItem: !0, slideSpeed: 500, pagination: !1, navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], responsive: !0 }), $(".item5-carousel").owlCarousel({ autoPlay: 2500, stopOnHover: !0, items: 5, itemsDesktop: [1170, 3], itemsDesktopSmall: [1024, 2], itemsTabletSmall: [768, 1], itemsMobile: [480, 1], pagination: !0, navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), $(".item4-carousel").owlCarousel({ autoPlay: 2500, stopOnHover: !0, items: 4, itemsDesktop: [1170, 3], itemsDesktopSmall: [1024, 2], itemsTabletSmall: [768, 1], itemsMobile: [480, 1], pagination: !1, navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), $(".item3-carousel").owlCarousel({ autoPlay: !1, stopOnHover: !0, items: 3, itemsDesktop: [1170, 3], itemsDesktopSmall: [1024, 2], itemsTabletSmall: [768, 1], itemsMobile: [480, 1], pagination: !0, navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), $(".item1-carousel").owlCarousel({ autoPlay: !1, autoHeight: !0, stopOnHover: !0, singleItem: !0, slideSpeed: 350, pagination: !0, navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], responsive: !0 }), z(), $(".load-ele-fade").viewportChecker({ classToAdd: "visible animated fadeIn", offset: 100, callbackFunction: function (e, a) { } }), $(function () { var e = new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0 }); e.init() }), M() }), $(window).resize(function () { D() }), $(window).scroll(function () { }), e = $(".nav-menu > ul > li"), a = $(".nav-dropdown"), i = $(".nav-menu-item"), t = $(".menu-mobile-btn"), o = $(".nav-menu"), $(".nav-menu > ul > li:has( > .nav-dropdown)").prepend('<span class="menu-dropdown-icon"></span>'), $(".nav-dropdown > ul > li:has( > .nav-dropdown-sub)").addClass("sub-dropdown-icon"), $(".nav-menu > ul > li:has( > .nav-dropdown)").addClass("dd-menu-dropdown-icon"), O.on("resize", function () { $(window).width() > I && $(".nav-dropdown > ul > li ul li:has(.nav-dropdown-sub)").addClass("sub-dropdown-icon"), $(window).width() <= I && $(".nav-dropdown > ul > li ul li:has(.nav-dropdown-sub)").removeClass("sub-dropdown-icon") }), e.on("mouseenter mouseleave", function (e) { $(window).width() > I && ($(this).children(".nav-dropdown").stop(!0, !1).fadeToggle(150), e.preventDefault()) }), $(".menu-dropdown-icon").on("click", function () { $(window).width() <= I && $(this).siblings(".nav-dropdown").stop(!0, !1).fadeToggle(150) }), O.on("resize", function () { $(window).width() > I && $(".nav-dropdown, .nav-dropdown-sub").fadeOut(150) }), i.on("mouseenter mouseleave", function (e) { $(window).width() > I && ($(this).children(".nav-dropdown-sub").stop(!0, !1).fadeToggle(150), e.preventDefault()) }), i.on("click", function () { $(window).width() <= I && $(this).children(".nav-dropdown-sub").stop(!0, !1).fadeToggle(150) }), O.on("resize", function () { a.each(function (e) { if ($(this).hasClass("center")) { var a = $(this).outerWidth(), t = $(this).parents(i).outerWidth(), o = parseInt(a / 2), n = parseInt(t / 2), s = parseInt(o - n); O.width() > I ? $(this).css("left", "-" + s + "px") : $(this).css("left", "0") } }) }), t.on("click", function (e) { o.toggleClass("show-on-mobile"), $(this).toggleClass("active"), e.preventDefault() }), n = $(".header-nav").offset().top, s = parseInt(n + 400), $(window).on("scroll", function () { var e = $(".header--sticky"), a = $(window).scrollTop(); a >= s ? e.addClass("fixed") : e.removeClass("fixed") }), $(function () { var e = $(".header--sticky"); O.on("resize", function () { if (O.width() > I) return e.removeClass("no-stick"); e.addClass("no-stick") }).trigger("resize") }), O.on("resize", function () { $(".header").each(function () { if ($(window).width() > I) { var e = $(this); e.css("min-height", e.outerHeight()) } if ($(window).width() <= I) { var e = $(this); e.css("min-height", "1px") } }), $(".site-wraper").each(function () { var e = $(".offset-topbar"), a = $(".page-contaiter"); a.css("padding-top", e.outerHeight()) }) }), l = $(".sidebar-menu_btn"), r = $(".sidebar-menu"), c = "sidebar-menu-open", d = "cart-active", u = function () { l.removeClass("active"), r.removeClass(c), l.parent().removeClass(d) }, $(".sidebar-close-icon").on("click", function (e) { u() }), $(".search-menu_btn, .cart-menu_btn").on("click", function (e) { u() }), l.on("click", function (e) { e.stopPropagation(), l.toggleClass("active"), r.toggleClass(c), l.parent().toggleClass(d) }), H.on("click touchstart", function (e) { $(e.target).closest(".sidebar-menu, .sidebar-menu_btn").length || u() }), f = $(".search-menu_btn"), h = $(".search-menu-bar"), g = $(".search-close-icon"), m = "active", p = "search-menu-open", v = "search-active", w = function () { h.removeClass(p), h.siblings(f).removeClass(m), h.parent().removeClass(v) }, f.on("click", function (e) { e.stopPropagation(), $(this).hasClass(m) ? ($(this).removeClass(m), $(this).siblings(h).removeClass(p), $(this).parent().removeClass(v)) : (f.removeClass(m).siblings(h).removeClass(p).parent().removeClass(v), $(this).addClass(m), $(this).siblings(h).addClass(p), $(this).parent().addClass(v), $("input.seach-input").focus()) }), g.on("click", function (e) { w() }), $(".cart-menu_btn, .sidebar-menu_btn").on("click", function (e) { w() }), H.on("click touchstart", function (e) { $(e.target).closest(h, f).length || (f.removeClass(m), h.removeClass(p), f.parent().removeClass(v), e.stopPropagation()) }), C = $(".cart-menu_btn"), b = $(".cart-menu-bar"), x = $(".cart-close-icon"), k = "active", y = "cart-menu-open", S = "cart-active", T = function () { b.removeClass(y), b.siblings(C).removeClass(k), b.parent().removeClass(S) }, C.on("click", function (e) { e.stopPropagation(), $(this).hasClass(k) ? ($(this).removeClass(k), $(this).siblings(b).removeClass(y), $(this).parent().removeClass(S)) : (C.removeClass(k).siblings(b).removeClass(y).parent().removeClass(S), $(this).addClass(k), $(this).siblings(b).addClass(y), $(this).parent().addClass(S)) }), x.on("click", function (e) { T() }), $(".search-menu_btn, .sidebar-menu_btn").on("click", function (e) { T() }), H.on("click touchstart", function (e) { $(e.target).closest(b, C).length || (C.removeClass(k), b.removeClass(y), C.parent().removeClass(S), e.stopPropagation()) }), $(".slide-bg-image, .bg-image").each(function (e) { $(this).attr("data-background-img") && $(this).css("background-image", "url(" + $(this).data("background-img") + ")") }), $(".parallax").each(function () { var e = $(this); $(window).scroll(function () { N(e) }), N(e) }), P = $(window).width() >= 1024 ? "position" : "transform", $(window).stellar({ responsive: !0, positionProperty: P, horizontalScrolling: !1 }), M(), $(".accordion-title").click(function (e) { $(this).next().slideToggle("easeOut"), $(this).toggleClass("active"), $("accordion-title").toggleClass("active"), $(".accordion-content").not($(this).next()).slideUp("easeIn"), $(".accordion-title").not($(this)).removeClass("active") }), $(".accordion-content").addClass("defualt-hidden"), $(function () { $(".tabs").tabs() }), $(function () { $("#range-slider").slider({ range: !0, min: 0, max: 500, values: [0, 300], slide: function (e, a) { $(".price-amount-from").text("$" + a.values[0]), $(".price-amount-to").text("$" + a.values[1]) } }), $(".price-amount-from").text("$" + $("#range-slider").slider("values", 0)), $(".price-amount-to").text("$" + $("#range-slider").slider("values", 1)) }) });