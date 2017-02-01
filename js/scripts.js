$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        var indexMainNavLink;

        $(".main-nav-link").bind({
          mouseenter: function() {
            
            indexMainNavLink = $(".main-nav-link").index(this);

            $(".main-nav-link:eq("+ ( indexMainNavLink + 1 ) +")").addClass("pseudo");

          },
          mouseleave: function() {

            indexMainNavLink = $(".main-nav-link").index(this);

            $(".main-nav-link:eq("+ ( indexMainNavLink + 1 ) +")").removeClass("pseudo");

          }

        });


    });


});
