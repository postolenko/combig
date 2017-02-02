$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    getScrollToTopBtn();


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------

        getScrollToTopBtn();

    });


    $(document).scroll(function() {

        getScrollToTopBtn();

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


    $(function() {

        var accordeonIndex;

        var accordeonItemCount = $(".accordeon-item").length - 1;

        var parentAccordeonH;

        $(".accordeon-item-h").click(function() {

            parentAccordeonH = $(this).parent(".accordeon-item");

            if( parentAccordeonH.hasClass("active") ) {

                return false;

            } else {

                for( accordeonIndex = 0; accordeonIndex <= accordeonItemCount; accordeonIndex++) {

                    if( $(".accordeon-item:eq("+ accordeonIndex +")").hasClass("active") ) {

                        $(".accordeon-item:eq("+ accordeonIndex +") .accordeon-item-txt-wrapp").animate({"height" : 0 + "px"}, 300);

                        $(".accordeon-item:eq("+ accordeonIndex +")").removeClass("active");

                    }

                }                

                accordeonItemTxtHeight = $(this).next(".accordeon-item-txt-wrapp").children(".accordeon-item-txt").height();

                $(this).next(".accordeon-item-txt-wrapp").animate({"height" : accordeonItemTxtHeight + "px"}, 300);

                parentAccordeonH.addClass("active");

            }

        });

    });

    // При клике на кнопку " Вверх " подняться на вверхнюю позицию

    $(".scroll-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    // Показать - скрыть кнопку " Вверх "

    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $(".header").height() ) {

            $(".scroll-top").fadeIn();

        } else {

            $(".scroll-top").fadeOut();

        }

    }



});
