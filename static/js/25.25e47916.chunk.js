(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[25],{1074:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(11),c=n(2),a=n(32),u=n(930),o=n(888),i=n(928),l=n(3),s=function(){var e=Object(a.h)(),t=Object(a.i)().state||{},n=t.item,s=t.trailer,b=Object(c.useMemo)((function(){return{title:n.title,description:"\u0422\u0440\u0435\u0439\u043b\u0435\u0440",poster:n.posters.wide||n.posters.big,sources:Object(i.b)([s])}}),[n,s]),d=Object(c.useCallback)((function(){e.goBack()}),[e]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440: ".concat(n.title," - \u0422\u0440\u0435\u0439\u043b\u0435\u0440")}),Object(l.jsx)(u.a,Object(r.a)(Object(r.a)({},b),{},{onEnded:d}))]})}},888:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=n(893),a=n(3),u=function(e){return Object(a.jsx)(c.a,Object(r.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),c=n(57),a=n(2),u=n(52),o=n.n(u),i=n(257),l=n(251),s=n(3),b=["icon","iconOnly","children","autoFocus","className"],d=function(e){var t=e.icon,n=e.iconOnly,u=e.children,d=e.autoFocus,f=e.className,j=Object(c.a)(e,b),O=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;return d&&(e=requestAnimationFrame((function(){var e,t;null===(e=O.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,d]),Object(s.jsx)(l.a,Object(r.a)(Object(r.a)({},j),{},{ref:O,className:o()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",f),role:"button",children:Object(s.jsxs)("div",{className:"flex items-center",children:[t&&Object(s.jsx)(i.a,{className:o()({"mr-2":!n}),name:t}),!n&&u]})}))}},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),c=n(57),a=n(2),u=n(52),o=n.n(u),i=n(251),l=n(260),s=n(3),b=["defaultChecked","checked","onChange","className","children"],d=function(e){var t=e.defaultChecked,n=e.checked,u=e.onChange,d=e.className,f=e.children,j=Object(c.a)(e,b),O=Object(a.useRef)(null),v=Object(a.useCallback)((function(e){null===u||void 0===u||u(e.target.checked,e)}),[u]),p=Object(a.useCallback)((function(e){var t;Object(l.a)(e,"Enter")&&(null===(t=O.current)||void 0===t||t.click())}),[]);return Object(s.jsx)(i.a,{component:"label",className:o()("text-gray-200 p-2",d),onKeyPress:p,role:"button",children:Object(s.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({type:"checkbox"},j),{},{ref:O,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:v})),Object(s.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:f})]})})}},922:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(11),c=n(57),a=n(2),u=n(255),o=n.n(u),i=n(52),l=n.n(i),s=n(925),b=n.n(s),d=n(3),f=b()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(d.jsx)("div",Object(r.a)({},e))})),j=n(256),O=["visible","onClose","className"],v=function(e){var t=e.visible,n=e.onClose,u=e.className,i=Object(c.a)(e,O),s=Object(a.useMemo)((function(){return o.a.add({})}),[]),b=Object(a.useCallback)((function(){n()}),[n]),v=Object(a.useCallback)((function(){if(t)return b(),!1}),[t,b]),p=Object(a.useCallback)((function(){if(!o.a.focus(s)){var e=o.a.getCurrent();e&&e.blur(),o.a.setActiveContainer(s),setTimeout((function(){o.a.setPointerMode(!1),o.a.focus(s)}),500)}}),[s]);return Object(j.a)("Back",v),Object(j.a)("Blue",v),Object(a.useEffect)((function(){t&&p()}),[t,p]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:l()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:b}),Object(d.jsx)(f,Object(r.a)(Object(r.a)({},i),{},{spotlightId:s,spotlightRestrict:"self-only",spotlightDisabled:!t,className:l()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},u)}))]})}},924:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(11),c=(n(2),n(901)),a=n(3),u=function(e){return Object(a.jsx)(c.a,Object(r.a)(Object(r.a)({},e),{},{type:"radio"}))}},928:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j}));var r=n(898),c=n.n(r),a=n(193),u=n.n(a),o=n(929),i=n.n(o),l=n(954),s=n.n(l),b=function(e){return e<10?"0".concat(e):e};function d(e){return u()(e,(function(e,t){var n,r,a,u,o,i,l;return{lang:e.lang,name:c()(["".concat(b(t+1),"."),(null===(n=e.type)||void 0===n?void 0:n.title)&&(null===(r=e.author)||void 0===r?void 0:r.title)?"".concat(null===(a=e.type)||void 0===a?void 0:a.title,"."):null===(u=e.type)||void 0===u?void 0:u.title,null===(o=e.author)||void 0===o?void 0:o.title,(null===(i=e.type)||void 0===i?void 0:i.title)||(null===(l=e.author)||void 0===l?void 0:l.title)?"(".concat(s()(e.lang),")"):s()(e.lang),"aac"!==e.codec&&s()(e.codec)]).join(" ")}}))}function f(e,t){return i()(u()(e,(function(e){var n="string"===typeof e.url?e.url:e.url[t]||e.url.http;return{src:n,name:e.quality,type:n.includes(".m3u8")?"application/x-mpegURL":"video/mp4"}})),(function(e){var t=e.name;return parseInt(t)}),"desc")}function j(e){return u()(e,(function(e,t){return{src:e.url,lang:e.lang,name:"".concat(s()(e.lang)," #").concat(b(t+1))}}))}},930:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(11),c=n(31),a=n.n(c),u=n(53),o=n(73),i=n(57),l=n(2),s=n.n(l),b=n(938),d=n.n(b),f=n(897),j=n(93),O=n(52),v=n.n(O),p=n(942),k=n.n(p),m=n(936),h=n.n(m),g=n(949),T=n.n(g),x=n(899),y=n.n(x),C=n(89),S=n(90),w=function(){function e(t){Object(C.a)(this,e),this.resource=void 0,this.objectURL=void 0,this.resource=t}return Object(S.a)(e,[{key:"blobToBuffer",value:function(){var e=this;return new Promise((function(t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(new Uint8Array(r))})),r.addEventListener("error",(function(){return n("Error while reading the Blob object")})),r.readAsArrayBuffer(e.resource)}))}},{key:"getURL",value:function(){var t=this;return new Promise((function(n,r){return t.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(t.resource,(function(r){var c="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),a=new Blob([c],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(a),n(t.objectURL)}),(function(){t.blobToBuffer().then((function(r){var c=new TextDecoder("utf-8").decode(r),a="WEBVTT FILE\r\n\r\n".concat(e.toVTT(c)),u=new Blob([a],{type:"text/vtt"});return t.objectURL=URL.createObjectURL(u),n(t.objectURL)}))})):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found.")}))}},{key:"release",value:function(){URL.createObjectURL(this.objectURL)}}],[{key:"blobToString",value:function(e,t,n){var r=new FileReader;r.addEventListener("loadend",(function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)})),r.addEventListener("error",(function(){return n()})),r.readAsText(e)}},{key:"toVTT",value:function(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}},{key:"toTypedArray",value:function(e){var t=[];return e.split("").forEach((function(e){t.push(parseInt("".concat(e.charCodeAt(0)),16))})),Uint8Array.from(t)}}]),e}();function N(){return(N=Object(u.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.blob();case 4:return n=e.sent,r=new w(n),e.abrupt("return",r.getURL());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(3),R=["autoPlay","audioTracks","sourceTracks","subtitleTracks","streamingType","isSettingsOpen","onUpdate","className","mediaComponent"];function L(e){var t=e.autoPlay,n=e.audioTracks,r=e.sourceTracks,c=e.subtitleTracks,a=e.streamingType,u=e.isSettingsOpen,i=Object(l.useRef)(null),s=Object(l.useRef)(null),b=Object(l.useRef)(0),d=Object(l.useRef)(!1),f=Object(l.useState)(null===n||void 0===n?void 0:n[0]),j=Object(o.a)(f,2),O=j[0],v=j[1],p=Object(l.useState)(null===r||void 0===r?void 0:r[0]),m=Object(o.a)(p,2),g=m[0],x=m[1],C=Object(l.useState)(null),S=Object(o.a)(C,2),w=S[0],E=S[1],R=Object(l.useCallback)((function(){return"hls2"===a?[]:n}),[n,a]),L=Object(l.useCallback)((function(){return null===O||void 0===O?void 0:O.name}),[O]),A=Object(l.useCallback)((function(e){var t=null===n||void 0===n?void 0:n.find((function(t){return t.name===e}));t&&v(t)}),[n]),P=Object(l.useCallback)((function(){return y()(r,"src")}),[r]),U=Object(l.useCallback)((function(){return null===g||void 0===g?void 0:g.name}),[g]),I=Object(l.useCallback)((function(e){var t=null===r||void 0===r?void 0:r.find((function(t){return t.name===e}));t&&x(t)}),[r]),B=Object(l.useCallback)((function(){return c}),[c]),V=Object(l.useCallback)((function(){return null===w||void 0===w?void 0:w.name}),[w]),F=Object(l.useCallback)((function(e){var t=null===c||void 0===c?void 0:c.find((function(t){return t.name===e}));E(t||null)}),[c]),M=Object(l.useMemo)((function(){var e;return null!==(e=null===n||void 0===n?void 0:n.findIndex((function(e){return e.name===O.name})))&&void 0!==e?e:0}),[n,O]),D=Object(l.useMemo)((function(){return"hls"===a?null===g||void 0===g?void 0:g.src.replace(/master-v1a\d/,"master-v1a".concat(M+1)):null===g||void 0===g?void 0:g.src}),[a,M,null===g||void 0===g?void 0:g.src]),W=Object(l.useCallback)((function(){if(i.current){for(i.current.removeEventListener("canplay",W);i.current.firstChild;)i.current.lastChild.track.mode="disabled",i.current.removeChild(i.current.lastChild);if(s.current){var e=h()(s.current.audioTracks,(function(e){return e.name===(null===O||void 0===O?void 0:O.name)}));e&&(s.current.audioTrack=e.id)}else T()(i.current.audioTracks,(function(e,t){e.enabled=t===M}));if(b.current>0?(i.current.currentTime=b.current,d.current?i.current.pause():i.current.play()):t&&i.current.play(),w){var n=function(e){if(i.current){var t=document.createElement("track");i.current.appendChild(t),t.src=e,t.kind="captions",t.id=w.name,t.label=w.name,t.srclang=w.lang,t.track.mode="showing"}};w.src.endsWith(".srt")?function(e){return N.apply(this,arguments)}(w.src).then(n):n(w.src)}}}),[t,M,null===O||void 0===O?void 0:O.name,w]);return Object(l.useEffect)((function(){if(i.current){if(D.includes(".m3u8")&&k.a.isSupported()){var e=s.current=new k.a({enableWebVTT:!1,enableCEA708Captions:!1});e.attachMedia(i.current),e.on(k.a.Events.MEDIA_ATTACHED,(function(){e.loadSource(D)}))}else i.current.src=D;i.current.addEventListener("canplay",W)}return function(){i.current&&(i.current.currentTime>0&&(b.current=i.current.currentTime),i.current.removeEventListener("canplay",W)),s.current&&(s.current.destroy(),s.current=null)}}),[D,i,b,W,a,O,g,w,M,n]),Object(l.useEffect)((function(){d.current=Boolean(u)}),[u]),Object(l.useMemo)((function(){return{videoRef:i,getAudioTracks:R,getAudioTrack:L,setAudioTrack:A,getSourceTracks:P,getSourceTrack:U,setSourceTrack:I,getSubtitleTracks:B,getSubtitleTrack:V,setSubtitleTrack:F}}),[i,R,L,A,P,U,I,B,V,F])}var A=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],P=s.a.forwardRef((function(e,t){var n=e.autoPlay,c=e.audioTracks,o=e.sourceTracks,s=e.subtitleTracks,b=e.streamingType,d=e.isSettingsOpen,f=e.onUpdate,O=e.className,p=(e.mediaComponent,Object(i.a)(e,R)),k=Object(l.useCallback)((function(){null===f||void 0===f||f()}),[f]),m=Object(l.useMemo)((function(){return A.reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(j.a)({},t,(function(){var e;k();for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];null===(e=p[t])||void 0===e||e.call.apply(e,[p].concat(r))})))}),{})}),[p,k]),h=function(e,t){var n=L(t),r=n.videoRef,c=Object(l.useCallback)((function(){return r.current?r.current.currentTime:0}),[r]),o=Object(l.useCallback)((function(e){r.current&&(r.current.currentTime=e)}),[r]),i=Object(l.useCallback)((function(){return r.current?r.current.playbackRate:1}),[r]),s=Object(l.useCallback)((function(e){r.current&&(r.current.playbackRate=e)}),[r]),b=Object(l.useCallback)((function(){return!!r.current&&r.current.paused}),[r]),d=Object(l.useCallback)((function(){return r.current?r.current.duration:0}),[r]),f=Object(l.useCallback)((function(){return!!r.current&&r.current.networkState===r.current.NETWORK_NO_SOURCE}),[r]),j=Object(l.useCallback)((function(){return!r.current||r.current.readyState<r.current.HAVE_ENOUGH_DATA}),[r]),O=Object(l.useCallback)((function(){return r.current?r.current.buffered.length&&r.current.buffered.end(r.current.buffered.length-1)/r.current.duration:0}),[r]),v=Object(l.useCallback)((function(){return r.current?r.current.currentTime/r.current.duration:0}),[r]),p=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=r.current)||void 0===t?void 0:t.play();case 2:case"end":return e.stop()}}),e)}))),[r]),k=Object(l.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.pause()}),[r]),m=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b()){e.next=5;break}return e.next=3,p();case 3:e.next=6;break;case 5:k();case 6:case"end":return e.stop()}}),e)}))),[p,k,b]),h=Object(l.useCallback)((function(){var e;null===(e=r.current)||void 0===e||e.load()}),[r]),g=Object(l.useMemo)((function(){return{play:p,pause:k,playPause:m,load:h,get currentTime(){return c()},set currentTime(e){o(e)},get audioTracks(){return n.getAudioTracks()},get audioTrack(){return n.getAudioTrack()},set audioTrack(e){n.setAudioTrack(e)},get sourceTracks(){return n.getSourceTracks()},get sourceTrack(){return n.getSourceTrack()},set sourceTrack(e){n.setSourceTrack(e)},get subtitleTracks(){return n.getSubtitleTracks()},get subtitleTrack(){return n.getSubtitleTrack()},set subtitleTrack(e){n.setSubtitleTrack(e)},get playbackRate(){return i()},set playbackRate(e){s(e)},get paused(){return b()},get duration(){return d()},get error(){return f()},get loading(){return j()},get proportionLoaded(){return O()},get proportionPlayed(){return v()}}}),[n,p,k,m,h,c,o,i,s,b,d,f,j,O,v]);return Object(l.useImperativeHandle)(e,(function(){return g}),[g]),Object(l.useMemo)((function(){return{api:g,player:n}}),[g,n])}(t,{autoPlay:n,audioTracks:c,sourceTracks:o,subtitleTracks:s,streamingType:b,isSettingsOpen:d}).player;return Object(E.jsx)("video",Object(r.a)(Object(r.a)(Object(r.a)({},p),m),{},{autoPlay:!1,className:v()("w-screen h-screen",O),ref:h.videoRef}))})),U=n(250),I=n(256),B=n(193),V=n.n(B),F=n(922),M=n(924),D="NONE",W=function(e){var t=e.visible,n=e.onClose,r=e.player,c=Object(l.useState)(t),a=Object(o.a)(c,2),u=a[0],i=a[1],s=Object(l.useState)([]),b=Object(o.a)(s,2),d=b[0],f=b[1],j=Object(l.useState)(null),O=Object(o.a)(j,2),v=O[0],p=O[1],k=Object(l.useState)([]),m=Object(o.a)(k,2),h=m[0],g=m[1],T=Object(l.useState)(null),x=Object(o.a)(T,2),y=x[0],C=x[1],S=Object(l.useState)([]),w=Object(o.a)(S,2),N=w[0],R=w[1],L=Object(l.useState)(null),A=Object(o.a)(L,2),P=A[0],I=A[1],B=Object(l.useCallback)((function(e,t){r.current&&(r.current.getVideoNode()[e]=t)}),[r]),W=Object(l.useCallback)((function(e){return function(){p(e),B("audioTrack",e)}}),[B]),$=Object(l.useCallback)((function(e){return function(){C(e),B("sourceTrack",e)}}),[B]),z=Object(l.useCallback)((function(e){return function(){I(e),B("subtitleTrack",e)}}),[B]),_=Object(l.useCallback)((function(){n()}),[n]);return Object(l.useEffect)((function(){if(t&&r.current){var e=r.current.getVideoNode(),n=e.audioTracks,c=e.audioTrack,a=e.sourceTracks,u=e.sourceTrack,o=e.subtitleTracks,i=e.subtitleTrack;(null===n||void 0===n?void 0:n.length)>1||(null===a||void 0===a?void 0:a.length)>1||(null===o||void 0===o?void 0:o.length)>0?(f(n),p(c),g(a),C(u),R(o),I(i)):_()}}),[t,r,_]),Object(l.useEffect)((function(){var e;return t?e=setTimeout((function(){i(!0)}),100):i(!1),function(){clearTimeout(e)}}),[t]),Object(E.jsx)(F.a,{visible:u,onClose:_,children:Object(E.jsxs)("div",{className:"flex flex-col",children:[(null===d||void 0===d?void 0:d.length)>1&&Object(E.jsxs)("div",{className:"flex flex-col py-4",children:[Object(E.jsx)(U.a,{children:"\u0417\u0432\u0443\u043a"}),Object(E.jsx)("div",{className:"flex flex-wrap mt-2",children:V()(d,(function(e){var t=e.name;return Object(E.jsx)("div",{className:"w-1/2",children:Object(E.jsx)(M.a,{checked:t===v,onChange:W(t),children:t})},t)}))})]}),(null===h||void 0===h?void 0:h.length)>1&&Object(E.jsxs)("div",{className:"flex flex-col py-4",children:[Object(E.jsx)(U.a,{children:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(E.jsx)("div",{className:"flex flex-wrap mt-2",children:V()(h,(function(e){var t=e.name;return Object(E.jsx)("div",{className:"w-1/6",children:Object(E.jsx)(M.a,{checked:t===y,onChange:$(t),children:t})},t)}))})]}),(null===N||void 0===N?void 0:N.length)>0&&Object(E.jsxs)("div",{className:"flex flex-col py-4",children:[Object(E.jsx)(U.a,{children:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b"}),Object(E.jsxs)("div",{className:"flex flex-wrap mt-2",children:[Object(E.jsx)("div",{className:"w-1/6",children:Object(E.jsx)(M.a,{checked:!P||P===D,onChange:z(D),children:"\u041d\u0435\u0442"})}),V()(N,(function(e){var t=e.name;return Object(E.jsx)("div",{className:"w-1/6",children:Object(E.jsx)(M.a,{checked:t===P,onChange:z(t),children:t})},t)}))]})]})]})})},$=function(e){var t=e.startTime,n=e.startInDelay,r=void 0===n?5:n,c=e.player,a=Object(l.useState)(!0),u=Object(o.a)(a,2),i=u[0],s=u[1],b=Object(l.useState)(r),d=Object(o.a)(b,2),j=d[0],O=d[1],v=Object(l.useMemo)((function(){return new Date(1e3*(t||0)).toISOString().substr(11,8).replace(/^00:/,"")}),[t]),p=Object(l.useCallback)((function(){c.current&&(s(!1),c.current.getVideoNode().currentTime=t)}),[t,c]),k=Object(l.useCallback)((function(){s(!1)}),[]);return Object(l.useEffect)((function(){var e;return i&&(e=setInterval((function(){O((function(e){var t=e-1;return t<=0&&p(),t}))}),1e3)),function(){clearInterval(e)}}),[i,p]),t&&i?Object(E.jsxs)("div",{className:"flex justify-center absolute w-full z-101 bottom-32",children:[Object(E.jsxs)(f.a,{onClick:p,children:["\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 ",v," \u0447\u0435\u0440\u0435\u0437 ",j]}),Object(E.jsx)(f.a,{autoFocus:!0,onClick:k,children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441 \u043d\u0430\u0447\u0430\u043b\u0430"})]}):null},z=["title","description","poster","audios","sources","subtitles","startTime","timeSyncInterval","streamingType","onPlay","onPause","onEnded","onTimeSync"],_=function(e){var t=e.title,n=e.description,c=e.poster,s=e.audios,b=e.sources,j=e.subtitles,O=e.startTime,v=e.timeSyncInterval,p=void 0===v?30:v,k=e.streamingType,m=e.onPlay,h=e.onPause,g=e.onEnded,T=e.onTimeSync,x=Object(i.a)(e,z),y=Object(l.useRef)(),C=Object(l.useState)(!0),S=Object(o.a)(C,2),w=S[0],N=S[1],R=Object(l.useState)(!1),L=Object(o.a)(R,2),A=L[0],B=L[1],V=Object(l.useState)(!1),F=Object(o.a)(V,2),M=F[0],D=F[1],_=Object(l.useCallback)((function(){N(!1),null===m||void 0===m||m()}),[m]),H=Object(l.useCallback)((function(e){N(!0),null===h||void 0===h||h(e.currentTime)}),[h]),K=Object(l.useCallback)((function(e){null===g||void 0===g||g(e.target.currentTime)}),[g]),q=Object(l.useCallback)(Object(u.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y.current||!T){e.next=5;break}return t=y.current.getVideoNode(),n=t.currentTime,e.next=5,T(n);case 5:case"end":return e.stop()}}),e)}))),[T,y]),J=Object(l.useCallback)((function(){B(!0)}),[]),G=Object(l.useCallback)((function(){y.current&&(D(!0),y.current.getVideoNode().pause())}),[y]),Q=Object(l.useCallback)((function(){y.current&&(D(!1),y.current.getVideoNode().play())}),[]),X=Object(l.useCallback)((function(){y.current&&y.current.getVideoNode().pause()}),[y]);return Object(l.useEffect)((function(){var e;return w&&(e=setTimeout((function(){N(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[w]),Object(l.useEffect)((function(){var e;return T&&(e=setInterval(q,1e3*p)),function(){e&&clearInterval(e)}}),[p,T,q]),Object(I.a)("Back",q),Object(I.a)("Blue",G),Object(I.a)("Play",Q),Object(I.a)("Pause",X),Object(I.a)("ArrowUp",G),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(W,{visible:M,onClose:Q,player:y}),w&&Object(E.jsx)(U.a,{className:"absolute z-10 top-0 p-4",children:t}),w&&Object(E.jsx)(f.a,{className:"absolute z-101 bottom-8 right-10",icon:"settings",iconOnly:!0,onClick:G}),A&&O>0&&Object(E.jsx)($,{startTime:O,player:y}),Object(E.jsx)(d.a,Object(r.a)(Object(r.a)({},x),{},{ref:y,poster:c,title:n,onPlay:_,onPause:H,onEnded:K,onLoadedMetadata:J,streamingType:k,isSettingsOpen:M,audioTracks:s,sourceTracks:b,subtitleTracks:j,videoComponent:Object(E.jsx)(P,{})}))]})}}}]);
//# sourceMappingURL=25.25e47916.chunk.js.map