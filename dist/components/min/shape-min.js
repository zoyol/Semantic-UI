!function($,e,t,i){"use strict";e="undefined"!=typeof e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),$.fn.shape=function(n){var a=$(this),o=$("body"),r=(new Date).getTime(),s=[],d=arguments[0],l="string"==typeof d,u=[].slice.call(arguments,1),c=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,0)},g;return a.each(function(){var e=a.selector||"",o=$.isPlainObject(n)?$.extend(!0,{},$.fn.shape.settings,n):$.extend({},$.fn.shape.settings),f=o.namespace,m=o.selector,p=o.error,h=o.className,v="."+f,b="module-"+f,x=$(this),y=x.find(m.sides),S=x.find(m.side),w=!1,C,z,W=this,F=x.data(b),H;H={initialize:function(){H.verbose("Initializing module for",W),H.set.defaultSide(),H.instantiate()},instantiate:function(){H.verbose("Storing instance of module",H),F=H,x.data(b,F)},destroy:function(){H.verbose("Destroying previous module for",W),x.removeData(b).off(v)},refresh:function(){H.verbose("Refreshing selector cache for",W),x=$(W),y=$(this).find(m.shape),S=$(this).find(m.side)},repaint:function(){H.verbose("Forcing repaint event");var e=y[0]||t.createElement("div"),i=e.offsetWidth},animate:function(e,t){H.verbose("Animating box with properties",e),t=t||function(e){H.verbose("Executing animation callback"),e!==i&&e.stopPropagation(),H.reset(),H.set.active()},o.beforeChange.call(z[0]),H.get.transitionEvent()?(H.verbose("Starting CSS animation"),x.addClass(h.animating),y.css(e).one(H.get.transitionEvent(),t),H.set.duration(o.duration),c(function(){x.addClass(h.animating),C.addClass(h.hidden)})):t()},queue:function(e){H.debug("Queueing animation of",e),y.one(H.get.transitionEvent(),function(){H.debug("Executing queued animation"),setTimeout(function(){x.shape(e)},0)})},reset:function(){H.verbose("Animating states reset"),x.removeClass(h.animating).attr("style","").removeAttr("style"),y.attr("style","").removeAttr("style"),S.attr("style","").removeAttr("style").removeClass(h.hidden),z.removeClass(h.animating).attr("style","").removeAttr("style")},is:{complete:function(){return S.filter("."+h.active)[0]==z[0]},animating:function(){return x.hasClass(h.animating)}},set:{defaultSide:function(){C=x.find("."+o.className.active),z=C.next(m.side).length>0?C.next(m.side):x.find(m.side).first(),w=!1,H.verbose("Active side set to",C),H.verbose("Next side set to",z)},duration:function(e){e=e||o.duration,e="number"==typeof e?e+"ms":e,H.verbose("Setting animation duration",e),(o.duration||0===o.duration)&&y.add(S).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=x.find("."+o.className.active),t=e.outerWidth(!0),i=e.outerHeight(!0);x.css({width:t,height:i})},stageSize:function(){var e=x.clone().addClass(h.loading),t=e.find("."+o.className.active),i=w?e.find(m.side).eq(w):t.next(m.side).length>0?t.next(m.side):e.find(m.side).first(),n="next"==o.width?i.outerWidth(!0):"initial"==o.width?x.width():o.width,a="next"==o.height?i.outerHeight(!0):"initial"==o.height?x.height():o.height;t.removeClass(h.active),i.addClass(h.active),e.insertAfter(x),e.remove(),"auto"!=o.width&&(x.css("width",n+o.jitter),H.verbose("Specifying width during animation",n)),"auto"!=o.height&&(x.css("height",a+o.jitter),H.verbose("Specifying height during animation",a))},nextSide:function(e){w=e,z=S.filter(e),w=S.index(z),0===z.length&&(H.set.defaultSide(),H.error(p.side)),H.verbose("Next side manually set to",z)},active:function(){H.verbose("Setting new side to active",z),S.removeClass(h.active),z.addClass(h.active),o.onChange.call(z[0]),H.set.defaultSide()}},flip:{up:function(){if(H.is.complete()&&!H.is.animating()&&!o.allowRepeats)return void H.debug("Side already visible",z);if(H.is.animating())H.queue("flip up");else{H.debug("Flipping up",z);var e=H.get.transform.up();H.set.stageSize(),H.stage.above(),H.animate(e)}},down:function(){if(H.is.complete()&&!H.is.animating()&&!o.allowRepeats)return void H.debug("Side already visible",z);if(H.is.animating())H.queue("flip down");else{H.debug("Flipping down",z);var e=H.get.transform.down();H.set.stageSize(),H.stage.below(),H.animate(e)}},left:function(){if(H.is.complete()&&!H.is.animating()&&!o.allowRepeats)return void H.debug("Side already visible",z);if(H.is.animating())H.queue("flip left");else{H.debug("Flipping left",z);var e=H.get.transform.left();H.set.stageSize(),H.stage.left(),H.animate(e)}},right:function(){if(H.is.complete()&&!H.is.animating()&&!o.allowRepeats)return void H.debug("Side already visible",z);if(H.is.animating())H.queue("flip right");else{H.debug("Flipping right",z);var e=H.get.transform.right();H.set.stageSize(),H.stage.right(),H.animate(e)}},over:function(){return!H.is.complete()||H.is.animating()||o.allowRepeats?void(H.is.animating()?H.queue("flip over"):(H.debug("Flipping over",z),H.set.stageSize(),H.stage.behind(),H.animate(H.get.transform.over()))):void H.debug("Side already visible",z)},back:function(){return!H.is.complete()||H.is.animating()||o.allowRepeats?void(H.is.animating()?H.queue("flip back"):(H.debug("Flipping back",z),H.set.stageSize(),H.stage.behind(),H.animate(H.get.transform.back()))):void H.debug("Side already visible",z)}},get:{transform:{up:function(){var e={y:-((C.outerHeight(!0)-z.outerHeight(!0))/2),z:-(C.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(-90deg)"}},down:function(){var e={y:-((C.outerHeight(!0)-z.outerHeight(!0))/2),z:-(C.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(90deg)"}},left:function(){var e={x:-((C.outerWidth(!0)-z.outerWidth(!0))/2),z:-(C.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(90deg)"}},right:function(){var e={x:-((C.outerWidth(!0)-z.outerWidth(!0))/2),z:-(C.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(-90deg)"}},over:function(){var e={x:-((C.outerWidth(!0)-z.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(180deg)"}},back:function(){var e={x:-((C.outerWidth(!0)-z.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e=t.createElement("element"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},a;for(a in n)if(e.style[a]!==i)return n[a]},nextSide:function(){return C.next(m.side).length>0?C.next(m.side):x.find(m.side).first()}},stage:{above:function(){var e={origin:(C.outerHeight(!0)-z.outerHeight(!0))/2,depth:{active:z.outerHeight(!0)/2,next:C.outerHeight(!0)/2}};H.verbose("Setting the initial animation position as above",z,e),y.css({transform:"translateZ(-"+e.depth.active+"px)"}),C.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),z.addClass(h.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"})},below:function(){var e={origin:(C.outerHeight(!0)-z.outerHeight(!0))/2,depth:{active:z.outerHeight(!0)/2,next:C.outerHeight(!0)/2}};H.verbose("Setting the initial animation position as below",z,e),y.css({transform:"translateZ(-"+e.depth.active+"px)"}),C.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),z.addClass(h.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"})},left:function(){var e={active:C.outerWidth(!0),next:z.outerWidth(!0)},t={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};H.verbose("Setting the initial animation position as left",z,t),y.css({transform:"translateZ(-"+t.depth.active+"px)"}),C.css({transform:"rotateY(0deg) translateZ("+t.depth.active+"px)"}),z.addClass(h.animating).css({left:t.origin+"px",transform:"rotateY(-90deg) translateZ("+t.depth.next+"px)"})},right:function(){var e={active:C.outerWidth(!0),next:z.outerWidth(!0)},t={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};H.verbose("Setting the initial animation position as left",z,t),y.css({transform:"translateZ(-"+t.depth.active+"px)"}),C.css({transform:"rotateY(0deg) translateZ("+t.depth.active+"px)"}),z.addClass(h.animating).css({left:t.origin+"px",transform:"rotateY(90deg) translateZ("+t.depth.next+"px)"})},behind:function(){var e={active:C.outerWidth(!0),next:z.outerWidth(!0)},t={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};H.verbose("Setting the initial animation position as behind",z,t),C.css({transform:"rotateY(0deg)"}),z.addClass(h.animating).css({left:t.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(e,t){if(H.debug("Changing setting",e,t),$.isPlainObject(e))$.extend(!0,o,e);else{if(t===i)return o[e];$.isPlainObject(o[e])?$.extend(!0,o[e],t):o[e]=t}},internal:function(e,t){if($.isPlainObject(e))$.extend(!0,H,e);else{if(t===i)return H[e];H[e]=t}},debug:function(){!o.silent&&o.debug&&(o.performance?H.performance.log(arguments):(H.debug=Function.prototype.bind.call(console.info,console,o.name+":"),H.debug.apply(console,arguments)))},verbose:function(){!o.silent&&o.verbose&&o.debug&&(o.performance?H.performance.log(arguments):(H.verbose=Function.prototype.bind.call(console.info,console,o.name+":"),H.verbose.apply(console,arguments)))},error:function(){o.silent||(H.error=Function.prototype.bind.call(console.error,console,o.name+":"),H.error.apply(console,arguments))},performance:{log:function(e){var t,i,n;o.performance&&(t=(new Date).getTime(),n=r||t,i=t-n,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:W,"Execution Time":i})),clearTimeout(H.performance.timer),H.performance.timer=setTimeout(H.performance.display,500)},display:function(){var t=o.name+":",n=0;r=!1,clearTimeout(H.performance.timer),$.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",e&&(t+=" '"+e+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):$.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(e,t,n){var a=F,o,r,s;return t=t||u,n=W||n,"string"==typeof e&&a!==i&&(e=e.split(/[\. ]/),o=e.length-1,$.each(e,function(t,n){var s=t!=o?n+e[t+1].charAt(0).toUpperCase()+e[t+1].slice(1):e;if($.isPlainObject(a[s])&&t!=o)a=a[s];else{if(a[s]!==i)return r=a[s],!1;if(!$.isPlainObject(a[n])||t==o)return a[n]!==i&&(r=a[n],!1);a=a[n]}})),$.isFunction(r)?s=r.apply(n,t):r!==i&&(s=r),$.isArray(g)?g.push(s):g!==i?g=[g,s]:s!==i&&(g=s),r}},l?(F===i&&H.initialize(),H.invoke(d)):(F!==i&&F.invoke("destroy"),H.initialize())}),g!==i?g:this},$.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document);