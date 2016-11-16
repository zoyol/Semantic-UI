!function(e,n,o,t){"use strict";n="undefined"!=typeof n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.visibility=function(i){var s,c=e(this),r=c.selector||"",a=(new Date).getTime(),l=[],d=arguments[0],u="string"==typeof d,f=[].slice.call(arguments,1),b=c.length,m=0;return c.each(function(){var c,g,p,v,h=e.isPlainObject(i)?e.extend(!0,{},e.fn.visibility.settings,i):e.extend({},e.fn.visibility.settings),P=h.className,x=h.namespace,C=h.error,y=h.metadata,R="."+x,V="module-"+x,S=e(n),k=e(this),T=e(h.context),O=(k.selector||"",k.data(V)),A=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame||function(e){setTimeout(e,0)},z=this,w=!1;v={initialize:function(){v.debug("Initializing",h),v.setup.cache(),v.should.trackChanges()&&("image"==h.type&&v.setup.image(),"fixed"==h.type&&v.setup.fixed(),h.observeChanges&&v.observeChanges(),v.bind.events()),v.save.position(),v.is.visible()||v.error(C.visible,k),h.initialCheck&&v.checkVisibility(),v.instantiate()},instantiate:function(){v.debug("Storing instance",v),k.data(V,v),O=v},destroy:function(){v.verbose("Destroying previous module"),p&&p.disconnect(),g&&g.disconnect(),S.off("load"+R,v.event.load).off("resize"+R,v.event.resize),T.off("scroll"+R,v.event.scroll).off("scrollchange"+R,v.event.scrollchange),"fixed"==h.type&&(v.resetFixed(),v.remove.placeholder()),k.off(R).removeData(V)},observeChanges:function(){"MutationObserver"in n&&(g=new MutationObserver(v.event.contextChanged),p=new MutationObserver(v.event.changed),g.observe(o,{childList:!0,subtree:!0}),p.observe(z,{childList:!0,subtree:!0}),v.debug("Setting up mutation observer",p))},bind:{events:function(){v.verbose("Binding visibility events to scroll and resize"),h.refreshOnLoad&&S.on("load"+R,v.event.load),S.on("resize"+R,v.event.resize),T.off("scroll"+R).on("scroll"+R,v.event.scroll).on("scrollchange"+R,v.event.scrollchange)}},event:{changed:function(e){v.verbose("DOM tree modified, updating visibility calculations"),v.timer=setTimeout(function(){v.verbose("DOM tree modified, updating sticky menu"),v.refresh()},100)},contextChanged:function(n){[].forEach.call(n,function(n){n.removedNodes&&[].forEach.call(n.removedNodes,function(n){(n==z||e(n).find(z).length>0)&&(v.debug("Element removed from DOM, tearing down events"),v.destroy())})})},resize:function(){v.debug("Window resized"),h.refreshOnResize&&A(v.refresh)},load:function(){v.debug("Page finished loading"),A(v.refresh)},scroll:function(){h.throttle?(clearTimeout(v.timer),v.timer=setTimeout(function(){T.triggerHandler("scrollchange"+R,[T.scrollTop()])},h.throttle)):A(function(){T.triggerHandler("scrollchange"+R,[T.scrollTop()])})},scrollchange:function(e,n){v.checkVisibility(n)}},precache:function(n,t){n instanceof Array||(n=[n]);for(var i=n.length,s=0,c=[],r=o.createElement("img"),a=function(){s++,s>=n.length&&e.isFunction(t)&&t()};i--;)r=o.createElement("img"),r.onload=a,r.onerror=a,r.src=n[i],c.push(r)},enableCallbacks:function(){v.debug("Allowing callbacks to occur"),w=!1},disableCallbacks:function(){v.debug("Disabling all callbacks temporarily"),w=!0},should:{trackChanges:function(){return u?(v.debug("One time query, no need to bind events"),!1):(v.debug("Callbacks being attached"),!0)}},setup:{cache:function(){v.cache={occurred:{},screen:{},element:{}}},image:function(){var e=k.data(y.src);e&&(v.verbose("Lazy loading image",e),h.once=!0,h.observeChanges=!1,h.onOnScreen=function(){v.debug("Image on screen",z),v.precache(e,function(){v.set.image(e,function(){m++,m==b&&h.onAllLoaded.call(this),h.onLoad.call(this)})})})},fixed:function(){v.debug("Setting up fixed"),h.once=!1,h.observeChanges=!1,h.initialCheck=!0,h.refreshOnLoad=!0,i.transition||(h.transition=!1),v.create.placeholder(),v.debug("Added placeholder",c),h.onTopPassed=function(){v.debug("Element passed, adding fixed position",k),v.show.placeholder(),v.set.fixed(),h.transition&&e.fn.transition!==t&&k.transition(h.transition,h.duration)},h.onTopPassedReverse=function(){v.debug("Element returned to position, removing fixed",k),v.hide.placeholder(),v.remove.fixed()}}},create:{placeholder:function(){v.verbose("Creating fixed position placeholder"),c=k.clone(!1).css("display","none").addClass(P.placeholder).insertAfter(k)}},show:{placeholder:function(){v.verbose("Showing placeholder"),c.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){v.verbose("Hiding placeholder"),c.css("display","none").css("visibility","")}},set:{fixed:function(){v.verbose("Setting element to fixed position"),k.addClass(P.fixed).css({position:"fixed",top:h.offset+"px",left:"auto",zIndex:h.zIndex}),h.onFixed.call(z)},image:function(n,o){k.attr("src",n),h.transition?e.fn.transition!==t?k.transition(h.transition,h.duration,o):k.fadeIn(h.duration,o):k.show()}},is:{onScreen:function(){var e=v.get.elementCalculations();return e.onScreen},offScreen:function(){var e=v.get.elementCalculations();return e.offScreen},visible:function(){return!(!v.cache||!v.cache.element||0===v.cache.element.width&&0===v.cache.element.offset.top)}},refresh:function(){v.debug("Refreshing constants (width/height)"),"fixed"==h.type&&v.resetFixed(),v.reset(),v.save.position(),h.checkOnRefresh&&v.checkVisibility(),h.onRefresh.call(z)},resetFixed:function(){v.remove.fixed(),v.remove.occurred()},reset:function(){v.verbose("Resetting all cached values"),e.isPlainObject(v.cache)&&(v.cache.screen={},v.cache.element={})},checkVisibility:function(e){v.verbose("Checking visibility of element",v.cache.element),!w&&v.is.visible()&&(v.save.scroll(e),v.save.calculations(),v.passed(),v.passingReverse(),v.topVisibleReverse(),v.bottomVisibleReverse(),v.topPassedReverse(),v.bottomPassedReverse(),v.onScreen(),v.offScreen(),v.passing(),v.topVisible(),v.bottomVisible(),v.topPassed(),v.bottomPassed(),h.onUpdate&&h.onUpdate.call(z,v.get.elementCalculations()))},passed:function(n,o){var i=v.get.elementCalculations();if(n&&o)h.onPassed[n]=o;else{if(n!==t)return v.get.pixelsPassed(n)>i.pixelsPassed;i.passing&&e.each(h.onPassed,function(e,n){i.bottomVisible||i.pixelsPassed>v.get.pixelsPassed(e)?v.execute(n,e):h.once||v.remove.occurred(n)})}},onScreen:function(e){var n=v.get.elementCalculations(),o=e||h.onOnScreen,i="onScreen";if(e&&(v.debug("Adding callback for onScreen",e),h.onOnScreen=e),n.onScreen?v.execute(o,i):h.once||v.remove.occurred(i),e!==t)return n.onOnScreen},offScreen:function(e){var n=v.get.elementCalculations(),o=e||h.onOffScreen,i="offScreen";if(e&&(v.debug("Adding callback for offScreen",e),h.onOffScreen=e),n.offScreen?v.execute(o,i):h.once||v.remove.occurred(i),e!==t)return n.onOffScreen},passing:function(e){var n=v.get.elementCalculations(),o=e||h.onPassing,i="passing";if(e&&(v.debug("Adding callback for passing",e),h.onPassing=e),n.passing?v.execute(o,i):h.once||v.remove.occurred(i),e!==t)return n.passing},topVisible:function(e){var n=v.get.elementCalculations(),o=e||h.onTopVisible,i="topVisible";if(e&&(v.debug("Adding callback for top visible",e),h.onTopVisible=e),n.topVisible?v.execute(o,i):h.once||v.remove.occurred(i),e===t)return n.topVisible},bottomVisible:function(e){var n=v.get.elementCalculations(),o=e||h.onBottomVisible,i="bottomVisible";if(e&&(v.debug("Adding callback for bottom visible",e),h.onBottomVisible=e),n.bottomVisible?v.execute(o,i):h.once||v.remove.occurred(i),e===t)return n.bottomVisible},topPassed:function(e){var n=v.get.elementCalculations(),o=e||h.onTopPassed,i="topPassed";if(e&&(v.debug("Adding callback for top passed",e),h.onTopPassed=e),n.topPassed?v.execute(o,i):h.once||v.remove.occurred(i),e===t)return n.topPassed},bottomPassed:function(e){var n=v.get.elementCalculations(),o=e||h.onBottomPassed,i="bottomPassed";if(e&&(v.debug("Adding callback for bottom passed",e),h.onBottomPassed=e),n.bottomPassed?v.execute(o,i):h.once||v.remove.occurred(i),e===t)return n.bottomPassed},passingReverse:function(e){var n=v.get.elementCalculations(),o=e||h.onPassingReverse,i="passingReverse";if(e&&(v.debug("Adding callback for passing reverse",e),h.onPassingReverse=e),n.passing?h.once||v.remove.occurred(i):v.get.occurred("passing")&&v.execute(o,i),e!==t)return!n.passing},topVisibleReverse:function(e){var n=v.get.elementCalculations(),o=e||h.onTopVisibleReverse,i="topVisibleReverse";if(e&&(v.debug("Adding callback for top visible reverse",e),h.onTopVisibleReverse=e),n.topVisible?h.once||v.remove.occurred(i):v.get.occurred("topVisible")&&v.execute(o,i),e===t)return!n.topVisible},bottomVisibleReverse:function(e){var n=v.get.elementCalculations(),o=e||h.onBottomVisibleReverse,i="bottomVisibleReverse";if(e&&(v.debug("Adding callback for bottom visible reverse",e),h.onBottomVisibleReverse=e),n.bottomVisible?h.once||v.remove.occurred(i):v.get.occurred("bottomVisible")&&v.execute(o,i),e===t)return!n.bottomVisible},topPassedReverse:function(e){var n=v.get.elementCalculations(),o=e||h.onTopPassedReverse,i="topPassedReverse";if(e&&(v.debug("Adding callback for top passed reverse",e),h.onTopPassedReverse=e),n.topPassed?h.once||v.remove.occurred(i):v.get.occurred("topPassed")&&v.execute(o,i),e===t)return!n.onTopPassed},bottomPassedReverse:function(e){var n=v.get.elementCalculations(),o=e||h.onBottomPassedReverse,i="bottomPassedReverse";if(e&&(v.debug("Adding callback for bottom passed reverse",e),h.onBottomPassedReverse=e),n.bottomPassed?h.once||v.remove.occurred(i):v.get.occurred("bottomPassed")&&v.execute(o,i),e===t)return!n.bottomPassed},execute:function(e,n){var o=v.get.elementCalculations(),t=v.get.screenCalculations();e=e||!1,e&&(h.continuous?(v.debug("Callback being called continuously",n,o),e.call(z,o,t)):v.get.occurred(n)||(v.debug("Conditions met",n,o),e.call(z,o,t))),v.save.occurred(n)},remove:{fixed:function(){v.debug("Removing fixed position"),k.removeClass(P.fixed).css({position:"",top:"",left:"",zIndex:""}),h.onUnfixed.call(z)},placeholder:function(){v.debug("Removing placeholder content"),c&&c.remove()},occurred:function(e){if(e){var n=v.cache.occurred;n[e]!==t&&n[e]===!0&&(v.debug("Callback can now be called again",e),v.cache.occurred[e]=!1)}else v.cache.occurred={}}},save:{calculations:function(){v.verbose("Saving all calculations necessary to determine positioning"),v.save.direction(),v.save.screenCalculations(),v.save.elementCalculations()},occurred:function(e){e&&(v.cache.occurred[e]!==t&&v.cache.occurred[e]===!0||(v.verbose("Saving callback occurred",e),v.cache.occurred[e]=!0))},scroll:function(e){e=e+h.offset||T.scrollTop()+h.offset,v.cache.scroll=e},direction:function(){var e,n=v.get.scroll(),o=v.get.lastScroll();return e=n>o&&o?"down":n<o&&o?"up":"static",v.cache.direction=e,v.cache.direction},elementPosition:function(){var e=v.cache.element,n=v.get.screenSize();return v.verbose("Saving element position"),e.fits=e.height<n.height,e.offset=k.offset(),e.width=k.outerWidth(),e.height=k.outerHeight(),v.cache.element=e,e},elementCalculations:function(){var e=v.get.screenCalculations(),n=v.get.elementPosition();return h.includeMargin?(n.margin={},n.margin.top=parseInt(k.css("margin-top"),10),n.margin.bottom=parseInt(k.css("margin-bottom"),10),n.top=n.offset.top-n.margin.top,n.bottom=n.offset.top+n.height+n.margin.bottom):(n.top=n.offset.top,n.bottom=n.offset.top+n.height),n.topVisible=e.bottom>=n.top,n.topPassed=e.top>=n.top,n.bottomVisible=e.bottom>=n.bottom,n.bottomPassed=e.top>=n.bottom,n.pixelsPassed=0,n.percentagePassed=0,n.onScreen=n.topVisible&&!n.bottomPassed,n.passing=n.topPassed&&!n.bottomPassed,n.offScreen=!n.onScreen,n.passing&&(n.pixelsPassed=e.top-n.top,n.percentagePassed=(e.top-n.top)/n.height),v.cache.element=n,v.verbose("Updated element calculations",n),n},screenCalculations:function(){var e=v.get.scroll();return v.save.direction(),v.cache.screen.top=e,v.cache.screen.bottom=e+v.cache.screen.height,v.cache.screen},screenSize:function(){v.verbose("Saving window position"),v.cache.screen={height:T.height()}},position:function(){v.save.screenSize(),v.save.elementPosition()}},get:{pixelsPassed:function(e){var n=v.get.elementCalculations();return e.search("%")>-1?n.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return v.cache.occurred!==t&&(v.cache.occurred[e]||!1)},direction:function(){return v.cache.direction===t&&v.save.direction(),v.cache.direction},elementPosition:function(){return v.cache.element===t&&v.save.elementPosition(),v.cache.element},elementCalculations:function(){return v.cache.element===t&&v.save.elementCalculations(),v.cache.element},screenCalculations:function(){return v.cache.screen===t&&v.save.screenCalculations(),v.cache.screen},screenSize:function(){return v.cache.screen===t&&v.save.screenSize(),v.cache.screen},scroll:function(){return v.cache.scroll===t&&v.save.scroll(),v.cache.scroll},lastScroll:function(){return v.cache.screen===t?(v.debug("First scroll event, no last scroll could be found"),!1):v.cache.screen.top}},setting:function(n,o){if(e.isPlainObject(n))e.extend(!0,h,n);else{if(o===t)return h[n];h[n]=o}},internal:function(n,o){if(e.isPlainObject(n))e.extend(!0,v,n);else{if(o===t)return v[n];v[n]=o}},debug:function(){!h.silent&&h.debug&&(h.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,h.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!h.silent&&h.verbose&&h.debug&&(h.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),v.verbose.apply(console,arguments)))},error:function(){h.silent||(v.error=Function.prototype.bind.call(console.error,console,h.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var n,o,t;h.performance&&(n=(new Date).getTime(),t=a||n,o=n-t,a=n,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":o})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var n=h.name+":",o=0;a=!1,clearTimeout(v.performance.timer),e.each(l,function(e,n){o+=n["Execution Time"]}),n+=" "+o+"ms",r&&(n+=" '"+r+"'"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(n),console.table?console.table(l):e.each(l,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(n,o,i){var c,r,a,l=O;return o=o||f,i=z||i,"string"==typeof n&&l!==t&&(n=n.split(/[\. ]/),c=n.length-1,e.each(n,function(o,i){var s=o!=c?i+n[o+1].charAt(0).toUpperCase()+n[o+1].slice(1):n;if(e.isPlainObject(l[s])&&o!=c)l=l[s];else{if(l[s]!==t)return r=l[s],!1;if(!e.isPlainObject(l[i])||o==c)return l[i]!==t?(r=l[i],!1):(v.error(C.method,n),!1);l=l[i]}})),e.isFunction(r)?a=r.apply(i,o):r!==t&&(a=r),e.isArray(s)?s.push(a):s!==t?s=[s,a]:a!==t&&(s=a),r}},u?(O===t&&v.initialize(),O.save.scroll(),O.save.calculations(),v.invoke(d)):(O!==t&&O.invoke("destroy"),v.initialize())}),s!==t?s:this},e.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:n,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);