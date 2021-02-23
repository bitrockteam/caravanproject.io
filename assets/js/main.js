$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    // Navbar collapse on click
    $('.mainmenu-area #navbarNav .nav-link').on('click', function () {
          $('.navbar-collapse').collapse('hide');
    });

    // link will target id and scroll
    $(".mainmenu-area #navbarNav .nav-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate({
          scrollTop: $($anchor.attr("href")).offset().top - 80,
        },
          1000
        );
      event.preventDefault();
    });
       //scrollspy menu
       $('body').scrollspy({
        target: '#navbarNav',
        offset: 100
    });


    // WOW Js Active
    new WOW().init();

    //  How It Stacks Up Probucket
    $(".how-it-owl").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    //  How It Stacks Up Probucket
    $(".home-3-owl").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
        },
        767: {
          items: 1,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });

    //  Testomonial
    $(".testimonial-box").owlCarousel({
      center: true,
      items: 1,
      loop: true,
      stagePadding: 250,
      margin: 20,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      nav: true,
      dots: true,
      autoplay: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
          nav: false,
        },
        992: {
          items: 1,
          stagePadding: 150,
        },
        1200: {
          items: 1,
        },
      },
    });

    /*back to top-*/
    $(document).on("click", "#scrollUp", function () {
      $("html,body").animate({
        scrollTop: 0,
      },
        2000
      );
    });

    // sticky navigation menu
    var lastScrollTop = "";
    $(window).on("scroll", function () {
      var $window = $(window);
      if ($window.scrollTop() > 400) {
        $(".mainmenu-area").addClass("nav-fixed");
      } else {
        $(".mainmenu-area").removeClass("nav-fixed");
      }

      /*---------------------------
         back to top show / hide
     ---------------------------*/
      var st = $(this).scrollTop();
      if ($(window).scrollTop() > 1000) {
        $("#scrollUp").fadeIn();
      } else {
        $("#scrollUp").fadeOut();
      }
      lastScrollTop = st;
    });

    //   Magnific Popup Activation Probucket
    $(".youtube-video").magnificPopup({
      type: "video",
    });
  });

  $(window).on("load", function () {
    /*Preloader*/
    var preLoder = $("#preloader");
    preLoder.addClass("hide");
  });
});