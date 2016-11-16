!function($,e,n,t){"use strict";e="undefined"!=typeof e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),$.fn.rating=function(e){var n=$(this),i=n.selector||"",a=(new Date).getTime(),o=[],r=arguments[0],s="string"==typeof r,l=[].slice.call(arguments,1),c;return n.each(function(){var u=$.isPlainObject(e)?$.extend(!0,{},$.fn.rating.settings,e):$.extend({},$.fn.rating.settings),d=u.namespace,g=u.className,m=u.metadata,f=u.selector,v=u.error,p="."+d,b="module-"+d,h=this,y=$(this).data(b),x=$(this),R=x.find(f.icon),C,T;T={initialize:function(){T.verbose("Initializing rating module",u),0===R.length&&T.setup.layout(),u.interactive?T.enable():T.disable(),T.set.initialLoad(),T.set.rating(T.get.initialRating()),T.remove.initialLoad(),T.instantiate()},instantiate:function(){T.verbose("Instantiating module",u),y=T,x.data(b,T)},destroy:function(){T.verbose("Destroying previous instance",y),T.remove.events(),x.removeData(b)},refresh:function(){R=x.find(f.icon)},setup:{layout:function(){var e=T.get.maxRating(),n=$.fn.rating.settings.templates.icon(e);T.debug("Generating icon html dynamically"),x.html(n),T.refresh()}},event:{mouseenter:function(){var e=$(this);e.nextAll().removeClass(g.selected),x.addClass(g.selected),e.addClass(g.selected).prevAll().addClass(g.selected)},mouseleave:function(){x.removeClass(g.selected),R.removeClass(g.selected)},click:function(){var e=$(this),n=T.get.rating(),t=R.index(e)+1,i="auto"==u.clearable?1===R.length:u.clearable;i&&n==t?T.clearRating():T.set.rating(t)}},clearRating:function(){T.debug("Clearing current rating"),T.set.rating(0)},bind:{events:function(){T.verbose("Binding events"),x.on("mouseenter"+p,f.icon,T.event.mouseenter).on("mouseleave"+p,f.icon,T.event.mouseleave).on("click"+p,f.icon,T.event.click)}},remove:{events:function(){T.verbose("Removing events"),x.off(p)},initialLoad:function(){C=!1}},enable:function(){T.debug("Setting rating to interactive mode"),T.bind.events(),x.removeClass(g.disabled)},disable:function(){T.debug("Setting rating to read-only mode"),T.remove.events(),x.addClass(g.disabled)},is:{initialLoad:function(){return C}},get:{initialRating:function(){return x.data(m.rating)!==t?(x.removeData(m.rating),x.data(m.rating)):u.initialRating},maxRating:function(){return x.data(m.maxRating)!==t?(x.removeData(m.maxRating),x.data(m.maxRating)):u.maxRating},rating:function(){var e=R.filter("."+g.active).length;return T.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var n=e-1>=0?e-1:0,t=R.eq(n);x.removeClass(g.selected),R.removeClass(g.selected).removeClass(g.active),e>0&&(T.verbose("Setting current rating to",e),t.prevAll().addBack().addClass(g.active)),T.is.initialLoad()||u.onRate.call(h,e)},initialLoad:function(){C=!0}},setting:function(e,n){if(T.debug("Changing setting",e,n),$.isPlainObject(e))$.extend(!0,u,e);else{if(n===t)return u[e];$.isPlainObject(u[e])?$.extend(!0,u[e],n):u[e]=n}},internal:function(e,n){if($.isPlainObject(e))$.extend(!0,T,e);else{if(n===t)return T[e];T[e]=n}},debug:function(){!u.silent&&u.debug&&(u.performance?T.performance.log(arguments):(T.debug=Function.prototype.bind.call(console.info,console,u.name+":"),T.debug.apply(console,arguments)))},verbose:function(){!u.silent&&u.verbose&&u.debug&&(u.performance?T.performance.log(arguments):(T.verbose=Function.prototype.bind.call(console.info,console,u.name+":"),T.verbose.apply(console,arguments)))},error:function(){u.silent||(T.error=Function.prototype.bind.call(console.error,console,u.name+":"),T.error.apply(console,arguments))},performance:{log:function(e){var n,t,i;u.performance&&(n=(new Date).getTime(),i=a||n,t=n-i,a=n,o.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:h,"Execution Time":t})),clearTimeout(T.performance.timer),T.performance.timer=setTimeout(T.performance.display,500)},display:function(){var e=u.name+":",r=0;a=!1,clearTimeout(T.performance.timer),$.each(o,function(e,n){r+=n["Execution Time"]}),e+=" "+r+"ms",i&&(e+=" '"+i+"'"),n.length>1&&(e+=" ("+n.length+")"),(console.group!==t||console.table!==t)&&o.length>0&&(console.groupCollapsed(e),console.table?console.table(o):$.each(o,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),o=[]}},invoke:function(e,n,i){var a=y,o,r,s;return n=n||l,i=h||i,"string"==typeof e&&a!==t&&(e=e.split(/[\. ]/),o=e.length-1,$.each(e,function(n,i){var s=n!=o?i+e[n+1].charAt(0).toUpperCase()+e[n+1].slice(1):e;if($.isPlainObject(a[s])&&n!=o)a=a[s];else{if(a[s]!==t)return r=a[s],!1;if(!$.isPlainObject(a[i])||n==o)return a[i]!==t&&(r=a[i],!1);a=a[i]}})),$.isFunction(r)?s=r.apply(i,n):r!==t&&(s=r),$.isArray(c)?c.push(s):c!==t?c=[c,s]:s!==t&&(c=s),r}},s?(y===t&&T.initialize(),T.invoke(r)):(y!==t&&y.invoke("destroy"),T.initialize())}),c!==t?c:this},$.fn.rating.settings={name:"Rating",namespace:"rating",slent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading"},selector:{icon:".icon"},templates:{icon:function(e){for(var n=1,t="";n<=e;)t+='<i class="icon"></i>',n++;return t}}}}(jQuery,window,document);