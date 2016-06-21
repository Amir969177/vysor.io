function nextTick(e){setTimeout(e,0)}function make4Len16(e){var t=e.toString(16);while(t.length<4){t="0"+t}return t}var pendingFuncs;window.addEventListener("message",function(){if(pendingFuncs){$.each(pendingFuncs,function(e,t){t()});pendingFuncs=null}},false);function unsafeCallback(e){return e}function encode_utf8(e){return unescape(encodeURIComponent(e))}function decode_utf8(e){return decodeURIComponent(escape(e))}function ab2str(e){if(e.constructor.name=="ArrayBuffer"){e=new Uint8Array(e)}return decode_utf8(String.fromCharCode.apply(null,e))}function str2ab(e,t,n){e=encode_utf8(e);var o=e.length;if(n)o++;if(!t){t=new ArrayBuffer(o)}var r=new Uint8Array(t);if(n)r[e.length]=0;for(var i=0,s=e.length;i<s;i++){r[i]=e.charCodeAt(i)}return t}var slashN="\n".charCodeAt(0);function writeLine(e,t,n){if(t.constructor.name=="Object")t=JSON.stringify(t);writeString(e,t+"\n",n)}function readLine(e,t){var n=[];function o(){e.read(function(r){for(var i=0;i<r.byteLength;i++){if(r[i]==slashN){var s=r.subarray(0,i);n.push(s);var a="";for(var c in n){c=n[c];a+=ab2str(c)}var u=r.subarray(i+1);e.unshift(u);t(a);return}}n.push(r);o()})}o()}function readString(e,t){var n="";e.onClose=function(){t(n)};function o(t){n+=ab2str(t);e.read(o)}e.read(o)}function writeString(e,t,n){if(t.constructor.name=="Object")t=JSON.stringify(t);e.write(str2ab(t),n)}function appendBuffer(e,t){var n=new Uint8Array(e.byteLength+t.byteLength);n.set(e,0);n.set(t,e.byteLength);return n}var timeThing=(new Date).getTime();function timeTrace(e){var t=(new Date).getTime();console.log(e+": "+(t-timeThing));timeThing=t}function bufferToHex(e){var t=new Uint8Array(e);var n="";for(var o in t){o=t[o];if(o<16)n+="0"+o.toString(16);else n+=o.toString(16)}return n}function hexToBuffer(e){var t=new ArrayBuffer(e.length/2);var n=new Uint8Array(t);for(var o=0;o<e.length/2;o++){var r=e.substr(o*2,2);n[o]=parseInt(r,16)}return t}function base64ToArrayBuffer(e){var t=window.atob(e);var n=t.length;var o=new Uint8Array(n);for(var r=0;r<n;r++){var i=t.charCodeAt(r);o[r]=i}return o.buffer}function arrayBufferToBase64(e){var t="";var n=new Uint8Array(e);var o=n.byteLength;for(var r=0;r<o;r++){t+=String.fromCharCode(n[r])}return window.btoa(t)}var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(e){var t;var n;var o="";for(t=0;t+3<=e.length;t+=3){n=parseInt(e.substring(t,t+3),16);o+=b64map.charAt(n>>6)+b64map.charAt(n&63)}if(t+1==e.length){n=parseInt(e.substring(t,t+1),16);o+=b64map.charAt(n<<2)}else if(t+2==e.length){n=parseInt(e.substring(t,t+2),16);o+=b64map.charAt(n>>2)+b64map.charAt((n&3)<<4)}while((o.length&3)>0){o+=b64pad}return o}if(!String.prototype.startsWith){Object.defineProperty(String.prototype,"startsWith",{enumerable:false,configurable:false,writable:false,value:function(e,t){t=t||0;return this.lastIndexOf(e,t)===t}})}function getQueryVariable(e,t){if(!t)t=window.location;var n=t.search.substring(1);var o=n.split("&");for(var r=0;r<o.length;r++){var i=o[r].split("=");if(decodeURIComponent(i[0])==e){return decodeURIComponent(i[1])}}}Object.fromArray=function(e){var t={};for(var n in e){var o=e[n];t[o]=o}return t};$.ajaxTransport("+binary",function(e,t,n){if(window.FormData&&(e.dataType&&e.dataType=="binary"||e.data&&(window.ArrayBuffer&&e.data instanceof ArrayBuffer||window.Blob&&e.data instanceof Blob))){return{send:function(t,n){var o=new XMLHttpRequest,r=e.url,i=e.type,s=e.async||true,a=e.responseType||"blob",c=e.data||null,u=e.username||null,d=e.password||null;o.addEventListener("load",function(){var t={};t[e.dataType]=o.response;n(o.status,o.statusText,t,o.getAllResponseHeaders())});o.open(i,r,s,u,d);for(var f in t){o.setRequestHeader(f,t[f])}o.responseType=a;o.send(c)},abort:function(){n.abort()}}}});function throttleTimeout(e,t,n,o){if(e){clearTimeout(e.timeout)}else{e={items:[]}}e.timeout=setTimeout(function(){o(e.items);e.items=[]},n);e.items.push(t);return e}function copyTextToClipboard(e){var t=document.createElement("textarea");t.style.position="fixed";t.style.top=0;t.style.left=0;t.style.width="2em";t.style.height="2em";t.style.padding=0;t.style.border="none";t.style.outline="none";t.style.boxShadow="none";t.style.background="transparent";t.value=e;document.body.appendChild(t);t.select();try{var n=document.execCommand("copy")}catch(o){console.log("Oops, unable to copy")}document.body.removeChild(t)}function showNotification(e,t){t=t||"/icon.png";console.log("notification:",e);if(!window.chrome||!window.chrome.notifications)return;var n=chrome.runtime.getManifest().name;chrome.notifications.create({type:"basic",iconUrl:t,title:n,message:e})}var blobFromUrl=function(){var e={};return function(t,n){if(e[t]){n(e[t]);return}var o=new XMLHttpRequest;o.open("GET",t,true);o.responseType="blob";o.onload=function(o){n(e[t]=window.URL.createObjectURL(this.response))};o.send()}}();if(window.chrome&&window.chrome.sockets){chrome.sockets.tcp.onReceive.addListener(function(e){var t=Socket.readers[e.socketId];if(t==null)return;t.dataReceived(new Uint8Array(e.data))});chrome.sockets.tcp.onReceiveError.addListener(function(e){var t=Socket.readers[e.socketId];if(t==null)return;t.destroy();t.dataReceived(null)});chrome.sockets.tcpServer.onAccept.addListener(function(e){chrome.sockets.tcp.setPaused(e.clientSocketId,false);var t=Server.listeners[e.socketId];if(t==null)return;t(new Socket({socketId:e.clientSocketId}))})}(function(){function e(t,n){if(t.socketId){this.socketId=t.socketId;e.readers[this.socketId]=this}else{chrome.sockets.tcp.create(function(o){this.socketId=o.socketId;chrome.sockets.tcp.connect(this.socketId,t.host,t.port,function(t){chrome.runtime.lastError;if(!t){e.readers[o.socketId]=this;n(this)}else{this.destroy();n(null)}}.bind(this))}.bind(this))}}e.readers={};e.connect=function(t,n){return new e(t,n)};e.pump=function(e,t,n){var o=function(){e.read(r)}.bind(e);var r=function(e){var n=e.buffer;if(e.byteOffset||e.length!=n.byteLength){n=n.slice(e.byteOffset,e.byteOffset+e.length)}t.write(n,o)}.bind(t);e.read(r);e.onClose=n};e.stream=function(t,n,o){e.pump(t,n,function(){n.destroy();if(o){var e=o;o=null;e()}});e.pump(n,t,function(){t.destroy();if(o){var e=o;o=null;e()}})};e.eat=function(e){function t(){e.read(t)}t()};e.prototype.read=function(){if(this.pendingCallback){throw new Error("double callback")}if(this.closed&&!this.pending){var e=this.onClose;if(e){delete this.onClose;e()}return}var t=0;if(arguments[t].constructor.name=="Number"){this.pendingLength=arguments[t++]}else{this.pendingLength=0}var e=arguments[t];if(!this.pending||this.paused){this.pendingCallback=e;return}if(!this.pendingLength){this.pendingLength=this.buffered()}else if(this.pendingLength>this.buffered()){this.pendingCallback=e;return}var n;var o=0;while(o<this.pendingLength){var r=this.pending.shift();this.bufferedLength-=r.length;if(!this.pending.length)delete this.pending;var i=r;var s=Math.min(i.byteLength,this.pendingLength-o);if(s!=i.byteLength){var a=i.subarray(0,s);var c=i.subarray(s);this.unshift(c);i=a}if(!n&&i.byteLength!=this.pendingLength)n=new Uint8Array(this.pendingLength);if(n){n.set(i,o)}else{n=i}o+=i.byteLength}e(n)};e.prototype.write=function(e,t){chrome.sockets.tcp.send(this.socketId,e,function(n){chrome.runtime.lastError;if(!n||n.resultCode){return}if(n.bytesSent<e.byteLength){this.write(e.slice(n.bytesSent),t)}else{t()}}.bind(this))};e.prototype.destroy=function(e,t){chrome.sockets.tcp.close(this.socketId,function(){chrome.runtime.lastError})};e.prototype.unshift=function(e){if(e.byteLength==0)return;if(!this.pending)this.pending=[e];else this.pending.unshift(e);if(!this.bufferedLength)this.bufferedLength=0;this.bufferedLength+=e.length};e.prototype.dataReceived=function(e){if(e&&e.length){var t=new Uint8Array(e);if(!this.pending)this.pending=[t];else this.pending.push(t)}if(e==null){this.closed=true}else{if(!this.bufferedLength)this.bufferedLength=0;this.bufferedLength+=e.length}if(this.paused||!this.pending||!this.pending.length){var n=this.onClose;if(this.closed&&n){delete this.onClose;n()}return}var o=this.pendingLength;var n=this.pendingCallback;if(n){delete this.pendingCallback;this.read(o,n)}};e.prototype.buffered=function(){return this.bufferedLength};e.prototype.pause=function(){if(this.paused){return}this.paused=true;this.onPause()};e.prototype.resume=function(){if(!this.paused){return}this.paused=false;this.onResume()};e.prototype.onResume=function(){chrome.sockets.tcp.setPaused(this.socketId,false,function(){})};e.prototype.onPause=function(){chrome.sockets.tcp.setPaused(this.socketId,true,function(){})};function t(){}t.listeners={};t.prototype.__proto__=e.prototype;t.prototype.destroy=function(){chrome.sockets.tcpServer.close(this.socketId)};t.prototype.listen=function(e,n,o){var r;var i;if(e.constructor.name=="Number"){r=e;i="0.0.0.0"}else{i=e.address;r=e.port}chrome.sockets.tcpServer.create(function(e){this.socketId=e.socketId;t.listeners[this.socketId]=n;chrome.sockets.tcpServer.listen(e.socketId,i,r,function(e){chrome.runtime.lastError;if(e){this.destroy();if(o){o(e)}return}chrome.sockets.tcpServer.getInfo(this.socketId,function(t){this.localAddress=t.localAddress;this.localPort=t.localPort;if(o){o(e)}}.bind(this))}.bind(this))}.bind(this))};window.Socket=e;window.Server=t})();function FetchSocket(e,t){this.promise=fetch(e).then(function(e){this.connected=true;this.response=e;this.reader=this.response.body.getReader();this.reader.closed.then(function(){if(this.onClose)this.dataReceived(null)}.bind(this));this.onResume();t(this)}.bind(this),function(e){t(null,e)})}FetchSocket.connect=function(e,t){new FetchSocket(e,t)};FetchSocket.prototype.write=function(e,t){throw new Error("write not supported on fetch socket")};FetchSocket.prototype.destroy=function(){if(this.promise&&this.promise.cancel)this.promise.cancel()};FetchSocket.prototype.unshift=Socket.prototype.unshift;FetchSocket.prototype.dataReceived=Socket.prototype.dataReceived;FetchSocket.prototype.read=Socket.prototype.read;FetchSocket.prototype.pause=Socket.prototype.pause;FetchSocket.prototype.resume=Socket.prototype.resume;FetchSocket.prototype.buffered=Socket.prototype.buffered;FetchSocket.prototype.onPause=function(){};FetchSocket.prototype.onResume=function(){this.reader.read().then(function(e){if(!e.value)return;this.dataReceived(e.value);if(this.paused){return}this.onResume()}.bind(this))};(function(){function e(e,t){this.conn=e;this.dc=t;this.gotEof=false;t.onmessage=function(e){var t=new Uint8Array(e.data);var n=t[t.byteLength-1]==1;this.dataReceived(t.subarray(0,t.byteLength-1));if(n){this.gotEof=true;this.destroy()}}.bind(this);t.onclose=t.onerror=this.destroy.bind(this);this.needsBufferShim=true||parseInt(/Chrome\/(\d\d)/.exec(navigator.userAgent)[1])<46}e.prototype.buffered=Socket.prototype.buffered;e.prototype.unshift=Socket.prototype.unshift;e.prototype.dataReceived=Socket.prototype.dataReceived;e.prototype.read=Socket.prototype.read;e.prototype.pause=Socket.prototype.pause;e.prototype.resume=Socket.prototype.resume;e.prototype.buffered=Socket.prototype.buffered;e.prototype.writeable=function(){var e=this.writeCallback;if(e){delete this.writeCallback;e()}};e.prototype.write=function(e,t){if(!this.dc||this.dc.readyState!="open"){this.destroy();return}this.writeCallback=t;var n=new Uint8Array(e.byteLength+1);n.set(new Uint8Array(e));this.dc.send(n.buffer);if(this.reentrantWrite)return;try{this.reentrantWrite=true;while(this.writeCallback&&(this.dc.bufferedAmount==0||this.needsBufferShim)){this.writeable()}}finally{this.reentrantWrite=false}};e.prototype.destroy=function(){this.dataReceived(null);if(this.dc==null)return;var e=this.dc;this.dc=null;e.onclose=null;e.onerror=null;if(e.readyState=="open"){try{e.send(new Uint8Array([1]));if(this.gotEof)this.conn.recycleChannel(e);else this.conn.waitForEof(e)}catch(t){}}};function t(e){this.pc=e;this.pc.oniceconnectionstatechange=function(){if(this.pc.iceConnectionState=="disconnected"||this.pc.iceConnectionState=="closed"){this.destroy()}}.bind(this)}t.prototype.waitForCommand=function(t){t.onmessage=function(n){if(n.data.byteLength==1)return;this.removeChannel(t);var o=ab2str(n.data);var r=new e(this,t);this.openSocket(o,r)}.bind(this)};t.prototype.compactChannels=function(){if(this.channels&&!this.channels.length)this.channels=null};t.prototype.removeChannel=function(e){t;if(!this.channels)return;var t=this.channels.indexOf(e);if(t==-1)return;this.channels.splice(t,1);this.compactChannels()};t.prototype.waitForEof=function(e){e.onmessage=function(t){var n=new Uint8Array(t.data);var o=n[n.byteLength-1]==1;if(o)this.recycleChannel(e)}.bind(this)};t.prototype.recycleChannel=function(e){if(!this.channels)this.channels=[];this.channels.push(e);e.onclose=e.onerror=function(){this.removeChannel(e)}.bind(this);this.waitForCommand(e)};t.prototype.addCandidates=function(e){for(var t in e.candidates){this.pc.addIceCandidate(new RTCIceCandidate(e.candidates[t]))}};t.prototype.setupPinger=function(e){var t;function n(){e.send(str2ab("ping"));t=setTimeout(n,1e3)}e.onmessage=function(e){};e.onclose=e.onerror=function(){clearTimeout(t);this.destroy()}.bind(this);n()};t.prototype.listenSockets=function(){this.pc.ondatachannel=function(e){this.waitForCommand(e.channel)}.bind(this)};t.prototype.prepareChannel=function(e){var t=this.pc.createDataChannel(e||"gcm",{reliable:true,ordered:true});t.binaryType="arraybuffer";return t};t.prototype.newSocket=function(t,n){if(this.channels){var o=this.channels.shift();this.compactChannels();o.send(str2ab(t));var r=new e(this,o);n(r,this);return}var o=this.prepareChannel("gcm");o.onopen=function(){o.send(str2ab(t));var r=new e(this,o);n(r,this)}.bind(this)};t.prototype.destroy=function(){if(this.pc.signalingState!="closed"){this.pc.close()}var e=this.onClose;if(e){delete this.onClose;e()}};function n(e,t,n,o){this.senderId=e;this.registrationId=n;this.authorization=t;this.rtcc=o}n.gcmRtcConnections={};n.onMessage=function(e){var t=JSON.parse(e.message);console.log("gcm message",t);var o=e.type;var r=e.src;var i=e.srcPort;var s=e.dstPort;if(o=="offer"){var a=n.gcmRtcListeners[s];if(!a)console.log("not listening on "+s);else a.listener.incoming(r,i,s,t,a.listenCallback);return}else if(o=="answer"){var c=n.getKey(r,i,s);var u=n.gcmRtcConnections[c];if(!u){console.log("pending connection not found");return}u.manager.incoming(r,i,s,t);return}console.log("unknown message "+o)};n.hasLoadedChannels=false;n.start=function(e,t,o,r){if(window.chrome&&window.chrome.gcm){chrome.gcm.register([e],function(i){console.log("gcm registration "+i);if(!i){r();return}var s=new n(e,t,i,o);r(s)})}else{function i(){$.ajax({type:"GET",url:"https://vysor-1026.appspot.com/listen",success:function(i){console.log(i);var s=new goog.appengine.Channel(i.token);var a={onopen:function(){var s=new n(e,t,"web:"+i.channel,o);r(s)},onmessage:function(e){n.onMessage(JSON.parse(e.data))},onerror:function(){console.log("error",arguments)},onclose:function(){console.log("onclose",arguments)}};var c=s.open(a)}})}if(n.hasLoadedChannels){i()}else{$.getScript("https://vysor-1026.appspot.com/_ah/channel/jsapi",i)}}if(window.chrome&&window.chrome.gcm){chrome.gcm.onMessage.addListener(function(e){n.onMessage(e.data)})}};n.prototype.sendGcm=function(e,t,n,o,r){if(e.startsWith("web:")){$.ajax({type:"POST",url:"https://vysor-1026.appspot.com/send",data:JSON.stringify({channel:e.substring(4),data:{src:this.registrationId,srcPort:n,dstPort:t,type:o,message:JSON.stringify(r)}}),contentType:"application/json",dataType:"json",success:function(){}})}else{$.ajax({type:"POST",url:"https://gcm-http.googleapis.com/gcm/send",headers:{Authorization:"key="+this.authorization},data:JSON.stringify({to:e,data:{src:this.registrationId,srcPort:n,dstPort:t,type:o,message:JSON.stringify(r)}}),contentType:"application/json",dataType:"json",error:function(){console.log("gcm error",arguments)},success:function(){console.log("gcm",arguments)}})}};n.getKey=function(e,t,n){return n+":"+t+":"+e};n.prototype.setupPeerConnection=function(e,o,r,i,s){var a=window.RTCPeerConnection||window.webkitRTCPeerConnection;var c=new a(this.rtcc);var u;var d=function(t){this.sendGcm(o,r,i,e,{desc:s(),candidates:t})}.bind(this);c.onicecandidate=function(e){if(e.candidate==null)return;console.log(e.candidate);u=throttleTimeout(u,e.candidate,5e3,d)}.bind(this);var f=n.getKey(o,r,i);var l=new t(c);l.manager=this;var h;c.onsignalingstatechange=function(e){if(c.signalingState=="stable"){if(n.gcmRtcConnections[f]==l){delete n.gcmRtcConnections[f]}}else if(c.signalingState=="closed"){l.destroy()}};n.gcmRtcConnections[f]=l;return l};n.gcmPortCount=0;n.prototype.connect=function(e,t,o){var r=n.gcmPortCount++;var i;var s=this.setupPeerConnection("offer",e,t,r,function(){return i},o);var a=s.pc;var c=s.prepareChannel("pinger");c.onopen=function(){console.log("got rtc pinger");s.setupPinger(c);o(this)}.bind(s);s.listenSockets();a.createOffer(function(e){i=e;a.setLocalDescription(e)},function(){})};n.gcmRtcListeners={};n.prototype.isListening=function(e){return n.gcmRtcListeners[e]!=null};n.prototype.stopListen=function(e){delete n.gcmRtcListeners[e]};n.prototype.listen=function(e,t){if(n.gcmRtcListeners[e]){console.log("already listening on gcm port "+e);return}n.gcmRtcListeners[e]={listener:this,listenCallback:t}};n.prototype.incoming=function(e,t,o,r,i){var s=n.getKey(e,t,o);var a=n.gcmRtcConnections[s];if(!a){var c;a=this.setupPeerConnection("answer",e,t,o,function(){return c});a.remoteDesc=new RTCSessionDescription(r.desc);var u=a.pc;u.ondatachannel=function(e){console.log("got rtc pinger");this.setupPinger(e.channel);i(a);this.listenSockets()}.bind(a);u.setRemoteDescription(a.remoteDesc,function(){u.createAnswer(function(e){c=e;u.setLocalDescription(e)},function(){console.log("answer error",arguments)})})}else if(!a.remoteDesc){a.remoteDesc=new RTCSessionDescription(r.desc);var u=a.pc;u.setRemoteDescription(a.remoteDesc)}a.addCandidates(r)};window.GcmRtcSocket=e;window.GcmRtcManager=n})();function FileSocket(e){this.internalRead=this.read;this.read=this.readWrapper;this.file=e;this.fileRead=0}FileSocket.prototype.write=function(e,t){throw new Error("write not supported on file socket")};FileSocket.prototype.destroy=function(){};FileSocket.prototype.buffered=Socket.prototype.buffered;FileSocket.prototype.unshift=Socket.prototype.unshift;FileSocket.prototype.dataReceived=Socket.prototype.dataReceived;FileSocket.prototype.read=Socket.prototype.read;FileSocket.prototype.pause=Socket.prototype.pause;FileSocket.prototype.resume=Socket.prototype.resume;FileSocket.prototype.buffered=Socket.prototype.buffered;FileSocket.prototype.onPause=function(){};FileSocket.prototype.onResume=function(){};FileSocket.prototype.readWrapper=function(){this.internalRead.apply(this,arguments);if(!this.pendingCallback)return;var e=this.pendingLength;if(!e)e=65536;e=Math.min(this.file.size-this.fileRead,e);if(e==0){this.dataReceived(null);return}var t=this.file.slice(this.fileRead,this.fileRead+e);this.fileRead+=e;var n=new FileReader;n.addEventListener("loadend",function(e){this.dataReceived(new Uint8Array(n.result))}.bind(this));n.readAsArrayBuffer(t)};(function(){var e={};e.sendHostCommand=function(e,t){Socket.connect({host:"127.0.0.1",port:5037},function(n){if(!n){t();return}e=make4Len16(e.length)+e;n.read(4,function(e){if(ab2str(e)!="OKAY"){n.destroy();t();return}n.read(4,function(e){var o=ab2str(e);e=parseInt(o,16);if(e==0||o=="OKAY"){t(n,new ArrayBuffer(0));return}n.read(e,function(e){t(n,e)})})});n.write(str2ab(e),function(){})})};e.devices=function(t){var n={};function o(e){var o=e;e=e.replace("	"," ");var r=e.indexOf(" ");if(r==-1){t({});return}var i=e.substring(0,r);e=e.substring(r).trim();var s;while(s!=e){s=e;e=e.replace("  "," ")}var a={};var c=e.indexOf(" ");if(c==-1)return;var u=e.substring(0,c);e=e.substring(c+1);while(e.length){r=e.indexOf(":");if(r==-1)break;var d=e.substring(0,r);var f=e.substring(r+1);var l=f.indexOf(" ");var h=f.indexOf(":");var p;if(l==-1||h==-1){p=f;e=""}else{while(l!=-1&&l<h){p=f.substring(0,l);e=f.substring(l+1);l=f.indexOf(" ",l+1)}}a[d]=p}var m;if(!a["model"])m=i;else m=a["model"].replace("_"," ");n[i]={name:m,status:u,properties:o}}e.sendHostCommand("host:devices-l",function(e,r){if(!e){t();return}e.destroy();r=ab2str(r);r=r.trim();var i=r.split("\n");for(var s in i){s=i[s];o(s)}t(n)})};e.killServer=function(t){e.sendHostCommand("host:kill-server",function(e,n){if(!e){t();return}e.destroy();n=ab2str(n);if(t)t()})};e.sendClientCommand=function(e,t){var n=e.command;var o=e.serialno;Socket.connect({host:"127.0.0.1",port:5037},function(e){if(!e){t();return}e.read(4,function(o){var r=ab2str(o);if(r!="OKAY"){e.destroy();t(null);return}var i=n;i=make4Len16(i.length)+i;e.read(4,function(n){var o=ab2str(n);if(o!="OKAY"){e.destroy();t(null);return}t(e)});e.write(str2ab(i),function(){})});var r="host:transport:"+o;r=make4Len16(r.length)+r;e.write(str2ab(r),function(){})})};e.shell=function(t,n){var o=t.command;var r=t.serialno;e.getOrCreateSockFactory(t).newSocket("shell:"+o,function(e){if(!e){n();return}readString(e,function(e){n(e)})})};e.forward=function(t,n){var o="host-serial:"+t.serialno+":forward:"+t.from+";"+t.to;e.sendHostCommand(o,function(e,t){if(e)e.destroy();n(e,t)})};function t(){}t.MKID=function(e,t,n,o){return e.charCodeAt(0)|t.charCodeAt(0)<<8|n.charCodeAt(0)<<16|o.charCodeAt(0)<<24};t.ID_RECV=t.MKID("R","E","C","V");t.ID_SEND=t.MKID("S","E","N","D");t.ID_DONE=t.MKID("D","O","N","E");t.ID_DATA=t.MKID("D","A","T","A");t.DATA_MAX=64*1024;e.pull=function(n,o){var r=n.file;var i=n.serialno;var s=n.fileEntry;e.getOrCreateSockFactory(n).newSocket("sync:",function(e){if(!e){o();return}s.createWriter(function(n){var i=new ArrayBuffer(8);var a=new DataView(i);a.setUint32(0,t.ID_RECV,true);a.setUint32(4,r.length,true);e.write(i,function(){e.write(str2ab(r),function(){function r(t){e.read(t,function(e){n.write(new Blob([e]))})}n.onwriteend=function(e){i()};function i(){e.read(8,function(n){var i=new DataView(n.buffer,n.byteOffset,n.byteLength);var a=i.getUint32(0,true);if(a==t.ID_DATA){var c=i.getUint32(4,true);r(c);return}e.destroy();if(a==t.ID_DONE){o(s);return}o()})}i()})})})})};e.createSocketFactory=function(t){return{newSocket:function(n,o){e.sendClientCommand({serialno:t,command:n},o)}}};e.getOrCreateSockFactory=function(t){return t.socketFactory||e.createSocketFactory(t.serialno)};e.push=function(n,o){var r=n.file;var i=n.serialno;var s=n.socket;e.getOrCreateSockFactory(n).newSocket("sync:",function(e){if(!e){o();return}var n=new ArrayBuffer(8);var i=new DataView(n);var a=r+",0644";i.setUint32(0,t.ID_SEND,true);i.setUint32(4,a.length,true);e.write(n,function(){e.write(str2ab(a),function(){var n;var r=true;s.onClose=function(){var n=new ArrayBuffer(8);var r=new DataView(n);r.setUint32(0,t.ID_DONE,true);r.setUint32(4,0,true);e.write(n,function(){e.read(8,function(){o()})})};function i(){s.read(function(e){if(e.byteLength>t.DATA_MAX){var n=e.subarray(t.DATA_MAX);e=e.subarray(0,t.DATA_MAX);s.unshift(n)}a(e)})}function a(n){var o=new ArrayBuffer(8);var r=new DataView(o);r.setUint32(0,t.ID_DATA,true);r.setUint32(4,n.byteLength,true);e.write(o,function(){var t=n.buffer;if(n.byteOffset||n.length!=t.byteLength){t=t.slice(n.byteOffset,n.byteOffset+n.byteLength)}e.write(t,function(){i()})})}i()})})})};window.Adb=e})();var h264Socket;var inputWebSocket;(function(){var e;var t;var n;var o;var r;var i;var s;var a;var c;var u=0;var d=48;var f;var l;if(!Function.prototype.libind){Function.prototype.libind=function(e,t){return this.bind(t)}}if(!window.tracker){window.tracker={sendEvent:function(){}}}window.sendEvent=function(e){if(!inputWebSocket)return;if(e.clientX){e.downDelta=Date.now()-l;if(!f)f=$("#mirror");e.clientX=e.clientX/f.width()*t;if(e.clientX>t||e.clientX<0)return}if(e.clientY){if(!f)f=$("#mirror");e.clientY=e.clientY/f.height()*n;if(e.clientY>n||e.clientY<0)return}inputWebSocket.send(JSON.stringify(e))};function h(){if(u){clearTimeout(e);$(".head").fadeTo(0,1);return}$(".head").fadeTo(0,.8);clearTimeout(e);e=setTimeout(function(){$(".head").fadeOut()},2e3)}$(window).focus(function(){h();sendEvent({type:"wakeup"})});$(window).bind("paste",function(e){var t=e.originalEvent.clipboardData.getData("text");if(t&&t.length){sendEvent({type:"keychar",keychar:t})}});window.addEventListener("mousewheel",function(e){sendEvent({type:"scroll",clientX:e.offsetX,clientY:e.offsetY,deltaX:e.wheelDeltaX/100,deltaY:e.wheelDeltaY/100})},false);$(window).keypress(function(e){var t=String.fromCharCode(e.keyCode);if(!t.length)return;sendEvent({type:"keychar",keychar:t})});$(window).keydown(function(e){if(e.keyCode==36){sendEvent({type:"home"})}else if(e.keyCode==27){sendEvent({type:"back"})}else if(e.keyCode==112){sendEvent({type:"menu"})}else if(e.keyCode==113){h();return}else if(e.keyCode==8){sendEvent({type:"backspace"})}else if(e.keyCode==38){sendEvent({type:"up"})}else if(e.keyCode==40){sendEvent({type:"down"})}else if(e.keyCode==37){sendEvent({type:"left"})}else if(e.keyCode==39){sendEvent({type:"right"})}else if(e.keyCode==46){sendEvent({type:"delete"})}else if(e.keyCode==13){sendEvent({type:"keycode",keycode:66})}else{return}e.stopPropagation()});var p;$(window).resize(function(e){if(!n||!t)return;clearTimeout(p);p=setTimeout(function(){var e=innerWidth;var o=e*(n/t);a=e;c=o;g()},500)});function m(e,o){if(o==t&&e==n){var r=a;a=c;c=r}else{var i=innerWidth;var s=i*(n/t);a=i;c=s}g()}function y(){return document.webkitFullscreenElement||document.msFullscreenElement||document.mozFullscreenElement||document.fullscreenElement}function g(){if(a>screen.availWidth){a=screen.availWidth;c=n/t*a}var e=outerHeight-innerHeight;if(c+d+u+e>screen.availHeight){c=screen.availHeight-d-u-e;a=t/n*c}if(!a||!c)return;if(window.chrome&&window.chrome.app&&window.chrome.app.window&&!y()){chrome.app.window.current().innerBounds.width=Math.round(a);chrome.app.window.current().innerBounds.height=Math.round(c+d+u)}var o=innerWidth;var r=innerHeight;var i=(o-a)/2;var s=$("#mirror, #listener");s.css("left",i);s.css("top",r-c-d)/2;$(".foot").width(a);$(".foot").css("left",i);$(".overlay").width(a);$(".overlay").css("left",i);s=$("#mirror, embed, #listener");s.width(Math.round(a));s.height(Math.round(c));var f=$("canvas")[0];f.width=Math.round(a);f.height=Math.round(c);$("#dead, #drag").width(a);$("#dead, #drag").height(c+d+u)}function v(e){if(!window.chrome||!window.chrome.storage)return;chrome.storage.local.get(["vysorUsage","vysorDailyUsage","lastDailyReport"],function(t){var n=t.vysorUsage;var o=t.lastDailyReport;var r=t.vysorDailyUsage;var i=Date.now();if(!n)n=0;if(!r)r=0;if(!o){chrome.storage.local.set({lastDailyReport:i})}else{if(i>o+24*60*60*1e3){var s=r/(60*60*1e3);s=Math.round(s*2)/2;if(s<=24&&s>=0){tracker.sendEvent("daily-usage",s.toString())}r=0;chrome.storage.local.set({lastDailyReport:i})}}n+=e;r+=e;chrome.storage.local.set({vysorUsage:n,vysorDailyUsage:r})})}function w(){var e={filter:"original",filterHorLuma:"optimized",filterVerLumaEdge:"optimized",getBoundaryStrengthsA:"optimized"};var t;var n=new Avc;this.avc=n;n.configure(e,function(){console.log("callback for avc")});var o;n.onPictureDecoded=function(e,n,r){if(!e){console.log("no buffer?");return}if(!t){o=Date.now();console.log("first frame decoded");tracker.sendEvent("view-device");var i=$("#mirror");var s=i[0];t=new WebGLCanvas(s,undefined,{});if(!t.contextGL){var u=chrome.runtime.getManifest().name;chrome.notifications.create("enableWebGL",{type:"basic",iconUrl:"/icon.png",title:u,message:"WebGL is disabled in Chrome. Enable it for Vysor to work properly.",isClickable:true,buttons:[{title:"Enable WebGL"}]})}}else{var d=Date.now();var f=d-o;if(f>60*1e3){o=d;v(f)}}if(!a||!c)return;t.drawNextOutputPicture(n,r,{left:0,top:0,width:Math.round(a),height:Math.round(c)},e)};nextTick(function(){this.onReadyForData()}.bind(this))}w.prototype.decode=function(e){this.avc.decode(e);this.onReadyForData()};function b(){var e;$("#listener").empty();common.createNaClModule("video_decode","pnacl","video_decode/pnacl/Release",o,r,{},function(t){if(t.data=="decoder-needs-input"){this.onReadyForData();var n=Date.now();if(!e){e=n;return}var o=n-e;if(o>60*1e3){e=n;v(o)}}}.bind(this),function(){common.naclModule.postMessage(window.acceleration||"software")}.bind(this));g()}b.prototype.decode=function(e){if(!common.naclModule||!common.naclModule.postMessage)return;common.naclModule.postMessage({buffer:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength})};window.docReady=function(){var e;$(document).on("dragover",function(t){$("#drag").fadeIn();clearTimeout(e);t.preventDefault();t.stopPropagation()});$(document).on("dragleave",function(){e=setTimeout(function(){$("#drag").fadeOut()},1e3)});$(document).on("drop",function(e){$("#drag").fadeOut();e.preventDefault();if(e.originalEvent.dataTransfer.files.length!=1){showNotification("You may only drag and drop one file at a time.");return}var t=e.originalEvent.dataTransfer.files[0];console.log(t);Adb.push({socketFactory:window.adbSocketFactory,socket:new FileSocket(t),file:"/sdcard/vysor/"+t.name,serialno:serialno},function(){var e="am start -a android.intent.action.VIEW -d file:/sdcard/vysor/"+t.name;if(t.type&&t.type.length){e+=" -t "+t.type}else if(t.name.endsWith(".apk")){Adb.shell({socketFactory:window.adbSocketFactory,command:"pm install -r /sdcard/vysor/"+t.name,serialno:serialno},function(e){showNotification("APK installation result: "+e.trim())});return}Adb.shell({socketFactory:window.adbSocketFactory,command:e,serialno:serialno},function(){showNotification("File has been transfered and is being opened on the Android.")})}.libind("Drag and Drop",this))});common.attachDefaultListeners();$("canvas, #listener").mouseup(function(e){if(e.button!=0)return;sendEvent({type:e.type,clientX:e.offsetX,clientY:e.offsetY})});$("canvas, #listener").bind("touchstart touchend touchmove",function(e){var t;if(e.type=="touchstart")t="mousedown";else if(e.type=="touchend")t="mouseup";else t="mousemove";var n=e.currentTarget;e.stopPropagation();e.preventDefault();e=e.originalEvent;var o=e.touches[0];if(!o)o=e.changedTouches[0];var r=document.createEvent("MouseEvent");r.initMouseEvent(t,true,true,window,e.detail,o.screenX,o.screenY,o.clientX,o.clientY,false,false,false,false,0,null);r.isTouch=true;n.dispatchEvent(r)});$("canvas, #listener").mousedown(function(e){l=Date.now();if(e.button==1){sendEvent({type:"home"});return}if(e.button==2){sendEvent({type:"back"});return}if(e.button!=0)return;sendEvent({type:e.type,clientX:e.offsetX,clientY:e.offsetY})});$("canvas, #listener").mousemove(function(e){if((e.buttons&1)==0&&!e.originalEvent.isTouch)return;sendEvent({type:e.type,clientX:e.offsetX,clientY:e.offsetY})});$(".head").bind("mouseup mousedown mousemove",function(e){e.stopPropagation();h()});$("#rotate-button").click(function(){sendEvent({type:"rotate"})});$("#pin-title-button").click(function(e){if(!u)u=36;else u=0;g();h();chrome.storage.local.set({"pin-title":u!=0});e.stopPropagation()});$("#settings-button").click(function(){openList()});$("#screenshot-button").click(function(){chrome.browser.openTab({url:"http://127.0.0.1:"+port+"/screenshot.jpg?password="+password})});if(!window.chrome||!window.chrome.app||!window.chrome.app.window)$("#screenshot-button").hide();$("#power").click(function(){sendEvent({type:"keycode",keycode:26})});$("#volume-down").click(function(){sendEvent({type:"keycode",keycode:25})});$("#volume-up").click(function(){sendEvent({type:"keycode",keycode:24})});$("#bottom-back").click(function(){sendEvent({type:"keycode",keycode:4})});$("#bottom-home").click(function(){sendEvent({type:"keycode",keycode:3})});$("#bottom-tasks").click(function(){sendEvent({type:"keycode",keycode:187})});if(window.chrome&&window.chrome.storage){chrome.storage.local.get(["pin-title","show-softkeys-"+chrome.app.window.current().id],function(e){var t=e["show-softkeys-"+chrome.app.window.current().id]!==false;if(t){d=48;$(".foot").show()}else{d=0;$(".foot").hide()}if(e["pin-title"]){
u=36;h()}g()})}else{$(".foot").show()}$("#softkey-button").click(function(){var e="show-softkeys-"+serialno;var t={};if($(".foot").is(":visible")){$(".foot").hide();d=0;t[e]=false}else{$(".foot").show();d=48;t[e]=true}if(window.chrome&&window.chrome.storage){chrome.storage.local.set(t)}g()});var t=function(){if(y()){if(document.exitFullscreen)document.exitFullscreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else if(document.mozExitFullscreen)document.mozExitFullscreen();else if(document.mskitExitFullscreen)document.mskitExitFullscreen()}else{if(document.documentElement.requestFullscreen)document.documentElement.requestFullscreen();else if(document.documentElement.webkitRequestFullscreen)document.documentElement.webkitRequestFullscreen();else if(document.documentElement.msRequestFullscreen)document.documentElement.msRequestFullscreen();else if(document.documentElement.mozRequestFullScreen)document.documentElement.mozRequestFullScreen()}};if(window.chrome&&window.chrome.app&&window.chrome.app.window)t=t.libind("Fullscreen Mode",this);$("#fullscreen-button").click(t)};window.connectionReady=function(){$("#loading").fadeIn();$("#dead").fadeOut();h();var e;function i(i){if(i.type=="displaySize"){var s=t;var a=n;t=i.screenWidth;n=i.screenHeight;m(s,a)}else if(i.type=="encodeSize"){o=i.encodeWidth;r=i.encodeHeight;if(!h264Socket){y();return}e=throttleTimeout(e,null,1e3,function(){h264Socket.onClose=null;h264Socket.destroy();h264Socket=null;y()})}else if(i.type=="clip"){copyTextToClipboard(i.clip)}}var s=0;var a=5;function c(){console.log("input websocket failed, retrying. attempt "+s+" out of "+a);setTimeout(u,2e3)}function u(){s++;if(s==a){p();return}d(function(e){if(!e){c();return}inputWebSocket=e;inputWebSocket.onopen=function(){console.log("input websocket opened");inputWebSocket.onerror=null;sendEvent({type:"password",password:password});sendEvent({type:"wakeup"})};inputWebSocket.onerror=c;inputWebSocket.onmessage=function(e){console.log(e.data);var t=JSON.parse(e.data);i(t)}})}var d;if(!window.port||window.adbSocketFactory){d=function(e){adbSocketFactory.newSocket("tcp:53518",function(t){if(!t){e();return}var n;var o=function(){if(!n)return;var e;if(n.length)e=n.shift();else n=null;if(e)writeLine(t,e,o)};t.close=t.destroy.bind(t);t.send=function(e){if(n){n.push(e);return}n=[];writeLine(t,e,o)}.bind(t);e(t);var r=false;t.onClose=function(){if(!r){if(t.onerror)t.onerror()}};function i(e){if(!r){r=true;if(t.onopen)t.onopen()}if(t.onmessage)t.onmessage({data:e});readLine(t,i)}readLine(t,i)})}}else{d=function(e){e(new WebSocket("ws://127.0.0.1:"+port+"/input","mirror-protocol"))}}if(!window.port){var f=getQueryVariable("registrationId");if(!f)return;var l;GcmRtcManager.start("64148182473","AIzaSyDd7k1v017osyYbIC92fyf-36s3pv0z73U",{iceServers:[{url:"turn:n0.clockworkmod.com",username:"foo",credential:"bar"},{url:"turn:n1.clockworkmod.com",username:"foo",credential:"bar"}]},function(e){console.log("attempting to connect to vysor from web");l=e;l.sharedDevices={};var t=getQueryVariable("channel");l.connect(f,t,function(e){console.log("web connection established");console.log(e);window.adbSocketFactory=e;console.log("starting remote vysor daemon");e.newSocket("webstart",function(e){console.log("waiting for password");readLine(e,function(t){e.destroy();console.log("got password",t);window.password=t;u()})})})});serialno="web"}$("#serialno").text(serialno);console.log("init");function p(e){console.log("received socket",e);if(h264Socket){h264Socket.destroy()}h264Socket=e;$(".overlay").fadeOut();if(!e){$("#dead").fadeIn();$("#listener").empty();return}e.name="h264";e.onClose=function(){try{$("#dead").fadeIn();$("#listener").empty()}catch(t){console.log("eating error that occurs with jquery if window is being closed...")}console.log("closing input ");if(inputWebSocket)inputWebSocket.close();inputWebSocket=null;if(h264Socket==e)h264Socket=null};var t=new b;var n;var o=false;var r=false;var i=function(){if(!n)return;if(n.length>30*10||r){n=n.slice(n.length-1,n.length);r=true}if(!o)return;if(r){r=false;console.log("requesting sync frame");sendEvent({type:"sync-frame"})}var e=n.shift();if(!n.length)n=null;o=false;t.decode(e)};var s=true;var a=function(e){var t=e.subarray(8);if(s){s=false;if(t[5]!=66&&t.byteLength>=6)showNotification("Your Android needs to send H264 Baseline by default. You may get this error and see a black screen if running a custom ROM.")}if(!n)n=[];n.push(t);i();u()};var c=function(t){if(t.byteLength!=4){throw new Error("WTF")}var n=new DataView(t.buffer,t.byteOffset,4);var o=n.getInt32(0,true);e.read(o,a)};var u=function(){e.read(4,c)};t.onReadyForData=function(){o=true;i()};var d=setTimeout(function(){showNotification("Your Android screen is unavailable right now. This can sometimes be resolved by rebooting your Android.")},5e3);e.read(4,function(e){clearTimeout(d);c(e);if(!window.chrome||!window.chrome.storage)return;chrome.storage.local.get("bitrate",function(e){var t=[5e5,75e4,1e6,15e5,2e6];var n=t[e.bitrate];sendEvent({type:"bitrate",bitrate:n})})})}function y(){if(window.adbSocketFactory){adbSocketFactory.newSocket("tcp:53517",function(e){if(!e){p();return}writeLine(e,password,function(){p(e)})})}else{console.log("fetch path");FetchSocket.connect("http://127.0.0.1:"+port+"/h264?password="+password,p)}}if(window.port)u()};if(window.chrome&&window.chrome.notifications){chrome.notifications.onButtonClicked.addListener(function(e,t){if(e=="enableWebGL"){chrome.browser.openTab({url:"https://github.com/koush/vysor.io/issues/3"})}});chrome.notifications.onClicked.addListener(function(e,t){if(e=="enableWebGL"){chrome.browser.openTab({url:"https://github.com/koush/vysor.io/issues/3"})}})}if(!window.chrome||!window.chrome.app||!window.chrome.app.window){$(document).ready(function(){window.docReady();window.connectionReady()})}})();