    // +
    jQuery('#navbar-toggle').on("click", function(event) {
        jQuery(this).toggleClass("active");
        jQuery('.site-sidebar').toggleClass("show");
      });
  
      $(window).scroll(function(){
          if ($(window).scrollTop() >= 500) {
              $('.header__menu').addClass('fixed-header');
          } else {
              $('.header__menu').removeClass('fixed-header');
          }
      });

      jQuery('#navbar-toggle').on("click", function(event) {
        jQuery(this).toggleClass("active");
        jQuery('.site-sidebar').toggleClass("show");
      });

    //   -

      jQuery('#navbar-toggle').on("click", function(event) {
        jQuery(this).toggleClass("active");
        jQuery('.site-sidebar').toggleClass("show");
      });
  
      $(window).scroll(function(){
          if ($(window).scrollTop() >= 3000) {
              $('.header__menu').addClass('fixed__header');
          } else {
              $('.header__menu').removeClass('fixed__header');
          }
      });

      jQuery('#navbar-toggle').on("click", function(event) {
        jQuery(this).toggleClass("active");
        jQuery('.site-sidebar').toggleClass("show");
      });
