!function(o,t){var e=o.className("zoom"),r=o.className("zoom-scroller"),n="."+e,a="."+r,i="pinchstart",s="pinch",m="pinchend";"ongesturestart"in t&&(i="gesturestart",s="gesturechange",m="gestureend"),o.Zoom=function(t,e){var r=this;r.options=o.extend(o.Zoom.defaults,e),r.wrapper=r.element=t,r.scroller=t.querySelector(a),r.scrollerStyle=r.scroller&&r.scroller.style,r.zoomer=t.querySelector(n),r.zoomerStyle=r.zoomer&&r.zoomer.style,r.init=function(){o.options.gestureConfig.pinch=!0,o.options.gestureConfig.doubletap=!0,r.initEvents()},r.initEvents=function(o){var t=o?"removeEventListener":"addEventListener",e=r.scroller;e[t](i,r.onPinchstart),e[t](s,r.onPinch),e[t](m,r.onPinchend),e[t]("touchstart",r.onTouchstart),e[t]("touchmove",r.onTouchMove),e[t]("touchcancel",r.onTouchEnd),e[t]("touchend",r.onTouchEnd),e[t]("drag",function(o){(T||u)&&o.stopPropagation()}),e[t]("doubletap",function(o){r.toggleZoom(o.detail.center)})},r.transition=function(o,t){return t=t||0,o.webkitTransitionDuration=t+"ms",r},r.translate=function(o,t,e){return t=t||0,e=e||0,o.webkitTransform="translate3d("+t+"px,"+e+"px,0px)",r},r.scale=function(o,t){return t=t||1,o.webkitTransform="translate3d(0,0,0) scale("+t+")",r},r.scrollerTransition=function(o){return r.transition(r.scrollerStyle,o)},r.scrollerTransform=function(o,t){return r.translate(r.scrollerStyle,o,t)},r.zoomerTransition=function(o){return r.transition(r.zoomerStyle,o)},r.zoomerTransform=function(o){return r.scale(r.zoomerStyle,o)};var l=1,c=1,h=!1,u=!1;r.onPinchstart=function(o){u=!0},r.onPinch=function(o){h||(r.zoomerTransition(0),h=!0),(l=(o.detail?o.detail.scale:o.scale)*c)>r.options.maxZoom&&(l=r.options.maxZoom-1+Math.pow(l-r.options.maxZoom+1,.5)),l<r.options.minZoom&&(l=r.options.minZoom+1-Math.pow(r.options.minZoom-l+1,.5)),r.zoomerTransform(l)},r.onPinchend=function(o){l=Math.max(Math.min(l,r.options.maxZoom),r.options.minZoom),r.zoomerTransition(r.options.speed).zoomerTransform(l),c=l,h=!1},r.setZoom=function(o){l=c=o,r.scrollerTransition(r.options.speed).scrollerTransform(0,0),r.zoomerTransition(r.options.speed).zoomerTransform(l)},r.toggleZoom=function(t,e){if("number"==typeof t&&(e=t,t=void 0),e=void 0===e?r.options.speed:e,l&&1!==l)l=c=1,r.scrollerTransition(e).scrollerTransform(0,0);else if(l=c=r.options.maxZoom,t){var n=o.offset(r.zoomer),a=n.top,i=n.left,s=(t.x-i)*l,m=(t.y-a)*l;this._cal(),s>=z&&s<=z+f?s=z-s+f/2:s<z?s=z-s+f/2:s>z+f&&(s=z+f-s-f/2),m>=y&&m<=y+p?m=y-m+p/2:m<y?m=y-m+p/2:m>y+p&&(m=y+p-m-p/2),s=Math.min(Math.max(s,x),z),m=Math.min(Math.max(m,v),y),r.scrollerTransition(e).scrollerTransform(s,m)}else r.scrollerTransition(e).scrollerTransform(0,0);r.zoomerTransition(e).zoomerTransform(l)},r._cal=function(){f=r.wrapper.offsetWidth,p=r.wrapper.offsetHeight,w=r.zoomer.offsetWidth,Z=r.zoomer.offsetHeight;var o=w*l,t=Z*l;x=Math.min(f/2-o/2,0),z=-x,v=Math.min(p/2-t/2,0),y=-v};var f,p,d,T,g,M,x,v,z,y,w,Z,b,S,E,P,k,A,H,W={},X={};return r.onTouchstart=function(o){o.preventDefault(),d=!0,W.x="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,W.y="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY},r.onTouchMove=function(t){if(t.preventDefault(),d){if(!T){f=r.wrapper.offsetWidth,p=r.wrapper.offsetHeight,w=r.zoomer.offsetWidth,Z=r.zoomer.offsetHeight;var e=o.parseTranslateMatrix(o.getStyles(r.scroller,"webkitTransform"));b=e.x||0,S=e.y||0,r.scrollerTransition(0)}var n=w*l,a=Z*l;n<f&&a<p||(x=Math.min(f/2-n/2,0),z=-x,v=Math.min(p/2-a/2,0),y=-v,X.x="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,X.y="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,T||h||!(Math.floor(x)===Math.floor(b)&&X.x<W.x||Math.floor(z)===Math.floor(b)&&X.x>W.x)?(T=!0,g=X.x-W.x+b,M=X.y-W.y+S,g<x&&(g=x+1-Math.pow(x-g+1,.8)),g>z&&(g=z-1+Math.pow(g-z+1,.8)),M<v&&(M=v+1-Math.pow(v-M+1,.8)),M>y&&(M=y-1+Math.pow(M-y+1,.8)),E||(E=X.x),A||(A=X.y),P||(P=o.now()),k=(X.x-E)/(o.now()-P)/2,H=(X.y-A)/(o.now()-P)/2,Math.abs(X.x-E)<2&&(k=0),Math.abs(X.y-A)<2&&(H=0),E=X.x,A=X.y,P=o.now(),r.scrollerTransform(g,M)):d=!1)}},r.onTouchEnd=function(o){if(o.touches.length||(u=!1),!d||!T)return d=!1,void(T=!1);d=!1,T=!1;var t=300,e=300,n=g+k*t,a=M+H*e;0!==k&&(t=Math.abs((n-g)/k)),0!==H&&(e=Math.abs((a-M)/H));var i=Math.max(t,e);g=n,M=a;var s=w*l,m=Z*l;x=Math.min(f/2-s/2,0),z=-x,v=Math.min(p/2-m/2,0),y=-v,g=Math.max(Math.min(g,z),x),M=Math.max(Math.min(M,y),v),r.scrollerTransition(i).scrollerTransform(g,M)},r.destory=function(){r.initEvents(!0),delete o.data[r.wrapper.getAttribute("data-zoomer")],r.wrapper.setAttribute("data-zoomer","")},r.init(),r},o.Zoom.defaults={speed:300,maxZoom:3,minZoom:1},o.fn.zoom=function(t){var e=[];return this.each(function(){var r=null,n=this.getAttribute("data-zoomer");n?r=o.data[n]:(n=++o.uuid,o.data[n]=r=new o.Zoom(this,t),this.setAttribute("data-zoomer",n)),e.push(r)}),1===e.length?e[0]:e}}(mui,window);