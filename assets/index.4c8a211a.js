const Uf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Uf();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw us(e)},us=function(t){return new Error("Firebase Database ("+Su.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ru(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Nu=function(t){const e=Ru(t);return ca.encodeByteArray(e,!0)},Au=function(t){return Nu(t).replace(/\./g,"")},_o=function(t){try{return ca.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){return Pu(void 0,t)}function Pu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bf(n)||(t[n]=Pu(t[n],e[n]));return t}function Bf(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ua(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Hf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ku(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vf(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ou(){return Su.NODE_ADMIN===!0}function jf(){return typeof indexedDB=="object"}function qf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="FirebaseError";class hs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=zf,Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Kf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hs(i,a,s)}}function Kf(t,e){return t.replace(Gf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Gf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Vs(_o(r[0])||""),n=Vs(_o(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Yf=function(t){const e=xu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qf=function(t){const e=xu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function go(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Pl(r)&&Pl(o)){if(!Vi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Pl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Xf(t,e){const n=new Zf(t,e);return n.subscribe.bind(n)}class Zf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ep(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Kr),i.error===void 0&&(i.error=Kr),i.complete===void 0&&(i.complete=Kr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ep(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kr(){}function fr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ui;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ip(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sp(t){return t===rn?void 0:t}function ip(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new np(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const op={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},ap=oe.INFO,lp={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},cp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=lp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ha{constructor(e){this.name=e,this._logLevel=ap,this._logHandler=cp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const up=(t,e)=>e.some(n=>t instanceof n);let kl,Ol;function hp(){return kl||(kl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dp(){return Ol||(Ol=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mu=new WeakMap,mo=new WeakMap,Du=new WeakMap,Gr=new WeakMap,da=new WeakMap;function fp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Gt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mu.set(n,t)}).catch(()=>{}),da.set(e,t),e}function pp(t){if(mo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mo.set(t,e)}let yo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Du.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _p(t){yo=t(yo)}function gp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Yr(this),e,...n);return Du.set(s,e.sort?e.sort():[e]),Gt(s)}:dp().includes(t)?function(...e){return t.apply(Yr(this),e),Gt(Mu.get(this))}:function(...e){return Gt(t.apply(Yr(this),e))}}function mp(t){return typeof t=="function"?gp(t):(t instanceof IDBTransaction&&pp(t),up(t,hp())?new Proxy(t,yo):t)}function Gt(t){if(t instanceof IDBRequest)return fp(t);if(Gr.has(t))return Gr.get(t);const e=mp(t);return e!==t&&(Gr.set(t,e),da.set(e,t)),e}const Yr=t=>da.get(t);function yp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Gt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Gt(o.result),l.oldVersion,l.newVersion,Gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const vp=["get","getKey","getAll","getAllKeys","count"],Ep=["put","add","delete","clear"],Qr=new Map;function xl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qr.get(e))return Qr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ep.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||vp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Qr.set(e,r),r}_p(t=>({...t,get:(e,n,s)=>xl(e,n)||t.get(e,n,s),has:(e,n)=>!!xl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vo="@firebase/app",Ml="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new ha("@firebase/app"),wp="@firebase/app-compat",Cp="@firebase/analytics-compat",Tp="@firebase/analytics",Sp="@firebase/app-check-compat",Rp="@firebase/app-check",Np="@firebase/auth",Ap="@firebase/auth-compat",Pp="@firebase/database",kp="@firebase/database-compat",Op="@firebase/functions",xp="@firebase/functions-compat",Mp="@firebase/installations",Dp="@firebase/installations-compat",Lp="@firebase/messaging",Fp="@firebase/messaging-compat",Up="@firebase/performance",Wp="@firebase/performance-compat",$p="@firebase/remote-config",Bp="@firebase/remote-config-compat",Hp="@firebase/storage",Vp="@firebase/storage-compat",jp="@firebase/firestore",qp="@firebase/firestore-compat",zp="firebase",Kp="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="[DEFAULT]",Gp={[vo]:"fire-core",[wp]:"fire-core-compat",[Tp]:"fire-analytics",[Cp]:"fire-analytics-compat",[Rp]:"fire-app-check",[Sp]:"fire-app-check-compat",[Np]:"fire-auth",[Ap]:"fire-auth-compat",[Pp]:"fire-rtdb",[kp]:"fire-rtdb-compat",[Op]:"fire-fn",[xp]:"fire-fn-compat",[Mp]:"fire-iid",[Dp]:"fire-iid-compat",[Lp]:"fire-fcm",[Fp]:"fire-fcm-compat",[Up]:"fire-perf",[Wp]:"fire-perf-compat",[$p]:"fire-rc",[Bp]:"fire-rc-compat",[Hp]:"fire-gcs",[Vp]:"fire-gcs-compat",[jp]:"fire-fst",[qp]:"fire-fst-compat","fire-js":"fire-js",[zp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map,Eo=new Map;function Yp(t,e){try{t.container.addComponent(e)}catch(n){fa.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(Eo.has(e))return fa.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,t);for(const n of ji.values())Yp(n,t);return!0}function pa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},yn=new hi("app","Firebase",Qp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=Kp;function Xp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Lu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw yn.create("bad-app-name",{appName:String(s)});const i=ji.get(s);if(i){if(Vi(t,i.options)&&Vi(n,i.config))return i;throw yn.create("duplicate-app",{appName:s})}const r=new rp(s);for(const a of Eo.values())r.addComponent(a);const o=new Jp(t,n,r);return ji.set(s,o),o}function Fu(t=Lu){const e=ji.get(t);if(!e)throw yn.create("no-app",{appName:t});return e}function Yt(t,e,n){var s;let i=(s=Gp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fa.warn(a.join(" "));return}Zn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="firebase-heartbeat-database",e_=1,js="firebase-heartbeat-store";let Jr=null;function Uu(){return Jr||(Jr=yp(Zp,e_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(js)}}}).catch(t=>{throw yn.create("storage-open",{originalErrorMessage:t.message})})),Jr}async function t_(t){var e;try{return(await Uu()).transaction(js).objectStore(js).get(Wu(t))}catch(n){throw yn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Dl(t,e){var n;try{const i=(await Uu()).transaction(js,"readwrite");return await i.objectStore(js).put(e,Wu(t)),i.done}catch(s){throw yn.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Wu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=1024,s_=30*24*60*60*1e3;class i_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new o_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=s_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ll(),{heartbeatsToSend:n,unsentEntries:s}=r_(this._heartbeatsCache.heartbeats),i=Au(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ll(){return new Date().toISOString().substring(0,10)}function r_(t,e=n_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class o_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jf()?qf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await t_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fl(t){return Au(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){Zn(new mn("platform-logger",e=>new Ip(e),"PRIVATE")),Zn(new mn("heartbeat",e=>new i_(e),"PRIVATE")),Yt(vo,Ml,t),Yt(vo,Ml,"esm2017"),Yt("fire-js","")}a_("");var l_="firebase",c_="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(l_,c_,"app");function _a(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u_=$u,Bu=new hi("auth","Firebase",$u());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new ha("@firebase/auth");function Oi(t,...e){Ul.logLevel<=oe.ERROR&&Ul.error(`Auth (${di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw ga(t,...e)}function pt(t,...e){return ga(t,...e)}function h_(t,e,n){const s=Object.assign(Object.assign({},u_()),{[e]:n});return new hi("auth","Firebase",s).create(e,{appName:t.name})}function ga(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Bu.create(t,...e)}function U(t,e,...n){if(!t)throw ga(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oi(e),new Error(e)}function Nt(t,e){t||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Map;function bt(t){Nt(t instanceof Function,"Expected a class definition");let e=Wl.get(t);return e?(Nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wl.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e){const n=pa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Vi(r,e!=null?e:{}))return i;st(i,"already-initialized")}return n.initialize({options:e})}function f_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function p_(){return $l()==="http:"||$l()==="https:"}function $l(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p_()||Hf()||"connection"in navigator)?navigator.onLine:!0}function g_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nt(n>e,"Short delay should be less than long delay!"),this.isMobile=ua()||ku()}get(){return __()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t,e){Nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new fi(3e4,6e4);function pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _i(t,e,n,s,i={}){return Vu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ds(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Hu.fetch()(ju(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Vu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},m_),e);try{const i=new v_(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ci(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ci(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ci(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw h_(t,u,c);st(t,u)}}catch(i){if(i instanceof hs)throw i;st(t,"network-request-failed")}}async function gi(t,e,n,s,i={}){const r=await _i(t,e,n,s,i);return"mfaPendingCredential"in r&&st(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ju(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ma(t.config,i):`${t.config.apiScheme}://${i}`}class v_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(pt(this.auth,"network-request-failed")),y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ci(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=pt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function I_(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b_(t,e=!1){const n=ot(t),s=await n.getIdToken(e),i=ya(s);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:xs(Xr(i.auth_time)),issuedAtTime:xs(Xr(i.iat)),expirationTime:xs(Xr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xr(t){return Number(t)*1e3}function ya(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const r=_o(s);return r?JSON.parse(r):(Oi("Failed to decode base64 JWT payload"),null)}catch(r){return Oi("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function w_(t){const e=ya(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hs&&C_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function C_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await qs(t,I_(n,{idToken:s}));U(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?N_(r.providerUserInfo):[],a=R_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function S_(t){const e=ot(t);await qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R_(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function N_(t){return t.map(e=>{var{providerId:n}=e,s=_a(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e){const n=await Vu(t,{},async()=>{const s=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ju(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):w_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await A_(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new zs;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=_a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return b_(this,e)}reload(){return S_(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await qi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qs(this,E_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:Q,isAnonymous:we,providerData:Ce,stsTokenManager:He}=n;U(V&&He,e,"internal-error");const xt=zs.fromJSON(this.name,He);U(typeof V=="string",e,"internal-error"),Mt(h,e.name),Mt(d,e.name),U(typeof Q=="boolean",e,"internal-error"),U(typeof we=="boolean",e,"internal-error"),Mt(_,e.name),Mt(m,e.name),Mt(A,e.name),Mt(S,e.name),Mt(P,e.name),Mt(F,e.name);const xe=new fn({uid:V,auth:e,email:d,emailVerified:Q,displayName:h,isAnonymous:we,photoURL:m,phoneNumber:_,tenantId:A,stsTokenManager:xt,createdAt:P,lastLoginAt:F});return Ce&&Array.isArray(Ce)&&(xe.providerData=Ce.map(at=>Object.assign({},at))),S&&(xe._redirectEventId=S),xe}static async _fromIdTokenResponse(e,n,s=!1){const i=new zs;i.updateFromServerResponse(n);const r=new fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await qi(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zu.type="NONE";const Bl=zu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e,n){return`firebase:${t}:${e}:${n}`}class Vn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xi(this.userKey,i.apiKey,r),this.fullPersistenceKey=xi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Vn(bt(Bl),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||bt(Bl);const o=xi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=fn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Vn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Vn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ju(e))return"Blackberry";if(Xu(e))return"Webos";if(va(e))return"Safari";if((e.includes("chrome/")||Gu(e))&&!e.includes("edge/"))return"Chrome";if(Qu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ku(t=Ae()){return/firefox\//i.test(t)}function va(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gu(t=Ae()){return/crios\//i.test(t)}function Yu(t=Ae()){return/iemobile/i.test(t)}function Qu(t=Ae()){return/android/i.test(t)}function Ju(t=Ae()){return/blackberry/i.test(t)}function Xu(t=Ae()){return/webos/i.test(t)}function _r(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P_(t=Ae()){var e;return _r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k_(){return Vf()&&document.documentMode===10}function Zu(t=Ae()){return _r(t)||Qu(t)||Xu(t)||Ju(t)||/windows phone/i.test(t)||Yu(t)}function O_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e=[]){let n;switch(t){case"Browser":n=Hl(Ae());break;case"Worker":n=`${Hl(Ae())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vl(this),this.idTokenSubscription=new Vl(this),this.beforeStateQueue=new x_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Vn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await qi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Vn.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function gr(t){return ot(t)}class Vl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xf(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function D_(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(t,e){return gi(t,"POST","/v1/accounts:signInWithPassword",pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",pi(t,e))}async function U_(t,e){return gi(t,"POST","/v1/accounts:signInWithEmailLink",pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Ea{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ks(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ks(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return L_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return F_(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return D_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return U_(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e){return gi(t,"POST","/v1/accounts:signInWithIdp",pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="http://localhost";class vn extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=_a(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new vn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,jn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jn(e,n)}buildRequest(){const e={requestUri:W_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B_(t){const e=As(Ps(t)).link,n=e?As(Ps(e)).deep_link_id:null,s=As(Ps(t)).deep_link_id;return(s?As(Ps(s)).link:null)||s||n||e||t}class Ia{constructor(e){var n,s,i,r,o,a;const l=As(Ps(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=$_((i=l.mode)!==null&&i!==void 0?i:null);U(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=B_(e);try{return new Ia(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Ks._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ia.parseLink(n);return U(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends th{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends mi{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Vt.credential(n,s)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends mi{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends mi{constructor(){super("twitter.com")}static credential(e,n){return vn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return qt.credential(n,s)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(t,e){return gi(t,"POST","/v1/accounts:signUp",pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await fn._fromIdTokenResponse(e,s,i),o=jl(s);return new En({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=jl(s);return new En({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function jl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends hs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new zi(e,n,s,i)}}function nh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(t,r,e,s):r})}async function V_(t,e,n=!1){const s=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await qs(t,nh(i,r,e,t),n);U(o.idToken,i,"internal-error");const a=ya(o.idToken);U(a,i,"internal-error");const{sub:l}=a;return U(t.uid===l,i,"user-mismatch"),En._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&st(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(t,e,n=!1){const s="signIn",i=await nh(t,s,e),r=await En._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function q_(t,e){return sh(gr(t),e)}async function z_(t,e,n){const s=gr(t),i=await H_(s,{returnSecureToken:!0,email:e,password:n}),r=await En._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function K_(t,e,n){return q_(ot(t),fs.credential(e,n))}function G_(t,e,n,s){return ot(t).onAuthStateChanged(e,n,s)}const Ki="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ki,"1"),this.storage.removeItem(Ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(){const t=Ae();return va(t)||_r(t)}const Q_=1e3,J_=10;class rh extends ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y_()&&O_(),this.fallbackToPolling=Zu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);k_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,J_):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rh.type="LOCAL";const X_=rh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oh.type="SESSION";const ah=oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new mr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Z_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ba("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function tg(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){return typeof _t().WorkerGlobalScope!="undefined"&&typeof _t().importScripts=="function"}async function ng(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ig(){return lh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="firebaseLocalStorageDb",rg=1,Gi="firebaseLocalStorage",uh="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yr(t,e){return t.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function og(){const t=indexedDB.deleteDatabase(ch);return new yi(t).toPromise()}function bo(){const t=indexedDB.open(ch,rg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Gi,{keyPath:uh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Gi)?e(s):(s.close(),await og(),e(await bo()))})})}async function ql(t,e,n){const s=yr(t,!0).put({[uh]:e,value:n});return new yi(s).toPromise()}async function ag(t,e){const n=yr(t,!1).get(e),s=await new yi(n).toPromise();return s===void 0?null:s.value}function zl(t,e){const n=yr(t,!0).delete(e);return new yi(n).toPromise()}const lg=800,cg=3;class hh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>cg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mr._getInstance(ig()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ng(),!this.activeServiceWorker)return;this.sender=new eg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bo();return await ql(e,Ki,"1"),await zl(e,Ki),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ql(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ag(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=yr(i,!1).getAll();return new yi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hh.type="LOCAL";const ug=hh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=pt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",hg().appendChild(s)})}function fg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new fi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e){return e?bt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _g(t){return sh(t.auth,new wa(t),t.bypassAuthState)}function gg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),j_(n,new wa(t),t.bypassAuthState)}async function mg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),V_(n,new wa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _g;case"linkViaPopup":case"linkViaRedirect":return mg;case"reauthViaPopup":case"reauthViaRedirect":return gg;default:st(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=new fi(2e3,1e4);class Bn extends dh{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,yg.get())};e()}}Bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="pendingRedirect",Mi=new Map;class Eg extends dh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const s=await Ig(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ig(t,e){const n=Cg(e),s=wg(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function bg(t,e){Mi.set(t._key(),e)}function wg(t){return bt(t._redirectPersistence)}function Cg(t){return xi(vg,t.config.apiKey,t.name)}async function Tg(t,e,n=!1){const s=gr(t),i=pg(s,e),o=await new Eg(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=10*60*1e3;class Rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ng(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fh(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kl(e))}saveEventToCache(e){this.cachedEventUids.add(Kl(e)),this.lastProcessedEventTime=Date.now()}}function Kl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ng(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kg=/^https?/;async function Og(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ag(t);for(const n of e)try{if(xg(n))return}catch{}st(t,"unauthorized-domain")}function xg(t){const e=Io(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!kg.test(n))return!1;if(Pg.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new fi(3e4,6e4);function Gl(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dg(t){return new Promise((e,n)=>{var s,i,r;function o(){Gl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gl(),n(pt(t,"network-request-failed"))},timeout:Mg.get()})}if(!((i=(s=_t().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=_t().gapi)===null||r===void 0)&&r.load)o();else{const a=fg("iframefcb");return _t()[a]=()=>{gapi.load?o():n(pt(t,"network-request-failed"))},dg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Di=null,e})}let Di=null;function Lg(t){return Di=Di||Dg(t),Di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new fi(5e3,15e3),Ug="__/auth/iframe",Wg="emulator/auth/iframe",$g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ma(e,Wg):`https://${t.config.authDomain}/${Ug}`,s={apiKey:e.apiKey,appName:t.name,v:di},i=Bg.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ds(s).slice(1)}`}async function Vg(t){const e=await Lg(t),n=_t().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Hg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$g,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),a=_t().setTimeout(()=>{r(o)},Fg.get());function l(){_t().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qg=500,zg=600,Kg="_blank",Gg="http://localhost";class Yl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yg(t,e,n,s=qg,i=zg){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jg),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ae().toLowerCase();n&&(a=Gu(c)?Kg:n),Ku(c)&&(e=e||Gg,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(P_(c)&&a!=="_self")return Qg(e||"",a),new Yl(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Yl(h)}function Qg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="__/auth/handler",Xg="emulator/auth/handler";function Ql(t,e,n,s,i,r){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:di,eventId:i};if(e instanceof th){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",go(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof mi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Zg(t)}?${ds(a).slice(1)}`}function Zg({config:t}){return t.emulator?ma(t,Xg):`https://${t.authDomain}/${Jg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="webStorageSupport";class em{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ah,this._completeRedirectFn=Tg,this._overrideRedirectResult=bg}async _openPopup(e,n,s,i){var r;Nt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ql(e,n,s,Io(),i);return Yg(e,o,ba())}async _openRedirect(e,n,s,i){return await this._originValidation(e),tg(Ql(e,n,s,Io(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Nt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Vg(e),s=new Rg(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zr,{type:Zr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Zr];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Og(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zu()||va()||_r()}}const tm=em;var Jl="@firebase/auth",Xl="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function im(t){Zn(new mn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{U(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eh(t)},u=new M_(a,l,c);return f_(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Zn(new mn("auth-internal",e=>{const n=gr(e.getProvider("auth").getImmediate());return(s=>new nm(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Jl,Xl,sm(t)),Yt(Jl,Xl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t=Fu()){const e=pa(t,"auth");return e.isInitialized()?e.getImmediate():d_(t,{popupRedirectResolver:tm,persistence:[ug,X_,ah]})}im("Browser");const Zl="@firebase/database",ec="0.13.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ph="";function rm(t){ph=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new om(e)}}catch{}return new am},hn=_h("localStorage"),wo=_h("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new ha("@firebase/database"),lm=function(){let t=1;return function(){return t++}}(),gh=function(t){const e=tp(t),n=new Jf;n.update(e);const s=n.digest();return ca.encodeByteArray(s)},vi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=vi.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let pn=null,tc=!0;const cm=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(qn.logLevel=oe.VERBOSE,pn=qn.log.bind(qn),e&&wo.set("logging_enabled",!0)):typeof t=="function"?pn=t:(pn=null,wo.remove("logging_enabled"))},Te=function(...t){if(tc===!0&&(tc=!1,pn===null&&wo.get("logging_enabled")===!0&&cm(!0)),pn){const e=vi.apply(null,t);pn(e)}},Ei=function(t){return function(...e){Te(t,...e)}},Co=function(...t){const e="FIREBASE INTERNAL ERROR: "+vi(...t);qn.error(e)},In=function(...t){const e=`FIREBASE FATAL ERROR: ${vi(...t)}`;throw qn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+vi(...t);qn.warn(e)},um=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ca=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},es="[MIN_NAME]",bn="[MAX_NAME]",Rn=function(t,e){if(t===e)return 0;if(t===es||e===bn)return-1;if(e===es||t===bn)return 1;{const n=nc(t),s=nc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},dm=function(t,e){return t===e?0:t<e?-1:1},ws=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Ta=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=Ta(t[e[s]]);return n+="}",n},mh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yh=function(t){b(!Ca(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},fm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _m(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const gm=new RegExp("^-?(0*)\\d{1,10}$"),mm=-2147483648,ym=2147483647,nc=function(t){if(gm.test(t)){const e=Number(t);if(e>=mm&&e<=ym)return e}return null},ps=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},vm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ms=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class To{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}To.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="5",vh="v",Eh="s",Ih="r",bh="f",wh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ch="ls",Th="p",So="ac",Sh="websocket",Rh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Nh(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Sh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Rh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wm(t)&&(n.ns=t.namespace);const i=[];return Re(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.counters_={}}incrementCounter(e,n=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $f(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo={},to={};function Ra(t){const e=t.toString();return eo[e]||(eo[e]=new Cm),eo[e]}function Tm(t,e){const n=t.toString();return to[n]||(to[n]=e()),to[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ps(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="start",Rm="close",Nm="pLPCommand",Am="pRTLPCB",Ah="id",Ph="pw",kh="ser",Pm="cb",km="seg",Om="ts",xm="d",Mm="dframe",Oh=1870,xh=30,Dm=Oh-xh,Lm=25e3,Fm=3e4;class Hn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ei(e),this.stats_=Ra(n),this.urlFn=l=>(this.appCheckToken&&(l[So]=this.appCheckToken),Nh(n,Rh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Sm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fm)),hm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Na((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sc)this.id=a,this.password=l;else if(o===Rm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[sc]="t",s[kh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Pm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vh]=Sa,this.transportSessionId&&(s[Eh]=this.transportSessionId),this.lastSessionId&&(s[Ch]=this.lastSessionId),this.applicationId&&(s[Th]=this.applicationId),this.appCheckToken&&(s[So]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&wh.test(location.hostname)&&(s[Ih]=bh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hn.forceAllow_=!0}static forceDisallow(){Hn.forceDisallow_=!0}static isAvailable(){return Hn.forceAllow_?!0:!Hn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!fm()&&!pm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nu(n),i=mh(s,Dm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Mm]="t",s[Ah]=e,s[Ph]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Na{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lm(),window[Nm+this.uniqueCallbackIdentifier]=e,window[Am+this.uniqueCallbackIdentifier]=n,this.myIFrame=Na.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ah]=this.myID,e[Ph]=this.myPW,e[kh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xh+s.length<=Oh;){const o=this.pendingSegs.shift();s=s+"&"+km+i+"="+o.seg+"&"+Om+i+"="+o.ts+"&"+xm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Lm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=16384,Wm=45e3;let Yi=null;typeof MozWebSocket!="undefined"?Yi=MozWebSocket:typeof WebSocket!="undefined"&&(Yi=WebSocket);class Ye{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ei(this.connId),this.stats_=Ra(n),this.connURL=Ye.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vh]=Sa,typeof location!="undefined"&&location.hostname&&wh.test(location.hostname)&&(o[Ih]=bh),n&&(o[Eh]=n),s&&(o[Ch]=s),i&&(o[So]=i),r&&(o[Th]=r),Nh(e,Sh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,hn.set("previous_websocket_failure",!0);try{let s;Ou(),this.mySock=new Yi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Yi!==null&&!Ye.forceDisallow_}static previouslyFailed(){return hn.isInMemoryStorage||hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Vs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mh(n,Um);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hn,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ye&&Ye.isAvailable();let s=n&&!Ye.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const i=this.transports_=[];for(const r of Ys.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ys.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ys.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=6e4,Bm=5e3,Hm=10*1024,Vm=100*1024,no="t",ic="d",jm="s",rc="r",qm="e",oc="o",ac="a",lc="n",cc="p",zm="h";class Km{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ei("c:"+this.id+":"),this.transportManager_=new Ys(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ms(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(no in e){const n=e[no];n===ac?this.upgradeIfSecondaryHealthy_():n===rc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===oc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ac,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ws(no,e);if(ic in e){const s=e[ic];if(n===zm)this.onHandshake_(s);else if(n===lc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jm?this.onConnectionShutdown_(s):n===rc?this.onReset_(s):n===qm?Co("Server Error: "+s):n===oc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Co("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sa!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ms(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($m))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ms(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Dh{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ua()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=32,hc=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ee("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zt(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Aa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Gm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function fe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return De(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ym(t,e){const n=Qs(t,0),s=Qs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Rn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Pa(t,e){if(Zt(t)!==Zt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Zt(t)>Zt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Qm{constructor(e,n){this.errorPrefix_=n,this.parts_=Qs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=pr(this.parts_[s]);Fh(this)}}function Jm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pr(e),Fh(t)}function Xm(t){const e=t.parts_.pop();t.byteLength_-=pr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fh(t){if(t.byteLength_>hc)throw new Error(t.errorPrefix_+"has a key path longer than "+hc+" bytes ("+t.byteLength_+").");if(t.parts_.length>uc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+uc+") or object contains a cycle "+on(t))}function on(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends Dh{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ka}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,Zm=60*5*1e3,dc=30*1e3,ey=1.3,ty=3e4,ny="server_kill",fc=3;class Tt extends Mh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Tt.nextPersistentConnectionId_++,this.log_=Ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=Zm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ou())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ka.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ui,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Tt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mt(e,"w")){const s=Xn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Yf(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Co("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ty&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ey)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Km(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(ny)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],go(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ta(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fc&&(this.reconnectDelay_=dc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ph.replace(/\./g,"-")]=1,ua()?e["framework.cordova"]=1:ku()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qi.getInstance().currentlyOnline();return go(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(es,e),i=new q(es,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;class Uh extends vr{static get __EMPTY_NODE(){return Ti}static set __EMPTY_NODE(e){Ti=e}compare(e,n){return Rn(e.name,n.name)}isDefinedOn(e){throw us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(bn,Ti)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Ti)}toString(){return".key"}}const zn=new Uh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ve.RED,this.left=i!=null?i:Le.EMPTY_NODE,this.right=r!=null?r:Le.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class sy{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Si(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Si(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Si(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Si(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new sy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){return Rn(t.name,e.name)}function Oa(t,e){return Rn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;function ry(t){Ro=t}const Wh=function(t){return typeof t=="number"?"number:"+yh(t):"string:"+t},$h=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mt(e,".sv"),"Priority must be a string or number.")}else b(t===Ro||t.isEmpty(),"priority of unexpected type.");b(t===Ro||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$h(this.priorityNode_)}static set __childrenNodeConstructor(e){pc=e}static get __childrenNodeConstructor(){return pc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:j(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Zt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yh(this.value_):e+=this.value_,this.lazyHash_=gh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh,Hh;function oy(t){Bh=t}function ay(t){Hh=t}class ly extends vr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(bn,new ye("[PRIORITY-POST]",Hh))}makePost(e,n){const s=Bh(e);return new q(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=Math.log(2);class uy{constructor(e){const n=r=>parseInt(Math.log(r)/cy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ji=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ve(d,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),A=i(_+1,c);return h=t[_],d=n?n(h):h,new ve(d,h.node,ve.BLACK,m,A)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,A){const S=h-m,P=h;h-=m;const F=i(S+1,P),V=t[S],Q=n?n(V):V;_(new ve(Q,V.node,A,null,F))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const A=l.nextBitIsOne(),S=Math.pow(2,l.count-(m+1));A?d(S,ve.BLACK):(d(S,ve.BLACK),d(S,ve.RED))}return u},o=new uy(t.length),a=r(o);return new Le(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;const Dn={};class wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Dn&&pe,"ChildrenNode.ts has not been loaded"),so=so||new wt({".priority":Dn},{".priority":pe}),so}get(e){const n=Xn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==zn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ji(s,e.getCompare()):a=Dn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new wt(u,c)}addToIndexes(e,n){const s=Hi(this.indexes_,(i,r)=>{const o=Xn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Dn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ji(a,o.getCompare())}else return Dn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Hi(this.indexes_,i=>{if(i===Dn)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new wt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$h(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ts||(Ts=new L(new Le(Oa),null,wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ts}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ts:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ts:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{b(j(e)!==".priority"||Zt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(he(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,a)=>{n[o]=a.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wh(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ii?-1:0}withIndex(e){if(e===zn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===zn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hy extends L{constructor(){super(new Le(Oa),L.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ii=new hy;Object.defineProperties(q,{MIN:{value:new q(es,L.EMPTY_NODE)},MAX:{value:new q(bn,Ii)}});Uh.__EMPTY_NODE=L.EMPTY_NODE;ye.__childrenNodeConstructor=L;ry(Ii);ay(Ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=!0;function Ee(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,Ee(e))}if(!(t instanceof Array)&&dy){const n=[];let s=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return L.EMPTY_NODE;const r=Ji(n,iy,o=>o.name,Oa);if(s){const o=Ji(n,pe.getCompare());return new L(r,Ee(e),new wt({".priority":o},{".priority":pe}))}else return new L(r,Ee(e),wt.Default)}else{let n=L.EMPTY_NODE;return Re(t,(s,i)=>{if(mt(t,s)&&s.substring(0,1)!=="."){const r=Ee(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ee(e))}}oy(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends vr{constructor(e){super(),this.indexPath_=e,b(!K(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Rn(e.name,n.name):r}makePost(e,n){const s=Ee(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ii);return new q(bn,e)}toString(){return Qs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends vr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Rn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=Ee(e);return new q(n,s)}toString(){return".value"}}const _y=new py;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",gy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=_c.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=_c.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){return{type:"value",snapshotNode:t}}function ts(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Js(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function my(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Js(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ts(n,s)):o.trackChildChange(Xs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Js(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Xs(i,r,o))}else s.trackChildChange(ts(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.indexedFilter_=new xa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zs.getStartPost_(e),this.endPost_=Zs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,a)=>{r.matches(new q(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.rangedFilter_=new Zs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,_)=>h(_,d)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:i=i.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Xs(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Js(n,h));const A=a.updateImmediateChild(n,L.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ts(d.name,d.node)),A.updateImmediateChild(d.name,d.node)):A}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Js(c.name,c.node)),r.trackChildChange(ts(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:es}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new Ma;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vy(t){return t.loadsAllData()?new xa(t.getIndex()):t.hasLimit()?new yy(t):new Zs(t)}function gc(t){const e={};if(t.isDefault())return e;let n;return t.index_===pe?n="$priority":t.index_===_y?n="$value":t.index_===zn?n="$key":(b(t.index_ instanceof fy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_&&(e.startAt=Ie(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ie(t.indexStartName_))),t.endSet_&&(e.endAt=Ie(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ie(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function mc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Mh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ei("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Xi.getListenId_(e,s),a={};this.listens_[o]=a;const l=gc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Xn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Xi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=gc(e._queryParams),s=e._path.toString(),i=new ui;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Vs(a.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){return{value:null,children:new Map}}function jh(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,Zi());const i=t.children.get(s);e=he(e),jh(i,e,n)}}function No(t,e,n){t.value!==null?n(e,t.value):Iy(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);No(i,r,n)})}function Iy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=10*1e3,wy=30*1e3,Cy=5*60*1e3;class Ty{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new by(e);const s=yc+(wy-yc)*Math.random();Ms(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Re(e,(i,r)=>{r>0&&mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ms(this.reportStats_.bind(this),Math.floor(Math.random()*2*Cy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function Da(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function La(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Je.ACK_USER_WRITE,this.source=Da()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new er(X(),n,this.revert)}}else return b(j(this.path)===e,"operationForChild called for unrelated child."),new er(he(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.source=e,this.path=n,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new ei(this.source,X()):new ei(this.source,he(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Je.OVERWRITE}operationForChild(e){return K(this.path)?new wn(this.source,X(),this.snap.getImmediateChild(e)):new wn(this.source,he(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Je.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new wn(this.source,X(),n.value):new ns(this.source,X(),n)}else return b(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ns(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ry(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(my(o.childName,o.snapshotNode))}),Ss(t,i,"child_removed",e,s,n),Ss(t,i,"child_added",e,s,n),Ss(t,i,"child_moved",r,s,n),Ss(t,i,"child_changed",e,s,n),Ss(t,i,"value",e,s,n),i}function Ss(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ay(t,a,l)),o.forEach(a=>{const l=Ny(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Ny(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ay(t,e,n){if(e.childName==null||n.childName==null)throw us("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){return{eventCache:t,serverCache:e}}function Ds(t,e,n,s){return Er(new Cn(e,n,s),t.serverCache)}function qh(t,e,n,s){return Er(t.eventCache,new Cn(e,n,s))}function Ao(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;const Py=()=>(io||(io=new Le(dm)),io);class ue{constructor(e,n=Py()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Re(e,(s,i)=>{n=n.set(new ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(K(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(he(e),n);return r!=null?{path:fe(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(he(e)):new ue(null)}}set(e,n){if(K(e))return new ue(n,this.children);{const s=j(e),r=(this.children.get(s)||new ue(null)).set(he(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(he(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(he(e)):null}}setTree(e,n){if(K(e))return n;{const s=j(e),r=(this.children.get(s)||new ue(null)).setTree(he(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(fe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(he(e),fe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(he(e),fe(n,i),s):new ue(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(fe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ue(null))}}function Ls(t,e,n){if(K(e))return new et(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function Po(t,e,n){let s=t;return Re(n,(i,r)=>{s=Ls(s,fe(e,i),r)}),s}function vc(t,e){if(K(e))return et.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new et(n)}}function ko(t,e){return Nn(t,e)!=null}function Nn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Ec(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Qt(t,e){if(K(e))return t;{const n=Nn(t,e);return n!=null?new et(new ue(n)):new et(t.writeTree_.subtree(e))}}function Oo(t){return t.writeTree_.isEmpty()}function ss(t,e){return zh(X(),t.writeTree_,e)}function zh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=zh(fe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(fe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t,e){return Qh(e,t)}function ky(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ls(t.visibleWrites,e,n)),t.lastWriteId=s}function Oy(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Po(t.visibleWrites,e,n),t.lastWriteId=s}function xy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function My(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Dy(a,s.path)?i=!1:qe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Ly(t),!0;if(s.snap)t.visibleWrites=vc(t.visibleWrites,s.path);else{const a=s.children;Re(a,l=>{t.visibleWrites=vc(t.visibleWrites,fe(s.path,l))})}return!0}else return!1}function Dy(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(fe(t.path,n),e))return!0;return!1}function Ly(t){t.visibleWrites=Kh(t.allWrites,Fy,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Fy(t){return t.visible}function Kh(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)qe(n,o)?(a=De(n,o),s=Ls(s,a,r.snap)):qe(o,n)&&(a=De(o,n),s=Ls(s,X(),r.snap.getChild(a)));else if(r.children){if(qe(n,o))a=De(n,o),s=Po(s,a,r.children);else if(qe(o,n))if(a=De(o,n),K(a))s=Po(s,X(),r.children);else{const l=Xn(r.children,j(a));if(l){const c=l.getChild(he(a));s=Ls(s,X(),c)}}}else throw us("WriteRecord should have .snap or .children")}}return s}function Gh(t,e,n,s,i){if(!s&&!i){const r=Nn(t.visibleWrites,e);if(r!=null)return r;{const o=Qt(t.visibleWrites,e);if(Oo(o))return n;if(n==null&&!ko(o,X()))return null;{const a=n||L.EMPTY_NODE;return ss(o,a)}}}else{const r=Qt(t.visibleWrites,e);if(!i&&Oo(r))return n;if(!i&&n==null&&!ko(r,X()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(qe(c.path,e)||qe(e,c.path))},a=Kh(t.allWrites,o,e),l=n||L.EMPTY_NODE;return ss(a,l)}}}function Uy(t,e,n){let s=L.EMPTY_NODE;const i=Nn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Qt(t.visibleWrites,e);return n.forEachChild(pe,(o,a)=>{const l=ss(Qt(r,new ee(o)),a);s=s.updateImmediateChild(o,l)}),Ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qt(t.visibleWrites,e);return Ec(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Wy(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=fe(e,n);if(ko(t.visibleWrites,r))return null;{const o=Qt(t.visibleWrites,r);return Oo(o)?i.getChild(n):ss(o,i.getChild(n))}}function $y(t,e,n,s){const i=fe(e,n),r=Nn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Qt(t.visibleWrites,i);return ss(o,s.getNode().getImmediateChild(n))}else return null}function By(t,e){return Nn(t.visibleWrites,e)}function Hy(t,e,n,s,i,r,o){let a;const l=Qt(t.visibleWrites,e),c=Nn(l,X());if(c!=null)a=c;else if(n!=null)a=ss(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Vy(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function tr(t,e,n,s){return Gh(t.writeTree,t.treePath,e,n,s)}function Wa(t,e){return Uy(t.writeTree,t.treePath,e)}function Ic(t,e,n,s){return Wy(t.writeTree,t.treePath,e,n,s)}function nr(t,e){return By(t.writeTree,fe(t.treePath,e))}function jy(t,e,n,s,i,r){return Hy(t.writeTree,t.treePath,e,n,s,i,r)}function $a(t,e,n){return $y(t.writeTree,t.treePath,e,n)}function Yh(t,e){return Qh(fe(t.treePath,e),t.writeTree)}function Qh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Xs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Js(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ts(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Xs(s,e.snapshotNode,i.oldSnap));else throw us("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Jh=new zy;class Ba{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $a(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tn(this.viewCache_),r=jy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){return{filter:t}}function Gy(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Yy(t,e,n,s,i){const r=new qy;let o,a;if(n.type===Je.OVERWRITE){const c=n;c.source.fromUser?o=xo(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=sr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Je.MERGE){const c=n;c.source.fromUser?o=Jy(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Mo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Je.ACK_USER_WRITE){const c=n;c.revert?o=ev(t,e,c.path,s,i,r):o=Xy(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Je.LISTEN_COMPLETE)o=Zy(t,e,n.path,s,r);else throw us("Unknown operation type: "+n.type);const l=r.getChanges();return Qy(e,o,l),{viewCache:o,changes:l}}function Qy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ao(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Vh(Ao(e)))}}function Xh(t,e,n,s,i,r){const o=e.eventCache;if(nr(s,n)!=null)return e;{let a,l;if(K(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Tn(e),u=c instanceof L?c:L.EMPTY_NODE,h=Wa(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=tr(s,Tn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){b(Zt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ic(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=he(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ic(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=$a(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ds(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function sr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=j(n);if(!l.isCompleteForPath(n)&&Zt(n)>1)return e;const m=he(n),S=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),_,S,m,Jh,null)}const h=qh(e,c,l.isFullyInitialized()||K(n),u.filtersNodes()),d=new Ba(i,h,r);return Xh(t,h,n,i,d,a)}function xo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ba(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ds(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ds(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=he(n),_=a.getNode().getImmediateChild(h);let m;if(K(d))m=s;else{const A=u.getCompleteChild(h);A!=null?Aa(d)===".priority"&&A.getChild(Lh(d)).isEmpty()?m=A:m=A.updateChild(d,s):m=L.EMPTY_NODE}if(_.equals(m))l=e;else{const A=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Ds(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function bc(t,e){return t.eventCache.isCompleteForChild(e)}function Jy(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=fe(n,l);bc(e,j(u))&&(a=xo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=fe(n,l);bc(e,j(u))||(a=xo(t,a,u,c,i,r,o))}),a}function wc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Mo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;K(n)?c=s:c=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=wc(t,_,d);l=sr(t,l,new ee(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),A=wc(t,m,d);l=sr(t,l,new ee(h),A,i,r,o,a)}}),l}function Xy(t,e,n,s,i,r,o){if(nr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return sr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(K(n)){let c=new ue(null);return l.getNode().forEachChild(zn,(u,h)=>{c=c.set(new ee(u),h)}),Mo(t,e,n,c,i,r,a,o)}else return e}else{let c=new ue(null);return s.foreach((u,h)=>{const d=fe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Mo(t,e,n,c,i,r,a,o)}}function Zy(t,e,n,s,i){const r=e.serverCache,o=qh(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Xh(t,o,n,s,Jh,i)}function ev(t,e,n,s,i,r){let o;if(nr(s,n)!=null)return e;{const a=new Ba(s,e,i),l=e.eventCache.getNode();let c;if(K(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=tr(s,Tn(e));else{const h=e.serverCache.getNode();b(h instanceof L,"serverChildren would be complete if leaf node"),u=Wa(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=j(n);let h=$a(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,he(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,L.EMPTY_NODE,he(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=tr(s,Tn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||nr(s,X())!=null,Ds(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new xa(s.getIndex()),r=vy(s);this.processor_=Ky(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new Cn(l,o.isFullyInitialized(),i.filtersNodes()),h=new Cn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Er(h,u),this.eventGenerator_=new Sy(this.query_)}get query(){return this.query_}}function nv(t){return t.viewCache_.serverCache.getNode()}function sv(t,e){const n=Tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Cc(t){return t.eventRegistrations_.length===0}function iv(t,e){t.eventRegistrations_.push(e)}function Tc(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Sc(t,e,n,s){e.type===Je.MERGE&&e.source.queryId!==null&&(b(Tn(t.viewCache_),"We should always have a full cache before handling merges"),b(Ao(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Yy(t.processor_,i,e,n,s);return Gy(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(ts(r,o))}),n.isFullyInitialized()&&s.push(Vh(n.getNode())),Zh(t,s,n.getNode(),e)}function Zh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ry(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;class ov{constructor(){this.views=new Map}}function av(t){b(!ir,"__referenceConstructor has already been defined"),ir=t}function lv(){return b(ir,"Reference.ts has not been loaded"),ir}function cv(t){return t.views.size===0}function Ha(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Sc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Sc(o,e,n,s));return r}}function uv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=tr(n,i?s:null),l=!1;a?l=!0:s instanceof L?(a=Wa(n,s),l=!1):(a=L.EMPTY_NODE,l=!1);const c=Er(new Cn(a,l,!1),new Cn(s,i,!1));return new tv(e,c)}return o}function hv(t,e,n,s,i,r){const o=uv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),iv(o,n),rv(o,n)}function dv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=en(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Tc(c,n,s)),Cc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Tc(l,n,s)),Cc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!en(t)&&r.push(new(lv())(e._repo,e._path)),{removed:r,events:o}}function ed(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Kn(t,e){let n=null;for(const s of t.views.values())n=n||sv(s,e);return n}function td(t,e){if(e._queryParams.loadsAllData())return Ir(t);{const s=e._queryIdentifier;return t.views.get(s)}}function nd(t,e){return td(t,e)!=null}function en(t){return Ir(t)!=null}function Ir(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr;function fv(t){b(!rr,"__referenceConstructor has already been defined"),rr=t}function pv(){return b(rr,"Reference.ts has not been loaded"),rr}let _v=1;class Rc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Vy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sd(t,e,n,s,i){return ky(t.pendingWriteTree_,e,n,s,i),i?_s(t,new wn(Da(),e,n)):[]}function gv(t,e,n,s){Oy(t.pendingWriteTree_,e,n,s);const i=ue.fromObject(n);return _s(t,new ns(Da(),e,i))}function zt(t,e,n=!1){const s=xy(t.pendingWriteTree_,e);if(My(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(X(),!0):Re(s.children,o=>{r=r.set(new ee(o),!0)}),_s(t,new er(s.path,r,n))}else return[]}function br(t,e,n){return _s(t,new wn(La(),e,n))}function mv(t,e,n){const s=ue.fromObject(n);return _s(t,new ns(La(),e,s))}function yv(t,e){return _s(t,new ei(La(),e))}function vv(t,e,n){const s=ja(t,n);if(s){const i=qa(s),r=i.path,o=i.queryId,a=De(r,e),l=new ei(Fa(o),a);return za(t,r,l)}else return[]}function Do(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||nd(r,e))){const a=dv(r,e,n,s);cv(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,d)=>en(d));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=wv(h);for(let _=0;_<d.length;++_){const m=d[_],A=m.query,S=od(t,m);t.listenProvider_.startListening(Fs(A),or(t,A),S.hashFn,S.onComplete)}}}!u&&l.length>0&&!s&&(c?t.listenProvider_.stopListening(Fs(e),null):l.forEach(h=>{const d=t.queryToTagMap.get(wr(h));t.listenProvider_.stopListening(Fs(h),d)})),Cv(t,l)}return o}function Ev(t,e,n,s){const i=ja(t,s);if(i!=null){const r=qa(i),o=r.path,a=r.queryId,l=De(o,e),c=new wn(Fa(a),l,n);return za(t,o,c)}else return[]}function Iv(t,e,n,s){const i=ja(t,s);if(i){const r=qa(i),o=r.path,a=r.queryId,l=De(o,e),c=ue.fromObject(n),u=new ns(Fa(a),l,c);return za(t,o,u)}else return[]}function bv(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=De(c,n);s=s||Kn(u,h),i=i||en(u)});let r=e.syncPointTree_.get(n);r?(i=i||en(r),s=s||Kn(r,X())):(r=new ov,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=L.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const d=Kn(h,X());d&&(s=s.updateImmediateChild(u,d))}));const a=nd(r,t);if(!a&&!t._queryParams.loadsAllData()){const c=wr(t);b(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=Tv();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const l=Ua(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:l,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:a}}function Nc(t,e,n){const{syncPoint:s,serverCache:i,writesCache:r,serverCacheComplete:o,viewAlreadyExists:a,foundAncestorDefaultView:l}=bv(e,t);let c=hv(s,e,n,r,i,o);if(!a&&!l){const u=td(s,e);c=c.concat(Sv(t,e,u))}return c}function Va(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=De(o,e),c=Kn(a,l);if(c)return c});return Gh(i,e,r,n,!0)}function _s(t,e){return id(e,t.syncPointTree_,null,Ua(t.pendingWriteTree_,X()))}function id(t,e,n,s){if(K(t.path))return rd(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=Kn(i,X()));let r=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Yh(s,o);r=r.concat(id(a,l,c,u))}return i&&(r=r.concat(Ha(i,t,s,n))),r}}function rd(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=Kn(i,X()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Yh(s,o),u=t.operationForChild(o);u&&(r=r.concat(rd(u,a,l,c)))}),i&&(r=r.concat(Ha(i,t,s,n))),r}function od(t,e){const n=e.query,s=or(t,n);return{hashFn:()=>(nv(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vv(t,n._path,s):yv(t,n._path);{const r=_m(i,n);return Do(t,n,null,r)}}}}function or(t,e){const n=wr(e);return t.queryToTagMap.get(n)}function wr(t){return t._path.toString()+"$"+t._queryIdentifier}function ja(t,e){return t.tagToQueryMap.get(e)}function qa(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function za(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Ua(t.pendingWriteTree_,e);return Ha(s,n,i,null)}function wv(t){return t.fold((e,n,s)=>{if(n&&en(n))return[Ir(n)];{let i=[];return n&&(i=ed(n)),Re(s,(r,o)=>{i=i.concat(o)}),i}})}function Fs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pv())(t._repo,t._path):t}function Cv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=wr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Tv(){return _v++}function Sv(t,e,n){const s=e._path,i=or(t,e),r=od(t,n),o=t.listenProvider_.startListening(Fs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)b(!en(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!K(c)&&u&&en(u))return[Ir(u).query];{let d=[];return u&&(d=d.concat(ed(u).map(_=>_.query))),Re(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Fs(u),or(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ka(n)}node(){return this.node_}}class Ga{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new Ga(this.syncTree_,n)}node(){return Va(this.syncTree_,this.path_)}}const Rv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ac=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Av(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Av=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ad=function(t,e,n,s){return Ya(e,new Ga(n,t),s)},ld=function(t,e,n){return Ya(t,new Ka(e),n)};function Ya(t,e,n){const s=t.getPriority().val(),i=Ac(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ac(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,Ee(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(pe,(a,l)=>{const c=Ya(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ja(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=j(n);for(;i!==null;){const r=Xn(s.node.children,i)||{children:{},childCount:0};s=new Qa(i,s,r),n=he(n),i=j(n)}return s}function gs(t){return t.node.value}function cd(t,e){t.node.value=e,Lo(t)}function ud(t){return t.node.childCount>0}function Pv(t){return gs(t)===void 0&&!ud(t)}function Cr(t,e){Re(t.node.children,(n,s)=>{e(new Qa(n,t,s))})}function hd(t,e,n,s){n&&!s&&e(t),Cr(t,i=>{hd(i,e,!0,s)}),n&&s&&e(t)}function kv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bi(t){return new ee(t.parent===null?t.name:bi(t.parent)+"/"+t.name)}function Lo(t){t.parent!==null&&Ov(t.parent,t.name,t)}function Ov(t,e,n){const s=Pv(n),i=mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Lo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Lo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=/[\[\].#$\/\u0000-\u001F\u007F]/,Mv=/[\[\].#$\u0000-\u001F\u007F]/,ro=10*1024*1024,Xa=function(t){return typeof t=="string"&&t.length!==0&&!xv.test(t)},dd=function(t){return typeof t=="string"&&t.length!==0&&!Mv.test(t)},Dv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dd(t)},Lv=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ca(t)||t&&typeof t=="object"&&mt(t,".sv")},fd=function(t,e,n,s){s&&e===void 0||Tr(fr(t,"value"),e,n)},Tr=function(t,e,n){const s=n instanceof ee?new Qm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+on(s));if(typeof e=="function")throw new Error(t+"contains a function "+on(s)+" with contents = "+e.toString());if(Ca(e))throw new Error(t+"contains "+e.toString()+" "+on(s));if(typeof e=="string"&&e.length>ro/3&&pr(e)>ro)throw new Error(t+"contains a string greater than "+ro+" utf8 bytes "+on(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Re(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Xa(o)))throw new Error(t+" contains an invalid key ("+o+") "+on(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jm(s,o),Tr(t,a,s),Xm(s)}),i&&r)throw new Error(t+' contains ".value" child '+on(s)+" in addition to actual children.")}},Fv=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Qs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Xa(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ym);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&qe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Uv=function(t,e,n,s){if(s&&e===void 0)return;const i=fr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Re(e,(o,a)=>{const l=new ee(o);if(Tr(i,a,fe(n,l)),Aa(l)===".priority"&&!Lv(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Fv(i,r)},pd=function(t,e,n,s){if(!(s&&n===void 0)&&!dd(n))throw new Error(fr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Wv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pd(t,e,n,s)},_d=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$v=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Dv(n))throw new Error(fr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sr(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Pa(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function gd(t,e,n){Sr(t,n),md(t,s=>Pa(s,e))}function it(t,e,n){Sr(t,n),md(t,s=>qe(s,e)||qe(e,s))}function md(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Hv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Hv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();pn&&Te("event: "+n.toString()),ps(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="repo_interrupt",jv=25;class qv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zi(),this.transactionQueueTree_=new Qa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zv(t,e,n){if(t.stats_=Ra(t.repoInfo_),t.forceRestClient_||vm())t.server_=new Xi(t.repoInfo_,(s,i,r,o)=>{Pc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kc(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(s,i,r,o)=>{Pc(t,s,i,r,o)},s=>{kc(t,s)},s=>{Kv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Tm(t.repoInfo_,()=>new Ty(t.stats_,t.server_)),t.infoData_=new Ey,t.infoSyncTree_=new Rc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=br(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Za(t,"connected",!1),t.serverSyncTree_=new Rc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);it(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function yd(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Rr(t){return Rv({timestamp:yd(t)})}function Pc(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Hi(n,c=>Ee(c));o=Iv(t.serverSyncTree_,r,l,i)}else{const l=Ee(n);o=Ev(t.serverSyncTree_,r,l,i)}else if(s){const l=Hi(n,c=>Ee(c));o=mv(t.serverSyncTree_,r,l)}else{const l=Ee(n);o=br(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=is(t,r)),it(t.eventQueue_,a,o)}function kc(t,e){Za(t,"connected",e),e===!1&&Qv(t)}function Kv(t,e){Re(e,(n,s)=>{Za(t,n,s)})}function Za(t,e,n){const s=new ee("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(s,i);const r=br(t.infoSyncTree_,s,i);it(t.eventQueue_,s,r)}function el(t){return t.nextWriteId_++}function Gv(t,e,n,s,i){Nr(t,"set",{path:e.toString(),value:n,priority:s});const r=Rr(t),o=Ee(n,s),a=Va(t.serverSyncTree_,e),l=ld(o,a,r),c=el(t),u=sd(t.serverSyncTree_,e,l,c,!0);Sr(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||ke("set at "+e+" failed: "+d);const A=zt(t.serverSyncTree_,c,!m);it(t.eventQueue_,e,A),Fo(t,i,d,_)});const h=nl(t,e);is(t,h),it(t.eventQueue_,h,[])}function Yv(t,e,n,s){Nr(t,"update",{path:e.toString(),value:n});let i=!0;const r=Rr(t),o={};if(Re(n,(a,l)=>{i=!1,o[a]=ad(fe(e,a),Ee(l),t.serverSyncTree_,r)}),i)Te("update() called with empty data.  Don't do anything."),Fo(t,s,"ok",void 0);else{const a=el(t),l=gv(t.serverSyncTree_,e,o,a);Sr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||ke("update at "+e+" failed: "+c);const d=zt(t.serverSyncTree_,a,!h),_=d.length>0?is(t,e):e;it(t.eventQueue_,_,d),Fo(t,s,c,u)}),Re(n,c=>{const u=nl(t,fe(e,c));is(t,u)}),it(t.eventQueue_,e,[])}}function Qv(t){Nr(t,"onDisconnectEvents");const e=Rr(t),n=Zi();No(t.onDisconnect_,X(),(i,r)=>{const o=ad(i,r,t.serverSyncTree_,e);jh(n,i,o)});let s=[];No(n,X(),(i,r)=>{s=s.concat(br(t.serverSyncTree_,i,r));const o=nl(t,i);is(t,o)}),t.onDisconnect_=Zi(),it(t.eventQueue_,X(),s)}function Jv(t,e,n){let s;j(e._path)===".info"?s=Nc(t.infoSyncTree_,e,n):s=Nc(t.serverSyncTree_,e,n),gd(t.eventQueue_,e._path,s)}function Oc(t,e,n){let s;j(e._path)===".info"?s=Do(t.infoSyncTree_,e,n):s=Do(t.serverSyncTree_,e,n),gd(t.eventQueue_,e._path,s)}function Xv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Vv)}function Nr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function Fo(t,e,n,s){e&&ps(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function vd(t,e,n){return Va(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function tl(t,e=t.transactionQueueTree_){if(e||Ar(t,e),gs(e)){const n=Id(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Zv(t,bi(e),n)}else ud(e)&&Cr(e,n=>{tl(t,n)})}function Zv(t,e,n){const s=n.map(c=>c.currentWriteId),i=vd(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=De(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Nr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(zt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ar(t,Ja(t.transactionQueueTree_,e)),tl(t,t.transactionQueueTree_),it(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ps(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}is(t,e)}},o)}function is(t,e){const n=Ed(t,e),s=bi(n),i=Id(t,n);return eE(t,i,s),s}function eE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=De(n,l.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(zt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jv)u=!0,h="maxretry",i=i.concat(zt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=vd(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Tr("transaction failed: Data returned ",_,l.path);let m=Ee(_);typeof _=="object"&&_!=null&&mt(_,".priority")||(m=m.updatePriority(d.getPriority()));const S=l.currentWriteId,P=Rr(t),F=ld(m,d,P);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=F,l.currentWriteId=el(t),o.splice(o.indexOf(S),1),i=i.concat(sd(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(zt(t.serverSyncTree_,S,!0))}else u=!0,h="nodata",i=i.concat(zt(t.serverSyncTree_,l.currentWriteId,!0))}it(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ar(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ps(s[a]);tl(t,t.transactionQueueTree_)}function Ed(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&gs(s)===void 0;)s=Ja(s,n),e=he(e),n=j(e);return s}function Id(t,e){const n=[];return bd(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bd(t,e,n){const s=gs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Cr(e,i=>{bd(t,i,n)})}function Ar(t,e){const n=gs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,cd(e,n.length>0?n:void 0)}Cr(e,s=>{Ar(t,s)})}function nl(t,e){const n=bi(Ed(t,e)),s=Ja(t.transactionQueueTree_,e);return kv(s,i=>{oo(t,i)}),oo(t,s),hd(s,i=>{oo(t,i)}),n}function oo(t,e){const n=gs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?cd(e,void 0):n.length=r+1,it(t.eventQueue_,bi(e),i);for(let o=0;o<s.length;o++)ps(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const xc=function(t,e){const n=sE(t),s=n.namespace;n.domain==="firebase.com"&&In(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&In("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||um();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bm(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},sE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=tE(t.substring(u,h)));const d=nE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class Cd{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Aa(this._path)}get ref(){return new Pt(this._repo,this._path)}get _queryIdentifier(){const e=mc(this._queryParams),n=Ta(e);return n==="{}"?"default":n}get _queryObject(){return mc(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof sl))return!1;const n=this._repo===e._repo,s=Pa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gm(this._path)}}class Pt extends sl{constructor(e,n){super(e,n,new Ma,!1)}get parent(){const e=Lh(this._path);return e===null?null:new Pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ti{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=rs(this.ref,e);return new ti(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ti(i,rs(this.ref,s),pe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function We(t,e){return t=ot(t),t._checkNotDeleted("ref"),e!==void 0?rs(t._root,e):t._root}function rs(t,e){return t=ot(t),j(t._path)===null?Wv("child","path",e,!1):pd("child","path",e,!1),new Pt(t._repo,fe(t._path,e))}function rE(t,e){t=ot(t),_d("push",t._path),fd("push",e,t._path,!0);const n=yd(t._repo),s=gy(n),i=rs(t,s),r=rs(t,s);let o;return e!=null?o=Pr(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Pr(t,e){t=ot(t),_d("set",t._path),fd("set",e,t._path,!1);const n=new ui;return Gv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Dt(t,e){Uv("update",e,t._path,!1);const n=new ui;return Yv(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class il{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new wd("value",this,new ti(e.snapshotNode,new Pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Cd(this,e,n):null}matches(e){return e instanceof il?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class rl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Cd(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=rs(new Pt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new wd(e.type,this,new ti(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof rl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function oE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Oc(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new iE(n,r||void 0),a=e==="value"?new il(o):new rl(e,o);return Jv(t._repo,t,a),()=>Oc(t._repo,t,a)}function Uo(t,e,n,s){return oE(t,"value",e,n,s)}av(Pt);fv(Pt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="FIREBASE_DATABASE_EMULATOR_HOST",Wo={};let lE=!1;function cE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||In("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xc(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[aE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=xc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new To(To.OWNER):new Im(t.name,t.options,e);$v("Invalid Firebase Database URL",o),K(o.path)||In("Database URL must point to the root of a Firebase Database (not including a child path).");const h=hE(a,t,u,new Em(t.name,n));return new dE(h,t)}function uE(t,e){const n=Wo[e];(!n||n[t.key]!==t)&&In(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Xv(t),delete n[t.key]}function hE(t,e,n,s){let i=Wo[e.name];i||(i={},Wo[e.name]=i);let r=i[t.toURLString()];return r&&In("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new qv(t,lE,n,s),i[t.toURLString()]=r,r}class dE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&In("Cannot call "+e+" on a deleted database.")}}function kr(t=Fu(),e){return pa(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){rm(di),Zn(new mn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return cE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Yt(Zl,ec,t),Yt(Zl,ec,"esm2017")}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fE();const pE={apiKey:"AIzaSyA7mlXL-RQizJ8YVA03pSNlAV9W7T07FpY",authDomain:"yt-watchmen.firebaseapp.com",databaseURL:"https://yt-watchmen-default-rtdb.europe-west1.firebasedatabase.app",projectId:"yt-watchmen",storageBucket:"yt-watchmen.appspot.com",messagingSenderId:"359895816834",appId:"1:359895816834:web:bb43560e3588066de1b29b"},Td=Xp(pE);Gs(Td);kr(Td);function ol(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _E="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gE=ol(_E);function Sd(t){return!!t||t===""}function al(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?vE(s):al(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(be(t))return t;if(me(t))return t}}const mE=/;(?![^(]*\))/g,yE=/:(.+)/;function vE(t){const e={};return t.split(mE).forEach(n=>{if(n){const s=n.split(yE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Gn(t){let e="";if(be(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Gn(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const EE=t=>be(t)?t:t==null?"":$(t)||me(t)&&(t.toString===Pd||!B(t.toString))?JSON.stringify(t,Rd,2):String(t),Rd=(t,e)=>e&&e.__v_isRef?Rd(t,e.value):Qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Nd(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!$(e)&&!kd(e)?String(e):e,ae={},Yn=[],tt=()=>{},IE=()=>!1,bE=/^on[^a-z]/,Or=t=>bE.test(t),ll=t=>t.startsWith("onUpdate:"),Oe=Object.assign,cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wE=Object.prototype.hasOwnProperty,G=(t,e)=>wE.call(t,e),$=Array.isArray,Qn=t=>xr(t)==="[object Map]",Nd=t=>xr(t)==="[object Set]",B=t=>typeof t=="function",be=t=>typeof t=="string",ul=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",Ad=t=>me(t)&&B(t.then)&&B(t.catch),Pd=Object.prototype.toString,xr=t=>Pd.call(t),CE=t=>xr(t).slice(8,-1),kd=t=>xr(t)==="[object Object]",hl=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Li=ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},TE=/-(\w)/g,gt=Mr(t=>t.replace(TE,(e,n)=>n?n.toUpperCase():"")),SE=/\B([A-Z])/g,ms=Mr(t=>t.replace(SE,"-$1").toLowerCase()),Dr=Mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ao=Mr(t=>t?`on${Dr(t)}`:""),ni=(t,e)=>!Object.is(t,e),Fi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$o=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mc;const RE=()=>Mc||(Mc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dt;class NE{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dt&&(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function AE(t,e=dt){e&&e.active&&e.effects.push(t)}const dl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Od=t=>(t.w&tn)>0,xd=t=>(t.n&tn)>0,PE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=tn},kE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Od(i)&&!xd(i)?i.delete(t):e[n++]=i,i.w&=~tn,i.n&=~tn}e.length=n}},Bo=new WeakMap;let ks=0,tn=1;const Ho=30;let Qe;const _n=Symbol(""),Vo=Symbol("");class fl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,AE(this,s)}run(){if(!this.active)return this.fn();let e=Qe,n=Jt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qe,Qe=this,Jt=!0,tn=1<<++ks,ks<=Ho?PE(this):Dc(this),this.fn()}finally{ks<=Ho&&kE(this),tn=1<<--ks,Qe=this.parent,Jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(Dc(this),this.onStop&&this.onStop(),this.active=!1)}}function Dc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Jt=!0;const Md=[];function ys(){Md.push(Jt),Jt=!1}function vs(){const t=Md.pop();Jt=t===void 0?!0:t}function Be(t,e,n){if(Jt&&Qe){let s=Bo.get(t);s||Bo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=dl()),Dd(i)}}function Dd(t,e){let n=!1;ks<=Ho?xd(t)||(t.n|=tn,n=!Od(t)):n=!t.has(Qe),n&&(t.add(Qe),Qe.deps.push(t))}function At(t,e,n,s,i,r){const o=Bo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?hl(n)&&a.push(o.get("length")):(a.push(o.get(_n)),Qn(t)&&a.push(o.get(Vo)));break;case"delete":$(t)||(a.push(o.get(_n)),Qn(t)&&a.push(o.get(Vo)));break;case"set":Qn(t)&&a.push(o.get(_n));break}if(a.length===1)a[0]&&jo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);jo(dl(l))}}function jo(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&Lc(s);for(const s of n)s.computed||Lc(s)}function Lc(t,e){(t!==Qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const OE=ol("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ul)),xE=pl(),ME=pl(!1,!0),DE=pl(!0),Fc=LE();function LE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)Be(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ys();const s=Z(this)[e].apply(this,n);return vs(),s}}),t}function pl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?XE:Bd:e?$d:Wd).get(s))return s;const o=$(s);if(!t&&o&&G(Fc,i))return Reflect.get(Fc,i,r);const a=Reflect.get(s,i,r);return(ul(i)?Ld.has(i):OE(i))||(t||Be(s,"get",i),e)?a:Ne(a)?o&&hl(i)?a:a.value:me(a)?t?Hd(a):Es(a):a}}const FE=Fd(),UE=Fd(!0);function Fd(t=!1){return function(n,s,i,r){let o=n[s];if(si(o)&&Ne(o)&&!Ne(i))return!1;if(!t&&!si(i)&&(qo(i)||(i=Z(i),o=Z(o)),!$(n)&&Ne(o)&&!Ne(i)))return o.value=i,!0;const a=$(n)&&hl(s)?Number(s)<n.length:G(n,s),l=Reflect.set(n,s,i,r);return n===Z(r)&&(a?ni(i,o)&&At(n,"set",s,i):At(n,"add",s,i)),l}}function WE(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&At(t,"delete",e,void 0),s}function $E(t,e){const n=Reflect.has(t,e);return(!ul(e)||!Ld.has(e))&&Be(t,"has",e),n}function BE(t){return Be(t,"iterate",$(t)?"length":_n),Reflect.ownKeys(t)}const Ud={get:xE,set:FE,deleteProperty:WE,has:$E,ownKeys:BE},HE={get:DE,set(t,e){return!0},deleteProperty(t,e){return!0}},VE=Oe({},Ud,{get:ME,set:UE}),_l=t=>t,Lr=t=>Reflect.getPrototypeOf(t);function Ri(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(e!==r&&Be(i,"get",e),Be(i,"get",r));const{has:o}=Lr(i),a=s?_l:n?yl:ii;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ni(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(t!==i&&Be(s,"has",t),Be(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ai(t,e=!1){return t=t.__v_raw,!e&&Be(Z(t),"iterate",_n),Reflect.get(t,"size",t)}function Uc(t){t=Z(t);const e=Z(this);return Lr(e).has.call(e,t)||(e.add(t),At(e,"add",t,t)),this}function Wc(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=Lr(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ni(e,o)&&At(n,"set",t,e):At(n,"add",t,e),this}function $c(t){const e=Z(this),{has:n,get:s}=Lr(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&At(e,"delete",t,void 0),r}function Bc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&At(t,"clear",void 0,void 0),n}function Pi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Z(o),l=e?_l:t?yl:ii;return!t&&Be(a,"iterate",_n),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function ki(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=Qn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?_l:e?yl:ii;return!e&&Be(r,"iterate",l?Vo:_n),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Lt(t){return function(...e){return t==="delete"?!1:this}}function jE(){const t={get(r){return Ri(this,r)},get size(){return Ai(this)},has:Ni,add:Uc,set:Wc,delete:$c,clear:Bc,forEach:Pi(!1,!1)},e={get(r){return Ri(this,r,!1,!0)},get size(){return Ai(this)},has:Ni,add:Uc,set:Wc,delete:$c,clear:Bc,forEach:Pi(!1,!0)},n={get(r){return Ri(this,r,!0)},get size(){return Ai(this,!0)},has(r){return Ni.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:Pi(!0,!1)},s={get(r){return Ri(this,r,!0,!0)},get size(){return Ai(this,!0)},has(r){return Ni.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:Pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ki(r,!1,!1),n[r]=ki(r,!0,!1),e[r]=ki(r,!1,!0),s[r]=ki(r,!0,!0)}),[t,n,e,s]}const[qE,zE,KE,GE]=jE();function gl(t,e){const n=e?t?GE:KE:t?zE:qE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(G(n,i)&&i in s?n:s,i,r)}const YE={get:gl(!1,!1)},QE={get:gl(!1,!0)},JE={get:gl(!0,!1)},Wd=new WeakMap,$d=new WeakMap,Bd=new WeakMap,XE=new WeakMap;function ZE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eI(t){return t.__v_skip||!Object.isExtensible(t)?0:ZE(CE(t))}function Es(t){return si(t)?t:ml(t,!1,Ud,YE,Wd)}function tI(t){return ml(t,!1,VE,QE,$d)}function Hd(t){return ml(t,!0,HE,JE,Bd)}function ml(t,e,n,s,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=eI(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Jn(t){return si(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function si(t){return!!(t&&t.__v_isReadonly)}function qo(t){return!!(t&&t.__v_isShallow)}function Vd(t){return Jn(t)||si(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function jd(t){return ar(t,"__v_skip",!0),t}const ii=t=>me(t)?Es(t):t,yl=t=>me(t)?Hd(t):t;function qd(t){Jt&&Qe&&(t=Z(t),Dd(t.dep||(t.dep=dl())))}function zd(t,e){t=Z(t),t.dep&&jo(t.dep)}function Ne(t){return!!(t&&t.__v_isRef===!0)}function Fr(t){return Kd(t,!1)}function nI(t){return Kd(t,!0)}function Kd(t,e){return Ne(t)?t:new sI(t,e)}class sI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:ii(e)}get value(){return qd(this),this._value}set value(e){e=this.__v_isShallow?e:Z(e),ni(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ii(e),zd(this))}}function St(t){return Ne(t)?t.value:t}const iI={get:(t,e,n)=>St(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Gd(t){return Jn(t)?t:new Proxy(t,iI)}class rI{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fl(e,()=>{this._dirty||(this._dirty=!0,zd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return qd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function oI(t,e,n=!1){let s,i;const r=B(t);return r?(s=t,i=tt):(s=t.get,i=t.set),new rI(s,i,r||!i,n)}function Xt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ur(r,e,n)}return i}function nt(t,e,n,s){if(B(t)){const r=Xt(t,e,n,s);return r&&Ad(r)&&r.catch(o=>{Ur(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(nt(t[r],e,n,s));return i}function Ur(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Xt(l,null,10,[t,o,a]);return}}aI(t,n,i,s)}function aI(t,e,n,s=!0){console.error(t)}let lr=!1,zo=!1;const $e=[];let Et=0;const Us=[];let Os=null,Fn=0;const Ws=[];let Wt=null,Un=0;const Yd=Promise.resolve();let vl=null,Ko=null;function Qd(t){const e=vl||Yd;return t?e.then(this?t.bind(this):t):e}function lI(t){let e=Et+1,n=$e.length;for(;e<n;){const s=e+n>>>1;ri($e[s])<t?e=s+1:n=s}return e}function Jd(t){(!$e.length||!$e.includes(t,lr&&t.allowRecurse?Et+1:Et))&&t!==Ko&&(t.id==null?$e.push(t):$e.splice(lI(t.id),0,t),Xd())}function Xd(){!lr&&!zo&&(zo=!0,vl=Yd.then(tf))}function cI(t){const e=$e.indexOf(t);e>Et&&$e.splice(e,1)}function Zd(t,e,n,s){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Xd()}function uI(t){Zd(t,Os,Us,Fn)}function hI(t){Zd(t,Wt,Ws,Un)}function Wr(t,e=null){if(Us.length){for(Ko=e,Os=[...new Set(Us)],Us.length=0,Fn=0;Fn<Os.length;Fn++)Os[Fn]();Os=null,Fn=0,Ko=null,Wr(t,e)}}function ef(t){if(Wr(),Ws.length){const e=[...new Set(Ws)];if(Ws.length=0,Wt){Wt.push(...e);return}for(Wt=e,Wt.sort((n,s)=>ri(n)-ri(s)),Un=0;Un<Wt.length;Un++)Wt[Un]();Wt=null,Un=0}}const ri=t=>t.id==null?1/0:t.id;function tf(t){zo=!1,lr=!0,Wr(t),$e.sort((n,s)=>ri(n)-ri(s));const e=tt;try{for(Et=0;Et<$e.length;Et++){const n=$e[Et];n&&n.active!==!1&&Xt(n,null,14)}}finally{Et=0,$e.length=0,ef(),lr=!1,vl=null,($e.length||Us.length||Ws.length)&&tf(t)}}function dI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ae;d&&(i=n.map(_=>_.trim())),h&&(i=n.map($o))}let a,l=s[a=ao(e)]||s[a=ao(gt(e))];!l&&r&&(l=s[a=ao(ms(e))]),l&&nt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nt(c,t,6,i)}}function nf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=nf(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Oe(o,r),s.set(t,o),o)}function $r(t,e){return!t||!Or(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,ms(e))||G(t,e))}let Xe=null,Br=null;function cr(t){const e=Xe;return Xe=t,Br=t&&t.type.__scopeId||null,e}function fI(t){Br=t}function pI(){Br=null}function oi(t,e=Xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Jc(-1);const r=cr(e),o=t(...i);return cr(r),s._d&&Jc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function lo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:A}=t;let S,P;const F=cr(t);try{if(n.shapeFlag&4){const Q=i||s;S=ft(u.call(Q,Q,h,r,_,d,m)),P=l}else{const Q=e;S=ft(Q.length>1?Q(r,{attrs:l,slots:a,emit:c}):Q(r,null)),P=e.props?l:_I(l)}}catch(Q){$s.length=0,Ur(Q,t,1),S=ge(Sn)}let V=S;if(P&&A!==!1){const Q=Object.keys(P),{shapeFlag:we}=V;Q.length&&we&7&&(o&&Q.some(ll)&&(P=gI(P,o)),V=os(V,P))}return n.dirs&&(V=os(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),S=V,cr(F),S}const _I=t=>{let e;for(const n in t)(n==="class"||n==="style"||Or(n))&&((e||(e={}))[n]=t[n]);return e},gI=(t,e)=>{const n={};for(const s in t)(!ll(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function mI(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Hc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!$r(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Hc(s,o,c):!0:!!o;return!1}function Hc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!$r(n,r))return!0}return!1}function yI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const vI=t=>t.__isSuspense;function EI(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):hI(t)}function Ui(t,e){if(Se){let n=Se.provides;const s=Se.parent&&Se.parent.provides;s===n&&(n=Se.provides=Object.create(s)),n[t]=e}}function Rt(t,e,n=!1){const s=Se||Xe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}const Vc={};function Wi(t,e,n){return sf(t,e,n)}function sf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){const a=Se;let l,c=!1,u=!1;if(Ne(t)?(l=()=>t.value,c=qo(t)):Jn(t)?(l=()=>t,s=!0):$(t)?(u=!0,c=t.some(P=>Jn(P)||qo(P)),l=()=>t.map(P=>{if(Ne(P))return P.value;if(Jn(P))return dn(P);if(B(P))return Xt(P,a,2)})):B(t)?e?l=()=>Xt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),nt(t,a,3,[d])}:l=tt,e&&s){const P=l;l=()=>dn(P())}let h,d=P=>{h=S.onStop=()=>{Xt(P,a,4)}};if(li)return d=tt,e?n&&nt(e,a,3,[l(),u?[]:void 0,d]):l(),tt;let _=u?[]:Vc;const m=()=>{if(!!S.active)if(e){const P=S.run();(s||c||(u?P.some((F,V)=>ni(F,_[V])):ni(P,_)))&&(h&&h(),nt(e,a,3,[P,_===Vc?void 0:_,d]),_=P)}else S.run()};m.allowRecurse=!!e;let A;i==="sync"?A=m:i==="post"?A=()=>Me(m,a&&a.suspense):A=()=>uI(m);const S=new fl(l,A);return e?n?m():_=S.run():i==="post"?Me(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&cl(a.scope.effects,S)}}function II(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?rf(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=Se;as(this);const a=sf(i,r.bind(s),n);return o?as(o):gn(),a}function rf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function dn(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ne(t))dn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)dn(t[n],e);else if(Nd(t)||Qn(t))t.forEach(n=>{dn(n,e)});else if(kd(t))for(const n in t)dn(t[n],e);return t}function An(t){return B(t)?{setup:t,name:t.name}:t}const $i=t=>!!t.type.__asyncLoader,of=t=>t.type.__isKeepAlive;function bI(t,e){af(t,"a",e)}function wI(t,e){af(t,"da",e)}function af(t,e,n=Se){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Hr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)of(i.parent.vnode)&&CI(s,e,n,i),i=i.parent}}function CI(t,e,n,s){const i=Hr(e,t,s,!0);lf(()=>{cl(s[e],i)},n)}function Hr(t,e,n=Se,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ys(),as(n);const a=nt(e,n,t,o);return gn(),vs(),a});return s?i.unshift(r):i.push(r),r}}const kt=t=>(e,n=Se)=>(!li||t==="sp")&&Hr(t,e,n),TI=kt("bm"),SI=kt("m"),RI=kt("bu"),NI=kt("u"),AI=kt("bum"),lf=kt("um"),PI=kt("sp"),kI=kt("rtg"),OI=kt("rtc");function xI(t,e=Se){Hr("ec",t,e)}function ln(t,e){const n=Xe;if(n===null)return t;const s=jr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ae]=e[r];B(o)&&(o={mounted:o,updated:o}),o.deep&&dn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function nn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ys(),nt(l,n,8,[t.el,a,t,e]),vs())}}const cf="components";function El(t,e){return DI(cf,t,!0,e)||t}const MI=Symbol();function DI(t,e,n=!0,s=!1){const i=Xe||Se;if(i){const r=i.type;if(t===cf){const a=fb(r,!1);if(a&&(a===e||a===gt(e)||a===Dr(gt(e))))return r}const o=jc(i[t]||r[t],e)||jc(i.appContext[t],e);return!o&&s?r:o}}function jc(t,e){return t&&(t[e]||t[gt(e)]||t[Dr(gt(e))])}function LI(t,e,n,s){let i;const r=n&&n[s];if($(t)||be(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Go=t=>t?If(t)?jr(t)||t.proxy:Go(t.parent):null,ur=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Go(t.parent),$root:t=>Go(t.root),$emit:t=>t.emit,$options:t=>hf(t),$forceUpdate:t=>t.f||(t.f=()=>Jd(t.update)),$nextTick:t=>t.n||(t.n=Qd.bind(t.proxy)),$watch:t=>II.bind(t)}),FI={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ae&&G(s,e))return o[e]=1,s[e];if(i!==ae&&G(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,r[e];if(n!==ae&&G(n,e))return o[e]=4,n[e];Yo&&(o[e]=0)}}const u=ur[e];let h,d;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&G(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,G(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ae&&G(i,e)?(i[e]=n,!0):s!==ae&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&G(t,o)||e!==ae&&G(e,o)||(a=r[0])&&G(a,o)||G(s,o)||G(ur,o)||G(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Yo=!0;function UI(t){const e=hf(t),n=t.proxy,s=t.ctx;Yo=!1,e.beforeCreate&&qc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:A,deactivated:S,beforeDestroy:P,beforeUnmount:F,destroyed:V,unmounted:Q,render:we,renderTracked:Ce,renderTriggered:He,errorCaptured:xt,serverPrefetch:xe,expose:at,inheritAttrs:yt,components:ze,directives:Pn,filters:kn}=e;if(c&&WI(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const te=o[le];B(te)&&(s[le]=te.bind(n))}if(i){const le=i.call(n,n);me(le)&&(t.data=Es(le))}if(Yo=!0,r)for(const le in r){const te=r[le],Fe=B(te)?te.bind(n,n):B(te.get)?te.get.bind(n,n):tt,xn=!B(te)&&B(te.set)?te.set.bind(n):tt,vt=je({get:Fe,set:xn});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>vt.value,set:lt=>vt.value=lt})}if(a)for(const le in a)uf(a[le],s,n,le);if(l){const le=B(l)?l.call(n):l;Reflect.ownKeys(le).forEach(te=>{Ui(te,le[te])})}u&&qc(u,t,"c");function _e(le,te){$(te)?te.forEach(Fe=>le(Fe.bind(n))):te&&le(te.bind(n))}if(_e(TI,h),_e(SI,d),_e(RI,_),_e(NI,m),_e(bI,A),_e(wI,S),_e(xI,xt),_e(OI,Ce),_e(kI,He),_e(AI,F),_e(lf,Q),_e(PI,xe),$(at))if(at.length){const le=t.exposed||(t.exposed={});at.forEach(te=>{Object.defineProperty(le,te,{get:()=>n[te],set:Fe=>n[te]=Fe})})}else t.exposed||(t.exposed={});we&&t.render===tt&&(t.render=we),yt!=null&&(t.inheritAttrs=yt),ze&&(t.components=ze),Pn&&(t.directives=Pn)}function WI(t,e,n=tt,s=!1){$(t)&&(t=Qo(t));for(const i in t){const r=t[i];let o;me(r)?"default"in r?o=Rt(r.from||i,r.default,!0):o=Rt(r.from||i):o=Rt(r),Ne(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function qc(t,e,n){nt($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function uf(t,e,n,s){const i=s.includes(".")?rf(n,s):()=>n[s];if(be(t)){const r=e[t];B(r)&&Wi(i,r)}else if(B(t))Wi(i,t.bind(n));else if(me(t))if($(t))t.forEach(r=>uf(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&Wi(i,r,t)}}function hf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>hr(l,c,o,!0)),hr(l,e,o)),r.set(e,l),l}function hr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&hr(t,r,n,!0),i&&i.forEach(o=>hr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=$I[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $I={data:zc,props:an,emits:an,methods:an,computed:an,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:an,directives:an,watch:HI,provide:zc,inject:BI};function zc(t,e){return e?t?function(){return Oe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function BI(t,e){return an(Qo(t),Qo(e))}function Qo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function HI(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function VI(t,e,n,s=!1){const i={},r={};ar(r,Vr,1),t.propsDefaults=Object.create(null),df(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:tI(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function jI(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Z(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if($r(t.emitsOptions,d))continue;const _=e[d];if(l)if(G(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=gt(d);i[m]=Jo(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{df(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!G(e,h)&&((u=ms(h))===h||!G(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Jo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!G(e,h)&&!0)&&(delete r[h],c=!0)}c&&At(t,"set","$attrs")}function df(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Li(l))continue;const c=e[l];let u;i&&G(i,u=gt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:$r(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Z(n),c=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Jo(i,l,h,c[h],t,!G(c,h))}}return o}function Jo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(as(i),s=c[n]=l.call(null,e),gn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ms(n))&&(s=!0))}return s}function ff(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!B(t)){const u=h=>{l=!0;const[d,_]=ff(h,e,!0);Oe(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,Yn),Yn;if($(r))for(let u=0;u<r.length;u++){const h=gt(r[u]);Kc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=gt(u);if(Kc(h)){const d=r[u],_=o[h]=$(d)||B(d)?{type:d}:d;if(_){const m=Qc(Boolean,_.type),A=Qc(String,_.type);_[0]=m>-1,_[1]=A<0||m<A,(m>-1||G(_,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function Kc(t){return t[0]!=="$"}function Gc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Yc(t,e){return Gc(t)===Gc(e)}function Qc(t,e){return $(e)?e.findIndex(n=>Yc(n,t)):B(e)&&Yc(e,t)?0:-1}const pf=t=>t[0]==="_"||t==="$stable",Il=t=>$(t)?t.map(ft):[ft(t)],qI=(t,e,n)=>{if(e._n)return e;const s=oi((...i)=>Il(e(...i)),n);return s._c=!1,s},_f=(t,e,n)=>{const s=t._ctx;for(const i in t){if(pf(i))continue;const r=t[i];if(B(r))e[i]=qI(i,r,s);else if(r!=null){const o=Il(r);e[i]=()=>o}}},gf=(t,e)=>{const n=Il(e);t.slots.default=()=>n},zI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),ar(e,"_",n)):_f(e,t.slots={})}else t.slots={},e&&gf(t,e);ar(t.slots,Vr,1)},KI=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Oe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,_f(e,i)),o=e}else e&&(gf(t,e),o={default:1});if(r)for(const a in i)!pf(a)&&!(a in o)&&delete i[a]};function mf(){return{app:null,config:{isNativeTag:IE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GI=0;function YI(t,e){return function(s,i=null){B(s)||(s=Object.assign({},s)),i!=null&&!me(i)&&(i=null);const r=mf(),o=new Set;let a=!1;const l=r.app={_uid:GI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:_b,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(l,...u)):B(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ge(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,jr(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Xo(t,e,n,s,i=!1){if($(t)){t.forEach((d,_)=>Xo(d,e&&($(e)?e[_]:e),n,s,i));return}if($i(s)&&!i)return;const r=s.shapeFlag&4?jr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(be(c)?(u[c]=null,G(h,c)&&(h[c]=null)):Ne(c)&&(c.value=null)),B(l))Xt(l,a,12,[o,u]);else{const d=be(l),_=Ne(l);if(d||_){const m=()=>{if(t.f){const A=d?u[l]:l.value;i?$(A)&&cl(A,r):$(A)?A.includes(r)||A.push(r):d?(u[l]=[r],G(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,G(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Me(m,n)):m()}}}const Me=EI;function QI(t){return JI(t)}function JI(t,e){const n=RE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=tt,cloneNode:m,insertStaticContent:A}=t,S=(f,p,g,E=null,v=null,C=null,N=!1,w=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Rs(f,p)&&(E=x(f),Ve(f,v,C,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:M,shapeFlag:k}=p;switch(I){case bl:P(f,p,g,E);break;case Sn:F(f,p,g,E);break;case co:f==null&&V(p,g,E,N);break;case Ge:Pn(f,p,g,E,v,C,N,w,T);break;default:k&1?Ce(f,p,g,E,v,C,N,w,T):k&6?kn(f,p,g,E,v,C,N,w,T):(k&64||k&128)&&I.process(f,p,g,E,v,C,N,w,T,ce)}M!=null&&v&&Xo(M,f&&f.ref,C,p||f,!p)},P=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},F=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},V=(f,p,g,E)=>{[f.el,f.anchor]=A(f.children,p,g,E,f.el,f.anchor)},Q=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},we=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Ce=(f,p,g,E,v,C,N,w,T)=>{N=N||p.type==="svg",f==null?He(p,g,E,v,C,N,w,T):at(f,p,v,C,N,w,T)},He=(f,p,g,E,v,C,N,w)=>{let T,I;const{type:M,props:k,shapeFlag:D,transition:W,patchFlag:Y,dirs:se}=f;if(f.el&&m!==void 0&&Y===-1)T=f.el=m(f.el);else{if(T=f.el=o(f.type,C,k&&k.is,k),D&8?u(T,f.children):D&16&&xe(f.children,T,null,E,v,C&&M!=="foreignObject",N,w),se&&nn(f,null,E,"created"),k){for(const de in k)de!=="value"&&!Li(de)&&r(T,de,null,k[de],C,f.children,E,v,R);"value"in k&&r(T,"value",null,k.value),(I=k.onVnodeBeforeMount)&&ut(I,E,f)}xt(T,f,f.scopeId,N,E)}se&&nn(f,null,E,"beforeMount");const ie=(!v||v&&!v.pendingBranch)&&W&&!W.persisted;ie&&W.beforeEnter(T),s(T,p,g),((I=k&&k.onVnodeMounted)||ie||se)&&Me(()=>{I&&ut(I,E,f),ie&&W.enter(T),se&&nn(f,null,E,"mounted")},v)},xt=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let C=0;C<E.length;C++)_(f,E[C]);if(v){let C=v.subTree;if(p===C){const N=v.vnode;xt(f,N,N.scopeId,N.slotScopeIds,v.parent)}}},xe=(f,p,g,E,v,C,N,w,T=0)=>{for(let I=T;I<f.length;I++){const M=f[I]=w?$t(f[I]):ft(f[I]);S(null,M,p,g,E,v,C,N,w)}},at=(f,p,g,E,v,C,N)=>{const w=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:M}=p;T|=f.patchFlag&16;const k=f.props||ae,D=p.props||ae;let W;g&&sn(g,!1),(W=D.onVnodeBeforeUpdate)&&ut(W,g,p,f),M&&nn(p,f,g,"beforeUpdate"),g&&sn(g,!0);const Y=v&&p.type!=="foreignObject";if(I?yt(f.dynamicChildren,I,w,g,E,Y,C):N||Fe(f,p,w,null,g,E,Y,C,!1),T>0){if(T&16)ze(w,p,k,D,g,E,v);else if(T&2&&k.class!==D.class&&r(w,"class",null,D.class,v),T&4&&r(w,"style",k.style,D.style,v),T&8){const se=p.dynamicProps;for(let ie=0;ie<se.length;ie++){const de=se[ie],Ke=k[de],Mn=D[de];(Mn!==Ke||de==="value")&&r(w,de,Ke,Mn,v,f.children,g,E,R)}}T&1&&f.children!==p.children&&u(w,p.children)}else!N&&I==null&&ze(w,p,k,D,g,E,v);((W=D.onVnodeUpdated)||M)&&Me(()=>{W&&ut(W,g,p,f),M&&nn(p,f,g,"updated")},E)},yt=(f,p,g,E,v,C,N)=>{for(let w=0;w<p.length;w++){const T=f[w],I=p[w],M=T.el&&(T.type===Ge||!Rs(T,I)||T.shapeFlag&70)?h(T.el):g;S(T,I,M,null,E,v,C,N,!0)}},ze=(f,p,g,E,v,C,N)=>{if(g!==E){for(const w in E){if(Li(w))continue;const T=E[w],I=g[w];T!==I&&w!=="value"&&r(f,w,I,T,N,p.children,v,C,R)}if(g!==ae)for(const w in g)!Li(w)&&!(w in E)&&r(f,w,g[w],null,N,p.children,v,C,R);"value"in E&&r(f,"value",g.value,E.value)}},Pn=(f,p,g,E,v,C,N,w,T)=>{const I=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:k,dynamicChildren:D,slotScopeIds:W}=p;W&&(w=w?w.concat(W):W),f==null?(s(I,g,E),s(M,g,E),xe(p.children,g,M,v,C,N,w,T)):k>0&&k&64&&D&&f.dynamicChildren?(yt(f.dynamicChildren,D,g,v,C,N,w),(p.key!=null||v&&p===v.subTree)&&yf(f,p,!0)):Fe(f,p,g,M,v,C,N,w,T)},kn=(f,p,g,E,v,C,N,w,T)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,N,T):On(p,g,E,v,C,N,T):_e(f,p,T)},On=(f,p,g,E,v,C,N)=>{const w=f.component=lb(f,E,v);if(of(f)&&(w.ctx.renderer=ce),cb(w),w.asyncDep){if(v&&v.registerDep(w,le),!f.el){const T=w.subTree=ge(Sn);F(null,T,p,g)}return}le(w,f,p,g,v,C,N)},_e=(f,p,g)=>{const E=p.component=f.component;if(mI(f,p,g))if(E.asyncDep&&!E.asyncResolved){te(E,p,g);return}else E.next=p,cI(E.update),E.update();else p.el=f.el,E.vnode=p},le=(f,p,g,E,v,C,N)=>{const w=()=>{if(f.isMounted){let{next:M,bu:k,u:D,parent:W,vnode:Y}=f,se=M,ie;sn(f,!1),M?(M.el=Y.el,te(f,M,N)):M=Y,k&&Fi(k),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&ut(ie,W,M,Y),sn(f,!0);const de=lo(f),Ke=f.subTree;f.subTree=de,S(Ke,de,h(Ke.el),x(Ke),f,v,C),M.el=de.el,se===null&&yI(f,de.el),D&&Me(D,v),(ie=M.props&&M.props.onVnodeUpdated)&&Me(()=>ut(ie,W,M,Y),v)}else{let M;const{el:k,props:D}=p,{bm:W,m:Y,parent:se}=f,ie=$i(p);if(sn(f,!1),W&&Fi(W),!ie&&(M=D&&D.onVnodeBeforeMount)&&ut(M,se,p),sn(f,!0),k&&H){const de=()=>{f.subTree=lo(f),H(k,f.subTree,f,v,null)};ie?p.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=lo(f);S(null,de,g,E,f,v,C),p.el=de.el}if(Y&&Me(Y,v),!ie&&(M=D&&D.onVnodeMounted)){const de=p;Me(()=>ut(M,se,de),v)}(p.shapeFlag&256||se&&$i(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Me(f.a,v),f.isMounted=!0,p=g=E=null}},T=f.effect=new fl(w,()=>Jd(I),f.scope),I=f.update=()=>T.run();I.id=f.uid,sn(f,!0),I()},te=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,jI(f,p.props,E,g),KI(f,p.children,g),ys(),Wr(void 0,f.update),vs()},Fe=(f,p,g,E,v,C,N,w,T=!1)=>{const I=f&&f.children,M=f?f.shapeFlag:0,k=p.children,{patchFlag:D,shapeFlag:W}=p;if(D>0){if(D&128){vt(I,k,g,E,v,C,N,w,T);return}else if(D&256){xn(I,k,g,E,v,C,N,w,T);return}}W&8?(M&16&&R(I,v,C),k!==I&&u(g,k)):M&16?W&16?vt(I,k,g,E,v,C,N,w,T):R(I,v,C,!0):(M&8&&u(g,""),W&16&&xe(k,g,E,v,C,N,w,T))},xn=(f,p,g,E,v,C,N,w,T)=>{f=f||Yn,p=p||Yn;const I=f.length,M=p.length,k=Math.min(I,M);let D;for(D=0;D<k;D++){const W=p[D]=T?$t(p[D]):ft(p[D]);S(f[D],W,g,null,v,C,N,w,T)}I>M?R(f,v,C,!0,!1,k):xe(p,g,E,v,C,N,w,T,k)},vt=(f,p,g,E,v,C,N,w,T)=>{let I=0;const M=p.length;let k=f.length-1,D=M-1;for(;I<=k&&I<=D;){const W=f[I],Y=p[I]=T?$t(p[I]):ft(p[I]);if(Rs(W,Y))S(W,Y,g,null,v,C,N,w,T);else break;I++}for(;I<=k&&I<=D;){const W=f[k],Y=p[D]=T?$t(p[D]):ft(p[D]);if(Rs(W,Y))S(W,Y,g,null,v,C,N,w,T);else break;k--,D--}if(I>k){if(I<=D){const W=D+1,Y=W<M?p[W].el:E;for(;I<=D;)S(null,p[I]=T?$t(p[I]):ft(p[I]),g,Y,v,C,N,w,T),I++}}else if(I>D)for(;I<=k;)Ve(f[I],v,C,!0),I++;else{const W=I,Y=I,se=new Map;for(I=Y;I<=D;I++){const Ue=p[I]=T?$t(p[I]):ft(p[I]);Ue.key!=null&&se.set(Ue.key,I)}let ie,de=0;const Ke=D-Y+1;let Mn=!1,Rl=0;const bs=new Array(Ke);for(I=0;I<Ke;I++)bs[I]=0;for(I=W;I<=k;I++){const Ue=f[I];if(de>=Ke){Ve(Ue,v,C,!0);continue}let ct;if(Ue.key!=null)ct=se.get(Ue.key);else for(ie=Y;ie<=D;ie++)if(bs[ie-Y]===0&&Rs(Ue,p[ie])){ct=ie;break}ct===void 0?Ve(Ue,v,C,!0):(bs[ct-Y]=I+1,ct>=Rl?Rl=ct:Mn=!0,S(Ue,p[ct],g,null,v,C,N,w,T),de++)}const Nl=Mn?XI(bs):Yn;for(ie=Nl.length-1,I=Ke-1;I>=0;I--){const Ue=Y+I,ct=p[Ue],Al=Ue+1<M?p[Ue+1].el:E;bs[I]===0?S(null,ct,g,Al,v,C,N,w,T):Mn&&(ie<0||I!==Nl[ie]?lt(ct,g,Al,2):ie--)}}},lt=(f,p,g,E,v=null)=>{const{el:C,type:N,transition:w,children:T,shapeFlag:I}=f;if(I&6){lt(f.component.subTree,p,g,E);return}if(I&128){f.suspense.move(p,g,E);return}if(I&64){N.move(f,p,g,ce);return}if(N===Ge){s(C,p,g);for(let k=0;k<T.length;k++)lt(T[k],p,g,E);s(f.anchor,p,g);return}if(N===co){Q(f,p,g);return}if(E!==2&&I&1&&w)if(E===0)w.beforeEnter(C),s(C,p,g),Me(()=>w.enter(C),v);else{const{leave:k,delayLeave:D,afterLeave:W}=w,Y=()=>s(C,p,g),se=()=>{k(C,()=>{Y(),W&&W()})};D?D(C,Y,se):se()}else s(C,p,g)},Ve=(f,p,g,E=!1,v=!1)=>{const{type:C,props:N,ref:w,children:T,dynamicChildren:I,shapeFlag:M,patchFlag:k,dirs:D}=f;if(w!=null&&Xo(w,null,g,f,!0),M&256){p.ctx.deactivate(f);return}const W=M&1&&D,Y=!$i(f);let se;if(Y&&(se=N&&N.onVnodeBeforeUnmount)&&ut(se,p,f),M&6)O(f.component,g,E);else{if(M&128){f.suspense.unmount(g,E);return}W&&nn(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,g,v,ce,E):I&&(C!==Ge||k>0&&k&64)?R(I,p,g,!1,!0):(C===Ge&&k&384||!v&&M&16)&&R(T,p,g),E&&Is(f)}(Y&&(se=N&&N.onVnodeUnmounted)||W)&&Me(()=>{se&&ut(se,p,f),W&&nn(f,null,p,"unmounted")},g)},Is=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===Ge){y(g,E);return}if(p===co){we(f);return}const C=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:N,delayLeave:w}=v,T=()=>N(g,C);w?w(f.el,C,T):T()}else C()},y=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},O=(f,p,g)=>{const{bum:E,scope:v,update:C,subTree:N,um:w}=f;E&&Fi(E),v.stop(),C&&(C.active=!1,Ve(N,f,p,g)),w&&Me(w,p),Me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(f,p,g,E=!1,v=!1,C=0)=>{for(let N=C;N<f.length;N++)Ve(f[N],p,g,E,v)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ne=(f,p,g)=>{f==null?p._vnode&&Ve(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,g),ef(),p._vnode=f},ce={p:S,um:Ve,m:lt,r:Is,mt:On,mc:xe,pc:Fe,pbc:yt,n:x,o:t};let z,H;return e&&([z,H]=e(ce)),{render:ne,hydrate:z,createApp:YI(ne,z)}}function sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yf(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=$t(i[r]),a.el=o.el),n||yf(o,a))}}function XI(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const ZI=t=>t.__isTeleport,Ge=Symbol(void 0),bl=Symbol(void 0),Sn=Symbol(void 0),co=Symbol(void 0),$s=[];let Ze=null;function Ct(t=!1){$s.push(Ze=t?null:[])}function eb(){$s.pop(),Ze=$s[$s.length-1]||null}let ai=1;function Jc(t){ai+=t}function vf(t){return t.dynamicChildren=ai>0?Ze||Yn:null,eb(),ai>0&&Ze&&Ze.push(t),t}function Kt(t,e,n,s,i,r){return vf(J(t,e,n,s,i,r,!0))}function tb(t,e,n,s,i){return vf(ge(t,e,n,s,i,!0))}function Zo(t){return t?t.__v_isVNode===!0:!1}function Rs(t,e){return t.type===e.type&&t.key===e.key}const Vr="__vInternal",Ef=({key:t})=>t!=null?t:null,Bi=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Ne(t)||B(t)?{i:Xe,r:t,k:e,f:!!n}:t:null;function J(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ef(e),ref:e&&Bi(e),scopeId:Br,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(wl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),ai>0&&!o&&Ze&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ze.push(l),l}const ge=nb;function nb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===MI)&&(t=Sn),Zo(t)){const a=os(t,e,!0);return n&&wl(a,n),ai>0&&!r&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(t)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(pb(t)&&(t=t.__vccOpts),e){e=sb(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=Gn(a)),me(l)&&(Vd(l)&&!$(l)&&(l=Oe({},l)),e.style=al(l))}const o=be(t)?1:vI(t)?128:ZI(t)?64:me(t)?4:B(t)?2:0;return J(t,e,n,s,i,o,r,!0)}function sb(t){return t?Vd(t)||Vr in t?Oe({},t):t:null}function os(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?rb(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ef(a),ref:e&&e.ref?n&&i?$(i)?i.concat(Bi(e)):[i,Bi(e)]:Bi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&os(t.ssContent),ssFallback:t.ssFallback&&os(t.ssFallback),el:t.el,anchor:t.anchor}}function wi(t=" ",e=0){return ge(bl,null,t,e)}function ib(t="",e=!1){return e?(Ct(),tb(Sn,null,t)):ge(Sn,null,t)}function ft(t){return t==null||typeof t=="boolean"?ge(Sn):$(t)?ge(Ge,null,t.slice()):typeof t=="object"?$t(t):ge(bl,null,String(t))}function $t(t){return t.el===null||t.memo?t:os(t)}function wl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),wl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Vr in e)?e._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),s&64?(n=16,e=[wi(e)]):n=8);t.children=e,t.shapeFlag|=n}function rb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Gn([e.class,s.class]));else if(i==="style")e.style=al([e.style,s.style]);else if(Or(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ut(t,e,n,s=null){nt(t,e,7,[n,s])}const ob=mf();let ab=0;function lb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ob,r={uid:ab++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new NE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ff(s,i),emitsOptions:nf(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=dI.bind(null,r),t.ce&&t.ce(r),r}let Se=null;const as=t=>{Se=t,t.scope.on()},gn=()=>{Se&&Se.scope.off(),Se=null};function If(t){return t.vnode.shapeFlag&4}let li=!1;function cb(t,e=!1){li=e;const{props:n,children:s}=t.vnode,i=If(t);VI(t,n,i,e),zI(t,s);const r=i?ub(t,e):void 0;return li=!1,r}function ub(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jd(new Proxy(t.ctx,FI));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?db(t):null;as(t),ys();const r=Xt(s,t,0,[t.props,i]);if(vs(),gn(),Ad(r)){if(r.then(gn,gn),e)return r.then(o=>{Xc(t,o,e)}).catch(o=>{Ur(o,t,0)});t.asyncDep=r}else Xc(t,r,e)}else bf(t,e)}function Xc(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Gd(e)),bf(t,n)}let Zc;function bf(t,e,n){const s=t.type;if(!t.render){if(!e&&Zc&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:r,delimiters:a},o),l);s.render=Zc(i,c)}}t.render=s.render||tt}as(t),ys(),UI(t),vs(),gn()}function hb(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function db(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=hb(t))},slots:t.slots,emit:t.emit,expose:e}}function jr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gd(jd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)}}))}function fb(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function pb(t){return B(t)&&"__vccOpts"in t}const je=(t,e)=>oI(t,e,li);function wf(t,e,n){const s=arguments.length;return s===2?me(e)&&!$(e)?Zo(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zo(n)&&(n=[n]),ge(t,e,n))}const _b="3.2.37",gb="http://www.w3.org/2000/svg",cn=typeof document!="undefined"?document:null,eu=cn&&cn.createElement("template"),mb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?cn.createElementNS(gb,t):cn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{eu.innerHTML=s?`<svg>${t}</svg>`:t;const a=eu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yb(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vb(t,e,n){const s=t.style,i=be(n);if(n&&!i){for(const r in n)ea(s,r,n[r]);if(e&&!be(e))for(const r in e)n[r]==null&&ea(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const tu=/\s*!important$/;function ea(t,e,n){if($(n))n.forEach(s=>ea(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Eb(t,e);tu.test(n)?t.setProperty(ms(s),n.replace(tu,""),"important"):t[s]=n}}const nu=["Webkit","Moz","ms"],uo={};function Eb(t,e){const n=uo[e];if(n)return n;let s=gt(e);if(s!=="filter"&&s in t)return uo[e]=s;s=Dr(s);for(let i=0;i<nu.length;i++){const r=nu[i]+s;if(r in t)return uo[e]=r}return e}const su="http://www.w3.org/1999/xlink";function Ib(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(su,e.slice(6,e.length)):t.setAttributeNS(su,e,n);else{const r=gE(e);n==null||r&&!Sd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function bb(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Cf,wb]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ta=0;const Cb=Promise.resolve(),Tb=()=>{ta=0},Sb=()=>ta||(Cb.then(Tb),ta=Cf());function Wn(t,e,n,s){t.addEventListener(e,n,s)}function Rb(t,e,n,s){t.removeEventListener(e,n,s)}function Nb(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Ab(e);if(s){const c=r[e]=Pb(s,i);Wn(t,a,c,l)}else o&&(Rb(t,a,o,l),r[e]=void 0)}}const iu=/(?:Once|Passive|Capture)$/;function Ab(t){let e;if(iu.test(t)){e={};let n;for(;n=t.match(iu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ms(t.slice(2)),e]}function Pb(t,e){const n=s=>{const i=s.timeStamp||Cf();(wb||i>=n.attached-1)&&nt(kb(s,n.value),e,5,[s])};return n.value=t,n.attached=Sb(),n}function kb(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ru=/^on[a-z]/,Ob=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?yb(t,s,i):e==="style"?vb(t,n,s):Or(e)?ll(e)||Nb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xb(t,e,s,i))?bb(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ib(t,e,s,i))};function xb(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ru.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ru.test(e)&&be(n)?!1:e in t}const ou=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Fi(e,n):e};function Mb(t){t.target.composing=!0}function au(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=ou(i);const r=s||i.props&&i.props.type==="number";Wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=$o(a)),t._assign(a)}),n&&Wn(t,"change",()=>{t.value=t.value.trim()}),e||(Wn(t,"compositionstart",Mb),Wn(t,"compositionend",au),Wn(t,"change",au))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=ou(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&$o(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Db=["ctrl","shift","alt","meta"],Lb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Db.some(n=>t[`${n}Key`]&&!e.includes(n))},lu=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Lb[e[i]];if(r&&r(n,e))return}return t(n,...s)},Fb=Oe({patchProp:Ob},mb);let cu;function Ub(){return cu||(cu=QI(Fb))}const Wb=(...t)=>{const e=Ub().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=$b(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $b(t){return be(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const $n=typeof window!="undefined";function Bb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const re=Object.assign;function ho(t,e){const n={};for(const s in e){const i=e[s];n[s]=rt(i)?i.map(t):t(i)}return n}const Bs=()=>{},rt=Array.isArray,Hb=/\/$/,Vb=t=>t.replace(Hb,"");function fo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Kb(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function jb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qb(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ls(e.matched[s],n.matched[i])&&Tf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zb(t[n],e[n]))return!1;return!0}function zb(t,e){return rt(t)?hu(t,e):rt(e)?hu(e,t):t===e}function hu(t,e){return rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Kb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hs||(Hs={}));function Gb(t){if(!t)if($n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vb(t)}const Yb=/^[^#]+#/;function Qb(t,e){return t.replace(Yb,"#")+e}function Jb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const qr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Jb(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function du(t,e){return(history.state?history.state.position-e:-1)+t}const na=new Map;function Zb(t,e){na.set(t,e)}function ew(t){const e=na.get(t);return na.delete(t),e}let tw=()=>location.protocol+"//"+location.host;function Sf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),uu(l,"")}return uu(n,t)+s+i}function nw(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Sf(t,location),m=n.value,A=e.value;let S=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}S=A?d.position-A.position:0}else s(_);i.forEach(P=>{P(n.value,m,{delta:S,type:ci.pop,direction:S?S>0?Hs.forward:Hs.back:Hs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;!d.state||d.replaceState(re({},d.state,{scroll:qr()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function fu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?qr():null}}function sw(t){const{history:e,location:n}=window,s={value:Sf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:tw()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=re({},e.state,fu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=re({},i.value,e.state,{forward:l,scroll:qr()});r(u.current,u,!0);const h=re({},fu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function iw(t){t=Gb(t);const e=sw(t),n=nw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=re({location:"",base:t,go:s,createHref:Qb.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function rw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),iw(t)}function ow(t){return typeof t=="string"||t&&typeof t=="object"}function Rf(t){return typeof t=="string"||typeof t=="symbol"}const Ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nf=Symbol("");var pu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pu||(pu={}));function cs(t,e){return re(new Error,{type:t,[Nf]:!0},e)}function Ut(t,e){return t instanceof Error&&Nf in t&&(e==null||!!(t.type&e))}const _u="[^/]+?",aw={sensitive:!1,strict:!1,start:!0,end:!0},lw=/[.+*?^${}()[\]/\\]/g;function cw(t,e){const n=re({},aw,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(lw,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:A,optional:S,regexp:P}=d;r.push({name:m,repeatable:A,optional:S});const F=P||_u;if(F!==_u){_+=10;try{new RegExp(`(${F})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+Q.message)}}let V=A?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(V=S&&c.length<2?`(?:/${V})`:"/"+V),S&&(V+="?"),i+=V,_+=20,S&&(_+=-8),A&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:A,optional:S}=_,P=m in c?c[m]:"";if(rt(P)&&!A)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=rt(P)?P.join("/"):P;if(!F)if(S)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u}return{re:o,score:s,keys:r,parse:a,stringify:l}}function uw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function hw(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=uw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(gu(s))return 1;if(gu(i))return-1}return i.length-s.length}function gu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dw={type:0,value:""},fw=/[a-zA-Z0-9_]/;function pw(t){if(!t)return[[]];if(t==="/")return[[dw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:fw.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function _w(t,e,n){const s=cw(pw(t.path),n),i=re(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function gw(t,e){const n=[],s=new Map;e=yu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=yw(u);m.aliasOf=d&&d.record;const A=yu(e,u),S=[m];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of V)S.push(re({},m,{components:d?d.record.components:m.components,path:Q,aliasOf:d?d.record:m}))}let P,F;for(const V of S){const{path:Q}=V;if(h&&Q[0]!=="/"){const we=h.record.path,Ce=we[we.length-1]==="/"?"":"/";V.path=h.record.path+(Q&&Ce+Q)}if(P=_w(V,h,A),d?d.alias.push(P):(F=F||P,F!==P&&F.alias.push(P),_&&u.name&&!mu(P)&&o(u.name)),m.children){const we=m.children;for(let Ce=0;Ce<we.length;Ce++)r(we[Ce],P,d&&d.children[Ce])}d=d||P,l(P)}return F?()=>{o(F)}:Bs}function o(u){if(Rf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&hw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Af(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!mu(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,A;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw cs(1,{location:u});A=d.record.name,_=re(mw(h.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(F=>F.re.test(m)),d&&(_=d.parse(m),A=d.record.name);else{if(d=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!d)throw cs(1,{location:u,currentLocation:h});A=d.record.name,_=re({},h.params,u.params),m=d.stringify(_)}const S=[];let P=d;for(;P;)S.unshift(P.record),P=P.parent;return{name:A,path:m,params:_,matched:S,meta:Ew(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function mw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function yw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:vw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function vw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function mu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ew(t){return t.reduce((e,n)=>re(e,n.meta),{})}function yu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Af(t,e){return e.children.some(n=>n===t||Af(t,n))}const Pf=/#/g,Iw=/&/g,bw=/\//g,ww=/=/g,Cw=/\?/g,kf=/\+/g,Tw=/%5B/g,Sw=/%5D/g,Of=/%5E/g,Rw=/%60/g,xf=/%7B/g,Nw=/%7C/g,Mf=/%7D/g,Aw=/%20/g;function Cl(t){return encodeURI(""+t).replace(Nw,"|").replace(Tw,"[").replace(Sw,"]")}function Pw(t){return Cl(t).replace(xf,"{").replace(Mf,"}").replace(Of,"^")}function sa(t){return Cl(t).replace(kf,"%2B").replace(Aw,"+").replace(Pf,"%23").replace(Iw,"%26").replace(Rw,"`").replace(xf,"{").replace(Mf,"}").replace(Of,"^")}function kw(t){return sa(t).replace(ww,"%3D")}function Ow(t){return Cl(t).replace(Pf,"%23").replace(Cw,"%3F")}function xw(t){return t==null?"":Ow(t).replace(bw,"%2F")}function dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Mw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(kf," "),o=r.indexOf("="),a=dr(o<0?r:r.slice(0,o)),l=o<0?null:dr(r.slice(o+1));if(a in e){let c=e[a];rt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vu(t){let e="";for(let n in t){const s=t[n];if(n=kw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(s)?s.map(r=>r&&sa(r)):[s&&sa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Dw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=rt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Lw=Symbol(""),Eu=Symbol(""),Tl=Symbol(""),Df=Symbol(""),ia=Symbol("");function Ns(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(cs(4,{from:n,to:e})):h instanceof Error?a(h):ow(h)?a(cs(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function po(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Fw(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Bt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Bb(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Bt(d,n,s,r,o)()}))}}return i}function Fw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Iu(t){const e=Rt(Tl),n=Rt(Df),s=je(()=>e.resolve(St(t.to))),i=je(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ls.bind(null,u));if(d>-1)return d;const _=bu(l[c-2]);return c>1&&bu(u)===_&&h[h.length-1].path!==_?h.findIndex(ls.bind(null,l[c-2])):d}),r=je(()=>i.value>-1&&$w(n.params,s.value.params)),o=je(()=>i.value>-1&&i.value===n.matched.length-1&&Tf(n.params,s.value.params));function a(l={}){return Ww(l)?e[St(t.replace)?"replace":"push"](St(t.to)).catch(Bs):Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Uw=An({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Iu,setup(t,{slots:e}){const n=Es(Iu(t)),{options:s}=Rt(Tl),i=je(()=>({[wu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[wu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:wf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ra=Uw;function Ww(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $w(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!rt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function bu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wu=(t,e,n)=>t!=null?t:e!=null?e:n,Bw=An({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Rt(ia),i=je(()=>t.route||s.value),r=Rt(Eu,0),o=je(()=>{let c=St(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=je(()=>i.value.matched[o.value]);Ui(Eu,je(()=>o.value+1)),Ui(Lw,a),Ui(ia,i);const l=Fr();return Wi(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!ls(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=i.value,u=a.value,h=u&&u.components[t.name],d=t.name;if(!h)return Cu(n.default,{Component:h,route:c});const _=u.props[t.name],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,S=wf(h,re({},m,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return Cu(n.default,{Component:S,route:c})||S}}});function Cu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lf=Bw;function Hw(t){const e=gw(t.routes,t),n=t.parseQuery||Mw,s=t.stringifyQuery||vu,i=t.history,r=Ns(),o=Ns(),a=Ns(),l=nI(Ft);let c=Ft;$n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ho.bind(null,y=>""+y),h=ho.bind(null,xw),d=ho.bind(null,dr);function _(y,O){let R,x;return Rf(y)?(R=e.getRecordMatcher(y),x=O):x=y,e.addRoute(x,R)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function A(){return e.getRoutes().map(y=>y.record)}function S(y){return!!e.getRecordMatcher(y)}function P(y,O){if(O=re({},O||l.value),typeof y=="string"){const H=fo(n,y,O.path),f=e.resolve({path:H.path},O),p=i.createHref(H.fullPath);return re(H,f,{params:d(f.params),hash:dr(H.hash),redirectedFrom:void 0,href:p})}let R;if("path"in y)R=re({},y,{path:fo(n,y.path,O.path).path});else{const H=re({},y.params);for(const f in H)H[f]==null&&delete H[f];R=re({},y,{params:h(y.params)}),O.params=h(O.params)}const x=e.resolve(R,O),ne=y.hash||"";x.params=u(d(x.params));const ce=jb(s,re({},y,{hash:Pw(ne),path:x.path})),z=i.createHref(ce);return re({fullPath:ce,hash:ne,query:s===vu?Dw(y.query):y.query||{}},x,{redirectedFrom:void 0,href:z})}function F(y){return typeof y=="string"?fo(n,y,l.value.path):re({},y)}function V(y,O){if(c!==y)return cs(8,{from:O,to:y})}function Q(y){return He(y)}function we(y){return Q(re(F(y),{replace:!0}))}function Ce(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let x=typeof R=="function"?R(y):R;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=F(x):{path:x},x.params={}),re({query:y.query,hash:y.hash,params:"path"in x?{}:y.params},x)}}function He(y,O){const R=c=P(y),x=l.value,ne=y.state,ce=y.force,z=y.replace===!0,H=Ce(R);if(H)return He(re(F(H),{state:ne,force:ce,replace:z}),O||R);const f=R;f.redirectedFrom=O;let p;return!ce&&qb(s,x,R)&&(p=cs(16,{to:f,from:x}),xn(x,x,!0,!1)),(p?Promise.resolve(p):xe(f,x)).catch(g=>Ut(g)?Ut(g,2)?g:Fe(g):le(g,f,x)).then(g=>{if(g){if(Ut(g,2))return He(re(F(g.to),{state:ne,force:ce,replace:z}),O||f)}else g=yt(f,x,!0,z,ne);return at(f,x,g),g})}function xt(y,O){const R=V(y,O);return R?Promise.reject(R):Promise.resolve()}function xe(y,O){let R;const[x,ne,ce]=Vw(y,O);R=po(x.reverse(),"beforeRouteLeave",y,O);for(const H of x)H.leaveGuards.forEach(f=>{R.push(Bt(f,y,O))});const z=xt.bind(null,y,O);return R.push(z),Ln(R).then(()=>{R=[];for(const H of r.list())R.push(Bt(H,y,O));return R.push(z),Ln(R)}).then(()=>{R=po(ne,"beforeRouteUpdate",y,O);for(const H of ne)H.updateGuards.forEach(f=>{R.push(Bt(f,y,O))});return R.push(z),Ln(R)}).then(()=>{R=[];for(const H of y.matched)if(H.beforeEnter&&!O.matched.includes(H))if(rt(H.beforeEnter))for(const f of H.beforeEnter)R.push(Bt(f,y,O));else R.push(Bt(H.beforeEnter,y,O));return R.push(z),Ln(R)}).then(()=>(y.matched.forEach(H=>H.enterCallbacks={}),R=po(ce,"beforeRouteEnter",y,O),R.push(z),Ln(R))).then(()=>{R=[];for(const H of o.list())R.push(Bt(H,y,O));return R.push(z),Ln(R)}).catch(H=>Ut(H,8)?H:Promise.reject(H))}function at(y,O,R){for(const x of a.list())x(y,O,R)}function yt(y,O,R,x,ne){const ce=V(y,O);if(ce)return ce;const z=O===Ft,H=$n?history.state:{};R&&(x||z?i.replace(y.fullPath,re({scroll:z&&H&&H.scroll},ne)):i.push(y.fullPath,ne)),l.value=y,xn(y,O,R,z),Fe()}let ze;function Pn(){ze||(ze=i.listen((y,O,R)=>{if(!Is.listening)return;const x=P(y),ne=Ce(x);if(ne){He(re(ne,{replace:!0}),x).catch(Bs);return}c=x;const ce=l.value;$n&&Zb(du(ce.fullPath,R.delta),qr()),xe(x,ce).catch(z=>Ut(z,12)?z:Ut(z,2)?(He(z.to,x).then(H=>{Ut(H,20)&&!R.delta&&R.type===ci.pop&&i.go(-1,!1)}).catch(Bs),Promise.reject()):(R.delta&&i.go(-R.delta,!1),le(z,x,ce))).then(z=>{z=z||yt(x,ce,!1),z&&(R.delta?i.go(-R.delta,!1):R.type===ci.pop&&Ut(z,20)&&i.go(-1,!1)),at(x,ce,z)}).catch(Bs)}))}let kn=Ns(),On=Ns(),_e;function le(y,O,R){Fe(y);const x=On.list();return x.length?x.forEach(ne=>ne(y,O,R)):console.error(y),Promise.reject(y)}function te(){return _e&&l.value!==Ft?Promise.resolve():new Promise((y,O)=>{kn.add([y,O])})}function Fe(y){return _e||(_e=!y,Pn(),kn.list().forEach(([O,R])=>y?R(y):O()),kn.reset()),y}function xn(y,O,R,x){const{scrollBehavior:ne}=t;if(!$n||!ne)return Promise.resolve();const ce=!R&&ew(du(y.fullPath,0))||(x||!R)&&history.state&&history.state.scroll||null;return Qd().then(()=>ne(y,O,ce)).then(z=>z&&Xb(z)).catch(z=>le(z,y,O))}const vt=y=>i.go(y);let lt;const Ve=new Set,Is={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:S,getRoutes:A,resolve:P,options:t,push:Q,replace:we,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:On.add,isReady:te,install(y){const O=this;y.component("RouterLink",ra),y.component("RouterView",Lf),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>St(l)}),$n&&!lt&&l.value===Ft&&(lt=!0,Q(i.location).catch(ne=>{}));const R={};for(const ne in Ft)R[ne]=je(()=>l.value[ne]);y.provide(Tl,O),y.provide(Df,Es(R)),y.provide(ia,l);const x=y.unmount;Ve.add(y),y.unmount=function(){Ve.delete(y),Ve.size<1&&(c=Ft,ze&&ze(),ze=null,l.value=Ft,lt=!1,_e=!1),x()}}};return Is}function Ln(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Vw(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ls(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ls(c,l))||i.push(l))}return[n,s,i]}const jw={class:"app"},qw=wi("Home"),zw=wi("Rooms"),Kw=An({__name:"App",setup(t){return(e,n)=>(Ct(),Kt("div",jw,[J("header",null,[J("nav",null,[ge(St(ra),{to:"/"},{default:oi(()=>[qw]),_:1}),ge(St(ra),{to:"/rooms"},{default:oi(()=>[zw]),_:1})])]),ge(St(Lf))]))}});var zr=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Ff=(t=>(t[t.SIGN_IN=0]="SIGN_IN",t[t.SIGN_UP=1]="SIGN_UP",t))(Ff||{});const Gw=An({setup(){return{ActiveTab:Ff}},data(){return{emailSignIn:"",passwordSignIn:"",emailSignUp:"",passwordSignUp:"",passwordRepeatSignUp:"",activeTab:0,isChangingTab:!1}},methods:{signUp(){if(this.passwordSignUp.length!==0&&this.passwordSignUp===this.passwordRepeatSignUp){const t=Gs(),e=kr();z_(t,this.emailSignUp,this.passwordSignUp).then(async n=>{const s=n.user;console.log("user",s);const i=We(e,`users/${s.uid}`);await Pr(i,{userId:s.uid,displayName:"Karlsson p\xE5 taket"})}).catch(n=>{console.log(n),n.code,n.message})}},signIn(){const t=Gs();K_(t,this.emailSignIn,this.passwordSignIn).then(e=>{const n=e.user;console.log("user",n)}).catch(e=>{console.log(e),e.code,e.message}),console.log("Sign in!")},changeTab(t){this.activeTab=t}}}),Ot=t=>(fI("data-v-ecc3efb8"),t=t(),pI(),t),Yw={class:"page-wrapper"},Qw={class:"container"},Jw=Ot(()=>J("p",null,"SIGN IN: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),Xw=Ot(()=>J("p",null,"SIGN UP: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),Zw=Ot(()=>J("label",null,"Email",-1)),eC=Ot(()=>J("label",null,"Password",-1)),tC=Ot(()=>J("button",{type:"submit"},"Sign in",-1)),nC=Ot(()=>J("label",null,"Email",-1)),sC=Ot(()=>J("label",null,"Password",-1)),iC=Ot(()=>J("label",null,"Repeat password",-1)),rC=Ot(()=>J("button",{type:"submit"},"Sign up",-1));function oC(t,e,n,s,i,r){return Ct(),Kt("div",Yw,[J("div",Qw,[J("div",{class:Gn(["overlay",{right:t.activeTab===t.ActiveTab.SIGN_IN}])},[J("div",{class:Gn(["sign-in-info",{active:t.activeTab===t.ActiveTab.SIGN_IN,inactive:t.activeTab!==t.ActiveTab.SIGN_IN}])},[Jw,J("button",{onClick:e[0]||(e[0]=()=>t.changeTab(t.ActiveTab.SIGN_UP))},"Sign UP instead!")],2),J("div",{class:Gn(["sign-up-info",{active:t.activeTab===t.ActiveTab.SIGN_UP,inactive:t.activeTab!==t.ActiveTab.SIGN_UP}])},[Xw,J("button",{onClick:e[1]||(e[1]=()=>t.changeTab(t.ActiveTab.SIGN_IN))},"Sign IN instead!")],2)],2),J("form",{onSubmit:e[4]||(e[4]=lu((...o)=>t.signIn&&t.signIn(...o),["prevent"])),class:"sign-in-form"},[Zw,ln(J("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.emailSignIn=o)},null,512),[[un,t.emailSignIn]]),eC,ln(J("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=o=>t.passwordSignIn=o)},null,512),[[un,t.passwordSignIn]]),tC],32),J("form",{onSubmit:e[8]||(e[8]=lu((...o)=>t.signUp&&t.signUp(...o),["prevent"])),class:"sign-up-form"},[nC,ln(J("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.emailSignUp=o)},null,512),[[un,t.emailSignUp]]),sC,ln(J("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=o=>t.passwordSignUp=o)},null,512),[[un,t.passwordSignUp]]),iC,ln(J("input",{type:"password","onUpdate:modelValue":e[7]||(e[7]=o=>t.passwordRepeatSignUp=o)},null,512),[[un,t.passwordRepeatSignUp]]),rC],32)])])}var aC=zr(Gw,[["render",oC],["__scopeId","data-v-ecc3efb8"]]);const ht=kr(),lC=An({setup(){return{store:Rt("store")}},data(){return{room:null,autogeneratedMemberKey:null,unsubscribeOnValue:null,player:null,videoUrlInput:"",done:!1,updateTimeIntervalId:null}},computed:{roomId(){return this.$route.params.id}},watch:{roomId:{async handler(t,e,n){if(this.unsubscribeOnValue&&this.unsubscribeOnValue(),console.log(t,e),e&&await this.removeUserFromRoom(e),t){const s=We(ht,`rooms/${t}`);this.unsubscribeOnValue=Uo(s,i=>{const r=i.val();console.log("roomchange",r),this.room=r}),await this.addUserToRoom(t)}n(()=>{this.unsubscribeOnValue&&this.unsubscribeOnValue()})}},room:{handler(t,e){var n,s,i,r,o;if(t.videoId!==(e==null?void 0:e.videoId)&&((n=this.player)==null||n.loadVideoById(t.videoId,t.time)),t.host===this.store.auth.userId?this.updateTimeIntervalId===null&&(this.updateTimeIntervalId=setInterval(()=>{var l;const a=We(ht,`rooms/${this.roomId}`);Dt(a,{time:(l=this.player)==null?void 0:l.getCurrentTime()})},5e3)):this.updateTimeIntervalId!==null&&(clearInterval(this.updateTimeIntervalId),this.updateTimeIntervalId=null),t.host!==this.store.auth.userId){if(this.updateTimeIntervalId!==null&&clearTimeout(this.updateTimeIntervalId),console.log(t.host,this.store.auth.userId),console.log("state",t),e&&t.state!=="paused"&&Math.abs(t.time-e.time)>5&&((s=this.player)==null||s.seekTo(t.time,!0)),t.state!==(e==null?void 0:e.state))switch(t.state){case"playing":{(i=this.player)==null||i.playVideo();break}case"paused":{(r=this.player)==null||r.pauseVideo();break}}t.rate!==(e==null?void 0:e.rate)&&((o=this.player)==null||o.setPlaybackRate(t.rate))}}}},beforeCreate(){window.onYouTubeIframeAPIReady=()=>{this.initYoutube()}},created(){this.addUserToRoom(this.roomId)},mounted(){if(document.getElementById("youtubeIframeApi"))this.initYoutube();else{const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",e.id="youtubeIframeApi";const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}},methods:{async addUserToRoom(t){console.log("roomId",t);const e=We(ht,`users/${this.store.auth.userId}`);await Dt(e,{room:t});const n=We(ht,`rooms/${t}/members`);await Dt(n,{[this.store.auth.userId]:!0})},async removeUserFromRoom(t){const e=We(ht,`users/${this.store.auth.userId}`);await Dt(e,{room:null});const n=We(ht,`rooms/${t}/members`);await Dt(n,{[this.store.auth.userId]:!1})},initYoutube(){const t=new window.YT.Player("player",{height:"390",width:"640",videoId:null,playerVars:{autoplay:0,playsinline:1,enablejsapi:1},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange,onPlaybackRateChange:this.onPlayerPlaybackRateChange,onError:e=>console.log("error",e)}});this.player=t},async onPlayerReady(){const t=We(ht,`rooms/${this.roomId}`);this.unsubscribeOnValue=Uo(t,e=>{const n=e.val();console.log("roomchange",n),this.room=n})},onPlayerStateChange(t){var n,s,i;if(console.log(t.data),t.data===3)return;const e=We(ht,`rooms/${this.roomId}`);this.store.auth.userId===((n=this.room)==null?void 0:n.host)&&(t.data===1?Dt(e,{state:"playing",time:(s=this.player)==null?void 0:s.getCurrentTime()}):t.data===2&&Dt(e,{state:"paused",time:(i=this.player)==null?void 0:i.getCurrentTime()}))},onPlayerPlaybackRateChange(t){const e=We(ht,`rooms/${this.roomId}`);Dt(e,{rate:t.data})},async loadVideo(){const t=new URL(this.videoUrlInput),e=new URLSearchParams(t.search);if(e.has("v")){const n=e.get("v"),s=We(ht,`rooms/${this.roomId}/videoId`);await Pr(s,n)}}}}),cC=J("div",{id:"player"},null,-1),uC=wi("Go to other Id");function hC(t,e,n,s,i,r){const o=El("router-link");return Ct(),Kt(Ge,null,[ln(J("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.videoUrlInput=a),placeholder:"video url here"},null,512),[[un,t.videoUrlInput]]),J("button",{onClick:e[1]||(e[1]=(...a)=>t.loadVideo&&t.loadVideo(...a))},"Load video"),cC,ge(o,{to:"/rooms/4"},{default:oi(()=>[uC]),_:1})],64)}var dC=zr(lC,[["render",hC]]);const fC=An({computed:{roomId(){return this.$route.params.id}},components:{Video:dC}}),pC={class:"page-wrapper"};function _C(t,e,n,s,i,r){const o=El("Video");return Ct(),Kt("div",pC,[ge(o)])}var gC=zr(fC,[["render",_C]]);const mC=Gs(),Tu=kr(),yC=An({data(){return{unsubscribeOnRoomsValue:null,roomName:"",rooms:[]}},created(){const t=We(Tu,"rooms");this.unsubscribeOnRoomsValue=Uo(t,e=>{if(e.exists()){const n=[];e.forEach(s=>{if(s.exists()){const i=s.val();n.push({id:s.key,...i})}}),this.rooms=n}})},unmounted(){this.unsubscribeOnRoomsValue&&this.unsubscribeOnRoomsValue()},methods:{async onCreateRoom(){const t=await this.createRoom();this.$router.push(`/rooms/${t}`)},async createRoom(){const t=We(Tu,"rooms"),e=await rE(t);return await Pr(e,{host:mC.currentUser.uid,name:this.roomName,rate:1,time:0}),e.key}}}),vC={class:"page-wrapper"},EC={key:0};function IC(t,e,n,s,i,r){const o=El("RouterLink");return Ct(),Kt("div",vC,[ln(J("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.roomName=a),placeholder:"room name",required:""},null,512),[[un,t.roomName]]),J("button",{onClick:e[1]||(e[1]=(...a)=>t.onCreateRoom&&t.onCreateRoom(...a))},"Create room"),t.rooms.length!==0?(Ct(),Kt("ul",EC,[(Ct(!0),Kt(Ge,null,LI(t.rooms,a=>(Ct(),Kt("li",null,[ge(o,{to:{name:"room",params:{id:a.id}}},{default:oi(()=>[wi(EE(a.name),1)]),_:2},1032,["to"])]))),256))])):ib("",!0)])}var bC=zr(yC,[["render",IC]]);const wC=Hw({history:rw("/yt-watchmen/"),routes:[{path:"/",name:"login",component:aC},{path:"/rooms",name:"rooms",component:bC,meta:{requiresAuth:!0}},{path:"/rooms/:id",name:"room",component:gC,meta:{requiresAuth:!0}}]}),CC=Gs(),oa=Fr(null),aa=Fr(null),la=Fr(!1),TC=Es({auth:{userId:oa,userName:aa,loggedIn:la}});G_(CC,t=>{t?(console.log("user",t),oa.value=t.uid,aa.value=t.displayName,la.value=!0):(console.log("sign out"),oa.value=null,aa.value=null,la.value=!1)});const Sl=Wb(Kw);Sl.provide("store",TC);Sl.use(wC);setTimeout(()=>{Sl.mount("#app")},1e3);
