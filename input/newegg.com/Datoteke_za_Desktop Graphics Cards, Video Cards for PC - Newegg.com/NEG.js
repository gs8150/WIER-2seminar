(function(a){function g(f){this.target=f}var e=function(f){var b=typeof f;return!(Math&&f!==Math)||"number"==b||"string"==b||"boolean"==b?void 0:new g(f)},b=function(){for(var f=document.getElementsByTagName("script"),b=f.length-1;0<=b;b--){var c=f[b];if(/NEG.0.2.4.js/.test(c.src))return c}}(),c={avatarCore:g.prototype,base:d,baseURL:b&&b.src.replace(/\/[^\/]+$/,"/")||(window.Web.Config.Environment.Url.HttpCache + window.Web.Config.Environment.Path.Scripts+'USA/NeweggJS/'),CDNTimestamp:b&&b.getAttribute("data-CDNTimestamp")||"",isDebug:false,init:function(){a.NEG=e.base.merge(e,d);
a.NEGfixForOldVersion&&c.blend(e,a.NEGfixForOldVersion,{cover:!1});if(!c.isDebug){delete a.NEG.base;a.NEG.VersionControl&&delete a.NEG.VersionControl;var f=Object.freeze;f&&f(a.NEG)}}},d={base:c};e.base=c;e.toString=function(){return"nesc-sh.mis.neweggec.developer.UI@newegg.com"};a.NEG=d})(this);
(function(a){var g,e;g=function(){var b=function(b){this.source=b},c=function(){for(var b={},f=String.prototype,c="valueOf,toString,charAt,charCodeAt,concat,indexOf,lastIndexOf,localeCompare,match,replace,search,slice,split,sub,sup,substring,substr,toLowerCase,toLocaleLowerCase,toUpperCase,toLocaleUpperCase,anchor,link,fontcolor,fontsize,big,blink,bold,fixed,italics,small,strike".split(","),a=0;a<c.length;a++)(function(c){b[c]=function(){return f[c].apply(this.source,arguments)}})(c[a]);b.trim="trim"in
f&&f.trim?function(){return f.trim.apply(this.source,arguments)}:function(){return this.source.replace(/(^\s+)|(\s+$)/g,"")};b.trimLeft="trimLeft"in f&&f.trim?function(){return f.trimLeft.apply(this.source,arguments)}:function(){return this.source.replace(/^\s+/,"")};b.trimRight="trimRight"in f&&f.trim?function(){return f.trimRight.apply(this.source,arguments)}:function(){return this.source.replace(/\s+$/,"")};return b}();c.constructor=b;b.prototype=c;return b}();e=function(){var b=function(b){this.source=
b},c=function(){for(var b={},f=Array.prototype,c="join,toString,pop,push,concat,reverse,shift,unshift,slice,splice,sort".split(","),a=0;a<c.length;a++)(function(c){b[c]=function(){return f[c].apply(this.source,arguments)}})(c[a]);b.indexOf="indexOf"in f&&f.indexOf?function(){return f.indexOf.apply(this.source,arguments)}:function(b){for(var f=this.source.length;f--&&!(this.source[f]===b););return f};b.addRange=function(b){if(b){var c=b.length;c&&b instanceof Array?0<c&&f.push.apply(this.source,b):
this.source.push(b);return this.source.length}};return b}();c.constructor=b;c.each=function(b){for(var f=this.source.length,c=0;c<f&&!b.apply(this.source[c],[this.source[c],c]);c++);};c.get=function(b){return"number"==typeof b?this.source[b]:null};b.prototype=c;return b}();a.cast=function(b){var c=null,a=typeof b;if("string"==a)return new g(new String(b));if("object"==a)if(b instanceof String)c=new g(b);else{if(b instanceof g.constructor)return b;if(b instanceof Array)c=new e(b);else if(b instanceof
e.constructor)return b}return c}})(NEG);
(function(a){base=a.base||{};var g={merge:function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)a[d]=c[d]}return a},blend:function(a,b,c){for(var d={cover:!0,mergePrototype:!1},c=c?g.merge(d,c):d,b=[].concat(b),d=b.length,f=0;f<d;f++){var l=b[f],h;for(h in l){var i=c.mergePrototype||l.hasOwnProperty(h),k=c.cover||"undefined"==typeof a[h];i&&k&&(a[h]=l[h])}}return a},NS:function(a,b){for(var c=a.split("."),d=b||window||{},f=0,l=c.length;f<l;f++)d[c[f]]=d[c[f]]||{},d=d[c[f]];
return d},ArrayIndexOf:Array.prototype.indexOf?function(a,b){a=[].slice.call(a,0);return a.indexOf(b)}:function(a,b){for(var c=a.length,d=!1;c--&&!d&&!(d=a[c]===b););return c},each:function(a,b){for(var a=[].concat(a),c=a.length-1;0<=c;c--)b.call(a[c],c,a[c])},isType:function(a,b){return"Null"===b&&null===a||"Undefined"===b&&void 0===a||"Number"===b&&isFinite(a)||Object.prototype.toString.call(a).slice(8,-1)===b},getGUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=
16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)}).toUpperCase()},setBaseURL:function(e){return a.base.baseURL=e||a.base.baseURL},setCDNTimestamp:function(e){var b=a.base;b.CDNTimestamp=e||b.CDNTimestamp}};g.merge(base,g)})(NEG);
(function(a){function g(b){var a=0<=(a=e.ArrayIndexOf(d,b))?a:d.push(b)-1;return a}var e=a.base||{},b={},c=[],d=[];b.addEventListener=function(b,a,h,d){d=d||{};d.Parameter=d.Parameter||[];var e=g(b),a=c[a]=c[a]||{},e=a[e]=a[e]||[];e.eventHandleAction=e.eventHandleAction||function(){};var j={target:b,eventHandle:h,Parameter:d};e.push(j);e.eventHandleAction=function(b){return function(a){b(a);h.call(j.target,j.target,a,j.Parameter)}}(e.eventHandleAction,j)};b.removeEventListener=function(b,a,d){b=g(b);
a=c[a][b];a.eventHandleAction=function(){};for(var b=0,e=a.length,k=0;k<e;k++){var j=k-b;a[j]&&a[j].eventHandle==d||!d?(a.splice(j,1),b++):a.eventHandleAction=function(b,a){return function(f){b(f);a.eventHandle.call(a.target,a.target,f,a.Parameter)}}(a.eventHandleAction,a[j])}};b.dispatchEvent=function(b,a,d){b=g(b);if((a=c[a])&&a[b])(a=a[b].eventHandleAction)&&a(d)};b.publicDispatchEvent=function(a,c){for(var h=0;h<d.length;h++){var e=d[h];e&&b.dispatchEvent(e,a,c)}};e.Event=e.Event||{};e.Event=
b})(NEG);
(function(a){var g={isType:function(b,a){return"Null"===a&&null===b||"Undefined"===a&&void 0===b||"Number"===a&&isFinite(b)||Object.prototype.toString.call(b).slice(8,-1)===a},getGUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var a=16*Math.random()|0;return("x"==b?a:a&3|8).toString(16)}).toUpperCase()},getEnum:function(){for(var a={},c=0;c<arguments.length;c++)a[arguments[c]]=arguments[c];return a},isDefined:function(a){return"undefined"!=typeof a}},e={documentWriteScript:function(b){var c=
function(c){var f=/<script[^>]*?\bsrc\s*=\s*[\'"](.*?)['"][^>]*?>.*?(<\s*?\/script\s*?>)/ig,e=[],c=c&&c.replace(f,function(a,b){b&&e.push(b);return""});0<e.length&&a.base.BOM.Event.addEventListener(window,"load",function(){a.base.BOM.loadJS(e)});b.call(document,c)};return function(a){document.write=a?c:b}}(document.write)};g.Script=e;a.utility=g})(NEG);
(function(a){var g;if(window){var e=function(){var b=a.cast(window.navigator.userAgent),c=a.cast(window.location.protocol).trimRight(":"),d;d=/Win/.test(b)?"Window":/Mac/.test(b)?"Mac":/Linux/.test(b)?"Linux":/FreeBSD/.test(b)?"FreeBSD":"Unknown";var f=function(){if(/MSIE/.test(b)){var a=b.indexOf("MSIE"),f=b.indexOf(";",a),a=parseFloat(b.substring(a+5,f));return{name:"IE",version:a}}if(/Firefox/.test(b))return a=parseFloat(b.substring(b.indexOf("Firefox")+8)),{name:"Firefox",version:a};if(/Chrome/.test(b))return a=
parseFloat(b.substring(b.indexOf("Chrome")+7)),{name:"Chrome",version:a};if(/Safari/.test(b))return a=parseFloat(b.substring(b.indexOf("Safari")+7)),{name:"Safari",version:a};return/Opera/.test(b)?(a=parseFloat(b.substring(b.indexOf("Opera")+6)),{name:"Opera",version:a}):{name:"Unknown",version:null}}(),e;e=/iPhone/.test(b)?"iPhone":/iPad/.test(b)?"iPad":/iPod/.test(b)?"iPod":"Unknown";return{protocol:c,os:d,browserInfo:f,device:e}};g={refresh:function(){a.base.blend(g,e(),{cover:!0,mergePrototype:!1})}};
a.base.blend(g,e(),{cover:!0,mergePrototype:!1})}a.utility&&(a.utility.Environment=g)})(NEG);(function(a){var g={indexOf:Array.prototype.indexOf?function(a,b){a=[].slice.call(a,0);return a.indexOf(b)}:function(a,b){for(var c=a.length,d=!1;c--&&!d&&!(d=a[c]===b););return c},each:function(a,b){for(var a=[].concat(a),c=a.length-1;0<=c;c--)b.call(a[c],c,a[c])}};a.utility&&(a.utility.Array=g)})(NEG);
(function(a){var g={38:"&amp;",60:"&lt;",62:"&gt;",160:"&nbsp;",161:"&iexcl;",162:"&cent;",163:"&pound;",164:"&curren;",165:"&yen;",166:"&brvbar;",167:"&sect;",168:"&uml;",169:"&copy;",170:"&ordf;",171:"&laquo;",172:"&not;",173:"&shy;",174:"&reg;",175:"&macr;",176:"&deg;",177:"&plusmn;",178:"&sup2;",179:"&sup3;",180:"&acute;",181:"&micro;",182:"&para;",183:"&middot;",184:"&cedil;",185:"&sup1;",186:"&ordm;",187:"&raquo;",188:"&frac14;",189:"&frac12;",190:"&frac34;",191:"&iquest;",192:"&Agrave;",193:"&Aacute;",
194:"&Acirc;",195:"&Atilde;",196:"&Auml;",197:"&Aring;",198:"&AElig;",199:"&Ccedil;",200:"&Egrave;",201:"&Eacute;",202:"&Ecirc;",203:"&Euml;",204:"&Igrave;",205:"&Iacute;",206:"&Icirc;",207:"&Iuml;",208:"&ETH;",209:"&Ntilde;",210:"&Ograve;",211:"&Oacute;",212:"&Ocirc;",213:"&Otilde;",214:"&Ouml;",215:"&times;",216:"&Oslash;",217:"&Ugrave;",218:"&Uacute;",219:"&Ucirc;",220:"&Uuml;",221:"&Yacute;",222:"&THORN;",223:"&szlig;",224:"&agrave;",225:"&aacute;",226:"&acirc;",227:"&atilde;",228:"&auml;",229:"&aring;",
230:"&aelig;",231:"&ccedil;",232:"&egrave;",233:"&eacute;",234:"&ecirc;",235:"&euml;",236:"&igrave;",237:"&iacute;",238:"&icirc;",239:"&iuml;",240:"&eth;",241:"&ntilde;",242:"&ograve;",243:"&oacute;",244:"&ocirc;",245:"&otilde;",246:"&ouml;",247:"&divide;",248:"&oslash;",249:"&ugrave;",250:"&uacute;",251:"&ucirc;",252:"&uuml;",253:"&yacute;",254:"&thorn;",255:"&yuml;",264:"&#264;",265:"&#265;",338:"&OElig;",339:"&oelig;",352:"&Scaron;",353:"&scaron;",372:"&#372;",373:"&#373;",374:"&#374;",375:"&#375;",
376:"&Yuml;",402:"&fnof;",710:"&circ;",732:"&tilde;",913:"&Alpha;",914:"&Beta;",915:"&Gamma;",916:"&Delta;",917:"&Epsilon;",918:"&Zeta;",919:"&Eta;",920:"&Theta;",921:"&Iota;",922:"&Kappa;",923:"&Lambda;",924:"&Mu;",925:"&Nu;",926:"&Xi;",927:"&Omicron;",928:"&Pi;",929:"&Rho;",931:"&Sigma;",932:"&Tau;",933:"&Upsilon;",934:"&Phi;",935:"&Chi;",936:"&Psi;",937:"&Omega;",945:"&alpha;",946:"&beta;",947:"&gamma;",948:"&delta;",949:"&epsilon;",950:"&zeta;",951:"&eta;",952:"&theta;",953:"&iota;",954:"&kappa;",
955:"&lambda;",956:"&mu;",957:"&nu;",958:"&xi;",959:"&omicron;",960:"&pi;",961:"&rho;",962:"&sigmaf;",963:"&sigma;",964:"&tau;",965:"&upsilon;",966:"&phi;",967:"&chi;",968:"&psi;",969:"&omega;",977:"&thetasym;",978:"&upsih;",982:"&piv;",8194:"&ensp;",8195:"&emsp;",8201:"&thinsp;",8204:"&zwnj;",8205:"&zwj;",8206:"&lrm;",8207:"&rlm;",8211:"&ndash;",8212:"&mdash;",8216:"&lsquo;",8217:"&rsquo;",8218:"&sbquo;",8220:"&ldquo;",8221:"&rdquo;",8222:"&bdquo;",8224:"&dagger;",8225:"&Dagger;",8226:"&bull;",8230:"&hellip;",
8240:"&permil;",8242:"&prime;",8243:"&Prime;",8249:"&lsaquo;",8250:"&rsaquo;",8254:"&oline;",8260:"&frasl;",8364:"&euro;",8472:"&weierp;",8465:"&image;",8476:"&real;",8482:"&trade;",8501:"&alefsym;",8592:"&larr;",8593:"&uarr;",8594:"&rarr;",8595:"&darr;",8596:"&harr;",8629:"&crarr;",8656:"&lArr;",8657:"&uArr;",8658:"&rArr;",8659:"&dArr;",8660:"&hArr;",8704:"&forall;",8706:"&part;",8707:"&exist;",8709:"&empty;",8711:"&nabla;",8712:"&isin;",8713:"&notin;",8715:"&ni;",8719:"&prod;",8721:"&sum;",8722:"&minus;",
8727:"&lowast;",8729:"&#8729;",8730:"&radic;",8733:"&prop;",8734:"&infin;",8736:"&ang;",8743:"&and;",8744:"&or;",8745:"&cap;",8746:"&cup;",8747:"&int;",8756:"&there4;",8764:"&sim;",8773:"&cong;",8776:"&asymp;",8800:"&ne;",8801:"&equiv;",8804:"&le;",8805:"&ge;",8834:"&sub;",8835:"&sup;",8836:"&nsub;",8838:"&sube;",8839:"&supe;",8853:"&oplus;",8855:"&otimes;",8869:"&perp;",8901:"&sdot;",8968:"&lceil;",8969:"&rceil;",8970:"&lfloor;",8971:"&rfloor;",9001:"&lang;",9002:"&rang;",9642:"&#9642;",9643:"&#9643;",
9674:"&loz;",9702:"&#9702;",9824:"&spades;",9827:"&clubs;",9829:"&hearts;",9830:"&diams;"},e={encodeHTML:function(b){if(!a.utility.isType(b,"String"))return"";var b=b.replace(RegExp(String.fromCharCode(38),"g"),g[38]),c;for(c in g)38!=c&&(b=b.replace(RegExp(String.fromCharCode(c),"g"),g[c]));return b},decodeHTML:function(b){if(!a.utility.isType(b,"String"))return"";var b=b.replace(RegExp(g[38],"g"),String.fromCharCode(38)),c;for(c in g)38!=c&&(b=b.replace(RegExp(g[c],"g"),String.fromCharCode(c)));
return b},coventEntityToCharacters:function(b){if(!a.utility.isType(b,"String"))return"";for(var c in g)38!=c&&(b=b.replace(RegExp(g[c],"g"),String.fromCharCode(c)));b=b.replace(RegExp("&#(x?)(\\d+);","g"),function(a,b,c){return String.fromCharCode("x"==b?parseInt(c,16):c)});return b=b.replace(RegExp(g[38],"g"),String.fromCharCode(38))}};a.utility&&(a.utility.Encoding=e)})(NEG);(function(a){var g={trim:function(a){return a.replace(/(^\s+)|(\s+$)/g,"")}};a.utility&&(a.utility.String=g)})(NEG);
(function(a){var g=a.utility,e=function(){var b=[],c=a.cast([]);return{getVersion:function(d){var f="";if(d){if(d=a.cast(d).trim())if(d=d.toLowerCase(),d=c.indexOf(d),-1<d)return b[d]}else for(d=0;d<b.length;d++)f+=c.get(d)+":"+b[d]+"  ";return f},setVersion:function(d){d=[].concat(d);if(0<d.length)for(var f=0;f<d.length;f++){var e=d[f];if(g.isDefined(e.version)&&g.isDefined(e.module)){var h=a.cast(e.module).trim();h&&(h=h.toLowerCase(),-1==c.indexOf(h)&&(c.push(h),b.push(a.cast(e.version).trim())))}}}}}();
a.VersionControl=e})(NEG);
(function(a){function g(a){if(a)return c.moduleLoaded[a];for(var a=0,b=c.requireQueue.length;a<b;a++)if(!c.moduleLoaded[c.requireQueue[a]])return!1;return!0}function e(){a.base.Event.publicDispatchEvent(b.COMPLETE);e=function(){a.base.Event.publicDispatchEvent(b.COMPLETE)}}var b={COMPLETE:"require_complete_"+~~new Date,LOADED:"require_loaded_"+~~new Date,REQUIRING:"require_requiring_"+~~new Date},c={requiring:{},required:{},moduleLoaded:{},requireQueue:[]};a.base.Event.addEventListener(c,b.REQUIRING,
function(a,b){var d=b.moduleName.toLowerCase();c.requireQueue[d]||c.requireQueue.push(d);c.required[d]=!0});var d=function(b,d){var h=b,b=b.toLowerCase();if(c.required[b]||c.requiring[b]||c.moduleLoaded[b])return a.base.NS(b,a.base);var i=function(){var b;if(a.VersionControl){var c=a.VersionControl;b=function(b){var f=c.getVersion(b);return a.base.baseURL+b.replace(/\./ig,"/")+(f&&"."+f)+".js"}}else b=function(b){b.match(/(^.*)(\.\w*)$/);var c=a.base.CDNTimestamp||"";return a.base.baseURL+b.replace(/\./ig,
"/")+".js"+(c&&"?"+c)};return b}(),d=d||i(h),b=b.toLowerCase();c.requireQueue[b]=!0;c.requireQueue.push(b);(function(b){!c.required[b]&&!c.requiring[b]&&!c.moduleLoaded[b]&&(c.requiring[b]=!0,a.base.BOM.loadJS(d,function(){if(!c.required[b])throw Error("module ["+b+"] is undefined! @"+d);g()&&e()}))})(b);return a.base.NS(b,a.base)};a.base.Event.addEventListener(d,b.LOADED,function(a,b){var d=b.moduleName.toLowerCase();c.required[d]=!0;c.moduleLoaded[d]=!0;g()&&e()});d.Event=b;d.isRequireComplete=
g;a.base.Require=d})(NEG);
(function(a){var g={};a.base.Module=function(e,b){function c(){var c=l.toLowerCase(),d=f.toLowerCase(),h=a.base,i=h.NS,m=h.NS(f.toLowerCase(),h)[c],n=b(h.Require,h.run);m?"function"==typeof n?i(d,h)[c]=h.merge(n,m):h.merge(m,n):i(d,h)[c]=n;g[e.toLowerCase()]=!0;h.Event.publicDispatchEvent(h.Require.Event.LOADED,{moduleName:e})}var d=a.base;d.Event.publicDispatchEvent(d.Require.Event.REQUIRING,{moduleName:e});var d=e.match(/(^.*)\.(\w*)$/),f=d[1],l=d[2],d=b.toString().replace(/(?!['"])\/\*[\w\W]*?\*\//igm,""),
d=d.replace(/(['"])[\w\W]*?\1|((['"])[\w\W]*?)\/\/[\w\W]*?\2|\/\/[\w\W]*?(\r|\n|$)/g,function(a,b){return b?a:""}),h=d.replace(/^function\s*?\(\s*?([^,\)]+)[\w\W]*$/i,function(a,b){return b}).replace(d,""),h=h&&RegExp("\\b"+h+"\\s*\\(([^\\)]+)\\)","igm"),i=[];h&&d.replace(h,function(b,c){var f=c.replace(/['"]/g,""),d=f.toLowerCase();g[d]||(i[d]=i.push(d)-1);a.base.Require(f)});i.length&&a.base.Event.addEventListener(e,a.base.Require.Event.LOADED,function(b,f){var d=f.moduleName.toLowerCase();i.hasOwnProperty(d)&&
(delete i[d],i.splice(i[d],1));0>=i.length&&(a.base.Event.removeEventListener(e,a.base.Require.Event.LOADED),c())});i.length||c()}})(NEG);
(function(a){function g(){for(;function(){var a=e.shift();a&&a();return e.length}(););}var e=[],b=a.base.Event,c=a.base.Require.Event;b.addEventListener(this,c.COMPLETE,g);var d=function(){function f(){for(var b=0;b<d.length;b++){var c=d[b];if(!d[c]&&!a.base.Require.isRequireComplete(c))return!1}return!0}var d=[],i;this.runNow&&b.addEventListener(this,c.LOADED,function(b,c){var e=c.moduleName.toLowerCase();d[e]=!0;0<=a.base.ArrayIndexOf(d,e)&&f()&&i&&i()});this.run=function(b){i=b;this.runNow?f()&&
b():(e.push(b),a.base.Require.isRequireComplete()&&g())};this.require=function(b,c){a.base.Require(b,c);b=b.toLowerCase();d.push(b);if(!c){var f=b.match(/(^.*)\.(\w*)$/)[1];a.base.NS(f,a.base)}return a.base.NS(b,a.base)}},f=function(b,a){var c=f;if(!(this instanceof c))return new c(b,a);var e=this;e.runNow=a;d.call(e);var c=b.toString().replace(/(?!['"])\/\*[\w\W]*?\*\//igm,""),c=c.replace(/(['"])[\w\W]*?\1|((['"])[\w\W]*?)\/\/[\w\W]*?\2|\/\/[\w\W]*?(\r|\n|$)/g,function(b,a){return a?b:""}),g=c.replace(/^function\s*?\(\s*?([^,\)]+)[\w\W]*$/i,
function(b,a){return a}).replace(c,"");(g=g&&RegExp("\\b"+g+"\\s*\\(([^\\)]+)\\)","igm"))&&c.replace(g,function(b,a){var c=a.replace(/['"]/g,"");e.require(c)});e.run(function(){b(e.require,e.run)})};a.base.run=f})(NEG);
(function(a){function g(b,a,c){return function(a){c.call(b,a)}}function e(b,a,c){function e(a){g.eventAction=function(a,c){return function(d){a&&a.call(b,d);c.call(b,d)}}(g.eventAction,a)}var g=d[b.GUID][a];if(c)e(c);else for(a=0;a<g.length;a++)e(g[a]);return g.eventAction}function b(c,e,h,g){var g=g||{},h=d[c.GUID][e][h],k=function(a){if(e&&a)c.removeEventListener?c.removeEventListener(e,a,!1):c.detachEvent&&c.detachEvent("on"+e,a);else if(e&&!a)for(var h=0;h<d[c.GUID][e].length;h++)b(c,e,d[c.GUID][e][h],
g);else for(h in a=d[c.GUID],a)b(c,h)};if(a.utility.isType(h,"Array"))for(var j=0;j<h.length;j++)k(h[j]);else k(h)}var c=a.base||{},d={};c.NS("NEG.base.BOM").Event={addEventListener:function(a,b,h){a.GUID=a.GUID||c.getGUID();var i=c.NS(a.GUID,d)[b]=c.NS(a.GUID,d)[b]||[],k=g(a,b,h);i.push(k);if(i[h]){var j=[];j.push(i[h]);j.push(k);i[h]=j}else i[h]=k;i.eventAction=e(a,b,k);a.addEventListener?a.addEventListener(b,k,!1):a.attachEvent&&a.attachEvent("on"+b,k)},removeEventListener:b,dispatchEvent:function(a,
b,c){c=c||{bubbles:!1,cancelable:!1};c.ieHack=a.all&&a.all.toString();if(document.createEvent){var d=document.createEvent("Event");d.initEvent(b,c.bubbles,c.cancelable);a.dispatchEvent(d)}else if(document.createEventObject)b="on"+b,d=document.createEventObject(),d.cancelBubble=c.cancelable,a.fireEvent(b,d)},isEventSupported:function(a,b){if(!c.BOM.Utility.isHTMLElement(a))return!1;var d=a.tagName,b="on"+b,a=a===window?window:document.createElement(d),d=b in a;!d&&"setAttribute"in window&&(a.setAttribute(b,
"return;"),d="function"===typeof a[b]);return d}}})(NEG);
(function(a){function g(){try{document.documentElement.doScroll("left")}catch(a){setTimeout(g,1);return}c()}var e=!1,b=[],c=function(){a.base.BOM.Event.removeEventListener(document,"readystatechange",d);a.base.BOM.Event.removeEventListener(document,"DOMContentLoaded",c);a.base.BOM.Event.removeEventListener(window,"load",c);for(var f;f=b.shift();)e||f();e=!0},d=function(){(/loaded|complete/.test(document.readyState)||!0==e)&&c()};a.base.BOM.Event.addEventListener(document,"readystatechange",d);a.base.BOM.Event.addEventListener(document,
"DOMContentLoaded",c);a.base.BOM.Event.addEventListener(window,"load",c);document.documentElement.doScroll&&g();base.NS("NEG.base.BOM").DOMReady=function(a){!0==e?a():b.push(a)}})(NEG);
(function(a,g){function e(a,b){var e=1;this.loadJS=function(){if(/\bArray\b/.test(Object.prototype.toString.call(a))){e=a.length;for(var h=e-1;0<=h;h--)c(a[h],function(){--e||b()})}else c(a,b)}}function b(){function a(){if(!b.currentJs)b.currentJs=b.shift(),b.currentJs&&b.currentJs.loadJS()}var b=[];b.currentJs=null;this.loadJS=function(c,h){b.push(new e(c,function(){b.currentJs=null;h&&h();a()}));a();return this}}function c(a,b){var c=document.getElementsByTagName("head")[0],e=document.createElement("script"),
i=!1,k,j=function(){i=!0;g.base.BOM.Event.removeEventListener(e,"load",j);g.base.BOM.Event.removeEventListener(e,"readystatechange",o);j=function(){};b&&b()},o=function(){/loaded|complete/.test(e.readyState)&&!1==i&&j()};e.async=!0;e.setAttribute("type","text/javascript");e.setAttribute("crossorigin","anonymous");e.src=a;g.base.BOM.Event.addEventListener(e,"load",j);g.base.BOM.Event.addEventListener(e,"readystatechange",o);g.base.BOM.Event.addEventListener(e,"error",j);for(var p=document.getElementsByTagName("script"),
m=0,n=p.length;!k&&m<n;m++)k=a==p[m].getAttribute("src");k||c.appendChild(e)}NEG.base.BOM[a]=function(a,c){var e=new b;e.loadJS(a,c);return e}})("loadJS",NEG);(function(a){var b;b=a.base.BOM=a.base.BOM||{},a=b;a.Utility=a.Utility||{};a.Utility.isHTMLElement=function(a){var e;if(!(e=a==document||a==window))e=(e=a.nodeName)&&document.createElement(e).constructor===a.constructor;return e}})(NEG);
(function(a){var g={run:a.base.run,iRun:function(e){a.base.run(e,!0)},Module:a.base.Module,NS:a.base.NS,merge:a.base.merge,blend:a.base.blend,setCDNTimestamp:a.base.setCDNTimestamp,moduleURL:a.base.setBaseURL,loadJS:a.base.BOM.loadJS,domReady:a.base.BOM.DOMReady,ArrayIndexOf:a.utility.Array.indexOf,isType:a.utility.isType,encodeHTML:a.utility.Encoding.encodeHTML,decodeHTML:a.utility.Encoding.decodeHTML,Enum:a.utility.getEnum,documentWriteScript:a.utility.Script.documentWriteScript,trim:a.utility.String.trim};
(function(){var e={},b=a.base,c=b.isType,d=b.Event.publicDispatchEvent,f=b.Event.addEventListener;g.on=function(a,b){var g=[].slice.call(arguments,0);b&&c(b,"Function")?(g.unshift(e),f.apply(e,g)):d.apply(e,g)};g.off=function(a,d){var f=[].slice.call(arguments,0);d&&c(d,"Function")&&(f.unshift(e),b.Event.removeEventListener.apply(e,f))};g.trigger=function(a,b){var c=[].slice.call(arguments,0);d.apply(e,c)}})();if(a.VersionControl)a.setVersion=a.VersionControl.setVersion,a.getVersion=a.VersionControl.getVersion;
a.base.merge(a.base.avatarCore,{on:function(e,b,c){var d=this.target,f=a.base,g=f.BOM.Utility.isHTMLElement(d)&&f.BOM.Event.isEventSupported(d,e)?f.BOM.Event.addEventListener:f.Event.addEventListener;f.each(d,function(a,d){g(d,e,b,c)})},trigger:function(e,b){var c=this.target,d=a.base,f=d.BOM.Utility.isHTMLElement(c)&&d.BOM.Event.isEventSupported(c,e)?d.BOM.Event.dispatchEvent:d.Event.dispatchEvent;d.each(c,function(a,c){f(c,e,b)})},off:function(e,b,c){if(!(0>=arguments.length)){var d=this.target,
f=a.base,g=f.BOM.Utility.isHTMLElement(d)&&f.BOM.Event.isEventSupported(d,e)?f.BOM.Event.removeEventListener:f.Event.removeEventListener;f.each(d,function(a,d){g(d,e,b,c)})}}});a.base.merge(a,g);a.base.init()})(NEG);
