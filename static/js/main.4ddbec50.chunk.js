(this["webpackJsonpreact-infinite-carousel-demo"]=this["webpackJsonpreact-infinite-carousel-demo"]||[]).push([[0],{13:function(e,t,n){e.exports=n(28)},18:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),s=n.n(o),l=(n(18),n(2)),r=n(1),c=n(9),d=n(10),u=n(12),h=n(11),f=n(5),g=n(3),p=n.n(g);function m(){return"ontouchstart"in document.documentElement}function v(e,t){return e-t}n(4);function S(e){var t,n=e.carouselName,i=e.next,o=e.onClick;t=i?"InfiniteCarouselArrowNext":"InfiniteCarouselArrowPrev";var s;s=i?"InfiniteCarouselArrowNextIcon":"InfiniteCarouselArrowPrevIcon";var l="".concat("InfiniteCarouselArrow"," ").concat(t),r="".concat("InfiniteCarouselArrowIcon"," ").concat(s),c="".concat(n,"-button-").concat(i?"next":"previous");return a.a.createElement("button",{name:c,"data-testid":c,className:l,onClick:o,type:"button"},a.a.createElement("i",{className:r}))}S.defaultProps={next:!0};var w=S;var C=function(e){for(var t,n,i=e.carouselName,o=e.numberOfDots,s=e.activePage,l=e.onClick,r=[],c=0;c<o;c+=1)t="InfiniteCarouselDotIcon ".concat(c===s?"InfiniteCarouselDotActiveIcon":""),n="".concat(i,"-dots-").concat(c),r.push(a.a.createElement("button",{name:n,"data-testid":n,className:"InfiniteCarouselDot","data-index":c,key:c+1,onClick:l,type:"button"},a.a.createElement("i",{className:t})));return a.a.createElement("ul",{"data-testid":"".concat(i,"-dots"),className:"InfiniteCarouselDots"},r)},y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).setupBreakpointSettings=function(){var e=o.props,t=e.children,n=e.scrollOnDevice,i=e.breakpoints,a=o.state.scrollOnDeviceProps,s=i.map((function(e){return e.breakpoint})),l={};if(i.forEach((function(e){l[e.breakpoint]=e.settings})),s.length>0){s.sort(v),s.forEach((function(e,i){var c,d;0===i?(c=0,d=e-1):(c=s[i-1],d=e-1);var u={minWidth:c,maxWidth:d};Object(f.media)(u,(function(){var i=n&&m()?a:{},s=Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},o.defaultProps),o.props),l[e]),i),u=o.getChildrenList(t,s.slidesToShow),h=u.map((function(e){return p()("slide-")}));o.setState({settings:s,children:u,slideUniqueIds:h,lowerBreakpoint:c,higherBreakpoint:d},o.setDimensions)}))})),s.reverse();var c={minWidth:s[0]};Object(f.media)(c,(function(){var e=n&&m()?a:{},i=Object(r.a)(Object(r.a)(Object(r.a)({},o.defaultProps),o.props),e),s=o.getChildrenList(t,i.slidesToShow),l=s.map((function(e){return p()("slide-")}));o.setState({settings:i,children:s,slideUniqueIds:l,lowerBreakpoint:void 0,higherBreakpoint:void 0},o.setDimensions)}))}},o.getSideSize=function(e,t,n){var i=o.state.settings,a=i.incrementalSides,s=i.sideSize;return void 0!==e&&void 0!==t&&a?50*(n-e)/(t-e)/100:s},o.setDimensions=function(){var e,t,n,a=o.state,s=a.settings,l=a.lowerBreakpoint,r=a.higherBreakpoint,c=a.children,d=a.currentIndex,u=o.props,h=u.children,f=u.scrollOnDevice&&m(),g=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,p=o.getSideSize(l,r,g),v=i.Children.count(h),S=f?v:i.Children.count(c),w=((e=o.frame).getBoundingClientRect().width||e.offsetWidth||0)/(o.props.showSides?s.slidesToShow+2*p:s.slidesToShow)-2*s.slidesSpacing,C=h.length,y=Math.ceil(d/s.slidesToShow),b=Math.ceil(C/s.slidesToShow),T=C>s.slidesToShow?b:1,E=T<=1;E||f?(t=c.map((function(e,t){return t})),n=[].concat(t)):(t=o.getLazyLoadedIndexes(h,d),n=o.getVisibleIndexes(h,d)),o.setState({activePage:y,childrenCount:v,slidesCount:S,slidesWidth:w,slidePages:T,singlePage:E,lazyLoadedList:t,visibleSlideList:n,sideSize:p})},o.getVisibleIndexes=function(e,t){var n,i,a=[],s=o.state.settings,l=s.showSides?1:0;if(n=e.length+s.slidesToShow+l,0===t){i=n+s.slidesToShow-1;for(var r=n;r<=i;r+=1)a.push(r)}if(n=0+l,t===e.length-s.slidesToShow){i=n+s.slidesToShow-1;for(var c=n;c<=i;c+=1)a.push(c)}i=(n=t+s.slidesToShow+l)+(s.slidesToShow-1);for(var d=n;d<=i;d+=1)a.push(d);return a},o.getLazyLoadedIndexes=function(e,t){var n,i,a=o.state.lazyLoadedList,s=o.state.settings,l=s.showSides?1:0,r=[].concat(a);if(n=e.length+s.slidesToShow+l,0===t&&a.indexOf(n)<0){i=n+s.slidesToShow+l-1;for(var c=n;c<=i;c+=1)r.push(c)}n=0;var d=t===e.length-s.slidesToShow,u=r.indexOf(n)<0;if(d&&u){i=n+s.slidesToShow+l-1;for(var h=n;h<=i;h+=1)r.push(h)}i=(n=t+s.slidesToShow+l)+(s.slidesToShow-1),s.showSides&&(n-=1,i+=1);for(var f=n;f<=i;f+=1)a.indexOf(f)<0&&r.push(f);return r},o.getChildrenList=function(e,t){var n=o.props,i=n.scrollOnDevice,a=n.showSides;return Array.isArray(e)?i&&m()?e:e.length>t&&a?[].concat(Object(l.a)(e.slice(e.length-t-1,e.length)),Object(l.a)(e),Object(l.a)(e.slice(0,t+1))):e.length>t?[].concat(Object(l.a)(e.slice(e.length-t,e.length)),Object(l.a)(e),Object(l.a)(e.slice(0,t))):e:[e]},o.getTargetIndex=function(e,t){var n=o.state,i=n.childrenCount,a=n.currentIndex,s=i%t;return e<0?0===a?i-t:0:e>=i?0!==s?0:e-i:0!==s&&e===i-s?e-(t-s):e},o.onDotClick=function(e){e.preventDefault();var t=o.state,n=t.settings,i=t.animating,a=t.autoCycleTimer,s=n.slidesToShow,l=n.autoCycle;if(!i){l&&a&&(clearInterval(a),o.setState({autoCycleTimer:null}));var r=e.target.parentElement.getAttribute("data-index"),c=o.getTargetIndex(r*s,s);o.handleTrack(r*s,c),n.autoCycle&&o.playAutoCycle()}},o.onWindowResized=function(){o.setDimensions()},o.onMouseEnter=function(){var e=o.state.settings,t=e.autoCycle,n=e.pauseOnHover;t&&n&&o.pauseAutoCycle()},o.onMouseOver=function(){var e=o.state.settings,t=e.autoCycle,n=e.pauseOnHover;t&&n&&o.pauseAutoCycle()},o.onMouseLeave=function(){var e=o.state.settings,t=e.autoCycle,n=e.pauseOnHover;t&&n&&o.playAutoCycle()},o.onSwipeStart=function(e){var t=o.state.settings,n=t.swipe,i=t.draggable;if(!1===n||"ontouchend"in document&&!1===n)return null;if(!1===i&&-1!==e.type.indexOf("mouse"))return null;var a=void 0!==e.touches?e.touches[0].pageX:e.clientX,s=void 0!==e.touches?e.touches[0].pageY:e.clientY;return o.setState({dragging:!0,touchObject:{startX:a,startY:s}}),!0},o.onSwipeMove=function(e){var t=o.state,n=t.dragging,i=t.animating;if(n){if(!i){var a=void 0!==e.touches?e.touches[0].pageX:e.clientX,s=void 0!==e.touches?e.touches[0].pageY:e.clientY,l=o.state.touchObject,r=function(e,t,n,i){var a=e-t,o=n-i,s=Math.round(180*Math.atan2(o,a)/Math.PI);return s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?1:s>=135&&s<=225?-1:0}(l.startX,a,l.startY,s);0!==r&&e.preventDefault();var c=Math.round(Math.sqrt(Math.pow(a-l.startX,2)));o.setState({touchObject:{startX:l.startX,startY:l.startY,endX:a,endY:s,length:c,direction:r}})}}else e.preventDefault()},o.onSwipeEnd=function(){var e=o.state,t=e.touchObject,n=e.slidesWidth,i=e.autoCycleTimer,a=e.settings,s=e.currentIndex,l=t.length;if(0!==l&&l>n/2){var r,c;a.autoCycle&&i&&(clearInterval(i),o.setState({autoCycleTimer:null})),1===t.direction?(r=s+a.slidesToScroll,c=o.getTargetIndex(r,a.slidesToScroll)):(r=s-a.slidesToScroll,c=o.getTargetIndex(r,a.slidesToScroll),r<0&&0!==s&&(r=0)),o.handleTrack(r,c),a.autoCycle&&o.playAutoCycle()}else{o.setState({animating:!0,touchObject:{direction:-1*t.direction}},(function(){setTimeout((function(){o.setState({animating:!1,dragging:!1,touchObject:{startX:0,startY:0,endX:0,endY:0,length:0,direction:-1}})}),a.animationDuration)}))}},o.getTrackStyles=function(){var e=o.state.settings,t=o.state,n=t.touchObject,i=t.singlePage,a=t.sideSize,s=t.animating,l=t.slidesWidth,r=t.slidesCount,c=t.currentIndex,d=l+2*e.slidesSpacing;d*=r+2*e.slidesToShow;var u=l+2*e.slidesSpacing,h=e.showSides?1:0,f=u*(e.slidesToShow+h),g=s?"transform ".concat(e.animationDuration,"ms ease"):"",p=f+u*c+(e.swipe&&n.length?n.length*n.direction:0),m=u*a;return e.showSides&&(p-=m),{position:"relative",display:"block",width:i?"100%":d,height:"auto",padding:0,transition:g,transform:i?"none":"translate(".concat(-p,"px, 0px)"),boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:i&&e.showSides?"".concat(m,"px"):"0px"}},o.getScrollTrackStyles={clear:"both",position:"relative",display:"block",width:"100%",height:"auto",padding:0,boxSizing:"border-box",MozBoxSizing:"border-box"},o.getSlideStyles=function(e){var t=o.state,n=t.slidesWidth,i=t.settings,a=o.props.scrollOnDevice&&m()?"none":"left",s=e?"1":i.sidesOpacity;return{position:"relative",float:a,display:"inline-block",width:Number.isNaN(n)?1:n,height:"auto",margin:"0 ".concat(i.slidesSpacing,"px"),opacity:s}},o.getFormatedChildren=function(e,t,n){return i.Children.map(e,(function(e,i){var s=o.state,l=s.settings,r=s.slideUniqueIds,c=n.indexOf(i)>=0;return!l.lazyLoad||t.indexOf(i)>=0?a.a.createElement("li",{className:"InfiniteCarouselSlide",key:r[i],style:o.getSlideStyles(c)},e):a.a.createElement("li",{className:"InfiniteCarouselSlide",key:r[i],style:o.getSlideStyles(c)},a.a.createElement("noscript",null,e),a.a.createElement("img",{alt:"placeholder",src:l.placeholderImageSrc}))}))},o.autoCycle=function(){var e=o.state,t=e.settings,n=e.currentIndex+t.slidesToScroll,i=o.getTargetIndex(n,t.slidesToScroll);o.handleTrack(n,i)},o.playAutoCycle=function(){var e=o.state.settings;if(e.autoCycle){var t=setInterval(o.autoCycle,e.cycleInterval);o.setState({autoCycleTimer:t})}},o.pauseAutoCycle=function(){var e=o.state.autoCycleTimer;e&&(clearInterval(e),o.setState({autoCycleTimer:null}))},o.handleTrack=function(e,t){var n=o.props,i=n.children,a=n.onSlideChange,s=o.state.settings,l=Math.ceil(t/s.slidesToShow),r=o.getLazyLoadedIndexes(i,t),c=o.getVisibleIndexes(i,t),d=function(){setTimeout((function(){o.setState({currentIndex:t,animating:!1,dragging:!1})}),s.animationDuration)};e<0||e>=i.length?o.setState({currentIndex:e,activePage:l,animating:!0,lazyLoadedList:r,visibleSlideList:c,touchObject:{startX:0,startY:0,endX:0,endY:0,length:0,direction:-1}},d):o.setState({currentIndex:t,activePage:l,animating:!0,lazyLoadedList:r,visibleSlideList:c,dragging:!1,touchObject:{startX:0,startY:0,endX:0,endY:0,length:0,direction:-1}},(function(){setTimeout((function(){o.setState({animating:!1,dragging:!1})}),s.animationDuration)})),a&&a(l)},o.moveToNext=function(e){var t=o.props.onNextClick,n=o.state,i=n.animating,a=n.settings,s=n.currentIndex,l=n.autoCycleTimer;if(e.preventDefault(),t&&t(e),!i){a.autoCycle&&l&&(clearInterval(l),o.setState({autoCycleTimer:null}));var r=s+a.slidesToScroll,c=o.getTargetIndex(r,a.slidesToScroll);o.handleTrack(r,c),a.autoCycle&&o.playAutoCycle()}},o.moveToPrevious=function(e){var t=o.props.onPreviousClick,n=o.state,i=n.animating,a=n.settings,s=n.currentIndex,l=n.autoCycleTimer;if(e.preventDefault(),t&&t(e),!i){a.autoCycle&&l&&(clearInterval(l),o.setState({autoCycleTimer:null}));var r=s-a.slidesToScroll,c=o.getTargetIndex(r,a.slidesToScroll);r<0&&0!==s&&(r=0),o.handleTrack(r,c),a.autoCycle&&o.playAutoCycle()}},o.getSettingsForScrollOnDevice=function(){var e=o.props.scrollOnDevice,t=o.state.scrollOnDeviceProps;return e&&m()?Object(r.a)(Object(r.a)(Object(r.a)({},o.defaultProps),o.props),t):Object(r.a)(Object(r.a)({},o.defaultProps),o.props)},o.init=function(){if(o.props.responsive)o.setupBreakpointSettings();else{var e=o.props.children,t=o.getSettingsForScrollOnDevice(),n=t.slidesToShow,i=o.getChildrenList(e,n),a=i.map((function(e){return p()("slide-")}));o.setState({children:i,slideUniqueIds:a,settings:t},(function(){o.setDimensions(),o.playAutoCycle()}))}},o.storeFrameRef=function(e){null!==e&&(o.frame=e)},o.state={currentIndex:0,activePage:0,children:[],lazyLoadedList:[],visibleSlideList:[],childrenCount:0,slidesCount:0,slidesWidth:1,slidePages:1,singlePage:!0,settings:{},autoCycleTimer:null,dragging:!1,touchObject:{startX:0,startY:0,endX:0,endY:0,length:0,direction:-1},scrollOnDeviceProps:{arrows:!1,dots:!1,lazyLoad:!1,autoCycle:!1},lowerBreakpoint:void 0,higherBreakpoint:void 0,slideUniqueIds:[]},o}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.init(),window&&(window.addEventListener?window.addEventListener("resize",this.onWindowResized):window.attachEvent("onresize",this.onWindowResized))}},{key:"componentWillUnmount",value:function(){window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized);var e=this.state.autoCycleTimer;e&&clearInterval(e)}},{key:"render",value:function(){var e,t,n,i=this.props,o=i.scrollOnDevice,s=i.pagingSeparator,l=i.name,c=o&&m(),d=this.state,u=d.settings,h=d.singlePage,f=d.activePage,g=d.slidePages,p=d.dragging;if(u.arrows&&!h&&!c){if(null==u.prevArrow)e=a.a.createElement(w,{carouselName:l,next:!1,onClick:this.moveToPrevious});else{var v={onClick:this.moveToPrevious};e=a.a.cloneElement(u.prevArrow,v)}if(null==u.nextArrow)t=a.a.createElement(w,{carouselName:l,onClick:this.moveToNext});else{var S={onClick:this.moveToNext};t=a.a.cloneElement(u.nextArrow,S)}}!u.dots||h||c||(n=a.a.createElement(C,{carouselName:l,activePage:f,numberOfDots:g,onClick:this.onDotClick})),!u.paging||h||c||(n=a.a.createElement("span",{"data-testid":"".concat(l,"-paging"),className:"InfiniteCarouselPaging"},"".concat(f+1," ").concat(s," ").concat(g)));var y,b,T=this.state,E=T.children,x=T.lazyLoadedList,O=T.visibleSlideList,I=this.getFormatedChildren(E,x,O);o&&m()?(y=Object(r.a)({},this.getScrollTrackStyles),b="InfiniteCarouselScrollTrack"):(y=Object(r.a)({},this.getTrackStyles()),b="");var k=o&&m();return a.a.createElement("div",{id:l,"data-testid":l,className:"InfiniteCarousel",onFocus:this.onMouseOver,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseOver:this.onMouseOver},e,a.a.createElement("div",{className:"InfiniteCarouselFrame",ref:this.storeFrameRef},a.a.createElement("ul",{className:b,style:y,onMouseDown:k?null:this.onSwipeStart,onMouseLeave:p||!k?this.onSwipeEnd:null,onMouseMove:p||!k?this.onSwipeMove:null,onMouseUp:k?null:this.onSwipeEnd,onTouchCancel:p||!k?this.onSwipeEnd:null,onTouchEnd:k?null:this.onSwipeEnd,onTouchMove:p||!k?this.onSwipeMove:null,onTouchStart:k?null:this.onSwipeStart},I)),t,n)}}]),n}(i.Component);y.defaultProps={children:[],name:"infinite-carousel",arrows:!0,dots:!1,paging:!1,lazyLoad:!1,swipe:!0,draggable:!1,animationDuration:500,slidesToShow:1,slidesToScroll:1,slidesSpacing:10,autoCycle:!1,cycleInterval:5e3,pauseOnHover:!0,responsive:!0,breakpoints:[],placeholderImageSrc:"",pagingSeparator:"/",nextArrow:null,prevArrow:null,scrollOnDevice:!1,showSides:!1,sidesOpacity:1,sideSize:.5,incrementalSides:!1,onSlideChange:void 0,onNextClick:void 0,onPreviousClick:void 0};var b=y;n(27);var T=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b,{swipe:!0,dots:!0,paging:!0,showSides:!0,responsive:!0,breakpoints:[{breakpoint:768,settings:{slidesToScroll:2,slidesToShow:2}},{breakpoint:1200,settings:{slidesToScroll:3,slidesToShow:3}}],sideSize:.1,sidesOpacity:.5,slidesToScroll:4,slidesToShow:4,onNextClick:function(){},onPreviousClick:function(){}},a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/55b64e/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/904098/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/ef4d9c/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/00f3d1/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/00ffff/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/ee1f34/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/91b4c0/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/ff6347/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/ebbfbf/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/def1f9/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/cdf2c6/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/9fa616/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/2c4caa/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/44e3e1/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/ff6666/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/94e1e3/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/29083c/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/ffff99/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/616161/fff&fontsize=20"})),a.a.createElement("div",null,a.a.createElement("img",{alt:"",src:"https://place-hold.it/215x215/ed7ebe/fff&fontsize=20"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.4ddbec50.chunk.js.map