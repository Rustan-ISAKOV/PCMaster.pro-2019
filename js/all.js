'use strict';

// async-each MIT license (by Paul Miller from http://paulmillr.com).
(function(globals) {
  'use strict';
  var each = function(items, next, callback) {
    if (!Array.isArray(items)) throw new TypeError('each() expects array as first argument');
    if (typeof next !== 'function') throw new TypeError('each() expects function as second argument');
    if (typeof callback !== 'function') callback = Function.prototype; // no-op

    if (items.length === 0) return callback(undefined, items);

    var transformed = new Array(items.length);
    var count = 0;
    var returned = false;

    items.forEach(function(item, index) {
      next(item, function(error, transformedItem) {
        if (returned) return;
        if (error) {
          returned = true;
          return callback(error);
        }
        transformed[index] = transformedItem;
        count += 1;
        if (count === items.length) return callback(undefined, transformed);
      });
    });
  };

  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return each;
    }); // RequireJS
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = each; // CommonJS
  } else {
    globals.asyncEach = each; // <script>
  }
})(this);

/*!
 * fullPage 2.7.8
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,o,t,i){"use strict";var r,a="fullpage-wrapper",l="."+a,s="fp-scrollable",c="."+s,f=".slimScrollBar",d=".slimScrollRail",u="fp-responsive",h="fp-notransition",p="fp-destroyed",v="fp-enabled",m="fp-viewing",g="active",S="."+g,w="fp-completely",y="."+w,b=".section",x="fp-section",T="."+x,C=T+S,k=T+":first",A=T+":last",L="fp-tableCell",B="."+L,M="fp-auto-height",E="fp-normal-scroll",R="fp-nav",F="#"+R,H="fp-tooltip",q="."+H,z="fp-show-active",O=".slide",D="fp-slide",I="."+D,P=I+S,V="fp-slides",W="."+V,Y="fp-slidesContainer",U="."+Y,X="fp-table",N="fp-slidesNav",K="."+N,j=K+" a",Q="fp-controlArrow",G="."+Q,J="fp-prev",Z="."+J,$=Q+" "+J,_=G+Z,ee="fp-next",ne="."+ee,oe=Q+" "+ee,te=G+ne,ie=e(n),re=e(o);e.fn.fullpage=function(s){function c(){s.css3&&(s.css3=Sn()),s.scrollBar=s.scrollBar||s.hybrid,d(),Q(),Dn.setAllowScrolling(!0),Dn.setAutoScrolling(s.autoScrolling,"internal");var n=e(C).find(P);n.length&&(0!==e(C).index(T)||0===e(C).index(T)&&0!==n.index())&&Ln(n),Ge(),gn(),ie.on("load",function(){qe()})}function f(){ie.on("scroll",de).on("hashchange",ze).blur(Ye).resize(Qe),re.keydown(Oe).keyup(Ie).on("click touchstart",F+" a",Ue).on("click touchstart",j,Xe).on("click",q,De),e(T).on("click touchstart",G,We),s.normalScrollElements&&(re.on("mouseenter",s.normalScrollElements,function(){Dn.setMouseWheelScrolling(!1)}),re.on("mouseleave",s.normalScrollElements,function(){Dn.setMouseWheelScrolling(!0)}))}function d(){s.anchors.length||(s.anchors=e(s.sectionSelector+"[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),s.navigationTooltips.length||(s.navigationTooltips=e(s.sectionSelector+"[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function Q(){Xn.css({height:"100%",position:"relative"}),Xn.addClass(a),e("html").addClass(v),Nn=ie.height(),Xn.removeClass(p),ae(),e(T).each(function(n){var o=e(this),t=o.find(I),i=t.length;ee(o,n),ne(o,n),i>0?Z(o,t,i):s.verticalCentered&&an(o)}),s.fixedElements&&s.css3&&e(s.fixedElements).appendTo(On),s.navigation&&se(),s.scrollOverflow?("complete"===o.readyState&&ce(),ie.on("load",ce)):fe()}function Z(n,o,t){var i=100*t,r=100/t;o.wrapAll('<div class="'+Y+'" />'),o.parent().wrap('<div class="'+V+'" />'),n.find(U).css("width",i+"%"),t>1&&(s.controlArrows&&le(n),s.slidesNavigation&&hn(n,t)),o.each(function(n){e(this).css("width",r+"%"),s.verticalCentered&&an(e(this))});var a=n.find(P);a.length&&(0!==e(C).index(T)||0===e(C).index(T)&&0!==a.index())?Ln(a):o.eq(0).addClass(g)}function ee(n,o){o||0!==e(C).length||n.addClass(g),n.css("height",Nn+"px"),s.paddingTop&&n.css("padding-top",s.paddingTop),s.paddingBottom&&n.css("padding-bottom",s.paddingBottom),"undefined"!=typeof s.sectionsColor[o]&&n.css("background-color",s.sectionsColor[o]),"undefined"!=typeof s.anchors[o]&&n.attr("data-anchor",s.anchors[o])}function ne(n,o){"undefined"!=typeof s.anchors[o]&&n.hasClass(g)&&nn(s.anchors[o],o),s.menu&&s.css3&&e(s.menu).closest(l).length&&e(s.menu).appendTo(On)}function ae(){e(s.sectionSelector).each(function(){e(this).addClass(x)}),e(s.slideSelector).each(function(){e(this).addClass(D)})}function le(e){e.find(W).after('<div class="'+$+'"></div><div class="'+oe+'"></div>'),"#fff"!=s.controlArrowColor&&(e.find(te).css("border-color","transparent transparent transparent "+s.controlArrowColor),e.find(_).css("border-color","transparent "+s.controlArrowColor+" transparent transparent")),s.loopHorizontal||e.find(_).hide()}function se(){On.append('<div id="'+R+'"><ul></ul></div>');var n=e(F);n.addClass(function(){return s.showActiveTooltip?z+" "+s.navigationPosition:s.navigationPosition});for(var o=0;o<e(T).length;o++){var t="";s.anchors.length&&(t=s.anchors[o]);var i='<li><a href="#'+t+'"><span></span></a>',r=s.navigationTooltips[o];"undefined"!=typeof r&&""!==r&&(i+='<div class="'+H+" "+s.navigationPosition+'">'+r+"</div>"),i+="</li>",n.find("ul").append(i)}e(F).css("margin-top","-"+e(F).height()/2+"px"),e(F).find("li").eq(e(C).index(T)).find("a").addClass(g)}function ce(){e(T).each(function(){var n=e(this).find(I);n.length?n.each(function(){rn(e(this))}):rn(e(this))}),fe()}function fe(){var n=e(C);n.addClass(w),s.scrollOverflowHandler.afterRender&&s.scrollOverflowHandler.afterRender(n),Ee(n),Re(n),e.isFunction(s.afterLoad)&&s.afterLoad.call(n,n.data("anchor"),n.index(T)+1),e.isFunction(s.afterRender)&&s.afterRender.call(Xn)}function de(){var n;if(!s.autoScrolling||s.scrollBar){for(var t=ie.scrollTop(),i=he(t),r=0,a=t+ie.height()/2,l=o.querySelectorAll(T),c=0;c<l.length;++c){var f=l[c];f.offsetTop<=a&&(r=c)}if(ue(i)&&(e(C).hasClass(w)||e(C).addClass(w).siblings().removeClass(w)),n=e(l).eq(r),!n.hasClass(g)){io=!0;var d=e(C),u=d.index(T)+1,h=on(n),p=n.data("anchor"),v=n.index(T)+1,m=n.find(P);if(m.length)var S=m.data("anchor"),y=m.index();Qn&&(n.addClass(g).siblings().removeClass(g),e.isFunction(s.onLeave)&&s.onLeave.call(d,u,v,h),e.isFunction(s.afterLoad)&&s.afterLoad.call(n,p,v),Ee(n),nn(p,v-1),s.anchors.length&&(In=p,pn(y,S,p,v))),clearTimeout(eo),eo=setTimeout(function(){io=!1},100)}s.fitToSection&&(clearTimeout(no),no=setTimeout(function(){Qn&&s.fitToSection&&(e(C).is(n)&&requestAnimFrame(function(){Kn=!0}),Ce(e(C)),requestAnimFrame(function(){Kn=!1}))},s.fitToSectionDelay))}}function ue(n){var o=e(C).position().top,t=o+ie.height();return"up"==n?t>=ie.scrollTop()+ie.height():o<=ie.scrollTop()}function he(e){var n=e>ro?"down":"up";return ro=e,n}function pe(e,n){if(Jn.m[e]){var o,t;if("down"==e?(o="bottom",t=Dn.moveSectionDown):(o="top",t=Dn.moveSectionUp),n.length>0){if(!s.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}}function ve(n){var o=n.originalEvent;if(!me(n.target)&&ge(o)){s.autoScrolling&&n.preventDefault();var i=e(C),r=s.scrollOverflowHandler.scrollable(i);if(Qn&&!Wn){var a=An(o);so=a.y,co=a.x,i.find(W).length&&t.abs(lo-co)>t.abs(ao-so)?t.abs(lo-co)>ie.outerWidth()/100*s.touchSensitivity&&(lo>co?Jn.m.right&&Dn.moveSlideRight():Jn.m.left&&Dn.moveSlideLeft()):s.autoScrolling&&t.abs(ao-so)>ie.height()/100*s.touchSensitivity&&(ao>so?pe("down",r):so>ao&&pe("up",r))}}}function me(n,o){o=o||0;var t=e(n).parent();return o<s.normalScrollElementTouchThreshold&&t.is(s.normalScrollElements)?!0:o==s.normalScrollElementTouchThreshold?!1:me(t,++o)}function ge(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function Se(e){var n=e.originalEvent;if(s.fitToSection&&zn.stop(),ge(n)){var o=An(n);ao=o.y,lo=o.x}}function we(e,n){for(var o=0,i=e.slice(t.max(e.length-n,1)),r=0;r<i.length;r++)o+=i[r];return t.ceil(o/n)}function ye(o){var i=(new Date).getTime(),r=e(y).hasClass(E);if(s.autoScrolling&&!Vn&&!r){o=o||n.event;var a=o.wheelDelta||-o.deltaY||-o.detail,l=t.max(-1,t.min(1,a)),c="undefined"!=typeof o.wheelDeltaX||"undefined"!=typeof o.deltaX,f=t.abs(o.wheelDeltaX)<t.abs(o.wheelDelta)||t.abs(o.deltaX)<t.abs(o.deltaY)||!c;Gn.length>149&&Gn.shift(),Gn.push(t.abs(a)),s.scrollBar&&(o.preventDefault?o.preventDefault():o.returnValue=!1);var d=e(C),u=s.scrollOverflowHandler.scrollable(d),h=i-fo;if(fo=i,h>200&&(Gn=[]),Qn){var p=we(Gn,10),v=we(Gn,70),m=p>=v;m&&f&&(0>l?pe("down",u):pe("up",u))}return!1}s.fitToSection&&zn.stop()}function be(n,o){var t="undefined"==typeof o?e(C):o,i=t.find(W),r=i.find(I).length;if(!(!i.length||Wn||2>r)){var a=i.find(P),l=null;if(l="prev"===n?a.prev(I):a.next(I),!l.length){if(!s.loopHorizontal)return;l="prev"===n?a.siblings(":last"):a.siblings(":first")}Wn=!0,je(i,l)}}function xe(){e(P).each(function(){Ln(e(this),"internal")})}function Te(e,n){var o=e.top,t=e.top>uo,i=o-Nn+n.outerHeight();return n.outerHeight()>Nn?t||(o=i):t&&(o=i),uo=o,o}function Ce(n,o,t){requestAnimFrame(function(){var i=n.position();if("undefined"!=typeof i){var r=Te(i,n),a={element:n,callback:o,isMovementUp:t,dest:i,dtop:r,yMovement:on(n),anchorLink:n.data("anchor"),sectionIndex:n.index(T),activeSlide:n.find(P),activeSection:e(C),leavingSection:e(C).index(T)+1,localIsResizing:Kn};if(!(a.activeSection.is(n)&&!Kn||s.scrollBar&&ie.scrollTop()===a.dtop&&!n.hasClass(M))){if(a.activeSlide.length)var l=a.activeSlide.data("anchor"),c=a.activeSlide.index();s.autoScrolling&&s.continuousVertical&&"undefined"!=typeof a.isMovementUp&&(!a.isMovementUp&&"up"==a.yMovement||a.isMovementUp&&"down"==a.yMovement)&&(a=Le(a)),(!e.isFunction(s.onLeave)||a.localIsResizing||s.onLeave.call(a.activeSection,a.leavingSection,a.sectionIndex+1,a.yMovement)!==!1)&&(Fe(a.activeSection),n.addClass(g).siblings().removeClass(g),Ee(n),Qn=!1,pn(c,l,a.anchorLink,a.sectionIndex),ke(a),In=a.anchorLink,nn(a.anchorLink,a.sectionIndex))}}})}function ke(n){if(s.css3&&s.autoScrolling&&!s.scrollBar){var o="translate3d(0px, -"+n.dtop+"px, 0px)";sn(o,!0),s.scrollingSpeed?$n=setTimeout(function(){Me(n)},s.scrollingSpeed):Me(n)}else{var t=Ae(n);e(t.element).animate(t.options,s.scrollingSpeed,s.easing).promise().done(function(){s.scrollBar?setTimeout(function(){Me(n)},30):Me(n)})}}function Ae(e){var n={};return s.autoScrolling&&!s.scrollBar?(n.options={top:-e.dtop},n.element=l):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Le(n){return n.isMovementUp?e(C).before(n.activeSection.nextAll(T)):e(C).after(n.activeSection.prevAll(T).get().reverse()),Bn(e(C).position().top),xe(),n.wrapAroundElements=n.activeSection,n.dest=n.element.position(),n.dtop=n.dest.top,n.yMovement=on(n.element),n}function Be(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(k).before(n.wrapAroundElements):e(A).after(n.wrapAroundElements),Bn(e(C).position().top),xe())}function Me(n){Be(n),n.element.find(".fp-scrollable").mouseover(),e.isFunction(s.afterLoad)&&!n.localIsResizing&&s.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),Re(n.element),n.element.addClass(w).siblings().removeClass(w),Qn=!0,e.isFunction(n.callback)&&n.callback.call(this)}function Ee(n){var n=He(n);n.find("img[data-src], source[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function Re(n){var n=He(n);n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("autoplay")&&"function"==typeof n.play&&n.play()})}function Fe(n){var n=He(n);n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-ignore")||"function"!=typeof n.pause||n.pause()})}function He(n){var o=n.find(P);return o.length&&(n=e(o)),n}function qe(){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];o&&(s.animateAnchor?dn(o,t):Dn.silentMoveTo(o,t))}function ze(){if(!io&&!s.lockAnchors){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1],i="undefined"==typeof In,r="undefined"==typeof In&&"undefined"==typeof t&&!Wn;o.length&&(o&&o!==In&&!i||r||!Wn&&Pn!=t)&&dn(o,t)}}function Oe(n){clearTimeout(oo);var o=e(":focus");if(!o.is("textarea")&&!o.is("input")&&!o.is("select")&&s.keyboardScrolling&&s.autoScrolling){var t=n.which,i=[40,38,32,33,34];e.inArray(t,i)>-1&&n.preventDefault(),Vn=n.ctrlKey,oo=setTimeout(function(){Ne(n)},150)}}function De(){e(this).prev().trigger("click")}function Ie(e){jn&&(Vn=e.ctrlKey)}function Pe(e){2==e.which&&(ho=e.pageY,Xn.on("mousemove",Ke))}function Ve(e){2==e.which&&Xn.off("mousemove")}function We(){var n=e(this).closest(T);e(this).hasClass(J)?Jn.m.left&&Dn.moveSlideLeft(n):Jn.m.right&&Dn.moveSlideRight(n)}function Ye(){jn=!1,Vn=!1}function Ue(n){n.preventDefault();var o=e(this).parent().index();Ce(e(T).eq(o))}function Xe(n){n.preventDefault();var o=e(this).closest(T).find(W),t=o.find(I).eq(e(this).closest("li").index());je(o,t)}function Ne(n){var o=n.shiftKey;switch(n.which){case 38:case 33:Jn.k.up&&Dn.moveSectionUp();break;case 32:if(o&&Jn.k.up){Dn.moveSectionUp();break}case 40:case 34:Jn.k.down&&Dn.moveSectionDown();break;case 36:Jn.k.up&&Dn.moveTo(1);break;case 35:Jn.k.down&&Dn.moveTo(e(T).length);break;case 37:Jn.k.left&&Dn.moveSlideLeft();break;case 39:Jn.k.right&&Dn.moveSlideRight();break;default:return}}function Ke(e){Qn&&(e.pageY<ho&&Jn.m.up?Dn.moveSectionUp():e.pageY>ho&&Jn.m.down&&Dn.moveSectionDown()),ho=e.pageY}function je(n,o){var i=o.position(),r=o.index(),a=n.closest(T),l=a.index(T),c=a.data("anchor"),f=a.find(K),d=mn(o),u=a.find(P),h=Kn;if(s.onSlideLeave){var p=u.index(),v=tn(p,r);if(!h&&"none"!==v&&e.isFunction(s.onSlideLeave)&&s.onSlideLeave.call(u,c,l+1,p,v,r)===!1)return void(Wn=!1)}Fe(u),o.addClass(g).siblings().removeClass(g),h||Ee(o),!s.loopHorizontal&&s.controlArrows&&(a.find(_).toggle(0!==r),a.find(te).toggle(!o.is(":last-child"))),a.hasClass(g)&&pn(r,d,c,l);var m=function(){h||e.isFunction(s.afterSlideLoad)&&s.afterSlideLoad.call(o,c,l+1,d,r),Re(o),Wn=!1};if(s.css3){var w="translate3d(-"+t.round(i.left)+"px, 0px, 0px)";Je(n.find(U),s.scrollingSpeed>0).css(Mn(w)),_n=setTimeout(function(){m()},s.scrollingSpeed,s.easing)}else n.animate({scrollLeft:t.round(i.left)},s.scrollingSpeed,s.easing,function(){m()});f.find(S).removeClass(g),f.find("li").eq(r).find("a").addClass(g)}function Qe(){if(Ge(),Yn){var n=e(o.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=ie.height();t.abs(i-po)>20*t.max(po,i)/100&&(Dn.reBuild(!0),po=i)}}else clearTimeout(Zn),Zn=setTimeout(function(){Dn.reBuild(!0)},350)}function Ge(){var e=s.responsive||s.responsiveWidth,n=s.responsiveHeight,o=e&&ie.outerWidth()<e,t=n&&ie.height()<n;e&&n?Dn.setResponsive(o||t):e?Dn.setResponsive(o):n&&Dn.setResponsive(t)}function Je(e){var n="all "+s.scrollingSpeed+"ms "+s.easingcss3;return e.removeClass(h),e.css({"-webkit-transition":n,transition:n})}function Ze(e){return e.addClass(h)}function $e(e,n){var o=825,i=900;if(o>e||i>n){var r=100*e/o,a=100*n/i,l=t.min(r,a),s=l.toFixed(2);On.css("font-size",s+"%")}else On.css("font-size","100%")}function _e(n,o){s.navigation&&(e(F).find(S).removeClass(g),n?e(F).find('a[href="#'+n+'"]').addClass(g):e(F).find("li").eq(o).find("a").addClass(g))}function en(n){s.menu&&(e(s.menu).find(S).removeClass(g),e(s.menu).find('[data-menuanchor="'+n+'"]').addClass(g))}function nn(e,n){en(e),_e(e,n)}function on(n){var o=e(C).index(T),t=n.index(T);return o==t?"none":o>t?"up":"down"}function tn(e,n){return e==n?"none":e>n?"left":"right"}function rn(e){e.css("overflow","hidden");var n,o=s.scrollOverflowHandler,t=o.wrapContent(),i=e.closest(T),r=o.scrollable(e);r.length?n=o.scrollHeight(e):(n=e.get(0).scrollHeight,s.verticalCentered&&(n=e.find(B).get(0).scrollHeight));var a=Nn-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));n>a?r.length?o.update(e,a):(s.verticalCentered?e.find(B).wrapInner(t):e.wrapInner(t),o.create(e,a)):o.remove(e),e.css("overflow","")}function an(e){e.addClass(X).wrapInner('<div class="'+L+'" style="height:'+ln(e)+'px;" />')}function ln(e){var n=Nn;if(s.paddingTop||s.paddingBottom){var o=e;o.hasClass(x)||(o=e.closest(T));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=Nn-t}return n}function sn(e,n){n?Je(Xn):Ze(Xn),Xn.css(Mn(e)),setTimeout(function(){Xn.removeClass(h)},10)}function cn(n){var o=Xn.find(T+'[data-anchor="'+n+'"]');return o.length||(o=e(T).eq(n-1)),o}function fn(e,n){var o=n.find(W),t=o.find(I+'[data-anchor="'+e+'"]');return t.length||(t=o.find(I).eq(e)),t}function dn(e,n){var o=cn(e);"undefined"==typeof n&&(n=0),e===In||o.hasClass(g)?un(o,n):Ce(o,function(){un(o,n)})}function un(e,n){if("undefined"!=typeof n){var o=e.find(W),t=fn(n,e);t.length&&je(o,t)}}function hn(e,n){e.append('<div class="'+N+'"><ul></ul></div>');var o=e.find(K);o.addClass(s.slidesNavPosition);for(var t=0;n>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(g)}function pn(e,n,o,t){var i="";s.anchors.length&&!s.lockAnchors&&(e?("undefined"!=typeof o&&(i=o),"undefined"==typeof n&&(n=e),Pn=n,vn(i+"/"+n)):"undefined"!=typeof e?(Pn=n,vn(o)):vn(o)),gn()}function vn(e){if(s.recordHistory)location.hash=e;else if(Yn||Un)n.history.replaceState(i,i,"#"+e);else{var o=n.location.href.split("#")[0];n.location.replace(o+"#"+e)}}function mn(e){var n=e.data("anchor"),o=e.index();return"undefined"==typeof n&&(n=o),n}function gn(){var n=e(C),o=n.find(P),t=mn(n),i=mn(o),r=(n.index(T),String(t));o.length&&(r=r+"-"+i),r=r.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+m+"-[^\\s]+\\b","g");On[0].className=On[0].className.replace(a,""),On.addClass(m+"-"+r)}function Sn(){var e,t=o.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};o.body.insertBefore(t,null);for(var a in r)t.style[a]!==i&&(t.style[a]="translate3d(1px,1px,1px)",e=n.getComputedStyle(t).getPropertyValue(r[a]));return o.body.removeChild(t),e!==i&&e.length>0&&"none"!==e}function wn(){o.addEventListener?(o.removeEventListener("mousewheel",ye,!1),o.removeEventListener("wheel",ye,!1),o.removeEventListener("MozMousePixelScroll",ye,!1)):o.detachEvent("onmousewheel",ye)}function yn(){var e,t="";n.addEventListener?e="addEventListener":(e="attachEvent",t="on");var r="onwheel"in o.createElement("div")?"wheel":o.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==r?o[e](t+"MozMousePixelScroll",ye,!1):o[e](t+r,ye,!1)}function bn(){Xn.on("mousedown",Pe).on("mouseup",Ve)}function xn(){Xn.off("mousedown",Pe).off("mouseup",Ve)}function Tn(){if(Yn||Un){var n=kn();e(l).off("touchstart "+n.down).on("touchstart "+n.down,Se),e(l).off("touchmove "+n.move).on("touchmove "+n.move,ve)}}function Cn(){if(Yn||Un){var n=kn();e(l).off("touchstart "+n.down),e(l).off("touchmove "+n.move)}}function kn(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function An(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Un&&ge(e)&&s.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function Ln(e,n){Dn.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(Kn=!0),je(e.closest(W),e),"undefined"!=typeof n&&(Kn=!1),Dn.setScrollingSpeed(to.scrollingSpeed,"internal")}function Bn(e){if(s.scrollBar)Xn.scrollTop(e);else if(s.css3){var n="translate3d(0px, -"+e+"px, 0px)";sn(n,!1)}else Xn.css("top",-e)}function Mn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function En(e,n,o){switch(n){case"up":Jn[o].up=e;break;case"down":Jn[o].down=e;break;case"left":Jn[o].left=e;break;case"right":Jn[o].right=e;break;case"all":"m"==o?Dn.setAllowScrolling(e):Dn.setKeyboardScrolling(e)}}function Rn(){Bn(0),e(F+", "+K+", "+G).remove(),e(T).css({height:"","background-color":"",padding:""}),e(I).css({width:""}),Xn.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),zn.css({overflow:"",height:""}),e("html").removeClass(v),e.each(On.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(m)&&On.removeClass(n)}),e(T+", "+I).each(function(){s.scrollOverflowHandler.remove(e(this)),e(this).removeClass(X+" "+g)}),Ze(Xn),Xn.find(B+", "+U+", "+W).each(function(){e(this).replaceWith(this.childNodes)}),zn.scrollTop(0);var n=[x,D,Y];e.each(n,function(n,o){e("."+o).removeClass(o)})}function Fn(e,n,o){s[e]=n,"internal"!==o&&(to[e]=n)}function Hn(){return e("html").hasClass(v)?void qn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(s.continuousVertical&&(s.loopTop||s.loopBottom)&&(s.continuousVertical=!1,qn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),s.scrollBar&&s.scrollOverflow&&qn("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),s.continuousVertical&&s.scrollBar&&(s.continuousVertical=!1,qn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),void e.each(s.anchors,function(n,o){var t=re.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==o.toLowerCase()}),i=re.find("[id]").filter(function(){return this.id&&this.id.toLowerCase()==o.toLowerCase()});(i.length||t.length)&&(qn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&qn("error",'"'+o+'" is is being used by another element `id` property'),t.length&&qn("error",'"'+o+'" is is being used by another element `name` property'))}))}function qn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(v))return void Hn();var zn=e("html, body"),On=e("body"),Dn=e.fn.fullpage;s=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:r,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:b,slideSelector:O,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},s),Hn(),e.extend(e.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),e.extend(e.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}}),Dn.setAutoScrolling=function(n,o){Fn("autoScrolling",n,o);var t=e(C);s.autoScrolling&&!s.scrollBar?(zn.css({overflow:"hidden",height:"100%"}),Dn.setRecordHistory(to.recordHistory,"internal"),Xn.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&Bn(t.position().top)):(zn.css({overflow:"visible",height:"initial"}),Dn.setRecordHistory(!1,"internal"),Xn.css({"-ms-touch-action":"","touch-action":""}),Bn(0),t.length&&zn.scrollTop(t.position().top))},Dn.setRecordHistory=function(e,n){Fn("recordHistory",e,n)},Dn.setScrollingSpeed=function(e,n){Fn("scrollingSpeed",e,n)},Dn.setFitToSection=function(e,n){Fn("fitToSection",e,n)},Dn.setLockAnchors=function(e){s.lockAnchors=e},Dn.setMouseWheelScrolling=function(e){e?(yn(),bn()):(wn(),xn())},Dn.setAllowScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){En(n,o,"m")})):n?(Dn.setMouseWheelScrolling(!0),Tn()):(Dn.setMouseWheelScrolling(!1),Cn())},Dn.setKeyboardScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){En(n,o,"k")})):s.keyboardScrolling=n},Dn.moveSectionUp=function(){var n=e(C).prev(T);n.length||!s.loopTop&&!s.continuousVertical||(n=e(T).last()),n.length&&Ce(n,null,!0)},Dn.moveSectionDown=function(){var n=e(C).next(T);n.length||!s.loopBottom&&!s.continuousVertical||(n=e(T).first()),n.length&&Ce(n,null,!1)},Dn.silentMoveTo=function(e,n){requestAnimFrame(function(){Dn.setScrollingSpeed(0,"internal")}),Dn.moveTo(e,n),requestAnimFrame(function(){Dn.setScrollingSpeed(to.scrollingSpeed,"internal")})},Dn.moveTo=function(e,n){var o=cn(e);"undefined"!=typeof n?dn(e,n):o.length>0&&Ce(o)},Dn.moveSlideRight=function(e){be("next",e)},Dn.moveSlideLeft=function(e){be("prev",e)},Dn.reBuild=function(n){if(!Xn.hasClass(p)){Kn=!0,requestAnimFrame(function(){Kn=!0});var o=ie.outerWidth();Nn=ie.height(),s.resize&&$e(Nn,o),e(T).each(function(){var n=e(this).find(W),o=e(this).find(I);s.verticalCentered&&e(this).find(B).css("height",ln(e(this))+"px"),e(this).css("height",Nn+"px"),s.scrollOverflow&&(o.length?o.each(function(){rn(e(this))}):rn(e(this))),o.length>1&&je(n,n.find(P))});var t=e(C),i=t.index(T);i&&Dn.silentMoveTo(i+1),Kn=!1,requestAnimFrame(function(){Kn=!1}),e.isFunction(s.afterResize)&&n&&s.afterResize.call(Xn),e.isFunction(s.afterReBuild)&&!n&&s.afterReBuild.call(Xn)}},Dn.setResponsive=function(n){var o=On.hasClass(u);n?o||(Dn.setAutoScrolling(!1,"internal"),Dn.setFitToSection(!1,"internal"),e(F).hide(),On.addClass(u)):o&&(Dn.setAutoScrolling(to.autoScrolling,"internal"),Dn.setFitToSection(to.autoScrolling,"internal"),e(F).show(),On.removeClass(u))};var In,Pn,Vn,Wn=!1,Yn=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Un="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Xn=e(this),Nn=ie.height(),Kn=!1,jn=!0,Qn=!0,Gn=[],Jn={};Jn.m={up:!0,down:!0,left:!0,right:!0},Jn.k=e.extend(!0,{},Jn.m);var Zn,$n,_n,eo,no,oo,to=e.extend(!0,{},s);e(this).length&&(c(),f());var io=!1,ro=0,ao=0,lo=0,so=0,co=0,fo=(new Date).getTime();n.requestAnimFrame=function(){return n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(e){e()}}();var uo=0,ho=0,po=Nn;Dn.destroy=function(n){Dn.setAutoScrolling(!1,"internal"),Dn.setAllowScrolling(!1),Dn.setKeyboardScrolling(!1),Xn.addClass(p),clearTimeout(_n),clearTimeout($n),clearTimeout(Zn),clearTimeout(eo),clearTimeout(no),ie.off("scroll",de).off("hashchange",ze).off("resize",Qe),re.off("click",F+" a").off("mouseenter",F+" li").off("mouseleave",F+" li").off("click",j).off("mouseover",s.normalScrollElements).off("mouseout",s.normalScrollElements),e(T).off("click",G),clearTimeout(_n),clearTimeout($n),n&&Rn()}};var ae={afterRender:function(e){var n=e.find(V),o=e.find(c);n.length&&(o=n.find(P)),o.mouseover()},create:function(e,n){e.find(c).slimScroll({allowPageScroll:!0,height:n+"px",size:"10px",alwaysVisible:!0})},isScrolled:function(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0},scrollable:function(e){return e.find(W).length?e.find(P).find(c):e.find(c)},scrollHeight:function(e){return e.find(c).get(0).scrollHeight},remove:function(e){e.find(c).children().first().unwrap().unwrap(),e.find(f).remove(),e.find(d).remove()},update:function(e,n){e.find(c).css("height",n+"px").parent().css("height",n+"px")},wrapContent:function(){return'<div class="'+s+'"></div>'}};r=ae});



/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js)
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(g){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function s(d){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}function m(d,f,g){k=!1;var e=d,h=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),h),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());g&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);u();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",s,!1),this.addEventListener("mousewheel",s,!1)):document.attachEvent("onmousewheel",s)}function v(){r=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:r+"px"});var a=r==b.outerHeight()?"none":"block";c.css({display:a})}
function u(){v();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;r>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&w||x||y||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var w,x,y,A,z,r,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.parent().find("."+a.barClass),h=b.parent().find("."+
a.railClass);v();if(f.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==g.height?b.parent().height():g.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});h.hover(function(){u()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){w=!0;u();p()},function(){w=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});v();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);


/* Knob JS */
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var t={},n=Math.max,r=Math.min;t.c={};t.c.d=e(document);t.c.t=function(e){return e.originalEvent.touches.length-1};t.o=function(){var n=this;this.o=null;this.$=null;this.i=null;this.g=null;this.v=null;this.cv=null;this.x=0;this.y=0;this.w=0;this.h=0;this.$c=null;this.c=null;this.t=0;this.isInit=false;this.fgColor=null;this.pColor=null;this.dH=null;this.cH=null;this.eH=null;this.rH=null;this.scale=1;this.relative=false;this.relativeWidth=false;this.relativeHeight=false;this.$div=null;this.run=function(){var t=function(e,t){var r;for(r in t){n.o[r]=t[r]}n._carve().init();n._configure()._draw()};if(this.$.data("kontroled"))return;this.$.data("kontroled",true);this.extend();this.o=e.extend({min:this.$.data("min")!==undefined?this.$.data("min"):0,max:this.$.data("max")!==undefined?this.$.data("max"):100,stopper:true,readOnly:this.$.data("readonly")||this.$.attr("readonly")==="readonly",cursor:this.$.data("cursor")===true&&30||this.$.data("cursor")||0,thickness:this.$.data("thickness")&&Math.max(Math.min(this.$.data("thickness"),1),.01)||.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:this.$.data("displayinput")==null||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor"),font:this.$.data("font")||"Arial",fontWeight:this.$.data("font-weight")||"bold",inline:false,step:this.$.data("step")||1,rotation:this.$.data("rotation"),draw:null,change:null,cancel:null,release:null,format:function(e){return e},parse:function(e){return parseFloat(e)}},this.o);this.o.flip=this.o.rotation==="anticlockwise"||this.o.rotation==="acw";if(!this.o.inputColor){this.o.inputColor=this.o.fgColor}if(this.$.is("fieldset")){this.v={};this.i=this.$.find("input");this.i.each(function(t){var r=e(this);n.i[t]=r;n.v[t]=n.o.parse(r.val());r.bind("change blur",function(){var e={};e[t]=r.val();n.val(n._validate(e))})});this.$.find("legend").remove()}else{this.i=this.$;this.v=this.o.parse(this.$.val());this.v===""&&(this.v=this.o.min);this.$.bind("change blur",function(){n.val(n._validate(n.o.parse(n.$.val())))})}!this.o.displayInput&&this.$.hide();this.$c=e(document.createElement("canvas")).attr({width:this.o.width,height:this.o.height});this.$div=e('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+"px;"+'"></div>');this.$.wrap(this.$div).before(this.$c);this.$div=this.$.parent();if(typeof G_vmlCanvasManager!=="undefined"){G_vmlCanvasManager.initElement(this.$c[0])}this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null;if(!this.c){throw{name:"CanvasNotSupportedException",message:"Canvas not supported. Please use excanvas on IE8.0.",toString:function(){return this.name+": "+this.message}}}this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1);this.relativeWidth=this.o.width%1!==0&&this.o.width.indexOf("%");this.relativeHeight=this.o.height%1!==0&&this.o.height.indexOf("%");this.relative=this.relativeWidth||this.relativeHeight;this._carve();if(this.v instanceof Object){this.cv={};this.copy(this.v,this.cv)}else{this.cv=this.v}this.$.bind("configure",t).parent().bind("configure",t);this._listen()._configure()._xy().init();this.isInit=true;this.$.val(this.o.format(this.v));this._draw();return this};this._carve=function(){if(this.relative){var e=this.relativeWidth?this.$div.parent().width()*parseInt(this.o.width)/100:this.$div.parent().width(),t=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100:this.$div.parent().height();this.w=this.h=Math.min(e,t)}else{this.w=this.o.width;this.h=this.o.height}this.$div.css({width:this.w+"px",height:this.h+"px"});this.$c.attr({width:this.w,height:this.h});if(this.scale!==1){this.$c[0].width=this.$c[0].width*this.scale;this.$c[0].height=this.$c[0].height*this.scale;this.$c.width(this.w);this.$c.height(this.h)}return this};this._draw=function(){var e=true;n.g=n.c;n.clear();n.dH&&(e=n.dH());e!==false&&n.draw()};this._touch=function(e){var r=function(e){var t=n.xy2val(e.originalEvent.touches[n.t].pageX,e.originalEvent.touches[n.t].pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};this.t=t.c.t(e);r(e);t.c.d.bind("touchmove.k",r).bind("touchend.k",function(){t.c.d.unbind("touchmove.k touchend.k");n.val(n.cv)});return this};this._mouse=function(e){var r=function(e){var t=n.xy2val(e.pageX,e.pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};r(e);t.c.d.bind("mousemove.k",r).bind("keyup.k",function(e){if(e.keyCode===27){t.c.d.unbind("mouseup.k mousemove.k keyup.k");if(n.eH&&n.eH()===false)return;n.cancel()}}).bind("mouseup.k",function(e){t.c.d.unbind("mousemove.k mouseup.k keyup.k");n.val(n.cv)});return this};this._xy=function(){var e=this.$c.offset();this.x=e.left;this.y=e.top;return this};this._listen=function(){if(!this.o.readOnly){this.$c.bind("mousedown",function(e){e.preventDefault();n._xy()._mouse(e)}).bind("touchstart",function(e){e.preventDefault();n._xy()._touch(e)});this.listen()}else{this.$.attr("readonly","readonly")}if(this.relative){e(window).resize(function(){n._carve().init();n._draw()})}return this};this._configure=function(){if(this.o.draw)this.dH=this.o.draw;if(this.o.change)this.cH=this.o.change;if(this.o.cancel)this.eH=this.o.cancel;if(this.o.release)this.rH=this.o.release;if(this.o.displayPrevious){this.pColor=this.h2rgba(this.o.fgColor,"0.4");this.fgColor=this.h2rgba(this.o.fgColor,"0.6")}else{this.fgColor=this.o.fgColor}return this};this._clear=function(){this.$c[0].width=this.$c[0].width};this._validate=function(e){var t=~~((e<0?-.5:.5)+e/this.o.step)*this.o.step;return Math.round(t*100)/100};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(e){};this.val=function(e){};this.xy2val=function(e,t){};this.draw=function(){};this.clear=function(){this._clear()};this.h2rgba=function(e,t){var n;e=e.substring(1,7);n=[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)];return"rgba("+n[0]+","+n[1]+","+n[2]+","+t+")"};this.copy=function(e,t){for(var n in e){t[n]=e[n]}}};t.Dial=function(){t.o.call(this);this.startAngle=null;this.xy=null;this.radius=null;this.lineWidth=null;this.cursorExt=null;this.w2=null;this.PI2=2*Math.PI;this.extend=function(){this.o=e.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:true},this.o)};this.val=function(e,t){if(null!=e){e=this.o.parse(e);if(t!==false&&e!=this.v&&this.rH&&this.rH(e)===false){return}this.cv=this.o.stopper?n(r(e,this.o.max),this.o.min):e;this.v=this.cv;this.$.val(this.o.format(this.v));this._draw()}else{return this.v}};this.xy2val=function(e,t){var i,s;i=Math.atan2(e-(this.x+this.w2),-(t-this.y-this.w2))-this.angleOffset;if(this.o.flip){i=this.angleArc-i-this.PI2}if(this.angleArc!=this.PI2&&i<0&&i>-.5){i=0}else if(i<0){i+=this.PI2}s=i*(this.o.max-this.o.min)/this.angleArc+this.o.min;this.o.stopper&&(s=n(r(s,this.o.max),this.o.min));return s};this.listen=function(){var t=this,i,s,o=function(e){e.preventDefault();var o=e.originalEvent,u=o.detail||o.wheelDeltaX,a=o.detail||o.wheelDeltaY,f=t._validate(t.o.parse(t.$.val()))+(u>0||a>0?t.o.step:u<0||a<0?-t.o.step:0);f=n(r(f,t.o.max),t.o.min);t.val(f,false);if(t.rH){clearTimeout(i);i=setTimeout(function(){t.rH(f);i=null},100);if(!s){s=setTimeout(function(){if(i)t.rH(f);s=null},200)}}},u,a,f=1,l={37:-t.o.step,38:t.o.step,39:t.o.step,40:-t.o.step};this.$.bind("keydown",function(i){var s=i.keyCode;if(s>=96&&s<=105){s=i.keyCode=s-48}u=parseInt(String.fromCharCode(s));if(isNaN(u)){s!==13&&s!==8&&s!==9&&s!==189&&(s!==190||t.$.val().match(/\./))&&i.preventDefault();if(e.inArray(s,[37,38,39,40])>-1){i.preventDefault();var o=t.o.parse(t.$.val())+l[s]*f;t.o.stopper&&(o=n(r(o,t.o.max),t.o.min));t.change(t._validate(o));t._draw();a=window.setTimeout(function(){f*=2},30)}}}).bind("keyup",function(e){if(isNaN(u)){if(a){window.clearTimeout(a);a=null;f=1;t.val(t.$.val())}}else{t.$.val()>t.o.max&&t.$.val(t.o.max)||t.$.val()<t.o.min&&t.$.val(t.o.min)}});this.$c.bind("mousewheel DOMMouseScroll",o);this.$.bind("mousewheel DOMMouseScroll",o)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max){this.v=this.o.min}this.$.val(this.v);this.w2=this.w/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2*this.scale;this.lineWidth=this.xy*this.o.thickness;this.lineCap=this.o.lineCap;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var e=n(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:(this.w/2+4>>0)+"px",height:(this.w/3>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":(this.w/3>>0)+"px","margin-left":"-"+(this.w*3/4+2>>0)+"px",border:0,background:"none",font:this.o.fontWeight+" "+(this.w/e>>0)+"px "+this.o.font,"text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})};this.change=function(e){this.cv=e;this.$.val(this.o.format(e))};this.angle=function(e){return(e-this.o.min)*this.angleArc/(this.o.max-this.o.min)};this.arc=function(e){var t,n;e=this.angle(e);if(this.o.flip){t=this.endAngle+1e-5;n=t-e-1e-5}else{t=this.startAngle-1e-5;n=t+e+1e-5}this.o.cursor&&(t=n-this.cursorExt)&&(n=n+this.cursorExt);return{s:t,e:n,d:this.o.flip&&!this.o.cursor}};this.draw=function(){var e=this.g,t=this.arc(this.cv),n,r=1;e.lineWidth=this.lineWidth;e.lineCap=this.lineCap;if(this.o.bgColor!=="none"){e.beginPath();e.strokeStyle=this.o.bgColor;e.arc(this.xy,this.xy,this.radius,this.endAngle-1e-5,this.startAngle+1e-5,true);e.stroke()}if(this.o.displayPrevious){n=this.arc(this.v);e.beginPath();e.strokeStyle=this.pColor;e.arc(this.xy,this.xy,this.radius,n.s,n.e,n.d);e.stroke();r=this.cv==this.v}e.beginPath();e.strokeStyle=r?this.o.fgColor:this.fgColor;e.arc(this.xy,this.xy,this.radius,t.s,t.e,t.d);e.stroke()};this.cancel=function(){this.val(this.v)}};e.fn.dial=e.fn.knob=function(n){return this.each(function(){var r=new t.Dial;r.o=n;r.$=e(this);r.run()}).parent()}})


/* Vegas Image slideshow */
!function(t){"use strict";var s={slide:0,delay:5e3,preload:!1,preloadImage:!1,preloadVideo:!1,timer:!0,overlay:!1,autoplay:!0,shuffle:!1,cover:!0,color:null,align:"center",valign:"center",transition:"fade",transitionDuration:1e3,transitionRegister:[],animation:null,animationDuration:"auto",animationRegister:[],init:function(){},play:function(){},pause:function(){},walk:function(){},slides:[]},i={},e=function(i,e){this.elmt=i,this.settings=t.extend({},s,t.vegas.defaults,e),this.slide=this.settings.slide,this.total=this.settings.slides.length,this.noshow=this.total<2,this.paused=!this.settings.autoplay||this.noshow,this.$elmt=t(i),this.$timer=null,this.$overlay=null,this.$slide=null,this.timeout=null,this.transitions=["fade","fade2","blur","blur2","flash","flash2","negative","negative2","burn","burn2","slideLeft","slideLeft2","slideRight","slideRight2","slideUp","slideUp2","slideDown","slideDown2","zoomIn","zoomIn2","zoomOut","zoomOut2","swirlLeft","swirlLeft2","swirlRight","swirlRight2"],this.animations=["kenburns","kenburnsLeft","kenburnsRight","kenburnsUp","kenburnsUpLeft","kenburnsUpRight","kenburnsDown","kenburnsDownLeft","kenburnsDownRight"],this.settings.transitionRegister instanceof Array==!1&&(this.settings.transitionRegister=[this.settings.transitionRegister]),this.settings.animationRegister instanceof Array==!1&&(this.settings.animationRegister=[this.settings.animationRegister]),this.transitions=this.transitions.concat(this.settings.transitionRegister),this.animations=this.animations.concat(this.settings.animationRegister),this.support={objectFit:"objectFit"in document.body.style,transition:"transition"in document.body.style||"WebkitTransition"in document.body.style,video:t.vegas.isVideoCompatible()},this.settings.shuffle===!0&&this.shuffle(),this._init()};e.prototype={_init:function(){var s,i,e,n="BODY"===this.elmt.tagName,o=this.settings.timer,a=this.settings.overlay,r=this;this._preload(),n||(this.$elmt.css("height",this.$elmt.css("height")),s=t('<div class="vegas-wrapper">').css("overflow",this.$elmt.css("overflow")).css("padding",this.$elmt.css("padding")),this.$elmt.css("padding")||s.css("padding-top",this.$elmt.css("padding-top")).css("padding-bottom",this.$elmt.css("padding-bottom")).css("padding-left",this.$elmt.css("padding-left")).css("padding-right",this.$elmt.css("padding-right")),this.$elmt.clone(!0).children().appendTo(s),this.elmt.innerHTML=""),o&&this.support.transition&&(e=t('<div class="vegas-timer"><div class="vegas-timer-progress">'),this.$timer=e,this.$elmt.prepend(e)),a&&(i=t('<div class="vegas-overlay">'),"string"==typeof a&&i.css("background-image","url("+a+")"),this.$overlay=i,this.$elmt.prepend(i)),this.$elmt.addClass("vegas-container"),n||this.$elmt.append(s),setTimeout(function(){r.trigger("init"),r._goto(r.slide),r.settings.autoplay&&r.trigger("play")},1)},_preload:function(){var t,s,i;for(i=0;i<this.settings.slides.length;i++)(this.settings.preload||this.settings.preloadImages)&&this.settings.slides[i].src&&(s=new Image,s.src=this.settings.slides[i].src),(this.settings.preload||this.settings.preloadVideos)&&this.support.video&&this.settings.slides[i].video&&(t=this._video(this.settings.slides[i].video))},_random:function(t){return t[Math.floor(Math.random()*(t.length-1))]},_slideShow:function(){var t=this;this.total>1&&!this.paused&&!this.noshow&&(this.timeout=setTimeout(function(){t.next()},this._options("delay")))},_timer:function(t){var s=this;clearTimeout(this.timeout),this.$timer&&(this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration","0ms"),this.paused||this.noshow||t&&setTimeout(function(){s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration",s._options("delay")-100+"ms")},100))},_video:function(t){var s,e,n=t.toString();return i[n]?i[n]:(t instanceof Array==!1&&(t=[t]),s=document.createElement("video"),s.preload=!0,t.forEach(function(t){e=document.createElement("source"),e.src=t,s.appendChild(e)}),i[n]=s,s)},_fadeOutSound:function(t,s){var i=this,e=s/10,n=t.volume-.09;n>0?(t.volume=n,setTimeout(function(){i._fadeOutSound(t,s)},e)):t.pause()},_fadeInSound:function(t,s){var i=this,e=s/10,n=t.volume+.09;1>n&&(t.volume=n,setTimeout(function(){i._fadeInSound(t,s)},e))},_options:function(t,s){return void 0===s&&(s=this.slide),void 0!==this.settings.slides[s][t]?this.settings.slides[s][t]:this.settings[t]},_goto:function(s){function i(){f._timer(!0),setTimeout(function(){y&&(f.support.transition?(h.css("transition","all "+_+"ms").addClass("vegas-transition-"+y+"-out"),h.each(function(){var t=h.find("video").get(0);t&&(t.volume=1,f._fadeOutSound(t,_))}),e.css("transition","all "+_+"ms").addClass("vegas-transition-"+y+"-in")):e.fadeIn(_));for(var t=0;t<h.length-4;t++)h.eq(t).remove();f.trigger("walk"),f._slideShow()},100)}"undefined"==typeof this.settings.slides[s]&&(s=0),this.slide=s;var e,n,o,a,r,h=this.$elmt.children(".vegas-slide"),d=this.settings.slides[s].src,l=this.settings.slides[s].video,u=this._options("delay"),g=this._options("align"),c=this._options("valign"),p=this._options("color")||this.$elmt.css("background-color"),m=this._options("cover")?"cover":"contain",f=this,v=h.length,y=this._options("transition"),_=this._options("transitionDuration"),w=this._options("animation"),b=this._options("animationDuration");("random"===y||y instanceof Array)&&(y=this._random(y instanceof Array?y:this.transitions)),("random"===w||w instanceof Array)&&(w=this._random(w instanceof Array?w:this.animations)),("auto"===_||_>u)&&(_=u),"auto"===b&&(b=u),e=t('<div class="vegas-slide"></div>'),this.support.transition&&y&&e.addClass("vegas-transition-"+y),this.support.video&&l?(a=this._video(l instanceof Array?l:l.src),a.loop=void 0!==l.loop?l.loop:!0,a.muted=void 0!==l.mute?l.mute:!0,a.muted===!1?(a.volume=0,this._fadeInSound(a,_)):a.pause(),o=t(a).addClass("vegas-video").css("background-color",p),this.support.objectFit?o.css("object-position",g+" "+c).css("object-fit",m).css("width","100%").css("height","100%"):"contain"===m&&o.css("width","100%").css("height","100%"),e.append(o)):(r=new Image,n=t('<div class="vegas-slide-inner"></div>').css("background-image","url("+d+")").css("background-color",p).css("background-position",g+" "+c).css("background-size",m),this.support.transition&&w&&n.addClass("vegas-animation-"+w).css("animation-duration",b+"ms"),e.append(n)),this.support.transition||e.css("display","none"),v?h.eq(v-1).after(e):this.$elmt.prepend(e),f._timer(!1),a?(4===a.readyState&&(a.currentTime=0),a.play(),i()):(r.src=d,r.onload=i)},shuffle:function(){for(var t,s,i=this.total-1;i>0;i--)s=Math.floor(Math.random()*(i+1)),t=this.settings.slides[i],this.settings.slides[i]=this.settings.slides[s],this.settings.slides[s]=t},play:function(){this.paused&&(this.paused=!1,this.next(),this.trigger("play"))},pause:function(){this._timer(!1),this.paused=!0,this.trigger("pause")},toggle:function(){this.paused?this.play():this.pause()},playing:function(){return!this.paused&&!this.noshow},current:function(t){return t?{slide:this.slide,data:this.settings.slides[this.slide]}:this.slide},jump:function(t){0>t||t>this.total-1||t===this.slide||(this.slide=t,this._goto(this.slide))},next:function(){this.slide++,this.slide>=this.total&&(this.slide=0),this._goto(this.slide)},previous:function(){this.slide--,this.slide<0&&(this.slide=this.total-1),this._goto(this.slide)},trigger:function(t){var s=[];s="init"===t?[this.settings]:[this.slide,this.settings.slides[this.slide]],this.$elmt.trigger("vegas"+t,s),"function"==typeof this.settings[t]&&this.settings[t].apply(this.$elmt,s)},options:function(i,e){var n=this.settings.slides.slice();if("object"==typeof i)this.settings=t.extend({},s,t.vegas.defaults,i);else{if("string"!=typeof i)return this.settings;if(void 0===e)return this.settings[i];this.settings[i]=e}this.settings.slides!==n&&(this.total=this.settings.slides.length,this.noshow=this.total<2,this._preload())}},t.fn.vegas=function(t){var s,i=arguments,n=!1;if(void 0===t||"object"==typeof t)return this.each(function(){this._vegas||(this._vegas=new e(this,t))});if("string"==typeof t){if(this.each(function(){var e=this._vegas;if(!e)throw new Error("No Vegas applied to this element.");"function"==typeof e[t]&&"_"!==t[0]?s=e[t].apply(e,[].slice.call(i,1)):n=!0}),n)throw new Error('No method "'+t+'" in Vegas.');return void 0!==s?s:this}},t.vegas={},t.vegas.defaults=s,t.vegas.isVideoCompatible=function(){return!/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)}}(window.jQuery||window.Zepto);
//# sourceMappingURL=vegas.min.js.map


/*	--------------------------------------------------------------------
	MaxImage 2.0 (Fullscreen Slideshow for use with jQuery Cycle Plugin)
	--------------------------------------------------------------------
	
	Examples and documentation at: http://www.aaronvanderzwan.com/maximage/2.0/
	Copyright (c) 2007-2012 Aaron Vanderzwan
	Dual licensed under the MIT and GPL licenses.
	
	NOTES:
	This plugin is intended to simplify the creation of fullscreen 
	background slideshows.  It is intended to be used alongside the 
	jQuery Cycle plugin: 
	http://jquery.malsup.com/cycle/
	
	If you simply need a fullscreen background image, please
	refer to the following document for ways to do this that
	are much more simple:
	http://css-tricks.com/perfect-full-page-background-image/
	
	If you have any questions please contact Aaron Vanderzwan
	at http://www.aaronvanderzwan.com/blog/
	Documentation at:
	http://blog.aaronvanderzwan.com/2012/07/maximage-2-0/
	
	HISTORY:
	MaxImage 2.0 is a project first built as jQuery MaxImage Plugin 
	(http://www.aaronvanderzwan.com/maximage/). Once CSS3 came along, 
	the background-size:cover solved the problem MaxImage
	was intended to solve.  However, fully customizable
	fullscreen slideshows is still fairly complex and I have not
	found any helpers for integrating with the jQuery Cycle Plugin.
	MaxCycle is intended to solve this problem.
	
	TABLE OF CONTENTS:
	@Modern
		@setup
		@resize
		@preload
	@Old
		@setup
		@preload
		@onceloaded
		@maximage
		@windowresize
		@doneresizing
	@Cycle
		@setup
	@Adjust
		@center
		@fill
		@maxcover
		@maxcontain
	@Utils
		@browser_tests
		@construct_slide_object
		@sizes
	@modern_browser
	@debug
		
*/
/*!	
 * Maximage Version: 2.0.8 (16-Jan-2012) - http://www.aaronvanderzwan.com/maximage/2.0/
 */



(function ($) {
	"use strict";
	$.fn.maximage = function (settings, helperSettings) {

		var config;

		if (typeof settings == 'object' || settings === undefined) config = $.extend( $.fn.maximage.defaults, settings || {} );
		if (typeof settings == 'string') config = $.fn.maximage.defaults;
		
		/*jslint browser: true*/
		$.Body = $('body');
		$.Window = $(window);
		$.Scroll = $('html, body');
		$.Events = {
			RESIZE: 'resize'
		};
		
		this.each(function() {
			var $self = $(this),
				preload_count = 0,
				imageCache = [];
			
			/* --------------------- */
			
			// @Modern
			
			/* 
			MODERN BROWSER NOTES:
				Modern browsers have CSS3 background-size option so we setup the DOM to be the following structure for cycle plugin:
				div = cycle
					div = slide with background-size:cover
					div = slide with background-size:cover
					etc.
			*/
			
			var Modern = {
				setup: function(){
					if($.Slides.length > 0){
						// Setup images
						for(var i in $.Slides) {
							// Set our image
							var $img = $.Slides[i];
							
							// Create a div with a background image so we can use CSS3's position cover (for modern browsers)
							$self.append('<div class="mc-image ' + $img.theclass + '" title="' + $img.alt + '" style="background-image:url(\'' + $img.url + '\');' + $img.style + '" data-href="'+ $img.datahref +'">'+ $img.content +'</div>');
						}
						
						// Begin our preload process (increments itself after load)
						Modern.preload(0);
						
						// If using Cycle, this resets the height and width of each div to always fill the window; otherwise can be done with CSS
						Modern.resize();
					}
				},
				preload: function(n){
					// Preload all of the images but never show them, just use their completion so we know that they are done
					// 		and so that the browser can cache them / fade them in smoothly
					
					// Create new image object
					var $img = $('<img/>');
					$img.load(function() {
						// Once the first image has completed loading, start the slideshow, etc.
						if(preload_count==0) {
							// Only start cycle after first image has loaded
							Cycle.setup();
							
							// Run user defined onFirstImageLoaded() function
							config.onFirstImageLoaded();
						}
						
						// preload_count starts with 0, $.Slides.length starts with 1
						if(preload_count==($.Slides.length-1)) {
							// If we have just loaded the final image, run the user defined function onImagesLoaded()
							config.onImagesLoaded( $self );
						}else{ 
							// Increment the counter
							preload_count++;
							
							// Load the next image
							Modern.preload(preload_count);
						}
					});
					
					// Set the src... this triggers begin of load
					$img[0].src = $.Slides[n].url;
					
					// Push to external array to avoid cleanup by aggressive garbage collectors
					imageCache.push($img[0]);
				},
				resize: function(){
					// Cycle sets the height of each slide so when we resize our browser window this becomes a problem.
					//  - the cycle option 'slideResize' has to be set to false otherwise it will trump our resize
					$.Window
						.bind($.Events.RESIZE,
						function(){
							// Remove scrollbars so we can take propper measurements
							$.Scroll.addClass('mc-hide-scrolls');
							
							// Set vars so we don't have to constantly check it
							$.Window
								.data('h', Utils.sizes().h)
								.data('w', Utils.sizes().w);
							
							// Set container and slides height and width to match the window size
							$self
								.height($.Window.data('h')).width($.Window.data('w'))
								.children()
								.height($.Window.data('h')).width($.Window.data('w'));
							
							// This is special noise for cycle (cycle has separate height and width for each slide)
							$self.children().each(function(){
								this.cycleH = $.Window.data('h');
								this.cycleW = $.Window.data('w');
							});
							
							// Put the scrollbars back to how they were
							$($.Scroll).removeClass('mc-hide-scrolls');
						});
				}
			}
			
			
			
			/* --------------------- */
			
			// @Old
			
			/* 
			OLD BROWSER NOTES:
				We setup the dom to be the following structure for cycle plugin on old browsers:
				div = cycle
					div = slide
						img = full screen size image
					div = slide
						img = full screen size image
					etc.
			*/
			
			var Old = {
				setup: function(){
					var c, t, $div;
					
					// Clear container
					if($.BrowserTests.msie && !config.overrideMSIEStop){
						// Stop IE from continually trying to preload images that we already removed
						document.execCommand("Stop", false);
					}
					$self.html('');
					
					$.Body.addClass('mc-old-browser');
					
					if($.Slides.length > 0){
						// Remove scrollbars so we can take propper measurements
						$.Scroll.addClass('mc-hide-scrolls');
						
						// Cache our new dimensions
						$.Window
							.data('h', Utils.sizes().h)
							.data('w', Utils.sizes().w);
						
						// Add our loading div to the DOM
						$('body').append($("<div></div>").attr("class", "mc-loader").css({'position':'absolute','left':'-9999px'}));
						
						//  Loop through slides
						for(var j in $.Slides) {
							// Determine content (if container or image)
							if($.Slides[j].content.length == 0){
								c = '<img src="' + $.Slides[j].url + '" />';
							}else{
								c = $.Slides[j].content;
							}
							
							// Create Div
							$div = $("<div>" + c + "</div>").attr("class", "mc-image mc-image-n" + j + " " + $.Slides[j].theclass);
							
							// Add new container div to the DOM
							$self.append( $div );
							
							// Account for slides without images
							if($('.mc-image-n' + j).children('img').length == 0){
							}else{
								// Add first image to loader to get that started
								$('div.mc-loader').append( $('.mc-image-n' + j).children('img').first().clone().addClass('not-loaded') );
							}
						}
						
						// Begin preloading
						Old.preload();
						
						// Setup the resize function to listen for window changes
						Old.windowResize();
					}
				},
				preload: function(){
					// Intervals to tell if an images have loaded
					var t = setInterval(function() {
						$('.mc-loader').children('img').each(function(i){
							// Check if image is loaded
							var $img = $(this);
							
							// Loop through not-loaded images
							if($img.hasClass('not-loaded')){
								if( $img.height() > 0 ){
									// Remove Dom notice
									$(this).removeClass('not-loaded');
									
									// Set the dimensions
									var $img1 = $('div.mc-image-n' + i).children('img').first();
									
									$img1
										.data('h', $img.height())
										.data('w', $img.width())
										.data('ar', ($img.width() / $img.height()));
									
									// Go on
									Old.onceLoaded(i)
								}
							}
						});
					
						if( $('.not-loaded').length == 0){
							// Remove our loader element because all of our images are now loaded
							$('.mc-loader').remove();
							
							// Clear interval when all images are loaded
							clearInterval(t);
						}
					}, 1000);
				},
				onceLoaded: function(m){
					// Do maximage magic
					Old.maximage(m);
					
					// Once the first image has completed loading, start the slideshow, etc.
					if(m == 0) {
						// If we changed the visibility before, make sure it is back on
						$self.css({'visibility':'visible'});
						
						// Run user defined onFirstImageLoaded() function
						config.onFirstImageLoaded();
					
					// After everything is done loading, clean up
					}else if(m == $.Slides.length - 1){
						// Only start cycle after the first image has loaded
						Cycle.setup();
						
						// Put the scrollbars back to how they were
						$($.Scroll).removeClass('mc-hide-scrolls');
						
						// If we have just loaded the final image, run the user defined function onImagesLoaded()
						config.onImagesLoaded( $self );
						
						if(config.debug) {
							debug(' - Final Maximage - ');debug($self);
						}
					}
				},
				maximage: function(p){
					// Cycle sets the height of each slide so when we resize our browser window this becomes a problem.
					//  - the cycle option 'slideResize' has to be set to false otherwise it will trump our resize
					$('div.mc-image-n' + p)
						.height($.Window.data('h'))
						.width($.Window.data('w'))
						.children('img')
						.first()
						.each(function(){
							Adjust.maxcover($(this));
						});
				},
				windowResize: function(){
					$.Window
						.bind($.Events.RESIZE,
						function(){
							clearTimeout(this.id);
							this.id = setTimeout(Old.doneResizing, 200);
						});
				},
				doneResizing: function(){
					// The final resize (on finish)
					// Remove scrollbars so we can take propper measurements
					$($.Scroll).addClass('mc-hide-scrolls');
					
					// Cache our window's new dimensions
					$.Window
						.data('h', Utils.sizes().h)
						.data('w', Utils.sizes().w);
					
					// Set the container's height and width
					$self.height($.Window.data('h')).width($.Window.data('w'))
					
					// Set slide's height and width to match the window size
					$self.find('.mc-image').each(function(n){
						Old.maximage(n);
					});
					
					// Update cycle's ideas of what our slide's height and width should be
					var curr_opts = $self.data('cycle.opts');
					if(curr_opts != undefined){
						curr_opts.height = $.Window.data('h');
						curr_opts.width = $.Window.data('w');
						jQuery.each(curr_opts.elements, function(index, item) {
						    item.cycleW = $.Window.data('w');
							item.cycleH = $.Window.data('h');
						});
					}
					
					// Put the scrollbars back to how they were
					$($.Scroll).removeClass('mc-hide-scrolls');
				}
			}
			
			
			/* --------------------- */
			
			// @Cycle
			
			var Cycle = {
				setup: function(){
					var h,w;
					
					$self.addClass('mc-cycle');
					
					// Container sizes (if not set)
					$.Window
						.data('h', Utils.sizes().h)
						.data('w', Utils.sizes().w);
					
					// Prefer CSS Transitions
					jQuery.easing.easeForCSSTransition = function(x, t, b, c, d, s) {
						return b+c;
					};
					
					var cycleOptions = $.extend({
						fit:1,
						containerResize:0,
						height:$.Window.data('h'),
						width:$.Window.data('w'),
						slideResize: false,
						easing: ($.BrowserTests.cssTransitions && config.cssTransitions ? 'easeForCSSTransition' : 'swing')
					}, config.cycleOptions);
					
					$self.cycle( cycleOptions );
				}
			}
			
			
			
			/* --------------------- */
			
			// @Adjust = Math to center and fill all elements
			
			var Adjust = {
				center: function($item){
					// Note: if alignment is 'left' or 'right' it can be controlled with CSS once verticalCenter 
					// 	and horizontal center are set to false in the plugin options
					if(config.verticalCenter){
						$item.css({marginTop:(($item.height() - $.Window.data('h'))/2) * -1})
					}
					if(config.horizontalCenter){
						$item.css({marginLeft:(($item.width() - $.Window.data('w'))/2) * -1});
					}
				},
				fill: function($item){
					var $storageEl = $item.is('object') ? $item.parent().first() : $item;
					
					if(typeof config.backgroundSize == 'function'){
						// If someone wants to write their own fill() function, they can: example customBackgroundSize.html
						config.backgroundSize( $item );
					}else if(config.backgroundSize == 'cover'){
						if($.Window.data('w') / $.Window.data('h') < $storageEl.data('ar')){
							$item
								.height($.Window.data('h'))
								.width(($.Window.data('h') * $storageEl.data('ar')).toFixed(0));
						}else{
							$item
								.height(($.Window.data('w') / $storageEl.data('ar')).toFixed(0))
								.width($.Window.data('w'));
						}
					}else if(config.backgroundSize == 'contain'){
						if($.Window.data('w') / $.Window.data('h') < $storageEl.data('ar')){
							$item
								.height(($.Window.data('w') / $storageEl.data('ar')).toFixed(0))
								.width($.Window.data('w'));
						}else{
							$item
								.height($.Window.data('h'))
								.width(($.Window.data('h') * $storageEl.data('ar')).toFixed(0));
						}
					}else{
						debug('The backgroundSize option was not recognized for older browsers.');
					}
				},
				maxcover: function($item){
					Adjust.fill($item);
					Adjust.center($item);
				},
				maxcontain: function($item){
					Adjust.fill($item);
					Adjust.center($item);
				}
			}
			
			
			
			/* --------------------- */
			
			// @Utils = General utilities for the plugin
			
			var Utils = {
				browser_tests: function(){
					var $div = $('<div />')[0],
						vendor = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
						p = 'transition',
						obj = {
							cssTransitions: false,
							cssBackgroundSize: ( "backgroundSize" in $div.style && config.cssBackgroundSize ), // Can override cssBackgroundSize in options
							html5Video: false,
							msie: false
						};
					
					// Test for CSS Transitions
					if(config.cssTransitions){
						if(typeof $div.style[p] == 'string') { obj.cssTransitions = true }
					
						// Tests for vendor specific prop
						p = p.charAt(0).toUpperCase() + p.substr(1);
						for(var i=0; i<vendor.length; i++) {
							if(vendor[i] + p in $div.style) { obj.cssTransitions = true; }
						}
					}
					
					// Check if we can play html5 videos
					if( !!document.createElement('video').canPlayType ) {
						obj.html5Video = true;
					}
					
					// Check for MSIE since we lost $.browser in jQuery
					obj.msie = (Utils.msie() !== undefined);
					
					
					if(config.debug) {
						debug(' - Browser Test - ');debug(obj);
					}
					
					return obj;
				},
				construct_slide_object: function(){
					var obj = new Object(),
						arr = new Array(),
						temp = '';
					
					$self.children().each(function(i){
						var $img = $(this).is('img') ? $(this).clone() : $(this).find('img').first().clone();
						
						// reset obj
						obj = {};
						
						// set attributes to obj
						obj.url = $img.attr('src');
						obj.title = $img.attr('title') != undefined ? $img.attr('title') : '';
						obj.alt = $img.attr('alt') != undefined ? $img.attr('alt') : '';
						obj.theclass = $img.attr('class') != undefined ? $img.attr('class') : '';
						obj.styles = $img.attr('style') != undefined ? $img.attr('style') : '';
						obj.orig = $img.clone();
						obj.datahref = $img.attr('data-href') != undefined ? $img.attr('data-href') : '';
						obj.content = "";
						
						// Setup content for within container
						if($(this).find('img').length > 0){
							if($.BrowserTests.cssBackgroundSize){
								$(this).find('img').first().remove();
							}
							obj.content = $(this).html();
						}
						
						// Stop loading image so we can load them sequentiallyelse{
						$img[0].src = "";
						
						// Remove original object (only on nonIE. IE hangs if you remove an image during load)
						if($.BrowserTests.cssBackgroundSize){
							$(this).remove();
						}
						
						// attach obj to arr
						arr.push(obj);
					});
					
					
					if(config.debug) {
						debug(' - Slide Object - ');debug(arr);
					}
					return arr;
				},
				msie: function(){
				    var undef,
				        v = 3,
				        div = document.createElement('div'),
				        all = div.getElementsByTagName('i');

				    while (
				        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
				        all[0]
				    );
					
				    return v > 4 ? v : undef;
				},
				sizes: function(){
					var sizes = {h:0,w:0};
					
					if(config.fillElement == "window"){
						sizes.h = $.Window.height();
						sizes.w = $.Window.width();
					}else{
						var $fillElement = $self.parents(config.fillElement).first();
						
						// Height
						if($fillElement.height() == 0 || $fillElement.data('windowHeight') == true){
							$fillElement.data('windowHeight',true);
							sizes.h = $.Window.height();
						}else{
							sizes.h = $fillElement.height();
						}
					
						// Width
						if($fillElement.width() == 0 || $fillElement.data('windowWidth') == true){
							$fillElement.data('windowWidth',true);
							sizes.w = $.Window.width();
						}else{
							sizes.w = $fillElement.width();
						}
					}
					
					return sizes;
				}
			}
			
			
			
			/* --------------------- */
			
			// @Instantiation
			
			// Helper Function
			// Run tests to see what our browser can handle
			$.BrowserTests = Utils.browser_tests();
			
			if(typeof settings == 'string'){
				// TODO: Resize object fallback for old browsers,  If we are trying to size an HTML5 video and our browser doesn't support it
				if($.BrowserTests.html5Video || !$self.is('video')) {
					var to, 
						$storageEl = $self.is('object') ? $self.parent().first() : $self; // Can't assign .data() to '<object>'
					
					if( !$.Body.hasClass('mc-old-browser') )
						$.Body.addClass('mc-old-browser');
					
					// Cache our window's new dimensions
					$.Window
						.data('h', Utils.sizes().h)
						.data('w', Utils.sizes().w);
				
					// Please include height and width attributes on your html elements
					$storageEl
						.data('h', $self.height())
						.data('w', $self.width())
						.data('ar', $self.width() / $self.height());
				
					// We want to resize these elements with the window
					$.Window
						.bind($.Events.RESIZE,
						function(){
							// Cache our window's new dimensions
							$.Window
								.data('h', Utils.sizes().h)
								.data('w', Utils.sizes().w);
						
							// Limit resize runs
							to = $self.data('resizer');
							clearTimeout(to);
							to = setTimeout( Adjust[settings]($self), 200 );
							$self.data('resizer', to);
						});
				
					// Initial run
					Adjust[settings]($self);
				}
			}else{
				// Construct array of image objects for us to use
				$.Slides = Utils.construct_slide_object();
				
				// If we are allowing background-size:cover run Modern
				if($.BrowserTests.cssBackgroundSize){
					if(config.debug) debug(' - Using Modern - ');
					Modern.setup();
				}else{
					if(config.debug) debug(' - Using Old - ');
					Old.setup();
				}
			}
		});
		
		// private function for debugging
		function debug($obj) {
			if (window.console && window.console.log) {
				window.console.log($obj);
			}
		}
	}
	
	// Default options
	$.fn.maximage.defaults = {
		debug: false,
		cssBackgroundSize: true,  // Force run the functionality used for newer browsers
		cssTransitions: true,  // Force run the functionality used for old browsers
		verticalCenter: true, // Only necessary for old browsers
		horizontalCenter: true, // Only necessary for old browsers
		scaleInterval: 20, // Only necessary for old browsers
		backgroundSize: 'cover', // Only necessary for old browsers (this can be function)
		fillElement: 'window', // Either 'window' or a CSS selector for a parent element
		overrideMSIEStop: false, // This gives the option to not 'stop' load for MSIE (stops coded background images from loading so we can preload)... 
								 // If setting this option to true, please beware of IE7/8 "Stack Overflow" error but if there are more than 13 slides
								 // The description of the bug: http://blog.aaronvanderzwan.com/forums/topic/stack-overflow-in-ie-7-8/#post-33038
		onFirstImageLoaded: function(){},
		onImagesLoaded: function(){}
	}
})(jQuery);

/* okvideo by okfocus ~ v2.3.2 ~ https://github.com/okfocus/okvideo */
function vimeoPlayerReady(){options=jQuery(window).data("okoptions");var a=jQuery("#okplayer")[0];player=$f(a),window.setTimeout(function(){jQuery("#okplayer").css("visibility","visible")},2e3),player.addEvent("ready",function(){OKEvents.v.onReady(),OKEvents.utils.isMobile()?OKEvents.v.onPlay():(player.addEvent("play",OKEvents.v.onPlay),player.addEvent("pause",OKEvents.v.onPause),player.addEvent("finish",OKEvents.v.onFinish)),player.api("play")})}function onYouTubePlayerAPIReady(){options=jQuery(window).data("okoptions"),player=new YT.Player("okplayer",{videoId:options.video?options.video.id:null,playerVars:{autohide:1,autoplay:0,disablekb:options.keyControls,cc_load_policy:options.captions,controls:options.controls,enablejsapi:1,fs:0,modestbranding:1,origin:window.location.origin||window.location.protocol+"//"+window.location.hostname,iv_load_policy:options.annotations,loop:options.loop,showinfo:0,rel:0,wmode:"opaque",hd:options.hd},events:{onReady:OKEvents.yt.ready,onStateChange:OKEvents.yt.onStateChange,onError:OKEvents.yt.error}})}var player,OKEvents,options;!function(a){"use strict";var b="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D";a.okvideo=function(c){"object"!=typeof c&&(c={video:c});var d=this;d.init=function(){d.options=a.extend({},a.okvideo.options,c),null===d.options.video&&(d.options.video=d.options.source),d.setOptions();var e=d.options.target||a("body"),f=e[0]==a("body")[0]?"fixed":"absolute";e.css({position:"relative"});var g=3===d.options.controls?-999:"auto",h='<div id="okplayer-mask" style="position:'+f+';left:0;top:0;overflow:hidden;z-index:-998;height:100%;width:100%;"></div>';OKEvents.utils.isMobile()?e.append('<div id="okplayer" style="position:'+f+";left:0;top:0;overflow:hidden;z-index:"+g+';height:100%;width:100%;"></div>'):(3===d.options.controls&&e.append(h),1===d.options.adproof?e.append('<div id="okplayer" style="position:'+f+";left:-10%;top:-10%;overflow:hidden;z-index:"+g+';height:120%;width:120%;"></div>'):e.append('<div id="okplayer" style="position:'+f+";left:0;top:0;overflow:hidden;z-index:"+g+';height:100%;width:100%;"></div>')),a("#okplayer-mask").css("background-image","url("+b+")"),null===d.options.playlist.list?"youtube"===d.options.video.provider?d.loadYouTubeAPI():"vimeo"===d.options.video.provider&&(d.options.volume/=100,d.loadVimeoAPI()):d.loadYouTubeAPI()},d.setOptions=function(){for(var b in this.options)this.options[b]===!0&&(this.options[b]=1),this.options[b]===!1&&(this.options[b]=3);null===d.options.playlist.list&&(d.options.video=d.determineProvider()),a(window).data("okoptions",d.options)},d.loadYouTubeAPI=function(){d.insertJS("//www.youtube.com/player_api")},d.loadYouTubePlaylist=function(){player.loadPlaylist(d.options.playlist.list,d.options.playlist.index,d.options.playlist.startSeconds,d.options.playlist.suggestedQuality)},d.loadVimeoAPI=function(){a("#okplayer").replaceWith(function(){return'<iframe src="//player.vimeo.com/video/'+d.options.video.id+"?api=1&title=0&byline=0&portrait=0&playbar=0&loop="+d.options.loop+"&autoplay="+(1===d.options.autoplay?1:0)+'&player_id=okplayer" frameborder="0" style="'+a(this).attr("style")+'visibility:hidden;background-color:black;" id="'+a(this).attr("id")+'"></iframe>'}),d.insertJS("//origin-assets.vimeo.com/js/froogaloop2.min.js",function(){vimeoPlayerReady()})},d.insertJS=function(a,b){var c=document.createElement("script");b&&(c.readyState?c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()}),c.src=a;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)},d.determineProvider=function(){var a=document.createElement("a");if(a.href=d.options.video,/youtube.com/.test(d.options.video))return{provider:"youtube",id:a.href.slice(a.href.indexOf("v=")+2).toString()};if(/vimeo.com/.test(d.options.video))return{provider:"vimeo",id:a.href.split("/")[3].toString()};if(/[-A-Za-z0-9_]+/.test(d.options.video)){var b=new String(d.options.video.match(/[-A-Za-z0-9_]+/));if(11==b.length)return{provider:"youtube",id:b.toString()};for(var c=0;c<d.options.video.length;c++)if("number"!=typeof parseInt(d.options.video[c]))throw"not vimeo but thought it was for a sec";return{provider:"vimeo",id:d.options.video}}throw"OKVideo: Invalid video source"},d.init()},a.okvideo.options={source:null,video:null,playlist:{list:null,index:0,startSeconds:0,suggestedQuality:"default"},disableKeyControl:1,captions:0,loop:1,hd:1,volume:0,adproof:!1,unstarted:null,onFinished:null,onReady:null,onPlay:null,onPause:null,buffering:null,controls:!1,autoplay:!0,annotations:!0,cued:null},a.fn.okvideo=function(b){return b.target=this,this.each(function(){new a.okvideo(b)})}}(jQuery),OKEvents={yt:{ready:function(a){a.target.setVolume(options.volume),1===options.autoplay&&(options.playlist.list?player.loadPlaylist(options.playlist.list,options.playlist.index,options.playlist.startSeconds,options.playlist.suggestedQuality):a.target.playVideo()),OKEvents.utils.isFunction(options.onReady)&&options.onReady()},onStateChange:function(a){switch(a.data){case-1:OKEvents.utils.isFunction(options.unstarted)&&options.unstarted();break;case 0:OKEvents.utils.isFunction(options.onFinished)&&options.onFinished(),options.loop&&a.target.playVideo();break;case 1:OKEvents.utils.isFunction(options.onPlay)&&options.onPlay();break;case 2:OKEvents.utils.isFunction(options.onPause)&&options.onPause();break;case 3:OKEvents.utils.isFunction(options.buffering)&&options.buffering();break;case 5:OKEvents.utils.isFunction(options.cued)&&options.cued();break;default:throw"OKVideo: received invalid data from YT player."}},error:function(a){throw a}},v:{onReady:function(){OKEvents.utils.isFunction(options.onReady)&&options.onReady()},onPlay:function(){OKEvents.utils.isMobile()||player.api("setVolume",options.volume),OKEvents.utils.isFunction(options.onPlay)&&options.onPlay()},onPause:function(){OKEvents.utils.isFunction(options.onPause)&&options.onPause()},onFinish:function(){OKEvents.utils.isFunction(options.onFinish)&&options.onFinish()}},utils:{isFunction:function(a){return"function"==typeof a?!0:!1},isMobile:function(){return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)?!0:!1}}};

/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){if(this.length){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=h&&g.check(e)))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),d in c||!b.objectLength(a(this).rules())?!1:(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e=a(c).attr("type"),f="Step attribute on input type "+e+" is not supported.",g=["text","number","range"],h=new RegExp("\\b"+e+"\\b"),i=e&&!h.test(g.join());if(i)throw new Error(f);return this.optional(c)||b%d===0},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
