$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    // bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    var popupClass;

    getScrollToTopBtn();

    getScrollHeaderPosition();

    $(window).resize(function() { 


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // ---------------------

        getScrollToTopBtn();

        getScrollHeaderPosition();


        // -----------------------------------------

        $("." + popupClass).css({"left" : ( $(window).width() - $("." + popupClass).width() ) / 2 + "px"});

        $("." + popupClass).css({"top" : ( $(window).height() - $("." + popupClass).outerHeight(true) ) / 2 + "px"});

        // ----------------------------------------

    });


    $(document).scroll(function() {

        getScrollToTopBtn();

        getScrollHeaderPosition();

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

    $(".callback").click(function(popupCallback) {

        popupCallback.preventDefault();

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

    $(".respmenubtn").click(function() {

        if( $(".main-nav-list-box").is(":hidden") ) {

            $(".main-nav-list-box").fadeIn(300);

        }

    });


    $(".hide-main-nav").click(function() {

        if( $(".main-nav-list-box").is(":visible") ) {

            $(".main-nav-list-box").fadeOut(300);
            
        }

    });

    // -----------------------------------------------------------

    $(function() {

        previewPhotoPath = "img/";

        $(".img-modal").click(function() {

            $(".modal-popup").fadeIn(300);

            bigPhotoSrc = $(this).attr("src");

            console.log(bigPhotoSrc);

            indexOfSlashBigPhoto = bigPhotoSrc.lastIndexOf("/");

            nameFileBigPhoto = bigPhotoSrc.slice(indexOfSlashBigPhoto + 1);

            console.log(nameFileBigPhoto);

            $(".big-photo").attr("src", previewPhotoPath + nameFileBigPhoto);

            if( $(".big-photo").height() >= ( $(window).height() * .9 ) ) {

                $(".big-photo").addClass("adapt-height");

            }

        });

        $(".modal-popup-bg, .close-popup-photo").click(function() {

            $(".modal-popup").fadeOut(300);

            setTimeout(function() {

                if( $(".big-photo").hasClass("adapt-height") ) {

                    $(".big-photo").removeClass("adapt-height");

                }

            }, 300);

        });

    });

    // -----------------------------------------------------------

    function getScrollHeaderPosition() {

        if ( $(window).scrollTop() > $(".header").height() && bodyWidth <= 768 ) {

            $(".main-nav").addClass("fixed");

        } else {

            $(".main-nav").removeClass("fixed");

        }

    }


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

        if ($(window).scrollTop() > $(".header").height()) {

            $(".scroll-top").fadeIn();

        } else {

            $(".scroll-top").fadeOut();

        }

    }




});
