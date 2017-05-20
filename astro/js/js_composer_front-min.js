function vc_plugin_flexslider(){}function vc_twitterBehaviour(){jQuery(".wpb_twitter_widget .tweets").each(function(t){var e=jQuery(this),i=e.attr("data-tw_name");tw_count=e.attr("data-tw_count"),e.tweet({username:i,join_text:"auto",avatar_size:0,count:tw_count,template:"{avatar}{join}{text}{time}",auto_join_text_default:"",auto_join_text_ed:"",auto_join_text_ing:"",auto_join_text_reply:"",auto_join_text_url:"",loading_text:'<span class="loading_tweets">loading tweets...</span>'})})}function vc_googleplus(){jQuery(".wpb_googleplus").length>0&&!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://apis.google.com/js/plusone.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}function vc_pinterest(){jQuery(".wpb_pinterest").length>0&&!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="http://assets.pinterest.com/js/pinit.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}function vc_progress_bar(){"undefined"!=typeof jQuery.fn.waypoint&&jQuery(".vc_progress_bar").waypoint(function(){jQuery(this).find(".vc_single_bar").each(function(t){var e=jQuery(this),i=e.find(".vc_bar"),n=i.data("percentage-value");setTimeout(function(){i.css({width:n+"%"})},200*t)})},{offset:"85%"})}function vc_waypoints(){"undefined"!=typeof jQuery.fn.waypoint&&(is_mobile()?jQuery(".wpb_animate_when_almost_visible").removeClass("wpb_animate_when_almost_visible"):jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation,.vrv_manual_anim)").waypoint(function(){var t=jQuery(this);if(t.is('[class*="delay-"]')){for(var e=t.attr("class").split(" "),i=0,n=0;n<e.length;n++)if("delay-"===e[n].substr(0,6)){i=e[n].substr(6,e[n].length);break}setTimeout(function(){t.addClass("wpb_start_animation")},parseInt(i,10)+100)}else setTimeout(function(){t.addClass("wpb_start_animation")},parseInt(i,10)+300)},{offset:"90%"}))}function vc_toggleBehaviour(){jQuery(".wpb_toggle").unbind("click").click(function(t){return jQuery(this).next().is(":animated")?!1:void(jQuery(this).hasClass("wpb_toggle_title_active")?jQuery(this).removeClass("wpb_toggle_title_active").next().slideUp(500):jQuery(this).addClass("wpb_toggle_title_active").next().slideDown(500))}),jQuery(".wpb_toggle_content").each(function(t){0==jQuery(this).next().is("h4.wpb_toggle")&&jQuery('<div class="last_toggle_el_margin"></div>').insertAfter(this)})}function vc_tabsBehaviour(t){jQuery(function($){$(document.body).off("click.preview","a")}),jQuery(".wpb_tabs, .wpb_tour").each(function(t){var e,i=jQuery(this).attr("data-interval"),n=[];e=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(t,e){},beforeActivate:function(t,e){var i=e.panel||e.newPanel;jQuery(window).trigger("debouncedresize"),jQuery(window).trigger("smartresize"),jQuery(i).parent().find("li.ui-state-default").not("li.ui-state-hover").stop().animate({backgroundColor:theme_options.background_color},200)},activate:function(t,e){var i=e.panel||e.newPanel;jQuery(window).trigger("debouncedresize"),jQuery(window).trigger("smartresize"),jQuery(i).parent().find("li.ui-state-default").not("li.ui-state-active,li.ui-state-hover").stop().animate({backgroundColor:theme_options.background_color},200)}}),jQuery(this).find(".wpb_tab").each(function(){n.push(this.id)})})}function vc_accordionBehaviour(){jQuery(".wpb_accordion").each(function(t){var e,i=jQuery(this).attr("data-interval"),n=!isNaN(jQuery(this).data("active-tab"))&&parseInt(jQuery(this).data("active-tab"))>0?parseInt(jQuery(this).data("active-tab"))-1:!1,a=n===!1||"yes"===jQuery(this).data("collapsible"),o={header:"icon-plus-3",activeHeader:"icon-minus-1"};e=jQuery(this).find(".wpb_accordion_wrapper").accordion({header:"> div > h3",icons:o,autoHeight:!1,heightStyle:"content",active:n,collapsible:!0,navigation:!0,activate:function(t,e){jQuery(window).trigger("debouncedresize"),jQuery(window).trigger("smartresize"),vc_carouselBehaviour()}})})}function vc_teaserGrid(){var t={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var e=jQuery(this),i=e.find(".wpb_thumbnails"),n=i.attr("data-layout-mode");i.isotope({itemSelector:".isotope-item",layoutMode:void 0==t[n]?"fitRows":t[n]}),e.find(".categories_filter a").data("isotope",i).click(function(t){t.preventDefault();var e=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),e.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){i.isotope("reLayout")})})}function vc_carouselBehaviour(){jQuery(".wpb_carousel").each(function(){var t=jQuery(this);if(t.data("carousel_enabled")!==!0&&t.is(":visible")){t.data("carousel_enabled",!0);var e=jQuery(this).width(),i=getColumnsCount(jQuery(this)),n=500;jQuery(this).hasClass("columns_count_1")&&(n=900);var a=jQuery(this).find(".wpb_thumbnails-fluid li");a.css({"margin-right":a.css("margin-left"),"margin-left":0}),jQuery(this).find(".wpb_wrapper:eq(0)").jCarouselLite({btnNext:jQuery(this).find(".next"),btnPrev:jQuery(this).find(".prev"),visible:i,speed:n}).width("100%");var o=jQuery(this).find("ul.wpb_thumbnails-fluid");o.width(o.width()+300),jQuery(window).resize(function(){var t=screen_size;screen_size=getSizeName(),t!=screen_size&&window.setTimeout("location.reload()",20)})}}),void 0!==window.Swiper&&jQuery(".swiper-container").each(function(){var t=jQuery(this),e,i=0,n=jQuery(this).data("settings");"vertical"===n.mode&&(t.find(".swiper-slide").each(function(){var t=jQuery(this).outerHeight(!0);t>i&&(i=t)}),t.height(i),t.css("overflow","hidden")),jQuery(window).resize(function(){t.find(".swiper-slide").each(function(){var t=jQuery(this).outerHeight(!0);t>i&&(i=t)}),t.height(i)}),e=jQuery(this).swiper(jQuery.extend(n,{onFirstInit:function(e){e.slides.length<2?t.find(".vc-arrow-left,.vc-arrow-right").hide():0===e.activeIndex&&e.params.loop!==!0?t.find(".vc-arrow-left").hide():t.find(".vc-arrow-left").show()},onSlideChangeStart:function(e){e.slides.length>1&&e.params.loop!==!0&&(0===e.activeIndex?t.find(".vc-arrow-left").hide():t.find(".vc-arrow-left").show(),e.slides.length-1===e.activeIndex?t.find(".vc-arrow-right").hide():t.find(".vc-arrow-right").show())}})),t.find(".vc-arrow-left").click(function(t){t.preventDefault(),e.swipePrev()}),t.find(".vc-arrow-right").click(function(t){t.preventDefault(),e.swipeNext()}),e.reInit()})}function vc_slidersBehaviour(){}function vc_prettyPhoto(){}function getColumnsCount(t){for(var e=!1,i=1;0==e;){if(t.hasClass("columns_count_"+i))return e=!0,i;i++}}function getSizeName(){var t="",e=jQuery(window).width();return e>1170?t="desktop_wide":e>960&&1169>e?t="desktop":e>768&&959>e?t="tablet":e>300&&767>e?t="mobile":300>e&&(t="mobile_portrait"),t}function loadScript(t,e,i){var n=document.createElement("script");n.type="text/javascript",n.readyState&&(n.onreadystatechange=function(){("loaded"==n.readyState||"complete"==n.readyState)&&(n.onreadystatechange=null,i())}),n.src=t,e.get(0).appendChild(n)}function wpb_prepare_tab_content(t,e){var i=e.panel||e.newPanel,n=i.find(".vc_pie_chart:not(.vc_ready)"),a=i.find('[data-ride="vc_carousel"]'),o,r;if(vc_carouselBehaviour(),vc_plugin_flexslider(i),n.length&&jQuery.fn.vcChat&&n.vcChat(),a.length&&jQuery.fn.carousel&&a.carousel("resizeAction"),o=i.find(".isotope"),r=i.find(".wpb_gmaps_widget"),o.length>0&&o.isotope("layout"),r.length&&!r.is(".map_ready")){var s=r.find("iframe");s.attr("src",s.attr("src")),r.addClass("map_ready")}i.parents(".isotope").length&&i.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){var t=["-webkit-","-o-","-moz-","-ms-",""];for(var e in t)t[e]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),jQuery(window).load(function(){});var vc_js=function(){vc_twitterBehaviour(),vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_googleplus(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),window.setTimeout(vc_waypoints,1500)};jQuery(document).ready(function($){}),"function"!=typeof window.vc_plugin_flexslider,"function"!=typeof window.vc_twitterBehaviour,"function"!=typeof window.vc_googleplus,"function"!=typeof window.vc_pinterest,"function"!=typeof window.vc_progress_bar,"function"!=typeof window.vc_waypoints,"function"!=typeof window.vc_toggleBehaviour,"function"!=typeof window.vc_tabsBehaviour,"function"!=typeof window.vc_accordionBehaviour,"function"!=typeof window.vc_teaserGrid,"function"!=typeof window.vc_carouselBehaviour,"function"!=typeof window.vc_slidersBehaviour,"function"!=typeof window.vc_prettyPhoto;var screen_size=getSizeName();+function($){"use strict";function t(t,i){var n;return n=Array.prototype.slice.call(arguments,1),this.each(function(){var a,o;a=$(this),o=a.data("vc.accordion"),o||(o=new e(a,$.extend(!0,{},i)),a.data("vc.accordion",o)),"string"==typeof t&&o[t].apply(o,n)})}var e,i,n,a;e=function(t,e){this.$element=t,this.activeClass="vc_active",this.animatingClass="vc_animating",this.useCacheFlag=void 0,this.$target=void 0,this.$targetContent=void 0,this.selector=void 0,this.$container=void 0,this.animationDuration=void 0,this.index=0},e.transitionEvent=function(){var t,e,i;i=document.createElement("vcFakeElement"),e={transition:"transitionend",MSTransition:"msTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if("undefined"!=typeof i.style[t])return e[t]},e.emulateTransitionEnd=function(t,i){var n,a;a=!1,i||(i=250),t.one(e.transitionName,function(){a=!0}),n=function(){a||t.trigger(e.transitionName)},setTimeout(n,i)},e.DEFAULT_TYPE="collapse",e.transitionName=e.transitionEvent(),e.prototype.controller=function(i){var n;n=this.$element,"string"!=typeof i&&(i=n.data("vcAction")||this.getContainer().data("vcAction")),"undefined"==typeof i&&(i=e.DEFAULT_TYPE),"string"==typeof i&&t.call(n,i)},e.prototype.isCacheUsed=function(){var t,e;return e=this,t=function(){return!1!==e.$element.data("vcUseCache")},"undefined"==typeof this.useCacheFlag&&(this.useCacheFlag=t()),this.useCacheFlag},e.prototype.getSelector=function(){var t,e;return e=this.$element,t=function(){var t;return t=e.data("vcTarget"),t||(t=e.attr("href")),t},this.isCacheUsed()?("undefined"==typeof this.selector&&(this.selector=t()),this.selector):t()},e.prototype.findContainer=function(){var t;return t=this.$element.closest(this.$element.data("vcContainer")),t.length||(t=$("body")),t},e.prototype.getContainer=function(){return this.isCacheUsed()?("undefined"==typeof this.$container&&(this.$container=this.findContainer()),this.$container):this.findContainer()},e.prototype.getTarget=function(){var t,e,i;return e=this,t=e.getSelector(),i=function(){var i;return i=e.getContainer().find(t),i.length||(i=e.getContainer().filter(t)),i},this.isCacheUsed()?("undefined"==typeof this.$target&&(this.$target=i()),this.$target):i()},e.prototype.getTargetContent=function(){var t,e;return t=this.getTarget(),this.isCacheUsed()?("undefined"==typeof this.$targetContent&&(e=t,t.data("vcContent")&&(e=t.find(t.data("vcContent")),e.length||(e=t)),this.$targetContent=e),this.$targetContent):t.data("vcContent")&&(e=t.find(t.data("vcContent")),e.length)?e:t},e.prototype.getTriggers=function(){var t;return t=0,this.getContainer().find("[data-vc-accordion]").each(function(){var e,i;i=$(this),e=i.data("vc.accordion"),"undefined"==typeof e&&(i.vcAccordion(),e=i.data("vc.accordion")),e&&e.setIndex&&e.setIndex(t++)})},e.prototype.setIndex=function(t){this.index=t},e.prototype.getIndex=function(){return this.index},e.prototype.triggerEvent=function(t){var e;"string"==typeof t&&(e=$.Event(t),this.$element.trigger(e))},e.prototype.getActiveTriggers=function(){var t;return t=this.getTriggers().filter(function(){var t,e;return t=$(this),e=t.data("vc.accordion"),e.getTarget().hasClass(e.activeClass)})},e.prototype.changeLocationHash=function(){var t,e;e=this.getTarget(),e.length&&(t=e.attr("id")),t&&(history.pushState?history.pushState(null,null,"#"+t):location.hash="#"+t)},e.prototype.isActive=function(){return this.getTarget().hasClass(this.activeClass)},e.prototype.getAnimationDuration=function(){var t,i;return i=this,t=function(){var t,n;return"undefined"==typeof e.transitionName?"0s":(t=i.getTargetContent(),n=t.css("transition-duration"),n=n.split(",")[0])},this.isCacheUsed()?("undefined"==typeof this.animationDuration&&(this.animationDuration=t()),this.animationDuration):t()},e.prototype.getAnimationDurationMilliseconds=function(){var t;return t=this.getAnimationDuration(),"ms"===t.substr(-2)?parseInt(t):"s"===t.substr(-1)?Math.round(1e3*parseFloat(t)):void 0},e.prototype.isAnimated=function(){return parseFloat(this.getAnimationDuration())>0},e.prototype.show=function(){var t,i,n;i=this,t=i.getTarget(),n=i.getTargetContent(),i.isActive()||(i.isAnimated()?(i.triggerEvent("beforeShow.vc.accordion"),t.queue(function(a){n.one(e.transitionName,function(){t.removeClass(i.animatingClass),n.attr("style",""),i.triggerEvent("afterShow.vc.accordion")}),e.emulateTransitionEnd(n,i.getAnimationDurationMilliseconds()+100),a()}).queue(function(t){n.attr("style",""),n.css({position:"absolute",visibility:"hidden",display:"block"});var e=n.height();n.data("vcHeight",e),n.attr("style",""),t()}).queue(function(t){n.height(0),n.css({"padding-top":0,"padding-bottom":0}),t()}).queue(function(e){t.addClass(i.animatingClass),t.addClass(i.activeClass),i.changeLocationHash(),i.triggerEvent("show.vc.accordion"),e()}).queue(function(t){var e=n.data("vcHeight");n.animate({height:e},{duration:i.getAnimationDurationMilliseconds(),complete:function(){n.data("events")||n.attr("style","")}}),n.css({"padding-top":"","padding-bottom":""}),t()})):(t.addClass(i.activeClass),i.triggerEvent("show.vc.accordion")))},e.prototype.hide=function(){var t,i,n;i=this,t=i.getTarget(),n=i.getTargetContent(),i.isActive()&&(i.isAnimated()?(i.triggerEvent("beforeHide.vc.accordion"),t.queue(function(a){n.one(e.transitionName,function(){t.removeClass(i.animatingClass),n.attr("style",""),i.triggerEvent("afterHide.vc.accordion")}),e.emulateTransitionEnd(n,i.getAnimationDurationMilliseconds()+100),a()}).queue(function(e){t.addClass(i.animatingClass),t.removeClass(i.activeClass),i.triggerEvent("hide.vc.accordion"),e()}).queue(function(t){var e=n.height();n.height(e),t()}).queue(function(t){n.animate({height:0},i.getAnimationDurationMilliseconds()),n.css({"padding-top":0,"padding-bottom":0}),t()})):(t.removeClass(i.activeClass),i.triggerEvent("hide.vc.accordion")))},e.prototype.toggle=function(){var e;e=this.$element,this.isActive()?t.call(e,"hide"):t.call(e,"show")},e.prototype.dropdown=function(){var e,i;i=this,e=this.$element,this.isActive()?t.call(e,"hide"):(t.call(e,"show"),$(document).on("click.vc.accordion.data-api.dropdown",function(n){var a;a=$(n.target).closest(i.getTarget()).length,a||(t.call(e,"hide"),$(document).off(n))}))},e.prototype.collapse=function(){var e,i;e=this.$element,i=this.getActiveTriggers().filter(function(){return e[0]!==this}),i.length&&t.call(i,"hide"),t.call(e,"show")},e.prototype.collapseAll=function(){var e,i;e=this.$element,i=this.getActiveTriggers().filter(function(){return e[0]!==this}),i.length&&t.call(i,"hide"),t.call(e,"toggle")},e.prototype.showNext=function(){var e,i,n;if(e=this.getTriggers(),i=this.getActiveTriggers(),e.length){if(i.length){var a;a=i.eq(i.length-1).vcAccordion().data("vc.accordion"),a&&a.getIndex&&(n=a.getIndex())}n>-1&&n+1<e.length?t.call(e.eq(n+1),"controller"):t.call(e.eq(0),"controller")}},e.prototype.showPrev=function(){var e,i,n;if(e=this.getTriggers(),i=this.getActiveTriggers(),e.length){if(i.length){var a;a=i.eq(i.length-1).vcAccordion().data("vc.accordion"),a&&a.getIndex&&(n=a.getIndex())}n>-1?n-1>=0?t.call(e.eq(n-1),"controller"):t.call(e.eq(e.length-1),"controller"):t.call(e.eq(0),"controller")}},e.prototype.showAt=function(e){var i;i=this.getTriggers(),i.length&&e&&e<i.length&&t.call(i.eq(e),"controller")},e.prototype.scrollToActive=function(){var t,e,i,n,a;t=this,i=1,n=300,a=300,e=$(this.getTarget()),e.length&&this.$element.length&&setTimeout(function(){var n=e.offset().top-$(window).scrollTop()-t.$element.outerHeight()*i;0>n&&$("html, body").animate({scrollTop:e.offset().top-t.$element.outerHeight()*i},a)},n)},n=$.fn.vcAccordion,$.fn.vcAccordion=t,$.fn.vcAccordion.Constructor=e,$.fn.vcAccordion.noConflict=function(){return $.fn.vcAccordion=n,this},i=function(e){var i;i=$(this),e.preventDefault(),t.call(i,"controller")},a=function(){},window.addEventListener("hashchange",a,!1),$(document).on("click.vc.accordion.data-api","[data-vc-accordion]",i),$(document).ready(a),$(document).on("afterShow.vc.accordion",function(e){t.call($(e.target),"scrollToActive")})}(window.jQuery),+function($){"use strict";function t(t,i){var n;return n=Array.prototype.slice.call(arguments,1),this.each(function(){var a,o;a=$(this),o=a.data("vc.tabs"),o||(o=new e(a,$.extend(!0,{},i)),a.data("vc.tabs",o)),"string"==typeof t&&o[t].apply(o,n)})}var e,i,n,a;e=function(t,e){this.$element=$(t),this.activeClass="vc_active",this.tabSelector="[data-vc-tab]",this.useCacheFlag=void 0,this.$target=void 0,this.selector=void 0,this.$targetTab=void 0,this.$relatedAccordion=void 0,this.$container=void 0},e.prototype.isCacheUsed=function(){var t,e;return e=this,t=function(){return!1!==e.$element.data("vcUseCache")},void 0===this.useCacheFlag&&(this.useCacheFlag=t()),this.useCacheFlag},e.prototype.getContainer=function(){return this.isCacheUsed()?(void 0===this.$container&&(this.$container=this.findContainer()),this.$container):this.findContainer()},e.prototype.findContainer=function(){var t;return t=this.$element.closest(this.$element.data("vcContainer")),t.length||(t=$("body")),t},e.prototype.getContainerAccordion=function(){return this.getContainer().find("[data-vc-accordion]")},e.prototype.getSelector=function(){var t,e;return e=this.$element,t=function(){var t;return t=e.data("vcTarget"),t||(t=e.attr("href")),t},this.isCacheUsed()?(void 0===this.selector&&(this.selector=t()),this.selector):t()},e.prototype.getTarget=function(){var t;return t=this.getSelector(),this.isCacheUsed()?(void 0===this.$target&&(this.$target=this.getContainer().find(t)),this.$target):this.getContainer().find(t)},e.prototype.getRelatedAccordion=function(){var t,e;return t=this,e=function(){var e;return e=t.getContainerAccordion().filter(function(){var e,i;return e=$(this),i=e.data("vc.accordion"),void 0===i&&(e.vcAccordion(),i=e.data("vc.accordion")),t.getSelector()===i.getSelector()}),e.length?e:void 0},this.isCacheUsed()?(void 0===this.$relatedAccordion&&(this.$relatedAccordion=e()),this.$relatedAccordion):e()},e.prototype.triggerEvent=function(t){var e;"string"==typeof t&&(e=$.Event(t),this.$element.trigger(e))},e.prototype.getTargetTab=function(){var t;return t=this.$element,this.isCacheUsed()?(void 0===this.$targetTab&&(this.$targetTab=t.closest(this.tabSelector)),this.$targetTab):t.closest(this.tabSelector)},e.prototype.tabClick=function(){this.getRelatedAccordion().trigger("click")},e.prototype.show=function(){this.getTargetTab().hasClass(this.activeClass)||(this.triggerEvent("show.vc.tab"),this.getTargetTab().addClass(this.activeClass))},e.prototype.hide=function(){this.getTargetTab().hasClass(this.activeClass)&&(this.triggerEvent("hide.vc.tab"),this.getTargetTab().removeClass(this.activeClass))},i=$.fn.vcTabs,$.fn.vcTabs=t,$.fn.vcTabs.Constructor=e,$.fn.vcTabs.noConflict=function(){return $.fn.vcTabs=i,this},n=function(e){var i;i=$(this),e.preventDefault(),t.call(i,"tabClick")},a=function(e){var i;i=$(e.target).data("vc.accordion"),void 0===i.getRelatedTab&&(i.getRelatedTab=function(){var t;return t=function(){var t;return t=i.getContainer().find("[data-vc-tabs]").filter(function(){var t,e;return t=$(this),e=t.data("vc.accordion"),void 0===e&&t.vcAccordion(),e=t.data("vc.accordion"),e.getSelector()===i.getSelector()})},i.isCacheUsed()?(void 0===i.relatedTab&&(i.relatedTab=t()),i.relatedTab):t()}),t.call(i.getRelatedTab(),e.type)},$(document).on("click.vc.tabs.data-api","[data-vc-tabs]",n),$(document).on("show.vc.accordion hide.vc.accordion",a)}(window.jQuery),+function($){"use strict";function t(){$("[data-vc-tta-autoplay]").each(function(){$(this).vcTtaAutoPlay()})}var e,i,n;e=function(t,e){var n;return n=Array.prototype.slice.call(arguments,1),this.each(function(){var a,o;a=$(this),o=a.data("vc.tta.autoplay"),o||(o=new i(a,$.extend(!0,{},i.DEFAULTS,a.data("vc-tta-autoplay"),e)),a.data("vc.tta.autoplay",o)),"string"==typeof t?o[t].apply(o,n):o.start(n)})},i=function(t,e){this.$element=t,this.options=e},i.DEFAULTS={delay:5e3,pauseOnHover:!0,stopOnClick:!0},i.prototype.show=function(){this.$element.find("[data-vc-accordion]:eq(0)").vcAccordion("showNext")},i.prototype.hasTimer=function(){return void 0!==this.$element.data("vc.tta.autoplay.timer")},i.prototype.setTimer=function(t){this.$element.data("vc.tta.autoplay.timer",t)},i.prototype.getTimer=function(){return this.$element.data("vc.tta.autoplay.timer")},i.prototype.deleteTimer=function(){this.$element.removeData("vc.tta.autoplay.timer")},i.prototype.start=function(){function t(t){t.preventDefault&&t.preventDefault(),a.hasTimer()&&e.call(n,"stop")}function i(t){t.preventDefault&&t.preventDefault(),a.hasTimer()&&e.call(n,"mouseleave"===t.type?"resume":"pause")}var n,a;n=this.$element,a=this,this.hasTimer()||(this.setTimer(window.setInterval(this.show.bind(this),this.options.delay)),this.options.stopOnClick&&n.on("click.vc.tta.autoplay.data-api","[data-vc-accordion]",t),this.options.pauseOnHover&&n.hover(i))},i.prototype.resume=function(){this.hasTimer()&&this.setTimer(window.setInterval(this.show.bind(this),this.options.delay))},i.prototype.stop=function(){this.pause(),this.deleteTimer(),this.$element.off("click.vc.tta.autoplay.data-api mouseenter mouseleave")},i.prototype.pause=function(){var t;t=this.getTimer(),void 0!==t&&window.clearInterval(t)},n=$.fn.vcTtaAutoPlay,$.fn.vcTtaAutoPlay=e,$.fn.vcTtaAutoPlay.Constructor=i,$.fn.vcTtaAutoPlay.noConflict=function(){return $.fn.vcTtaAutoPlay=n,this},$(document).ready(t)}(window.jQuery),function(t){var e=function(e,i){var n=t.extend({},t.fn.nivoSlider.defaults,i),a={currentSlide:0,currentImage:"",totalSlides:0,running:!1,paused:!1,stop:!1,controlNavEl:!1},o=t(e);o.data("nivo:vars",a).addClass("nivoSlider");var r=o.children();r.each(function(){var e=t(this),i="";e.is("img")||(e.is("a")&&(e.addClass("nivo-imageLink"),i=e),e=e.find("img:first"));var n=0===n?e.attr("width"):e.width(),o=0===o?e.attr("height"):e.height();""!==i&&i.css("display","none"),e.css("display","none"),a.totalSlides++}),n.randomStart&&(n.startSlide=Math.floor(Math.random()*a.totalSlides)),n.startSlide>0&&(n.startSlide>=a.totalSlides&&(n.startSlide=a.totalSlides-1),a.currentSlide=n.startSlide),t(r[a.currentSlide]).is("img")?a.currentImage=t(r[a.currentSlide]):a.currentImage=t(r[a.currentSlide]).find("img:first"),t(r[a.currentSlide]).is("a")&&t(r[a.currentSlide]).css("display","block");var s=t("<img/>").addClass("nivo-main-image");s.attr("src",a.currentImage.attr("src")).show(),o.append(s),t(window).resize(function(){o.children("img").width(o.width()),s.attr("src",a.currentImage.attr("src")),s.stop().height("auto"),t(".nivo-slice").remove(),t(".nivo-box").remove()}),o.append(t('<div class="nivo-caption"></div>'));var c=function(e){var i=t(".nivo-caption",o);if(""!=a.currentImage.attr("title")&&void 0!=a.currentImage.attr("title")){var n=a.currentImage.attr("title");"#"==n.substr(0,1)&&(n=t(n).html()),"block"==i.css("display")?setTimeout(function(){i.html(n)},e.animSpeed):(i.html(n),i.stop().fadeIn(e.animSpeed))}else i.stop().fadeOut(e.animSpeed)};c(n);var l=0;if(!n.manualAdvance&&r.length>1&&(l=setInterval(function(){p(o,r,n,!1)},n.pauseTime)),n.directionNav&&(o.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+n.prevText+'</a><a class="nivo-nextNav">'+n.nextText+"</a></div>"),t(o).on("click","a.nivo-prevNav",function(){return a.running?!1:(clearInterval(l),l="",a.currentSlide-=2,void p(o,r,n,"prev"))}),t(o).on("click","a.nivo-nextNav",function(){return a.running?!1:(clearInterval(l),l="",void p(o,r,n,"next"))})),n.controlNav){a.controlNavEl=t('<div class="nivo-controlNav"></div>'),o.after(a.controlNavEl);for(var d=0;d<r.length;d++)if(n.controlNavThumbs){a.controlNavEl.addClass("nivo-thumbs-enabled");var u=r.eq(d);u.is("img")||(u=u.find("img:first")),u.attr("data-thumb")&&a.controlNavEl.append('<a class="nivo-control" rel="'+d+'"><img src="'+u.attr("data-thumb")+'" alt="" /></a>')}else a.controlNavEl.append('<a class="nivo-control" rel="'+d+'">'+(d+1)+"</a>");t("a:eq("+a.currentSlide+")",a.controlNavEl).addClass("active"),t("a",a.controlNavEl).bind("click",function(){return a.running?!1:t(this).hasClass("active")?!1:(clearInterval(l),l="",s.attr("src",a.currentImage.attr("src")),a.currentSlide=t(this).attr("rel")-1,void p(o,r,n,"control"))})}n.pauseOnHover&&o.hover(function(){a.paused=!0,clearInterval(l),l=""},function(){a.paused=!1,""!==l||n.manualAdvance||(l=setInterval(function(){p(o,r,n,!1)},n.pauseTime))}),o.bind("nivo:animFinished",function(){s.attr("src",a.currentImage.attr("src")),a.running=!1,t(r).each(function(){t(this).is("a")&&t(this).css("display","none")}),t(r[a.currentSlide]).is("a")&&t(r[a.currentSlide]).css("display","block"),""!==l||a.paused||n.manualAdvance||(l=setInterval(function(){p(o,r,n,!1)},n.pauseTime)),n.afterChange.call(this)});var h=function(e,i,n){t(n.currentImage).parent().is("a")&&t(n.currentImage).parent().css("display","block"),t('img[src="'+n.currentImage.attr("src")+'"]',e).not(".nivo-main-image,.nivo-control img").width(e.width()).css("visibility","hidden").show();for(var a=t('img[src="'+n.currentImage.attr("src")+'"]',e).not(".nivo-main-image,.nivo-control img").parent().is("a")?t('img[src="'+n.currentImage.attr("src")+'"]',e).not(".nivo-main-image,.nivo-control img").parent().height():t('img[src="'+n.currentImage.attr("src")+'"]',e).not(".nivo-main-image,.nivo-control img").height(),o=0;o<i.slices;o++){var r=Math.round(e.width()/i.slices);o===i.slices-1?e.append(t('<div class="nivo-slice" name="'+o+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+e.width()+"px; height:auto; display:block !important; top:0; left:-"+(r+o*r-r)+'px;" /></div>').css({left:r*o+"px",width:e.width()-r*o+"px",height:a+"px",opacity:"0",overflow:"hidden"})):e.append(t('<div class="nivo-slice" name="'+o+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+e.width()+"px; height:auto; display:block !important; top:0; left:-"+(r+o*r-r)+'px;" /></div>').css({left:r*o+"px",width:r+"px",height:a+"px",opacity:"0",overflow:"hidden"}))}t(".nivo-slice",e).height(a),s.stop().animate({height:t(n.currentImage).height()},i.animSpeed)},v=function(e,i,n){t(n.currentImage).parent().is("a")&&t(n.currentImage).parent().css("display","block"),t('img[src="'+n.currentImage.attr("src")+'"]',e).not(".nivo-main-image,.nivo-control img").width(e.width()).css("visibility","hidden").show();for(var a=Math.round(e.width()/i.boxCols),o=Math.round(t('img[src="'+n.currentImage.attr("src")+'"]',e).not(".nivo-main-image,.nivo-control img").height()/i.boxRows),r=0;r<i.boxRows;r++)for(var c=0;c<i.boxCols;c++)c===i.boxCols-1?(e.append(t('<div class="nivo-box" name="'+c+'" rel="'+r+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+e.width()+"px; height:auto; display:block; top:-"+o*r+"px; left:-"+a*c+'px;" /></div>').css({opacity:0,left:a*c+"px",top:o*r+"px",width:e.width()-a*c+"px"})),t('.nivo-box[name="'+c+'"]',e).height(t('.nivo-box[name="'+c+'"] img',e).height()+"px")):(e.append(t('<div class="nivo-box" name="'+c+'" rel="'+r+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+e.width()+"px; height:auto; display:block; top:-"+o*r+"px; left:-"+a*c+'px;" /></div>').css({opacity:0,left:a*c+"px",top:o*r+"px",width:a+"px"})),t('.nivo-box[name="'+c+'"]',e).height(t('.nivo-box[name="'+c+'"] img',e).height()+"px"));s.stop().animate({height:t(n.currentImage).height()},i.animSpeed)},p=function(e,i,n,a){var o=e.data("nivo:vars");if(o&&o.currentSlide===o.totalSlides-1&&n.lastSlide.call(this),(!o||o.stop)&&!a)return!1;n.beforeChange.call(this),a?("prev"===a&&s.attr("src",o.currentImage.attr("src")),"next"===a&&s.attr("src",o.currentImage.attr("src"))):s.attr("src",o.currentImage.attr("src")),o.currentSlide++,o.currentSlide===o.totalSlides&&(o.currentSlide=0,n.slideshowEnd.call(this)),o.currentSlide<0&&(o.currentSlide=o.totalSlides-1),t(i[o.currentSlide]).is("img")?o.currentImage=t(i[o.currentSlide]):o.currentImage=t(i[o.currentSlide]).find("img:first"),n.controlNav&&(t("a",o.controlNavEl).removeClass("active"),t("a:eq("+o.currentSlide+")",o.controlNavEl).addClass("active")),c(n),t(".nivo-slice",e).remove(),t(".nivo-box",e).remove();var r=n.effect,l="";"random"===n.effect&&(l=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse"),r=l[Math.floor(Math.random()*(l.length+1))],void 0===r&&(r="fade")),-1!==n.effect.indexOf(",")&&(l=n.effect.split(","),r=l[Math.floor(Math.random()*l.length)],void 0===r&&(r="fade")),o.currentImage.attr("data-transition")&&(r=o.currentImage.attr("data-transition")),o.running=!0;var d=0,u=0,p="",g="",m="",y="";if("sliceDown"===r||"sliceDownRight"===r||"sliceDownLeft"===r)h(e,n,o),d=0,u=0,p=t(".nivo-slice",e),"sliceDownLeft"===r&&(p=t(".nivo-slice",e)._reverse()),p.each(function(){var i=t(this);i.css({top:"0px"}),u===n.slices-1?setTimeout(function(){i.animate({opacity:"1.0"},n.animSpeed,"",function(){e.trigger("nivo:animFinished")})},100+d):setTimeout(function(){i.animate({opacity:"1.0"},n.animSpeed)},100+d),d+=50,u++});else if("sliceUp"===r||"sliceUpRight"===r||"sliceUpLeft"===r)h(e,n,o),d=0,u=0,p=t(".nivo-slice",e),"sliceUpLeft"===r&&(p=t(".nivo-slice",e)._reverse()),p.each(function(){var i=t(this);i.css({bottom:"0px"}),u===n.slices-1?setTimeout(function(){i.animate({opacity:"1.0"},n.animSpeed,"",function(){e.trigger("nivo:animFinished")})},100+d):setTimeout(function(){i.animate({opacity:"1.0"},n.animSpeed)},100+d),d+=50,u++});else if("sliceUpDown"===r||"sliceUpDownRight"===r||"sliceUpDownLeft"===r){h(e,n,o),d=0,u=0;var w=0;p=t(".nivo-slice",e),"sliceUpDownLeft"===r&&(p=t(".nivo-slice",e)._reverse()),p.each(function(){var i=t(this);0===u?(i.css("top","0px"),u++):(i.css("bottom","0px"),u=0),w===n.slices-1?setTimeout(function(){i.animate({opacity:"1.0"},n.animSpeed,"",function(){e.trigger("nivo:animFinished")})},100+d):setTimeout(function(){i.animate({opacity:"1.0"},n.animSpeed)},100+d),d+=50,w++})}else if("fold"===r)h(e,n,o),d=0,u=0,t(".nivo-slice",e).each(function(){var i=t(this),a=i.width();i.css({top:"0px",width:"0px"}),u===n.slices-1?setTimeout(function(){i.animate({width:a,opacity:"1.0"},n.animSpeed,"",function(){e.trigger("nivo:animFinished")})},100+d):setTimeout(function(){i.animate({width:a,opacity:"1.0"},n.animSpeed)},100+d),d+=50,u++});else if("fade"===r)h(e,n,o),g=t(".nivo-slice:first",e),g.css({width:e.width()+"px"}),g.animate({opacity:"1.0"},2*n.animSpeed,"",function(){e.trigger("nivo:animFinished")});else if("slideInRight"===r)h(e,n,o),g=t(".nivo-slice:first",e),g.css({width:"0px",opacity:"1"}),g.animate({width:e.width()+"px"},2*n.animSpeed,"",function(){e.trigger("nivo:animFinished")});else if("slideInLeft"===r)h(e,n,o),g=t(".nivo-slice:first",e),g.css({width:"0px",opacity:"1",left:"",right:"0px"}),g.animate({width:e.width()+"px"},2*n.animSpeed,"",function(){g.css({
left:"0px",right:""}),e.trigger("nivo:animFinished")});else if("boxRandom"===r)v(e,n,o),m=n.boxCols*n.boxRows,u=0,d=0,y=f(t(".nivo-box",e)),y.each(function(){var i=t(this);u===m-1?setTimeout(function(){i.animate({opacity:"1"},n.animSpeed,"",function(){e.trigger("nivo:animFinished")})},100+d):setTimeout(function(){i.animate({opacity:"1"},n.animSpeed)},100+d),d+=20,u++});else if("boxRain"===r||"boxRainReverse"===r||"boxRainGrow"===r||"boxRainGrowReverse"===r){v(e,n,o),m=n.boxCols*n.boxRows,u=0,d=0;var b=0,_=0,C=[];C[b]=[],y=t(".nivo-box",e),("boxRainReverse"===r||"boxRainGrowReverse"===r)&&(y=t(".nivo-box",e)._reverse()),y.each(function(){C[b][_]=t(this),_++,_===n.boxCols&&(b++,_=0,C[b]=[])});for(var x=0;x<2*n.boxCols;x++){for(var T=x,S=0;S<n.boxRows;S++)T>=0&&T<n.boxCols&&(!function(i,a,o,s,c){var l=t(C[i][a]),d=l.width(),u=l.height();("boxRainGrow"===r||"boxRainGrowReverse"===r)&&l.width(0).height(0),s===c-1?setTimeout(function(){l.animate({opacity:"1",width:d,height:u},n.animSpeed/1.3,"",function(){e.trigger("nivo:animFinished")})},100+o):setTimeout(function(){l.animate({opacity:"1",width:d,height:u},n.animSpeed/1.3)},100+o)}(S,T,d,u,m),u++),T--;d+=100}}},f=function(t){for(var e,i,n=t.length;n;e=parseInt(Math.random()*n,10),i=t[--n],t[n]=t[e],t[e]=i);return t},g=function(t){this.console&&"undefined"!=typeof console.log&&console.log(t)};return this.stop=function(){t(e).data("nivo:vars").stop||(t(e).data("nivo:vars").stop=!0,g("Stop Slider"))},this.start=function(){t(e).data("nivo:vars").stop&&(t(e).data("nivo:vars").stop=!1,g("Start Slider"))},n.afterLoad.call(this),this};t.fn.nivoSlider=function(i){return this.each(function(n,a){var o=t(this);if(o.data("nivoslider"))return o.data("nivoslider");var r=new e(this,i);o.data("nivoslider",r)})},t.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:!0,controlNav:!0,controlNavThumbs:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next",randomStart:!1,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}},t.fn._reverse=[].reverse}(jQuery);