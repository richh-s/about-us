/**
 * frontend.js
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Quick View
 * @version 1.0.0
 */
 jQuery(document).ready(function(a){"use strict";if("undefined"!=typeof yith_qv){var b=a(document).find("#yith-quick-view-modal"),c=b.find(".yith-quick-view-overlay"),d=b.find("#yith-quick-view-content"),e=b.find("#yith-quick-view-close"),f=b.find(".yith-wcqv-wrapper"),g=f.width(),h=f.height(),i=function(){var b=a(window).width(),c=a(window).height(),d=b-60>g?g:b-60,e=c-120>h?h:c-120;f.css({left:b/2-d/2,top:c/2-e/2,width:d+"px",height:e+"px"})};a.fn.yith_quick_view=function(){a(document).off("click",".yith-wcqv-button").on("click",".yith-wcqv-button",function(c){c.preventDefault();var d=a(this),e=d.data("product_id"),f=!1;"undefined"!=typeof yith_qv.loader&&(f=!0,d.block({message:null,overlayCSS:{background:"#fff url("+yith_qv.loader+") no-repeat center",opacity:.5,cursor:"none"}}),!b.hasClass("loading")&&b.addClass("loading"),a(document).trigger("qv_loading")),j(d,e,f)})};var j=function(c,e,f){a.ajax({url:yith_qv.ajaxurl,data:{action:"yith_load_product_quick_view",product_id:e,lang:yith_qv.lang,context:"frontend"},dataType:"json",type:"POST",success:function(e){d.html(e.html);var g=d.find(".variations_form");g.each(function(){a(this).wc_variation_form(),"undefined"==typeof a.fn.yith_wccl?"undefined"!=typeof a.yith_wccl&&e.prod_attr&&a.yith_wccl(e.prod_attr):a(this).yith_wccl()}),g.trigger("check_variations"),g.trigger("reset_image"),"undefined"!=typeof a.fn.wc_product_gallery&&d.find(".woocommerce-product-gallery").each(function(){a(this).wc_product_gallery()}),b.hasClass("open")||(b.removeClass("loading").addClass("open"),f&&c.unblock()),a(document).trigger("qv_loader_stop")}})},k=function(){c.on("click",function(){f()}),a(document).keyup(function(a){27===a.keyCode&&f()}),e.on("click",function(a){a.preventDefault(),f()});var f=function(){b.removeClass("open").removeClass("loading"),setTimeout(function(){d.html("")},1e3)}};k(),i(),a(window).on("resize",i),a.fn.yith_quick_view(),a(document).on("yith_infs_adding_elem yith-wcan-ajax-filtered",function(){a.fn.yith_quick_view()})}});