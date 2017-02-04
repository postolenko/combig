$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var popupClass;

    getScrollToTopBtn();

    $(window).resize(function() { 


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------

        getScrollToTopBtn();


        // $("." + popupClass).css({"top" : ( $(window).height() - $("." + popupClass).outerHeight(true) ) / 2 + "px"});

        // getPopupPosition(popupClass);

        $("." + popupClass).css({"left" : ( $(window).width() - $("." + popupClass).width() ) / 2 + "px"});

        $("." + popupClass).css({"top" : ( $(window).height() - $("." + popupClass).outerHeight(true) ) / 2 + "px"});

        // ----------------------------------------

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

    // -----------------------------------------------------------

    $(function() {

        $("ul.with-num-mark li").prepend("<span class='item-num-col'><i class='item-num'></i></span>");

        var countNumMarkLists = $("ul.with-num-mark").length - 1;

        var markNumListsIndex;

        var markNumListsItemIndex;

        var countNumItemsList;

        for( markNumListsItemIndex = 0; markNumListsItemIndex <= countNumMarkLists; markNumListsItemIndex++ ) {

            countNumItemsList = $("ul.with-num-mark:eq("+ markNumListsItemIndex +") li").length - 1;

            for( markListsItemIndex = 0; markListsItemIndex <= countNumItemsList; markListsItemIndex++) {

                $("ul.with-num-mark:eq("+ markNumListsItemIndex +") li:eq("+ markListsItemIndex +") .item-num").text(markListsItemIndex + 1);

            }

        }

    });


    // -----------------------------------------------------------

    $(function() {

        $("ul.num-list li").prepend("<span class='num-list-index'></span>");

        var countNumMarkLists = $("ul.num-list").length - 1;

        var markNumListsIndex;

        var markNumListsItemIndex;

        var countNumItemsList;

        for( markNumListsItemIndex = 0; markNumListsItemIndex <= countNumMarkLists; markNumListsItemIndex++ ) {

            countNumItemsList = $("ul.num-list:eq("+ markNumListsItemIndex +") li").length - 1;

            for( markListsItemIndex = 0; markListsItemIndex <= countNumItemsList; markListsItemIndex++) {

                $("ul.num-list:eq("+ markNumListsItemIndex +") li:eq("+ markListsItemIndex +") .num-list-index").text( (markListsItemIndex + 1 ) + ".)" );

            }

        }

    });

    // -----------------------------------------------------------

    $(".callback").click(function() {

        $(".popup-sect").fadeIn(300);

        if($(this).hasClass("show-popup-callback")) {

            popupClass = "popup-callback";

        } else if($(this).hasClass("show-popup-callback-message")) {

            popupClass = "popup-callback-message";

        }

        $("." + popupClass).fadeIn(300);

        $("." + popupClass).css({"left" : ( $(window).width() - $("." + popupClass).width() ) / 2 + "px"});

        setTimeout(function() {

            $("." + popupClass).animate({"top" : ( $(window).height() - $("." + popupClass).outerHeight(true) ) / 2 + "px"}, 700);

        }, 300);

    });


    $(function() {

        $(".popup-bg, .close-popup").click(function() {

            $(".popup-sect").fadeOut(300);

            $("." + popupClass).fadeOut(300);

        });

    });


    // -----------------------------------------------------------

    // function getPopupPosition(popupClass) {

    //     $("." + popupClass).css({"left" : ( $(window).width() - $("." + popupClass).width() ) / 2 + "px"});

    //     setTimeout(function() {

    //         $("." + popupClass).animate({"top" : ( $(window).height() - $("." + popupClass).outerHeight(true) ) / 2 + "px"}, 700);

    //     }, 300);

    // }

    // -----------------------------------------------------------

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
