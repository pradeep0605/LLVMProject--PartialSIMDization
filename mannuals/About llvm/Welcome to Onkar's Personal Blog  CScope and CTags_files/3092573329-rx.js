/* Copyright 2007-8 Google. */ (function() { function h(a){throw a;}
var i=void 0,j=!0,k=null,l=!1,q="",aa="\n",s=" ",ba='"',ca='", ',da='","groups":["reactions"]},"labels":[',ea='","groups":["reactions"]},{"url": "',fa='"}],"applicationId":34}',ga="$$$$",ha="(",ia="(\\d*)(\\D*)",ja=")",ka="*",ma=".",na="0",oa=": ",pa="@",qa="Assertion failed",ra="Content-Type",sa="GET",ta="MSXML2.XMLHTTP",ua="MSXML2.XMLHTTP.3.0",va="MSXML2.XMLHTTP.6.0",wa="Microsoft.XMLHTTP",xa="POST",ya="[object Array]",za="[object Function]",Aa="[object Window]",Ba="]",Ca=']}],"applicationId":34}&token=',
Da="_",Ea="a",Fa="abort",Ga="application/x-www-form-urlencoded;charset=utf-8",t="array",Ha="call",Ia="click",Ja="complete",Ka="error",La="event",u="function",Ma="g",Na="http://www.blogger.com/reviews/json/aggregates",Oa="http://www.blogger.com/reviews/json/token",Pa="http://www.blogger.com/reviews/json/write",Qa="innerText",Ra="keypress",Sa="mouseout",Ta="mouseover",Ua="native code",Va="null",Wa="number",Xa="object",Ya="on",Za="ready",$a="readystatechange",ab='req={"annotations": [ {"replaceAllLabels":true,"entity": {"url": "',
bb='req={"applicationId":34}',cb='req={"entities":[{"url": "',db="rx-checked",eb="rx-count",fb="rx-holder",gb="rx-label",hb="rx-option",ib="rx-unchecked",jb="span",kb="splice",lb="string",mb="success",nb="timeout",ob="var ",pb="window",qb="withCredentials",v,rb=rb||{},w=this,sb=function(a,b,c){a=a.split(ma);c=c||w;!(a[0]in c)&&c.execScript&&c.execScript(ob+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&b!==i?c[d]=b:c=c[d]?c[d]:c[d]={}},tb=function(){},x=function(a){var b=typeof a;if(b==Xa)if(a){if(a instanceof
Array)return t;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c==Aa)return Xa;if(c==ya||typeof a.length==Wa&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(kb))return t;if(c==za||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(Ha))return u}else return Va;else if(b==u&&"undefined"==typeof a.call)return Xa;return b},y=function(a){var b=x(a);return b==t||b==Xa&&typeof a.length==
Wa},z=function(a){return typeof a==lb},A=function(a){return a[ub]||(a[ub]=++vb)},ub="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),vb=0,wb=function(a,b,c){return a.call.apply(a.bind,arguments)},xb=function(a,b,c){a||h(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},B=function(a,b,c){B=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf(Ua)?wb:xb;return B.apply(k,arguments)},yb=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}},D=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return B.apply(k,c)}return B(this,a)};Function.prototype.partial=function(a){var b=Array.prototype.slice.call(arguments);b.unshift(this,k);return B.apply(k,b)};var zb=function(a){Error.captureStackTrace?Error.captureStackTrace(this,zb):this.stack=Error().stack||q;a&&(this.message=q+a)};D(zb,Error);var Ab=function(a,b){for(var c=1;c<arguments.length;c++)var d=(q+arguments[c]).replace(/\$/g,ga),a=a.replace(/\%s/,d);return a};var Bb=function(a,b){b.unshift(a);zb.call(this,Ab.apply(k,b));b.shift()};D(Bb,zb);var E=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),f=qa;if(b)var f=f+(oa+b),e=d;h(new Bb(q+f,e||[]))}return a};var F=Array.prototype,G=F.indexOf?function(a,b,c){E(a.length!=k);return F.indexOf.call(a,b,c)}:function(a,b,c){c=c==k?0:0>c?Math.max(0,a.length+c):c;if(z(a))return!z(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Cb=F.forEach?function(a,b,c){E(a.length!=k);F.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=z(a)?a.split(q):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},Db=F.filter?function(a,b,c){E(a.length!=k);return F.filter.call(a,b,c)}:function(a,
b,c){for(var d=a.length,f=[],e=0,g=z(a)?a.split(q):a,m=0;m<d;m++)if(m in g){var n=g[m];b.call(c,n,m,a)&&(f[e++]=n)}return f},Eb=function(a,b){var c=G(a,b),d;if(d=0<=c)E(a.length!=k),F.splice.call(a,c,1);return d},Fb=function(a,b,c){E(a.length!=k);return 2>=arguments.length?F.slice.call(a,b):F.slice.call(a,b,c)};var Gb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Hb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Jb=function(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<Ib.length;e++)c=Ib[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var H,Kb,Lb,Mb,Nb=function(){return w.navigator?w.navigator.userAgent:k};Mb=Lb=Kb=H=l;var Ob;if(Ob=Nb()){var Pb=w.navigator;H=0==Ob.indexOf("Opera");Kb=!H&&-1!=Ob.indexOf("MSIE");Lb=!H&&-1!=Ob.indexOf("WebKit");Mb=!H&&!Lb&&"Gecko"==Pb.product}var Qb=H,I=Kb,J=Mb,K=Lb,Rb;
a:{var Sb=q,L;if(Qb&&w.opera)var Tb=w.opera.version,Sb=typeof Tb==u?Tb():Tb;else if(J?L=/rv\:([^\);]+)(\)|;)/:I?L=/MSIE\s+([^\);]+)(\)|;)/:K&&(L=/WebKit\/(\S+)/),L)var Ub=L.exec(Nb()),Sb=Ub?Ub[1]:q;if(I){var Vb,Wb=w.document;Vb=Wb?Wb.documentMode:i;if(Vb>parseFloat(Sb)){Rb=q+Vb;break a}}Rb=Sb}
var Xb=Rb,Yb={},M=function(a){var b;if(!(b=Yb[a])){b=0;for(var c=(q+Xb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,q).split(ma),d=(q+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,q).split(ma),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||q,m=d[e]||q,n=RegExp(ia,Ma),p=RegExp(ia,Ma);do{var r=n.exec(g)||[q,q,q],o=p.exec(m)||[q,q,q];if(0==r[0].length&&0==o[0].length)break;b=((0==r[1].length?0:parseInt(r[1],10))<(0==o[1].length?0:parseInt(o[1],10))?-1:(0==r[1].length?0:parseInt(r[1],10))>(0==o[1].length?0:
parseInt(o[1],10))?1:0)||((0==r[2].length)<(0==o[2].length)?-1:(0==r[2].length)>(0==o[2].length)?1:0)||(r[2]<o[2]?-1:r[2]>o[2]?1:0)}while(0==b)}b=Yb[a]=0<=b}return b},Zb={},$b=function(a){return Zb[a]||(Zb[a]=I&&!!document.documentMode&&document.documentMode>=a)};var ac=function(a){ac[s](a);return a};ac[s]=tb;!I||$b(9);var bc=!I||$b(9),cc=I&&!M("8");!K||M("528");J&&M("1.9b")||I&&M("8")||Qb&&M("9.5")||K&&M("528");J&&!M("8")||I&&M("9");var dc=function(){};dc.prototype.disposed_=l;dc.prototype.dispose=function(){this.disposed_||(this.disposed_=j,this.disposeInternal())};dc.prototype.disposeInternal=function(){this.dependentDisposables_&&ec.apply(k,this.dependentDisposables_);if(this.onDisposeCallbacks_)for(;this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()};var ec=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];y(d)?ec.apply(k,d):d&&typeof d.dispose==u&&d.dispose()}};var N=function(a,b){this.type=a;this.currentTarget=this.target=b};v=N.prototype;v.disposeInternal=function(){};v.dispose=function(){};v.propagationStopped_=l;v.defaultPrevented=l;v.returnValue_=j;v.preventDefault=function(){this.defaultPrevented=j;this.returnValue_=l};var O=function(a,b){a&&this.init(a,b)};D(O,N);v=O.prototype;v.target=k;v.relatedTarget=k;v.offsetX=0;v.offsetY=0;v.clientX=0;v.clientY=0;v.screenX=0;v.screenY=0;v.button=0;v.keyCode=0;v.charCode=0;v.ctrlKey=l;v.altKey=l;v.shiftKey=l;v.metaKey=l;v.event_=k;
v.init=function(a,b){var c=this.type=a.type;N.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(J){var f;a:{try{ac(d.nodeName);f=j;break a}catch(e){}f=l}f||(d=k)}}else c==Ta?d=a.fromElement:c==Sa&&(d=a.toElement);this.relatedTarget=d;this.offsetX=K||a.offsetX!==i?a.offsetX:a.layerX;this.offsetY=K||a.offsetY!==i?a.offsetY:a.layerY;this.clientX=a.clientX!==i?a.clientX:a.pageX;this.clientY=a.clientY!==i?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=
a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c==Ra?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.event_=a;a.defaultPrevented&&this.preventDefault();delete this.propagationStopped_};
v.preventDefault=function(){O.superClass_.preventDefault.call(this);var a=this.event_;if(a.preventDefault)a.preventDefault();else if(a.returnValue=l,cc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};v.disposeInternal=function(){};var fc=function(){},gc=0;v=fc.prototype;v.key=0;v.removed=l;v.callOnce=l;v.init=function(a,b,c,d,f,e){x(a)==u?this.isFunctionListener_=j:a&&a.handleEvent&&x(a.handleEvent)==u?this.isFunctionListener_=l:h(Error("Invalid listener argument"));this.listener=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!f;this.handler=e;this.callOnce=l;this.key=++gc;this.removed=l};
v.handleEvent=function(a){return this.isFunctionListener_?this.listener.call(this.handler||this.src,a):this.listener.handleEvent.call(this.listener,a)};var P={},Q={},R={},S={},T=function(a,b,c,d,f){if(b){if(x(b)==t){for(var e=0;e<b.length;e++)T(a,b[e],c,d,f);return k}var d=!!d,g=Q;b in g||(g[b]={count_:0,remaining_:0});g=g[b];d in g||(g[d]={count_:0,remaining_:0},g.count_++);var g=g[d],m=A(a),n;g.remaining_++;if(g[m]){n=g[m];for(e=0;e<n.length;e++)if(g=n[e],g.listener==c&&g.handler==f){if(g.removed)break;return n[e].key}}else n=g[m]=[],g.count_++;var p=hc,r=bc?function(a){return p.call(r.src,r.key,a)}:function(a){a=p.call(r.src,r.key,a);if(!a)return a},
e=r;e.src=a;g=new fc;g.init(c,e,a,b,d,f);c=g.key;e.key=c;n.push(g);P[c]=g;R[m]||(R[m]=[]);R[m].push(g);a.addEventListener?(a==w||!a.customEvent_)&&a.addEventListener(b,e,d):a.attachEvent(b in S?S[b]:S[b]=Ya+b,e);return c}h(Error("Invalid event type"))},ic=function(a,b,c,d,f){if(x(b)==t){for(var e=0;e<b.length;e++)ic(a,b[e],c,d,f);return k}a=T(a,b,c,d,f);P[a].callOnce=j;return a},jc=function(a,b,c,d,f){if(x(b)==t){for(var e=0;e<b.length;e++)jc(a,b[e],c,d,f);return k}d=!!d;a:{e=Q;if(b in e&&(e=e[b],
d in e&&(e=e[d],a=A(a),e[a]))){a=e[a];break a}a=k}if(!a)return l;for(e=0;e<a.length;e++)if(a[e].listener==c&&a[e].capture==d&&a[e].handler==f)return kc(a[e].key);return l},kc=function(a){if(!P[a])return l;var b=P[a];if(b.removed)return l;var c=b.src,d=b.type,f=b.proxy,e=b.capture;c.removeEventListener?(c==w||!c.customEvent_)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in S?S[d]:S[d]=Ya+d,f);c=A(c);R[c]&&(f=R[c],Eb(f,b),0==f.length&&delete R[c]);b.removed=j;if(b=Q[d][e][c])b.needsCleanup_=
j,lc(d,e,c,b);delete P[a];return j},lc=function(a,b,c,d){if(!d.locked_&&d.needsCleanup_){for(var f=0,e=0;f<d.length;f++)d[f].removed?d[f].proxy.src=k:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.needsCleanup_=l;0==e&&(delete Q[a][b][c],Q[a][b].count_--,0==Q[a][b].count_&&(delete Q[a][b],Q[a].count_--),0==Q[a].count_&&delete Q[a])}},mc=function(a,b,c){var d=0,f=b==k,e=c==k,c=!!c;if(a==k){var a=function(a){for(var g=a.length-1;0<=g;g--){var m=a[g];if((f||b==m.type)&&(e||c==m.capture))kc(m.key),d++}},g;for(g in R)a.call(i,
R[g],g,R)}else if(g=A(a),R[g]){g=R[g];for(a=g.length-1;0<=a;a--){var m=g[a];if((f||b==m.type)&&(e||c==m.capture))kc(m.key),d++}}return d},U=function(a,b,c,d,f){var e=1,b=A(b);if(a[b]){a.remaining_--;a=a[b];a.locked_?a.locked_++:a.locked_=1;try{for(var g=a.length,m=0;m<g;m++){var n=a[m];n&&!n.removed&&(e&=nc(n,f)!==l)}}finally{a.locked_--,lc(c,d,b,a)}}return Boolean(e)},nc=function(a,b){a.callOnce&&kc(a.key);return a.handleEvent(b)},hc=function(a,b){if(!P[a])return j;var c=P[a],d=c.type,f=Q;if(!(d in
f))return j;var f=f[d],e,g;if(!bc){var m;if(!(m=b))a:{m=[pb,La];for(var n=w;e=m.shift();)if(n[e]!=k)n=n[e];else{m=k;break a}m=n}e=m;m=j in f;n=l in f;if(m){if(0>e.keyCode||e.returnValue!=i)return j;a:{var p=l;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(r){p=j}if(p||e.returnValue==i)e.returnValue=j}}p=new O;p.init(e,this);e=j;try{if(m){for(var o=[],la=p.currentTarget;la;la=la.parentNode)o.push(la);g=f[j];g.remaining_=g.count_;for(var C=o.length-1;!p.propagationStopped_&&0<=C&&g.remaining_;C--)p.currentTarget=
o[C],e&=U(g,o[C],d,j,p);if(n){g=f[l];g.remaining_=g.count_;for(C=0;!p.propagationStopped_&&C<o.length&&g.remaining_;C++)p.currentTarget=o[C],e&=U(g,o[C],d,l,p)}}else e=nc(c,p)}finally{o&&(o.length=0)}return e}d=new O(b,this);return e=nc(c,d)};var oc=function(){};D(oc,dc);v=oc.prototype;v.customEvent_=j;v.parentEventTarget_=k;v.addEventListener=function(a,b,c,d){T(this,a,b,c,d)};v.removeEventListener=function(a,b,c,d){jc(this,a,b,c,d)};
v.dispatchEvent=function(a){var b=a.type||a,c=Q;if(b in c){if(z(a))a=new N(a,this);else if(a instanceof N)a.target=a.target||this;else{var d=a,a=new N(b,this);Jb(a,d)}var d=1,f,c=c[b],b=j in c,e;if(b){f=[];for(e=this;e;e=e.parentEventTarget_)f.push(e);e=c[j];e.remaining_=e.count_;for(var g=f.length-1;!a.propagationStopped_&&0<=g&&e.remaining_;g--)a.currentTarget=f[g],d&=U(e,f[g],a.type,j,a)&&a.returnValue_!=l}if(l in c)if(e=c[l],e.remaining_=e.count_,b)for(g=0;!a.propagationStopped_&&g<f.length&&
e.remaining_;g++)a.currentTarget=f[g],d&=U(e,f[g],a.type,l,a)&&a.returnValue_!=l;else for(f=this;!a.propagationStopped_&&f&&e.remaining_;f=f.parentEventTarget_)a.currentTarget=f,d&=U(e,f,a.type,l,a)&&a.returnValue_!=l;a=Boolean(d)}else a=j;return a};v.disposeInternal=function(){oc.superClass_.disposeInternal.call(this);mc(this);this.parentEventTarget_=k};var pc=function(a,b){b.preventDefault();a(b);return l};var qc=function(a){a=a.className;return z(a)&&a.match(/\S+/g)||[]},rc=function(a,b){for(var c=qc(a),d=Fb(arguments,1),f=c.length+d.length,e=c,g=0;g<d.length;g++)0<=G(e,d[g])||e.push(d[g]);a.className=c.join(s);return c.length==f},sc=function(a,b){var c=qc(a),d=Fb(arguments,1),f,e=d;f=Db(c,function(a){return!(0<=G(e,a))});a.className=f.join(s);return f.length==c.length-d.length},tc=function(a,b){var c=qc(a);(c=!(0<=G(c,b)))?rc(a,b):sc(a,b);return c};!I||$b(9);!J&&!I||I&&$b(9)||J&&M("1.9.1");var uc=I&&!M("9");var vc=function(a,b,c,d){a=d||a;b=b&&b!=ka?b.toUpperCase():q;if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?ma+c:q));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){for(var d={},f=0,e=0,g;g=a[e];e++)b==g.nodeName&&(d[f++]=g);d.length=f;return d}return a}a=a.getElementsByTagName(b||ka);if(c){d={};for(e=f=0;g=a[e];e++)b=g.className,typeof b.split==u&&0<=G(b.split(/\s+/),c)&&(d[f++]=g);d.length=f;return d}return a},wc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,
OBJECT:1},xc={IMG:s,BR:aa},zc=function(a){if(uc&&Qa in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,aa);else{var b=[];yc(a,b,j);a=b.join(q)}a=a.replace(/ \xAD /g,s).replace(/\xAD/g,q);a=a.replace(/\u200B/g,q);uc||(a=a.replace(/ +/g,s));a!=s&&(a=a.replace(/^\s*/,q));return a},yc=function(a,b,c){if(!(a.nodeName in wc))if(3==a.nodeType)c?b.push((q+a.nodeValue).replace(/(\r\n|\r|\n)/g,q)):b.push(a.nodeValue);else if(a.nodeName in xc)b.push(xc[a.nodeName]);else for(a=a.firstChild;a;)yc(a,b,c),a=a.nextSibling};var V="StopIteration"in w?w.StopIteration:Error("StopIteration"),W=function(){};W.prototype.next=function(){h(V)};W.prototype.__iterator__=function(){return this};var Ac=function(a){if(a instanceof W)return a;if(typeof a.__iterator__==u)return a.__iterator__(l);if(y(a)){var b=0,c=new W;c.next=function(){for(;;){b>=a.length&&h(V);if(b in a)return a[b++];b++}};return c}h(Error("Not implemented"))};var Bc=function(a){if(typeof a.getValues==u)return a.getValues();if(z(a))return a.split(q);if(y(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Gb(a)},Cc=function(a,b,c){if(typeof a.forEach==u)a.forEach(b,c);else if(y(a)||z(a))Cb(a,b,c);else{var d;if(typeof a.getKeys==u)d=a.getKeys();else if(typeof a.getValues!=u)if(y(a)||z(a)){d=[];for(var f=a.length,e=0;e<f;e++)d.push(e)}else d=Hb(a);else d=i;for(var f=Bc(a),e=f.length,g=0;g<e;g++)b.call(c,f[g],d&&d[g],a)}};var X=function(a,b){this.map_={};this.keys_=[];var c=arguments.length;if(1<c){c%2&&h(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};v=X.prototype;v.count_=0;v.version_=0;v.getValues=function(){this.cleanupKeysArray_();for(var a=[],b=0;b<this.keys_.length;b++)a.push(this.map_[this.keys_[b]]);return a};v.getKeys=function(){this.cleanupKeysArray_();return this.keys_.concat()};v.containsKey=function(a){return Y(this.map_,a)};
v.remove=function(a){return Y(this.map_,a)?(delete this.map_[a],this.count_--,this.version_++,this.keys_.length>2*this.count_&&this.cleanupKeysArray_(),j):l};v.cleanupKeysArray_=function(){if(this.count_!=this.keys_.length){for(var a=0,b=0;a<this.keys_.length;){var c=this.keys_[a];Y(this.map_,c)&&(this.keys_[b++]=c);a++}this.keys_.length=b}if(this.count_!=this.keys_.length){for(var d={},b=a=0;a<this.keys_.length;)c=this.keys_[a],Y(d,c)||(this.keys_[b++]=c,d[c]=1),a++;this.keys_.length=b}};
v.get=function(a,b){return Y(this.map_,a)?this.map_[a]:b};v.set=function(a,b){Y(this.map_,a)||(this.count_++,this.keys_.push(a),this.version_++);this.map_[a]=b};v.addAll=function(a){var b;a instanceof X?(b=a.getKeys(),a=a.getValues()):(b=Hb(a),a=Gb(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};v.clone=function(){return new X(this)};v.getKeyIterator=function(){return this.__iterator__(j)};
v.__iterator__=function(a){this.cleanupKeysArray_();var b=0,c=this.keys_,d=this.map_,f=this.version_,e=this,g=new W;g.next=function(){for(;;){f!=e.version_&&h(Error("The map has changed since the iterator was created"));b>=c.length&&h(V);var g=c[b++];return a?g:d[g]}};return g};var Y=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Dc=function(a){a=q+a;if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,pa).replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ba).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,q)))try{return eval(ha+a+ja)}catch(b){}h(Error("Invalid JSON string: "+a))};var Ec=w.window;var Fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Gc=K,Hc=function(a,b){if(Gc){Gc=l;var c=w.location;if(c){var d=c.href;if(d&&(d=(d=Hc(3,d))&&decodeURIComponent(d))&&d!=c.hostname)Gc=j,h(Error())}}return b.match(Fc)[a]||k};var Ic=function(){};Ic.prototype.cachedOptions_=k;Ic.prototype.getOptions=function(){return this.cachedOptions_||(this.cachedOptions_=this.internalGetOptions())};var Jc,Z=function(){};D(Z,Ic);Z.prototype.createInstance=function(){var a=this.getProgId_();return a?new ActiveXObject(a):new XMLHttpRequest};Z.prototype.internalGetOptions=function(){var a={};this.getProgId_()&&(a[0]=j,a[1]=j);return a};Z.prototype.getProgId_=function(){if(!this.ieProgId_&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var a=[va,ua,ta,wa],b=0;b<a.length;b++){var c=a[b];try{return new ActiveXObject(c),this.ieProgId_=c}catch(d){}}h(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))}return this.ieProgId_};
Jc=new Z;var $=function(a){this.headers=new X;this.xmlHttpFactory_=a||k};D($,oc);var Kc=/^https?$/i,Lc=[],Nc=function(a,b,c,d,f,e){var g=new $;Lc.push(g);b&&T(g,Ja,b);T(g,Za,yb(Mc,g));e&&g.setTimeoutInterval(e);g.send(a,c,d,f)},Mc=function(a){a.dispose();Eb(Lc,a)};v=$.prototype;v.active_=l;v.xhr_=k;v.xhrOptions_=k;v.lastUri_=q;v.errorDispatched_=l;v.inSend_=l;v.inOpen_=l;v.inAbort_=l;v.timeoutInterval_=0;v.timeoutId_=k;v.responseType_=q;v.withCredentials_=l;
v.setTimeoutInterval=function(a){this.timeoutInterval_=Math.max(0,a)};
v.send=function(a,b,c,d){this.xhr_&&h(Error("[goog.net.XhrIo] Object is active with another request"));b=b?b.toUpperCase():sa;this.lastUri_=a;this.errorDispatched_=l;this.active_=j;this.xhr_=this.createXhr();this.xhrOptions_=this.xmlHttpFactory_?this.xmlHttpFactory_.getOptions():Jc.getOptions();this.xhr_.onreadystatechange=B(this.onReadyStateChange_,this);try{this.inOpen_=j,this.xhr_.open(b,a,j),this.inOpen_=l}catch(f){this.error_(5,f);return}var a=c||q,e=this.headers.clone();d&&Cc(d,function(a,b){e.set(b,
a)});b==xa&&!e.containsKey(ra)&&e.set(ra,Ga);Cc(e,function(a,b){this.xhr_.setRequestHeader(b,a)},this);this.responseType_&&(this.xhr_.responseType=this.responseType_);qb in this.xhr_&&(this.xhr_.withCredentials=this.withCredentials_);try{this.timeoutId_&&(Ec.clearTimeout(this.timeoutId_),this.timeoutId_=k),0<this.timeoutInterval_&&(this.timeoutId_=Ec.setTimeout(B(this.timeout_,this),this.timeoutInterval_)),this.inSend_=j,this.xhr_.send(a),this.inSend_=l}catch(g){this.error_(5,g)}};
v.createXhr=function(){return this.xmlHttpFactory_?this.xmlHttpFactory_.createInstance():Jc.createInstance()};v.timeout_=function(){"undefined"!=typeof rb&&this.xhr_&&(this.dispatchEvent(nb),this.abort(8))};v.error_=function(){this.active_=l;this.xhr_&&(this.inAbort_=j,this.xhr_.abort(),this.inAbort_=l);this.dispatchErrors_();this.cleanUpXhr_()};v.dispatchErrors_=function(){this.errorDispatched_||(this.errorDispatched_=j,this.dispatchEvent(Ja),this.dispatchEvent(Ka))};
v.abort=function(){this.xhr_&&this.active_&&(this.active_=l,this.inAbort_=j,this.xhr_.abort(),this.inAbort_=l,this.dispatchEvent(Ja),this.dispatchEvent(Fa),this.cleanUpXhr_())};v.disposeInternal=function(){this.xhr_&&(this.active_&&(this.active_=l,this.inAbort_=j,this.xhr_.abort(),this.inAbort_=l),this.cleanUpXhr_(j));$.superClass_.disposeInternal.call(this)};v.onReadyStateChange_=function(){if(!this.inOpen_&&!this.inSend_&&!this.inAbort_)this.onReadyStateChangeEntryPoint_();else this.onReadyStateChangeHelper_()};
v.onReadyStateChangeEntryPoint_=function(){this.onReadyStateChangeHelper_()};v.onReadyStateChangeHelper_=function(){if(this.active_&&"undefined"!=typeof rb&&(!this.xhrOptions_[1]||!(4==this.getReadyState()&&2==this.getStatus())))if(this.inSend_&&4==this.getReadyState())Ec.setTimeout(B(this.onReadyStateChange_,this),0);else if(this.dispatchEvent($a),this.isComplete()){this.active_=l;try{this.isSuccess()?(this.dispatchEvent(Ja),this.dispatchEvent(mb)):this.dispatchErrors_()}finally{this.cleanUpXhr_()}}};
v.cleanUpXhr_=function(a){if(this.xhr_){var b=this.xhr_,c=this.xhrOptions_[0]?tb:k;this.xhrOptions_=this.xhr_=k;this.timeoutId_&&(Ec.clearTimeout(this.timeoutId_),this.timeoutId_=k);a||this.dispatchEvent(Za);try{b.onreadystatechange=c}catch(d){}}};v.isComplete=function(){return 4==this.getReadyState()};v.isSuccess=function(){var a=this.getStatus(),b;a:switch(a){case 200:case 201:case 202:case 204:case 304:case 1223:b=j;break a;default:b=l}return b||0===a&&!this.isLastUriEffectiveSchemeHttp_()};
v.isLastUriEffectiveSchemeHttp_=function(){var a=Hc(1,q+this.lastUri_);!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1));return Kc.test(a?a.toLowerCase():q)};v.getReadyState=function(){return this.xhr_?this.xhr_.readyState:0};v.getStatus=function(){try{return 2<this.getReadyState()?this.xhr_.status:-1}catch(a){return-1}};v.getResponseJson=function(a){if(this.xhr_){var b=this.xhr_.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return Dc(b)}};var Oc=function(a,b){this.entityId_=encodeURIComponent(a);b?this.sender_=b:(this.sender_=$,this.sender_.send=Nc);this.writeToken_=q;this.options_={};this.counts_={};this.decodeLabel_={};this.selectedReactions_=new X};v=Oc.prototype;
v.initialize=function(a){for(var a=vc(document,Ea,hb,document.getElementById(a)),b=0;b<a.length;b++){var c=a[b],d=vc(document,jb,gb,c)[0],d=zc(d);this.options_[d]=c;var f=this.encodeLabel_(d);this.decodeLabel_[f]=d;var f=c,e=B(this.toggle,this,d);T(f,Ia,pc.partial(e));c=vc(document,jb,eb,c)[0];this.counts_[d]=c;c.innerHTML=na}a=B(this.displayRetrievedAnnotations_,this);b=B(this.disableOptions_,this);this.loadExistingReactions_(a,b)};v.setZipitToken_=function(a){this.writeToken_=a};
v.loadZipitToken_=function(a){var b=B(this.disableOptions_,this),c=B(this.setZipitToken_,this),d=B(this.toggle,this);this.sender_.send(Oa,function(){if(this.isSuccess()){var f=this.getResponseJson();c(f.channelHeader.token);a&&d(a)}else b()},xa,bb)};v.loadExistingReactions_=function(a,b){this.sender_.send(Na,function(){this.isSuccess()?a(this.getResponseJson()):b()},xa,cb+this.entityId_+ea+this.entityId_+fa)};
v.displayRetrievedAnnotations_=function(a){if(a.entityAggregates)for(var b=0;b<a.entityAggregates.length;b++){var c=l;if(c=a.entityAggregates[b].labels)for(var d=0;d<c.length;d++){var f=this.counts_[this.decodeLabel_[c[d].label]];if(f){var e=parseInt(zc(f),10);isNaN(e)&&(e=0);f.innerHTML=e+parseInt(c[d].count,10)}}}};v.encodeLabel_=function(a){a=a.replace(/([^A-Za-z ])/g,function(a){return Da+a.charCodeAt(0)});return a=a.replace(/([A-Z])/g,function(a){return Da+a.toLowerCase()})};
v.disableOptions_=function(){for(var a=vc(document,Ea,hb,document.getElementById(fb)),b=0;b<a.length;b++){var c=a[b];c.style.borderColor=k;mc(c)}};
v.toggle=function(a){if(this.writeToken_==q)this.loadZipitToken_(a);else{if(this.selectedReactions_.get(a)){var b=l;this.selectedReactions_.remove(a)}else b=j,this.selectedReactions_.set(a,j);var c=q,d=this.selectedReactions_.getKeyIterator(),f=function(a){c=c+ba+this.encodeLabel_(a)+ca};if(y(d))try{Cb(d,f,this)}catch(e){e!==V&&h(e)}else{d=Ac(d);try{for(;;)f.call(this,d.next(),i,d)}catch(g){g!==V&&h(g)}}this.sender_.send(Pa,tb,xa,ab+this.entityId_+da+c+Ca+this.writeToken_);if(d=this.options_[a])a=
this.counts_[a],f=parseInt(zc(a),10),isNaN(f)&&(f=0),a.innerHTML=b?f+1:f-1,tc(d,db),tc(d,ib)}};sb("BLOG_Annotator",Oc,i);Oc.prototype.initialize=Oc.prototype.initialize;sb("BLOG_listenOnce",ic,i); })()