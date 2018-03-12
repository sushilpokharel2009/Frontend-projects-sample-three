/*! jQuery Sticky Header - v1.0.1 
 *
 * jQuery Sticky Header creates a sticky header on-demand.
 *
 * Copyright (c) 2014 Pinch Of Code <info@pinchofcode.com>
 * GPLv3 Licensed
 *
 * Date: Sat Jun 14 2014 15:05:53 PM GMT+0200
 */
(function($, window, document) {
    "use strict";
    $.StickyHeader = function(el, options) {
        var sticky = this;
        sticky.el = $(el);
        sticky.top = 50;
        sticky.init = function() {
            sticky.options = $.extend({}, $.StickyHeader.defaults, options);
            if (typeof sticky.options.afterInit === "function") {
                sticky.options.afterInit.apply(this, [ sticky.el ]);
            }
            if (sticky.el.length > 0) {
                sticky.hide();
                sticky.el.css({
                    position: "fixed",
                    left: 0
                });
                if (sticky.options.effect === "move") {
                    sticky.el.css("top", "-" + (sticky.el.outerHeight() + sticky.top) + "px");
                } else {
                    sticky.el.css("top", 0);
                }
                sticky.sticky();
            }
        };
        sticky.sticky = function() {
            var lastScrollTop = 0, delta = 5;
            if (sticky.options.effect === "move") {
                sticky.close();
                sticky.el.css({
                    top: 0,
                    "padding-top": sticky.top,
                    "-webkit-transition": sticky.options.speed + "ms " + sticky.getEasing(sticky.options.easing),
                    transition: sticky.options.speed + "ms " + sticky.getEasing(sticky.options.easing)
                });
            }
            $(window).scroll(function() {
                var scroll = sticky.getCurrentScroll(), st = $(this).scrollTop();
                if (Math.abs(lastScrollTop - st) <= delta) {
                    return;
                }
                if (st < lastScrollTop) {
                    if (scroll >= sticky.el.outerHeight() + sticky.top) {
                        sticky.open();
                    } else {
                        sticky.close();
                    }
                } else {
                    sticky.close();
                }
                lastScrollTop = st;
            });
        };
        sticky.hide = function() {
            if (sticky.options.effect !== "move") {
                sticky.el.hide();
            } else {
                sticky.el.css({
                    "-webkit-transform": "translateY(-" + (sticky.el.outerHeight() + sticky.top) + "px)",
                    transform: "translateY(-" + (sticky.el.outerHeight() + sticky.top) + "px)"
                });
            }
            sticky.el.addClass("hidden");
        };
        sticky.getCurrentScroll = function() {
            return window.pageYOffset || document.documentElement.scrollTop;
        };
        sticky.open = function() {
            switch (sticky.options.effect) {
              case "fade":
                sticky.openFade();
                break;

              case "slide":
                sticky.openSlide();
                break;

              case "move":
                sticky.openMove();
                break;

              default:
                sticky.openMove();
                break;
            }
            sticky.el.addClass("visible").removeClass("hidden");
            if (typeof sticky.options.onOpen === "function") {
                sticky.options.onOpen.apply(this, [ sticky.el ]);
            }
        };
        sticky.openFade = function() {
            sticky.el.fadeIn(sticky.options.speed);
        };
        sticky.openSlide = function() {
            sticky.el.slideDown(sticky.options.speed);
        };
        sticky.openMove = function() {
            sticky.el.css({
                "-webkit-transform": "translateY(-" + sticky.top + "px)",
                transform: "translateY(-" + sticky.top + "px)"
            });
        };
        sticky.close = function() {
            switch (sticky.options.effect) {
              case "fade":
                sticky.closeFade();
                break;

              case "slide":
                sticky.closeSlide();
                break;

              case "move":
                sticky.closeMove();
                break;

              default:
                sticky.closeMove();
                break;
            }
            sticky.el.addClass("hidden").removeClass("visible");
            if (typeof sticky.options.onClose === "function") {
                sticky.options.onClose.apply(this, [ sticky.el ]);
            }
        };
        sticky.closeFade = function() {
            sticky.el.fadeOut(sticky.options.speed);
        };
        sticky.closeSlide = function() {
            sticky.el.slideUp(sticky.options.speed);
        };
        sticky.closeMove = function() {
            sticky.el.css({
                "-webkit-transform": "translateY(-" + (sticky.el.outerHeight() + sticky.top) + "px)",
                transform: "translateY(-" + (sticky.el.outerHeight() + sticky.top) + "px)"
            });
        };
        sticky.getEasing = function(easing) {
            var ret_ease = null;
            switch (easing) {
              case "linear":
                ret_ease = "cubic-bezier(0.250, 0.250, 0.750, 0.750)";
                break;

              case "ease":
                ret_ease = "cubic-bezier(0.250, 0.100, 0.250, 1.000)";
                break;

              case "ease-in":
                ret_ease = "cubic-bezier(0.420, 0.000, 1.000, 1.000)";
                break;

              case "ease-out":
                ret_ease = "cubic-bezier(0.000, 0.000, 0.580, 1.000)";
                break;

              case "ease-in-out":
                ret_ease = "cubic-bezier(0.420, 0.000, 0.580, 1.000)";
                break;

              case "easeInQuad":
                ret_ease = "cubic-bezier(0.550, 0.085, 0.680, 0.530)";
                break;

              case "easeInCubic":
                ret_ease = "cubic-bezier(0.550, 0.055, 0.675, 0.190)";
                break;

              case "easeInQuart":
                ret_ease = "cubic-bezier(0.895, 0.030, 0.685, 0.220)";
                break;

              case "easeInQuint":
                ret_ease = "cubic-bezier(0.755, 0.050, 0.855, 0.060)";
                break;

              case "easeInSine":
                ret_ease = "cubic-bezier(0.470, 0.000, 0.745, 0.715)";
                break;

              case "easeInExpo":
                ret_ease = "cubic-bezier(0.950, 0.050, 0.795, 0.035)";
                break;

              case "easeInCirc":
                ret_ease = "cubic-bezier(0.600, 0.040, 0.980, 0.335)";
                break;

              case "easeInBack":
                ret_ease = "cubic-bezier(0.600, -0.280, 0.735, 0.045)";
                break;

              case "easeOutQuad":
                ret_ease = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
                break;

              case "easeOutCubic":
                ret_ease = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";
                break;

              case "easeOutQuart":
                ret_ease = "cubic-bezier(0.165, 0.840, 0.440, 1.000)";
                break;

              case "easeOutQuint":
                ret_ease = "cubic-bezier(0.230, 1.000, 0.320, 1.000)";
                break;

              case "easeOutSine":
                ret_ease = "cubic-bezier(0.390, 0.575, 0.565, 1.000)";
                break;

              case "easeOutExpo":
                ret_ease = "cubic-bezier(0.190, 1.000, 0.220, 1.000)";
                break;

              case "easeOutCirc":
                ret_ease = "cubic-bezier(0.075, 0.820, 0.165, 1.000)";
                break;

              case "easeOutBack":
                ret_ease = "cubic-bezier(0.175, 0.885, 0.320, 1.275)";
                break;

              case "easeInOutQuad":
                ret_ease = "cubic-bezier(0.455, 0.030, 0.515, 0.955)";
                break;

              case "easeInOutCubic":
                ret_ease = "cubic-bezier(0.645, 0.045, 0.355, 1.000)";
                break;

              case "easeInOutQuart":
                ret_ease = "cubic-bezier(0.770, 0.000, 0.175, 1.000)";
                break;

              case "easeInOutQuint":
                ret_ease = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
                break;

              case "easeInOutSine":
                ret_ease = "cubic-bezier(0.445, 0.050, 0.550, 0.950)";
                break;

              case "easeInOutExpo":
                ret_ease = "cubic-bezier(1.000, 0.000, 0.000, 1.000)";
                break;

              case "easeInOutCirc":
                ret_ease = "cubic-bezier(0.785, 0.135, 0.150, 0.860)";
                break;

              case "easeInOutBack":
                ret_ease = "cubic-bezier(0.680, -0.550, 0.265, 1.550)";
                break;

              default:
                ret_ease = easing;
                break;
            }
            return ret_ease;
        };
        return sticky;
    };
    $.StickyHeader.defaults = {
        effect: "move",
        easing: "ease",
        speed: 350,
        afterInit: false,
        onOpen: false,
        onClose: false
    };
    $.fn.stickyHeader = function(options) {
        return this.each(function() {
            if (undefined === $(this).data("stickyHeader")) {
                var sticky = new $.StickyHeader(this, options);
                $(this).data("stickyHeader", sticky);
                sticky.init();
            }
        });
    };
})(jQuery, window, document);