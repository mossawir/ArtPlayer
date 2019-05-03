/*!
 * artplayer-plugin-gif.js v3.1.7
 * Github: https://github.com/zhw2590582/ArtPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).artplayerPluginGif=t()}(this,function(){"use strict";var n=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e};var S=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach(function(e){n(t,e,r[e])})}return t};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function e(e,t){return e(t={exports:{}},t.exports),t.exports}var x=e(function(C,e){!function(e,P,t,H){var r,i,z={URL:e.URL||e.webkitURL||e.mozURL||e.msURL,getUserMedia:(i=t.getUserMedia||t.webkitGetUserMedia||t.mozGetUserMedia||t.msGetUserMedia,i?i.bind(t):i),requestAnimFrame:e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame,requestTimeout:function(r,i){if(r=r||z.noop,i=i||0,!z.requestAnimFrame)return setTimeout(r,i);var n=(new Date).getTime(),o=new Object,a=z.requestAnimFrame;return o.value=a(function e(){var t=(new Date).getTime();i<=t-n?r.call():o.value=a(e)}),o},Blob:e.Blob||e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,btoa:(r=e.btoa||function(e){for(var t="",r=0,i=e.length,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=void 0,a=void 0,s=void 0,c=void 0,d=void 0,l=void 0,u=void 0;r<i;)c=(o=e.charCodeAt(r++))>>2,d=(3&o)<<4|(a=e.charCodeAt(r++))>>4,l=(15&a)<<2|(s=e.charCodeAt(r++))>>6,u=63&s,isNaN(a)?l=u=64:isNaN(s)&&(u=64),t=t+n.charAt(c)+n.charAt(d)+n.charAt(l)+n.charAt(u);return t},r?r.bind(e):z.noop),isObject:function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){return z.isObject(e)&&!Object.keys(e).length},isArray:function(e){return e&&Array.isArray(e)},isFunction:function(e){return e&&"function"==typeof e},isElement:function(e){return e&&1===e.nodeType},isString:function(e){return"string"==typeof e||"[object String]"===Object.prototype.toString.call(e)},isSupported:{canvas:function(){var e=P.createElement("canvas");return e&&e.getContext&&e.getContext("2d")},webworkers:function(){return e.Worker},blob:function(){return z.Blob},Uint8Array:function(){return e.Uint8Array},Uint32Array:function(){return e.Uint32Array},videoCodecs:function(){var e=P.createElement("video"),t={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{e&&e.canPlayType&&(t.mp4=""!==e.canPlayType('video/mp4; codecs="mp4v.20.8"'),t.h264=""!==(e.canPlayType('video/mp4; codecs="avc1.42E01E"')||e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),t.ogv=""!==e.canPlayType('video/ogg; codecs="theora"'),t.ogg=""!==e.canPlayType('video/ogg; codecs="theora"'),t.webm=-1!==e.canPlayType('video/webm; codecs="vp8, vorbis"'))}catch(e){}return t}()},noop:function(){},each:function(e,t){var r=void 0,i=void 0;if(z.isArray(e))for(r=-1,i=e.length;++r<i&&!1!==t(r,e[r]););else if(z.isObject(e))for(r in e)if(e.hasOwnProperty(r)&&!1===t(r,e[r]))break},mergeOptions:function(i,n){if(z.isObject(i)&&z.isObject(n)&&Object.keys){var o={};return z.each(i,function(e,t){o[e]=i[e]}),z.each(n,function(e,t){var r=n[e];z.isObject(r)&&i[e]?o[e]=z.mergeOptions(i[e],r):o[e]=r}),o}},setCSSAttr:function(r,e,t){z.isElement(r)&&(z.isString(e)&&z.isString(t)?r.style[e]=t:z.isObject(e)&&z.each(e,function(e,t){r.style[e]=t}))},removeElement:function(e){z.isElement(e)&&e.parentNode&&e.parentNode.removeChild(e)},createWebWorker:function(e){if(!z.isString(e))return{};try{var t=new z.Blob([e],{type:"text/javascript"}),r=z.URL.createObjectURL(t);return{objectUrl:r,worker:new Worker(r)}}catch(e){return""+e}},getExtension:function(e){return e.substr(e.lastIndexOf(".")+1,e.length)},getFontSize:function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{};if(!P.body||!1===e.resizeFont)return e.fontSize;var t=e.text,r=e.gifWidth,i=parseInt(e.fontSize,10),n=parseInt(e.minFontSize,10),o=P.createElement("div"),a=P.createElement("span");for(o.setAttribute("width",r),o.appendChild(a),a.innerHTML=t,a.style.fontSize=i+"px",a.style.textIndent="-9999px",a.style.visibility="hidden",P.body.appendChild(a);a.offsetWidth>r&&n<=i;)a.style.fontSize=--i+"px";return P.body.removeChild(a),i+"px"},webWorkerError:!1},n=Object.freeze({default:z}),u={validate:function(i){i=z.isObject(i)?i:{};var n={};return z.each(u.validators,function(e,t){var r=t.errorCode;if(!i[r]&&!t.condition)return!((n=t).error=!0)}),delete n.condition,n},isValid:function(e){var t=!0!==u.validate(e).error;return t},validators:[{condition:z.isFunction(z.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:z.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:z.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:z.isFunction(z.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:z.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:z.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:z.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},o=Object.freeze({default:u}),a=function(){},c={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:a,completeCallback:a,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},s=Object.freeze({default:c});function d(){return u.isValid()}function h(){var C,S,x,k,F,g=256,O=499,W=491,E=487,A=503,R=3*A,c=g-1,T=4,U=100,m=16,o=1<<m,h=10,p=10,v=o>>p,b=o<<h-p,M=6,I=(g>>3)*(1<<M),j=30,V=1024,L=256,f=1<<18,l=[],y=[],w=[],P=[];function H(e,t,r,i,n){var o,a,s,c,d,l,u;for((s=t-e)<-1&&(s=-1),g<(c=t+e)&&(c=g),o=t+1,a=t-1,l=1;o<c||s<a;){if(d=P[l++],o<c){u=F[o++];try{u[0]-=d*(u[0]-r)/f|0,u[1]-=d*(u[1]-i)/f|0,u[2]-=d*(u[2]-n)/f|0}catch(e){}}if(s<a){u=F[a--];try{u[0]-=d*(u[0]-r)/f|0,u[1]-=d*(u[1]-i)/f|0,u[2]-=d*(u[2]-n)/f|0}catch(e){}}}}function z(e,t,r){var i,n,o,a,s,c,d,l,u,f;for(u=l=~(1<<31),d=c=-1,i=0;i<g;i++)(n=(f=F[i])[0]-e)<0&&(n=-n),(o=f[1]-t)<0&&(o=-o),n+=o,(o=f[2]-r)<0&&(o=-o),(n+=o)<l&&(l=n,c=i),(a=n-(y[i]>>m-T))<u&&(u=a,d=i),s=w[i]>>p,w[i]-=s,y[i]+=s<<h;return w[c]+=v,y[c]-=b,d}(function(e,t,r){var i,n;for(S=e,x=t,k=r,F=new Array(g),i=0;i<g;i++)F[i]=new Array(4),(n=F[i])[0]=n[1]=n[2]=(i<<T+8)/g|0,w[i]=o/g|0,y[i]=0}).apply(this,arguments);var e={map:function(e,t,r){var i,n,o,a,s,c,d;for(s=1e3,d=-1,n=(i=l[t])-1;i<g||0<=n;)i<g&&(s<=(o=(c=F[i])[1]-t)?i=g:(i++,o<0&&(o=-o),(a=c[0]-e)<0&&(a=-a),(o+=a)<s&&((a=c[2]-r)<0&&(a=-a),(o+=a)<s&&(s=o,d=c[3])))),0<=n&&(s<=(o=t-(c=F[n])[1])?n=-1:(n--,o<0&&(o=-o),(a=c[0]-e)<0&&(a=-a),(o+=a)<s&&((a=c[2]-r)<0&&(a=-a),(o+=a)<s&&(s=o,d=c[3]))));return d}};return e.process=function(){return function(){var e,t,r,i,n,o,a,s,c,d,l,u,f,g,m,h,p,v,b,y,w;for(x<R&&(k=1),C=30+(k-1)/3,u=S,d=(l=(g=x)/(3*k))/U|(f=0),s=V,(a=(o=I)>>M)<=1&&(a=0),e=0;e<a;e++)P[e]=s*((a*a-e*e)*L/(a*a));for(c=x<R?3:x%O!=0?3*O:x%W!=0?3*W:x%E!=0?3*E:3*A,e=0;e<l;)if(m=s,h=t=z(r=(255&u[f+0])<<T,i=(255&u[f+1])<<T,n=(255&u[f+2])<<T),p=r,v=i,b=n,y=void 0,y=F[h],w=m/V,y[0]-=w*(y[0]-p)|0,y[1]-=w*(y[1]-v)|0,y[2]-=w*(y[2]-b)|0,0!==a&&H(a,t,r,i,n),g<=(f+=c)&&(f-=x),0===d&&(d=1),++e%d==0)for(s-=s/C,(a=(o-=o/j)>>M)<=1&&(a=0),t=0;t<a;t++)P[t]=s*((a*a-t*t)*L/(a*a))}(),function(){var e;for(e=0;e<g;e++)F[e][0]>>=T,F[e][1]>>=T,F[e][2]>>=T,F[e][3]=e}(),function(){var e,t,r,i,n,o,a,s;for(e=s=a=0;e<g;e++){for(i=(n=F[r=e])[1],t=e+1;t<g;t++)(o=F[t])[1]<i&&(r=t,i=o[1]);if(o=F[r],e!=r&&(t=o[0],o[0]=n[0],n[0]=t,t=o[1],o[1]=n[1],n[1]=t,t=o[2],o[2]=n[2],n[2]=t,t=o[3],o[3]=n[3],n[3]=t),i!=a){for(l[a]=s+e>>1,t=a+1;t<i;t++)l[t]=e;a=i,s=e}}for(l[a]=s+c>>1,t=a+1;t<256;t++)l[t]=c}(),function(){for(var e=[],t=new Array(g),r=0;r<g;r++)t[F[r][3]]=r;for(var i=0,n=0;n<g;n++){var o=t[n];e[i++]=F[o][0],e[i++]=F[o][1],e[i++]=F[o][2]}return e}()},e}function l(){try{this.onmessage=function(e){var t,r=e.data||{};r.gifshot&&(t=i.run(r),postMessage(t))}}catch(e){}var i={dataToRGB:function(e,t,r){for(var i=t*r*4,n=0,o=[];n<i;)o.push(e[n++]),o.push(e[n++]),o.push(e[n++]),n++;return o},componentizedPaletteToArray:function(e){e=e||[];for(var t=[],r=0;r<e.length;r+=3){var i=e[r],n=e[r+1],o=e[r+2];t.push(i<<16|n<<8|o)}return t},processFrameWithQuantizer:function(e,t,r,i){for(var n=this.dataToRGB(e,t,r),o=new h(n,n.length,i),a=o.process(),s=new Uint32Array(this.componentizedPaletteToArray(a)),c=t*r,d=new Uint8Array(c),l=0,u=0;u<c;u++){var f=n[l++],g=n[l++],m=n[l++];d[u]=o.map(f,g,m)}return{pixels:d,palette:s}},run:function(e){var t=e=e||{},r=t.height,i=(t.palette,t.sampleInterval),n=t.width,o=e.data;return this.processFrameWithQuantizer(o,n,r,i)}};return i}function m(v,e,t,r){var b=0,i=(r=r===H?{}:r).loop===H?null:r.loop,y=r.palette===H?null:r.palette;if(e<=0||t<=0||65535<e||65535<t)throw"Width/Height invalid.";v[b++]=71,v[b++]=73,v[b++]=70,v[b++]=56,v[b++]=57,v[b++]=97;if(v[b++]=255&e,v[b++]=e>>8&255,v[b++]=255&t,v[b++]=t>>8&255,v[b++]=0|(null!==y?128:0),v[b++]=0,v[b++]=0,null!==i){if(i<0||65535<i)throw"Loop count invalid.";v[b++]=33,v[b++]=255,v[b++]=11,v[b++]=78,v[b++]=69,v[b++]=84,v[b++]=83,v[b++]=67,v[b++]=65,v[b++]=80,v[b++]=69,v[b++]=50,v[b++]=46,v[b++]=48,v[b++]=3,v[b++]=1,v[b++]=255&i,v[b++]=i>>8&255,v[b++]=0}var w=!1;this.addFrame=function(e,t,r,i,n,o){if(!0===w&&(--b,w=!1),o=o===H?{}:o,e<0||t<0||65535<e||65535<t)throw"x/y invalid.";if(r<=0||i<=0||65535<r||65535<i)throw"Width/Height invalid.";if(n.length<r*i)throw"Not enough pixels for the frame size.";var a=!0,s=o.palette;if(s!==H&&null!==s||(a=!1,s=y),s===H||null===s)throw"Must supply either a local or global palette.";for(var c=function(e){var t=e.length;if(t<2||256<t||t&t-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return t}(s),d=0;c>>=1;)++d;c=1<<d;var l=o.delay===H?0:o.delay,u=o.disposal===H?0:o.disposal;if(u<0||3<u)throw"Disposal out of range.";var f=!1,g=0;if(o.transparent!==H&&null!==o.transparent&&(f=!0,(g=o.transparent)<0||c<=g))throw"Transparent color index.";if((0!==u||f||0!==l)&&(v[b++]=33,v[b++]=249,v[b++]=4,v[b++]=u<<2|(!0===f?1:0),v[b++]=255&l,v[b++]=l>>8&255,v[b++]=g,v[b++]=0),v[b++]=44,v[b++]=255&e,v[b++]=e>>8&255,v[b++]=255&t,v[b++]=t>>8&255,v[b++]=255&r,v[b++]=r>>8&255,v[b++]=255&i,v[b++]=i>>8&255,v[b++]=!0===a?128|d-1:0,!0===a)for(var m=0,h=s.length;m<h;++m){var p=s[m];v[b++]=p>>16&255,v[b++]=p>>8&255,v[b++]=255&p}b=function(t,r,e,i){t[r++]=e;var n=r++,o=1<<e,a=o-1,s=1+o,c=1+s,d=e+1,l=0,u=0;function f(e){for(;e<=l;)t[r++]=255&u,u>>=8,l-=8,r===n+256&&(t[n]=255,n=r++)}function g(e){u|=e<<l,l+=d,f(8)}var m=i[0]&a,h={};g(o);for(var p=1,v=i.length;p<v;++p){var b=i[p]&a,y=m<<8|b,w=h[y];if(w===H){for(u|=m<<l,l+=d;8<=l;)t[r++]=255&u,u>>=8,l-=8,r===n+256&&(t[n]=255,n=r++);4096===c?(g(o),c=1+s,d=e+1,h={}):(1<<d<=c&&++d,h[y]=c++),m=b}else m=w}g(m),g(s),f(1),n+1===r?t[n]=0:(t[n]=r-n-1,t[r++]=0);return r}(v,b,d<2?2:d,n)},this.end=function(){return!1===w&&(v[b++]=59,w=!0),b}}var f=function(){},G=function(e){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=f,this.onRenderProgressCallback=f,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=e,this.initializeWebWorkers(e)};G.prototype={workerMethods:l(),initializeWebWorkers:function(e){var t,r=h.toString()+"("+l.toString()+"());",i=void 0,n=void 0,o=void 0,a=-1,s="";for(t=e.numWorkers;++a<t;)i=z.createWebWorker(r),z.isObject(i)?(n=i.objectUrl,o=i.worker,this.workers.push({worker:o,objectUrl:n}),this.availableWorkers.push(o)):(s=i,z.webWorkerError=!!i);this.workerError=s,this.canvas=P.createElement("canvas"),this.canvas.width=e.gifWidth,this.canvas.height=e.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(e){this.availableWorkers.push(e)},byteMap:function(){for(var e=[],t=0;t<256;t++)e[t]=String.fromCharCode(t);return e}(),bufferToString:function(e){for(var t=e.length,r="",i=-1;++i<t;)r+=this.byteMap[e[i]];return r},onFrameFinished:function(e){var t=this,r=t.frames,i=!!(t.options.images||[]).length,n=r.every(function(e){return!e.beingProcessed&&e.done});t.numRenderedFrames++,i&&e(t.numRenderedFrames/r.length),t.onRenderProgressCallback(.75*t.numRenderedFrames/r.length),n?t.generatingGIF||t.generateGIF(r,t.onRenderCompleteCallback):z.requestTimeout(function(){t.processNextFrame()},1)},processFrame:function(e){var t=this,r=(this.options,this.options),i=r.progressCallback,n=r.sampleInterval,o=this.frames,a=void 0,s=void 0,c=function(){var e=(0<arguments.length&&arguments[0]!==H?arguments[0]:{}).data;delete a.data,a.pixels=Array.prototype.slice.call(e.pixels),a.palette=Array.prototype.slice.call(e.palette),a.done=!0,a.beingProcessed=!1,t.freeWorker(s),t.onFrameFinished(i)};(a=o[e]).beingProcessed||a.done?this.onFrameFinished():(a.sampleInterval=n,a.beingProcessed=!0,a.gifshot=!0,(s=this.getWorker())?(s.onmessage=c,s.postMessage(a)):c({data:t.workerMethods.run(a)}))},startRendering:function(e){this.onRenderCompleteCallback=e;for(var t=0;t<this.options.numWorkers&&t<this.frames.length;t++)this.processFrame(t)},processNextFrame:function(){for(var e=-1,t=0;t<this.frames.length;t++){var r=this.frames[t];if(!r.done&&!r.beingProcessed){e=t;break}}0<=e&&this.processFrame(e)},generateGIF:function(n,e){var t=[],r={loop:this.repeat},i=this.options,o=i.interval,a=i.frameDuration,s=!!i.images.length,c=i.gifHeight,d=i.gifWidth,l=new m(t,d,c,r),u=this.onRenderProgressCallback,f=s?100*o:0,g=void 0;this.generatingGIF=!0,z.each(n,function(e,t){var r=t.palette;u(.75+.25*t.position*1/n.length);for(var i=0;i<a;i++)l.addFrame(0,0,d,c,t.pixels,{palette:r,delay:f})}),l.end(),u(1),this.frames=[],this.generatingGIF=!1,z.isFunction(e)&&(g=this.bufferToString(t),e("data:image/gif;base64,"+z.btoa(g)))},setRepeat:function(e){this.repeat=e},addFrame:function(e,t){t=z.isObject(t)?t:{};var r=this.ctx,i=this.options,n=i.gifWidth,o=i.gifHeight,a=z.getFontSize(t),s=t,c=s.filter,d=s.fontColor,l=s.fontFamily,u=s.fontWeight,f=(s.gifHeight,s.gifWidth,s.text),g=s.textAlign,m=s.textBaseline,h=t.textXCoordinate?t.textXCoordinate:"left"===g?1:"right"===g?n:n/2,p=t.textYCoordinate?t.textYCoordinate:"top"===m?1:"center"===m?o/2:o,v=u+" "+a+" "+l,b=void 0;try{r.filter=c,r.drawImage(e,0,0,n,o),f&&(r.font=v,r.fillStyle=d,r.textAlign=g,r.textBaseline=m,r.fillText(f,h,p)),b=r.getImageData(0,0,n,o),this.addFrameImageData(b)}catch(e){return""+e}},addFrameImageData:function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{},t=this.frames,r=e.data;this.frames.push({data:r,width:e.width,height:e.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:t.length})},onRenderProgress:function(e){this.onRenderProgressCallback=e},isRendering:function(){return this.generatingGIF},getBase64GIF:function(t){var r=this;r.startRendering(function(e){r.destroyWorkers(),z.requestTimeout(function(){t(e)},0)})},destroyWorkers:function(){if(!this.workerError){var e=this.workers;z.each(e,function(e,t){var r=t.worker,i=t.objectUrl;r.terminate(),z.URL.revokeObjectURL(i)})}}};var B=function(){},g={getGIF:function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{},i=arguments[1];i=z.isFunction(i)?i:B;var t=P.createElement("canvas"),n=void 0,r=!!e.images.length,o=e.cameraStream,a=e.crop,s=e.filter,c=e.fontColor,d=e.fontFamily,l=e.fontWeight,u=e.keepCameraOn,f=(e.numWorkers,e.progressCallback),g=e.saveRenderingContexts,m=e.savedRenderingContexts,h=e.text,p=e.textAlign,v=e.textBaseline,b=e.videoElement,y=e.videoHeight,w=e.videoWidth,C=e.webcamVideoElement,S=Number(e.gifWidth),x=Number(e.gifHeight),k=Number(e.interval),F=(Number(e.sampleInterval),r?0:1e3*k),O=[],W=m.length?m.length:e.numFrames,E=W,A=new G(e),R=z.getFontSize(e),T=e.textXCoordinate?e.textXCoordinate:"left"===p?1:"right"===p?S:S/2,U=e.textYCoordinate?e.textYCoordinate:"top"===v?1:"center"===v?x/2:x,M=l+" "+R+" "+d,I=a?Math.floor(a.scaledWidth/2):0,j=a?w-a.scaledWidth:0,V=a?Math.floor(a.scaledHeight/2):0,L=a?y-a.scaledHeight:0;W=W!==H?W:10,k=k!==H?k:.1,t.width=S,t.height=x,n=t.getContext("2d"),function e(){m.length||0!==b.currentTime?function t(){var r=E-1;function e(){var e;g&&O.push(n.getImageData(0,0,S,x)),h&&(n.font=M,n.fillStyle=c,n.textAlign=p,n.textBaseline=v,n.fillText(h,T,U)),e=n.getImageData(0,0,S,x),A.addFrameImageData(e),f((W-(E=r))/W),0<r&&z.requestTimeout(t,F),E||A.getBase64GIF(function(e){i({error:!1,errorCode:"",errorMsg:"",image:e,cameraStream:o,videoElement:b,webcamVideoElement:C,savedRenderingContexts:O,keepCameraOn:u})})}m.length?(n.putImageData(m[W-E],0,0),e()):function t(){try{w<j&&(j=w),y<L&&(L=y),I<0&&(I=0),V<0&&(V=0),n.filter=s,n.drawImage(b,I,V,j,L,0,0,S,x),e()}catch(e){if("NS_ERROR_NOT_AVAILABLE"!==e.name)throw e;z.requestTimeout(t,100)}}()}():z.requestTimeout(e,100)}()},getCropDimensions:function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{},t=e.videoWidth,r=e.videoHeight,i=e.gifWidth,n=e.gifHeight,o={width:0,height:0,scaledWidth:0,scaledHeight:0};return r<t?(o.width=Math.round(t*(n/r))-i,o.scaledWidth=Math.round(o.width*(r/n))):(o.height=Math.round(r*(i/t))-n,o.scaledHeight=Math.round(o.height*(t/i))),o}},p={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function e(t){e.attempts=e.attempts||0;var r=t.cameraStream,i=t.completedCallback,n=t.videoElement;n&&(0<n.videoWidth&&0<n.videoHeight?(n.removeEventListener("loadeddata",p.findVideoSize),i({videoElement:n,cameraStream:r,videoWidth:n.videoWidth,videoHeight:n.videoHeight})):e.attempts<10?(e.attempts+=1,z.requestTimeout(function(){p.findVideoSize(t)},400)):i({videoElement:n,cameraStream:r,videoWidth:p.defaultVideoDimensions.width,videoHeight:p.defaultVideoDimensions.height}))},onStreamingTimeout:function(e){z.isFunction(e)&&e({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(e){var t=z.isArray(e.existingVideo)?e.existingVideo[0]:e.existingVideo,r=e.cameraStream,i=e.completedCallback,n=e.streamedCallback,o=e.videoElement;if(z.isFunction(n)&&n(),t){if(z.isString(t))o.src=t,o.innerHTML='<source src="'+t+'" type="video/'+z.getExtension(t)+'" />';else if(t instanceof Blob){try{o.src=z.URL.createObjectURL(t)}catch(e){}o.innerHTML='<source src="'+t+'" type="'+t.type+'" />'}}else if(o.mozSrcObject)o.mozSrcObject=r;else if(z.URL)try{o.srcObject=r,o.src=z.URL.createObjectURL(r)}catch(e){o.srcObject=r}o.play(),z.requestTimeout(function e(){e.count=e.count||0,!0===p.loadedData?(p.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}),p.loadedData=!1):10<(e.count+=1)?p.findVideoSize({videoElement:o,cameraStream:r,completedCallback:i}):e()},0)},startStreaming:function(e){var t=z.isFunction(e.error)?e.error:z.noop,r=z.isFunction(e.streamed)?e.streamed:z.noop,i=z.isFunction(e.completed)?e.completed:z.noop,n=e.crossOrigin,o=e.existingVideo,a=e.lastCameraStream,s=e.options,c=e.webcamVideoElement,d=z.isElement(o)?o:c||P.createElement("video");n&&(d.crossOrigin=s.crossOrigin),d.autoplay=!0,d.loop=!0,d.muted=!0,d.addEventListener("loadeddata",function(e){p.loadedData=!0,s.offset&&(d.currentTime=s.offset)}),o?p.stream({videoElement:d,existingVideo:o,completedCallback:i}):a?p.stream({videoElement:d,cameraStream:a,streamedCallback:r,completedCallback:i}):z.getUserMedia({video:!0},function(e){p.stream({videoElement:d,cameraStream:e,streamedCallback:r,completedCallback:i})},t)},startVideoStreaming:function(o){var e=1<arguments.length&&arguments[1]!==H?arguments[1]:{},t=e.timeout!==H?e.timeout:0,r=e.callback,i=e.webcamVideoElement,n=void 0;0<t&&(n=z.requestTimeout(function(){p.onStreamingTimeout(r)},1e4)),p.startStreaming({error:function(){r({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(n)},completed:function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{},t=e.cameraStream,r=e.videoElement,i=e.videoHeight,n=e.videoWidth;o({cameraStream:t,videoElement:r,videoHeight:i,videoWidth:n})},lastCameraStream:e.lastCameraStream,webcamVideoElement:i,crossOrigin:e.crossOrigin,options:e})},stopVideoStreaming:function(e){var t=e=z.isObject(e)?e:{},r=t.keepCameraOn,i=t.videoElement,n=t.webcamVideoElement,o=e.cameraStream||{},a=o.getTracks&&o.getTracks()||[],s=!!a.length,c=a[0];!r&&s&&z.isFunction(c.stop)&&c.stop(),z.isElement(i)&&!n&&(i.pause(),z.isFunction(z.URL.revokeObjectURL)&&!z.webWorkerError&&i.src&&z.URL.revokeObjectURL(i.src),z.removeElement(i))}};function v(e){e=z.isObject(e)?e:{},p.stopVideoStreaming(e)}function b(e,t){var r=e.options||{},i=r.images,n=r.video,o=Number(r.gifWidth),a=Number(r.gifHeight),s=(Number(r.numFrames),e.cameraStream),c=e.videoElement,d=e.videoWidth,l=e.videoHeight,u=g.getCropDimensions({videoWidth:d,videoHeight:l,gifHeight:a,gifWidth:o}),f=t;r.crop=u,r.videoElement=c,r.videoWidth=d,r.videoHeight=l,r.cameraStream=s,z.isElement(c)&&(c.width=o+u.width,c.height=a+u.height,r.webcamVideoElement||(z.setCSSAttr(c,{position:"fixed",opacity:"0"}),P.body.appendChild(c)),c.play(),g.getGIF(r,function(e){i&&i.length||n&&n.length||v(e),f(e)}))}function y(e,t){if(t=z.isFunction(e)?e:t,e=z.isObject(e)?e:{},z.isFunction(t)){var r=z.mergeOptions(c,e)||{},i=e.cameraStream,n=r.images,o=n?n.length:0,a=r.video,s=r.webcamVideoElement;r=z.mergeOptions(r,{gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)}),o?function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{},n=e.callback,t=e.images,o=e.options,a=e.imagesLength,r=u.validate({getUserMedia:!0,"window.URL":!0}),s=[],c=0,d=void 0,i=void 0;if(r.error)return n(r);function l(){z.each(s,function(e,t){t&&(t.text?i.addFrame(t.img,o,t.text):i.addFrame(t,o))}),function(e,t){e.getBase64GIF(function(e){t({error:!1,errorCode:"",errorMsg:"",image:e})})}(i,n)}i=new G(o),z.each(t,function(t,r){var i,e=r;r.src&&(e=e.src),z.isElement(e)?(o.crossOrigin&&(e.crossOrigin=o.crossOrigin),s[t]=e,(c+=1)===a&&l()):z.isString(e)&&(d=new Image,o.crossOrigin&&(d.crossOrigin=o.crossOrigin),i=d,r.text&&(i.text=r.text),i.onerror=function(e){if(0==--a)return n({error:"None of the requested images was capable of being retrieved"})},i.onload=function(e){r.text?s[t]={img:i,text:i.text}:s[t]=i,(c+=1)===a&&l(),z.removeElement(i)},i.src=e,z.setCSSAttr(d,{position:"fixed",opacity:"0"}),P.body.appendChild(d))})}({images:n,imagesLength:o,callback:t,options:r}):a?function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{},t=e.callback,r=e.existingVideo,i=e.options,n=u.validate({getUserMedia:!0,"window.URL":!0}),o=void 0,a=void 0;if(n.error)return t(n);if(z.isElement(r)&&r.src){if(a=r.src,o=z.getExtension(a),!z.isSupported.videoCodecs[o])return t(u.messages.videoCodecs)}else z.isArray(r)&&z.each(r,function(e,t){if(o=t instanceof Blob?t.type.substr(t.type.lastIndexOf("/")+1,t.length):t.substr(t.lastIndexOf(".")+1,t.length),z.isSupported.videoCodecs[o])return r=t,!1});p.startStreaming({completed:function(e){e.options=i||{},b(e,t)},existingVideo:r,crossOrigin:i.crossOrigin,options:i})}({existingVideo:a,callback:t,options:r}):function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{},t=e.callback,r=e.lastCameraStream,i=e.options,n=e.webcamVideoElement;if(!d())return t(u.validate());i.savedRenderingContexts.length?g.getGIF(i,function(e){t(e)}):p.startVideoStreaming(function(){var e=0<arguments.length&&arguments[0]!==H?arguments[0]:{};e.options=i||{},b(e,t)},{lastCameraStream:r,callback:t,webcamVideoElement:n,crossOrigin:i.crossOrigin})}({lastCameraStream:i,callback:t,webcamVideoElement:s,options:r})}}var w={utils:n,error:o,defaultOptions:s,createGIF:y,takeSnapShot:function(e,t){if(t=z.isFunction(e)?e:t,e=z.isObject(e)?e:{},z.isFunction(t)){var r=z.mergeOptions(c,e);y(z.mergeOptions(r,{interval:.1,numFrames:1,gifWidth:Math.floor(r.gifWidth),gifHeight:Math.floor(r.gifHeight)}),t)}},stopVideoStreaming:v,isSupported:function(){return u.isValid()},isWebCamGIFSupported:d,isExistingVideoGIFSupported:function(e){var r=!1;if(z.isArray(e)&&e.length){if(z.each(e,function(e,t){z.isSupported.videoCodecs[t]&&(r=!0)}),!r)return!1}else if(z.isString(e)&&e.length&&!z.isSupported.videoCodecs[e])return!1;return u.isValid({getUserMedia:!0})},isExistingImagesGIFSupported:function(){return u.isValid({getUserMedia:!0})},VERSION:"0.4.5"};"function"==typeof H&&H.amd?H([],function(){return w}):C.exports=w}("undefined"!=typeof window?window:{},"undefined"!=typeof document?document:{createElement:function(){}},"undefined"!=typeof window?window.navigator:{})}),k=e(function(e){var t;t=function(){return function(e,t,r){t=t||"",r=r||512;for(var i=atob(e),n=[],o=0;o<i.length;o+=r){for(var a=i.slice(o,o+r),s=new Array(a.length),c=0;c<a.length;c++)s[c]=a.charCodeAt(c);var d=new Uint8Array(s);n.push(d)}return new Blob(n,{type:t})}},e.exports?(e.exports=t(),e.exports.default=e.exports):window.b64toBlob=t()});return function(o){var e=o.constructor.utils,a=e.errorHandle,n=e.clamp,s=e.downloadImage,c=o.i18n,d=o.notice,t=o.layers,r=o.player,l=o.loading,i=o.option,u=i.theme,f=i.title,g=o.events.proxy,m=o.template.$video;!function(e){e.update({"zh-cn":{"Long press, gif length is between 1 second and 10 seconds":"长按，gif 长度为 1 ~ 10 秒","Gif time is too short":"Gif 时间太短","Start creating gif...":"开始创建 gif...","Create gif successfully":"创建 gif 成功","There is another gif in the processing":"正有另一个 gif 在创建中","Release the mouse to start":"放开鼠标即可开始"},"zh-tw":{"Long press, gif length is between 1 second and 10 seconds":"長按，gif 長度為 1 ~ 10 秒","Gif time is too short":"Gif 時間太短","Start creating gif...":"開始創建 gif...","Create gif successfully":"創建 gif 成功","There is another gif in the processing":"正有另一個 gif 在創建中","Release the mouse to start":"放開鼠標即可開始"}})}(c),t.add({name:"artplayer-plugin-gif-progress",style:{position:"absolute",top:"0",left:"0",height:"3px",width:"0%","background-color":u}});var h=t["artplayer-plugin-gif-progress"].$ref,p=!1,v=0,b=null,y=!1,w=0;function C(){h.style.width="0%",clearTimeout(b),b=null}return o.on("destroy",function(){b&&clearTimeout(b)}),{name:"artplayerPluginGif",attach:function(e){g(e,"mousedown",function(){y=!0,C(),w=r.currentTime,v=new Date,d.show(c.get("Long press, gif length is between 1 second and 10 seconds")),function t(){b=setTimeout(function(){var e=parseInt(h.style.width,10);e<=100?(h.style.width="".concat(e+1,"%"),t()):d.show(c.get("Release the mouse to start"))},100)}()}),g(document,"mouseup",function(){y&&(y=!1,function(){C();var e=new Date-v;if(p)d.show(c.get("There is another gif in the processing"));else if(e<1e3)d.show(c.get("Gif time is too short"));else{var t=Math.floor(n(e,1e3,1e4)/100),r=m.videoWidth,i=m.videoHeight;o.plugins.artplayerPluginGif.create({numFrames:t,offset:Math.floor(w),gifHeight:200,gifWidth:r/i*200},function(e){s(e,"".concat(f||"unnamed",".gif"))})}}(),w=0)})},create:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;p=!0,l.show(),o.emit("artplayerPluginGif:start"),d.show(c.get("Start creating gif..."),!1),x.createGIF(S({},e,{video:[m.src],crossOrigin:"anonymous"}),function(e){if(e.error)d.show(e.errorMsg),a(!1,e.errorMsg);else if("function"==typeof n){var t=e.image.split(",")[1],r=k(t,"image/gif"),i=URL.createObjectURL(r);d.show(c.get("Create gif successfully")),o.emit("artplayerPluginGif",i),n(i)}p=!1,l.hide(),o.emit("artplayerPluginGif:end")})}}}});
