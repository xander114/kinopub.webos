(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[17],{1086:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(11),c=n(2),a=n(32),u=n(937),o=n(889),i=n(935),l=n(3),s=function(){var e=Object(a.h)(),t=Object(a.i)().state||{},n=t.item,s=t.trailer,b=Object(c.useMemo)((function(){return{title:n.title,description:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440",poster:n.posters.wide||n.posters.big,sources:Object(i.b)([s])}}),[n,s]),d=Object(c.useCallback)((function(){e.goBack()}),[e]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440: ".concat(n.title," - \u0422\u0440\u0435\u0439\u043b\u0435\u0440")}),Object(l.jsx)(u.a,Object(r.a)(Object(r.a)({},b),{},{onEnded:d}))]})}},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(893),a=n(3),u=function(e){return Object(a.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(11),c=n(57),a=n(2),u=n(52),o=n.n(u),i=n(73),l=n(106),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},c=t.onEnterViewport,u=t.onLeaveViewport,o=Object(a.useState)(),s=Object(i.a)(o,2),b=s[1],d=Object(a.useRef)(null),f=Object(a.useRef)(!1),j=Object(a.useRef)(!1),O=Object(a.useRef)(0),v=Object(a.useRef)(0),p=Object(a.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&d.current.observe(t)}}),[e,d]),m=Object(a.useCallback)((function(){if(e.current&&d.current){var t=Object(l.findDOMNode)(e.current);t&&(d.current.unobserve(t),d.current.disconnect(),d.current=null)}}),[e,d]),k=Object(a.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,a=t.intersectionRatio,o="undefined"!==typeof n?n:a>0;if(!j.current&&o)return j.current=!0,null===c||void 0===c||c(),O.current+=1,f.current=o,void b(o);j.current&&!o&&(j.current=!1,null===u||void 0===u||u(),r.disconnectOnLeave&&d.current&&d.current.disconnect(),v.current+=1,f.current=o,b(o))}),[d,r.disconnectOnLeave,c,u]),g=Object(a.useCallback)((function(){d.current||(d.current=new IntersectionObserver(k,n))}),[d,n,k]);return Object(a.useEffect)((function(){return g(),p(),function(){m()}}),[g,p,m]),{inViewport:f.current,enterCount:O.current,leaveCount:v.current}},b=n(3),d=["children","className","onScrollToEnd"],f=function(e){var t=e.children,n=e.className,u=e.onScrollToEnd,i=Object(c.a)(e,d),l=Object(a.useRef)(null);return s(l,{onEnterViewport:u}),Object(b.jsxs)("div",Object(r.a)(Object(r.a)({className:o()("overflow-y-auto h-full",n)},i),{},{children:[t,u&&Object(b.jsx)("div",{className:"h-40",ref:l})]}))}},900:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),c=n(57),a=n(2),u=n(52),o=n.n(u),i=n(253),l=n(251),s=n(3),b=["icon","iconOnly","children","autoFocus","className"],d=function(e){var t=e.icon,n=e.iconOnly,u=e.children,d=e.autoFocus,f=e.className,j=Object(c.a)(e,b),O=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return d&&(e=requestAnimationFrame((function(){var e,t;null===(e=O.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,d]),Object(s.jsx)(l.a,Object(r.a)(Object(r.a)({},j),{},{ref:O,className:o()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",f),role:"button",children:Object(s.jsxs)("div",{className:"flex items-center",children:[t&&Object(s.jsx)(i.a,{className:o()({"mr-2":!n}),name:t}),!n&&u]})}))}},903:function(e,t,n){"use strict";var r=n(73),c=n(2);t.a=function(e){var t=Object(c.useState)(e),n=Object(r.a)(t,2),a=n[0],u=n[1];return Object(c.useEffect)((function(){u(e)}),[e]),[a,u]}},909:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),c=n(57),a=n(2),u=n(52),o=n.n(u),i=n(251),l=n(261),s=n(3),b=["defaultChecked","checked","onChange","className","children"],d=function(e){var t=e.defaultChecked,n=e.checked,u=e.onChange,d=e.className,f=e.children,j=Object(c.a)(e,b),O=Object(a.useRef)(null),v=Object(a.useCallback)((function(e){null===u||void 0===u||u(e.target.checked,e)}),[u]),p=Object(a.useCallback)((function(e){var t;Object(l.a)(e,"Enter")&&(null===(t=O.current)||void 0===t||t.click())}),[]);return Object(s.jsx)(i.a,{component:"label",className:o()("text-gray-200 p-2",d),onKeyPress:p,role:"button",children:Object(s.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({type:"checkbox"},j),{},{ref:O,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:f})]})})}},922:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(73),c=n(2),a=n(52),u=n.n(a),o=n(253),i=n(251),l=n(252),s=n(903),b=n(3),d=function(e){var t=e.open,n=e.onToggle,a=e.title,d=e.subtitle,f=e.className,j=e.children,O=Object(s.a)(t),v=Object(r.a)(O,2),p=v[0],m=v[1],k=Object(c.useCallback)((function(){m((function(e){var t=!e;return null===n||void 0===n||n(t),t}))}),[m,n]);return Object(b.jsxs)("div",{className:"flex flex-col w-full",children:[Object(b.jsx)(i.a,{onClick:k,className:u()("p-1 cursor-pointer",f),children:Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)(l.a,{children:a}),Object(b.jsx)(o.a,{name:p?"expand_less":"expand_more"})]}),!p&&d&&Object(b.jsx)(l.a,{className:"mt-2",children:d})]})}),p&&j]})}},929:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(944),c=n.n(r);function a(e){return c()(1e3*(e||0),{leading:!0})}},930:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(11),c=n(57),a=n(2),u=n(255),o=n.n(u),i=n(52),l=n.n(i),s=n(890),b=n(932),d=n.n(b),f=n(3),j=d()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(f.jsx)("div",Object(r.a)({},e))})),O=n(256),v=["visible","onClose","children","className","closeButton"],p=function(e){var t=e.visible,n=e.onClose,u=e.children,i=e.className,b=e.closeButton,d=void 0===b?"Blue":b,p=Object(c.a)(e,v),m=Object(a.useMemo)((function(){return o.a.add({})}),[]),k=Object(a.useCallback)((function(){n()}),[n]),g=Object(a.useCallback)((function(){if(t)return k(),!1}),[t,k]),h=Object(a.useCallback)((function(){if(!o.a.focus(m)){var e=o.a.getCurrent();e&&e.blur(),o.a.setActiveContainer(m),setTimeout((function(){o.a.setPointerMode(!1),o.a.focus(m)}),500)}}),[m]);return Object(O.a)("Back",g),Object(O.a)(d,g),Object(a.useEffect)((function(){t&&h()}),[t,h]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:l()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:k}),Object(f.jsx)(j,Object(r.a)(Object(r.a)({},p),{},{spotlightId:m,spotlightRestrict:"self-only",spotlightDisabled:!t,className:l()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},i),children:Object(f.jsx)(s.a,{className:"max-h-screen",children:u})}))]})}},931:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(73),c=n(2),a=n(193),u=n.n(a),o=n(922),i=n(11),l=n(909),s=n(3),b=function(e){return Object(s.jsx)(l.a,Object(i.a)(Object(i.a)({},e),{},{type:"radio"}))},d=n(903),f=function(e){var t=e.label,n=e.options,a=e.defaultValue,i=e.value,l=e.onChange,f=e.closeOnChange,j=e.className,O=e.splitIn,v=Object(c.useState)(!1),p=Object(r.a)(v,2),m=p[0],k=p[1],g=Object(d.a)(i||a),h=Object(r.a)(g,2),T=h[0],C=h[1],y=Object(c.useMemo)((function(){return Array.isArray(n)?n.map((function(e,t){return"string"===typeof e?{title:e,value:t}:e})):[]}),[n]),x=Object(c.useMemo)((function(){return y.find((function(e){return e.value===T}))}),[y,T]),N=Object(c.useCallback)((function(e){C(e),null===l||void 0===l||l(e),f&&k(!1)}),[C,l,f]),S=Object(c.useCallback)((function(e){return function(t){t&&N(e.value)}}),[N]);return Object(s.jsx)(o.a,{open:m,onToggle:k,title:t,subtitle:null===x||void 0===x?void 0:x.title,className:j,children:Object(s.jsx)("div",{className:"flex flex-wrap",children:u()(y,(function(e){return Object(s.jsx)(b,{className:O?"w-1/".concat(O):"w-full",checked:e.value===T,onChange:S(e),children:e.title},e.value)}))})})}},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j}));var r=n(899),c=n.n(r),a=n(193),u=n.n(a),o=n(936),i=n.n(o),l=n(962),s=n.n(l),b=function(e){return e<10?"0".concat(e):e};function d(e){return u()(e,(function(e,t){var n,r,a,u,o,i,l;return{lang:e.lang,name:c()(["".concat(b(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(r=e.author)||void 0===r?void 0:r.title)?"".concat(null===(a=e.type)||void 0===a?void 0:a.title,"."):null===(u=e.type)||void 0===u?void 0:u.title,null===(o=e.author)||void 0===o?void 0:o.title,(null===(i=e.type)||void 0===i?void 0:i.title)||(null===(l=e.author)||void 0===l?void 0:l.title)?"(".concat(s()(e.lang),")"):s()(e.lang),"aac"!==e.codec&&s()(e.codec)]).join(" ")}}))}function f(e,t){return i()(u()(e,(function(e){var n="string"===typeof e.url?e.url:e.url[t]||e.url.http;return{src:n,name:e.quality,type:n.includes(".m3u8")?"application/x-mpegURL":"video/mp4"}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function j(e){return u()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(s()(e.lang)," #").concat(b(t+1))}}))}},937:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var r=n(11),c=n(31),a=n.n(c),u=n(53),o=n(73),i=n(57),l=n(2),s=n.n(l),b=n(946),d=n.n(b),f=n(900),j=n(94),O=n(52),v=n.n(O),p=n(950),m=n.n(p),k=n(943),g=n.n(k),h=n(957),T=n.n(h),C=n(901),y=n.n(C),x=n(260),N=n(90),S=n(91),E=function(){function e(t){Object(N.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(S.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,r){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(r){var c="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),a=new Blob([c],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(a),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(r){var c=new TextDecoder("utf-8").decode(r),a="WEBVTT FILE\r\n\r\n".concat(e.toVTT(c)),u=new Blob([a],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(u),n(t.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function w(){return(w=Object(u.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,r=new E(n),e.abrupt("return",r.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(3),L=["autoPlay","audioTracks","sourceTracks","subtitleTracks","streamingType","isSettingsOpen","onUpdate","className","mediaComponent"];function A(e){var t=e.autoPlay,n=e.audioTracks,r=e.sourceTracks,c=e.subtitleTracks,a=e.streamingType,u=e.isSettingsOpen,i=Object(l.useRef)(null),s=Object(l.useRef)(null),b=Object(l.useRef)(0),d=Object(l.useRef)(!1),f=Object(x.a)("is_hls.js_active"),j=Object(o.a)(f,1)[0],O=Object(l.useState)(null===n||void 0===n?void 0:n[0]),v=Object(o.a)(O,2),p=v[0],k=v[1],h=Object(l.useState)(null===r||void 0===r?void 0:r[0]),C=Object(o.a)(h,2),N=C[0],S=C[1],E=Object(l.useState)(null),R=Object(o.a)(E,2),L=R[0],A=R[1],P=Object(l.useCallback)((function(){return"hls2"===a?[]:n}),[n,a]),U=Object(l.useCallback)((function(){return null===p||void 0===p?void 0:p.name}),[p]),I=Object(l.useCallback)((function(e){var t=null===n||void 0===n?void 0:n.find((function(t){return t.name===e}));t&&k(t)}),[n]),M=Object(l.useCallback)((function(){return y()(r,"src")}),[r]),V=Object(l.useCallback)((function(){return null===N||void 0===N?void 0:N.name}),[N]),B=Object(l.useCallback)((function(e){var t=null===r||void 0===r?void 0:r.find((function(t){return t.name===e}));t&&S(t)}),[r]),F=Object(l.useCallback)((function(){return c}),[c]),D=Object(l.useCallback)((function(){return null===L||void 0===L?void 0:L.name}),[L]),_=Object(l.useCallback)((function(e){var t=null===c||void 0===c?void 0:c.find((function(t){return t.name===e}));A(t||null)}),[c]),W=Object(l.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.findIndex((function(e){return e.name===p.name})))&&void 0!==e?e:0}),[n,p]),$=Object(l.useMemo)((function(){return"hls"===a?null===N||void 0===N?void 0:N.src.replace(/master-v1a\d/,"master-v1a".concat(W+1)):null===N||void 0===N?void 0:N.src}),[a,W,null===N||void 0===N?void 0:N.src]),z=Object(l.useCallback)((function(){if(i.current){for(i.current.removeEventListener("canplay",z);i.current.firstChild;)i.current.lastChild.track.mode="disabled",i.current.removeChild(i.current.lastChild);if(s.current){var e=g()(s.current.audioTracks,(function(e){return e.name===(null===p||void 0===p?void 0:p.name)}));e&&(s.current.audioTrack=e.id)}else{var n;(null===(n=i.current.audioTracks)||void 0===n?void 0:n[W])&&T()(i.current.audioTracks,(function(e,t){e.enabled=t===W}))}if(b.current>0?(i.current.currentTime=b.current,d.current?i.current.pause():i.current.play()):t&&i.current.play(),L){var r=function(e){if(i.current){var t=document.createElement("track");i.current.appendChild(t),t.src=e,t.kind="captions",t.id=L.name,t.label=L.name,t.srclang=L.lang,t.track.mode="showing"}};L.src.endsWith(".srt")?function(e){return w.apply(this,arguments)}(L.src).then(r):r(L.src)}}}),[t,W,null===p||void 0===p?void 0:p.name,L]);return Object(l.useEffect)((function(){if(i.current&&$){if(j&&$.includes(".m3u8")&&m.a.isSupported()){var e=s.current=new m.a({enableWebVTT:!1,enableCEA708Captions:!1});e.attachMedia(i.current),e.on(m.a.Events.MEDIA_ATTACHED,(function(){e.loadSource($)}))}else i.current.src=$;i.current.addEventListener("canplay",z)}return function(){i.current&&(i.current.currentTime>0&&(b.current=i.current.currentTime),i.current.removeEventListener("canplay",z)),s.current&&(s.current.destroy(),s.current=null)}}),[$,i,b,z,j,a,p,N,L,W,n]),Object(l.useEffect)((function(){d.current=Boolean(u)}),[u]),Object(l.useMemo)((function(){return{videoRef:i,getAudioTracks:P,getAudioTrack:U,setAudioTrack:I,getSourceTracks:M,getSourceTrack:V,setSourceTrack:B,getSubtitleTracks:F,getSubtitleTrack:D,setSubtitleTrack:_}}),[i,P,U,I,M,V,B,F,D,_])}var P=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],U=s.a.forwardRef((function(e,t){var n=e.autoPlay,c=e.audioTracks,o=e.sourceTracks,s=e.subtitleTracks,b=e.streamingType,d=e.isSettingsOpen,f=e.onUpdate,O=e.className,p=(e.mediaComponent,Object(i.a)(e,L)),m=Object(l.useCallback)((function(){null===f||void 0===f||f()}),[f]),k=Object(l.useMemo)((function(){return P.reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(j.a)({},t,(function(){var e;m();for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];null===(e=p[t])||void 0===e||e.call.apply(e,[p].concat(r))})))}),{})}),[p,m]),g=function(e,t){var n=A(t),r=n.videoRef,c=Object(l.useCallback)((function(){return r.current?r.current.currentTime:0}),[r]),o=Object(l.useCallback)((function(e){r.current&&(r.current.currentTime=e)}),[r]),i=Object(l.useCallback)((function(){return r.current?r.current.playbackRate:1}),[r]),s=Object(l.useCallback)((function(e){r.current&&(r.current.playbackRate=e)}),[r]),b=Object(l.useCallback)((function(){return!!r.current&&r.current.paused}),[r]),d=Object(l.useCallback)((function(){return r.current?r.current.duration:0}),[r]),f=Object(l.useCallback)((function(){return!!r.current&&r.current.networkState===r.current.NETWORK_NO_SOURCE}),[r]),j=Object(l.useCallback)((function(){return!r.current||r.current.readyState<r.current.HAVE_ENOUGH_DATA}),[r]),O=Object(l.useCallback)((function(){return r.current?r.current.buffered.length&&r.current.buffered.end(r.current.buffered.length-1)/r.current.duration:0}),[r]),v=Object(l.useCallback)((function(){return r.current?r.current.currentTime/r.current.duration:0}),[r]),p=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=r.current)||void 0===t?void 0:t.play();case 2:case"end":return e.stop()}}),e)}))),[r]),m=Object(l.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.pause()}),[r]),k=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b()){e.next=5;break}return e.next=3,p();case 3:e.next=6;break;case 5:m();case 6:case"end":return e.stop()}}),e)}))),[p,m,b]),g=Object(l.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.load()}),[r]),h=Object(l.useMemo)((function(){return{play:p,pause:m,playPause:k,load:g,get currentTime(){return c()},set currentTime(e){o(e)},get audioTracks(){return n.getAudioTracks()},get audioTrack(){return n.getAudioTrack()},set audioTrack(e){n.setAudioTrack(e)},get sourceTracks(){return n.getSourceTracks()},get sourceTrack(){return n.getSourceTrack()},set sourceTrack(e){n.setSourceTrack(e)},get subtitleTracks(){return n.getSubtitleTracks()},get subtitleTrack(){return n.getSubtitleTrack()},set subtitleTrack(e){n.setSubtitleTrack(e)},get playbackRate(){return i()},set playbackRate(e){s(e)},get paused(){return b()},get duration(){return d()},get error(){return f()},get loading(){return j()},get proportionLoaded(){return O()},get proportionPlayed(){return v()}}}),[n,p,m,k,g,c,o,i,s,b,d,f,j,O,v]);return Object(l.useImperativeHandle)(e,(function(){return h}),[h]),Object(l.useMemo)((function(){return{api:h,player:n}}),[h,n])}(t,{autoPlay:n,audioTracks:c,sourceTracks:o,subtitleTracks:s,streamingType:b,isSettingsOpen:d}).player;return Object(R.jsx)("video",Object(r.a)(Object(r.a)(Object(r.a)({},p),k),{},{autoPlay:!1,className:v()("w-screen h-screen",O),ref:g.videoRef}))})),I=n(252),M=n(256),V=n(105),B=n(193),F=n.n(B),D=n(930),_=n(931),W="NONE",$=function(e){var t=e.visible,n=e.onClose,r=e.player,c=Object(l.useState)(t),a=Object(o.a)(c,2),u=a[0],i=a[1],s=Object(l.useState)([]),b=Object(o.a)(s,2),d=b[0],f=b[1],j=Object(l.useState)(null),O=Object(o.a)(j,2),v=O[0],p=O[1],m=Object(l.useState)([]),k=Object(o.a)(m,2),g=k[0],h=k[1],T=Object(l.useState)(null),C=Object(o.a)(T,2),y=C[0],x=C[1],N=Object(l.useState)([]),S=Object(o.a)(N,2),E=S[0],w=S[1],L=Object(l.useState)(W),A=Object(o.a)(L,2),P=A[0],U=A[1],I=Object(l.useMemo)((function(){return F()(d,(function(e){return{title:e.name,value:e.name}}))}),[d]),M=Object(l.useMemo)((function(){return F()(g,(function(e){return{title:e.name,value:e.name}}))}),[g]),B=Object(l.useMemo)((function(){return[{title:"\u041d\u0435\u0442",value:W}].concat(Object(V.a)(F()(E,(function(e){return{title:e.name,value:e.name}}))))}),[E]),$=Object(l.useCallback)((function(e,t){r.current&&(r.current.getVideoNode()[e]=t)}),[r]),z=Object(l.useCallback)((function(e){return function(){p(e),$("audioTrack",e)}}),[$]),H=Object(l.useCallback)((function(e){return function(){x(e),$("sourceTrack",e)}}),[$]),K=Object(l.useCallback)((function(e){return function(){U(e),$("subtitleTrack",e)}}),[$]),q=Object(l.useCallback)((function(){n()}),[n]);return Object(l.useEffect)((function(){if(t&&r.current){var e=r.current.getVideoNode(),n=e.audioTracks,c=e.audioTrack,a=e.sourceTracks,u=e.sourceTrack,o=e.subtitleTracks,i=e.subtitleTrack;(null===n||void 0===n?void 0:n.length)>1||(null===a||void 0===a?void 0:a.length)>1||(null===o||void 0===o?void 0:o.length)>0?(f(n),p(c),h(a),x(u),w(o),U(i||W)):q()}}),[t,r,q]),Object(l.useEffect)((function(){var e;return t?e=setTimeout((function(){i(!0)}),100):i(!1),function(){clearTimeout(e)}}),[t]),Object(R.jsxs)(D.a,{visible:u,onClose:q,children:[I.length>1&&Object(R.jsx)(_.a,{className:"my-4",label:"\u0417\u0432\u0443\u043a",value:v,options:I,onChange:z,splitIn:2,closeOnChange:!0}),M.length>1&&Object(R.jsx)(_.a,{className:"my-4",label:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e",value:y,options:M,onChange:H,splitIn:5,closeOnChange:!0}),B.length>1&&Object(R.jsx)(_.a,{className:"my-4",label:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b",value:P,options:B,onChange:K,splitIn:5,closeOnChange:!0})]})},z=n(929),H=function(e){var t=e.startTime,n=e.startInDelay,r=void 0===n?5:n,c=e.player,a=Object(l.useState)(!0),u=Object(o.a)(a,2),i=u[0],s=u[1],b=Object(l.useState)(r),d=Object(o.a)(b,2),j=d[0],O=d[1],v=Object(l.useMemo)((function(){return Object(z.a)(t)}),[t]),p=Object(l.useCallback)((function(){c.current&&(s(!1),c.current.getVideoNode().currentTime=t)}),[t,c]),m=Object(l.useCallback)((function(){s(!1)}),[]);return Object(l.useEffect)((function(){var e;return i&&(e=setInterval((function(){O((function(e){var t=e-1;return t<=0&&p(),t}))}),1e3)),function(){clearInterval(e)}}),[i,p]),t&&i?Object(R.jsxs)("div",{className:"flex justify-center absolute w-full z-101 bottom-32",children:[Object(R.jsxs)(f.a,{onClick:p,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",v," \u0447\u0435\u0440\u0435\u0437 ",j]}),Object(R.jsx)(f.a,{autoFocus:!0,onClick:m,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},K=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","streamingType","onPlay","onPause","onEnded","onTimeSync"],q=function(e){var t=e.title,n=e.description,c=e.poster,s=e.audios,b=e.sources,j=e.subtitles,O=e.startTime,v=e.timeSyncInterval,p=void 0===v?30:v,m=e.streamingType,k=e.onPlay,g=e.onPause,h=e.onEnded,T=e.onTimeSync,C=Object(i.a)(e,K),y=Object(l.useRef)(),x=Object(l.useState)(!0),N=Object(o.a)(x,2),S=N[0],E=N[1],w=Object(l.useState)(!1),L=Object(o.a)(w,2),A=L[0],P=L[1],V=Object(l.useState)(!1),B=Object(o.a)(V,2),F=B[0],D=B[1],_=Object(l.useCallback)((function(){E(!1),D(!1),null===k||void 0===k||k()}),[k]),W=Object(l.useCallback)((function(e){E(!0),null===g||void 0===g||g(e.currentTime)}),[g]),z=Object(l.useCallback)((function(e){null===h||void 0===h||h(e.target.currentTime)}),[h]),q=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.current||!T){e.next=5;break}return t=y.current.getVideoNode(),n=t.currentTime,e.next=5,T(n);case 5:case"end":return e.stop()}}),e)}))),[T,y]),J=Object(l.useCallback)((function(){P(!0)}),[]),G=Object(l.useCallback)((function(){y.current&&(D(!0),y.current.getVideoNode().pause())}),[y]),Q=Object(l.useCallback)((function(){y.current&&(D(!1),y.current.getVideoNode().play())}),[]),X=Object(l.useCallback)((function(){y.current&&y.current.getVideoNode().pause()}),[y]);return Object(l.useEffect)((function(){var e;return S&&(e=setTimeout((function(){E(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[S]),Object(l.useEffect)((function(){var e;return T&&(e=setInterval(q,1e3*p)),function(){e&&clearInterval(e)}}),[p,T,q]),Object(M.a)("Back",q),Object(M.a)("Blue",G),Object(M.a)("Play",Q),Object(M.a)("Pause",X),Object(M.a)("ArrowUp",G),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)($,{visible:F,onClose:Q,player:y}),S&&Object(R.jsx)(I.a,{className:"absolute z-10 top-0 p-4",children:t}),S&&Object(R.jsx)(f.a,{className:"absolute z-101 bottom-8 right-10 text-blue-600",icon:"settings",iconOnly:!0,onClick:G}),A&&O>0&&Object(R.jsx)(H,{startTime:O,player:y}),Object(R.jsx)(d.a,Object(r.a)(Object(r.a)({},C),{},{ref:y,poster:c,title:n,onPlay:_,onPause:W,onEnded:z,onLoadedMetadata:J,streamingType:m,isSettingsOpen:F,audioTracks:s,sourceTracks:b,subtitleTracks:j,videoComponent:Object(R.jsx)(U,{})}))]})}}}]);
//# sourceMappingURL=17.93e3c750.chunk.js.map