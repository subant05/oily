var e,t;e=this,t=function(e){"use strict";function N(e,t){return(t||document).querySelector(e)}var t,n,C=[],P={},s="yield",O="__global_mixin",E="riot-",u=["ref","data-ref"],d="data-is",h="if",m="each",g="no-reorder",L="show",T="hide",v="key",j="__riot-events__",y="string",V="object",r="undefined",i="function",o="http://www.w3.org/1999/xlink",a="http://www.w3.org/2000/svg",l=/^xlink:(\w+)/,c=typeof window===r?void 0:window,M=/^on/,p=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,S={viewbox:"viewBox",preserveaspectratio:"preserveAspectRatio"},f=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,I=0|(c&&c.document||{}).documentMode;function k(e){return"svg"===e?document.createElementNS(a,e):document.createElement(e)}function $(e,t,n){var r=l.exec(t);r&&r[1]?e.setAttributeNS(o,r[1],n):e.setAttribute(t,n)}var _,x,b={},w=!1;c&&(_=k("style"),x=N("style[type=riot]"),$(_,"type","text/css"),x?(x.id&&(_.id=x.id),x.parentNode.replaceChild(_,x)):document.head.appendChild(_),n=(t=_).styleSheet);var A={styleNode:t,add:function(e,t){b[t]=e,w=!0},inject:function(){if(c&&w){w=!1;var e=Object.keys(b).map(function(e){return b[e]}).join("\n");n?n.cssText=e:t.innerHTML=e}},remove:function(e){delete b[e],w=!0}},R=function(){var u=["case","default","do","else","in","instanceof","prefix","return","typeof","void","yield"],l=u.reduce(function(e,t){return e+t.slice(-1)},""),c=/^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/,p=/[$\w]/;function f(e,t){for(;0<=--t&&/\s/.test(e[t]););return t}return function(e,t){var n=/.*/g,r=n.lastIndex=t++,i=n.exec(e)[0].match(c);if(i){var o=r+i[0].length,a=e[r=f(e,r)];if(r<0||~"[{(,;:?=|&!^~>%*/".indexOf(a))return o;if("."===a)"."===e[r-1]&&(t=o);else if("+"===a||"-"===a)(e[--r]!==a||(r=f(e,r))<0||!p.test(e[r]))&&(t=o);else if(~l.indexOf(a)){for(var s=r+1;0<=--r&&p.test(e[r]););~u.indexOf(e.slice(r+1,s))&&(t=o)}}return t}}(),H=function(e){var t,n,r="g",i=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,o=i.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,a=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),s=/(?=[[\]()*+?.^$|])/g,u=i.source+"|"+/(\/)(?![*\/])/.source,y={"(":RegExp("([()])|"+u,r),"[":RegExp("([[\\]])|"+u,r),"{":RegExp("([{}])|"+u,r)},l="{ }",c=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+u,r),l,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],p=void 0,_=[];function f(e){return e}function d(e,t){return t||(t=_),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?r:"")}function h(e){if(e===l)return c;var t=e.split(" ");if(2!==t.length||a.test(e))throw new Error('Unsupported brackets "'+e+'"');return(t=t.concat(e.replace(s,"\\").split(" ")))[4]=d(1<t[1].length?/{[\S\s]*?}/:c[4],t),t[5]=d(3<e.length?/\\({|})/g:c[5],t),t[6]=d(c[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+u,r),t[8]=e,t}function m(e){return e instanceof RegExp?t(e):_[e]}function g(e){(e||(e=l))!==_[8]&&(_=h(e),t=e===l?f:d,_[9]=t(c[9])),p=e}return m.split=function(r,i,t){t||(t=_);var e,n,o,a,s,u,l=[],c=t[6],p=[],f="";for(n=o=c.lastIndex=0;e=c.exec(r);){if(u=c.lastIndex,a=e.index,n){if(e[2]){var d=e[2],h=y[d],m=1;for(h.lastIndex=u;e=h.exec(r);)if(e[1]){if(e[1]===d)++m;else if(!--m)break}else h.lastIndex=v(e.index,h.lastIndex,e[2]);c.lastIndex=m?r.length:h.lastIndex;continue}if(!e[3]){c.lastIndex=v(a,u,e[4]);continue}}e[1]||(g(r.slice(o,a)),o=c.lastIndex,(c=t[6+(n^=1)]).lastIndex=o)}return r&&o<r.length&&g(r.slice(o)),l.qblocks=p,l;function g(e){f&&(e=f+e,f=""),i||n?l.push(e&&e.replace(t[5],"$1")):l.push(e)}function v(e,t,n){return n&&(t=R(r,e)),i&&e+2<t&&(s="⁗"+p.length+"~",p.push(r.slice(e,t)),f+=r.slice(o,e)+s,o=t),t}},m.hasExpr=function(e){return _[4].test(e)},m.loopKeys=function(e){var t=e.match(_[9]);return t?{key:t[1],pos:t[2],val:_[0]+t[3].trim()+_[1]}:{val:e.trim()}},m.array=function(e){return e?h(e):_},Object.defineProperty(m,"settings",{set:function(e){var t;t=(e=e||{}).brackets,Object.defineProperty(e,"brackets",{set:g,get:function(){return p},enumerable:!0}),n=e,g(t)},get:function(){return n}}),m.settings="undefined"!=typeof riot&&riot.settings||{},m.set=g,m.skipRegex=R,m.R_STRINGS=i,m.R_MLCOMMS=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,m.S_QBLOCKS=o,m.S_QBLOCK2=u,m}(),U=function(){var r={};function i(e,t){return e?(r[e]||(r[e]=(n=function(e){var t,n=H.split(e.replace(s,'"'),1),r=n.qblocks;if(2<n.length||n[0]){var i,o,a=[];for(i=o=0;i<n.length;++i)(t=n[i])&&(t=1&i?l(t,1,r):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(a[o++]=t);t=o<2?a[0]:"["+a.join(",")+'].join("")'}else t=l(n[1],0,r);return r.length&&(t=t.replace(u,function(e,t){return r[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),t}(e),"try{return "!==n.slice(0,11)&&(n="return "+n),new Function("E",n+";")))).call(t,function(e,t){e.riotData={tagName:t&&t.__&&t.__.tagName,_riot_id:t&&t._riot_id},i.errorHandler?i.errorHandler(e):"undefined"!=typeof console&&"function"==typeof console.error&&(console.error(e.message),console.log("<%s> %s",e.riotData.tagName||"Unknown tag",this.tmpl),console.log(this.data))}.bind({data:t,tmpl:e})):e;var n}i.hasExpr=H.hasExpr,i.loopKeys=H.loopKeys,i.clearCache=function(){r={}},i.errorHandler=null;var s=/\u2057/g,u=/\u2057(\d+)~/g,c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,p={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g};function l(o,e,t){if(o=o.replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var n,r=[],i=0;o&&(n=o.match(c))&&!n.index;){var a,s,u=/,|([[{(])|$/g;for(o=RegExp.rightContext,a=n[2]?t[n[2]].slice(1,-1).trim().replace(/\s+/g," "):n[1];s=(n=u.exec(o))[1];)l(s,u);s=o.slice(0,n.index),o=RegExp.rightContext,r[i++]=h(s,1,a)}o=i?1<i?"["+r.join(",")+'].join(" ").trim()':r[0]:h(o,e)}return o;function l(e,t){var n,r=1,i=p[e];for(i.lastIndex=t.lastIndex;n=i.exec(o);)if(n[0]===e)++r;else if(!--r)break;t.lastIndex=r?o.length:i.lastIndex}}var a='"in this?this:'+("object"!=typeof window?"global":"window")+").",f=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,d=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;function h(e,t,n){var o;return e=e.replace(f,function(e,t,n,r,i){return n&&(r=o?0:r+e.length,"this"!==n&&"global"!==n&&"window"!==n?(e=t+'("'+n+a+n,r&&(o="."===(i=i[r])||"("===i||"["===i)):r&&(o=!d.test(i.slice(r)))),e}),o&&(e="try{return "+e+"}catch(e){E(e,this)}"),n?e=(o?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""':t&&(e="function(v){"+(o?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}return i.version=H.version="v3.0.8",i}(),B=function(s){s=s||{};var u={},l=Array.prototype.slice;return Object.defineProperties(s,{on:{value:function(e,t){return"function"==typeof t&&(u[e]=u[e]||[]).push(t),s},enumerable:!1,writable:!1,configurable:!1},off:{value:function(e,t){if("*"!=e||t)if(t)for(var n,r=u[e],i=0;n=r&&r[i];++i)n==t&&r.splice(i--,1);else delete u[e];else u={};return s},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,n){return s.on(t,function e(){s.off(t,e),n.apply(s,arguments)})},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(e){var t,n,r,i=arguments,o=arguments.length-1,a=new Array(o);for(r=0;r<o;r++)a[r]=i[r+1];for(t=l.call(u[e]||[],0),r=0;n=t[r];++r)n.apply(s,a);return u["*"]&&"*"!=e&&s.trigger.apply(s,["*",e].concat(a)),s},enumerable:!1,writable:!1,configurable:!1}}),s};function z(e,t){return Object.getOwnPropertyDescriptor(e,t)}function D(e){return typeof e===r}function F(e,t){var n=z(e,t);return D(e[t])||n&&n.writable}function K(e){for(var t,n=1,r=arguments,i=r.length;n<i;n++)if(t=r[n])for(var o in t)F(e,o)&&(e[o]=t[o]);return e}function q(e){return Object.create(e)}var Z=K(q(H.settings),{skipAnonymousTags:!0,keepValueAttributes:!1,autoUpdate:!0});function G(e,t){return[].slice.call((t||document).querySelectorAll(e))}function Q(){return document.createTextNode("")}function W(e,t){e.style.display=t?"":"none",e.hidden=!t}function J(e,t){return e.getAttribute(t)}function X(e,t){e.removeAttribute(t)}function Y(e,t,n){if(n){var r=e.ownerDocument.importNode((new DOMParser).parseFromString('<svg xmlns="'+a+'">'+t+"</svg>","application/xml").documentElement,!0);e.appendChild(r)}else e.innerHTML=t}function ee(e,t){if(e)for(var n;n=p.exec(e);)t(n[1].toLowerCase(),n[2]||n[3]||n[4])}function te(){return document.createDocumentFragment()}function ne(e,t,n){e.insertBefore(t,n.parentNode&&n)}function re(n){return Object.keys(n).reduce(function(e,t){return e+" "+t+": "+n[t]+";"},"")}function ie(e,t,n){if(e){var r,i=t(e,n);if(!1===i)return;for(e=e.firstChild;e;)r=e.nextSibling,ie(e,t,i),e=r}}var oe=Object.freeze({$$:G,$:N,createDOMPlaceholder:Q,mkEl:k,setAttr:$,toggleVisibility:W,getAttr:J,remAttr:X,setInnerHTML:Y,walkAttrs:ee,createFrag:te,safeInsert:ne,styleObjectToString:re,walkNodes:ie});function ae(e){return D(e)||null===e}function se(e){return ae(e)||""===e}function ue(e){return typeof e===i}function le(e){return e&&typeof e===V}function ce(e){var t=e.ownerSVGElement;return!!t||null===t}function pe(e){return Array.isArray(e)||e instanceof Array}function fe(e){return f.test(e)}function de(e){return typeof e===y}var he=Object.freeze({isBlank:se,isFunction:ue,isObject:le,isSvg:ce,isWritable:F,isArray:pe,isBoolAttr:fe,isNil:ae,isString:de,isUndefined:D});function me(e,t){return-1!==e.indexOf(t)}function ge(e,t){for(var n=e?e.length:0,r=0;r<n;r++)t(e[r],r);return e}function ve(e,t){return e.slice(0,t.length)===t}var ye,_e=(ye=-1,function(){return++ye});function xe(e,t,n,r){return Object.defineProperty(e,t,K({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function be(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function we(e){console&&console.warn&&console.warn(e)}var Ae=Object.freeze({contains:me,each:ge,getPropDescriptor:z,startsWith:ve,uid:_e,defineProperty:xe,objectCreate:q,extend:K,toCamel:be,warn:we});function Ne(e,t,n,r,i){var o=e[t],a=pe(o),s=!D(i);if(!o||o!==n)if(!o&&r)e[t]=[n];else if(o)if(a){var u=o.indexOf(n);if(u===i)return;-1!==u&&o.splice(u,1),s?o.splice(i,0,n):o.push(n)}else e[t]=[o,n];else e[t]=n}function Ce(e){return e.tagName&&P[J(e,d)||J(e,d)||e.tagName.toLowerCase()]}function Oe(e,t){var n=Ce(e),r=!t&&J(e,d);return r&&!U.hasExpr(r)?r:n?n.name:e.tagName.toLowerCase()}function ke(){return this.parent?K(q(this),this.parent):this}var Ee=/<yield\b/i,Le=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,Te=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,je=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,Me={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},Se=I&&I<10?/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,Ie="div",Re="svg";var Pe=/^on/;function Ve(e){for(var t=e;t.__.isAnonymous&&t.parent;)t=t.parent;return t}function $e(e,t,n,r){var i=mt(e,t,n),o=t.tagName||Oe(t.root,!0),a=Ve(r);return xe(i,"parent",a),i.__.parent=r,Ne(a.tags,o,i),a!==r&&Ne(r.tags,o,i),i}function He(e,t,n,r){if(pe(e[t])){var i=e[t].indexOf(n);-1!==i&&e[t].splice(i,1),e[t].length?1!==e[t].length||r||(e[t]=e[t][0]):delete e[t]}else e[t]===n&&delete e[t]}function Ue(e,t){var n,r,i=Q(),o=Q(),a=te();for(this.root.insertBefore(i,this.root.firstChild),this.root.appendChild(o),this.__.head=r=i,this.__.tail=o;r;)n=r.nextSibling,a.appendChild(r),this.__.virts.push(r),r=n;t?e.insertBefore(a,t.__.head):e.appendChild(a)}function Be(e,t){if(t.parentNode){var n=te();Ue.call(e,n),t.parentNode.replaceChild(n,t)}}function ze(e){if(!this.root||!J(this.root,"virtualized")){var t,n,r=e.dom,i=(t=e.attr)?(t=t.replace(E,""),S[t]&&(t=S[t]),t):null,o=me([L,T],i),a=e.root&&"VIRTUAL"===e.root.tagName,s=this.__.isAnonymous,u=r&&(e.parent||r.parentNode),l=Z.keepValueAttributes,c="style"===i,p="class"===i,f="value"===i;if(e._riot_id)e.__.wasCreated?e.update():(e.mount(),a&&Be(e,e.root));else{if(e.update)return e.update();var d,h,m,g,v,y,_=o&&!s?ke.call(this):this,x=!se(n=U(e.expr,_)),b=le(n);if(b&&(p?n=U(JSON.stringify(n),this):c&&(n=re(n))),!e.attr||e.wasParsedOnce&&!1!==n&&(x||f&&(!f||l))||X(r,J(r,e.attr)?e.attr:i),e.bool&&(n=!!n&&i),e.isRtag)return this,h=n,v=((g=(d=e).tag||d.dom._tag)?g.__:{}).head,y="VIRTUAL"===d.dom.tagName,void(g&&d.tagName===h?g.update():(g&&(y&&(m=Q(),v.parentNode.insertBefore(m,v)),g.unmount(!0)),de(h)&&(d.impl=P[h],d.impl&&(d.tag=g=$e(d.impl,{root:d.dom,parent:this,tagName:h},d.dom.innerHTML,this),ge(d.attrs,function(e){return $(g.root,e.name,e.value)}),d.tagName=h,g.mount(),y&&Be(g,m||g.root),this.__.onUnmount=function(){var e=g.opts.dataIs;He(g.parent.tags,e,g),He(g.__.parent.tags,e,g),g.unmount()}))));if((!e.wasParsedOnce||e.value!==n)&&(e.value=n,e.wasParsedOnce=!0,!b||p||c||o)){if(x||(n=""),!i)return n+="",void(u&&("TEXTAREA"===(e.parent=u).tagName?(u.value=n,I||(r.nodeValue=n)):r.nodeValue=n));switch(!0){case ue(n):w=i,Pe.test(w)&&(A=i,k=function(e,t,n){var r=this.__.parent,i=this.__.item;if(!i)for(;r&&!i;)i=r.__.item,r=r.__.parent;if(F(n,"currentTarget")&&(n.currentTarget=e),F(n,"target")&&(n.target=n.srcElement),F(n,"which")&&(n.which=n.charCode||n.keyCode),n.item=i,t.call(this,n),Z.autoUpdate&&!n.preventUpdate){var o=Ve(this);o.isMounted&&o.update()}}.bind(C=this,N=r,n),N[A]=null,O=A.replace(M,""),me(C.__.listeners,N)||C.__.listeners.push(N),N[j]||(N[j]={}),N[j][A]&&N.removeEventListener(O,N[j][A]),N[j][A]=k,N.addEventListener(O,k,!1));break;case o:W(r,i===T?!n:n);break;default:e.bool&&(r[i]=n),f&&r.value!==n?r.value=n:x&&!1!==n&&$(r,i,n),c&&r.hidden&&W(r,!1)}var w}}}var A,N,C,O,k}function De(e){ge(e,ze.bind(this))}function Fe(e,t,n,r,i){if(!e||!n){var o=e?ke.call(this):t||this;ge(i,function(e){e.expr&&ze.call(o,e.expr),r[be(e.name).replace(E,"")]=e.expr?e.expr.value:e.value})}}function Ke(e){if(e)return e.filter(function(e){return!/[^-\w]/.test(e)}).reduce(function(e,t){var n=t.trim().toLowerCase();return e+",["+d+'="'+n+'"]'},"");var t=Object.keys(P);return t+Ke(t)}function qe(e,t){var n=this,r=n.name,i=n.tmpl,o=n.css,a=n.attrs,s=n.onCreate;return P[r]||(Ze(r,i,o,a,s),P[r].class=this.constructor),gt(e,r,t,this),o&&A.inject(),this}function Ze(e,t,n,r,i){return ue(r)&&(i=r,/^[\w-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(ue(n)?i=n:A.add(n,e)),e=e.toLowerCase(),P[e]={name:e,tmpl:t,attrs:r,fn:i},e}function Ge(e,t,n,r,i){return n&&A.add(n,e),P[e]={name:e,tmpl:t,attrs:r,fn:i},e}function Qe(e,i,o){var t,n,a=[];if(A.inject(),(le(i)||ue(i))&&(o=i,i=0),t=de(e)?(e="*"===e?n=Ke():e+Ke(e.split(/, */)))?G(e):[]:e,"*"===i){if(i=n||Ke(),t.tagName)t=G(i,t);else{var r=[];ge(t,function(e){return r.push(G(i,e))}),t=r}i=0}return function e(t){if(t.tagName){var n,r=J(t,d);i&&r!==i&&$(t,d,r=i),(n=gt(t,r||t.tagName.toLowerCase(),ue(o)?o():o))&&a.push(n)}else t.length&&ge(t,e)}(t),a}var We={},Je=We[O]={},Xe=0;function Ye(e,t,n){if(le(e))Ye("__"+Xe+++"__",e,!0);else{var r=n?Je:We;if(!t){if(D(r[e]))throw new Error("Unregistered mixin: "+e);return r[e]}r[e]=ue(t)?K(t.prototype,r[e]||{})&&t:K(r[e]||{},t)}}function et(){return ge(C,function(e){return e.update()})}function tt(e){return A.remove(e),delete P[e]}var nt=Object.freeze({Tag:qe,tag:Ze,tag2:Ge,mount:Qe,mixin:Ye,update:et,unregister:tt,version:"v3.13.2"});function rt(e,t){var n,r=this.parent;r&&(pe(n=r.tags[e])?n.splice(t,0,n.splice(n.indexOf(this),1)[0]):Ne(r.tags,e,this))}function it(e,t){for(var n,r=this.__.head,i=te();r;)if(n=r.nextSibling,i.appendChild(r),(r=n)===this.__.tail){i.appendChild(r),e.insertBefore(i,t.__.head);break}}function ot(e,t,n){var r={};return r[e.key]=t,e.pos&&(r[e.pos]=n),r}function at(e,t){e.splice(t,1),this.unmount(),He(this.parent,this,this.__.tagName,!0)}var st={init:function(e,t,n,r){return this.dom=e,this.attr=n,this.rawValue=r,this.parent=t,this.hasExp=U.hasExpr(r),this},update:function(){var e=this.value,t=this.parent&&Ve(this.parent),n=this.dom.__ref||this.tag||this.dom;this.value=this.hasExp?U(this.rawValue,this.parent):this.rawValue,!se(e)&&t&&He(t.refs,e,n),!se(this.value)&&de(this.value)?(t&&Ne(t.refs,this.value,n,null,this.parent.__.index),this.value!==e&&$(this.dom,this.attr,this.value)):X(this.dom,this.attr),this.dom.__ref||(this.dom.__ref=n)},unmount:function(){var e=this.tag||this.dom,t=this.parent&&Ve(this.parent);!se(this.value)&&t&&He(t.refs,this.value,e)}};function ut(e,t,n,r){return q(st).init(e,t,n,r)}function lt(e){ge(e,function(e){e.unmount?e.unmount(!0):e.tagName?e.tag.unmount(!0):e.unmount&&e.unmount()})}var ct={init:function(e,t,n){X(e,h),K(this,{tag:t,expr:n,stub:Q(),pristine:e});var r=e.parentNode;return r.insertBefore(this.stub,e),r.removeChild(e),this},update:function(){this.value=U(this.expr,this.tag),this.stub.parentNode&&(this.value&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=ft.apply(this.tag,[this.current,!0])):!this.value&&this.current&&(this.unmount(),this.current=null,this.expressions=[]),this.value&&De.call(this.tag,this.expressions))},unmount:function(){this.current&&(this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current)),lt(this.expressions||[])}};function pt(e,t,n){return q(ct).init(e,t,n)}function ft(l,c){var p=this,f=[];return ie(l,function(e){var t,n,b,w,A,N,C,O,k,E,r,i,L,T,j,M,S,I,R,o=e.nodeType;if((c||e!==l)&&(3===o&&"STYLE"!==e.parentNode.tagName&&U.hasExpr(e.nodeValue)&&f.push({dom:e,expr:e.nodeValue}),1===o)){var a="VIRTUAL"===e.tagName;if(t=J(e,m))return a&&$(e,"loopVirtual",!0),f.push((w=p,A=t,N=typeof J(b=e,g)!==y||X(b,g),C=J(b,v),O=!!C&&U.hasExpr(C),k=Oe(b),E=P[k],r=b.parentNode,i=Q(),L=Ce(b),T=J(b,h),j=[],M=b.innerHTML,S=!P[k],I="VIRTUAL"===b.tagName,R=[],X(b,m),X(b,v),(A=U.loopKeys(A)).isLoop=!0,T&&X(b,h),r.insertBefore(i,b),r.removeChild(b),A.update=function(){A.value=U(A.val,w);var h=A.value,m=te(),g=!pe(h)&&!de(h),v=i.parentNode,y=[],_=g&&!!h;if(v){g&&(h=h?Object.keys(h).map(function(e){return ot(A,h[e],e)}):[]);var x=0;ge(h,function(e,t){var n=t-x,r=!_&&A.key?ot(A,e,t):e;if(!T||U(T,K(q(w),r))){var i,o,a=(o=e,(i=C)?O?U(i,r):o[i]:o),s=!g&&N&&typeof e===V||C,u=R.indexOf(a),l=-1===u,c=!l&&s?u:n,p=j[c],f=n>=R.length,d=s&&l||!s&&!p||!j[n];d?((p=mt(E,{parent:w,isLoop:!0,isAnonymous:S,tagName:k,root:b.cloneNode(S),item:r,index:n},M)).mount(),f?function(e,t){t?Ue.call(this,e):e.appendChild(this.root)}.apply(p,[m||v,I]):function(e,t,n){n?Ue.apply(this,[e,t]):ne(e,this.root,t.root)}.apply(p,[v,j[n],I]),f||R.splice(n,0,r),j.splice(n,0,p),L&&Ne(w.tags,k,p,!0)):c!==n&&s&&((C||me(h,R[c]))&&(function(e,t,n){n?it.apply(this,[e,t]):ne(e,this.root,t.root)}.apply(p,[v,j[n],I]),j.splice(n,0,j.splice(c,1)[0]),R.splice(n,0,R.splice(c,1)[0])),A.pos&&(p[A.pos]=n),!L&&p.tags&&function(t){var n=this;ge(Object.keys(this.tags),function(e){rt.apply(n.tags[e],[e,t])})}.call(p,n)),K(p.__,{item:r,index:n,parent:w}),y[n]=a,d||p.update(r)}else x++}),function(e,t,n){for(var r=t.length,i=e.length-n;i<r;)at.apply(t[--r],[t,r])}(h,j,x),R=y.slice(),v.insertBefore(m,i)}},A.unmount=function(){ge(j,function(e){e.unmount()})},A)),!1;if(t=J(e,h))return f.push(pt(e,p,t)),!1;if((t=J(e,d))&&U.hasExpr(t))return f.push({isRtag:!0,expr:t,dom:e,attrs:[].slice.call(e.attributes)}),!1;if(n=Ce(e),a&&(J(e,"virtualized")&&e.parentElement.removeChild(e),n||J(e,"virtualized")||J(e,"loopVirtual")||(n={tmpl:e.outerHTML})),n&&(e!==l||c)){var s=J(e,d);if(!a||s)return s&&a&&we("Virtual tags shouldn't be used together with the \""+d+'" attribute - https://github.com/riot/riot/issues/2511'),f.push($e(n,{root:e,parent:p},e.innerHTML,p)),!1;$(e,"virtualized",!0);var u=mt({tmpl:e.outerHTML},{root:e,parent:p},e.innerHTML);f.push(u)}dt.apply(p,[e,e.attributes,function(e,t){t&&f.push(t)}])}}),f}function dt(i,e,o){var a=this;ge(e,function(e){if(!e)return!1;var t,n=e.name,r=fe(n);me(u,n)&&i.tagName.toLowerCase()!==s?t=ut(i,a,n,e.value):U.hasExpr(e.value)&&(t={dom:i,expr:e.value,attr:n,bool:r}),o(e,t)})}function ht(e){var t=this.__,n=t.isAnonymous,r=t.skipAnonymous;xe(this,"isMounted",e),n&&r||(e?this.trigger("mount"):(this.trigger("unmount"),this.off("*"),this.__.wasCreated=!1))}function mt(e,t,n){void 0===e&&(e={}),void 0===t&&(t={});var r,i,o,a,s,u,l,c=t.context||{},p=t.opts||{},f=t.parent,d=t.isLoop,h=!!t.isAnonymous,m=Z.skipAnonymousTags&&h,g=t.item,v=t.index,y=e.tmpl,_=[],x=t.root,b=t.tagName||Oe(x),w="virtual"===b,A=!w&&!y;return r=A||d&&h?x:(w||(x.innerHTML=""),i=y,o=n,a=ce(x),s=i&&i.match(/^\s*<([-\w]+)/),u=s&&s[1].toLowerCase(),l=k(a?Re:Ie),i=function(e,n){if(!Ee.test(e))return e;var r={};return n=n&&n.replace(Te,function(e,t,n){return r[t]=r[t]||n,""}).trim(),e.replace(je,function(e,t,n){return r[t]||n||""}).replace(Le,function(e,t){return n||t||""})}(i,o),Se.test(u)?l=function(e,t,n){var r="o"===n[0],i=r?"select>":"table>";if(e.innerHTML="<"+i+t.trim()+"</"+i,i=e.firstChild,r)i.selectedIndex=-1;else{var o=Me[n];o&&1===i.childElementCount&&(i=N(o,i))}return i}(l,i,u):Y(l,i,a),l),m||B(c),e.name&&x._tag&&x._tag.unmount(!0),xe(c,"__",{impl:e,root:x,skipAnonymous:m,implAttrs:[],isAnonymous:h,instAttrs:[],innerHTML:n,tagName:b,index:v,isLoop:d,isInline:A,item:g,parent:f,listeners:[],virts:[],wasCreated:!1,tail:null,head:null}),[["isMounted",!1],["_riot_id",_e()],["root",x],["opts",p,{writable:!0,enumerable:!0}],["parent",f||null],["tags",{}],["refs",{}],["update",function(e){return n=e,r=_,i=(t=c).__,o={},a=t.isMounted&&!i.skipAnonymous,i.isAnonymous&&i.parent&&K(t,i.parent),K(t,n),Fe.apply(t,[i.isLoop,i.parent,i.isAnonymous,o,i.instAttrs]),a&&t.isMounted&&ue(t.shouldUpdate)&&!t.shouldUpdate(n,o)||(K(t.opts,o),a&&t.trigger("update",n),De.call(t,r),a&&t.trigger("updated")),t;var t,n,r,i,o,a}],["mixin",function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return function(a){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];return ge(e,function(e){var r,t,n=[],i=["init","__proto__"];e=de(e)?Ye(e):e,r=ue(e)?new e:e;for(var o=Object.getPrototypeOf(r);n=n.concat(Object.getOwnPropertyNames(t||r)),t=Object.getPrototypeOf(t||r););ge(n,function(e){if(!me(i,e)){var t=z(r,e)||z(o,e),n=t&&(t.get||t.set);!a.hasOwnProperty(e)&&n?Object.defineProperty(a,e,t):a[e]=ue(r[e])?r[e].bind(a):r[e]}}),r.init&&r.init.bind(a)(a.opts)}),a}.apply(void 0,[c].concat(e))}],["mount",function(){return function(n,e,r,t){var i=n.__,o=i.root;o._tag=n,dt.apply(i.parent,[o,o.attributes,function(e,t){!i.isAnonymous&&st.isPrototypeOf(t)&&(t.tag=n),e.expr=t,i.instAttrs.push(e)}]),ee(i.impl.attrs,function(e,t){i.implAttrs.push({name:e,value:t})}),dt.apply(n,[o,i.implAttrs,function(e,t){t?r.push(t):$(o,e.name,e.value)}]),Fe.apply(n,[i.isLoop,i.parent,i.isAnonymous,t,i.instAttrs]);var a=Ye(O);if(a&&!i.skipAnonymous)for(var s in a)a.hasOwnProperty(s)&&n.mixin(a[s]);if(i.impl.fn&&i.impl.fn.call(n,t),i.skipAnonymous||n.trigger("before-mount"),ge(ft.apply(n,[e,i.isAnonymous]),function(e){return r.push(e)}),n.update(i.item),!i.isAnonymous&&!i.isInline)for(;e.firstChild;)o.appendChild(e.firstChild);if(xe(n,"root",o),!i.skipAnonymous&&n.parent){var u=Ve(n.parent);u.one(u.isMounted?"updated":"mount",function(){ht.call(n,!0)})}else ht.call(n,!0);return n.__.wasCreated=!0,n}(c,r,_,p)}],["unmount",function(e){return function(t,e,n){var r=t.__,i=r.root,o=C.indexOf(t),a=i.parentNode;if(r.skipAnonymous||t.trigger("before-unmount"),ee(r.impl.attrs,function(e){ve(e,E)&&(e=e.slice(E.length)),X(i,e)}),t.__.listeners.forEach(function(t){Object.keys(t[j]).forEach(function(e){t.removeEventListener(e,t[j][e])})}),-1!==o&&C.splice(o,1),r.parent&&!r.isAnonymous){var s=Ve(r.parent);r.isVirtual?Object.keys(t.tags).forEach(function(e){return He(s.tags,e,t.tags[e])}):He(s.tags,r.tagName,t)}return t.__.virts&&ge(t.__.virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),lt(n),ge(r.instAttrs,function(e){return e.expr&&e.expr.unmount&&e.expr.unmount()}),e?Y(i,""):a&&a.removeChild(i),r.onUnmount&&r.onUnmount(),t.isMounted||ht.call(t,!0),ht.call(t,!1),delete i._tag,t}(c,e,_)}]].reduce(function(e,t){var n=t[0],r=t[1],i=t[2];return xe(c,n,r,i),e},K(c,g))}function gt(e,t,n,r){var i,o=P[t],a=P[t].class,s=r||(a?q(a.prototype):{}),u=e._innerHTML=e._innerHTML||e.innerHTML,l=K({root:e,opts:n,context:s},{parent:n?n.parent:null});return o&&e&&(i=mt(o,l,u)),i&&i.mount&&(i.mount(!0),me(C,i)||C.push(i)),i}var vt=Object.freeze({arrayishAdd:Ne,getTagName:Oe,inheritParentProps:ke,mountTo:gt,selectTags:Ke,arrayishRemove:He,getTag:Ce,initChildTag:$e,moveChildTag:rt,makeReplaceVirtual:Be,getImmediateCustomParentTag:Ve,makeVirtual:Ue,moveVirtual:it,unmountAll:lt,createIfDirective:pt,createRefDirective:ut}),yt=Z,_t={tmpl:U,brackets:H,styleManager:A,vdom:C,styleNode:A.styleNode,dom:oe,check:he,misc:Ae,tags:vt},xt=qe,bt=Ze,wt=Ge,At=Qe,Nt=Ye,Ct=et,Ot=tt,kt=B,Et=K({},nt,{observable:B,settings:yt,util:_t});e.settings=yt,e.util=_t,e.Tag=xt,e.tag=bt,e.tag2=wt,e.mount=At,e.mixin=Nt,e.update=Ct,e.unregister=Ot,e.version="v3.13.2",e.observable=kt,e.default=Et,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.riot={});
riot.tag2("card",'<div class="card"> <img riot-src="{src}" alt="{title} photo"> <div class="container"> <h5><b>{title}</b></h5> <p>{description}</p> </div> <yield></yield> </div>',"","",function(i){this.src=i.src,this.title=i.title,this.description=i.description});
riot.tag2("rating",'<div class="rating-container"> <div> <ul class="stars {enabled:enabled}"> <li each="{className, i in rate}" class="icon-star-{className}"></li> </ul> </div> <div class="review-count">{count}</div> </div>','rating ul,[data-is="rating"] ul{ list-style:none; } rating li,[data-is="rating"] li{ display:inline; } rating .enabled,[data-is="rating"] .enabled{ cursor:pointer; }',"",function(i){this.enabled=this.opts.enabled,this.updateRanking=function(i){this.enabled},this.on("mount",function(i){for(var t=this.opts.ranking.split("."),a=0,n=[];a<t[0]?n.push("full"):t[1]?(n.push("half"),t.pop()):n.push("empty"),++a<5;);this.rate=n,this.count=this.opts.count,this.update()}.bind(this))});