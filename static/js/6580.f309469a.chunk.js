"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[6580],{69998:function(e,t){t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},80788:function(e,t,n){n.d(t,{uI:function(){return fe}});var r=n(72791),o=n(52007),i=n.n(o);function a(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(u){c=[6,u],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}Object.create;function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function l(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function f(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=s.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var p=[".DS_Store","Thumbs.db"];function d(e){return"object"===typeof e&&null!==e}function m(e){return h(e.target.files).map((function(e){return f(e)}))}function v(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return f(e)}))]}}))}))}function y(e,t){return a(this,void 0,void 0,(function(){var n;return c(this,(function(r){switch(r.label){case 0:return e.items?(n=h(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(b))]):[3,2];case 1:return[2,g(w(r.sent()))];case 2:return[2,g(h(e.files).map((function(e){return f(e)})))]}}))}))}function g(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function h(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function b(e){if("function"!==typeof e.webkitGetAsEntry)return D(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?E(t):D(e)}function w(e){return e.reduce((function(e,t){return l(l([],u(e),!1),u(Array.isArray(t)?w(t):[t]),!1)}),[])}function D(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=f(t);return Promise.resolve(n)}function x(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,e.isDirectory?E(e):O(e)]}))}))}function E(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return a(i,void 0,void 0,(function(){var i,a,u;return c(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),n(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(x)),r.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function O(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=f(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var j=n(69998);function A(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z="file-invalid-type",I="file-too-large",L="file-too-small",M="too-many-files",T=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:z,message:"File type must be ".concat(t)}},_=function(e){return{code:I,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},B=function(e){return{code:L,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},K={code:M,message:"Too many files"};function Z(e,t){var n="application/x-moz-file"===e.type||(0,j.Z)(e,t);return[n,n?null:T(t)]}function U(e,t,n){if(W(e.size))if(W(t)&&W(n)){if(e.size>n)return[!1,_(n)];if(e.size<t)return[!1,B(t)]}else{if(W(t)&&e.size<t)return[!1,B(t)];if(W(n)&&e.size>n)return[!1,_(n)]}return[!0,null]}function W(e){return void 0!==e&&null!==e}function $(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function H(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function G(e){e.preventDefault()}function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!$(e)&&t&&t.apply(void 0,[e].concat(r)),$(e)}))}}function N(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function V(e){return/^.*\.[\w]+$/.test(e)}var Y=["children"],J=["open"],Q=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],X=["refKey","onChange","onClick"];function ee(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ne(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||ne(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){if(e){if("string"===typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ue=(0,r.forwardRef)((function(e,t){var n=e.children,o=fe(ce(e,Y)),i=o.open,a=ce(o,J);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(ie(ie({},a),{},{open:i})))}));ue.displayName="Dropzone";var le={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(t){return d(e)&&d(e.dataTransfer)?[2,y(e.dataTransfer,e.type)]:function(e){return d(e)&&d(e.target)}(e)?[2,m(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,v(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ue.defaultProps=le,ue.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var se={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ie(ie({},le),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,m=t.onDropAccepted,v=t.onDropRejected,y=t.onFileDialogCancel,g=t.onFileDialogOpen,h=t.useFsAccessApi,b=t.autoFocus,w=t.preventDropOnDocument,D=t.noClick,x=t.noKeyboard,E=t.noDrag,O=t.noDragEventsBubbling,j=t.onError,k=t.validator,C=(0,r.useMemo)((function(){return function(e){if(W(e))return Object.entries(e).reduce((function(e,t){var n=S(t,2),r=n[0],o=n[1];return[].concat(A(e),[r],A(o))}),[]).filter((function(e){return N(e)||V(e)})).join(",")}(n)}),[n]),R=(0,r.useMemo)((function(){return function(e){return W(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=S(e,2),n=t[0],r=t[1],o=!0;return N(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(V)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var n=S(t,2),r=n[0],o=n[1];return P(P({},e),{},F({},r,o))}),{})}]:e}(n)}),[n]),z=(0,r.useMemo)((function(){return"function"===typeof g?g:de}),[g]),I=(0,r.useMemo)((function(){return"function"===typeof y?y:de}),[y]),L=(0,r.useRef)(null),M=(0,r.useRef)(null),T=te((0,r.useReducer)(pe,se),2),_=T[0],B=T[1],Y=_.isFocused,J=_.isFileDialogActive,ne=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&h&&"showOpenFilePicker"in window),re=function(){!ne.current&&J&&setTimeout((function(){M.current&&(M.current.files.length||(B({type:"closeDialog"}),I()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",re,!1),function(){window.removeEventListener("focus",re,!1)}}),[M,J,I,ne]);var oe=(0,r.useRef)([]),ue=function(e){L.current&&L.current.contains(e.target)||(e.preventDefault(),oe.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",G,!1),document.addEventListener("drop",ue,!1)),function(){w&&(document.removeEventListener("dragover",G),document.removeEventListener("drop",ue))}}),[L,w]),(0,r.useEffect)((function(){return!o&&b&&L.current&&L.current.focus(),function(){}}),[L,b,o]);var fe=(0,r.useCallback)((function(e){j?j(e):console.error(e)}),[j]),me=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),oe.current=[].concat(ee(oe.current),[e.target]),H(e)&&Promise.resolve(i(e)).then((function(t){if(!$(e)||O){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=S(Z(e,n),1)[0],i=S(U(e,r,o),1)[0],a=c?c(e):null;return t&&i&&!a}))}({files:t,accept:C,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:k});B({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return fe(e)}))}),[i,s,fe,O,C,c,a,u,l,k]),ve=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var t=H(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&p&&p(e),!1}),[p,O]),ye=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var t=oe.current.filter((function(e){return L.current&&L.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),oe.current=t,t.length>0||(B({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),H(e)&&f&&f(e))}),[L,f,O]),ge=(0,r.useCallback)((function(e,t){var n=[],r=[];e.forEach((function(e){var t=te(Z(e,C),2),o=t[0],i=t[1],u=te(U(e,c,a),2),l=u[0],s=u[1],f=k?k(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach((function(e){r.push({file:e,errors:[K]})})),n.splice(0)),B({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&v&&v(r,t),n.length>0&&m&&m(n,t)}),[B,u,C,c,a,l,d,m,v,k]),he=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),oe.current=[],H(e)&&Promise.resolve(i(e)).then((function(t){$(e)&&!O||ge(t,e)})).catch((function(e){return fe(e)})),B({type:"reset"})}),[i,ge,fe,O]),be=(0,r.useCallback)((function(){if(ne.current){B({type:"openDialog"}),z();var e={multiple:u,types:R};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ge(e,null),B({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(I(e),B({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?fe(e):(ne.current=!1,M.current?(M.current.value=null,M.current.click()):fe(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else M.current&&(B({type:"openDialog"}),z(),M.current.value=null,M.current.click())}),[B,z,I,h,ge,fe,R,u]),we=(0,r.useCallback)((function(e){L.current&&L.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),be()))}),[L,be]),De=(0,r.useCallback)((function(){B({type:"focus"})}),[]),xe=(0,r.useCallback)((function(){B({type:"blur"})}),[]),Ee=(0,r.useCallback)((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?be():setTimeout(be,0))}),[D,be]),Oe=function(e){return o?null:e},je=function(e){return x?null:Oe(e)},Ae=function(e){return E?null:Oe(e)},ke=function(e){O&&e.stopPropagation()},Pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=ce(e,Q);return ie(ie(ae({onKeyDown:je(q(i,we)),onFocus:je(q(a,De)),onBlur:je(q(c,xe)),onClick:Oe(q(u,Ee)),onDragEnter:Ae(q(l,me)),onDragOver:Ae(q(s,ve)),onDragLeave:Ae(q(f,ye)),onDrop:Ae(q(p,he)),role:"string"===typeof r&&""!==r?r:"presentation"},n,L),o||x?{}:{tabIndex:0}),d)}}),[L,we,De,xe,Ee,me,ve,ye,he,x,E,o]),Fe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Se=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,o=e.onClick,i=ce(e,X);return ie(ie({},ae({accept:C,multiple:u,type:"file",style:{display:"none"},onChange:Oe(q(r,he)),onClick:Oe(q(o,Fe)),tabIndex:-1},n,M)),i)}}),[M,n,u,he,o]);return ie(ie({},_),{},{isFocused:Y&&!o,getRootProps:Pe,getInputProps:Se,rootRef:L,inputRef:M,open:Oe(be)})}function pe(e,t){switch(t.type){case"focus":return ie(ie({},e),{},{isFocused:!0});case"blur":return ie(ie({},e),{},{isFocused:!1});case"openDialog":return ie(ie({},se),{},{isFileDialogActive:!0});case"closeDialog":return ie(ie({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return ie(ie({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return ie(ie({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return ie({},se);default:return e}}function de(){}},83791:function(e,t,n){n.d(t,{M:function(){return E}});var r=n(93433),o=n(72791),i=n(29439),a=n(92199);function c(){var e=(0,o.useRef)(!1);return(0,a.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var u=n(8771);var l=n(37762),s=n(60131),f=n(29829),p=n(15671),d=n(43144),m=n(60136),v=n(29388),y=function(e){(0,m.Z)(n,e);var t=(0,v.Z)(n);function n(){return(0,p.Z)(this,n),t.apply(this,arguments)}return(0,d.Z)(n,[{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){var n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return this.props.children}}]),n}(o.Component);function g(e){var t=e.children,n=e.isPresent,r=(0,o.useId)(),i=(0,o.useRef)(null),a=(0,o.useRef)({width:0,height:0,top:0,left:0});return(0,o.useInsertionEffect)((function(){var e=a.current,t=e.width,o=e.height,c=e.top,u=e.left;if(!n&&i.current&&t&&o){i.current.dataset.motionPopId=r;var l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(t,"px !important;\n            height: ").concat(o,"px !important;\n            top: ").concat(c,"px !important;\n            left: ").concat(u,"px !important;\n          }\n        ")),function(){document.head.removeChild(l)}}}),[n]),o.createElement(y,{isPresent:n,childRef:i,sizeRef:a},o.cloneElement(t,{ref:i}))}var h=function(e){var t=e.children,n=e.initial,r=e.isPresent,i=e.onExitComplete,a=e.custom,c=e.presenceAffectsLayout,u=e.mode,p=(0,f.h)(b),d=(0,o.useId)(),m=(0,o.useMemo)((function(){return{id:d,initial:n,isPresent:r,custom:a,onExitComplete:function(e){p.set(e,!0);var t,n=(0,l.Z)(p.values());try{for(n.s();!(t=n.n()).done;){if(!t.value)return}}catch(r){n.e(r)}finally{n.f()}i&&i()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),c?void 0:[r]);return(0,o.useMemo)((function(){p.forEach((function(e,t){return p.set(t,!1)}))}),[r]),o.useEffect((function(){!r&&!p.size&&i&&i()}),[r]),"popLayout"===u&&(t=o.createElement(g,{isPresent:r},t)),o.createElement(s.O.Provider,{value:m},t)};function b(){return new Map}var w=n(7497);var D=n(95956),x=function(e){return e.key||""};var E=function(e){var t=e.children,n=e.custom,l=e.initial,s=void 0===l||l,f=e.onExitComplete,p=e.exitBeforeEnter,d=e.presenceAffectsLayout,m=void 0===d||d,v=e.mode,y=void 0===v?"sync":v;(0,D.k)(!p,"Replace exitBeforeEnter with mode='wait'");var g,b=(0,o.useContext)(w.p).forceRender||function(){var e=c(),t=(0,o.useState)(0),n=(0,i.Z)(t,2),r=n[0],a=n[1],l=(0,o.useCallback)((function(){e.current&&a(r+1)}),[r]);return[(0,o.useCallback)((function(){return u.Wi.postRender(l)}),[l]),r]}()[0],E=c(),O=function(e){var t=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&t.push(e)})),t}(t),j=O,A=(0,o.useRef)(new Map).current,k=(0,o.useRef)(j),P=(0,o.useRef)(new Map).current,F=(0,o.useRef)(!0);if((0,a.L)((function(){F.current=!1,function(e,t){e.forEach((function(e){var n=x(e);t.set(n,e)}))}(O,P),k.current=j})),g=function(){F.current=!0,P.clear(),A.clear()},(0,o.useEffect)((function(){return function(){return g()}}),[]),F.current)return o.createElement(o.Fragment,null,j.map((function(e){return o.createElement(h,{key:x(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:m,mode:y},e)})));j=(0,r.Z)(j);for(var S=k.current.map(x),C=O.map(x),R=S.length,z=0;z<R;z++){var I=S[z];-1!==C.indexOf(I)||A.has(I)||A.set(I,void 0)}return"wait"===y&&A.size&&(j=[]),A.forEach((function(e,t){if(-1===C.indexOf(t)){var r=P.get(t);if(r){var i=S.indexOf(t),a=e;if(!a){a=o.createElement(h,{key:x(r),isPresent:!1,onExitComplete:function(){P.delete(t),A.delete(t);var e=k.current.findIndex((function(e){return e.key===t}));if(k.current.splice(e,1),!A.size){if(k.current=O,!1===E.current)return;b(),f&&f()}},custom:n,presenceAffectsLayout:m,mode:y},r),A.set(t,a)}j.splice(i,0,a)}}})),j=j.map((function(e){var t=e.key;return A.has(t)?e:o.createElement(h,{key:x(e),isPresent:!0,presenceAffectsLayout:m,mode:y},e)})),o.createElement(o.Fragment,null,A.size?j:j.map((function(e){return(0,o.cloneElement)(e)})))}}}]);
//# sourceMappingURL=6580.f309469a.chunk.js.map