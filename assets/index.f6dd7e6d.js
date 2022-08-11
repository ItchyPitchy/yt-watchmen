var DT=Object.defineProperty;var LT=(n,e,t)=>e in n?DT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var gt=(n,e,t)=>(LT(n,typeof e!="symbol"?e+"":e,t),t);const NT=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};NT();/**
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
 */const Px={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Se=function(n,e){if(!n)throw ca(e)},ca=function(n){return new Error("Firebase Database ("+Px.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Dx=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},OT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(t[u],t[h],t[d],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dx(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):OT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Lx=function(n){const e=Dx(n);return sm.encodeByteArray(e,!0)},Nx=function(n){return Lx(n).replace(/\./g,"")},Ff=function(n){try{return sm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kT(n){return Ox(void 0,n)}function Ox(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!FT(t)||(n[t]=Ox(n[t],e[t]));return n}function FT(n){return n!=="__proto__"}/**
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
 */class rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function qt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function kx(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function om(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UT(){return qt().indexOf("Electron/")>=0}function Fx(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zT(){return qt().indexOf("MSAppHost/")>=0}function Ux(){return Px.NODE_ADMIN===!0}function BT(){return typeof indexedDB=="object"}function VT(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const GT="FirebaseError";class qr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=GT,Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bl.prototype.create)}}class Bl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?HT(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qr(s,a,i)}}function HT(n,e){return n.replace(WT,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const WT=/\{\$([^}]+)}/g;/**
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
 */function hl(n){return JSON.parse(n)}function Zt(n){return JSON.stringify(n)}/**
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
 */const zx=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=hl(Ff(r[0])||""),t=hl(Ff(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},$T=function(n){const e=zx(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},qT=function(n){const e=zx(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function cs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Vo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Uf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cu(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Iu(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(T_(r)&&T_(o)){if(!Iu(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function T_(n){return n!==null&&typeof n=="object"}/**
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
 */function ua(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Va(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Ga(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class jT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function KT(n,e){const t=new XT(n,e);return t.subscribe.bind(t)}class XT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=bd),s.error===void 0&&(s.error=bd),s.complete===void 0&&(s.complete=bd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bd(){}function QT(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ZT=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,Se(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gh=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function jt(n){return n&&n._delegate?n._delegate:n}class Fs{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class JT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new rm;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t1(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e1(n){return n===nr?void 0:n}function t1(n){return n.instantiationMode==="EAGER"}/**
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
 */class n1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new JT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var st;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(st||(st={}));const i1={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},s1=st.INFO,r1={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},o1=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=r1[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _h{constructor(e){this.name=e,this._logLevel=s1,this._logHandler=o1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in st))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?i1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...e),this._logHandler(this,st.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...e),this._logHandler(this,st.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,st.INFO,...e),this._logHandler(this,st.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,st.WARN,...e),this._logHandler(this,st.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...e),this._logHandler(this,st.ERROR,...e)}}const a1=(n,e)=>e.some(t=>n instanceof t);let C_,I_;function l1(){return C_||(C_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c1(){return I_||(I_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bx=new WeakMap,zf=new WeakMap,Vx=new WeakMap,Sd=new WeakMap,am=new WeakMap;function u1(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Rs(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bx.set(t,n)}).catch(()=>{}),am.set(e,n),e}function h1(n){if(zf.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});zf.set(n,e)}let Bf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vx.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function d1(n){Bf=n(Bf)}function f1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ed(this),e,...t);return Vx.set(i,e.sort?e.sort():[e]),Rs(i)}:c1().includes(n)?function(...e){return n.apply(Ed(this),e),Rs(Bx.get(this))}:function(...e){return Rs(n.apply(Ed(this),e))}}function p1(n){return typeof n=="function"?f1(n):(n instanceof IDBTransaction&&h1(n),a1(n,l1())?new Proxy(n,Bf):n)}function Rs(n){if(n instanceof IDBRequest)return u1(n);if(Sd.has(n))return Sd.get(n);const e=p1(n);return e!==n&&(Sd.set(n,e),am.set(e,n)),e}const Ed=n=>am.get(n);function m1(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Rs(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Rs(o.result),l.oldVersion,l.newVersion,Rs(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const g1=["get","getKey","getAll","getAllKeys","count"],_1=["put","add","delete","clear"],Md=new Map;function A_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Md.get(e))return Md.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=_1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||g1.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Md.set(e,r),r}d1(n=>({...n,get:(e,t,i)=>A_(e,t)||n.get(e,t,i),has:(e,t)=>!!A_(e,t)||n.has(e,t)}));/**
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
 */class v1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(y1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function y1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vf="@firebase/app",R_="0.7.28";/**
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
 */const lm=new _h("@firebase/app"),x1="@firebase/app-compat",w1="@firebase/analytics-compat",b1="@firebase/analytics",S1="@firebase/app-check-compat",E1="@firebase/app-check",M1="@firebase/auth",T1="@firebase/auth-compat",C1="@firebase/database",I1="@firebase/database-compat",A1="@firebase/functions",R1="@firebase/functions-compat",P1="@firebase/installations",D1="@firebase/installations-compat",L1="@firebase/messaging",N1="@firebase/messaging-compat",O1="@firebase/performance",k1="@firebase/performance-compat",F1="@firebase/remote-config",U1="@firebase/remote-config-compat",z1="@firebase/storage",B1="@firebase/storage-compat",V1="@firebase/firestore",G1="@firebase/firestore-compat",H1="firebase",W1="9.9.0";/**
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
 */const Gx="[DEFAULT]",$1={[Vf]:"fire-core",[x1]:"fire-core-compat",[b1]:"fire-analytics",[w1]:"fire-analytics-compat",[E1]:"fire-app-check",[S1]:"fire-app-check-compat",[M1]:"fire-auth",[T1]:"fire-auth-compat",[C1]:"fire-rtdb",[I1]:"fire-rtdb-compat",[A1]:"fire-fn",[R1]:"fire-fn-compat",[P1]:"fire-iid",[D1]:"fire-iid-compat",[L1]:"fire-fcm",[N1]:"fire-fcm-compat",[O1]:"fire-perf",[k1]:"fire-perf-compat",[F1]:"fire-rc",[U1]:"fire-rc-compat",[z1]:"fire-gcs",[B1]:"fire-gcs-compat",[V1]:"fire-fst",[G1]:"fire-fst-compat","fire-js":"fire-js",[H1]:"fire-js-all"};/**
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
 */const Au=new Map,Gf=new Map;function q1(n,e){try{n.container.addComponent(e)}catch(t){lm.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ar(n){const e=n.name;if(Gf.has(e))return lm.debug(`There were multiple attempts to register component ${e}.`),!1;Gf.set(e,n);for(const t of Au.values())q1(t,n);return!0}function vh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const j1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Rr=new Bl("app","Firebase",j1);/**
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
 */class K1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const ha=W1;function X1(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Gx,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});const s=Au.get(i);if(s){if(Iu(n,s.options)&&Iu(t,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const r=new n1(i);for(const a of Gf.values())r.addComponent(a);const o=new K1(n,t,r);return Au.set(i,o),o}function cm(n=Gx){const e=Au.get(n);if(!e)throw Rr.create("no-app",{appName:n});return e}function Li(n,e,t){var i;let s=(i=$1[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lm.warn(a.join(" "));return}Ar(new Fs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Y1="firebase-heartbeat-database",Q1=1,dl="firebase-heartbeat-store";let Td=null;function Hx(){return Td||(Td=m1(Y1,Q1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(dl)}}}).catch(n=>{throw Rr.create("storage-open",{originalErrorMessage:n.message})})),Td}async function Z1(n){var e;try{return(await Hx()).transaction(dl).objectStore(dl).get(Wx(n))}catch(t){throw Rr.create("storage-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message})}}async function P_(n,e){var t;try{const s=(await Hx()).transaction(dl,"readwrite");return await s.objectStore(dl).put(e,Wx(n)),s.done}catch(i){throw Rr.create("storage-set",{originalErrorMessage:(t=i)===null||t===void 0?void 0:t.message})}}function Wx(n){return`${n.name}!${n.options.appId}`}/**
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
 */const J1=1024,eC=30*24*60*60*1e3;class tC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iC(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=D_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=eC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=D_(),{heartbeatsToSend:t,unsentEntries:i}=nC(this._heartbeatsCache.heartbeats),s=Nx(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function D_(){return new Date().toISOString().substring(0,10)}function nC(n,e=J1){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),L_(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),L_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class iC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BT()?VT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Z1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return P_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return P_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function L_(n){return Nx(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sC(n){Ar(new Fs("platform-logger",e=>new v1(e),"PRIVATE")),Ar(new Fs("heartbeat",e=>new tC(e),"PRIVATE")),Li(Vf,R_,n),Li(Vf,R_,"esm2017"),Li("fire-js","")}sC("");var rC="firebase",oC="9.9.0";/**
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
 */Li(rC,oC,"app");function um(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function $x(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aC=$x,qx=new Bl("auth","Firebase",$x());/**
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
 */const N_=new _h("@firebase/auth");function uu(n,...e){N_.logLevel<=st.ERROR&&N_.error(`Auth (${ha}): ${n}`,...e)}/**
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
 */function _i(n,...e){throw hm(n,...e)}function Ni(n,...e){return hm(n,...e)}function lC(n,e,t){const i=Object.assign(Object.assign({},aC()),{[e]:t});return new Bl("auth","Firebase",i).create(e,{appName:n.name})}function hm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return qx.create(n,...e)}function Ue(n,e,...t){if(!n)throw hm(e,...t)}function Xi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uu(e),new Error(e)}function ss(n,e){n||Xi(e)}/**
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
 */const O_=new Map;function Yi(n){ss(n instanceof Function,"Expected a class definition");let e=O_.get(n);return e?(ss(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,O_.set(n,e),e)}/**
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
 */function cC(n,e){const t=vh(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Iu(r,e!=null?e:{}))return s;_i(s,"already-initialized")}return t.initialize({options:e})}function uC(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Yi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Hf(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function hC(){return k_()==="http:"||k_()==="https:"}function k_(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hC()||kx()||"connection"in navigator)?navigator.onLine:!0}function fC(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,ss(t>e,"Short delay should be less than long delay!"),this.isMobile=mh()||om()}get(){return dC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dm(n,e){ss(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class jx{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const mC=new Vl(3e4,6e4);function Gl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hl(n,e,t,i,s={}){return Kx(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ua(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),jx.fetch()(Xx(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Kx(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},pC),e);try{const s=new gC(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Cc(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cc(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cc(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lC(n,u,c);_i(n,u)}}catch(s){if(s instanceof qr)throw s;_i(n,"network-request-failed")}}async function Wl(n,e,t,i,s={}){const r=await Hl(n,e,t,i,s);return"mfaPendingCredential"in r&&_i(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Xx(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?dm(n.config,s):`${n.config.apiScheme}://${s}`}class gC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ni(this.auth,"network-request-failed")),mC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ni(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function _C(n,e){return Hl(n,"POST","/v1/accounts:delete",e)}async function vC(n,e){return Hl(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yC(n,e=!1){const t=jt(n),i=await t.getIdToken(e),s=fm(i);Ue(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ya(Cd(s.auth_time)),issuedAtTime:Ya(Cd(s.iat)),expirationTime:Ya(Cd(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Cd(n){return Number(n)*1e3}function fm(n){var e;const[t,i,s]=n.split(".");if(t===void 0||i===void 0||s===void 0)return uu("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ff(i);return r?JSON.parse(r):(uu("Failed to decode base64 JWT payload"),null)}catch(r){return uu("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function xC(n){const e=fm(n);return Ue(e,"internal-error"),Ue(typeof e.exp!="undefined","internal-error"),Ue(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qr&&wC(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function wC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class bC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yx{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ru(n){var e;const t=n.auth,i=await n.getIdToken(),s=await fl(n,vC(t,{idToken:i}));Ue(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?MC(r.providerUserInfo):[],a=EC(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Yx(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function SC(n){const e=jt(n);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EC(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function MC(n){return n.map(e=>{var{providerId:t}=e,i=um(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function TC(n,e){const t=await Kx(n,{},async()=>{const i=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Xx(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jx.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class pl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ue(e.idToken,"internal-error"),Ue(typeof e.idToken!="undefined","internal-error"),Ue(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):xC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await TC(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new pl;return i&&(Ue(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(Ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(Ue(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pl,this.toJSON())}_performRefresh(){return Xi("not implemented")}}/**
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
 */function ds(n,e){Ue(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class yr{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=um(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Yx(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await fl(this,this.stsTokenManager.getToken(this.auth,e));return Ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yC(this,e)}reload(){return SC(this)}_assign(e){this!==e&&(Ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ru(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fl(this,_C(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,f=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=t.createdAt)!==null&&c!==void 0?c:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:M,isAnonymous:E,providerData:R,stsTokenManager:F}=t;Ue(T&&F,e,"internal-error");const S=pl.fromJSON(this.name,F);Ue(typeof T=="string",e,"internal-error"),ds(h,e.name),ds(d,e.name),Ue(typeof M=="boolean",e,"internal-error"),Ue(typeof E=="boolean",e,"internal-error"),ds(p,e.name),ds(g,e.name),ds(m,e.name),ds(f,e.name),ds(_,e.name),ds(w,e.name);const A=new yr({uid:T,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:E,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:S,createdAt:_,lastLoginAt:w});return R&&Array.isArray(R)&&(A.providerData=R.map(j=>Object.assign({},j))),f&&(A._redirectEventId=f),A}static async _fromIdTokenResponse(e,t,i=!1){const s=new pl;s.updateFromServerResponse(t);const r=new yr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ru(r),r}}/**
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
 */class Qx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qx.type="NONE";const F_=Qx;/**
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
 */function hu(n,e,t){return`firebase:${n}:${e}:${t}`}class Ao{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=hu(this.userKey,s.apiKey,r),this.fullPersistenceKey=hu("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ao(Yi(F_),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Yi(F_);const o=hu(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=yr._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ao(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ao(r,e,i))}}/**
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
 */function U_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nw(e))return"Blackberry";if(iw(e))return"Webos";if(pm(e))return"Safari";if((e.includes("chrome/")||Jx(e))&&!e.includes("edge/"))return"Chrome";if(tw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Zx(n=qt()){return/firefox\//i.test(n)}function pm(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jx(n=qt()){return/crios\//i.test(n)}function ew(n=qt()){return/iemobile/i.test(n)}function tw(n=qt()){return/android/i.test(n)}function nw(n=qt()){return/blackberry/i.test(n)}function iw(n=qt()){return/webos/i.test(n)}function yh(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CC(n=qt()){var e;return yh(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IC(){return Fx()&&document.documentMode===10}function sw(n=qt()){return yh(n)||tw(n)||iw(n)||nw(n)||/windows phone/i.test(n)||ew(n)}function AC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rw(n,e=[]){let t;switch(n){case"Browser":t=U_(qt());break;case"Worker":t=`${U_(qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ha}/${i}`}/**
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
 */class RC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=s)===null||t===void 0?void 0:t.message})}}}/**
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
 */class PC{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new z_(this),this.idTokenSubscription=new z_(this),this.beforeStateQueue=new RC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qx,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yi(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Ru(e)}catch(i){if(((t=i)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?jt(e):null;return t&&Ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yi(e)||this._popupRedirectResolver;Ue(t,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ue(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function xh(n){return jt(n)}class z_{constructor(e){this.auth=e,this.observer=null,this.addObserver=KT(t=>this.observer=t)}get next(){return Ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class mm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xi("not implemented")}_getIdTokenResponse(e){return Xi("not implemented")}_linkToIdToken(e,t){return Xi("not implemented")}_getReauthenticationResolver(e){return Xi("not implemented")}}async function DC(n,e){return Hl(n,"POST","/v1/accounts:update",e)}/**
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
 */async function LC(n,e){return Wl(n,"POST","/v1/accounts:signInWithPassword",Gl(n,e))}/**
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
 */async function NC(n,e){return Wl(n,"POST","/v1/accounts:signInWithEmailLink",Gl(n,e))}async function OC(n,e){return Wl(n,"POST","/v1/accounts:signInWithEmailLink",Gl(n,e))}/**
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
 */class ml extends mm{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ml(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ml(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return LC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NC(e,{email:this._email,oobCode:this._password});default:_i(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return DC(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OC(e,{idToken:t,email:this._email,oobCode:this._password});default:_i(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ro(n,e){return Wl(n,"POST","/v1/accounts:signInWithIdp",Gl(n,e))}/**
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
 */const kC="http://localhost";class Pr extends mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_i("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=um(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Pr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ro(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ro(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ro(e,t)}buildRequest(){const e={requestUri:kC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ua(t)}return e}}/**
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
 */function FC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UC(n){const e=Va(Ga(n)).link,t=e?Va(Ga(e)).deep_link_id:null,i=Va(Ga(n)).deep_link_id;return(i?Va(Ga(i)).link:null)||i||t||e||n}class gm{constructor(e){var t,i,s,r,o,a;const l=Va(Ga(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=FC((s=l.mode)!==null&&s!==void 0?s:null);Ue(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=UC(e);try{return new gm(t)}catch{return null}}}/**
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
 */class da{constructor(){this.providerId=da.PROVIDER_ID}static credential(e,t){return ml._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=gm.parseLink(t);return Ue(i,"argument-error"),ml._fromEmailAndCode(e,i.code,i.tenantId)}}da.PROVIDER_ID="password";da.EMAIL_PASSWORD_SIGN_IN_METHOD="password";da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ow{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $l extends ow{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ts extends $l{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ts.credential(e.oauthAccessToken)}catch{return null}}}Ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ts.PROVIDER_ID="facebook.com";/**
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
 */class Cs extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pr._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Cs.credential(t,i)}catch{return null}}}Cs.GOOGLE_SIGN_IN_METHOD="google.com";Cs.PROVIDER_ID="google.com";/**
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
 */class Is extends $l{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
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
 */class As extends $l{constructor(){super("twitter.com")}static credential(e,t){return Pr._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return As.credential(t,i)}catch{return null}}}As.TWITTER_SIGN_IN_METHOD="twitter.com";As.PROVIDER_ID="twitter.com";/**
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
 */async function zC(n,e){return Wl(n,"POST","/v1/accounts:signUp",Gl(n,e))}/**
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
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await yr._fromIdTokenResponse(e,i,s),o=B_(i);return new Dr({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=B_(i);return new Dr({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function B_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Pu extends qr{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Pu.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Pu(e,t,i,s)}}function aw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Pu._fromErrorAndOperation(n,r,e,i):r})}async function BC(n,e,t=!1){const i=await fl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dr._forOperation(n,"link",i)}/**
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
 */async function VC(n,e,t=!1){var i;const{auth:s}=n,r="reauthenticate";try{const o=await fl(n,aw(s,r,e,n),t);Ue(o.idToken,s,"internal-error");const a=fm(o.idToken);Ue(a,s,"internal-error");const{sub:l}=a;return Ue(n.uid===l,s,"user-mismatch"),Dr._forOperation(n,r,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&_i(s,"user-mismatch"),o}}/**
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
 */async function lw(n,e,t=!1){const i="signIn",s=await aw(n,i,e),r=await Dr._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function GC(n,e){return lw(xh(n),e)}async function HC(n,e,t){const i=xh(n),s=await zC(i,{returnSecureToken:!0,email:e,password:t}),r=await Dr._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function WC(n,e,t){return GC(jt(n),da.credential(e,t))}function cw(n,e,t,i){return jt(n).onAuthStateChanged(e,t,i)}const Du="__sak";/**
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
 */class uw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Du,"1"),this.storage.removeItem(Du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $C(){const n=qt();return pm(n)||yh(n)}const qC=1e3,jC=10;class hw extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$C()&&AC(),this.fallbackToPolling=sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);IC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jC):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},qC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hw.type="LOCAL";const KC=hw;/**
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
 */class dw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dw.type="SESSION";const fw=dw;/**
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
 */function XC(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new wh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await XC(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wh.receivers=[];/**
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
 */function _m(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class YC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=_m("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Oi(){return window}function QC(n){Oi().location.href=n}/**
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
 */function pw(){return typeof Oi().WorkerGlobalScope!="undefined"&&typeof Oi().importScripts=="function"}async function ZC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function eI(){return pw()?self:null}/**
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
 */const mw="firebaseLocalStorageDb",tI=1,Lu="firebaseLocalStorage",gw="fbase_key";class ql{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bh(n,e){return n.transaction([Lu],e?"readwrite":"readonly").objectStore(Lu)}function nI(){const n=indexedDB.deleteDatabase(mw);return new ql(n).toPromise()}function Wf(){const n=indexedDB.open(mw,tI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Lu,{keyPath:gw})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Lu)?e(i):(i.close(),await nI(),e(await Wf()))})})}async function V_(n,e,t){const i=bh(n,!0).put({[gw]:e,value:t});return new ql(i).toPromise()}async function iI(n,e){const t=bh(n,!1).get(e),i=await new ql(t).toPromise();return i===void 0?null:i.value}function G_(n,e){const t=bh(n,!0).delete(e);return new ql(t).toPromise()}const sI=800,rI=3;class _w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>rI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wh._getInstance(eI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZC(),!this.activeServiceWorker)return;this.sender=new YC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await V_(e,Du,"1"),await G_(e,Du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>V_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>iI(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>G_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=bh(s,!1).getAll();return new ql(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_w.type="LOCAL";const oI=_w;/**
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
 */function aI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function lI(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ni("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",aI().appendChild(i)})}function cI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Vl(3e4,6e4);/**
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
 */function uI(n,e){return e?Yi(e):(Ue(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class vm extends mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hI(n){return lw(n.auth,new vm(n),n.bypassAuthState)}function dI(n){const{auth:e,user:t}=n;return Ue(t,e,"internal-error"),VC(t,new vm(n),n.bypassAuthState)}async function fI(n){const{auth:e,user:t}=n;return Ue(t,e,"internal-error"),BC(t,new vm(n),n.bypassAuthState)}/**
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
 */class vw{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return dI;default:_i(this.auth,"internal-error")}}resolve(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ss(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pI=new Vl(2e3,1e4);class So extends vw{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ue(e,this.auth,"internal-error"),e}async onExecution(){ss(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ni(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ni(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,pI.get())};e()}}So.currentPopupAction=null;/**
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
 */const mI="pendingRedirect",du=new Map;class gI extends vw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=du.get(this.auth._key());if(!e){try{const i=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}du.set(this.auth._key(),e)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(n,e){const t=xI(e),i=yI(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function vI(n,e){du.set(n._key(),e)}function yI(n){return Yi(n._redirectPersistence)}function xI(n){return hu(mI,n.config.apiKey,n.name)}async function wI(n,e,t=!1){const i=xh(n),s=uI(i,e),o=await new gI(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const bI=10*60*1e3;class SI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yw(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ni(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bI&&this.cachedEventUids.clear(),this.cachedEventUids.has(H_(e))}saveEventToCache(e){this.cachedEventUids.add(H_(e)),this.lastProcessedEventTime=Date.now()}}function H_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yw(n);default:return!1}}/**
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
 */async function MI(n,e={}){return Hl(n,"GET","/v1/projects",e)}/**
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
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CI=/^https?/;async function II(n){if(n.config.emulator)return;const{authorizedDomains:e}=await MI(n);for(const t of e)try{if(AI(t))return}catch{}_i(n,"unauthorized-domain")}function AI(n){const e=Hf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!CI.test(t))return!1;if(TI.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const RI=new Vl(3e4,6e4);function W_(){const n=Oi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PI(n){return new Promise((e,t)=>{var i,s,r;function o(){W_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W_(),t(Ni(n,"network-request-failed"))},timeout:RI.get()})}if(!((s=(i=Oi().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Oi().gapi)===null||r===void 0)&&r.load)o();else{const a=cI("iframefcb");return Oi()[a]=()=>{gapi.load?o():t(Ni(n,"network-request-failed"))},lI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw fu=null,e})}let fu=null;function DI(n){return fu=fu||PI(n),fu}/**
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
 */const LI=new Vl(5e3,15e3),NI="__/auth/iframe",OI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(n){const e=n.config;Ue(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dm(e,OI):`https://${n.config.authDomain}/${NI}`,i={apiKey:e.apiKey,appName:n.name,v:ha},s=FI.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${ua(i).slice(1)}`}async function zI(n){const e=await DI(n),t=Oi().gapi;return Ue(t,n,"internal-error"),e.open({where:document.body,url:UI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ni(n,"network-request-failed"),a=Oi().setTimeout(()=>{r(o)},LI.get());function l(){Oi().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const BI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VI=500,GI=600,HI="_blank",WI="http://localhost";class $_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $I(n,e,t,i=VI,s=GI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BI),{width:i.toString(),height:s.toString(),top:r,left:o}),c=qt().toLowerCase();t&&(a=Jx(c)?HI:t),Zx(c)&&(e=e||WI,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(CC(c)&&a!=="_self")return qI(e||"",a),new $_(null);const h=window.open(e||"",a,u);Ue(h,n,"popup-blocked");try{h.focus()}catch{}return new $_(h)}function qI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const jI="__/auth/handler",KI="emulator/auth/handler";function q_(n,e,t,i,s,r){Ue(n.config.authDomain,n,"auth-domain-config-required"),Ue(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ha,eventId:s};if(e instanceof ow){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Uf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof $l){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${XI(n)}?${ua(a).slice(1)}`}function XI({config:n}){return n.emulator?dm(n,KI):`https://${n.authDomain}/${jI}`}/**
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
 */const Id="webStorageSupport";class YI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fw,this._completeRedirectFn=wI,this._overrideRedirectResult=vI}async _openPopup(e,t,i,s){var r;ss((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=q_(e,t,i,Hf(),s);return $I(e,o,_m())}async _openRedirect(e,t,i,s){return await this._originValidation(e),QC(q_(e,t,i,Hf(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ss(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await zI(e),i=new SI(e);return t.register("authEvent",s=>(Ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Id,{type:Id},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Id];o!==void 0&&t(!!o),_i(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=II(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sw()||pm()||yh()}}const QI=YI;var j_="@firebase/auth",K_="0.20.5";/**
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
 */class ZI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eA(n){Ar(new Fs("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{Ue(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Ue(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rw(n)},u=new PC(a,l,c);return uC(u,t),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ar(new Fs("auth-internal",e=>{const t=xh(e.getProvider("auth").getImmediate());return(i=>new ZI(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Li(j_,K_,JI(n)),Li(j_,K_,"esm2017")}/**
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
 */function gl(n=cm()){const e=vh(n,"auth");return e.isInitialized()?e.getImmediate():cC(n,{popupRedirectResolver:QI,persistence:[oI,KC,fw]})}eA("Browser");const X_="@firebase/database",Y_="0.13.3";/**
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
 */let xw="";function tA(n){xw=n}/**
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
 */class nA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Zt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:hl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class iA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return cs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ww=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nA(e)}}catch{}return new iA},ur=ww("localStorage"),$f=ww("sessionStorage");/**
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
 */const Po=new _h("@firebase/database"),sA=function(){let n=1;return function(){return n++}}(),bw=function(n){const e=ZT(n),t=new jT;t.update(e);const i=t.digest();return sm.encodeByteArray(i)},jl=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=jl.apply(null,i):typeof i=="object"?e+=Zt(i):e+=i,e+=" "}return e};let xr=null,Q_=!0;const rA=function(n,e){Se(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Po.logLevel=st.VERBOSE,xr=Po.log.bind(Po),e&&$f.set("logging_enabled",!0)):typeof n=="function"?xr=n:(xr=null,$f.remove("logging_enabled"))},an=function(...n){if(Q_===!0&&(Q_=!1,xr===null&&$f.get("logging_enabled")===!0&&rA(!0)),xr){const e=jl.apply(null,n);xr(e)}},Kl=function(n){return function(...e){an(n,...e)}},qf=function(...n){const e="FIREBASE INTERNAL ERROR: "+jl(...n);Po.error(e)},Lr=function(...n){const e=`FIREBASE FATAL ERROR: ${jl(...n)}`;throw Po.error(e),new Error(e)},Un=function(...n){const e="FIREBASE WARNING: "+jl(...n);Po.warn(e)},oA=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},aA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Go="[MIN_NAME]",Nr="[MAX_NAME]",fa=function(n,e){if(n===e)return 0;if(n===Go||e===Nr)return-1;if(e===Go||n===Nr)return 1;{const t=Z_(n),i=Z_(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},lA=function(n,e){return n===e?0:n<e?-1:1},Pa=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Zt(e))},ym=function(n){if(typeof n!="object"||n===null)return Zt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Zt(e[i]),t+=":",t+=ym(n[e[i]]);return t+="}",t},Ew=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ei(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Mw=function(n){Se(!Sw(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},cA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},hA=new RegExp("^-?(0*)\\d{1,10}$"),dA=-2147483648,fA=2147483647,Z_=function(n){if(hA.test(n)){const e=Number(n);if(e>=dA&&e<=fA)return e}return null},Xl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Un("Exception was thrown by user callback.",t),e},Math.floor(0))}},pA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qa=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class mA{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Un(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gA{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(an("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Un(e)}}class jf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jf.OWNER="owner";/**
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
 */const xm="5",Tw="v",Cw="s",Iw="r",Aw="f",Rw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pw="ls",Dw="p",Kf="ac",Lw="websocket",Nw="long_polling";/**
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
 */class _A{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ow(n,e,t){Se(typeof e=="string","typeof type must == string"),Se(typeof t=="object","typeof params must == object");let i;if(e===Lw)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Nw)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vA(n)&&(t.ns=n.namespace);const s=[];return ei(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class yA{constructor(){this.counters_={}}incrementCounter(e,t=1){cs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kT(this.counters_)}}/**
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
 */const Ad={},Rd={};function wm(n){const e=n.toString();return Ad[e]||(Ad[e]=new yA),Ad[e]}function xA(n,e){const t=n.toString();return Rd[t]||(Rd[t]=e()),Rd[t]}/**
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
 */class wA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Xl(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const J_="start",bA="close",SA="pLPCommand",EA="pRTLPCB",kw="id",Fw="pw",Uw="ser",MA="cb",TA="seg",CA="ts",IA="d",AA="dframe",zw=1870,Bw=30,RA=zw-Bw,PA=25e3,DA=3e4;class Eo{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kl(e),this.stats_=wm(t),this.urlFn=l=>(this.appCheckToken&&(l[Kf]=this.appCheckToken),Ow(t,Nw,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new wA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(DA)),aA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bm((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===J_)this.id=a,this.password=l;else if(o===bA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[J_]="t",i[Uw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[MA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Tw]=xm,this.transportSessionId&&(i[Cw]=this.transportSessionId),this.lastSessionId&&(i[Pw]=this.lastSessionId),this.applicationId&&(i[Dw]=this.applicationId),this.appCheckToken&&(i[Kf]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Rw.test(location.hostname)&&(i[Iw]=Aw);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Eo.forceAllow_=!0}static forceDisallow(){Eo.forceDisallow_=!0}static isAvailable(){return Eo.forceAllow_?!0:!Eo.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!cA()&&!uA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Lx(t),s=Ew(i,RA);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[AA]="t",i[kw]=e,i[Fw]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Zt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class bm{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sA(),window[SA+this.uniqueCallbackIdentifier]=e,window[EA+this.uniqueCallbackIdentifier]=t,this.myIFrame=bm.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){an("frame writing exception"),a.stack&&an(a.stack),an(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||an("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kw]=this.myID,e[Fw]=this.myPW,e[Uw]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bw+i.length<=zw;){const o=this.pendingSegs.shift();i=i+"&"+TA+s+"="+o.seg+"&"+CA+s+"="+o.ts+"&"+IA+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(PA)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{an("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const LA=16384,NA=45e3;let Nu=null;typeof MozWebSocket!="undefined"?Nu=MozWebSocket:typeof WebSocket!="undefined"&&(Nu=WebSocket);class ai{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kl(this.connId),this.stats_=wm(t),this.connURL=ai.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Tw]=xm,typeof location!="undefined"&&location.hostname&&Rw.test(location.hostname)&&(o[Iw]=Aw),t&&(o[Cw]=t),i&&(o[Pw]=i),s&&(o[Kf]=s),r&&(o[Dw]=r),Ow(e,Lw,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ur.set("previous_websocket_failure",!0);try{let i;Ux(),this.mySock=new Nu(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Nu!==null&&!ai.forceDisallow_}static previouslyFailed(){return ur.isInMemoryStorage||ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=hl(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Zt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ew(t,LA);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ai.responsesRequiredToBeHealthy=2;ai.healthyTimeout=3e4;/**
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
 */class _l{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Eo,ai]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ai&&ai.isAvailable();let i=t&&!ai.previouslyFailed();if(e.webSocketOnly&&(t||Un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ai];else{const s=this.transports_=[];for(const r of _l.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);_l.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_l.globalTransportInitialized_=!1;/**
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
 */const OA=6e4,kA=5e3,FA=10*1024,UA=100*1024,Pd="t",ev="d",zA="s",tv="r",BA="e",nv="o",iv="a",sv="n",rv="p",VA="h";class GA{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kl("c:"+this.id+":"),this.transportManager_=new _l(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Qa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pd in e){const t=e[Pd];t===iv?this.upgradeIfSecondaryHealthy_():t===tv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===nv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pa("t",e),i=Pa("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:iv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pa("t",e),i=Pa("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pa(Pd,e);if(ev in e){const i=e[ev];if(t===VA)this.onHandshake_(i);else if(t===sv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===zA?this.onConnectionShutdown_(i):t===tv?this.onReset_(i):t===BA?qf("Server Error: "+i):t===nv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qf("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xm!==i&&Un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Qa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Vw{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Gw{constructor(e){this.allowedEvents_=e,this.listeners_={},Se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){Se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ou extends Gw{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!mh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ou}getInitialEvent(e){return Se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ov=32,av=768;class St{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ft(){return new St("")}function et(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Us(n){return n.pieces_.length-n.pieceNum_}function bt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new St(n.pieces_,e)}function Hw(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function HA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ww(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function $w(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new St(e,0)}function Gt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof St)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new St(t,0)}function Ye(n){return n.pieceNum_>=n.pieces_.length}function Xn(n,e){const t=et(n),i=et(e);if(t===null)return e;if(t===i)return Xn(bt(n),bt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function qw(n,e){if(Us(n)!==Us(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ui(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Us(n)>Us(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class WA{constructor(e,t){this.errorPrefix_=t,this.parts_=Ww(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=gh(this.parts_[i]);jw(this)}}function $A(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=gh(e),jw(n)}function qA(n){const e=n.parts_.pop();n.byteLength_-=gh(e),n.parts_.length>0&&(n.byteLength_-=1)}function jw(n){if(n.byteLength_>av)throw new Error(n.errorPrefix_+"has a key path longer than "+av+" bytes ("+n.byteLength_+").");if(n.parts_.length>ov)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ov+") or object contains a cycle "+ir(n))}function ir(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Sm extends Gw{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Sm}getInitialEvent(e){return Se(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Da=1e3,jA=60*5*1e3,lv=30*1e3,KA=1.3,XA=3e4,YA="server_kill",cv=3;class Ji extends Vw{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ji.nextPersistentConnectionId_++,this.log_=Kl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Da,this.maxReconnectDelay_=jA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ux())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ou.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Zt(r)),Se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new rm,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Se(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ji.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&cs(e,"w")){const i=Vo(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$T(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),Se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Zt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qf("Unrecognized action received from server: "+Zt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XA&&(this.reconnectDelay_=Da),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ji.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){Se(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?an("getToken() completed but was canceled"):(an("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new GA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{Un(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(YA)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Un(h),l())}}}interrupt(e){an("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){an("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uf(this.interruptReasons_)&&(this.reconnectDelay_=Da,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ym(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new St(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){an("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cv&&(this.reconnectDelay_=lv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){an("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+xw.replace(/\./g,"-")]=1,mh()?e["framework.cordova"]=1:om()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ou.getInstance().currentlyOnline();return Uf(this.interruptReasons_)&&e}}Ji.nextPersistentConnectionId_=0;Ji.nextConnectionId_=0;/**
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
 */class tt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new tt(e,t)}}/**
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
 */class Sh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new tt(Go,e),s=new tt(Go,t);return this.compare(i,s)!==0}minPost(){return tt.MIN}}/**
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
 */let Ic;class Kw extends Sh{static get __EMPTY_NODE(){return Ic}static set __EMPTY_NODE(e){Ic=e}compare(e,t){return fa(e.name,t.name)}isDefinedOn(e){throw ca("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return tt.MIN}maxPost(){return new tt(Nr,Ic)}makePost(e,t){return Se(typeof e=="string","KeyIndex indexValue must always be a string."),new tt(e,Ic)}toString(){return".key"}}const Do=new Kw;/**
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
 */class Ac{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Vt.RED,this.left=s!=null?s:Dn.EMPTY_NODE,this.right=r!=null?r:Dn.EMPTY_NODE}copy(e,t,i,s,r){return new Vt(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Dn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class QA{copy(e,t,i,s,r){return this}insert(e,t,i){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dn{constructor(e,t=Dn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Dn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new Dn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ac(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ac(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ac(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ac(this.root_,null,this.comparator_,!0,e)}}Dn.EMPTY_NODE=new QA;/**
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
 */function ZA(n,e){return fa(n.name,e.name)}function Em(n,e){return fa(n,e)}/**
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
 */let Xf;function JA(n){Xf=n}const Xw=function(n){return typeof n=="number"?"number:"+Mw(n):"string:"+n},Yw=function(n){if(n.isLeafNode()){const e=n.val();Se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cs(e,".sv"),"Priority must be a string or number.")}else Se(n===Xf||n.isEmpty(),"priority of unexpected type.");Se(n===Xf||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let uv;class zt{constructor(e,t=zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yw(this.priorityNode_)}static set __childrenNodeConstructor(e){uv=e}static get __childrenNodeConstructor(){return uv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ye(e)?this:et(e)===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=et(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(Se(i!==".priority"||Us(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(bt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xw(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Mw(this.value_):e+=this.value_,this.lazyHash_=bw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof zt.__childrenNodeConstructor?-1:(Se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=zt.VALUE_TYPE_ORDER.indexOf(t),r=zt.VALUE_TYPE_ORDER.indexOf(i);return Se(s>=0,"Unknown leaf type: "+t),Se(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qw,Zw;function eR(n){Qw=n}function tR(n){Zw=n}class nR extends Sh{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?fa(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return tt.MIN}maxPost(){return new tt(Nr,new zt("[PRIORITY-POST]",Zw))}makePost(e,t){const i=Qw(e);return new tt(t,new zt("[PRIORITY-POST]",i))}toString(){return".priority"}}const un=new nR;/**
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
 */const iR=Math.log(2);class sR{constructor(e){const t=r=>parseInt(Math.log(r)/iR,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ku=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new Vt(d,h.node,Vt.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=s(l,p),m=s(p+1,c);return h=n[p],d=t?t(h):h,new Vt(d,h.node,Vt.BLACK,g,m)}},r=function(l){let c=null,u=null,h=n.length;const d=function(g,m){const f=h-g,_=h;h-=g;const w=s(f+1,_),T=n[f],M=t?t(T):T;p(new Vt(M,T.node,m,null,w))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),f=Math.pow(2,l.count-(g+1));m?d(f,Vt.BLACK):(d(f,Vt.BLACK),d(f,Vt.RED))}return u},o=new sR(n.length),a=r(o);return new Dn(i||e,a)};/**
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
 */let Dd;const to={};class Qi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Se(to&&un,"ChildrenNode.ts has not been loaded"),Dd=Dd||new Qi({".priority":to},{".priority":un}),Dd}get(e){const t=Vo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Dn?t:null}hasIndex(e){return cs(this.indexSet_,e.toString())}addIndex(e,t){Se(e!==Do,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(tt.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ku(i,e.getCompare()):a=to;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Qi(u,c)}addToIndexes(e,t){const i=Cu(this.indexes_,(s,r)=>{const o=Vo(this.indexSet_,r);if(Se(o,"Missing index implementation for "+r),s===to)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(tt.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ku(a,o.getCompare())}else return to;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new tt(e.name,a))),l.insert(e,e.node)}});return new Qi(i,this.indexSet_)}removeFromIndexes(e,t){const i=Cu(this.indexes_,s=>{if(s===to)return s;{const r=t.get(e.name);return r?s.remove(new tt(e.name,r)):s}});return new Qi(i,this.indexSet_)}}/**
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
 */let La;class lt{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Yw(this.priorityNode_),this.children_.isEmpty()&&Se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return La||(La=new lt(new Dn(Em),null,Qi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||La}updatePriority(e){return this.children_.isEmpty()?this:new lt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?La:t}}getChild(e){const t=et(e);return t===null?this:this.getImmediateChild(t).getChild(bt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new tt(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?La:this.priorityNode_;return new lt(s,o,r)}}updateChild(e,t){const i=et(e);if(i===null)return t;{Se(et(e)!==".priority"||Us(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(bt(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(un,(o,a)=>{t[o]=a.val(e),i++,r&&lt.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xw(this.getPriority().val())+":"),this.forEachChild(un,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":bw(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new tt(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new tt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new tt(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,tt.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,tt.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yl?-1:0}withIndex(e){if(e===Do||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new lt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Do||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(un),s=t.getIterator(un);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Do?null:this.indexMap_.get(e.toString())}}lt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rR extends lt{constructor(){super(new Dn(Em),lt.EMPTY_NODE,Qi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return lt.EMPTY_NODE}isEmpty(){return!1}}const Yl=new rR;Object.defineProperties(tt,{MIN:{value:new tt(Go,lt.EMPTY_NODE)},MAX:{value:new tt(Nr,Yl)}});Kw.__EMPTY_NODE=lt.EMPTY_NODE;zt.__childrenNodeConstructor=lt;JA(Yl);tR(Yl);/**
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
 */const oR=!0;function ln(n,e=null){if(n===null)return lt.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new zt(t,ln(e))}if(!(n instanceof Array)&&oR){const t=[];let i=!1;if(ei(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ln(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new tt(o,l)))}}),t.length===0)return lt.EMPTY_NODE;const r=ku(t,ZA,o=>o.name,Em);if(i){const o=ku(t,un.getCompare());return new lt(r,ln(e),new Qi({".priority":o},{".priority":un}))}else return new lt(r,ln(e),Qi.Default)}else{let t=lt.EMPTY_NODE;return ei(n,(i,s)=>{if(cs(n,i)&&i.substring(0,1)!=="."){const r=ln(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ln(e))}}eR(ln);/**
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
 */class aR extends Sh{constructor(e){super(),this.indexPath_=e,Se(!Ye(e)&&et(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?fa(e.name,t.name):r}makePost(e,t){const i=ln(e),s=lt.EMPTY_NODE.updateChild(this.indexPath_,i);return new tt(t,s)}maxPost(){const e=lt.EMPTY_NODE.updateChild(this.indexPath_,Yl);return new tt(Nr,e)}toString(){return Ww(this.indexPath_,0).join("/")}}/**
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
 */class lR extends Sh{compare(e,t){const i=e.node.compareTo(t.node);return i===0?fa(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return tt.MIN}maxPost(){return tt.MAX}makePost(e,t){const i=ln(e);return new tt(t,i)}toString(){return".value"}}const cR=new lR;/**
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
 */function uR(n){return{type:"value",snapshotNode:n}}function hR(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function dR(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function hv(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function fR(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Mm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=un}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Go}hasEnd(){return this.endSet_}getIndexEndValue(){return Se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===un}copy(){const e=new Mm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dv(n){const e={};if(n.isDefault())return e;let t;return n.index_===un?t="$priority":n.index_===cR?t="$value":n.index_===Do?t="$key":(Se(n.index_ instanceof aR,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Zt(t),n.startSet_&&(e.startAt=Zt(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+Zt(n.indexStartName_))),n.endSet_&&(e.endAt=Zt(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+Zt(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function fv(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==un&&(e.i=n.index_.toString()),e}/**
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
 */class Fu extends Vw{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Kl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Fu.getListenId_(e,i),a={};this.listens_[o]=a;const l=dv(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Vo(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=Fu.getListenId_(e,t);delete this.listens_[i]}get(e){const t=dv(e._queryParams),i=e._path.toString(),s=new rm;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ua(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hl(a.responseText)}catch{Un("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Un("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class pR{constructor(){this.rootNode_=lt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Uu(){return{value:null,children:new Map}}function Jw(n,e,t){if(Ye(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=et(e);n.children.has(i)||n.children.set(i,Uu());const s=n.children.get(i);e=bt(e),Jw(s,e,t)}}function Yf(n,e,t){n.value!==null?t(e,n.value):mR(n,(i,s)=>{const r=new St(e.toString()+"/"+i);Yf(s,r,t)})}function mR(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class gR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ei(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const pv=10*1e3,_R=30*1e3,vR=5*60*1e3;class yR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gR(e);const i=pv+(_R-pv)*Math.random();Qa(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ei(e,(s,r)=>{r>0&&cs(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Qa(this.reportStats_.bind(this),Math.floor(Math.random()*2*vR))}}/**
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
 */var Ri;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ri||(Ri={}));function eb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nb(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class zu{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ri.ACK_USER_WRITE,this.source=eb()}operationForChild(e){if(Ye(this.path)){if(this.affectedTree.value!=null)return Se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new St(e));return new zu(ft(),t,this.revert)}}else return Se(et(this.path)===e,"operationForChild called for unrelated child."),new zu(bt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Or{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ri.OVERWRITE}operationForChild(e){return Ye(this.path)?new Or(this.source,ft(),this.snap.getImmediateChild(e)):new Or(this.source,bt(this.path),this.snap)}}/**
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
 */class vl{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ri.MERGE}operationForChild(e){if(Ye(this.path)){const t=this.children.subtree(new St(e));return t.isEmpty()?null:t.value?new Or(this.source,ft(),t.value):new vl(this.source,ft(),t)}else return Se(et(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vl(this.source,bt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Tm{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ye(e))return this.isFullyInitialized()&&!this.filtered_;const t=et(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function xR(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fR(o.childName,o.snapshotNode))}),Na(n,s,"child_removed",e,i,t),Na(n,s,"child_added",e,i,t),Na(n,s,"child_moved",r,i,t),Na(n,s,"child_changed",e,i,t),Na(n,s,"value",e,i,t),s}function Na(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>bR(n,a,l)),o.forEach(a=>{const l=wR(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function wR(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function bR(n,e,t){if(e.childName==null||t.childName==null)throw ca("Should only compare child_ events.");const i=new tt(e.childName,e.snapshotNode),s=new tt(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function ib(n,e){return{eventCache:n,serverCache:e}}function Za(n,e,t,i){return ib(new Tm(e,t,i),n.serverCache)}function sb(n,e,t,i){return ib(n.eventCache,new Tm(e,t,i))}function Qf(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ld;const SR=()=>(Ld||(Ld=new Dn(lA)),Ld);class wt{constructor(e,t=SR()){this.value=e,this.children=t}static fromObject(e){let t=new wt(null);return ei(e,(i,s)=>{t=t.set(new St(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ft(),value:this.value};if(Ye(e))return null;{const i=et(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(bt(e),t);return r!=null?{path:Gt(new St(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ye(e))return this;{const t=et(e),i=this.children.get(t);return i!==null?i.subtree(bt(e)):new wt(null)}}set(e,t){if(Ye(e))return new wt(t,this.children);{const i=et(e),r=(this.children.get(i)||new wt(null)).set(bt(e),t),o=this.children.insert(i,r);return new wt(this.value,o)}}remove(e){if(Ye(e))return this.children.isEmpty()?new wt(null):new wt(null,this.children);{const t=et(e),i=this.children.get(t);if(i){const s=i.remove(bt(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new wt(null):new wt(this.value,r)}else return this}}get(e){if(Ye(e))return this.value;{const t=et(e),i=this.children.get(t);return i?i.get(bt(e)):null}}setTree(e,t){if(Ye(e))return t;{const i=et(e),r=(this.children.get(i)||new wt(null)).setTree(bt(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new wt(this.value,o)}}fold(e){return this.fold_(ft(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Gt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ft(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(Ye(e))return null;{const r=et(e),o=this.children.get(r);return o?o.findOnPath_(bt(e),Gt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ft(),t)}foreachOnPath_(e,t,i){if(Ye(e))return this;{this.value&&i(t,this.value);const s=et(e),r=this.children.get(s);return r?r.foreachOnPath_(bt(e),Gt(t,s),i):new wt(null)}}foreach(e){this.foreach_(ft(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Gt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class di{constructor(e){this.writeTree_=e}static empty(){return new di(new wt(null))}}function Ja(n,e,t){if(Ye(e))return new di(new wt(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Xn(s,e);return r=r.updateChild(o,t),new di(n.writeTree_.set(s,r))}else{const s=new wt(t),r=n.writeTree_.setTree(e,s);return new di(r)}}}function mv(n,e,t){let i=n;return ei(t,(s,r)=>{i=Ja(i,Gt(e,s),r)}),i}function gv(n,e){if(Ye(e))return di.empty();{const t=n.writeTree_.setTree(e,new wt(null));return new di(t)}}function Zf(n,e){return jr(n,e)!=null}function jr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Xn(t.path,e)):null}function _v(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(un,(i,s)=>{e.push(new tt(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new tt(i,s.value))}),e}function Ps(n,e){if(Ye(e))return n;{const t=jr(n,e);return t!=null?new di(new wt(t)):new di(n.writeTree_.subtree(e))}}function Jf(n){return n.writeTree_.isEmpty()}function Ho(n,e){return rb(ft(),n.writeTree_,e)}function rb(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(Se(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=rb(Gt(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Gt(n,".priority"),i)),t}}/**
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
 */function ob(n,e){return hb(e,n)}function ER(n,e,t,i,s){Se(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ja(n.visibleWrites,e,t)),n.lastWriteId=i}function MR(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function TR(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);Se(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&CR(a,i.path)?s=!1:ui(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return IR(n),!0;if(i.snap)n.visibleWrites=gv(n.visibleWrites,i.path);else{const a=i.children;ei(a,l=>{n.visibleWrites=gv(n.visibleWrites,Gt(i.path,l))})}return!0}else return!1}function CR(n,e){if(n.snap)return ui(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ui(Gt(n.path,t),e))return!0;return!1}function IR(n){n.visibleWrites=ab(n.allWrites,AR,ft()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function AR(n){return n.visible}function ab(n,e,t){let i=di.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ui(t,o)?(a=Xn(t,o),i=Ja(i,a,r.snap)):ui(o,t)&&(a=Xn(o,t),i=Ja(i,ft(),r.snap.getChild(a)));else if(r.children){if(ui(t,o))a=Xn(t,o),i=mv(i,a,r.children);else if(ui(o,t))if(a=Xn(o,t),Ye(a))i=mv(i,ft(),r.children);else{const l=Vo(r.children,et(a));if(l){const c=l.getChild(bt(a));i=Ja(i,ft(),c)}}}else throw ca("WriteRecord should have .snap or .children")}}return i}function lb(n,e,t,i,s){if(!i&&!s){const r=jr(n.visibleWrites,e);if(r!=null)return r;{const o=Ps(n.visibleWrites,e);if(Jf(o))return t;if(t==null&&!Zf(o,ft()))return null;{const a=t||lt.EMPTY_NODE;return Ho(o,a)}}}else{const r=Ps(n.visibleWrites,e);if(!s&&Jf(r))return t;if(!s&&t==null&&!Zf(r,ft()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ui(c.path,e)||ui(e,c.path))},a=ab(n.allWrites,o,e),l=t||lt.EMPTY_NODE;return Ho(a,l)}}}function RR(n,e,t){let i=lt.EMPTY_NODE;const s=jr(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(un,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ps(n.visibleWrites,e);return t.forEachChild(un,(o,a)=>{const l=Ho(Ps(r,new St(o)),a);i=i.updateImmediateChild(o,l)}),_v(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ps(n.visibleWrites,e);return _v(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function PR(n,e,t,i,s){Se(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Gt(e,t);if(Zf(n.visibleWrites,r))return null;{const o=Ps(n.visibleWrites,r);return Jf(o)?s.getChild(t):Ho(o,s.getChild(t))}}function DR(n,e,t,i){const s=Gt(e,t),r=jr(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ps(n.visibleWrites,s);return Ho(o,i.getNode().getImmediateChild(t))}else return null}function LR(n,e){return jr(n.visibleWrites,e)}function NR(n,e,t,i,s,r,o){let a;const l=Ps(n.visibleWrites,e),c=jr(l,ft());if(c!=null)a=c;else if(t!=null)a=Ho(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=d.getNext();for(;p&&u.length<s;)h(p,i)!==0&&u.push(p),p=d.getNext();return u}else return[]}function OR(){return{visibleWrites:di.empty(),allWrites:[],lastWriteId:-1}}function ep(n,e,t,i){return lb(n.writeTree,n.treePath,e,t,i)}function cb(n,e){return RR(n.writeTree,n.treePath,e)}function vv(n,e,t,i){return PR(n.writeTree,n.treePath,e,t,i)}function Bu(n,e){return LR(n.writeTree,Gt(n.treePath,e))}function kR(n,e,t,i,s,r){return NR(n.writeTree,n.treePath,e,t,i,s,r)}function Cm(n,e,t){return DR(n.writeTree,n.treePath,e,t)}function ub(n,e){return hb(Gt(n.treePath,e),n.writeTree)}function hb(n,e){return{treePath:n,writeTree:e}}/**
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
 */class FR{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;Se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Se(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,hv(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,dR(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,hR(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,hv(i,e.snapshotNode,s.oldSnap));else throw ca("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UR{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const db=new UR;class Im{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Tm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cm(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),r=kR(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}function zR(n,e){Se(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Se(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function BR(n,e,t,i,s){const r=new FR;let o,a;if(t.type===Ri.OVERWRITE){const c=t;c.source.fromUser?o=tp(n,e,c.path,c.snap,i,s,r):(Se(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Ye(c.path),o=Vu(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Ri.MERGE){const c=t;c.source.fromUser?o=GR(n,e,c.path,c.children,i,s,r):(Se(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=np(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Ri.ACK_USER_WRITE){const c=t;c.revert?o=$R(n,e,c.path,i,s,r):o=HR(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Ri.LISTEN_COMPLETE)o=WR(n,e,t.path,i,r);else throw ca("Unknown operation type: "+t.type);const l=r.getChanges();return VR(e,o,l),{viewCache:o,changes:l}}function VR(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Qf(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(uR(Qf(e)))}}function fb(n,e,t,i,s,r){const o=e.eventCache;if(Bu(i,t)!=null)return e;{let a,l;if(Ye(t))if(Se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kr(e),u=c instanceof lt?c:lt.EMPTY_NODE,h=cb(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ep(i,kr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=et(t);if(c===".priority"){Se(Us(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=vv(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=bt(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=vv(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Cm(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Za(e,a,o.isFullyInitialized()||Ye(t),n.filter.filtersNodes())}}function Vu(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(Ye(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=et(t);if(!l.isCompleteForPath(t)&&Us(t)>1)return e;const g=bt(t),f=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?c=u.updatePriority(l.getNode(),f):c=u.updateChild(l.getNode(),p,f,g,db,null)}const h=sb(e,c,l.isFullyInitialized()||Ye(t),u.filtersNodes()),d=new Im(s,h,r);return fb(n,h,t,s,d,a)}function tp(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Im(s,e,r);if(Ye(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Za(e,c,!0,n.filter.filtersNodes());else{const h=et(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Za(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=bt(t),p=a.getNode().getImmediateChild(h);let g;if(Ye(d))g=i;else{const m=u.getCompleteChild(h);m!=null?Hw(d)===".priority"&&m.getChild($w(d)).isEmpty()?g=m:g=m.updateChild(d,i):g=lt.EMPTY_NODE}if(p.equals(g))l=e;else{const m=n.filter.updateChild(a.getNode(),h,g,d,u,o);l=Za(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function yv(n,e){return n.eventCache.isCompleteForChild(e)}function GR(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Gt(t,l);yv(e,et(u))&&(a=tp(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Gt(t,l);yv(e,et(u))||(a=tp(n,a,u,c,s,r,o))}),a}function xv(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function np(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Ye(t)?c=i:c=new wt(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=xv(n,p,d);l=Vu(n,l,new St(h),g,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=xv(n,g,d);l=Vu(n,l,new St(h),m,s,r,o,a)}}),l}function HR(n,e,t,i,s,r,o){if(Bu(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Ye(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Vu(n,e,t,l.getNode().getChild(t),s,r,a,o);if(Ye(t)){let c=new wt(null);return l.getNode().forEachChild(Do,(u,h)=>{c=c.set(new St(u),h)}),np(n,e,t,c,s,r,a,o)}else return e}else{let c=new wt(null);return i.foreach((u,h)=>{const d=Gt(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),np(n,e,t,c,s,r,a,o)}}function WR(n,e,t,i,s){const r=e.serverCache,o=sb(e,r.getNode(),r.isFullyInitialized()||Ye(t),r.isFiltered());return fb(n,o,t,i,db,s)}function $R(n,e,t,i,s,r){let o;if(Bu(i,t)!=null)return e;{const a=new Im(i,e,s),l=e.eventCache.getNode();let c;if(Ye(t)||et(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ep(i,kr(e));else{const h=e.serverCache.getNode();Se(h instanceof lt,"serverChildren would be complete if leaf node"),u=cb(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=et(t);let h=Cm(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,bt(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,lt.EMPTY_NODE,bt(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ep(i,kr(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Bu(i,ft())!=null,Za(e,c,o,n.filter.filtersNodes())}}function qR(n,e){const t=kr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ye(e)&&!t.getImmediateChild(et(e)).isEmpty())?t.getChild(e):null}function wv(n,e,t,i){e.type===Ri.MERGE&&e.source.queryId!==null&&(Se(kr(n.viewCache_),"We should always have a full cache before handling merges"),Se(Qf(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=BR(n.processor_,s,e,t,i);return zR(n.processor_,r.viewCache),Se(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,jR(n,r.changes,r.viewCache.eventCache.getNode(),null)}function jR(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return xR(n.eventGenerator_,e,t,s)}/**
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
 */let bv;function KR(n){Se(!bv,"__referenceConstructor has already been defined"),bv=n}function Am(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return Se(r!=null,"SyncTree gave us an op for an invalid query."),wv(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(wv(o,e,t,i));return r}}function Rm(n,e){let t=null;for(const i of n.views.values())t=t||qR(i,e);return t}/**
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
 */let Sv;function XR(n){Se(!Sv,"__referenceConstructor has already been defined"),Sv=n}class Ev{constructor(e){this.listenProvider_=e,this.syncPointTree_=new wt(null),this.pendingWriteTree_=OR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function YR(n,e,t,i,s){return ER(n.pendingWriteTree_,e,t,i,s),s?Mh(n,new Or(eb(),e,t)):[]}function Mo(n,e,t=!1){const i=MR(n.pendingWriteTree_,e);if(TR(n.pendingWriteTree_,e)){let r=new wt(null);return i.snap!=null?r=r.set(ft(),!0):ei(i.children,o=>{r=r.set(new St(o),!0)}),Mh(n,new zu(i.path,r,t))}else return[]}function Eh(n,e,t){return Mh(n,new Or(tb(),e,t))}function QR(n,e,t){const i=wt.fromObject(t);return Mh(n,new vl(tb(),e,i))}function ZR(n,e,t,i){const s=_b(n,i);if(s!=null){const r=vb(s),o=r.path,a=r.queryId,l=Xn(o,e),c=new Or(nb(a),l,t);return yb(n,o,c)}else return[]}function JR(n,e,t,i){const s=_b(n,i);if(s){const r=vb(s),o=r.path,a=r.queryId,l=Xn(o,e),c=wt.fromObject(t),u=new vl(nb(a),l,c);return yb(n,o,u)}else return[]}function pb(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Xn(o,e),c=Rm(a,l);if(c)return c});return lb(s,e,r,t,!0)}function Mh(n,e){return mb(e,n.syncPointTree_,null,ob(n.pendingWriteTree_,ft()))}function mb(n,e,t,i){if(Ye(n.path))return gb(n,e,t,i);{const s=e.get(ft());t==null&&s!=null&&(t=Rm(s,ft()));let r=[];const o=et(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=ub(i,o);r=r.concat(mb(a,l,c,u))}return s&&(r=r.concat(Am(s,n,i,t))),r}}function gb(n,e,t,i){const s=e.get(ft());t==null&&s!=null&&(t=Rm(s,ft()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=ub(i,o),u=n.operationForChild(o);u&&(r=r.concat(gb(u,a,l,c)))}),s&&(r=r.concat(Am(s,n,i,t))),r}function _b(n,e){return n.tagToQueryMap.get(e)}function vb(n){const e=n.indexOf("$");return Se(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new St(n.substr(0,e))}}function yb(n,e,t){const i=n.syncPointTree_.get(e);Se(i,"Missing sync point for query tag that we're tracking");const s=ob(n.pendingWriteTree_,e);return Am(i,t,s,null)}/**
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
 */class Pm{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Pm(t)}node(){return this.node_}}class Dm{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Gt(this.path_,e);return new Dm(this.syncTree_,t)}node(){return pb(this.syncTree_,this.path_)}}const eP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mv=function(n,e,t){if(!n||typeof n!="object")return n;if(Se(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return tP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return nP(n[".sv"],e);Se(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},tP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Se(!1,"Unexpected server value: "+n)}},nP=function(n,e,t){n.hasOwnProperty("increment")||Se(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&Se(!1,"Unexpected increment value: "+i);const s=e.node();if(Se(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},iP=function(n,e,t,i){return Lm(e,new Dm(t,n),i)},sP=function(n,e,t){return Lm(n,new Pm(e),t)};function Lm(n,e,t){const i=n.getPriority().val(),s=Mv(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Mv(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new zt(a,ln(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new zt(s))),o.forEachChild(un,(a,l)=>{const c=Lm(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Nm{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Om(n,e){let t=e instanceof St?e:new St(e),i=n,s=et(t);for(;s!==null;){const r=Vo(i.node.children,s)||{children:{},childCount:0};i=new Nm(s,i,r),t=bt(t),s=et(t)}return i}function pa(n){return n.node.value}function xb(n,e){n.node.value=e,ip(n)}function wb(n){return n.node.childCount>0}function rP(n){return pa(n)===void 0&&!wb(n)}function Th(n,e){ei(n.node.children,(t,i)=>{e(new Nm(t,n,i))})}function bb(n,e,t,i){t&&!i&&e(n),Th(n,s=>{bb(s,e,!0,i)}),t&&i&&e(n)}function oP(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ql(n){return new St(n.parent===null?n.name:Ql(n.parent)+"/"+n.name)}function ip(n){n.parent!==null&&aP(n.parent,n.name,n)}function aP(n,e,t){const i=rP(t),s=cs(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ip(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ip(n))}/**
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
 */const lP=/[\[\].#$\/\u0000-\u001F\u007F]/,cP=/[\[\].#$\u0000-\u001F\u007F]/,Nd=10*1024*1024,Sb=function(n){return typeof n=="string"&&n.length!==0&&!lP.test(n)},uP=function(n){return typeof n=="string"&&n.length!==0&&!cP.test(n)},hP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),uP(n)},Eb=function(n,e,t){const i=t instanceof St?new WA(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ir(i));if(typeof e=="function")throw new Error(n+"contains a function "+ir(i)+" with contents = "+e.toString());if(Sw(e))throw new Error(n+"contains "+e.toString()+" "+ir(i));if(typeof e=="string"&&e.length>Nd/3&&gh(e)>Nd)throw new Error(n+"contains a string greater than "+Nd+" utf8 bytes "+ir(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ei(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sb(o)))throw new Error(n+" contains an invalid key ("+o+") "+ir(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$A(i,o),Eb(n,a,i),qA(i)}),s&&r)throw new Error(n+' contains ".value" child '+ir(i)+" in addition to actual children.")}},dP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!hP(t))throw new Error(QT(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pP(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!qw(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Kr(n,e,t){pP(n,t),mP(n,i=>ui(i,e)||ui(e,i))}function mP(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(gP(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function gP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();xr&&an("event: "+t.toString()),Xl(i)}}}/**
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
 */const _P="repo_interrupt",vP=25;class yP{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Uu(),this.transactionQueueTree_=new Nm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xP(n,e,t){if(n.stats_=wm(n.repoInfo_),n.forceRestClient_||pA())n.server_=new Fu(n.repoInfo_,(i,s,r,o)=>{Tv(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Cv(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Zt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ji(n.repoInfo_,e,(i,s,r,o)=>{Tv(n,i,s,r,o)},i=>{Cv(n,i)},i=>{bP(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=xA(n.repoInfo_,()=>new yR(n.stats_,n.server_)),n.infoData_=new pR,n.infoSyncTree_=new Ev({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Eh(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),km(n,"connected",!1),n.serverSyncTree_=new Ev({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Kr(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function wP(n){const t=n.infoData_.getNode(new St(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Mb(n){return eP({timestamp:wP(n)})}function Tv(n,e,t,i,s){n.dataUpdateCount++;const r=new St(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Cu(t,c=>ln(c));o=JR(n.serverSyncTree_,r,l,s)}else{const l=ln(t);o=ZR(n.serverSyncTree_,r,l,s)}else if(i){const l=Cu(t,c=>ln(c));o=QR(n.serverSyncTree_,r,l)}else{const l=ln(t);o=Eh(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Um(n,r)),Kr(n.eventQueue_,a,o)}function Cv(n,e){km(n,"connected",e),e===!1&&EP(n)}function bP(n,e){ei(e,(t,i)=>{km(n,t,i)})}function km(n,e,t){const i=new St("/.info/"+e),s=ln(t);n.infoData_.updateSnapshot(i,s);const r=Eh(n.infoSyncTree_,i,s);Kr(n.eventQueue_,i,r)}function SP(n){return n.nextWriteId_++}function EP(n){Tb(n,"onDisconnectEvents");const e=Mb(n),t=Uu();Yf(n.onDisconnect_,ft(),(s,r)=>{const o=iP(s,r,n.serverSyncTree_,e);Jw(t,s,o)});let i=[];Yf(t,ft(),(s,r)=>{i=i.concat(Eh(n.serverSyncTree_,s,r));const o=IP(n,s);Um(n,o)}),n.onDisconnect_=Uu(),Kr(n.eventQueue_,ft(),i)}function MP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(_P)}function Tb(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),an(t,...e)}function Cb(n,e,t){return pb(n.serverSyncTree_,e,t)||lt.EMPTY_NODE}function Fm(n,e=n.transactionQueueTree_){if(e||Ch(n,e),pa(e)){const t=Ab(n,e);Se(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&TP(n,Ql(e),t)}else wb(e)&&Th(e,t=>{Fm(n,t)})}function TP(n,e,t){const i=t.map(c=>c.currentWriteId),s=Cb(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];Se(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Xn(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Tb(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Mo(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ch(n,Om(n.transactionQueueTree_,e)),Fm(n,n.transactionQueueTree_),Kr(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Xl(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Un("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Um(n,e)}},o)}function Um(n,e){const t=Ib(n,e),i=Ql(t),s=Ab(n,t);return CP(n,s,i),i}function CP(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Xn(t,l.path);let u=!1,h;if(Se(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Mo(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=vP)u=!0,h="maxretry",s=s.concat(Mo(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Cb(n,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Eb("transaction failed: Data returned ",p,l.path);let g=ln(p);typeof p=="object"&&p!=null&&cs(p,".priority")||(g=g.updatePriority(d.getPriority()));const f=l.currentWriteId,_=Mb(n),w=sP(g,d,_);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=SP(n),o.splice(o.indexOf(f),1),s=s.concat(YR(n.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat(Mo(n.serverSyncTree_,f,!0))}else u=!0,h="nodata",s=s.concat(Mo(n.serverSyncTree_,l.currentWriteId,!0))}Kr(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ch(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Xl(i[a]);Fm(n,n.transactionQueueTree_)}function Ib(n,e){let t,i=n.transactionQueueTree_;for(t=et(e);t!==null&&pa(i)===void 0;)i=Om(i,t),e=bt(e),t=et(e);return i}function Ab(n,e){const t=[];return Rb(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Rb(n,e,t){const i=pa(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Th(e,s=>{Rb(n,s,t)})}function Ch(n,e){const t=pa(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,xb(e,t.length>0?t:void 0)}Th(e,i=>{Ch(n,i)})}function IP(n,e){const t=Ql(Ib(n,e)),i=Om(n.transactionQueueTree_,e);return oP(i,s=>{Od(n,s)}),Od(n,i),bb(i,s=>{Od(n,s)}),t}function Od(n,e){const t=pa(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Se(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(Se(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Mo(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xb(e,void 0):t.length=r+1,Kr(n.eventQueue_,Ql(e),s);for(let o=0;o<i.length;o++)Xl(i[o])}}/**
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
 */function AP(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function RP(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Un(`Invalid query segment '${t}' in query '${n}'`)}return e}const Iv=function(n,e){const t=PP(n),i=t.namespace;t.domain==="firebase.com"&&Lr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||oA();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new _A(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new St(t.pathString)}},PP=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=AP(n.substring(u,h)));const d=RP(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class zm{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return Ye(this._path)?null:Hw(this._path)}get ref(){return new ma(this._repo,this._path)}get _queryIdentifier(){const e=fv(this._queryParams),t=ym(e);return t==="{}"?"default":t}get _queryObject(){return fv(this._queryParams)}isEqual(e){if(e=jt(e),!(e instanceof zm))return!1;const t=this._repo===e._repo,i=qw(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+HA(this._path)}}class ma extends zm{constructor(e,t){super(e,t,new Mm,!1)}get parent(){const e=$w(this._path);return e===null?null:new ma(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}KR(ma);XR(ma);/**
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
 */const DP="FIREBASE_DATABASE_EMULATOR_HOST",sp={};let LP=!1;function NP(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),an("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Iv(r,s),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[DP]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Iv(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new jf(jf.OWNER):new gA(n.name,n.options,e);dP("Invalid Firebase Database URL",o),Ye(o.path)||Lr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kP(a,n,u,new mA(n.name,t));return new FP(h,n)}function OP(n,e){const t=sp[e];(!t||t[n.key]!==n)&&Lr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),MP(n),delete t[n.key]}function kP(n,e,t,i){let s=sp[e.name];s||(s={},sp[e.name]=s);let r=s[n.toURLString()];return r&&Lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yP(n,LP,t,i),s[n.toURLString()]=r,r}class FP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ma(this._repo,ft())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lr("Cannot call "+e+" on a deleted database.")}}function UP(n=cm(),e){return vh(n,"database").getImmediate({identifier:e})}/**
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
 */function zP(n){tA(ha),Ar(new Fs("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return NP(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Li(X_,Y_,n),Li(X_,Y_,"esm2017")}Ji.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ji.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};zP();var BP=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Pe,Bm=Bm||{},ze=BP||self;function Gu(){}function rp(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Zl(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function VP(n){return Object.prototype.hasOwnProperty.call(n,kd)&&n[kd]||(n[kd]=++GP)}var kd="closure_uid_"+(1e9*Math.random()>>>0),GP=0;function HP(n,e,t){return n.call.apply(n.bind,arguments)}function WP(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function en(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?en=HP:en=WP,en.apply(null,arguments)}function Rc(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function sn(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function $s(){this.s=this.s,this.o=this.o}var $P=0;$s.prototype.s=!1;$s.prototype.na=function(){!this.s&&(this.s=!0,this.M(),$P!=0)&&VP(this)};$s.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pb=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Db=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const i=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<i;r++)r in s&&e.call(t,s[r],r,n)};function qP(n){e:{var e=FD;const t=n.length,i=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in i&&e.call(void 0,i[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Av(n){return Array.prototype.concat.apply([],arguments)}function Vm(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Hu(n){return/^[\s\xa0]*$/.test(n)}var Rv=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function _n(n,e){return n.indexOf(e)!=-1}function Fd(n,e){return n<e?-1:n>e?1:0}var vn;e:{var Pv=ze.navigator;if(Pv){var Dv=Pv.userAgent;if(Dv){vn=Dv;break e}}vn=""}function Gm(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Lb(n){const e={};for(const t in n)e[t]=n[t];return e}var Lv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nb(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<Lv.length;r++)t=Lv[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Hm(n){return Hm[" "](n),n}Hm[" "]=Gu;function jP(n){var e=YP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var KP=_n(vn,"Opera"),Wo=_n(vn,"Trident")||_n(vn,"MSIE"),Ob=_n(vn,"Edge"),op=Ob||Wo,kb=_n(vn,"Gecko")&&!(_n(vn.toLowerCase(),"webkit")&&!_n(vn,"Edge"))&&!(_n(vn,"Trident")||_n(vn,"MSIE"))&&!_n(vn,"Edge"),XP=_n(vn.toLowerCase(),"webkit")&&!_n(vn,"Edge");function Fb(){var n=ze.document;return n?n.documentMode:void 0}var Wu;e:{var Ud="",zd=function(){var n=vn;if(kb)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ob)return/Edge\/([\d\.]+)/.exec(n);if(Wo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(XP)return/WebKit\/(\S+)/.exec(n);if(KP)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(zd&&(Ud=zd?zd[1]:""),Wo){var Bd=Fb();if(Bd!=null&&Bd>parseFloat(Ud)){Wu=String(Bd);break e}}Wu=Ud}var YP={};function QP(){return jP(function(){let n=0;const e=Rv(String(Wu)).split("."),t=Rv("9").split("."),i=Math.max(e.length,t.length);for(let o=0;n==0&&o<i;o++){var s=e[o]||"",r=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;n=Fd(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Fd(s[2].length==0,r[2].length==0)||Fd(s[2],r[2]),s=s[3],r=r[3]}while(n==0)}return 0<=n})}var ap;if(ze.document&&Wo){var Nv=Fb();ap=Nv||parseInt(Wu,10)||void 0}else ap=void 0;var ZP=ap,JP=function(){if(!ze.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ze.addEventListener("test",Gu,e),ze.removeEventListener("test",Gu,e)}catch{}return n}();function dn(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}dn.prototype.h=function(){this.defaultPrevented=!0};function yl(n,e){if(dn.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(kb){e:{try{Hm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:eD[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&yl.Z.h.call(this)}}sn(yl,dn);var eD={2:"touch",3:"pen",4:"mouse"};yl.prototype.h=function(){yl.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Jl="closure_listenable_"+(1e6*Math.random()|0),tD=0;function nD(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ia=s,this.key=++tD,this.ca=this.fa=!1}function Ih(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function Ah(n){this.src=n,this.g={},this.h=0}Ah.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=cp(n,e,i,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new nD(e,this.src,r,!!i,s),e.fa=t,n.push(e)),e};function lp(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Pb(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ih(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function cp(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.ca&&r.listener==e&&r.capture==!!t&&r.ia==i)return s}return-1}var Wm="closure_lm_"+(1e6*Math.random()|0),Vd={};function Ub(n,e,t,i,s){if(i&&i.once)return Bb(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ub(n,e[r],t,i,s);return null}return t=jm(t),n&&n[Jl]?n.N(e,t,Zl(i)?!!i.capture:!!i,s):zb(n,e,t,!1,i,s)}function zb(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=Zl(s)?!!s.capture:!!s,a=qm(n);if(a||(n[Wm]=a=new Ah(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=iD(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)JP||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(Gb(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function iD(){function n(t){return e.call(n.src,n.listener,t)}var e=sD;return n}function Bb(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Bb(n,e[r],t,i,s);return null}return t=jm(t),n&&n[Jl]?n.O(e,t,Zl(i)?!!i.capture:!!i,s):zb(n,e,t,!0,i,s)}function Vb(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Vb(n,e[r],t,i,s);else i=Zl(i)?!!i.capture:!!i,t=jm(t),n&&n[Jl]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=cp(r,t,i,s),-1<t&&(Ih(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=qm(n))&&(e=n.g[e.toString()],n=-1,e&&(n=cp(e,t,i,s)),(t=-1<n?e[n]:null)&&$m(t))}function $m(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[Jl])lp(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(Gb(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=qm(e))?(lp(t,n),t.h==0&&(t.src=null,e[Wm]=null)):Ih(n)}}}function Gb(n){return n in Vd?Vd[n]:Vd[n]="on"+n}function sD(n,e){if(n.ca)n=!0;else{e=new yl(e,this);var t=n.listener,i=n.ia||n.src;n.fa&&$m(n),n=t.call(i,e)}return n}function qm(n){return n=n[Wm],n instanceof Ah?n:null}var Gd="__closure_events_fn_"+(1e9*Math.random()>>>0);function jm(n){return typeof n=="function"?n:(n[Gd]||(n[Gd]=function(e){return n.handleEvent(e)}),n[Gd])}function Kt(){$s.call(this),this.i=new Ah(this),this.P=this,this.I=null}sn(Kt,$s);Kt.prototype[Jl]=!0;Kt.prototype.removeEventListener=function(n,e,t,i){Vb(this,n,e,t,i)};function tn(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new dn(e,n);else if(e instanceof dn)e.target=e.target||n;else{var s=e;e=new dn(i,n),Nb(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Pc(o,i,!0,e)&&s}if(o=e.g=n,s=Pc(o,i,!0,e)&&s,s=Pc(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Pc(o,i,!1,e)&&s}Kt.prototype.M=function(){if(Kt.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Ih(t[i]);delete n.g[e],n.h--}}this.I=null};Kt.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};Kt.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Pc(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==t){var a=o.listener,l=o.ia||o.src;o.fa&&lp(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Km=ze.JSON.stringify;function rD(){var n=Wb;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class oD{constructor(){this.h=this.g=null}add(e,t){const i=Hb.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var Hb=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new aD,n=>n.reset());class aD{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function lD(n){ze.setTimeout(()=>{throw n},0)}function Xm(n,e){up||cD(),hp||(up(),hp=!0),Wb.add(n,e)}var up;function cD(){var n=ze.Promise.resolve(void 0);up=function(){n.then(uD)}}var hp=!1,Wb=new oD;function uD(){for(var n;n=rD();){try{n.h.call(n.g)}catch(t){lD(t)}var e=Hb;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}hp=!1}function Rh(n,e){Kt.call(this),this.h=n||1,this.g=e||ze,this.j=en(this.kb,this),this.l=Date.now()}sn(Rh,Kt);Pe=Rh.prototype;Pe.da=!1;Pe.S=null;Pe.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),tn(this,"tick"),this.da&&(Ym(this),this.start()))}};Pe.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ym(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}Pe.M=function(){Rh.Z.M.call(this),Ym(this),delete this.g};function Qm(n,e,t){if(typeof n=="function")t&&(n=en(n,t));else if(n&&typeof n.handleEvent=="function")n=en(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ze.setTimeout(n,e||0)}function $b(n){n.g=Qm(()=>{n.g=null,n.i&&(n.i=!1,$b(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class hD extends $s{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$b(this)}M(){super.M(),this.g&&(ze.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xl(n){$s.call(this),this.h=n,this.g={}}sn(xl,$s);var Ov=[];function qb(n,e,t,i){Array.isArray(t)||(t&&(Ov[0]=t.toString()),t=Ov);for(var s=0;s<t.length;s++){var r=Ub(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function jb(n){Gm(n.g,function(e,t){this.g.hasOwnProperty(t)&&$m(e)},n),n.g={}}xl.prototype.M=function(){xl.Z.M.call(this),jb(this)};xl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ph(){this.g=!0}Ph.prototype.Aa=function(){this.g=!1};function dD(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function fD(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function To(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+mD(n,t)+(i?" "+i:"")})}function pD(n,e){n.info(function(){return"TIMEOUT: "+e})}Ph.prototype.info=function(){};function mD(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Km(t)}catch{return e}}var Xr={},kv=null;function Dh(){return kv=kv||new Kt}Xr.Ma="serverreachability";function Kb(n){dn.call(this,Xr.Ma,n)}sn(Kb,dn);function wl(n){const e=Dh();tn(e,new Kb(e))}Xr.STAT_EVENT="statevent";function Xb(n,e){dn.call(this,Xr.STAT_EVENT,n),this.stat=e}sn(Xb,dn);function wn(n){const e=Dh();tn(e,new Xb(e,n))}Xr.Na="timingevent";function Yb(n,e){dn.call(this,Xr.Na,n),this.size=e}sn(Yb,dn);function ec(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ze.setTimeout(function(){n()},e)}var Lh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qb={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zm(){}Zm.prototype.h=null;function Fv(n){return n.h||(n.h=n.i())}function Zb(){}var tc={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Jm(){dn.call(this,"d")}sn(Jm,dn);function eg(){dn.call(this,"c")}sn(eg,dn);var dp;function Nh(){}sn(Nh,Zm);Nh.prototype.g=function(){return new XMLHttpRequest};Nh.prototype.i=function(){return{}};dp=new Nh;function nc(n,e,t,i){this.l=n,this.j=e,this.m=t,this.X=i||1,this.V=new xl(this),this.P=gD,n=op?125:void 0,this.W=new Rh(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jb}function Jb(){this.i=null,this.g="",this.h=!1}var gD=45e3,fp={},$u={};Pe=nc.prototype;Pe.setTimeout=function(n){this.P=n};function pp(n,e,t){n.K=1,n.v=kh(rs(e)),n.s=t,n.U=!0,eS(n,null)}function eS(n,e){n.F=Date.now(),ic(n),n.A=rs(n.v);var t=n.A,i=n.X;Array.isArray(i)||(i=[String(i)]),aS(t.h,"t",i),n.C=0,t=n.l.H,n.h=new Jb,n.g=CS(n.l,t?e:null,!n.s),0<n.O&&(n.L=new hD(en(n.Ia,n,n.g),n.O)),qb(n.V,n.g,"readystatechange",n.gb),e=n.H?Lb(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),wl(),dD(n.j,n.u,n.A,n.m,n.X,n.s)}Pe.gb=function(n){n=n.target;const e=this.L;e&&Zi(n)==3?e.l():this.Ia(n)};Pe.Ia=function(n){try{if(n==this.g)e:{const u=Zi(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||op||this.g&&(this.h.h||this.g.ga()||Vv(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?wl(3):wl(2)),Oh(this);var t=this.g.ba();this.N=t;t:if(tS(this)){var i=Vv(this.g);n="";var s=i.length,r=Zi(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){hr(this),el(this);var o="";break t}this.h.i=new ze.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,fD(this.j,this.u,this.A,this.m,this.X,u,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hu(a)){var c=a;break t}}c=null}if(t=c)To(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mp(this,t);else{this.i=!1,this.o=3,wn(12),hr(this),el(this);break e}}this.U?(nS(this,u,o),op&&this.i&&u==3&&(qb(this.V,this.W,"tick",this.fb),this.W.start())):(To(this.j,this.m,o,null),mp(this,o)),u==4&&hr(this),this.i&&!this.I&&(u==4?SS(this.l,this):(this.i=!1,ic(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,wn(12)):(this.o=0,wn(13)),hr(this),el(this)}}}catch{}finally{}};function tS(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function nS(n,e,t){let i=!0,s;for(;!n.I&&n.C<t.length;)if(s=_D(n,t),s==$u){e==4&&(n.o=4,wn(14),i=!1),To(n.j,n.m,null,"[Incomplete Response]");break}else if(s==fp){n.o=4,wn(15),To(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else To(n.j,n.m,s,null),mp(n,s);tS(n)&&s!=$u&&s!=fp&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,wn(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),cg(e),e.L=!0,wn(11))):(To(n.j,n.m,t,"[Invalid Chunked Response]"),hr(n),el(n))}Pe.fb=function(){if(this.g){var n=Zi(this.g),e=this.g.ga();this.C<e.length&&(Oh(this),nS(this,n,e),this.i&&n!=4&&ic(this))}};function _D(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?$u:(t=Number(e.substring(t,i)),isNaN(t)?fp:(i+=1,i+t>e.length?$u:(e=e.substr(i,t),n.C=i+t,e)))}Pe.cancel=function(){this.I=!0,hr(this)};function ic(n){n.Y=Date.now()+n.P,iS(n,n.P)}function iS(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ec(en(n.eb,n),e)}function Oh(n){n.B&&(ze.clearTimeout(n.B),n.B=null)}Pe.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(pD(this.j,this.A),this.K!=2&&(wl(),wn(17)),hr(this),this.o=2,el(this)):iS(this,this.Y-n)};function el(n){n.l.G==0||n.I||SS(n.l,n)}function hr(n){Oh(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Ym(n.W),jb(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function mp(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||gp(t.i,n))){if(t.I=n.N,!n.J&&gp(t.i,n)&&t.G==3){try{var i=t.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Xu(t),zh(t);else break e;lg(t),wn(18)}}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=ec(en(t.ab,t),6e3));if(1>=uS(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else dr(t,11)}else if((n.J||t.g==n)&&Xu(t),!Hu(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(t.U=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.J=c[1],t.la=c[2];const u=c[3];u!=null&&(t.ma=u,t.h.info("VER="+t.ma));const h=c[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.K=i,t.h.info("backChannelRequestTimeoutMs_="+i)),i=t;const p=n.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;!r.g&&(_n(g,"spdy")||_n(g,"quic")||_n(g,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ig(r,r.h),r.h=null))}if(i.D){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(i.sa=m,Et(i.F,i.D,m))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),i=t;var o=n;if(i.oa=TS(i,i.H?i.la:null,i.W),o.J){hS(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Oh(a),ic(a)),i.g=o}else wS(i);0<t.l.length&&Bh(t)}else c[0]!="stop"&&c[0]!="close"||dr(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?dr(t,7):ag(t):c[0]!="noop"&&t.j&&t.j.wa(c),t.A=0)}}wl(4)}catch{}}function vD(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(rp(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function tg(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(rp(n)||typeof n=="string")Db(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(rp(n)||typeof n=="string"){t=[];for(var i=n.length,s=0;s<i;s++)t.push(s)}else for(s in t=[],i=0,n)t[i++]=s;i=vD(n),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}}function ga(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var i=0;i<t;i+=2)this.set(arguments[i],arguments[i+1])}else if(n)if(n instanceof ga)for(t=n.T(),i=0;i<t.length;i++)this.set(t[i],n.get(t[i]));else for(i in n)this.set(i,n[i])}Pe=ga.prototype;Pe.R=function(){ng(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};Pe.T=function(){return ng(this),this.g.concat()};function ng(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var i=n.g[e];Fr(n.h,i)&&(n.g[t++]=i),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)i=n.g[e],Fr(s,i)||(n.g[t++]=i,s[i]=1),e++;n.g.length=t}}Pe.get=function(n,e){return Fr(this.h,n)?this.h[n]:e};Pe.set=function(n,e){Fr(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};Pe.forEach=function(n,e){for(var t=this.T(),i=0;i<t.length;i++){var s=t[i],r=this.get(s);n.call(e,r,s,this)}};function Fr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var sS=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function yD(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ur(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof Ur){this.g=e!==void 0?e:n.g,qu(this,n.j),this.s=n.s,ju(this,n.i),Ku(this,n.m),this.l=n.l,e=n.h;var t=new bl;t.i=e.i,e.g&&(t.g=new ga(e.g),t.h=e.h),Uv(this,t),this.o=n.o}else n&&(t=String(n).match(sS))?(this.g=!!e,qu(this,t[1]||"",!0),this.s=tl(t[2]||""),ju(this,t[3]||"",!0),Ku(this,t[4]),this.l=tl(t[5]||"",!0),Uv(this,t[6]||"",!0),this.o=tl(t[7]||"")):(this.g=!!e,this.h=new bl(null,this.g))}Ur.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ha(e,zv,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ha(e,zv,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Ha(t,t.charAt(0)=="/"?ED:SD,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ha(t,TD)),n.join("")};function rs(n){return new Ur(n)}function qu(n,e,t){n.j=t?tl(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ju(n,e,t){n.i=t?tl(e,!0):e}function Ku(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Uv(n,e,t){e instanceof bl?(n.h=e,CD(n.h,n.g)):(t||(e=Ha(e,MD)),n.h=new bl(e,n.g))}function Et(n,e,t){n.h.set(e,t)}function kh(n){return Et(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function xD(n){return n instanceof Ur?rs(n):new Ur(n,void 0)}function wD(n,e,t,i){var s=new Ur(null,void 0);return n&&qu(s,n),e&&ju(s,e),t&&Ku(s,t),i&&(s.l=i),s}function tl(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ha(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,bD),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function bD(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var zv=/[#\/\?@]/g,SD=/[#\?:]/g,ED=/[#\?]/g,MD=/[#\?@]/g,TD=/#/g;function bl(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function qs(n){n.g||(n.g=new ga,n.h=0,n.i&&yD(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}Pe=bl.prototype;Pe.add=function(n,e){qs(this),this.i=null,n=_a(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function rS(n,e){qs(n),e=_a(n,e),Fr(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,Fr(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&ng(n)))}function oS(n,e){return qs(n),e=_a(n,e),Fr(n.g.h,e)}Pe.forEach=function(n,e){qs(this),this.g.forEach(function(t,i){Db(t,function(s){n.call(e,s,i,this)},this)},this)};Pe.T=function(){qs(this);for(var n=this.g.R(),e=this.g.T(),t=[],i=0;i<e.length;i++)for(var s=n[i],r=0;r<s.length;r++)t.push(e[i]);return t};Pe.R=function(n){qs(this);var e=[];if(typeof n=="string")oS(this,n)&&(e=Av(e,this.g.get(_a(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Av(e,n[t])}return e};Pe.set=function(n,e){return qs(this),this.i=null,n=_a(this,n),oS(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};Pe.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function aS(n,e,t){rS(n,e),0<t.length&&(n.i=null,n.g.set(_a(n,e),Vm(t)),n.h+=t.length)}Pe.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var i=e[t],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),n.push(o)}}return this.i=n.join("&")};function _a(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function CD(n,e){e&&!n.j&&(qs(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(rS(this,i),aS(this,s,t))},n)),n.j=e}var ID=class{constructor(n,e){this.h=n,this.g=e}};function lS(n){this.l=n||AD,ze.PerformanceNavigationTiming?(n=ze.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ze.g&&ze.g.Ea&&ze.g.Ea()&&ze.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AD=10;function cS(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function uS(n){return n.h?1:n.g?n.g.size:0}function gp(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ig(n,e){n.g?n.g.add(e):n.h=e}function hS(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}lS.prototype.cancel=function(){if(this.i=dS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function dS(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Vm(n.i)}function sg(){}sg.prototype.stringify=function(n){return ze.JSON.stringify(n,void 0)};sg.prototype.parse=function(n){return ze.JSON.parse(n,void 0)};function RD(){this.g=new sg}function PD(n,e,t){const i=t||"";try{tg(n,function(s,r){let o=s;Zl(s)&&(o=Km(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function DD(n,e){const t=new Ph;if(ze.Image){const i=new Image;i.onload=Rc(Dc,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Rc(Dc,t,i,"TestLoadImage: error",!1,e),i.onabort=Rc(Dc,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Rc(Dc,t,i,"TestLoadImage: timeout",!1,e),ze.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function Dc(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function sc(n){this.l=n.$b||null,this.j=n.ib||!1}sn(sc,Zm);sc.prototype.g=function(){return new Fh(this.l,this.j)};sc.prototype.i=function(n){return function(){return n}}({});function Fh(n,e){Kt.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=rg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sn(Fh,Kt);var rg=0;Pe=Fh.prototype;Pe.open=function(n,e){if(this.readyState!=rg)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Sl(this)};Pe.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||ze).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};Pe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rc(this)),this.readyState=rg};Pe.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Sl(this)),this.g&&(this.readyState=3,Sl(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ze.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fS(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function fS(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}Pe.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?rc(this):Sl(this),this.readyState==3&&fS(this)}};Pe.Ua=function(n){this.g&&(this.response=this.responseText=n,rc(this))};Pe.Ta=function(n){this.g&&(this.response=n,rc(this))};Pe.ha=function(){this.g&&rc(this)};function rc(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Sl(n)}Pe.setRequestHeader=function(n,e){this.v.append(n,e)};Pe.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};Pe.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Sl(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Fh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var LD=ze.JSON.parse;function Nt(n){Kt.call(this),this.headers=new ga,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pS,this.K=this.L=!1}sn(Nt,Kt);var pS="",ND=/^https?$/i,OD=["POST","PUT"];Pe=Nt.prototype;Pe.ea=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dp.g(),this.C=this.u?Fv(this.u):Fv(dp),this.g.onreadystatechange=en(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Bv(this,r);return}n=t||"";const s=new ga(this.headers);i&&tg(i,function(r,o){s.set(o,r)}),i=qP(s.T()),t=ze.FormData&&n instanceof ze.FormData,!(0<=Pb(OD,e))||i||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_S(this),0<this.B&&((this.K=kD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=en(this.pa,this)):this.A=Qm(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Bv(this,r)}};function kD(n){return Wo&&QP()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function FD(n){return n.toLowerCase()=="content-type"}Pe.pa=function(){typeof Bm!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tn(this,"timeout"),this.abort(8))};function Bv(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,mS(n),Uh(n)}function mS(n){n.D||(n.D=!0,tn(n,"complete"),tn(n,"error"))}Pe.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,tn(this,"complete"),tn(this,"abort"),Uh(this))};Pe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uh(this,!0)),Nt.Z.M.call(this)};Pe.Fa=function(){this.s||(this.F||this.v||this.l?gS(this):this.cb())};Pe.cb=function(){gS(this)};function gS(n){if(n.h&&typeof Bm!="undefined"&&(!n.C[1]||Zi(n)!=4||n.ba()!=2)){if(n.v&&Zi(n)==4)Qm(n.Fa,0,n);else if(tn(n,"readystatechange"),Zi(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=a===0){var s=String(n.H).match(sS)[1]||null;if(!s&&ze.self&&ze.self.location){var r=ze.self.location.protocol;s=r.substr(0,r.length-1)}i=!ND.test(s?s.toLowerCase():"")}t=i}if(t)tn(n,"complete"),tn(n,"success");else{n.m=6;try{var o=2<Zi(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",mS(n)}}finally{Uh(n)}}}}function Uh(n,e){if(n.g){_S(n);const t=n.g,i=n.C[0]?Gu:null;n.g=null,n.C=null,e||tn(n,"ready");try{t.onreadystatechange=i}catch{}}}function _S(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(ze.clearTimeout(n.A),n.A=null)}function Zi(n){return n.g?n.g.readyState:0}Pe.ba=function(){try{return 2<Zi(this)?this.g.status:-1}catch{return-1}};Pe.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};Pe.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),LD(e)}};function Vv(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case pS:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}Pe.Da=function(){return this.m};Pe.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function UD(n){let e="";return Gm(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function og(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=UD(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Et(n,e,t))}function Oa(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function vS(n){this.za=0,this.l=[],this.h=new Ph,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Oa("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Oa("baseRetryDelayMs",5e3,n),this.$a=Oa("retryDelaySeedMs",1e4,n),this.Ya=Oa("forwardChannelMaxRetries",2,n),this.ra=Oa("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new lS(n&&n.concurrentRequestLimit),this.Ca=new RD,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}Pe=vS.prototype;Pe.ma=8;Pe.G=1;function ag(n){if(yS(n),n.G==3){var e=n.V++,t=rs(n.F);Et(t,"SID",n.J),Et(t,"RID",e),Et(t,"TYPE","terminate"),oc(n,t),e=new nc(n,n.h,e,void 0),e.K=2,e.v=kh(rs(t)),t=!1,ze.navigator&&ze.navigator.sendBeacon&&(t=ze.navigator.sendBeacon(e.v.toString(),"")),!t&&ze.Image&&(new Image().src=e.v,t=!0),t||(e.g=CS(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ic(e)}MS(n)}Pe.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function zh(n){n.g&&(cg(n),n.g.cancel(),n.g=null)}function yS(n){zh(n),n.u&&(ze.clearTimeout(n.u),n.u=null),Xu(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&ze.clearTimeout(n.m),n.m=null)}function Hd(n,e){n.l.push(new ID(n.Za++,e)),n.G==3&&Bh(n)}function Bh(n){cS(n.i)||n.m||(n.m=!0,Xm(n.Ha,n),n.C=0)}function zD(n,e){return uS(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=ec(en(n.Ha,n,e),ES(n,n.C)),n.C++,!0)}Pe.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new nc(this,this.h,n,void 0);let r=this.s;if(this.P&&(r?(r=Lb(r),Nb(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var i=this.l[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=xS(this,s,e),t=rs(this.F),Et(t,"RID",n),Et(t,"CVER",22),this.D&&Et(t,"X-HTTP-Session-Id",this.D),oc(this,t),this.o&&r&&og(t,this.o,r),ig(this.i,s),this.Ra&&Et(t,"TYPE","init"),this.ja?(Et(t,"$req",e),Et(t,"SID","null"),s.$=!0,pp(s,t,null)):pp(s,t,e),this.G=2}}else this.G==3&&(n?Gv(this,n):this.l.length==0||cS(this.i)||Gv(this))};function Gv(n,e){var t;e?t=e.m:t=n.V++;const i=rs(n.F);Et(i,"SID",n.J),Et(i,"RID",t),Et(i,"AID",n.U),oc(n,i),n.o&&n.s&&og(i,n.o,n.s),t=new nc(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=xS(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),ig(n.i,t),pp(t,i,e)}function oc(n,e){n.j&&tg({},function(t,i){Et(e,i,t)})}function xS(n,e,t){t=Math.min(n.l.length,t);var i=n.j?en(n.j.Oa,n.j,n):null;e:{var s=n.l;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{PD(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,i}function wS(n){n.g||n.u||(n.Y=1,Xm(n.Ga,n),n.A=0)}function lg(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=ec(en(n.Ga,n),ES(n,n.A)),n.A++,!0)}Pe.Ga=function(){if(this.u=null,bS(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=ec(en(this.bb,this),n)}};Pe.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,wn(10),zh(this),bS(this))};function cg(n){n.B!=null&&(ze.clearTimeout(n.B),n.B=null)}function bS(n){n.g=new nc(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=rs(n.oa);Et(e,"RID","rpc"),Et(e,"SID",n.J),Et(e,"CI",n.N?"0":"1"),Et(e,"AID",n.U),oc(n,e),Et(e,"TYPE","xmlhttp"),n.o&&n.s&&og(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=kh(rs(e)),t.s=null,t.U=!0,eS(t,n)}Pe.ab=function(){this.v!=null&&(this.v=null,zh(this),lg(this),wn(19))};function Xu(n){n.v!=null&&(ze.clearTimeout(n.v),n.v=null)}function SS(n,e){var t=null;if(n.g==e){Xu(n),cg(n),n.g=null;var i=2}else if(gp(n.i,e))t=e.D,hS(n.i,e),i=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;i=Dh(),tn(i,new Yb(i,t)),Bh(n)}else wS(n);else if(s=e.o,s==3||s==0&&0<n.I||!(i==1&&zD(n,e)||i==2&&lg(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:dr(n,5);break;case 4:dr(n,10);break;case 3:dr(n,6);break;default:dr(n,2)}}}function ES(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function dr(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var i=en(n.jb,n);t||(t=new Ur("//www.google.com/images/cleardot.gif"),ze.location&&ze.location.protocol=="http"||qu(t,"https"),kh(t)),DD(t.toString(),i)}else wn(2);n.G=0,n.j&&n.j.va(e),MS(n),yS(n)}Pe.jb=function(n){n?(this.h.info("Successfully pinged google.com"),wn(2)):(this.h.info("Failed to ping google.com"),wn(1))};function MS(n){n.G=0,n.I=-1,n.j&&((dS(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Vm(n.l),n.l.length=0),n.j.ua())}function TS(n,e,t){let i=xD(t);if(i.i!="")e&&ju(i,e+"."+i.i),Ku(i,i.m);else{const s=ze.location;i=wD(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&Gm(n.aa,function(s,r){Et(i,r,s)}),e=n.D,t=n.sa,e&&t&&Et(i,e,t),Et(i,"VER",n.ma),oc(n,i),i}function CS(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new Nt(new sc({ib:!0})):new Nt(n.qa),e.L=n.H,e}function IS(){}Pe=IS.prototype;Pe.xa=function(){};Pe.wa=function(){};Pe.va=function(){};Pe.ua=function(){};Pe.Oa=function(){};function Yu(){if(Wo&&!(10<=Number(ZP)))throw Error("Environmental error: no available transport.")}Yu.prototype.g=function(n,e){return new Vn(n,e)};function Vn(n,e){Kt.call(this),this.g=new vS(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Hu(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hu(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new va(this)}sn(Vn,Kt);Vn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),Xm(en(n.hb,n,e))),wn(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=TS(n,null,n.W),Bh(n)};Vn.prototype.close=function(){ag(this.g)};Vn.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Hd(this.g,e)}else this.v?(e={},e.__data__=Km(n),Hd(this.g,e)):Hd(this.g,n)};Vn.prototype.M=function(){this.g.j=null,delete this.j,ag(this.g),delete this.g,Vn.Z.M.call(this)};function AS(n){Jm.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}sn(AS,Jm);function RS(){eg.call(this),this.status=1}sn(RS,eg);function va(n){this.g=n}sn(va,IS);va.prototype.xa=function(){tn(this.g,"a")};va.prototype.wa=function(n){tn(this.g,new AS(n))};va.prototype.va=function(n){tn(this.g,new RS)};va.prototype.ua=function(){tn(this.g,"b")};Yu.prototype.createWebChannel=Yu.prototype.g;Vn.prototype.send=Vn.prototype.u;Vn.prototype.open=Vn.prototype.m;Vn.prototype.close=Vn.prototype.close;Lh.NO_ERROR=0;Lh.TIMEOUT=8;Lh.HTTP_ERROR=6;Qb.COMPLETE="complete";Zb.EventType=tc;tc.OPEN="a";tc.CLOSE="b";tc.ERROR="c";tc.MESSAGE="d";Kt.prototype.listen=Kt.prototype.N;Nt.prototype.listenOnce=Nt.prototype.O;Nt.prototype.getLastError=Nt.prototype.La;Nt.prototype.getLastErrorCode=Nt.prototype.Da;Nt.prototype.getStatus=Nt.prototype.ba;Nt.prototype.getResponseJson=Nt.prototype.Qa;Nt.prototype.getResponseText=Nt.prototype.ga;Nt.prototype.send=Nt.prototype.ea;var BD=function(){return new Yu},VD=function(){return Dh()},Wd=Lh,GD=Qb,HD=Xr,Hv={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},WD=sc,Lc=Zb,$D=Nt;const Wv="@firebase/firestore";/**
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
 */class An{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}An.UNAUTHENTICATED=new An(null),An.GOOGLE_CREDENTIALS=new An("google-credentials-uid"),An.FIRST_PARTY=new An("first-party-uid"),An.MOCK_USER=new An("mock-user");/**
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
 */let ya="9.9.0";/**
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
 */const zr=new _h("@firebase/firestore");function $v(){return zr.logLevel}function Ne(n,...e){if(zr.logLevel<=st.DEBUG){const t=e.map(ug);zr.debug(`Firestore (${ya}): ${n}`,...t)}}function zs(n,...e){if(zr.logLevel<=st.ERROR){const t=e.map(ug);zr.error(`Firestore (${ya}): ${n}`,...t)}}function qv(n,...e){if(zr.logLevel<=st.WARN){const t=e.map(ug);zr.warn(`Firestore (${ya}): ${n}`,...t)}}function ug(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function Ge(n="Unexpected state"){const e=`FIRESTORE (${ya}) INTERNAL ASSERTION FAILED: `+n;throw zs(e),new Error(e)}function xt(n,e){n||Ge()}function He(n,e){return n}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Me extends qr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class es{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class qD{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(An.UNAUTHENTICATED))}shutdown(){}}class KD{constructor(e){this.t=e,this.currentUser=An.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new es;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new es,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new es)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xt(typeof i.accessToken=="string"),new qD(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xt(e===null||typeof e=="string"),new An(e)}}class XD{constructor(e,t,i){this.type="FirstParty",this.user=An.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class YD{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new XD(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(An.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZD{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const i=r=>{r.error!=null&&Ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,Ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):Ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(xt(typeof t.token=="string"),this.p=t.token,new QD(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JD(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class PS{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=JD(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function ot(n,e){return n<e?-1:n>e?1:0}function $o(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
 */class It{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Me(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Me(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Me(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Me(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new It(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ot(this.nanoseconds,e.nanoseconds):ot(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ke{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ke(e)}static min(){return new Ke(new It(0,0))}static max(){return new Ke(new It(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class El{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ge(),i===void 0?i=e.length-t:i>e.length-t&&Ge(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return El.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof El?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class yt extends El{construct(e,t,i){return new yt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new Me(Z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new yt(t)}static emptyPath(){return new yt([])}}const eL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class cn extends El{construct(e,t,i){return new cn(e,t,i)}static isValidIdentifier(e){return eL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),cn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new cn(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new Me(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Me(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Me(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new Me(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new cn(t)}static emptyPath(){return new cn([])}}/**
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
 */class Oe{constructor(e){this.path=e}static fromPath(e){return new Oe(yt.fromString(e))}static fromName(e){return new Oe(yt.fromString(e).popFirst(5))}static empty(){return new Oe(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&yt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return yt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oe(new yt(e.slice()))}}function tL(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Ke.fromTimestamp(i===1e9?new It(t+1,0):new It(t,i));return new Bs(s,Oe.empty(),e)}function nL(n){return new Bs(n.readTime,n.key,-1)}class Bs{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Bs(Ke.min(),Oe.empty(),-1)}static max(){return new Bs(Ke.max(),Oe.empty(),-1)}}function iL(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Oe.comparator(n.documentKey,e.documentKey),t!==0?t:ot(n.largestBatchId,e.largestBatchId))}/**
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
 */const sL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ac(n){if(n.code!==Z.FAILED_PRECONDITION||n.message!==sL)throw n;Ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class de{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new de((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof de?t:de.resolve(t)}catch(t){return de.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):de.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):de.reject(t)}static resolve(e){return new de((t,i)=>{t(e)})}static reject(e){return new de((t,i)=>{i(e)})}static waitFor(e){return new de((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},l=>i(l))}),o=!0,r===s&&t()})}static or(e){let t=de.resolve(!1);for(const i of e)t=t.next(s=>s?de.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new de((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new de((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function lc(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class hg{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.it(i),this.rt=i=>t.writeSequenceNumber(i))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function jv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function DS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */hg.ot=-1;class Ft{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new Ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new Ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nc(this.root,e,this.comparator,!0)}}class Nc{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Yt.RED,this.left=s!=null?s:Yt.EMPTY,this.right=r!=null?r:Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Yt(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Yt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ge();const e=this.left.check();if(e!==this.right.check())throw Ge();return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ge()}get value(){throw Ge()}get color(){throw Ge()}get left(){throw Ge()}get right(){throw Ge()}copy(n,e,t,i,s){return this}insert(n,e,t){return new Yt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new Ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kv(this.data.getIterator())}getIteratorFrom(e){return new Kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class Kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qn{constructor(e){this.fields=e,e.sort(cn.comparator)}static empty(){return new Qn([])}unionWith(e){let t=new kt(cn.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new nn(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ot(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const oL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vs(n){if(xt(!!n),typeof n=="string"){let e=0;const t=oL.exec(n);if(xt(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Lt(n.seconds),nanos:Lt(n.nanos)}}function Lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qo(n){return typeof n=="string"?nn.fromBase64String(n):nn.fromUint8Array(n)}/**
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
 */function dg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function LS(n){const e=n.mapValue.fields.__previous_value__;return dg(e)?LS(e):e}function Ml(n){const e=Vs(n.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class aL{constructor(e,t,i,s,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class jo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Vh(n){return n==null}function Qu(n){return n===0&&1/n==-1/0}function lL(n){return typeof n=="number"&&Number.isInteger(n)&&!Qu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Oc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Br(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dg(n)?4:cL(n)?9007199254740991:10:Ge()}function ki(n,e){if(n===e)return!0;const t=Br(n);if(t!==Br(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ml(n).isEqual(Ml(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Vs(i.timestampValue),o=Vs(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return qo(i.bytesValue).isEqual(qo(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Lt(i.geoPointValue.latitude)===Lt(s.geoPointValue.latitude)&&Lt(i.geoPointValue.longitude)===Lt(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Lt(i.integerValue)===Lt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Lt(i.doubleValue),o=Lt(s.doubleValue);return r===o?Qu(r)===Qu(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return $o(n.arrayValue.values||[],e.arrayValue.values||[],ki);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(jv(r)!==jv(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ki(r[a],o[a])))return!1;return!0}(n,e);default:return Ge()}}function Tl(n,e){return(n.values||[]).find(t=>ki(t,e))!==void 0}function Ko(n,e){if(n===e)return 0;const t=Br(n),i=Br(e);if(t!==i)return ot(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ot(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Lt(s.integerValue||s.doubleValue),a=Lt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Xv(n.timestampValue,e.timestampValue);case 4:return Xv(Ml(n),Ml(e));case 5:return ot(n.stringValue,e.stringValue);case 6:return function(s,r){const o=qo(s),a=qo(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ot(o[l],a[l]);if(c!==0)return c}return ot(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=ot(Lt(s.latitude),Lt(r.latitude));return o!==0?o:ot(Lt(s.longitude),Lt(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ko(o[l],a[l]);if(c)return c}return ot(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Oc.mapValue&&r===Oc.mapValue)return 0;if(s===Oc.mapValue)return 1;if(r===Oc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ot(a[u],c[u]);if(h!==0)return h;const d=Ko(o[a[u]],l[c[u]]);if(d!==0)return d}return ot(a.length,c.length)}(n.mapValue,e.mapValue);default:throw Ge()}}function Xv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ot(n,e);const t=Vs(n),i=Vs(e),s=ot(t.seconds,i.seconds);return s!==0?s:ot(t.nanos,i.nanos)}function Lo(n){return _p(n)}function _p(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=Vs(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?qo(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,Oe.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=_p(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${_p(i.fields[a])}`;return r+"}"}(n.mapValue):Ge();var e,t}function Zu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function vp(n){return!!n&&"integerValue"in n}function fg(n){return!!n&&"arrayValue"in n}function Yv(n){return!!n&&"nullValue"in n}function Qv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pu(n){return!!n&&"mapValue"in n}function nl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yr(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=nl(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function cL(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nl(t)}setAll(e){let t=cn.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=nl(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ki(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];pu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Yr(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Pn(nl(this.value))}}function NS(n){const e=[];return Yr(n.fields,(t,i)=>{const s=new cn([t]);if(pu(i)){const r=NS(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Qn(e)}/**
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
 */class Qt{constructor(e,t,i,s,r,o){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Qt(e,0,Ke.min(),Ke.min(),Pn.empty(),0)}static newFoundDocument(e,t,i){return new Qt(e,1,t,Ke.min(),i,0)}static newNoDocument(e,t){return new Qt(e,2,t,Ke.min(),Pn.empty(),0)}static newUnknownDocument(e,t){return new Qt(e,3,t,Ke.min(),Pn.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uL{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Zv(n,e=null,t=[],i=[],s=null,r=null,o=null){return new uL(n,e,t,i,s,r,o)}function pg(n){const e=He(n);if(e.ut===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>{return(s=i).field.canonicalString()+s.op.toString()+Lo(s.value);var s}).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Vh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Lo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Lo(i)).join(",")),e.ut=t}return e.ut}function hL(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(i=t).field.canonicalString()} ${i.op} ${Lo(i.value)}`;var i}).join(", ")}]`),Vh(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>Lo(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>Lo(t)).join(",")),`Target(${e})`}function mg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!yL(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],i=e.filters[s],t.op!==i.op||!t.field.isEqual(i.field)||!ki(t.value,i.value))return!1;var t,i;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ey(n.startAt,e.startAt)&&ey(n.endAt,e.endAt)}function yp(n){return Oe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class bn extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.ct(e,t,i):new dL(e,t,i):t==="array-contains"?new mL(e,i):t==="in"?new gL(e,i):t==="not-in"?new _L(e,i):t==="array-contains-any"?new vL(e,i):new bn(e,t,i)}static ct(e,t,i){return t==="in"?new fL(e,i):new pL(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.at(Ko(t,this.value)):t!==null&&Br(this.value)===Br(t)&&this.at(Ko(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ge()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class dL extends bn{constructor(e,t,i){super(e,t,i),this.key=Oe.fromName(i.referenceValue)}matches(e){const t=Oe.comparator(e.key,this.key);return this.at(t)}}class fL extends bn{constructor(e,t){super(e,"in",t),this.keys=OS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pL extends bn{constructor(e,t){super(e,"not-in",t),this.keys=OS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function OS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Oe.fromName(i.referenceValue))}class mL extends bn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fg(t)&&Tl(t.arrayValue,this.value)}}class gL extends bn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Tl(this.value.arrayValue,t)}}class _L extends bn{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Tl(this.value.arrayValue,t)}}class vL extends bn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Tl(this.value.arrayValue,i))}}class Xo{constructor(e,t){this.position=e,this.inclusive=t}}class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function yL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Jv(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=Oe.comparator(Oe.fromName(o.referenceValue),t.key):i=Ko(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ey(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ki(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class js{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function xL(n,e,t,i,s,r,o,a){return new js(n,e,t,i,s,r,o,a)}function Gh(n){return new js(n)}function wL(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gg(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function _g(n){for(const e of n.filters)if(e.ht())return e.field;return null}function vg(n){return n.collectionGroup!==null}function Yo(n){const e=He(n);if(e.lt===null){e.lt=[];const t=_g(e),i=gg(e);if(t!==null&&i===null)t.isKeyField()||e.lt.push(new No(t)),e.lt.push(new No(cn.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new No(cn.keyField(),r))}}}return e.lt}function Vr(n){const e=He(n);if(!e.ft)if(e.limitType==="F")e.ft=Zv(e.path,e.collectionGroup,Yo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Yo(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new No(r.field,o))}const i=e.endAt?new Xo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Xo(e.startAt.position,e.startAt.inclusive):null;e.ft=Zv(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e.ft}function kS(n,e,t){return new js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hh(n,e){return mg(Vr(n),Vr(e))&&n.limitType===e.limitType}function FS(n){return`${pg(Vr(n))}|lt:${n.limitType}`}function xp(n){return`Query(target=${hL(Vr(n))}; limitType=${n.limitType})`}function yg(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):Oe.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(s,r,o){const a=Jv(s,r,o);return s.inclusive?a<=0:a<0}(t.startAt,Yo(t),i)||t.endAt&&!function(s,r,o){const a=Jv(s,r,o);return s.inclusive?a>=0:a>0}(t.endAt,Yo(t),i))}(n,e)}function bL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function US(n){return(e,t)=>{let i=!1;for(const s of Yo(n)){const r=SL(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function SL(n,e,t){const i=n.field.isKeyField()?Oe.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Ko(a,l):Ge()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ge()}}/**
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
 */function zS(n,e){if(n.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function BS(n){return{integerValue:""+n}}function EL(n,e){return lL(e)?BS(e):zS(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wh{constructor(){this._=void 0}}function ML(n,e,t){return n instanceof Ju?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof Cl?GS(n,e):n instanceof Il?HS(n,e):function(i,s){const r=VS(i,s),o=ty(r)+ty(i._t);return vp(r)&&vp(i._t)?BS(o):zS(i.wt,o)}(n,e)}function TL(n,e,t){return n instanceof Cl?GS(n,e):n instanceof Il?HS(n,e):t}function VS(n,e){return n instanceof eh?vp(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class Ju extends Wh{}class Cl extends Wh{constructor(e){super(),this.elements=e}}function GS(n,e){const t=WS(e);for(const i of n.elements)t.some(s=>ki(s,i))||t.push(i);return{arrayValue:{values:t}}}class Il extends Wh{constructor(e){super(),this.elements=e}}function HS(n,e){let t=WS(e);for(const i of n.elements)t=t.filter(s=>!ki(s,i));return{arrayValue:{values:t}}}class eh extends Wh{constructor(e,t){super(),this.wt=e,this._t=t}}function ty(n){return Lt(n.integerValue||n.doubleValue)}function WS(n){return fg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function CL(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Cl&&i instanceof Cl||t instanceof Il&&i instanceof Il?$o(t.elements,i.elements,ki):t instanceof eh&&i instanceof eh?ki(t._t,i._t):t instanceof Ju&&i instanceof Ju}(n.transform,e.transform)}class IL{constructor(e,t){this.version=e,this.transformResults=t}}class Zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $h{}function $S(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xg(n.key,Zn.none()):new cc(n.key,n.data,Zn.none());{const t=n.data,i=Pn.empty();let s=new kt(cn.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ks(n.key,i,new Qn(s.toArray()),Zn.none())}}function AL(n,e,t){n instanceof cc?function(i,s,r){const o=i.value.clone(),a=iy(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ks?function(i,s,r){if(!mu(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=iy(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(qS(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function il(n,e,t,i){return n instanceof cc?function(s,r,o,a){if(!mu(s.precondition,r))return o;const l=s.value.clone(),c=sy(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ks?function(s,r,o,a){if(!mu(s.precondition,r))return o;const l=sy(s.fieldTransforms,a,r),c=r.data;return c.setAll(qS(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(n,e,t,i):function(s,r,o){return mu(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function RL(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=VS(i.transform,s||null);r!=null&&(t===null&&(t=Pn.empty()),t.set(i.field,r))}return t||null}function ny(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&$o(t,i,(s,r)=>CL(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cc extends $h{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ks extends $h{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function qS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function iy(n,e,t){const i=new Map;xt(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,TL(o,a,t[s]))}return i}function sy(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,ML(r,o,e))}return i}class xg extends $h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PL extends $h{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DL{constructor(e){this.count=e}}/**
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
 */var Dt,Ze;function LL(n){switch(n){default:return Ge();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function jS(n){if(n===void 0)return zs("GRPC error has no .code"),Z.UNKNOWN;switch(n){case Dt.OK:return Z.OK;case Dt.CANCELLED:return Z.CANCELLED;case Dt.UNKNOWN:return Z.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return Z.INTERNAL;case Dt.UNAVAILABLE:return Z.UNAVAILABLE;case Dt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Dt.NOT_FOUND:return Z.NOT_FOUND;case Dt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Dt.ABORTED:return Z.ABORTED;case Dt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Dt.DATA_LOSS:return Z.DATA_LOSS;default:return Ge()}}(Ze=Dt||(Dt={}))[Ze.OK=0]="OK",Ze[Ze.CANCELLED=1]="CANCELLED",Ze[Ze.UNKNOWN=2]="UNKNOWN",Ze[Ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ze[Ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ze[Ze.NOT_FOUND=5]="NOT_FOUND",Ze[Ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ze[Ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ze[Ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ze[Ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ze[Ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ze[Ze.ABORTED=10]="ABORTED",Ze[Ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ze[Ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ze[Ze.INTERNAL=13]="INTERNAL",Ze[Ze.UNAVAILABLE=14]="UNAVAILABLE",Ze[Ze.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return DS(this.inner)}size(){return this.innerSize}}/**
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
 */const NL=new Ft(Oe.comparator);function os(){return NL}const KS=new Ft(Oe.comparator);function Wa(...n){let e=KS;for(const t of n)e=e.insert(t.key,t);return e}function XS(n){let e=KS;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function fr(){return sl()}function YS(){return sl()}function sl(){return new xa(n=>n.toString(),(n,e)=>n.isEqual(e))}const OL=new Ft(Oe.comparator),kL=new kt(Oe.comparator);function Qe(...n){let e=kL;for(const t of n)e=e.add(t);return e}const FL=new kt(ot);function QS(){return FL}/**
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
 */class qh{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const i=new Map;return i.set(e,uc.createSynthesizedTargetChangeForCurrentChange(e,t)),new qh(Ke.min(),i,QS(),os(),Qe())}}class uc{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new uc(nn.EMPTY_BYTE_STRING,t,Qe(),Qe(),Qe())}}/**
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
 */class gu{constructor(e,t,i,s){this.gt=e,this.removedTargetIds=t,this.key=i,this.yt=s}}class ZS{constructor(e,t){this.targetId=e,this.It=t}}class JS{constructor(e,t,i=nn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class ry{constructor(){this.Tt=0,this.Et=ay(),this.At=nn.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Qe(),t=Qe(),i=Qe();return this.Et.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:Ge()}}),new uc(this.At,this.Rt,e,t,i)}Dt(){this.bt=!1,this.Et=ay()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class UL{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=os(),this.Bt=oy(),this.Lt=new kt(ot)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,t=>{const i=this.Qt(t);switch(e.state){case 0:this.jt(t)&&i.Vt(e.resumeToken);break;case 1:i.kt(),i.Pt||i.Dt(),i.Vt(e.resumeToken);break;case 2:i.kt(),i.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(i.Ot(),i.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),i.Vt(e.resumeToken));break;default:Ge()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach((i,s)=>{this.jt(s)&&t(s)})}zt(e){const t=e.targetId,i=e.It.count,s=this.Ht(t);if(s){const r=s.target;if(yp(r))if(i===0){const o=new Oe(r.path);this.Kt(t,o,Qt.newNoDocument(o,Ke.min()))}else xt(i===1);else this.Jt(t)!==i&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&yp(a.target)){const l=new Oe(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Qt.newNoDocument(l,e))}r.vt&&(t.set(o,r.St()),r.Dt())}});let i=Qe();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ht(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const s=new qh(e,t,this.Lt,this.$t,i);return this.$t=os(),this.Bt=oy(),this.Lt=new kt(ot),s}qt(e,t){if(!this.jt(e))return;const i=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,i),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,i){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,t)?s.Ct(t,1):s.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),i&&(this.$t=this.$t.insert(t,i))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new ry,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new kt(ot),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=this.Ht(e)!==null;return t||Ne("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new ry),this.Mt.getRemoteKeysForTarget(e).forEach(t=>{this.Kt(e,t,null)})}Xt(e,t){return this.Mt.getRemoteKeysForTarget(e).has(t)}}function oy(){return new Ft(Oe.comparator)}function ay(){return new Ft(Oe.comparator)}/**
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
 */const zL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class VL{constructor(e,t){this.databaseId=e,this.dt=t}}function th(n,e){return n.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eE(n,e){return n.dt?e.toBase64():e.toUint8Array()}function GL(n,e){return th(n,e.toTimestamp())}function ts(n){return xt(!!n),Ke.fromTimestamp(function(e){const t=Vs(e);return new It(t.seconds,t.nanos)}(n))}function wg(n,e){return function(t){return new yt(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function tE(n){const e=yt.fromString(n);return xt(sE(e)),e}function wp(n,e){return wg(n.databaseId,e.path)}function $d(n,e){const t=tE(e);if(t.get(1)!==n.databaseId.projectId)throw new Me(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Me(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Oe(nE(t))}function bp(n,e){return wg(n.databaseId,e)}function HL(n){const e=tE(n);return e.length===4?yt.emptyPath():nE(e)}function Sp(n){return new yt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nE(n){return xt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ly(n,e,t){return{name:wp(n,e),fields:t.value.mapValue.fields}}function WL(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.dt?(xt(c===void 0||typeof c=="string"),nn.fromBase64String(c||"")):(xt(c===void 0||c instanceof Uint8Array),nn.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?Z.UNKNOWN:jS(l.code);return new Me(c,l.message||"")}(o);t=new JS(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=$d(n,i.document.name),r=ts(i.document.updateTime),o=new Pn({mapValue:{fields:i.document.fields}}),a=Qt.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];t=new gu(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=$d(n,i.document),r=i.readTime?ts(i.readTime):Ke.min(),o=Qt.newNoDocument(s,r),a=i.removedTargetIds||[];t=new gu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=$d(n,i.document),r=i.removedTargetIds||[];t=new gu([],r,s,null)}else{if(!("filter"in e))return Ge();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new DL(s),o=i.targetId;t=new ZS(o,r)}}return t}function $L(n,e){let t;if(e instanceof cc)t={update:ly(n,e.key,e.value)};else if(e instanceof xg)t={delete:wp(n,e.key)};else if(e instanceof Ks)t={update:ly(n,e.key,e.data),updateMask:tN(e.fieldMask)};else{if(!(e instanceof PL))return Ge();t={verify:wp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Ju)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Cl)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Il)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof eh)return{fieldPath:r.field.canonicalString(),increment:o._t};throw Ge()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:GL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ge()}(n,e.precondition)),t}function qL(n,e){return n&&n.length>0?(xt(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?ts(i.updateTime):ts(s);return r.isEqual(Ke.min())&&(r=ts(s)),new IL(r,i.transformResults||[])}(t,e))):[]}function jL(n,e){return{documents:[bp(n,e.path)]}}function KL(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=bp(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=bp(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(Qv(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NAN"}};if(Yv(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Qv(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NOT_NAN"}};if(Yv(h.value))return{unaryFilter:{field:no(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(h.field),op:ZL(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(t.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:no(u.field),direction:QL(u.dir)}}(c))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(l,c){return l.dt||Vh(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function XL(n){let e=HL(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){xt(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=iE(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new No(Co(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Vh(h)?null:h}(t.limit));let l=null;t.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Xo(d,h)}(t.startAt));let c=null;return t.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Xo(d,h)}(t.endAt)),xL(e,s,o,r,a,"F",l,c)}function YL(n,e){const t=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ge()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function iE(n){return n?n.unaryFilter!==void 0?[eN(n)]:n.fieldFilter!==void 0?[JL(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>iE(e)).reduce((e,t)=>e.concat(t)):Ge():[]}function QL(n){return zL[n]}function ZL(n){return BL[n]}function no(n){return{fieldPath:n.canonicalString()}}function Co(n){return cn.fromServerFormat(n.fieldPath)}function JL(n){return bn.create(Co(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ge()}}(n.fieldFilter.op),n.fieldFilter.value)}function eN(n){switch(n.unaryFilter.op){case"IS_NAN":const e=Co(n.unaryFilter.field);return bn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Co(n.unaryFilter.field);return bn.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Co(n.unaryFilter.field);return bn.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Co(n.unaryFilter.field);return bn.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ge()}}function tN(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class nN{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&AL(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=il(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=YS();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const l=$S(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Ke.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Qe())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(t,i)=>ny(t,i))&&$o(this.baseMutations,e.baseMutations,(t,i)=>ny(t,i))}}class bg{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){xt(e.mutations.length===i.length);let s=OL;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new bg(e,t,i,s)}}/**
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
 */class iN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class wr{constructor(e,t,i,s,r=Ke.min(),o=Ke.min(),a=nn.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class sN{constructor(e){this.ne=e}}function rN(n){const e=XL({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?kS(e,e.limit,"L"):e}/**
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
 */class oN{constructor(){this.ze=new aN}addToCollectionParentIndex(e,t){return this.ze.add(t),de.resolve()}getCollectionParents(e,t){return de.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return de.resolve()}deleteFieldIndex(e,t){return de.resolve()}getDocumentsMatchingTarget(e,t){return de.resolve(null)}getIndexType(e,t){return de.resolve(0)}getFieldIndexes(e,t){return de.resolve([])}getNextCollectionGroupToUpdate(e){return de.resolve(null)}getMinOffset(e,t){return de.resolve(Bs.min())}getMinOffsetFromCollectionGroup(e,t){return de.resolve(Bs.min())}updateCollectionGroup(e,t,i){return de.resolve()}updateIndexEntries(e,t){return de.resolve()}}class aN{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new kt(yt.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new kt(yt.comparator)).toArray()}}/**
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
 */class Qo{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Qo(0)}static Rn(){return new Qo(-1)}}/**
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
 */class lN{constructor(){this.changes=new xa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?de.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class uN{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.getBaseDocument(e,t,i))).next(s=>(i!==null&&il(i.mutation,s,Qn.empty(),It.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Qe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Qe()){const s=fr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=Wa();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=fr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Qe()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=os();const o=sl(),a=sl();return t.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Ks)?r=r.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),il(u.mutation,c,u.mutation.getFieldMask(),It.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new cN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=sl();let s=new Ft((o,a)=>o-a),r=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=i.get(l)||Qn.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||Qe()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=YS();u.forEach(d=>{if(!r.has(d)){const p=$S(t.get(d),i.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return de.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return Oe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):de.resolve(fr());let a=-1,l=r;return o.next(c=>de.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?de.resolve():this.getBaseDocument(e,u,h).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Qe())).next(u=>({batchId:a,changes:XS(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Oe(t)).next(i=>{let s=Wa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const s=t.collectionGroup;let r=Wa();return this.indexManager.getCollectionParents(e,s).next(o=>de.forEach(o,a=>{const l=function(c,u){return new js(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,i){let s;return this.remoteDocumentCache.getAllFromCollection(e,t.path,i).next(r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Qt.newInvalidDocument(c)))});let o=Wa();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&il(c.mutation,l,Qn.empty(),It.now()),yg(t,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,t,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):de.resolve(Qt.newInvalidDocument(t))}}/**
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
 */class hN{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return de.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var i;return this.Jn.set(t.id,{id:(i=t).id,version:i.version,createTime:ts(i.createTime)}),de.resolve()}getNamedQuery(e,t){return de.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(i){return{name:i.name,query:rN(i.bundledQuery),readTime:ts(i.readTime)}}(t)),de.resolve()}}/**
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
 */class dN{constructor(){this.overlays=new Ft(Oe.comparator),this.Xn=new Map}getOverlay(e,t){return de.resolve(this.overlays.get(t))}getOverlays(e,t){const i=fr();return de.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ie(e,t,r)}),de.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Xn.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(i)),de.resolve()}getOverlaysForCollection(e,t,i){const s=fr(),r=t.length+1,o=new Oe(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return de.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Ft((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=fr(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=fr(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return de.resolve(a)}ie(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(i.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new iN(t,i));let r=this.Xn.get(t);r===void 0&&(r=Qe(),this.Xn.set(t,r)),this.Xn.set(t,r.add(i.key))}}/**
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
 */class Sg{constructor(){this.Zn=new kt(Bt.ts),this.es=new kt(Bt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const i=new Bt(e,t);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.rs(new Bt(e,t))}os(e,t){e.forEach(i=>this.removeReference(i,t))}us(e){const t=new Oe(new yt([])),i=new Bt(t,e),s=new Bt(t,e+1),r=[];return this.es.forEachInRange([i,s],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Oe(new yt([])),i=new Bt(t,e),s=new Bt(t,e+1);let r=Qe();return this.es.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Bt(e,0),i=this.Zn.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Bt{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return Oe.comparator(e.key,t.key)||ot(e.ls,t.ls)}static ns(e,t){return ot(e.ls,t.ls)||Oe.comparator(e.key,t.key)}}/**
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
 */class fN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new kt(Bt.ts)}checkEmpty(e){return de.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nN(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new Bt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return de.resolve(o)}lookupMutationBatch(e,t){return de.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.ws(i),r=s<0?0:s;return de.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return de.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return de.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Bt(t,0),s=new Bt(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],o=>{const a=this._s(o.ls);r.push(a)}),de.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new kt(ot);return t.forEach(s=>{const r=new Bt(s,0),o=new Bt(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{i=i.add(a.ls)})}),de.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;Oe.isDocumentKey(r)||(r=r.child(""));const o=new Bt(new Oe(r),0);let a=new kt(ot);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ls)),!0)},o),de.resolve(this.gs(a))}gs(e){const t=[];return e.forEach(i=>{const s=this._s(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){xt(this.ys(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.ds;return de.forEach(t.mutations,s=>{const r=new Bt(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}In(e){}containsKey(e,t){const i=new Bt(t,0),s=this.ds.firstAfterOrEqual(i);return de.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,de.resolve()}ys(e,t){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pN{constructor(e){this.ps=e,this.docs=new Ft(Oe.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ps(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return de.resolve(i?i.document.mutableCopy():Qt.newInvalidDocument(t))}getEntries(e,t){let i=os();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Qt.newInvalidDocument(s))}),de.resolve(i)}getAllFromCollection(e,t,i){let s=os();const r=new Oe(t.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||iL(nL(l),i)<=0||(s=s.insert(l.key,l.mutableCopy()))}return de.resolve(s)}getAllFromCollectionGroup(e,t,i,s){Ge()}Is(e,t){return de.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new mN(this)}getSize(e){return de.resolve(this.size)}}class mN extends lN{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.zn.addEntry(e,s)):this.zn.removeEntry(i)}),de.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}/**
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
 */class gN{constructor(e){this.persistence=e,this.Ts=new xa(t=>pg(t),mg),this.lastRemoteSnapshotVersion=Ke.min(),this.highestTargetId=0,this.Es=0,this.As=new Sg,this.targetCount=0,this.Rs=Qo.An()}forEachTarget(e,t){return this.Ts.forEach((i,s)=>t(s)),de.resolve()}getLastRemoteSnapshotVersion(e){return de.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return de.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),de.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Es&&(this.Es=t),de.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Qo(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,de.resolve()}updateTargetData(e,t){return this.vn(t),de.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,de.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),de.waitFor(r).next(()=>s)}getTargetCount(e){return de.resolve(this.targetCount)}getTargetData(e,t){const i=this.Ts.get(t)||null;return de.resolve(i)}addMatchingKeys(e,t,i){return this.As.ss(t,i),de.resolve()}removeMatchingKeys(e,t,i){this.As.os(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),de.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),de.resolve()}getMatchingKeysForTargetId(e,t){const i=this.As.hs(t);return de.resolve(i)}containsKey(e,t){return de.resolve(this.As.containsKey(t))}}/**
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
 */class _N{constructor(e,t){this.bs={},this.overlays={},this.Ps=new hg(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new gN(this),this.indexManager=new oN,this.remoteDocumentCache=function(i){return new pN(i)}(i=>this.referenceDelegate.Ss(i)),this.wt=new sN(t),this.Ds=new hN(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new dN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.bs[e.toKey()];return i||(i=new fN(t,this.referenceDelegate),this.bs[e.toKey()]=i),i}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,i){Ne("MemoryPersistence","Starting transaction:",e);const s=new vN(this.Ps.next());return this.referenceDelegate.Cs(),i(s).next(r=>this.referenceDelegate.xs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ns(e,t){return de.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,t)))}}class vN extends rL{constructor(e){super(),this.currentSequenceNumber=e}}class Eg{constructor(e){this.persistence=e,this.ks=new Sg,this.Os=null}static Ms(e){return new Eg(e)}get Fs(){if(this.Os)return this.Os;throw Ge()}addReference(e,t,i){return this.ks.addReference(i,t),this.Fs.delete(i.toString()),de.resolve()}removeReference(e,t,i){return this.ks.removeReference(i,t),this.Fs.add(i.toString()),de.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),de.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach(s=>this.Fs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Fs.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Cs(){this.Os=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return de.forEach(this.Fs,i=>{const s=Oe.fromPath(i);return this.$s(e,s).next(r=>{r||t.removeEntry(s,Ke.min())})}).next(()=>(this.Os=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(i=>{i?this.Fs.delete(t.toString()):this.Fs.add(t.toString())})}Ss(e){return 0}$s(e,t){return de.or([()=>de.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}/**
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
 */class Mg{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Pi=i,this.vi=s}static Vi(e,t){let i=Qe(),s=Qe();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Mg(e,t.fromCache,i,s)}}/**
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
 */class yN{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,i,s){return this.Ci(e,t).next(r=>r||this.xi(e,t,s,i)).next(r=>r||this.Ni(e,t))}Ci(e,t){return de.resolve(null)}xi(e,t,i,s){return wL(t)||s.isEqual(Ke.min())?this.Ni(e,t):this.Di.getDocuments(e,i).next(r=>{const o=this.ki(t,r);return this.Oi(t,o,i,s)?this.Ni(e,t):($v()<=st.DEBUG&&Ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xp(t)),this.Mi(e,o,t,tL(s,-1)))})}ki(e,t){let i=new kt(US(e));return t.forEach((s,r)=>{yg(e,r)&&(i=i.add(r))}),i}Oi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ni(e,t){return $v()<=st.DEBUG&&Ne("QueryEngine","Using full collection scan to execute query:",xp(t)),this.Di.getDocumentsMatchingQuery(e,t,Bs.min())}Mi(e,t,i,s){return this.Di.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class xN{constructor(e,t,i,s){this.persistence=e,this.Fi=t,this.wt=s,this.$i=new Ft(ot),this.Bi=new xa(r=>pg(r),mg),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(i)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uN(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$i))}}function wN(n,e,t,i){return new xN(n,e,t,i)}async function rE(n,e){const t=He(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.qi(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=Qe();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(i,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function bN(n,e){const t=He(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=de.resolve();return h.forEach(p=>{d=d.next(()=>c.getEntry(a,p)).next(g=>{const m=l.docVersions.get(p);xt(m!==null),g.version.compareTo(m)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=Qe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function oE(n){const e=He(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Vs.getLastRemoteSnapshotVersion(t))}function SN(n,e){const t=He(n),i=e.snapshotVersion;let s=t.$i;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Ui.newChangeBuffer({trackRemovals:!0});s=t.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.Vs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Vs.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(nn.EMPTY_BYTE_STRING,Ke.min()).withLastLimboFreeSnapshotVersion(Ke.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,i)),s=s.insert(h,p),function(g,m,f){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(d,p,u)&&a.push(t.Vs.updateTargetData(r,p))});let l=os(),c=Qe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(EN(r,o,e.documentUpdates).next(u=>{l=u.Gi,c=u.Qi})),!i.isEqual(Ke.min())){const u=t.Vs.getLastRemoteSnapshotVersion(r).next(h=>t.Vs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return de.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(t.$i=s,r))}function EN(n,e,t){let i=Qe(),s=Qe();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=os();return t.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Ke.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Gi:o,Qi:s}})}function MN(n,e){const t=He(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function TN(n,e){const t=He(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Vs.getTargetData(i,e).next(r=>r?(s=r,de.resolve(s)):t.Vs.allocateTargetId(i).next(o=>(s=new wr(e,o,0,i.currentSequenceNumber),t.Vs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.$i.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.$i=t.$i.insert(i.targetId,i),t.Bi.set(e,i.targetId)),i})}async function Ep(n,e,t){const i=He(n),s=i.$i.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!lc(o))throw o;Ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.$i=i.$i.remove(e),i.Bi.delete(s.target)}function cy(n,e,t){const i=He(n);let s=Ke.min(),r=Qe();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=He(a),h=u.Bi.get(c);return h!==void 0?de.resolve(u.$i.get(h)):u.Vs.getTargetData(l,c)}(i,o,Vr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Fi.getDocumentsMatchingQuery(o,e,t?s:Ke.min(),t?r:Qe())).next(a=>(CN(i,bL(e),a),{documents:a,ji:r})))}function CN(n,e,t){let i=Ke.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.Li.set(e,i)}class uy{constructor(){this.activeTargetIds=QS()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IN{constructor(){this.Fr=new uy,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,i){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new uy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class AN{Br(e){}shutdown(){}}/**
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
 */class hy{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){Ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const RN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class PN{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class DN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,i,s,r){const o=this.oo(e,t);Ne("RestConnection","Sending: ",o,i);const a={};return this.uo(a,s,r),this.co(e,o,a,i).then(l=>(Ne("RestConnection","Received: ",l),l),l=>{throw qv("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}ao(e,t,i,s,r,o){return this.ro(e,t,i,s,r)}uo(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+ya,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}oo(e,t){const i=RN[e];return`${this.so}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,i,s){return new Promise((r,o)=>{const a=new $D;a.listenOnce(GD.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wd.NO_ERROR:const c=a.getResponseJson();Ne("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Wd.TIMEOUT:Ne("Connection",'RPC "'+e+'" timed out'),o(new Me(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Wd.HTTP_ERROR:const u=a.getStatus();if(Ne("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(g)>=0?g:Z.UNKNOWN}(h.status);o(new Me(d,h.message))}else o(new Me(Z.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Me(Z.UNAVAILABLE,"Connection failed."));break;default:Ge()}}finally{Ne("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(t,"POST",l,i,15)})}ho(e,t,i){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=BD(),o=VD(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new WD({})),this.uo(a.initMessageHeaders,t,i),mh()||om()||UT()||Fx()||zT()||kx()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");Ne("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new PN({jr:g=>{h?Ne("Connection","Not sending because WebChannel is closed:",g):(u||(Ne("Connection","Opening WebChannel transport."),c.open(),u=!0),Ne("Connection","WebChannel sending:",g),c.send(g))},Wr:()=>c.close()}),p=(g,m,f)=>{g.listen(m,_=>{try{f(_)}catch(w){setTimeout(()=>{throw w},0)}})};return p(c,Lc.EventType.OPEN,()=>{h||Ne("Connection","WebChannel transport opened.")}),p(c,Lc.EventType.CLOSE,()=>{h||(h=!0,Ne("Connection","WebChannel transport closed"),d.eo())}),p(c,Lc.EventType.ERROR,g=>{h||(h=!0,qv("Connection","WebChannel transport errored:",g),d.eo(new Me(Z.UNAVAILABLE,"The operation could not be completed")))}),p(c,Lc.EventType.MESSAGE,g=>{var m;if(!h){const f=g.data[0];xt(!!f);const _=f,w=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(w){Ne("Connection","WebChannel received error:",w);const T=w.status;let M=function(R){const F=Dt[R];if(F!==void 0)return jS(F)}(T),E=w.message;M===void 0&&(M=Z.INTERNAL,E="Unknown error status: "+T+" with message "+w.message),h=!0,d.eo(new Me(M,E)),c.close()}else Ne("Connection","WebChannel received:",f),d.no(f)}}),p(o,HD.STAT_EVENT,g=>{g.stat===Hv.PROXY?Ne("Connection","Detected buffering proxy"):g.stat===Hv.NOPROXY&&Ne("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function qd(){return typeof document!="undefined"?document:null}/**
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
 */function jh(n){return new VL(n,!0)}class aE{constructor(e,t,i=1e3,s=1.5,r=6e4){this.js=e,this.timerId=t,this.lo=i,this.fo=s,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),i=Math.max(0,Date.now()-this.yo),s=Math.max(0,t-i);s>0&&Ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class lE{constructor(e,t,i,s,r,o,a,l){this.js=e,this.Ao=i,this.Ro=s,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new aE(e,t)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(zs(t.toString()),zs("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Po===t&&this.Uo(i,s)},i=>{e(()=>{const s=new Me(Z.UNKNOWN,"Fetching auth token failed: "+i.message);return this.qo(s)})})}Uo(e,t){const i=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr(()=>{i(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{i(()=>this.qo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return Ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget(()=>this.Po===e?t():(Ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LN extends lE{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.wt=r}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=WL(this.wt,e),i=function(s){if(!("targetChange"in s))return Ke.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Ke.min():r.readTime?ts(r.readTime):Ke.min()}(e);return this.listener.Go(t,i)}Qo(e){const t={};t.database=Sp(this.wt),t.addTarget=function(s,r){let o;const a=r.target;return o=yp(a)?{documents:jL(s,a)}:{query:KL(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=eE(s,r.resumeToken):r.snapshotVersion.compareTo(Ke.min())>0&&(o.readTime=th(s,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const i=YL(this.wt,e);i&&(t.labels=i),this.Mo(t)}jo(e){const t={};t.database=Sp(this.wt),t.removeTarget=e,this.Mo(t)}}class NN extends lE{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(xt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=qL(e.writeResults,e.commitTime),i=ts(e.commitTime);return this.listener.Jo(i,t)}return xt(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Sp(this.wt),this.Mo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>$L(this.wt,i))};this.Mo(t)}}/**
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
 */class ON extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=i,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new Me(Z.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.bo.ro(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Me(Z.UNKNOWN,s.toString())})}ao(e,t,i,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new Me(Z.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class kN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(zs(t),this.su=!1):Ne("OnlineStateTracker",t)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class FN{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{i.enqueueAndForget(async()=>{Qr(this)&&(Ne("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=He(a);l.lu.add(4),await hc(l),l._u.set("Unknown"),l.lu.delete(4),await Kh(l)}(this))})}),this._u=new kN(i,s)}}async function Kh(n){if(Qr(n))for(const e of n.fu)await e(!0)}async function hc(n){for(const e of n.fu)await e(!1)}function cE(n,e){const t=He(n);t.hu.has(e.targetId)||(t.hu.set(e.targetId,e),Ig(t)?Cg(t):wa(t).Co()&&Tg(t,e))}function uE(n,e){const t=He(n),i=wa(t);t.hu.delete(e),i.Co()&&hE(t,e),t.hu.size===0&&(i.Co()?i.ko():Qr(t)&&t._u.set("Unknown"))}function Tg(n,e){n.wu.Nt(e.targetId),wa(n).Qo(e)}function hE(n,e){n.wu.Nt(e),wa(n).jo(e)}function Cg(n){n.wu=new UL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),te:e=>n.hu.get(e)||null}),wa(n).start(),n._u.iu()}function Ig(n){return Qr(n)&&!wa(n).Do()&&n.hu.size>0}function Qr(n){return He(n).lu.size===0}function dE(n){n.wu=void 0}async function UN(n){n.hu.forEach((e,t)=>{Tg(n,e)})}async function zN(n,e){dE(n),Ig(n)?(n._u.uu(e),Cg(n)):n._u.set("Unknown")}async function BN(n,e,t){if(n._u.set("Online"),e instanceof JS&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.hu.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.hu.delete(o),i.wu.removeTarget(o))}(n,e)}catch(i){Ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await nh(n,i)}else if(e instanceof gu?n.wu.Ut(e):e instanceof ZS?n.wu.zt(e):n.wu.Gt(e),!t.isEqual(Ke.min()))try{const i=await oE(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.wu.Yt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.hu.get(l);c&&s.hu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.hu.get(a);if(!l)return;s.hu.set(a,l.withResumeToken(nn.EMPTY_BYTE_STRING,l.snapshotVersion)),hE(s,a);const c=new wr(l.target,a,1,l.sequenceNumber);Tg(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){Ne("RemoteStore","Failed to raise snapshot:",i),await nh(n,i)}}async function nh(n,e,t){if(!lc(e))throw e;n.lu.add(1),await hc(n),n._u.set("Offline"),t||(t=()=>oE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Ne("RemoteStore","Retrying IndexedDB access"),await t(),n.lu.delete(1),await Kh(n)})}function fE(n,e){return e().catch(t=>nh(n,t,e))}async function Xh(n){const e=He(n),t=Gs(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;VN(e);)try{const s=await MN(e.localStore,i);if(s===null){e.au.length===0&&t.ko();break}i=s.batchId,GN(e,s)}catch(s){await nh(e,s)}pE(e)&&mE(e)}function VN(n){return Qr(n)&&n.au.length<10}function GN(n,e){n.au.push(e);const t=Gs(n);t.Co()&&t.zo&&t.Ho(e.mutations)}function pE(n){return Qr(n)&&!Gs(n).Do()&&n.au.length>0}function mE(n){Gs(n).start()}async function HN(n){Gs(n).Xo()}async function WN(n){const e=Gs(n);for(const t of n.au)e.Ho(t.mutations)}async function $N(n,e,t){const i=n.au.shift(),s=bg.from(i,e,t);await fE(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Xh(n)}async function qN(n,e){e&&Gs(n).zo&&await async function(t,i){if(s=i.code,LL(s)&&s!==Z.ABORTED){const r=t.au.shift();Gs(t).No(),await fE(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Xh(t)}var s}(n,e),pE(n)&&mE(n)}async function dy(n,e){const t=He(n);t.asyncQueue.verifyOperationInProgress(),Ne("RemoteStore","RemoteStore received new credentials");const i=Qr(t);t.lu.add(3),await hc(t),i&&t._u.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.lu.delete(3),await Kh(t)}async function jN(n,e){const t=He(n);e?(t.lu.delete(2),await Kh(t)):e||(t.lu.add(2),await hc(t),t._u.set("Unknown"))}function wa(n){return n.mu||(n.mu=function(e,t,i){const s=He(e);return s.tu(),new LN(t,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,i)}(n.datastore,n.asyncQueue,{zr:UN.bind(null,n),Jr:zN.bind(null,n),Go:BN.bind(null,n)}),n.fu.push(async e=>{e?(n.mu.No(),Ig(n)?Cg(n):n._u.set("Unknown")):(await n.mu.stop(),dE(n))})),n.mu}function Gs(n){return n.gu||(n.gu=function(e,t,i){const s=He(e);return s.tu(),new NN(t,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,i)}(n.datastore,n.asyncQueue,{zr:HN.bind(null,n),Jr:qN.bind(null,n),Yo:WN.bind(null,n),Jo:$N.bind(null,n)}),n.fu.push(async e=>{e?(n.gu.No(),await Xh(n)):(await n.gu.stop(),n.au.length>0&&(Ne("RemoteStore",`Stopping write stream with ${n.au.length} pending writes`),n.au=[]))})),n.gu}/**
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
 */class Ag{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new Ag(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Me(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rg(n,e){if(zs("AsyncQueue",`${e}: ${n}`),lc(n))return new Me(Z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Oo{constructor(e){this.comparator=e?(t,i)=>e(t,i)||Oe.comparator(t.key,i.key):(t,i)=>Oe.comparator(t.key,i.key),this.keyedMap=Wa(),this.sortedSet=new Ft(this.comparator)}static emptySet(e){return new Oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Oo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class fy{constructor(){this.yu=new Ft(Oe.comparator)}track(e){const t=e.doc.key,i=this.yu.get(t);i?e.type!==0&&i.type===3?this.yu=this.yu.insert(t,e):e.type===3&&i.type!==1?this.yu=this.yu.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.yu=this.yu.remove(t):e.type===1&&i.type===2?this.yu=this.yu.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Ge():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal((t,i)=>{e.push(i)}),e}}class Zo{constructor(e,t,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,t,i,s){const r=[];return t.forEach(o=>{r.push({type:0,doc:o})}),new Zo(e,t,Oo.emptySet(t),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class KN{constructor(){this.Iu=void 0,this.listeners=[]}}class XN{constructor(){this.queries=new xa(e=>FS(e),Hh),this.onlineState="Unknown",this.Tu=new Set}}async function Pg(n,e){const t=He(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new KN),s)try{r.Iu=await t.onListen(i)}catch(o){const a=Rg(o,`Initialization of query '${xp(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.Eu(t.onlineState),r.Iu&&e.Au(r.Iu)&&Lg(t)}async function Dg(n,e){const t=He(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function YN(n,e){const t=He(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Au(s)&&(i=!0);o.Iu=s}}i&&Lg(t)}function QN(n,e,t){const i=He(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function Lg(n){n.Tu.forEach(e=>{e.next()})}class Ng{constructor(e,t,i){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=i||{}}Au(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.Du||!i)&&(!e.docs.isEmpty()||t==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Su(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class gE{constructor(e){this.key=e}}class _E{constructor(e){this.key=e}}class ZN{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Qe(),this.mutatedKeys=Qe(),this.Lu=US(e),this.Uu=new Oo(this.Lu)}get qu(){return this.Fu}Ku(e,t){const i=t?t.Gu:new fy,s=t?t.Uu:this.Uu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=yg(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let f=!1;d&&p?d.data.isEqual(p.data)?g!==m&&(i.track({type:3,doc:p}),f=!0):this.Qu(d,p)||(i.track({type:2,doc:p}),f=!0,(l&&this.Lu(p,l)>0||c&&this.Lu(p,c)<0)&&(a=!0)):!d&&p?(i.track({type:0,doc:p}),f=!0):d&&!p&&(i.track({type:1,doc:d}),f=!0,(l||c)&&(a=!0)),f&&(p?(o=o.add(p),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Uu:o,Gu:i,Oi:a,mutatedKeys:r}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((c,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ge()}};return p(h)-p(d)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(i);const o=t?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,r.length!==0||l?{snapshot:new Zo(this.query,e.Uu,s,r,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new fy,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Qe(),this.Uu.forEach(i=>{this.Hu(i.key)&&(this.Bu=this.Bu.add(i.key))});const t=[];return e.forEach(i=>{this.Bu.has(i)||t.push(new _E(i))}),this.Bu.forEach(i=>{e.has(i)||t.push(new gE(i))}),t}Ju(e){this.Fu=e.ji,this.Bu=Qe();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Zo.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class JN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class e3{constructor(e){this.key=e,this.Xu=!1}}class t3{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new xa(a=>FS(a),Hh),this.ec=new Map,this.nc=new Set,this.sc=new Ft(Oe.comparator),this.ic=new Map,this.rc=new Sg,this.oc={},this.uc=new Map,this.cc=Qo.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function n3(n,e){const t=d3(n);let i,s;const r=t.tc.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.Yu();else{const o=await TN(t.localStore,Vr(e));t.isPrimaryClient&&cE(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await i3(t,e,i,a==="current")}return s}async function i3(n,e,t,i){n.hc=(u,h,d)=>async function(p,g,m,f){let _=g.view.Ku(m);_.Oi&&(_=await cy(p.localStore,g.query,!1).then(({documents:M})=>g.view.Ku(M,_)));const w=f&&f.targetChanges.get(g.targetId),T=g.view.applyChanges(_,p.isPrimaryClient,w);return my(p,g.targetId,T.zu),T.snapshot}(n,u,h,d);const s=await cy(n.localStore,e,!0),r=new ZN(e,s.ji),o=r.Ku(s.documents),a=uc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline"),l=r.applyChanges(o,n.isPrimaryClient,a);my(n,t,l.zu);const c=new JN(e,t,r);return n.tc.set(e,c),n.ec.has(t)?n.ec.get(t).push(e):n.ec.set(t,[e]),l.snapshot}async function s3(n,e){const t=He(n),i=t.tc.get(e),s=t.ec.get(i.targetId);if(s.length>1)return t.ec.set(i.targetId,s.filter(r=>!Hh(r,e))),void t.tc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Ep(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),uE(t.remoteStore,i.targetId),Mp(t,i.targetId)}).catch(ac)):(Mp(t,i.targetId),await Ep(t.localStore,i.targetId,!0))}async function r3(n,e,t){const i=f3(n);try{const s=await function(r,o){const a=He(r),l=It.now(),c=o.reduce((d,p)=>d.add(p.key),Qe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=os(),g=Qe();return a.Ui.getEntries(d,c).next(m=>{p=m,p.forEach((f,_)=>{_.isValidDocument()||(g=g.add(f))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(m=>{u=m;const f=[];for(const _ of o){const w=RL(_,u.get(_.key).overlayedDocument);w!=null&&f.push(new Ks(_.key,w,NS(w.value.mapValue),Zn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,f,o)}).next(m=>{h=m;const f=m.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,m.batchId,f)})}).then(()=>({batchId:h.batchId,changes:XS(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.oc[r.currentUser.toKey()];l||(l=new Ft(ot)),l=l.insert(o,a),r.oc[r.currentUser.toKey()]=l}(i,s.batchId,t),await dc(i,s.changes),await Xh(i.remoteStore)}catch(s){const r=Rg(s,"Failed to persist write");t.reject(r)}}async function vE(n,e){const t=He(n);try{const i=await SN(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.ic.get(r);o&&(xt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?xt(o.Xu):s.removedDocuments.size>0&&(xt(o.Xu),o.Xu=!1))}),await dc(t,i,e)}catch(i){await ac(i)}}function py(n,e,t){const i=He(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=He(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&Lg(a)}(i.eventManager,e),s.length&&i.Zu.Go(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function o3(n,e,t){const i=He(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.ic.get(e),r=s&&s.key;if(r){let o=new Ft(Oe.comparator);o=o.insert(r,Qt.newNoDocument(r,Ke.min()));const a=Qe().add(r),l=new qh(Ke.min(),new Map,new kt(ot),o,a);await vE(i,l),i.sc=i.sc.remove(r),i.ic.delete(e),Og(i)}else await Ep(i.localStore,e,!1).then(()=>Mp(i,e,t)).catch(ac)}async function a3(n,e){const t=He(n),i=e.batch.batchId;try{const s=await bN(t.localStore,e);xE(t,i,null),yE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await dc(t,s)}catch(s){await ac(s)}}async function l3(n,e,t){const i=He(n);try{const s=await function(r,o){const a=He(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(xt(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);xE(i,e,t),yE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await dc(i,s)}catch(s){await ac(s)}}function yE(n,e){(n.uc.get(e)||[]).forEach(t=>{t.resolve()}),n.uc.delete(e)}function xE(n,e,t){const i=He(n);let s=i.oc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.oc[i.currentUser.toKey()]=s}}function Mp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.ec.get(e))n.tc.delete(i),t&&n.Zu.lc(i,t);n.ec.delete(e),n.isPrimaryClient&&n.rc.us(e).forEach(i=>{n.rc.containsKey(i)||wE(n,i)})}function wE(n,e){n.nc.delete(e.path.canonicalString());const t=n.sc.get(e);t!==null&&(uE(n.remoteStore,t),n.sc=n.sc.remove(e),n.ic.delete(t),Og(n))}function my(n,e,t){for(const i of t)i instanceof gE?(n.rc.addReference(i.key,e),c3(n,i)):i instanceof _E?(Ne("SyncEngine","Document no longer in limbo: "+i.key),n.rc.removeReference(i.key,e),n.rc.containsKey(i.key)||wE(n,i.key)):Ge()}function c3(n,e){const t=e.key,i=t.path.canonicalString();n.sc.get(t)||n.nc.has(i)||(Ne("SyncEngine","New document in limbo: "+t),n.nc.add(i),Og(n))}function Og(n){for(;n.nc.size>0&&n.sc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Oe(yt.fromString(e)),i=n.cc.next();n.ic.set(i,new e3(t)),n.sc=n.sc.insert(t,i),cE(n.remoteStore,new wr(Vr(Gh(t.path)),i,2,hg.ot))}}async function dc(n,e,t){const i=He(n),s=[],r=[],o=[];i.tc.isEmpty()||(i.tc.forEach((a,l)=>{o.push(i.hc(l,e,t).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=Mg.Vi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Zu.Go(s),await async function(a,l){const c=He(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>de.forEach(l,h=>de.forEach(h.Pi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>de.forEach(h.vi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!lc(u))throw u;Ne("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.$i.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);c.$i=c.$i.insert(h,g)}}}(i.localStore,r))}async function u3(n,e){const t=He(n);if(!t.currentUser.isEqual(e)){Ne("SyncEngine","User change. New user:",e.toKey());const i=await rE(t.localStore,e);t.currentUser=e,function(s,r){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new Me(Z.CANCELLED,r))})}),s.uc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await dc(t,i.Ki)}}function h3(n,e){const t=He(n),i=t.ic.get(e);if(i&&i.Xu)return Qe().add(i.key);{let s=Qe();const r=t.ec.get(e);if(!r)return s;for(const o of r){const a=t.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function d3(n){const e=He(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=h3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o3.bind(null,e),e.Zu.Go=YN.bind(null,e.eventManager),e.Zu.lc=QN.bind(null,e.eventManager),e}function f3(n){const e=He(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=a3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=l3.bind(null,e),e}class p3{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=jh(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return wN(this.persistence,new yN,e.initialUser,this.wt)}_c(e){return new _N(Eg.Ms,this.wt)}dc(e){return new IN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class m3{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>py(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=u3.bind(null,this.syncEngine),await jN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new XN}createDatastore(e){const t=jh(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new DN(s));var s;return function(r,o,a,l){return new ON(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>py(this.syncEngine,a,0),o=hy.V()?new hy:new AN,new FN(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,a,l,c){const u=new t3(i,s,r,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=He(e);Ne("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await hc(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class kg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class g3{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=An.UNAUTHENTICATED,this.clientId=PS.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Ne("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Ne("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Me(Z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Rg(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function _3(n,e){n.asyncQueue.verifyOperationInProgress(),Ne("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await rE(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function v3(n,e){n.asyncQueue.verifyOperationInProgress();const t=await y3(n);Ne("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>dy(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>dy(e.remoteStore,r)),n.onlineComponents=e}async function y3(n){return n.offlineComponents||(Ne("FirestoreClient","Using default OfflineComponentProvider"),await _3(n,new p3)),n.offlineComponents}async function bE(n){return n.onlineComponents||(Ne("FirestoreClient","Using default OnlineComponentProvider"),await v3(n,new m3)),n.onlineComponents}function x3(n){return bE(n).then(e=>e.syncEngine)}async function ih(n){const e=await bE(n),t=e.eventManager;return t.onListen=n3.bind(null,e.syncEngine),t.onUnlisten=s3.bind(null,e.syncEngine),t}function w3(n,e,t={}){const i=new es;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new kg({next:h=>{r.enqueueAndForget(()=>Dg(s,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Me(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Me(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Ng(Gh(o.path),c,{includeMetadataChanges:!0,Du:!0});return Pg(s,u)}(await ih(n),n.asyncQueue,e,t,i)),i.promise}function b3(n,e,t={}){const i=new es;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new kg({next:h=>{r.enqueueAndForget(()=>Dg(s,u)),h.fromCache&&a.source==="server"?l.reject(new Me(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Ng(o,c,{includeMetadataChanges:!0,Du:!0});return Pg(s,u)}(await ih(n),n.asyncQueue,e,t,i)),i.promise}const gy=new Map;/**
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
 */function SE(n,e,t){if(!t)throw new Me(Z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function S3(n,e,t,i){if(e===!0&&i===!0)throw new Me(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _y(n){if(!Oe.isDocumentKey(n))throw new Me(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vy(n){if(Oe.isDocumentKey(n))throw new Me(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Yh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ge()}function zn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Me(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yh(n);throw new Me(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function EE(n,e){if(e<=0)throw new Me(Z.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class yy{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new Me(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Me(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,S3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fg{constructor(e,t,i){this._authCredentials=t,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yy({}),this._settingsFrozen=!1,e instanceof jo?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new Me(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(s.options.projectId)}(e))}get app(){if(!this._app)throw new Me(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Me(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yy(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new jD;switch(t.type){case"gapi":const i=t.client;return xt(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new YD(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Me(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=gy.get(e);t&&(Ne("ComponentProvider","Removing Datastore"),gy.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class fn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class zi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new zi(this.firestore,e,this._query)}}class Ds extends zi{constructor(e,t,i){super(e,t,Gh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new Oe(e))}withConverter(e){return new Ds(this.firestore,e,this._path)}}function Ls(n,e,...t){if(n=jt(n),SE("collection","path",e),n instanceof Fg){const i=yt.fromString(e,...t);return vy(i),new Ds(n,null,i)}{if(!(n instanceof fn||n instanceof Ds))throw new Me(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(e,...t));return vy(i),new Ds(n.firestore,null,i)}}function qi(n,e,...t){if(n=jt(n),arguments.length===1&&(e=PS.I()),SE("doc","path",e),n instanceof Fg){const i=yt.fromString(e,...t);return _y(i),new fn(n,null,new Oe(i))}{if(!(n instanceof fn||n instanceof Ds))throw new Me(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(yt.fromString(e,...t));return _y(i),new fn(n.firestore,n instanceof Ds?n.converter:null,new Oe(i))}}/**
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
 */class E3{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new aE(this,"async_queue_retry"),this.Kc=()=>{const t=qd();t&&Ne("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const e=qd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=qd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const t=new es;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!lc(e))throw e;Ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const t=this.Oc.then(()=>(this.Lc=!0,e().catch(i=>{this.Bc=i,this.Lc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw zs("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Lc=!1,i))));return this.Oc=t,t}enqueueAfterDelay(e,t,i){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const s=Ag.createAndSchedule(this,e,t,i,r=>this.Wc(r));return this.$c.push(s),s}Gc(){this.Bc&&Ge()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function xy(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class as extends Fg{constructor(e,t,i){super(e,t,i),this.type="firestore",this._queue=new E3,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ME(this),this._firestoreClient.terminate()}}function ba(n=cm()){return vh(n,"firestore").getImmediate()}function Qh(n){return n._firestoreClient||ME(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ME(n){var e;const t=n._freezeSettings(),i=function(s,r,o,a){return new aL(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new g3(n._authCredentials,n._appCheckCredentials,n._queue,i)}/**
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
 *//**
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
 */class Zh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Me(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jo(nn.fromBase64String(e))}catch(t){throw new Me(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jo(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ug{constructor(e){this._methodName=e}}/**
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
 */class zg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Me(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Me(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ot(this._lat,e._lat)||ot(this._long,e._long)}}/**
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
 */const M3=/^__.*__$/;class T3{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ks(e,this.data,this.fieldMask,t,this.fieldTransforms):new cc(e,this.data,t,this.fieldTransforms)}}class TE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ks(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function CE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ge()}}class Bg{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.wt=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Bg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ta({path:i,na:!1});return s.sa(e),s}ia(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ta({path:i,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return sh(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(CE(this.Zc)&&M3.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class C3{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=i||jh(e)}aa(e,t,i,s=!1){return new Bg({Zc:e,methodName:t,ca:i,path:cn.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function fc(n){const e=n._freezeSettings(),t=jh(n._databaseId);return new C3(n._databaseId,!!e.ignoreUndefinedProperties,t)}function IE(n,e,t,i,s,r={}){const o=n.aa(r.merge||r.mergeFields?2:0,e,t,s);Vg("Data must be an object, but it was:",o,i);const a=RE(i,o);let l,c;if(r.merge)l=new Qn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Tp(e,h,t);if(!o.contains(d))throw new Me(Z.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);DE(u,d)||u.push(d)}l=new Qn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new T3(new Pn(a),l,c)}class Jh extends Ug{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jh}}function I3(n,e,t,i){const s=n.aa(1,e,t);Vg("Data must be an object, but it was:",s,i);const r=[],o=Pn.empty();Yr(i,(l,c)=>{const u=Gg(e,l,t);c=jt(c);const h=s.ia(u);if(c instanceof Jh)r.push(u);else{const d=pc(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Qn(r);return new TE(o,a,s.fieldTransforms)}function A3(n,e,t,i,s,r){const o=n.aa(1,e,t),a=[Tp(e,i,t)],l=[s];if(r.length%2!=0)throw new Me(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Tp(e,r[d])),l.push(r[d+1]);const c=[],u=Pn.empty();for(let d=a.length-1;d>=0;--d)if(!DE(c,a[d])){const p=a[d];let g=l[d];g=jt(g);const m=o.ia(p);if(g instanceof Jh)c.push(p);else{const f=pc(g,m);f!=null&&(c.push(p),u.set(p,f))}}const h=new Qn(c);return new TE(u,h,o.fieldTransforms)}function AE(n,e,t,i=!1){return pc(t,n.aa(i?4:3,e))}function pc(n,e){if(PE(n=jt(n)))return Vg("Unsupported field value:",e,n),RE(n,e);if(n instanceof Ug)return function(t,i){if(!CE(i.Zc))throw i.oa(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.oa(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let a=pc(o,i.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=jt(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return EL(i.wt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=It.fromDate(t);return{timestampValue:th(i.wt,s)}}if(t instanceof It){const s=new It(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:th(i.wt,s)}}if(t instanceof zg)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Jo)return{bytesValue:eE(i.wt,t._byteString)};if(t instanceof fn){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wg(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.oa(`Unsupported field value: ${Yh(t)}`)}(n,e)}function RE(n,e){const t={};return DS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(n,(i,s)=>{const r=pc(s,e.ea(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function PE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof zg||n instanceof Jo||n instanceof fn||n instanceof Ug)}function Vg(n,e,t){if(!PE(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=Yh(t);throw i==="an object"?e.oa(n+" a custom object"):e.oa(n+" "+i)}}function Tp(n,e,t){if((e=jt(e))instanceof Zh)return e._internalPath;if(typeof e=="string")return Gg(n,e);throw sh("Field path arguments must be of type string or ",n,!1,void 0,t)}const R3=new RegExp("[~\\*/\\[\\]]");function Gg(n,e,t){if(e.search(R3)>=0)throw sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zh(...e.split("."))._internalPath}catch{throw sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sh(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Me(Z.INVALID_ARGUMENT,a+n+l)}function DE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Hg{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new P3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ed("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class P3 extends Hg{data(){return super.data()}}function ed(n,e){return typeof e=="string"?Gg(n,e):e instanceof Zh?e._internalPath:e._delegate._internalPath}/**
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
 */class $a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LE extends Hg{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _u(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ed("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class _u extends LE{data(e={}){return super.data(e)}}class NE{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new $a(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new _u(this._firestore,this._userDataWriter,i.key,i,new $a(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Me(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new _u(i._firestore,i._userDataWriter,o.doc.key,o.doc,new $a(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new _u(i._firestore,i._userDataWriter,o.doc.key,o.doc,new $a(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:D3(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function D3(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ge()}}/**
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
 */function OE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Me(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mc{}function Wg(n,...e){for(const t of e)n=t._apply(n);return n}class L3 extends mc{constructor(e,t,i){super(),this.fa=e,this.da=t,this._a=i,this.type="where"}_apply(e){const t=fc(e.firestore),i=function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Me(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Sy(u,c);const p=[];for(const g of u)p.push(by(a,s,g));h={arrayValue:{values:p}}}else h=by(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Sy(u,c),h=AE(o,r,u,c==="in"||c==="not-in");const d=bn.create(l,c,h);return function(p,g){if(g.ht()){const f=_g(p);if(f!==null&&!f.isEqual(g.field))throw new Me(Z.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${f.toString()}' and '${g.field.toString()}'`);const _=gg(p);_!==null&&UE(p,g.field,_)}const m=function(f,_){for(const w of f.filters)if(_.indexOf(w.op)>=0)return w.op;return null}(p,function(f){switch(f){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(m!==null)throw m===g.op?new Me(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new Me(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${m.toString()}' filters.`)}(s,d),d}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new zi(e.firestore,e.converter,function(s,r){const o=s.filters.concat([r]);return new js(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,i))}}function vu(n,e,t){const i=e,s=ed("where",n);return new L3(s,i,t)}class N3 extends mc{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(i,s,r){if(i.startAt!==null)throw new Me(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Me(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new No(s,r);return function(a,l){if(gg(a)===null){const c=_g(a);c!==null&&UE(a,c,l.field)}}(i,o),o}(e._query,this.fa,this.wa);return new zi(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new js(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Cp(n,e="asc"){const t=e,i=ed("orderBy",n);return new N3(i,t)}class kE extends mc{constructor(e,t,i){super(),this.type=e,this.ma=t,this.ga=i}_apply(e){return new zi(e.firestore,e.converter,kS(e._query,this.ma,this.ga))}}function wy(n){return EE("limit",n),new kE("limit",n,"F")}function O3(n){return EE("limitToLast",n),new kE("limitToLast",n,"L")}class k3 extends mc{constructor(e,t,i){super(),this.type=e,this.ya=t,this.pa=i}_apply(e){const t=FE(e,this.type,this.ya,this.pa);return new zi(e.firestore,e.converter,function(i,s){return new js(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function F3(...n){return new k3("startAfter",n,!1)}class U3 extends mc{constructor(e,t,i){super(),this.type=e,this.ya=t,this.pa=i}_apply(e){const t=FE(e,this.type,this.ya,this.pa);return new zi(e.firestore,e.converter,function(i,s){return new js(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function z3(...n){return new U3("endBefore",n,!1)}function FE(n,e,t,i){if(t[0]=jt(t[0]),t[0]instanceof Hg)return function(s,r,o,a,l){if(!a)throw new Me(Z.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const u of Yo(s))if(u.field.isKeyField())c.push(Zu(r,a.key));else{const h=a.data.field(u.field);if(dg(h))throw new Me(Z.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new Me(Z.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}c.push(h)}return new Xo(c,l)}(n._query,n.firestore._databaseId,e,t[0]._document,i);{const s=fc(n.firestore);return function(r,o,a,l,c,u){const h=r.explicitOrderBy;if(c.length>h.length)throw new Me(Z.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<c.length;p++){const g=c[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new Me(Z.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof g}`);if(!vg(r)&&g.indexOf("/")!==-1)throw new Me(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${g}' contains a slash.`);const m=r.path.child(yt.fromString(g));if(!Oe.isDocumentKey(m))throw new Me(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const f=new Oe(m);d.push(Zu(o,f))}else{const m=AE(a,l,g);d.push(m)}}return new Xo(d,u)}(n._query,n.firestore._databaseId,s,e,t,i)}}function by(n,e,t){if(typeof(t=jt(t))=="string"){if(t==="")throw new Me(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vg(e)&&t.indexOf("/")!==-1)throw new Me(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(yt.fromString(t));if(!Oe.isDocumentKey(i))throw new Me(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Zu(n,new Oe(i))}if(t instanceof fn)return Zu(n,t._key);throw new Me(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yh(t)}.`)}function Sy(n,e){if(!Array.isArray(n)||n.length===0)throw new Me(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new Me(Z.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function UE(n,e,t){if(!t.isEqual(e))throw new Me(Z.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */class B3{convertValue(e,t="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ge()}}convertObject(e,t){const i={};return Yr(e.fields,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new zg(Lt(e.latitude),Lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=LS(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ml(e));default:return null}}convertTimestamp(e){const t=Vs(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=yt.fromString(e);xt(sE(i));const s=new jo(i.get(1),i.get(3)),r=new Oe(i.popFirst(5));return s.isEqual(t)||zs(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function zE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 *//**
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
 */function BE(n){n=zn(n,fn);const e=zn(n.firestore,as);return w3(Qh(e),n._key).then(t=>GE(e,n,t))}class $g extends B3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,t)}}function VE(n){n=zn(n,zi);const e=zn(n.firestore,as),t=Qh(e),i=new $g(e);return OE(n._query),b3(t,n._query).then(s=>new NE(e,i,n,s))}function V3(n,e,t){n=zn(n,fn);const i=zn(n.firestore,as),s=zE(n.converter,e,t);return td(i,[IE(fc(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Zn.none())])}function jd(n,e,t,...i){n=zn(n,fn);const s=zn(n.firestore,as),r=fc(s);let o;return o=typeof(e=jt(e))=="string"||e instanceof Zh?A3(r,"updateDoc",n._key,e,t,i):I3(r,"updateDoc",n._key,e),td(s,[o.toMutation(n._key,Zn.exists(!0))])}function G3(n){return td(zn(n.firestore,as),[new xg(n._key,Zn.none())])}function qg(n,e){const t=zn(n.firestore,as),i=qi(n),s=zE(n.converter,e);return td(t,[IE(fc(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Zn.exists(!1))]).then(()=>i)}function ea(n,...e){var t,i,s;n=jt(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xy(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(xy(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof fn)c=zn(n.firestore,as),u=Gh(n._key.path),l={next:h=>{e[o]&&e[o](GE(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=zn(n,zi);c=zn(h.firestore,as),u=h._query;const d=new $g(c);l={next:p=>{e[o]&&e[o](new NE(c,d,h,p))},error:e[o+1],complete:e[o+2]},OE(n._query)}return function(h,d,p,g){const m=new kg(g),f=new Ng(d,m,p);return h.asyncQueue.enqueueAndForget(async()=>Pg(await ih(h),f)),()=>{m.Tc(),h.asyncQueue.enqueueAndForget(async()=>Dg(await ih(h),f))}}(Qh(c),u,a,l)}function td(n,e){return function(t,i){const s=new es;return t.asyncQueue.enqueueAndForget(async()=>r3(await x3(t),i,s)),s.promise}(Qh(n),e)}function GE(n,e,t){const i=t.docs.get(e._key),s=new $g(n);return new LE(n,s,e._key,i,new $a(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){ya=t})(ha),Ar(new Fs("firestore",(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),r=new as(s,new KD(t.getProvider("auth-internal")),new ZD(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Li(Wv,"3.4.12",n),Li(Wv,"3.4.12","esm2017")})();const H3={apiKey:"AIzaSyA7mlXL-RQizJ8YVA03pSNlAV9W7T07FpY",authDomain:"yt-watchmen.firebaseapp.com",databaseURL:"https://yt-watchmen-default-rtdb.europe-west1.firebasedatabase.app",projectId:"yt-watchmen",storageBucket:"yt-watchmen.appspot.com",messagingSenderId:"359895816834",appId:"1:359895816834:web:bb43560e3588066de1b29b"},jg=X1(H3);gl(jg);UP(jg);ba(jg);function Kg(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const W3="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$3=Kg(W3);function HE(n){return!!n||n===""}function gc(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Xt(i)?K3(i):gc(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Xt(n))return n;if(At(n))return n}}const q3=/;(?![^(]*\))/g,j3=/:(.+)/;function K3(n){const e={};return n.split(q3).forEach(t=>{if(t){const i=t.split(j3);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ns(n){let e="";if(Xt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=ns(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function X3(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=rh(n[i],e[i]);return t}function rh(n,e){if(n===e)return!0;let t=Ey(n),i=Ey(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Al(n),i=Al(e),t||i)return n===e;if(t=Be(n),i=Be(e),t||i)return t&&i?X3(n,e):!1;if(t=At(n),i=At(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!rh(n[o],e[o]))return!1}}return String(n)===String(e)}const br=n=>Xt(n)?n:n==null?"":Be(n)||At(n)&&(n.toString===jE||!$e(n.toString))?JSON.stringify(n,WE,2):String(n),WE=(n,e)=>e&&e.__v_isRef?WE(n,e.value):Fo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:$E(e)?{[`Set(${e.size})`]:[...e.values()]}:At(e)&&!Be(e)&&!KE(e)?String(e):e,vt={},ko=[],fi=()=>{},Y3=()=>!1,Q3=/^on[^a-z]/,nd=n=>Q3.test(n),Xg=n=>n.startsWith("onUpdate:"),En=Object.assign,Yg=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Z3=Object.prototype.hasOwnProperty,Je=(n,e)=>Z3.call(n,e),Be=Array.isArray,Fo=n=>_c(n)==="[object Map]",$E=n=>_c(n)==="[object Set]",Ey=n=>_c(n)==="[object Date]",$e=n=>typeof n=="function",Xt=n=>typeof n=="string",Al=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",qE=n=>At(n)&&$e(n.then)&&$e(n.catch),jE=Object.prototype.toString,_c=n=>jE.call(n),J3=n=>_c(n).slice(8,-1),KE=n=>_c(n)==="[object Object]",Qg=n=>Xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yu=Kg(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),id=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},e2=/-(\w)/g,Fi=id(n=>n.replace(e2,(e,t)=>t?t.toUpperCase():"")),t2=/\B([A-Z])/g,Sa=id(n=>n.replace(t2,"-$1").toLowerCase()),sd=id(n=>n.charAt(0).toUpperCase()+n.slice(1)),Kd=id(n=>n?`on${sd(n)}`:""),Rl=(n,e)=>!Object.is(n,e),xu=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},oh=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Ip=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let My;const n2=()=>My||(My=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ti;class i2{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ti&&(this.parent=Ti,this.index=(Ti.scopes||(Ti.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Ti;try{return Ti=this,e()}finally{Ti=t}}}on(){Ti=this}off(){Ti=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function s2(n,e=Ti){e&&e.active&&e.effects.push(n)}const Zg=n=>{const e=new Set(n);return e.w=0,e.n=0,e},XE=n=>(n.w&Hs)>0,YE=n=>(n.n&Hs)>0,r2=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Hs},o2=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];XE(s)&&!YE(s)?s.delete(n):e[t++]=s,s.w&=~Hs,s.n&=~Hs}e.length=t}},Ap=new WeakMap;let qa=0,Hs=1;const Rp=30;let li;const Sr=Symbol(""),Pp=Symbol("");class Jg{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s2(this,i)}run(){if(!this.active)return this.fn();let e=li,t=Ns;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=li,li=this,Ns=!0,Hs=1<<++qa,qa<=Rp?r2(this):Ty(this),this.fn()}finally{qa<=Rp&&o2(this),Hs=1<<--qa,li=this.parent,Ns=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){li===this?this.deferStop=!0:this.active&&(Ty(this),this.onStop&&this.onStop(),this.active=!1)}}function Ty(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ns=!0;const QE=[];function Ea(){QE.push(Ns),Ns=!1}function Ma(){const n=QE.pop();Ns=n===void 0?!0:n}function Gn(n,e,t){if(Ns&&li){let i=Ap.get(n);i||Ap.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Zg()),ZE(s)}}function ZE(n,e){let t=!1;qa<=Rp?YE(n)||(n.n|=Hs,t=!XE(n)):t=!n.has(li),t&&(n.add(li),li.deps.push(n))}function ls(n,e,t,i,s,r){const o=Ap.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?Qg(t)&&a.push(o.get("length")):(a.push(o.get(Sr)),Fo(n)&&a.push(o.get(Pp)));break;case"delete":Be(n)||(a.push(o.get(Sr)),Fo(n)&&a.push(o.get(Pp)));break;case"set":Fo(n)&&a.push(o.get(Sr));break}if(a.length===1)a[0]&&Dp(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Dp(Zg(l))}}function Dp(n,e){const t=Be(n)?n:[...n];for(const i of t)i.computed&&Cy(i);for(const i of t)i.computed||Cy(i)}function Cy(n,e){(n!==li||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const a2=Kg("__proto__,__v_isRef,__isVue"),JE=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Al)),l2=e_(),c2=e_(!1,!0),u2=e_(!0),Iy=h2();function h2(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=ct(this);for(let r=0,o=this.length;r<o;r++)Gn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(ct)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ea();const i=ct(this)[e].apply(this,t);return Ma(),i}}),n}function e_(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?C2:sM:e?iM:nM).get(i))return i;const o=Be(i);if(!n&&o&&Je(Iy,s))return Reflect.get(Iy,s,r);const a=Reflect.get(i,s,r);return(Al(s)?JE.has(s):a2(s))||(n||Gn(i,"get",s),e)?a:hn(a)?o&&Qg(s)?a:a.value:At(a)?n?rM(a):Ta(a):a}}const d2=eM(),f2=eM(!0);function eM(n=!1){return function(t,i,s,r){let o=t[i];if(Pl(o)&&hn(o)&&!hn(s))return!1;if(!n&&!Pl(s)&&(Lp(s)||(s=ct(s),o=ct(o)),!Be(t)&&hn(o)&&!hn(s)))return o.value=s,!0;const a=Be(t)&&Qg(i)?Number(i)<t.length:Je(t,i),l=Reflect.set(t,i,s,r);return t===ct(r)&&(a?Rl(s,o)&&ls(t,"set",i,s):ls(t,"add",i,s)),l}}function p2(n,e){const t=Je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&ls(n,"delete",e,void 0),i}function m2(n,e){const t=Reflect.has(n,e);return(!Al(e)||!JE.has(e))&&Gn(n,"has",e),t}function g2(n){return Gn(n,"iterate",Be(n)?"length":Sr),Reflect.ownKeys(n)}const tM={get:l2,set:d2,deleteProperty:p2,has:m2,ownKeys:g2},_2={get:u2,set(n,e){return!0},deleteProperty(n,e){return!0}},v2=En({},tM,{get:c2,set:f2}),t_=n=>n,rd=n=>Reflect.getPrototypeOf(n);function kc(n,e,t=!1,i=!1){n=n.__v_raw;const s=ct(n),r=ct(e);t||(e!==r&&Gn(s,"get",e),Gn(s,"get",r));const{has:o}=rd(s),a=i?t_:t?s_:Dl;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Fc(n,e=!1){const t=this.__v_raw,i=ct(t),s=ct(n);return e||(n!==s&&Gn(i,"has",n),Gn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Uc(n,e=!1){return n=n.__v_raw,!e&&Gn(ct(n),"iterate",Sr),Reflect.get(n,"size",n)}function Ay(n){n=ct(n);const e=ct(this);return rd(e).has.call(e,n)||(e.add(n),ls(e,"add",n,n)),this}function Ry(n,e){e=ct(e);const t=ct(this),{has:i,get:s}=rd(t);let r=i.call(t,n);r||(n=ct(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Rl(e,o)&&ls(t,"set",n,e):ls(t,"add",n,e),this}function Py(n){const e=ct(this),{has:t,get:i}=rd(e);let s=t.call(e,n);s||(n=ct(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ls(e,"delete",n,void 0),r}function Dy(){const n=ct(this),e=n.size!==0,t=n.clear();return e&&ls(n,"clear",void 0,void 0),t}function zc(n,e){return function(i,s){const r=this,o=r.__v_raw,a=ct(o),l=e?t_:n?s_:Dl;return!n&&Gn(a,"iterate",Sr),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Bc(n,e,t){return function(...i){const s=this.__v_raw,r=ct(s),o=Fo(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?t_:e?s_:Dl;return!e&&Gn(r,"iterate",l?Pp:Sr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function fs(n){return function(...e){return n==="delete"?!1:this}}function y2(){const n={get(r){return kc(this,r)},get size(){return Uc(this)},has:Fc,add:Ay,set:Ry,delete:Py,clear:Dy,forEach:zc(!1,!1)},e={get(r){return kc(this,r,!1,!0)},get size(){return Uc(this)},has:Fc,add:Ay,set:Ry,delete:Py,clear:Dy,forEach:zc(!1,!0)},t={get(r){return kc(this,r,!0)},get size(){return Uc(this,!0)},has(r){return Fc.call(this,r,!0)},add:fs("add"),set:fs("set"),delete:fs("delete"),clear:fs("clear"),forEach:zc(!0,!1)},i={get(r){return kc(this,r,!0,!0)},get size(){return Uc(this,!0)},has(r){return Fc.call(this,r,!0)},add:fs("add"),set:fs("set"),delete:fs("delete"),clear:fs("clear"),forEach:zc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Bc(r,!1,!1),t[r]=Bc(r,!0,!1),e[r]=Bc(r,!1,!0),i[r]=Bc(r,!0,!0)}),[n,t,e,i]}const[x2,w2,b2,S2]=y2();function n_(n,e){const t=e?n?S2:b2:n?w2:x2;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Je(t,s)&&s in i?t:i,s,r)}const E2={get:n_(!1,!1)},M2={get:n_(!1,!0)},T2={get:n_(!0,!1)},nM=new WeakMap,iM=new WeakMap,sM=new WeakMap,C2=new WeakMap;function I2(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A2(n){return n.__v_skip||!Object.isExtensible(n)?0:I2(J3(n))}function Ta(n){return Pl(n)?n:i_(n,!1,tM,E2,nM)}function R2(n){return i_(n,!1,v2,M2,iM)}function rM(n){return i_(n,!0,_2,T2,sM)}function i_(n,e,t,i,s){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=A2(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Uo(n){return Pl(n)?Uo(n.__v_raw):!!(n&&n.__v_isReactive)}function Pl(n){return!!(n&&n.__v_isReadonly)}function Lp(n){return!!(n&&n.__v_isShallow)}function oM(n){return Uo(n)||Pl(n)}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function aM(n){return oh(n,"__v_skip",!0),n}const Dl=n=>At(n)?Ta(n):n,s_=n=>At(n)?rM(n):n;function lM(n){Ns&&li&&(n=ct(n),ZE(n.dep||(n.dep=Zg())))}function cM(n,e){n=ct(n),n.dep&&Dp(n.dep)}function hn(n){return!!(n&&n.__v_isRef===!0)}function od(n){return uM(n,!1)}function P2(n){return uM(n,!0)}function uM(n,e){return hn(n)?n:new D2(n,e)}class D2{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ct(e),this._value=t?e:Dl(e)}get value(){return lM(this),this._value}set value(e){e=this.__v_isShallow?e:ct(e),Rl(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Dl(e),cM(this))}}function Er(n){return hn(n)?n.value:n}const L2={get:(n,e,t)=>Er(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return hn(s)&&!hn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function hM(n){return Uo(n)?n:new Proxy(n,L2)}class N2{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Jg(e,()=>{this._dirty||(this._dirty=!0,cM(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ct(this);return lM(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function O2(n,e,t=!1){let i,s;const r=$e(n);return r?(i=n,s=fi):(i=n.get,s=n.set),new N2(i,s,r||!s,t)}function Os(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){ad(r,e,t)}return s}function pi(n,e,t,i){if($e(n)){const r=Os(n,e,t,i);return r&&qE(r)&&r.catch(o=>{ad(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(pi(n[r],e,t,i));return s}function ad(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Os(l,null,10,[n,o,a]);return}}k2(n,t,s,i)}function k2(n,e,t,i=!0){console.error(n)}let ah=!1,Np=!1;const Fn=[];let ji=0;const rl=[];let ja=null,yo=0;const ol=[];let Ss=null,xo=0;const dM=Promise.resolve();let r_=null,Op=null;function fM(n){const e=r_||dM;return n?e.then(this?n.bind(this):n):e}function F2(n){let e=ji+1,t=Fn.length;for(;e<t;){const i=e+t>>>1;Ll(Fn[i])<n?e=i+1:t=i}return e}function pM(n){(!Fn.length||!Fn.includes(n,ah&&n.allowRecurse?ji+1:ji))&&n!==Op&&(n.id==null?Fn.push(n):Fn.splice(F2(n.id),0,n),mM())}function mM(){!ah&&!Np&&(Np=!0,r_=dM.then(vM))}function U2(n){const e=Fn.indexOf(n);e>ji&&Fn.splice(e,1)}function gM(n,e,t,i){Be(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),mM()}function z2(n){gM(n,ja,rl,yo)}function B2(n){gM(n,Ss,ol,xo)}function ld(n,e=null){if(rl.length){for(Op=e,ja=[...new Set(rl)],rl.length=0,yo=0;yo<ja.length;yo++)ja[yo]();ja=null,yo=0,Op=null,ld(n,e)}}function _M(n){if(ld(),ol.length){const e=[...new Set(ol)];if(ol.length=0,Ss){Ss.push(...e);return}for(Ss=e,Ss.sort((t,i)=>Ll(t)-Ll(i)),xo=0;xo<Ss.length;xo++)Ss[xo]();Ss=null,xo=0}}const Ll=n=>n.id==null?1/0:n.id;function vM(n){Np=!1,ah=!0,ld(n),Fn.sort((t,i)=>Ll(t)-Ll(i));const e=fi;try{for(ji=0;ji<Fn.length;ji++){const t=Fn[ji];t&&t.active!==!1&&Os(t,null,14)}}finally{ji=0,Fn.length=0,_M(),ah=!1,r_=null,(Fn.length||rl.length||ol.length)&&vM(n)}}function V2(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||vt;d&&(s=t.map(p=>p.trim())),h&&(s=t.map(Ip))}let a,l=i[a=Kd(e)]||i[a=Kd(Fi(e))];!l&&r&&(l=i[a=Kd(Sa(e))]),l&&pi(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pi(c,n,6,s)}}function yM(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$e(n)){const l=c=>{const u=yM(c,e,!0);u&&(a=!0,En(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):En(o,r),i.set(n,o),o)}function cd(n,e){return!n||!nd(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Sa(e))||Je(n,e))}let Sn=null,ud=null;function lh(n){const e=Sn;return Sn=n,ud=n&&n.type.__scopeId||null,e}function o_(n){ud=n}function a_(){ud=null}function jn(n,e=Sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Gy(-1);const r=lh(e),o=n(...s);return lh(r),i._d&&Gy(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Xd(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:m}=n;let f,_;const w=lh(n);try{if(t.shapeFlag&4){const M=s||i;f=Ci(u.call(M,M,h,r,p,d,g)),_=l}else{const M=e;f=Ci(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),_=e.props?l:G2(l)}}catch(M){ll.length=0,ad(M,n,1),f=pt(Ws)}let T=f;if(_&&m!==!1){const M=Object.keys(_),{shapeFlag:E}=T;M.length&&E&7&&(o&&M.some(Xg)&&(_=H2(_,o)),T=ta(T,_))}return t.dirs&&(T=ta(T),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&(T.transition=t.transition),f=T,lh(w),f}const G2=n=>{let e;for(const t in n)(t==="class"||t==="style"||nd(t))&&((e||(e={}))[t]=n[t]);return e},H2=(n,e)=>{const t={};for(const i in n)(!Xg(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function W2(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ly(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!cd(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ly(i,o,c):!0:!!o;return!1}function Ly(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!cd(t,r))return!0}return!1}function $2({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const q2=n=>n.__isSuspense;function j2(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):B2(n)}function wu(n,e){if(Jt){let t=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===t&&(t=Jt.provides=Object.create(i)),t[n]=e}}function Jn(n,e,t=!1){const i=Jt||Sn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&$e(e)?e.call(i.proxy):e}}const Ny={};function bu(n,e,t){return xM(n,e,t)}function xM(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=vt){const a=Jt;let l,c=!1,u=!1;if(hn(n)?(l=()=>n.value,c=Lp(n)):Uo(n)?(l=()=>n,i=!0):Be(n)?(u=!0,c=n.some(_=>Uo(_)||Lp(_)),l=()=>n.map(_=>{if(hn(_))return _.value;if(Uo(_))return pr(_);if($e(_))return Os(_,a,2)})):$e(n)?e?l=()=>Os(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),pi(n,a,3,[d])}:l=fi,e&&i){const _=l;l=()=>pr(_())}let h,d=_=>{h=f.onStop=()=>{Os(_,a,4)}};if(Ol)return d=fi,e?t&&pi(e,a,3,[l(),u?[]:void 0,d]):l(),fi;let p=u?[]:Ny;const g=()=>{if(!!f.active)if(e){const _=f.run();(i||c||(u?_.some((w,T)=>Rl(w,p[T])):Rl(_,p)))&&(h&&h(),pi(e,a,3,[_,p===Ny?void 0:p,d]),p=_)}else f.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>In(g,a&&a.suspense):m=()=>z2(g);const f=new Jg(l,m);return e?t?g():p=f.run():s==="post"?In(f.run.bind(f),a&&a.suspense):f.run(),()=>{f.stop(),a&&a.scope&&Yg(a.scope.effects,f)}}function K2(n,e,t){const i=this.proxy,s=Xt(n)?n.includes(".")?wM(i,n):()=>i[n]:n.bind(i,i);let r;$e(e)?r=e:(r=e.handler,t=e);const o=Jt;na(this);const a=xM(s,r.bind(i),t);return o?na(o):Tr(),a}function wM(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function pr(n,e){if(!At(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),hn(n))pr(n.value,e);else if(Be(n))for(let t=0;t<n.length;t++)pr(n[t],e);else if($E(n)||Fo(n))n.forEach(t=>{pr(t,e)});else if(KE(n))for(const t in n)pr(n[t],e);return n}function Cn(n){return $e(n)?{setup:n,name:n.name}:n}const al=n=>!!n.type.__asyncLoader,bM=n=>n.type.__isKeepAlive;function X2(n,e){SM(n,"a",e)}function Y2(n,e){SM(n,"da",e)}function SM(n,e,t=Jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(hd(e,i,t),t){let s=t.parent;for(;s&&s.parent;)bM(s.parent.vnode)&&Q2(i,e,t,s),s=s.parent}}function Q2(n,e,t,i){const s=hd(e,n,i,!0);EM(()=>{Yg(i[e],s)},t)}function hd(n,e,t=Jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ea(),na(t);const a=pi(e,t,n,o);return Tr(),Ma(),a});return i?s.unshift(r):s.push(r),r}}const us=n=>(e,t=Jt)=>(!Ol||n==="sp")&&hd(n,e,t),Z2=us("bm"),J2=us("m"),eO=us("bu"),tO=us("u"),nO=us("bum"),EM=us("um"),iO=us("sp"),sO=us("rtg"),rO=us("rtc");function oO(n,e=Jt){hd("ec",n,e)}function Wn(n,e){const t=Sn;if(t===null)return n;const i=fd(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=vt]=e[r];$e(o)&&(o={mounted:o,updated:o}),o.deep&&pr(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function Ys(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ea(),pi(l,t,8,[n.el,a,n,e]),Ma())}}const MM="components";function xn(n,e){return lO(MM,n,!0,e)||n}const aO=Symbol();function lO(n,e,t=!0,i=!1){const s=Sn||Jt;if(s){const r=s.type;if(n===MM){const a=UO(r,!1);if(a&&(a===e||a===Fi(e)||a===sd(Fi(e))))return r}const o=Oy(s[n]||r[n],e)||Oy(s.appContext[n],e);return!o&&i?r:o}}function Oy(n,e){return n&&(n[e]||n[Fi(e)]||n[sd(Fi(e))])}function TM(n,e,t,i){let s;const r=t&&t[i];if(Be(n)||Xt(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,r&&r[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(At(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(n[c],c,a,r&&r[a])}}else s=[];return t&&(t[i]=s),s}function Mr(n,e,t={},i,s){if(Sn.isCE||Sn.parent&&al(Sn.parent)&&Sn.parent.isCE)return pt("slot",e==="default"?null:{name:e},i&&i());let r=n[e];r&&r._c&&(r._d=!1),Mt();const o=r&&CM(r(t)),a=vc(yn,{key:t.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function CM(n){return n.some(e=>hh(e)?!(e.type===Ws||e.type===yn&&!CM(e.children)):!0)?n:null}const kp=n=>n?zM(n)?fd(n)||n.proxy:kp(n.parent):null,ch=En(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kp(n.parent),$root:n=>kp(n.root),$emit:n=>n.emit,$options:n=>AM(n),$forceUpdate:n=>n.f||(n.f=()=>pM(n.update)),$nextTick:n=>n.n||(n.n=fM.bind(n.proxy)),$watch:n=>K2.bind(n)}),cO={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(i!==vt&&Je(i,e))return o[e]=1,i[e];if(s!==vt&&Je(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&Je(c,e))return o[e]=3,r[e];if(t!==vt&&Je(t,e))return o[e]=4,t[e];Fp&&(o[e]=0)}}const u=ch[e];let h,d;if(u)return e==="$attrs"&&Gn(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==vt&&Je(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Je(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return s!==vt&&Je(s,e)?(s[e]=t,!0):i!==vt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==vt&&Je(n,o)||e!==vt&&Je(e,o)||(a=r[0])&&Je(a,o)||Je(i,o)||Je(ch,o)||Je(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Fp=!0;function uO(n){const e=AM(n),t=n.proxy,i=n.ctx;Fp=!1,e.beforeCreate&&ky(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:f,beforeDestroy:_,beforeUnmount:w,destroyed:T,unmounted:M,render:E,renderTracked:R,renderTriggered:F,errorCaptured:S,serverPrefetch:A,expose:j,inheritAttrs:V,components:_e,directives:me,filters:U}=e;if(c&&hO(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const q=o[$];$e(q)&&(i[$]=q.bind(t))}if(s){const $=s.call(t,t);At($)&&(n.data=Ta($))}if(Fp=!0,r)for(const $ in r){const q=r[$],H=$e(q)?q.bind(t,t):$e(q.get)?q.get.bind(t,t):fi,Y=!$e(q)&&$e(q.set)?q.set.bind(t):fi,le=Kn({get:H,set:Y});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>le.value,set:se=>le.value=se})}if(a)for(const $ in a)IM(a[$],i,t,$);if(l){const $=$e(l)?l.call(t):l;Reflect.ownKeys($).forEach(q=>{wu(q,$[q])})}u&&ky(u,n,"c");function G($,q){Be(q)?q.forEach(H=>$(H.bind(t))):q&&$(q.bind(t))}if(G(Z2,h),G(J2,d),G(eO,p),G(tO,g),G(X2,m),G(Y2,f),G(oO,S),G(rO,R),G(sO,F),G(nO,w),G(EM,M),G(iO,A),Be(j))if(j.length){const $=n.exposed||(n.exposed={});j.forEach(q=>{Object.defineProperty($,q,{get:()=>t[q],set:H=>t[q]=H})})}else n.exposed||(n.exposed={});E&&n.render===fi&&(n.render=E),V!=null&&(n.inheritAttrs=V),_e&&(n.components=_e),me&&(n.directives=me)}function hO(n,e,t=fi,i=!1){Be(n)&&(n=Up(n));for(const s in n){const r=n[s];let o;At(r)?"default"in r?o=Jn(r.from||s,r.default,!0):o=Jn(r.from||s):o=Jn(r),hn(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ky(n,e,t){pi(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function IM(n,e,t,i){const s=i.includes(".")?wM(t,i):()=>t[i];if(Xt(n)){const r=e[n];$e(r)&&bu(s,r)}else if($e(n))bu(s,n.bind(t));else if(At(n))if(Be(n))n.forEach(r=>IM(r,e,t,i));else{const r=$e(n.handler)?n.handler.bind(t):e[n.handler];$e(r)&&bu(s,r,n)}}function AM(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>uh(l,c,o,!0)),uh(l,e,o)),r.set(e,l),l}function uh(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&uh(n,r,t,!0),s&&s.forEach(o=>uh(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=dO[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const dO={data:Fy,props:sr,emits:sr,methods:sr,computed:sr,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:sr,directives:sr,watch:pO,provide:Fy,inject:fO};function Fy(n,e){return e?n?function(){return En($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function fO(n,e){return sr(Up(n),Up(e))}function Up(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function gn(n,e){return n?[...new Set([].concat(n,e))]:e}function sr(n,e){return n?En(En(Object.create(null),n),e):e}function pO(n,e){if(!n)return e;if(!e)return n;const t=En(Object.create(null),n);for(const i in e)t[i]=gn(n[i],e[i]);return t}function mO(n,e,t,i=!1){const s={},r={};oh(r,dd,1),n.propsDefaults=Object.create(null),RM(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:R2(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function gO(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(cd(n.emitsOptions,d))continue;const p=e[d];if(l)if(Je(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=Fi(d);s[g]=zp(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{RM(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Je(e,h)&&((u=Sa(h))===h||!Je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=zp(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Je(e,h)&&!0)&&(delete r[h],c=!0)}c&&ls(n,"set","$attrs")}function RM(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(yu(l))continue;const c=e[l];let u;s&&Je(s,u=Fi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:cd(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ct(t),c=a||vt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=zp(s,l,h,c[h],n,!Je(c,h))}}return o}function zp(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=Je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&$e(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(na(s),i=c[t]=l.call(null,e),Tr())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Sa(t))&&(i=!0))}return i}function PM(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$e(n)){const u=h=>{l=!0;const[d,p]=PM(h,e,!0);En(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return i.set(n,ko),ko;if(Be(r))for(let u=0;u<r.length;u++){const h=Fi(r[u]);Uy(h)&&(o[h]=vt)}else if(r)for(const u in r){const h=Fi(u);if(Uy(h)){const d=r[u],p=o[h]=Be(d)||$e(d)?{type:d}:d;if(p){const g=Vy(Boolean,p.type),m=Vy(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Je(p,"default"))&&a.push(h)}}}const c=[o,a];return i.set(n,c),c}function Uy(n){return n[0]!=="$"}function zy(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function By(n,e){return zy(n)===zy(e)}function Vy(n,e){return Be(e)?e.findIndex(t=>By(t,n)):$e(e)&&By(e,n)?0:-1}const DM=n=>n[0]==="_"||n==="$stable",l_=n=>Be(n)?n.map(Ci):[Ci(n)],_O=(n,e,t)=>{if(e._n)return e;const i=jn((...s)=>l_(e(...s)),t);return i._c=!1,i},LM=(n,e,t)=>{const i=n._ctx;for(const s in n){if(DM(s))continue;const r=n[s];if($e(r))e[s]=_O(s,r,i);else if(r!=null){const o=l_(r);e[s]=()=>o}}},NM=(n,e)=>{const t=l_(e);n.slots.default=()=>t},vO=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=ct(e),oh(e,"_",t)):LM(e,n.slots={})}else n.slots={},e&&NM(n,e);oh(n.slots,dd,1)},yO=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(En(s,e),!t&&a===1&&delete s._):(r=!e.$stable,LM(e,s)),o=e}else e&&(NM(n,e),o={default:1});if(r)for(const a in s)!DM(a)&&!(a in o)&&delete s[a]};function OM(){return{app:null,config:{isNativeTag:Y3,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xO=0;function wO(n,e){return function(i,s=null){$e(i)||(i=Object.assign({},i)),s!=null&&!At(s)&&(s=null);const r=OM(),o=new Set;let a=!1;const l=r.app={_uid:xO++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:BO,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&$e(c.install)?(o.add(c),c.install(l,...u)):$e(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=pt(i,s);return d.appContext=r,u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,fd(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Bp(n,e,t,i,s=!1){if(Be(n)){n.forEach((d,p)=>Bp(d,e&&(Be(e)?e[p]:e),t,i,s));return}if(al(i)&&!s)return;const r=i.shapeFlag&4?fd(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xt(c)?(u[c]=null,Je(h,c)&&(h[c]=null)):hn(c)&&(c.value=null)),$e(l))Os(l,a,12,[o,u]);else{const d=Xt(l),p=hn(l);if(d||p){const g=()=>{if(n.f){const m=d?u[l]:l.value;s?Be(m)&&Yg(m,r):Be(m)?m.includes(r)||m.push(r):d?(u[l]=[r],Je(h,l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,Je(h,l)&&(h[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,In(g,t)):g()}}}const In=j2;function bO(n){return SO(n)}function SO(n,e){const t=n2();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=fi,cloneNode:g,insertStaticContent:m}=n,f=(x,C,k,Q=null,J=null,ie=null,oe=!1,ce=null,pe=!!C.dynamicChildren)=>{if(x===C)return;x&&!ka(x,C)&&(Q=ue(x),re(x,J,ie,!0),x=null),C.patchFlag===-2&&(pe=!1,C.dynamicChildren=null);const{type:y,ref:v,shapeFlag:P}=C;switch(y){case c_:_(x,C,k,Q);break;case Ws:w(x,C,k,Q);break;case Yd:x==null&&T(C,k,Q,oe);break;case yn:me(x,C,k,Q,J,ie,oe,ce,pe);break;default:P&1?R(x,C,k,Q,J,ie,oe,ce,pe):P&6?U(x,C,k,Q,J,ie,oe,ce,pe):(P&64||P&128)&&y.process(x,C,k,Q,J,ie,oe,ce,pe,he)}v!=null&&J&&Bp(v,x&&x.ref,ie,C||x,!C)},_=(x,C,k,Q)=>{if(x==null)i(C.el=a(C.children),k,Q);else{const J=C.el=x.el;C.children!==x.children&&c(J,C.children)}},w=(x,C,k,Q)=>{x==null?i(C.el=l(C.children||""),k,Q):C.el=x.el},T=(x,C,k,Q)=>{[x.el,x.anchor]=m(x.children,C,k,Q,x.el,x.anchor)},M=({el:x,anchor:C},k,Q)=>{let J;for(;x&&x!==C;)J=d(x),i(x,k,Q),x=J;i(C,k,Q)},E=({el:x,anchor:C})=>{let k;for(;x&&x!==C;)k=d(x),s(x),x=k;s(C)},R=(x,C,k,Q,J,ie,oe,ce,pe)=>{oe=oe||C.type==="svg",x==null?F(C,k,Q,J,ie,oe,ce,pe):j(x,C,J,ie,oe,ce,pe)},F=(x,C,k,Q,J,ie,oe,ce)=>{let pe,y;const{type:v,props:P,shapeFlag:B,transition:X,patchFlag:ne,dirs:Ie}=x;if(x.el&&g!==void 0&&ne===-1)pe=x.el=g(x.el);else{if(pe=x.el=o(x.type,ie,P&&P.is,P),B&8?u(pe,x.children):B&16&&A(x.children,pe,null,Q,J,ie&&v!=="foreignObject",oe,ce),Ie&&Ys(x,null,Q,"created"),P){for(const xe in P)xe!=="value"&&!yu(xe)&&r(pe,xe,null,P[xe],ie,x.children,Q,J,ae);"value"in P&&r(pe,"value",null,P.value),(y=P.onVnodeBeforeMount)&&Mi(y,Q,x)}S(pe,x,x.scopeId,oe,Q)}Ie&&Ys(x,null,Q,"beforeMount");const O=(!J||J&&!J.pendingBranch)&&X&&!X.persisted;O&&X.beforeEnter(pe),i(pe,C,k),((y=P&&P.onVnodeMounted)||O||Ie)&&In(()=>{y&&Mi(y,Q,x),O&&X.enter(pe),Ie&&Ys(x,null,Q,"mounted")},J)},S=(x,C,k,Q,J)=>{if(k&&p(x,k),Q)for(let ie=0;ie<Q.length;ie++)p(x,Q[ie]);if(J){let ie=J.subTree;if(C===ie){const oe=J.vnode;S(x,oe,oe.scopeId,oe.slotScopeIds,J.parent)}}},A=(x,C,k,Q,J,ie,oe,ce,pe=0)=>{for(let y=pe;y<x.length;y++){const v=x[y]=ce?Es(x[y]):Ci(x[y]);f(null,v,C,k,Q,J,ie,oe,ce)}},j=(x,C,k,Q,J,ie,oe)=>{const ce=C.el=x.el;let{patchFlag:pe,dynamicChildren:y,dirs:v}=C;pe|=x.patchFlag&16;const P=x.props||vt,B=C.props||vt;let X;k&&Qs(k,!1),(X=B.onVnodeBeforeUpdate)&&Mi(X,k,C,x),v&&Ys(C,x,k,"beforeUpdate"),k&&Qs(k,!0);const ne=J&&C.type!=="foreignObject";if(y?V(x.dynamicChildren,y,ce,k,Q,ne,ie):oe||H(x,C,ce,null,k,Q,ne,ie,!1),pe>0){if(pe&16)_e(ce,C,P,B,k,Q,J);else if(pe&2&&P.class!==B.class&&r(ce,"class",null,B.class,J),pe&4&&r(ce,"style",P.style,B.style,J),pe&8){const Ie=C.dynamicProps;for(let O=0;O<Ie.length;O++){const xe=Ie[O],Te=P[xe],Ce=B[xe];(Ce!==Te||xe==="value")&&r(ce,xe,Te,Ce,J,x.children,k,Q,ae)}}pe&1&&x.children!==C.children&&u(ce,C.children)}else!oe&&y==null&&_e(ce,C,P,B,k,Q,J);((X=B.onVnodeUpdated)||v)&&In(()=>{X&&Mi(X,k,C,x),v&&Ys(C,x,k,"updated")},Q)},V=(x,C,k,Q,J,ie,oe)=>{for(let ce=0;ce<C.length;ce++){const pe=x[ce],y=C[ce],v=pe.el&&(pe.type===yn||!ka(pe,y)||pe.shapeFlag&70)?h(pe.el):k;f(pe,y,v,null,Q,J,ie,oe,!0)}},_e=(x,C,k,Q,J,ie,oe)=>{if(k!==Q){for(const ce in Q){if(yu(ce))continue;const pe=Q[ce],y=k[ce];pe!==y&&ce!=="value"&&r(x,ce,y,pe,oe,C.children,J,ie,ae)}if(k!==vt)for(const ce in k)!yu(ce)&&!(ce in Q)&&r(x,ce,k[ce],null,oe,C.children,J,ie,ae);"value"in Q&&r(x,"value",k.value,Q.value)}},me=(x,C,k,Q,J,ie,oe,ce,pe)=>{const y=C.el=x?x.el:a(""),v=C.anchor=x?x.anchor:a("");let{patchFlag:P,dynamicChildren:B,slotScopeIds:X}=C;X&&(ce=ce?ce.concat(X):X),x==null?(i(y,k,Q),i(v,k,Q),A(C.children,k,v,J,ie,oe,ce,pe)):P>0&&P&64&&B&&x.dynamicChildren?(V(x.dynamicChildren,B,k,J,ie,oe,ce),(C.key!=null||J&&C===J.subTree)&&kM(x,C,!0)):H(x,C,k,v,J,ie,oe,ce,pe)},U=(x,C,k,Q,J,ie,oe,ce,pe)=>{C.slotScopeIds=ce,x==null?C.shapeFlag&512?J.ctx.activate(C,k,Q,oe,pe):ee(C,k,Q,J,ie,oe,pe):G(x,C,pe)},ee=(x,C,k,Q,J,ie,oe)=>{const ce=x.component=LO(x,Q,J);if(bM(x)&&(ce.ctx.renderer=he),NO(ce),ce.asyncDep){if(J&&J.registerDep(ce,$),!x.el){const pe=ce.subTree=pt(Ws);w(null,pe,C,k)}return}$(ce,x,C,k,J,ie,oe)},G=(x,C,k)=>{const Q=C.component=x.component;if(W2(x,C,k))if(Q.asyncDep&&!Q.asyncResolved){q(Q,C,k);return}else Q.next=C,U2(Q.update),Q.update();else C.el=x.el,Q.vnode=C},$=(x,C,k,Q,J,ie,oe)=>{const ce=()=>{if(x.isMounted){let{next:v,bu:P,u:B,parent:X,vnode:ne}=x,Ie=v,O;Qs(x,!1),v?(v.el=ne.el,q(x,v,oe)):v=ne,P&&xu(P),(O=v.props&&v.props.onVnodeBeforeUpdate)&&Mi(O,X,v,ne),Qs(x,!0);const xe=Xd(x),Te=x.subTree;x.subTree=xe,f(Te,xe,h(Te.el),ue(Te),x,J,ie),v.el=xe.el,Ie===null&&$2(x,xe.el),B&&In(B,J),(O=v.props&&v.props.onVnodeUpdated)&&In(()=>Mi(O,X,v,ne),J)}else{let v;const{el:P,props:B}=C,{bm:X,m:ne,parent:Ie}=x,O=al(C);if(Qs(x,!1),X&&xu(X),!O&&(v=B&&B.onVnodeBeforeMount)&&Mi(v,Ie,C),Qs(x,!0),P&&we){const xe=()=>{x.subTree=Xd(x),we(P,x.subTree,x,J,null)};O?C.type.__asyncLoader().then(()=>!x.isUnmounted&&xe()):xe()}else{const xe=x.subTree=Xd(x);f(null,xe,k,Q,x,J,ie),C.el=xe.el}if(ne&&In(ne,J),!O&&(v=B&&B.onVnodeMounted)){const xe=C;In(()=>Mi(v,Ie,xe),J)}(C.shapeFlag&256||Ie&&al(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&x.a&&In(x.a,J),x.isMounted=!0,C=k=Q=null}},pe=x.effect=new Jg(ce,()=>pM(y),x.scope),y=x.update=()=>pe.run();y.id=x.uid,Qs(x,!0),y()},q=(x,C,k)=>{C.component=x;const Q=x.vnode.props;x.vnode=C,x.next=null,gO(x,C.props,Q,k),yO(x,C.children,k),Ea(),ld(void 0,x.update),Ma()},H=(x,C,k,Q,J,ie,oe,ce,pe=!1)=>{const y=x&&x.children,v=x?x.shapeFlag:0,P=C.children,{patchFlag:B,shapeFlag:X}=C;if(B>0){if(B&128){le(y,P,k,Q,J,ie,oe,ce,pe);return}else if(B&256){Y(y,P,k,Q,J,ie,oe,ce,pe);return}}X&8?(v&16&&ae(y,J,ie),P!==y&&u(k,P)):v&16?X&16?le(y,P,k,Q,J,ie,oe,ce,pe):ae(y,J,ie,!0):(v&8&&u(k,""),X&16&&A(P,k,Q,J,ie,oe,ce,pe))},Y=(x,C,k,Q,J,ie,oe,ce,pe)=>{x=x||ko,C=C||ko;const y=x.length,v=C.length,P=Math.min(y,v);let B;for(B=0;B<P;B++){const X=C[B]=pe?Es(C[B]):Ci(C[B]);f(x[B],X,k,null,J,ie,oe,ce,pe)}y>v?ae(x,J,ie,!0,!1,P):A(C,k,Q,J,ie,oe,ce,pe,P)},le=(x,C,k,Q,J,ie,oe,ce,pe)=>{let y=0;const v=C.length;let P=x.length-1,B=v-1;for(;y<=P&&y<=B;){const X=x[y],ne=C[y]=pe?Es(C[y]):Ci(C[y]);if(ka(X,ne))f(X,ne,k,null,J,ie,oe,ce,pe);else break;y++}for(;y<=P&&y<=B;){const X=x[P],ne=C[B]=pe?Es(C[B]):Ci(C[B]);if(ka(X,ne))f(X,ne,k,null,J,ie,oe,ce,pe);else break;P--,B--}if(y>P){if(y<=B){const X=B+1,ne=X<v?C[X].el:Q;for(;y<=B;)f(null,C[y]=pe?Es(C[y]):Ci(C[y]),k,ne,J,ie,oe,ce,pe),y++}}else if(y>B)for(;y<=P;)re(x[y],J,ie,!0),y++;else{const X=y,ne=y,Ie=new Map;for(y=ne;y<=B;y++){const Le=C[y]=pe?Es(C[y]):Ci(C[y]);Le.key!=null&&Ie.set(Le.key,y)}let O,xe=0;const Te=B-ne+1;let Ce=!1,I=0;const ve=new Array(Te);for(y=0;y<Te;y++)ve[y]=0;for(y=X;y<=P;y++){const Le=x[y];if(xe>=Te){re(Le,J,ie,!0);continue}let Ee;if(Le.key!=null)Ee=Ie.get(Le.key);else for(O=ne;O<=B;O++)if(ve[O-ne]===0&&ka(Le,C[O])){Ee=O;break}Ee===void 0?re(Le,J,ie,!0):(ve[Ee-ne]=y+1,Ee>=I?I=Ee:Ce=!0,f(Le,C[Ee],k,null,J,ie,oe,ce,pe),xe++)}const ye=Ce?EO(ve):ko;for(O=ye.length-1,y=Te-1;y>=0;y--){const Le=ne+y,Ee=C[Le],ke=Le+1<v?C[Le+1].el:Q;ve[y]===0?f(null,Ee,k,ke,J,ie,oe,ce,pe):Ce&&(O<0||y!==ye[O]?se(Ee,k,ke,2):O--)}}},se=(x,C,k,Q,J=null)=>{const{el:ie,type:oe,transition:ce,children:pe,shapeFlag:y}=x;if(y&6){se(x.component.subTree,C,k,Q);return}if(y&128){x.suspense.move(C,k,Q);return}if(y&64){oe.move(x,C,k,he);return}if(oe===yn){i(ie,C,k);for(let P=0;P<pe.length;P++)se(pe[P],C,k,Q);i(x.anchor,C,k);return}if(oe===Yd){M(x,C,k);return}if(Q!==2&&y&1&&ce)if(Q===0)ce.beforeEnter(ie),i(ie,C,k),In(()=>ce.enter(ie),J);else{const{leave:P,delayLeave:B,afterLeave:X}=ce,ne=()=>i(ie,C,k),Ie=()=>{P(ie,()=>{ne(),X&&X()})};B?B(ie,ne,Ie):Ie()}else i(ie,C,k)},re=(x,C,k,Q=!1,J=!1)=>{const{type:ie,props:oe,ref:ce,children:pe,dynamicChildren:y,shapeFlag:v,patchFlag:P,dirs:B}=x;if(ce!=null&&Bp(ce,null,k,x,!0),v&256){C.ctx.deactivate(x);return}const X=v&1&&B,ne=!al(x);let Ie;if(ne&&(Ie=oe&&oe.onVnodeBeforeUnmount)&&Mi(Ie,C,x),v&6)D(x.component,k,Q);else{if(v&128){x.suspense.unmount(k,Q);return}X&&Ys(x,null,C,"beforeUnmount"),v&64?x.type.remove(x,C,k,J,he,Q):y&&(ie!==yn||P>0&&P&64)?ae(y,C,k,!1,!0):(ie===yn&&P&384||!J&&v&16)&&ae(pe,C,k),Q&&De(x)}(ne&&(Ie=oe&&oe.onVnodeUnmounted)||X)&&In(()=>{Ie&&Mi(Ie,C,x),X&&Ys(x,null,C,"unmounted")},k)},De=x=>{const{type:C,el:k,anchor:Q,transition:J}=x;if(C===yn){L(k,Q);return}if(C===Yd){E(x);return}const ie=()=>{s(k),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(x.shapeFlag&1&&J&&!J.persisted){const{leave:oe,delayLeave:ce}=J,pe=()=>oe(k,ie);ce?ce(x.el,ie,pe):pe()}else ie()},L=(x,C)=>{let k;for(;x!==C;)k=d(x),s(x),x=k;s(C)},D=(x,C,k)=>{const{bum:Q,scope:J,update:ie,subTree:oe,um:ce}=x;Q&&xu(Q),J.stop(),ie&&(ie.active=!1,re(oe,x,C,k)),ce&&In(ce,C),In(()=>{x.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},ae=(x,C,k,Q=!1,J=!1,ie=0)=>{for(let oe=ie;oe<x.length;oe++)re(x[oe],C,k,Q,J)},ue=x=>x.shapeFlag&6?ue(x.component.subTree):x.shapeFlag&128?x.suspense.next():d(x.anchor||x.el),Ae=(x,C,k)=>{x==null?C._vnode&&re(C._vnode,null,null,!0):f(C._vnode||null,x,C,null,null,null,k),_M(),C._vnode=x},he={p:f,um:re,m:se,r:De,mt:ee,mc:A,pc:H,pbc:V,n:ue,o:n};let Re,we;return e&&([Re,we]=e(he)),{render:Ae,hydrate:Re,createApp:wO(Ae,Re)}}function Qs({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function kM(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Es(s[r]),a.el=o.el),t||kM(o,a))}}function EO(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const MO=n=>n.__isTeleport,yn=Symbol(void 0),c_=Symbol(void 0),Ws=Symbol(void 0),Yd=Symbol(void 0),ll=[];let hi=null;function Mt(n=!1){ll.push(hi=n?null:[])}function TO(){ll.pop(),hi=ll[ll.length-1]||null}let Nl=1;function Gy(n){Nl+=n}function FM(n){return n.dynamicChildren=Nl>0?hi||ko:null,TO(),Nl>0&&hi&&hi.push(n),n}function Ht(n,e,t,i,s,r){return FM(fe(n,e,t,i,s,r,!0))}function vc(n,e,t,i,s){return FM(pt(n,e,t,i,s,!0))}function hh(n){return n?n.__v_isVNode===!0:!1}function ka(n,e){return n.type===e.type&&n.key===e.key}const dd="__vInternal",UM=({key:n})=>n!=null?n:null,Su=({ref:n,ref_key:e,ref_for:t})=>n!=null?Xt(n)||hn(n)||$e(n)?{i:Sn,r:n,k:e,f:!!t}:n:null;function fe(n,e=null,t=null,i=0,s=null,r=n===yn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&UM(e),ref:e&&Su(e),scopeId:ud,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(u_(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Xt(t)?8:16),Nl>0&&!o&&hi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hi.push(l),l}const pt=CO;function CO(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===aO)&&(n=Ws),hh(n)){const a=ta(n,e,!0);return t&&u_(a,t),Nl>0&&!r&&hi&&(a.shapeFlag&6?hi[hi.indexOf(n)]=a:hi.push(a)),a.patchFlag|=-2,a}if(zO(n)&&(n=n.__vccOpts),e){e=IO(e);let{class:a,style:l}=e;a&&!Xt(a)&&(e.class=ns(a)),At(l)&&(oM(l)&&!Be(l)&&(l=En({},l)),e.style=gc(l))}const o=Xt(n)?1:q2(n)?128:MO(n)?64:At(n)?4:$e(n)?2:0;return fe(n,e,t,i,s,o,r,!0)}function IO(n){return n?oM(n)||dd in n?En({},n):n:null}function ta(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?RO(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&UM(a),ref:e&&e.ref?t&&s?Be(s)?s.concat(Su(e)):[s,Su(e)]:Su(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==yn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ta(n.ssContent),ssFallback:n.ssFallback&&ta(n.ssFallback),el:n.el,anchor:n.anchor}}function yc(n=" ",e=0){return pt(c_,null,n,e)}function AO(n="",e=!1){return e?(Mt(),vc(Ws,null,n)):pt(Ws,null,n)}function Ci(n){return n==null||typeof n=="boolean"?pt(Ws):Be(n)?pt(yn,null,n.slice()):typeof n=="object"?Es(n):pt(c_,null,String(n))}function Es(n){return n.el===null||n.memo?n:ta(n)}function u_(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),u_(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(dd in e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Sn},t=32):(e=String(e),i&64?(t=16,e=[yc(e)]):t=8);n.children=e,n.shapeFlag|=t}function RO(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ns([e.class,i.class]));else if(s==="style")e.style=gc([e.style,i.style]);else if(nd(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Mi(n,e,t,i=null){pi(n,e,7,[t,i])}const PO=OM();let DO=0;function LO(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||PO,r={uid:DO++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new i2(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:PM(i,s),emitsOptions:yM(i,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=V2.bind(null,r),n.ce&&n.ce(r),r}let Jt=null;const na=n=>{Jt=n,n.scope.on()},Tr=()=>{Jt&&Jt.scope.off(),Jt=null};function zM(n){return n.vnode.shapeFlag&4}let Ol=!1;function NO(n,e=!1){Ol=e;const{props:t,children:i}=n.vnode,s=zM(n);mO(n,t,s,e),vO(n,i);const r=s?OO(n,e):void 0;return Ol=!1,r}function OO(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=aM(new Proxy(n.ctx,cO));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?FO(n):null;na(n),Ea();const r=Os(i,n,0,[n.props,s]);if(Ma(),Tr(),qE(r)){if(r.then(Tr,Tr),e)return r.then(o=>{Hy(n,o,e)}).catch(o=>{ad(o,n,0)});n.asyncDep=r}else Hy(n,r,e)}else BM(n,e)}function Hy(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=hM(e)),BM(n,t)}let Wy;function BM(n,e,t){const i=n.type;if(!n.render){if(!e&&Wy&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=En(En({isCustomElement:r,delimiters:a},o),l);i.render=Wy(s,c)}}n.render=i.render||fi}na(n),Ea(),uO(n),Ma(),Tr()}function kO(n){return new Proxy(n.attrs,{get(e,t){return Gn(n,"get","$attrs"),e[t]}})}function FO(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=kO(n))},slots:n.slots,emit:n.emit,expose:e}}function fd(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(hM(aM(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ch)return ch[t](n)}}))}function UO(n,e=!0){return $e(n)?n.displayName||n.name:n.name||e&&n.__name}function zO(n){return $e(n)&&"__vccOpts"in n}const Kn=(n,e)=>O2(n,e,Ol);function VM(n,e,t){const i=arguments.length;return i===2?At(e)&&!Be(e)?hh(e)?pt(n,null,[e]):pt(n,e):pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&hh(t)&&(t=[t]),pt(n,e,t))}const BO="3.2.37",VO="http://www.w3.org/2000/svg",ar=typeof document!="undefined"?document:null,$y=ar&&ar.createElement("template"),GO={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?ar.createElementNS(VO,n):ar.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ar.createTextNode(n),createComment:n=>ar.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ar.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{$y.innerHTML=i?`<svg>${n}</svg>`:n;const a=$y.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function HO(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function WO(n,e,t){const i=n.style,s=Xt(t);if(t&&!s){for(const r in t)Vp(i,r,t[r]);if(e&&!Xt(e))for(const r in e)t[r]==null&&Vp(i,r,"")}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const qy=/\s*!important$/;function Vp(n,e,t){if(Be(t))t.forEach(i=>Vp(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$O(n,e);qy.test(t)?n.setProperty(Sa(i),t.replace(qy,""),"important"):n[i]=t}}const jy=["Webkit","Moz","ms"],Qd={};function $O(n,e){const t=Qd[e];if(t)return t;let i=Fi(e);if(i!=="filter"&&i in n)return Qd[e]=i;i=sd(i);for(let s=0;s<jy.length;s++){const r=jy[s]+i;if(r in n)return Qd[e]=r}return e}const Ky="http://www.w3.org/1999/xlink";function qO(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Ky,e.slice(6,e.length)):n.setAttributeNS(Ky,e,t);else{const r=$3(e);t==null||r&&!HE(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function jO(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=HE(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}const[GM,KO]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Gp=0;const XO=Promise.resolve(),YO=()=>{Gp=0},QO=()=>Gp||(XO.then(YO),Gp=GM());function lr(n,e,t,i){n.addEventListener(e,t,i)}function ZO(n,e,t,i){n.removeEventListener(e,t,i)}function JO(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=ek(e);if(i){const c=r[e]=tk(i,s);lr(n,a,c,l)}else o&&(ZO(n,a,o,l),r[e]=void 0)}}const Xy=/(?:Once|Passive|Capture)$/;function ek(n){let e;if(Xy.test(n)){e={};let t;for(;t=n.match(Xy);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Sa(n.slice(2)),e]}function tk(n,e){const t=i=>{const s=i.timeStamp||GM();(KO||s>=t.attached-1)&&pi(nk(i,t.value),e,5,[i])};return t.value=n,t.attached=QO(),t}function nk(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Yy=/^on[a-z]/,ik=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?HO(n,i,s):e==="style"?WO(n,t,i):nd(e)?Xg(e)||JO(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sk(n,e,i,s))?jO(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),qO(n,e,i,s))};function sk(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Yy.test(e)&&$e(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Yy.test(e)&&Xt(t)?!1:e in n}const dh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Be(e)?t=>xu(e,t):e};function rk(n){n.target.composing=!0}function Qy(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ii={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=dh(s);const r=i||s.props&&s.props.type==="number";lr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=Ip(a)),n._assign(a)}),t&&lr(n,"change",()=>{n.value=n.value.trim()}),e||(lr(n,"compositionstart",rk),lr(n,"compositionend",Qy),lr(n,"change",Qy))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=dh(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&Ip(n.value)===e))return;const o=e==null?"":e;n.value!==o&&(n.value=o)}},Zy={created(n,{value:e},t){n.checked=rh(e,t.props.value),n._assign=dh(t),lr(n,"change",()=>{n._assign(ok(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n._assign=dh(i),e!==t&&(n.checked=rh(e,i.props.value))}};function ok(n){return"_value"in n?n._value:n.value}const ak=["ctrl","shift","alt","meta"],lk={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ak.some(t=>n[`${t}Key`]&&!e.includes(t))},kl=(n,e)=>(t,...i)=>{for(let s=0;s<e.length;s++){const r=lk[e[s]];if(r&&r(t,e))return}return n(t,...i)},ck=En({patchProp:ik},GO);let Jy;function uk(){return Jy||(Jy=bO(ck))}const hk=(...n)=>{const e=uk().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=dk(i);if(!s)return;const r=e._component;!$e(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function dk(n){return Xt(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const wo=typeof window!="undefined";function fk(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const _t=Object.assign;function Zd(n,e){const t={};for(const i in e){const s=e[i];t[i]=vi(s)?s.map(n):n(s)}return t}const cl=()=>{},vi=Array.isArray,pk=/\/$/,mk=n=>n.replace(pk,"");function Jd(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=yk(i!=null?i:e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function gk(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function e0(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function _k(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&ia(e.matched[i],t.matched[s])&&HM(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ia(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function HM(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!vk(n[t],e[t]))return!1;return!0}function vk(n,e){return vi(n)?t0(n,e):vi(e)?t0(e,n):n===e}function t0(n,e){return vi(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function yk(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let s=t.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Fl;(function(n){n.pop="pop",n.push="push"})(Fl||(Fl={}));var ul;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ul||(ul={}));function xk(n){if(!n)if(wo){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),mk(n)}const wk=/^[^#]+#/;function bk(n,e){return n.replace(wk,"#")+e}function Sk(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const pd=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ek(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Sk(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function n0(n,e){return(history.state?history.state.position-e:-1)+n}const Hp=new Map;function Mk(n,e){Hp.set(n,e)}function Tk(n){const e=Hp.get(n);return Hp.delete(n),e}let Ck=()=>location.protocol+"//"+location.host;function WM(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),e0(l,"")}return e0(t,n)+i+s}function Ik(n,e,t,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=WM(n,location),g=t.value,m=e.value;let f=0;if(d){if(t.value=p,e.value=d,o&&o===g){o=null;return}f=m?d.position-m.position:0}else i(p);s.forEach(_=>{_(t.value,g,{delta:f,type:Fl.pop,direction:f?f>0?ul.forward:ul.back:ul.unknown})})};function l(){o=t.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(_t({},d.state,{scroll:pd()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function i0(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?pd():null}}function Ak(n){const{history:e,location:t}=window,i={value:WM(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:Ck()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function o(l,c){const u=_t({},e.state,i0(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=_t({},s.value,e.state,{forward:l,scroll:pd()});r(u.current,u,!0);const h=_t({},i0(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Rk(n){n=xk(n);const e=Ak(n),t=Ik(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=_t({location:"",base:n,go:i,createHref:bk.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pk(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Rk(n)}function Dk(n){return typeof n=="string"||n&&typeof n=="object"}function $M(n){return typeof n=="string"||typeof n=="symbol"}const ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qM=Symbol("");var s0;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(s0||(s0={}));function sa(n,e){return _t(new Error,{type:n,[qM]:!0},e)}function ms(n,e){return n instanceof Error&&qM in n&&(e==null||!!(n.type&e))}const r0="[^/]+?",Lk={sensitive:!1,strict:!1,start:!0,end:!0},Nk=/[.+*?^${}()[\]/\\]/g;function Ok(n,e){const t=_t({},Lk,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Nk,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:f,regexp:_}=d;r.push({name:g,repeatable:m,optional:f});const w=_||r0;if(w!==r0){p+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+M.message)}}let T=m?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(T=f&&c.length<2?`(?:/${T})`:"/"+T),f&&(T+="?"),s+=T,p+=20,f&&(p+=-8),m&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:f}=p,_=g in c?c[g]:"";if(vi(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=vi(_)?_.join("/"):_;if(!w)if(f)d.length<2&&n.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u}return{re:o,score:i,keys:r,parse:a,stringify:l}}function kk(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fk(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=kk(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(o0(i))return 1;if(o0(s))return-1}return s.length-i.length}function o0(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Uk={type:0,value:""},zk=/[a-zA-Z0-9_]/;function Bk(n){if(!n)return[[]];if(n==="/")return[[Uk]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:zk.test(l)?d():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Vk(n,e,t){const i=Ok(Bk(n.path),t),s=_t(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gk(n,e){const t=[],i=new Map;e=l0({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const p=!d,g=Wk(u);g.aliasOf=d&&d.record;const m=l0(e,u),f=[g];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of T)f.push(_t({},g,{components:d?d.record.components:g.components,path:M,aliasOf:d?d.record:g}))}let _,w;for(const T of f){const{path:M}=T;if(h&&M[0]!=="/"){const E=h.record.path,R=E[E.length-1]==="/"?"":"/";T.path=h.record.path+(M&&R+M)}if(_=Vk(T,h,m),d?d.alias.push(_):(w=w||_,w!==_&&w.alias.push(_),p&&u.name&&!a0(_)&&o(u.name)),g.children){const E=g.children;for(let R=0;R<E.length;R++)r(E[R],_,d&&d.children[R])}d=d||_,l(_)}return w?()=>{o(w)}:cl}function o(u){if($M(u)){const h=i.get(u);h&&(i.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Fk(u,t[h])>=0&&(u.record.path!==t[h].record.path||!jM(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!a0(u)&&i.set(u.record.name,u)}function c(u,h){let d,p={},g,m;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw sa(1,{location:u});m=d.record.name,p=_t(Hk(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),g=d.stringify(p)}else if("path"in u)g=u.path,d=t.find(w=>w.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(w=>w.re.test(h.path)),!d)throw sa(1,{location:u,currentLocation:h});m=d.record.name,p=_t({},h.params,u.params),g=d.stringify(p)}const f=[];let _=d;for(;_;)f.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:f,meta:qk(f)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Hk(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Wk(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:$k(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function $k(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function a0(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function qk(n){return n.reduce((e,t)=>_t(e,t.meta),{})}function l0(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function jM(n,e){return e.children.some(t=>t===n||jM(n,t))}const KM=/#/g,jk=/&/g,Kk=/\//g,Xk=/=/g,Yk=/\?/g,XM=/\+/g,Qk=/%5B/g,Zk=/%5D/g,YM=/%5E/g,Jk=/%60/g,QM=/%7B/g,eF=/%7C/g,ZM=/%7D/g,tF=/%20/g;function h_(n){return encodeURI(""+n).replace(eF,"|").replace(Qk,"[").replace(Zk,"]")}function nF(n){return h_(n).replace(QM,"{").replace(ZM,"}").replace(YM,"^")}function Wp(n){return h_(n).replace(XM,"%2B").replace(tF,"+").replace(KM,"%23").replace(jk,"%26").replace(Jk,"`").replace(QM,"{").replace(ZM,"}").replace(YM,"^")}function iF(n){return Wp(n).replace(Xk,"%3D")}function sF(n){return h_(n).replace(KM,"%23").replace(Yk,"%3F")}function rF(n){return n==null?"":sF(n).replace(Kk,"%2F")}function fh(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function oF(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(XM," "),o=r.indexOf("="),a=fh(o<0?r:r.slice(0,o)),l=o<0?null:fh(r.slice(o+1));if(a in e){let c=e[a];vi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function c0(n){let e="";for(let t in n){const i=n[t];if(t=iF(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(vi(i)?i.map(r=>r&&Wp(r)):[i&&Wp(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function aF(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=vi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const lF=Symbol(""),u0=Symbol(""),d_=Symbol(""),JM=Symbol(""),$p=Symbol("");function Fa(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function Ms(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(sa(4,{from:t,to:e})):h instanceof Error?a(h):Dk(h)?a(sa(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ef(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(cF(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ms(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=fk(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ms(d,t,i,r,o)()}))}}return s}function cF(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function h0(n){const e=Jn(d_),t=Jn(JM),i=Kn(()=>e.resolve(Er(n.to))),s=Kn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(ia.bind(null,u));if(d>-1)return d;const p=d0(l[c-2]);return c>1&&d0(u)===p&&h[h.length-1].path!==p?h.findIndex(ia.bind(null,l[c-2])):d}),r=Kn(()=>s.value>-1&&fF(t.params,i.value.params)),o=Kn(()=>s.value>-1&&s.value===t.matched.length-1&&HM(t.params,i.value.params));function a(l={}){return dF(l)?e[Er(n.replace)?"replace":"push"](Er(n.to)).catch(cl):Promise.resolve()}return{route:i,href:Kn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const uF=Cn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:h0,setup(n,{slots:e}){const t=Ta(h0(n)),{options:i}=Jn(d_),s=Kn(()=>({[f0(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[f0(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:VM("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),hF=uF;function dF(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function fF(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!vi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function d0(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const f0=(n,e,t)=>n!=null?n:e!=null?e:t,pF=Cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Jn($p),s=Kn(()=>n.route||i.value),r=Jn(u0,0),o=Kn(()=>{let c=Er(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Kn(()=>s.value.matched[o.value]);wu(u0,Kn(()=>o.value+1)),wu(lF,a),wu($p,s);const l=od();return bu(()=>[l.value,a.value,n.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ia(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=a.value,h=u&&u.components[n.name],d=n.name;if(!h)return p0(t.default,{Component:h,route:c});const p=u.props[n.name],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,f=VM(h,_t({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return p0(t.default,{Component:f,route:c})||f}}});function p0(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const eT=pF;function mF(n){const e=Gk(n.routes,n),t=n.parseQuery||oF,i=n.stringifyQuery||c0,s=n.history,r=Fa(),o=Fa(),a=Fa(),l=P2(ps);let c=ps;wo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zd.bind(null,L=>""+L),h=Zd.bind(null,rF),d=Zd.bind(null,fh);function p(L,D){let ae,ue;return $M(L)?(ae=e.getRecordMatcher(L),ue=D):ue=L,e.addRoute(ue,ae)}function g(L){const D=e.getRecordMatcher(L);D&&e.removeRoute(D)}function m(){return e.getRoutes().map(L=>L.record)}function f(L){return!!e.getRecordMatcher(L)}function _(L,D){if(D=_t({},D||l.value),typeof L=="string"){const we=Jd(t,L,D.path),x=e.resolve({path:we.path},D),C=s.createHref(we.fullPath);return _t(we,x,{params:d(x.params),hash:fh(we.hash),redirectedFrom:void 0,href:C})}let ae;if("path"in L)ae=_t({},L,{path:Jd(t,L.path,D.path).path});else{const we=_t({},L.params);for(const x in we)we[x]==null&&delete we[x];ae=_t({},L,{params:h(L.params)}),D.params=h(D.params)}const ue=e.resolve(ae,D),Ae=L.hash||"";ue.params=u(d(ue.params));const he=gk(i,_t({},L,{hash:nF(Ae),path:ue.path})),Re=s.createHref(he);return _t({fullPath:he,hash:Ae,query:i===c0?aF(L.query):L.query||{}},ue,{redirectedFrom:void 0,href:Re})}function w(L){return typeof L=="string"?Jd(t,L,l.value.path):_t({},L)}function T(L,D){if(c!==L)return sa(8,{from:D,to:L})}function M(L){return F(L)}function E(L){return M(_t(w(L),{replace:!0}))}function R(L){const D=L.matched[L.matched.length-1];if(D&&D.redirect){const{redirect:ae}=D;let ue=typeof ae=="function"?ae(L):ae;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=w(ue):{path:ue},ue.params={}),_t({query:L.query,hash:L.hash,params:"path"in ue?{}:L.params},ue)}}function F(L,D){const ae=c=_(L),ue=l.value,Ae=L.state,he=L.force,Re=L.replace===!0,we=R(ae);if(we)return F(_t(w(we),{state:Ae,force:he,replace:Re}),D||ae);const x=ae;x.redirectedFrom=D;let C;return!he&&_k(i,ue,ae)&&(C=sa(16,{to:x,from:ue}),Y(ue,ue,!0,!1)),(C?Promise.resolve(C):A(x,ue)).catch(k=>ms(k)?ms(k,2)?k:H(k):$(k,x,ue)).then(k=>{if(k){if(ms(k,2))return F(_t(w(k.to),{state:Ae,force:he,replace:Re}),D||x)}else k=V(x,ue,!0,Re,Ae);return j(x,ue,k),k})}function S(L,D){const ae=T(L,D);return ae?Promise.reject(ae):Promise.resolve()}function A(L,D){let ae;const[ue,Ae,he]=gF(L,D);ae=ef(ue.reverse(),"beforeRouteLeave",L,D);for(const we of ue)we.leaveGuards.forEach(x=>{ae.push(Ms(x,L,D))});const Re=S.bind(null,L,D);return ae.push(Re),io(ae).then(()=>{ae=[];for(const we of r.list())ae.push(Ms(we,L,D));return ae.push(Re),io(ae)}).then(()=>{ae=ef(Ae,"beforeRouteUpdate",L,D);for(const we of Ae)we.updateGuards.forEach(x=>{ae.push(Ms(x,L,D))});return ae.push(Re),io(ae)}).then(()=>{ae=[];for(const we of L.matched)if(we.beforeEnter&&!D.matched.includes(we))if(vi(we.beforeEnter))for(const x of we.beforeEnter)ae.push(Ms(x,L,D));else ae.push(Ms(we.beforeEnter,L,D));return ae.push(Re),io(ae)}).then(()=>(L.matched.forEach(we=>we.enterCallbacks={}),ae=ef(he,"beforeRouteEnter",L,D),ae.push(Re),io(ae))).then(()=>{ae=[];for(const we of o.list())ae.push(Ms(we,L,D));return ae.push(Re),io(ae)}).catch(we=>ms(we,8)?we:Promise.reject(we))}function j(L,D,ae){for(const ue of a.list())ue(L,D,ae)}function V(L,D,ae,ue,Ae){const he=T(L,D);if(he)return he;const Re=D===ps,we=wo?history.state:{};ae&&(ue||Re?s.replace(L.fullPath,_t({scroll:Re&&we&&we.scroll},Ae)):s.push(L.fullPath,Ae)),l.value=L,Y(L,D,ae,Re),H()}let _e;function me(){_e||(_e=s.listen((L,D,ae)=>{if(!De.listening)return;const ue=_(L),Ae=R(ue);if(Ae){F(_t(Ae,{replace:!0}),ue).catch(cl);return}c=ue;const he=l.value;wo&&Mk(n0(he.fullPath,ae.delta),pd()),A(ue,he).catch(Re=>ms(Re,12)?Re:ms(Re,2)?(F(Re.to,ue).then(we=>{ms(we,20)&&!ae.delta&&ae.type===Fl.pop&&s.go(-1,!1)}).catch(cl),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),$(Re,ue,he))).then(Re=>{Re=Re||V(ue,he,!1),Re&&(ae.delta?s.go(-ae.delta,!1):ae.type===Fl.pop&&ms(Re,20)&&s.go(-1,!1)),j(ue,he,Re)}).catch(cl)}))}let U=Fa(),ee=Fa(),G;function $(L,D,ae){H(L);const ue=ee.list();return ue.length?ue.forEach(Ae=>Ae(L,D,ae)):console.error(L),Promise.reject(L)}function q(){return G&&l.value!==ps?Promise.resolve():new Promise((L,D)=>{U.add([L,D])})}function H(L){return G||(G=!L,me(),U.list().forEach(([D,ae])=>L?ae(L):D()),U.reset()),L}function Y(L,D,ae,ue){const{scrollBehavior:Ae}=n;if(!wo||!Ae)return Promise.resolve();const he=!ae&&Tk(n0(L.fullPath,0))||(ue||!ae)&&history.state&&history.state.scroll||null;return fM().then(()=>Ae(L,D,he)).then(Re=>Re&&Ek(Re)).catch(Re=>$(Re,L,D))}const le=L=>s.go(L);let se;const re=new Set,De={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:f,getRoutes:m,resolve:_,options:n,push:M,replace:E,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:q,install(L){const D=this;L.component("RouterLink",hF),L.component("RouterView",eT),L.config.globalProperties.$router=D,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Er(l)}),wo&&!se&&l.value===ps&&(se=!0,M(s.location).catch(Ae=>{}));const ae={};for(const Ae in ps)ae[Ae]=Kn(()=>l.value[Ae]);L.provide(d_,D),L.provide(JM,Ta(ae)),L.provide($p,l);const ue=L.unmount;re.add(L),L.unmount=function(){re.delete(L),re.size<1&&(c=ps,_e&&_e(),_e=null,l.value=ps,se=!1,G=!1),ue()}}};return De}function io(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function gF(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>ia(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ia(c,l))||s.push(l))}return[t,i,s]}const _F={class:"app"},vF=Cn({__name:"App",setup(n){return(e,t)=>(Mt(),Ht("div",_F,[pt(Er(eT))]))}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const f_="142";const yF=0,m0=1,xF=2,tT=1,wF=2,Ka=3,Ul=0,mi=1,Gr=2,bF=1,ks=0,zo=1,g0=2,_0=3,v0=4,SF=5,bo=100,EF=101,MF=102,y0=103,x0=104,TF=200,CF=201,IF=202,AF=203,nT=204,iT=205,RF=206,PF=207,DF=208,LF=209,NF=210,OF=0,kF=1,FF=2,qp=3,UF=4,zF=5,BF=6,VF=7,sT=0,GF=1,HF=2,is=0,WF=1,$F=2,qF=3,jF=4,KF=5,rT=300,ra=301,oa=302,jp=303,Kp=304,md=306,Xp=1e3,ci=1001,Yp=1002,Rn=1003,w0=1004,b0=1005,$n=1006,XF=1007,gd=1008,Hr=1009,YF=1010,QF=1011,oT=1012,ZF=1013,mr=1014,gr=1015,zl=1016,JF=1017,eU=1018,Bo=1020,tU=1021,nU=1022,Pi=1023,iU=1024,sU=1025,Cr=1026,aa=1027,rU=1028,oU=1029,aU=1030,lU=1031,cU=1033,tf=33776,nf=33777,sf=33778,rf=33779,S0=35840,E0=35841,M0=35842,T0=35843,uU=36196,C0=37492,I0=37496,A0=37808,R0=37809,P0=37810,D0=37811,L0=37812,N0=37813,O0=37814,k0=37815,F0=37816,U0=37817,z0=37818,B0=37819,V0=37820,G0=37821,H0=36492,Wr=3e3,Ct=3001,hU=3200,dU=3201,fU=0,pU=1,$i="srgb",_r="srgb-linear",of=7680,mU=519,W0=35044,$0="300 es",Qp=1035;class Ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=Math.PI/180,q0=180/Math.PI;function xc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function kn(n,e,t){return Math.max(e,Math.min(t,n))}function gU(n,e){return(n%e+e)%e}function lf(n,e,t){return(1-t)*n+t*e}function j0(n){return(n&n-1)===0&&n!==0}function Zp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(){Yn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],m=s[0],f=s[3],_=s[6],w=s[1],T=s[4],M=s[7],E=s[2],R=s[5],F=s[8];return r[0]=o*m+a*w+l*E,r[3]=o*f+a*T+l*R,r[6]=o*_+a*M+l*F,r[1]=c*m+u*w+h*E,r[4]=c*f+u*T+h*R,r[7]=c*_+u*M+h*F,r[2]=d*m+p*w+g*E,r[5]=d*f+p*T+g*R,r[8]=d*_+p*M+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*i)*m,e[2]=(a*i-s*o)*m,e[3]=d*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+i*l,s[3]=t*o+i*c,s[6]=t*a+i*u,s[1]=-i*r+t*l,s[4]=-i*o+t*c,s[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function aT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function ph(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const cf={[$i]:{[_r]:Ir},[_r]:{[$i]:Eu}},ii={legacyMode:!0,get workingColorSpace(){return _r},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(cf[e]&&cf[e][t]!==void 0){const i=cf[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},lT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={r:0,g:0,b:0},si={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function uf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Gc(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ii.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=_r){return this.r=e,this.g=t,this.b=i,ii.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=_r){if(e=gU(e,1),t=kn(t,0,1),i=kn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=uf(o,r,e+1/3),this.g=uf(o,r,e),this.b=uf(o,r,e-1/3)}return ii.toWorkingColorSpace(this,s),this}setStyle(e,t=$i){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ii.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ii.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ii.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ii.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=$i){const i=lT[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$i){return ii.fromWorkingColorSpace(Gc(this,Ot),e),kn(Ot.r*255,0,255)<<16^kn(Ot.g*255,0,255)<<8^kn(Ot.b*255,0,255)<<0}getHexString(e=$i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_r){ii.fromWorkingColorSpace(Gc(this,Ot),t);const i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_r){return ii.fromWorkingColorSpace(Gc(this,Ot),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=$i){return ii.fromWorkingColorSpace(Gc(this,Ot),e),e!==$i?`color(${e} ${Ot.r} ${Ot.g} ${Ot.b})`:`rgb(${Ot.r*255|0},${Ot.g*255|0},${Ot.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(si),si.h+=e,si.s+=t,si.l+=i,this.setHSL(si.h,si.s,si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Vc);const i=lf(si.h,Vc.h,t),s=lf(si.s,Vc.s,t),r=lf(si.l,Vc.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}at.NAMES=lT;let so;class cT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{so===void 0&&(so=ph("canvas")),so.width=e.width,so.height=e.height;const i=so.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=so}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ph("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ir(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class uT{constructor(e=null){this.isSource=!0,this.uuid=xc(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hf(s[o].image)):r.push(hf(s[o]))}else r=hf(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function hf(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?cT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _U=0;class yi extends Ca{constructor(e=yi.DEFAULT_IMAGE,t=yi.DEFAULT_MAPPING,i=ci,s=ci,r=$n,o=gd,a=Pi,l=Hr,c=1,u=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_U++}),this.uuid=xc(),this.name="",this.source=new uT(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rT)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xp:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Yp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xp:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Yp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=rT;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(p+1)/2,E=(_+1)/2,R=(u+d)/4,F=(h+m)/4,S=(g+f)/4;return T>M&&T>E?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=R/i,r=F/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=S/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=F/r,s=S/r),this.set(i,s,r,t),this}let w=Math.sqrt((f-g)*(f-g)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(h-m)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $r extends Ca{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new yi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uT(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hT extends yi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vU extends yi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wc{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerp(e,t,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,s)}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==d||c!==p||u!==g){let f=1-a;const _=l*d+c*p+u*g+h*m,w=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const E=Math.sqrt(T),R=Math.atan2(E,_*w);f=Math.sin(f*R)/E,a=Math.sin(a*R)/E}const M=a*w;if(l=l*f+d*M,c=c*f+p*M,u=u*f+g*M,h=h*f+m*M,f===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(K0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(K0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,h=l*s+r*i-o*t,d=-r*t-o*i-a*s;return this.x=c*l+d*-r+u*-a-h*-o,this.y=u*l+d*-o+h*-r-c*-a,this.z=h*l+d*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const df=new N,K0=new wc;class bc{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<i&&(i=h),d<s&&(s=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<i&&(i=h),d<s&&(s=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Zs.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zs)}else i.boundingBox===null&&i.computeBoundingBox(),ff.copy(i.boundingBox),ff.applyMatrix4(e.matrixWorld),this.union(ff);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zs),Zs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Hc.subVectors(this.max,Ua),ro.subVectors(e.a,Ua),oo.subVectors(e.b,Ua),ao.subVectors(e.c,Ua),gs.subVectors(oo,ro),_s.subVectors(ao,oo),Js.subVectors(ro,ao);let t=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-Js.z,Js.y,gs.z,0,-gs.x,_s.z,0,-_s.x,Js.z,0,-Js.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-Js.y,Js.x,0];return!pf(t,ro,oo,ao,Hc)||(t=[1,0,0,0,1,0,0,0,1],!pf(t,ro,oo,ao,Hc))?!1:(Wc.crossVectors(gs,_s),t=[Wc.x,Wc.y,Wc.z],pf(t,ro,oo,ao,Hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Zs).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new N,new N,new N,new N,new N,new N,new N,new N],Zs=new N,ff=new bc,ro=new N,oo=new N,ao=new N,gs=new N,_s=new N,Js=new N,Ua=new N,Hc=new N,Wc=new N,er=new N;function pf(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){er.fromArray(n,r);const a=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=i.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yU=new bc,X0=new N,$c=new N,mf=new N;class _d{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yU.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){mf.subVectors(e,this.center);const t=mf.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.add(mf.multiplyScalar(s/i)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?$c.set(0,0,1).multiplyScalar(e.radius):$c.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(X0.copy(e.center).add($c)),this.expandByPoint(X0.copy(e.center).sub($c)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new N,gf=new N,qc=new N,vs=new N,_f=new N,jc=new N,vf=new N;class p_{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.direction).multiplyScalar(t).add(this.origin),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){gf.copy(e).add(t).multiplyScalar(.5),qc.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(gf);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qc),a=vs.dot(this.direction),l=-vs.dot(qc),c=vs.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const m=1/u;h*=m,d*=m,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(qc).multiplyScalar(d).add(gf),p}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||i!==i)&&(i=r),(o<s||s!==s)&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,r){_f.subVectors(t,e),jc.subVectors(i,e),vf.crossVectors(_f,jc);let o=this.direction.dot(vf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);const l=a*this.direction.dot(jc.crossVectors(vs,jc));if(l<0)return null;const c=a*this.direction.dot(_f.cross(vs));if(c<0||l+c>o)return null;const u=-a*vs.dot(vf);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,r,o,a,l,c,u,h,d,p,g,m,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/lo.setFromMatrixColumn(e,0).length(),r=1/lo.setFromMatrixColumn(e,1).length(),o=1/lo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-m*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xU,e,wU)}lookAt(e,t,i){const s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ys.crossVectors(i,Nn),ys.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ys.crossVectors(i,Nn)),ys.normalize(),Kc.crossVectors(Nn,ys),s[0]=ys.x,s[4]=Kc.x,s[8]=Nn.x,s[1]=ys.y,s[5]=Kc.y,s[9]=Nn.y,s[2]=ys.z,s[6]=Kc.z,s[10]=Nn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],m=i[6],f=i[10],_=i[14],w=i[3],T=i[7],M=i[11],E=i[15],R=s[0],F=s[4],S=s[8],A=s[12],j=s[1],V=s[5],_e=s[9],me=s[13],U=s[2],ee=s[6],G=s[10],$=s[14],q=s[3],H=s[7],Y=s[11],le=s[15];return r[0]=o*R+a*j+l*U+c*q,r[4]=o*F+a*V+l*ee+c*H,r[8]=o*S+a*_e+l*G+c*Y,r[12]=o*A+a*me+l*$+c*le,r[1]=u*R+h*j+d*U+p*q,r[5]=u*F+h*V+d*ee+p*H,r[9]=u*S+h*_e+d*G+p*Y,r[13]=u*A+h*me+d*$+p*le,r[2]=g*R+m*j+f*U+_*q,r[6]=g*F+m*V+f*ee+_*H,r[10]=g*S+m*_e+f*G+_*Y,r[14]=g*A+m*me+f*$+_*le,r[3]=w*R+T*j+M*U+E*q,r[7]=w*F+T*V+M*ee+E*H,r[11]=w*S+T*_e+M*G+E*Y,r[15]=w*A+T*me+M*$+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],m=e[7],f=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+m*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+f*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+_*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],m=e[13],f=e[14],_=e[15],w=h*f*c-m*d*c+m*l*p-a*f*p-h*l*_+a*d*_,T=g*d*c-u*f*c-g*l*p+o*f*p+u*l*_-o*d*_,M=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,E=g*h*l-u*m*l-g*a*d+o*m*d+u*a*f-o*h*f,R=t*w+i*T+s*M+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/R;return e[0]=w*F,e[1]=(m*d*r-h*f*r-m*s*p+i*f*p+h*s*_-i*d*_)*F,e[2]=(a*f*r-m*l*r+m*s*c-i*f*c-a*s*_+i*l*_)*F,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*F,e[4]=T*F,e[5]=(u*f*r-g*d*r+g*s*p-t*f*p-u*s*_+t*d*_)*F,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*_-t*l*_)*F,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*F,e[8]=M*F,e[9]=(g*h*r-u*m*r-g*i*p+t*m*p+u*i*_-t*h*_)*F,e[10]=(o*m*r-g*a*r+g*i*c-t*m*c-o*i*_+t*a*_)*F,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*F,e[12]=E*F,e[13]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*f+t*h*f)*F,e[14]=(g*a*s-o*m*s-g*i*l+t*m*l+o*i*f-t*a*f)*F,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*F,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,m=o*u,f=o*h,_=a*h,w=l*c,T=l*u,M=l*h,E=i.x,R=i.y,F=i.z;return s[0]=(1-(m+_))*E,s[1]=(p+M)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(p-M)*R,s[5]=(1-(d+_))*R,s[6]=(f+w)*R,s[7]=0,s[8]=(g+T)*F,s[9]=(f-w)*F,s[10]=(1-(d+m))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=lo.set(s[0],s[1],s[2]).length();const o=lo.set(s[4],s[5],s[6]).length(),a=lo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);const c=1/r,u=1/o,h=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),h=(i+s)/(i-s),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),u=1/(o-r),h=(t+e)*l,d=(i+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lo=new N,ri=new $t,xU=new N(0,0,0),wU=new N(1,1,1),ys=new N,Kc=new N,Nn=new N,Y0=new $t,Q0=new wc;class Sc{constructor(e=0,t=0,i=0,s=Sc.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Sc.DefaultOrder="XYZ";Sc.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bU=0;const Z0=new N,co=new wc,Gi=new $t,Xc=new N,za=new N,SU=new N,EU=new wc,J0=new N(1,0,0),ex=new N(0,1,0),tx=new N(0,0,1),MU={type:"added"},nx={type:"removed"};class ti extends Ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bU++}),this.uuid=xc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DefaultUp.clone();const e=new N,t=new Sc,i=new wc,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Yn}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=ti.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,t){return co.setFromAxisAngle(e,t),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis(ex,e)}rotateZ(e){return this.rotateOnAxis(tx,e)}translateOnAxis(e,t){return Z0.copy(e).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis(ex,e)}translateZ(e){return this.translateOnAxis(tx,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xc.copy(e):Xc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(za,Xc,this.up):Gi.lookAt(Xc,za,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),co.setFromRotationMatrix(Gi),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MU)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(nx)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,SU),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,EU,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ti.DefaultUp=new N(0,1,0);ti.DefaultMatrixAutoUpdate=!0;const oi=new N,Hi=new N,yf=new N,Wi=new N,uo=new N,ho=new N,ix=new N,xf=new N,wf=new N,bf=new N;class Ki{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Hi.subVectors(i,t),yf.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Hi),l=oi.dot(yf),c=Hi.dot(Hi),u=Hi.dot(yf),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wi),Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Wi),l.set(0,0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Hi.subVectors(e,t),oi.cross(Hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),oi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ki.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ki.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;uo.subVectors(s,i),ho.subVectors(r,i),xf.subVectors(e,i);const l=uo.dot(xf),c=ho.dot(xf);if(l<=0&&c<=0)return t.copy(i);wf.subVectors(e,s);const u=uo.dot(wf),h=ho.dot(wf);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(uo,o);bf.subVectors(e,r);const p=uo.dot(bf),g=ho.dot(bf);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ho,a);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return ix.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(ix,a);const _=1/(f+m+d);return o=m*_,a=d*_,t.copy(i).addScaledVector(uo,o).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let TU=0;class Ec extends Ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TU++}),this.uuid=xc(),this.name="",this.type="Material",this.blending=zo,this.side=Ul,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nT,this.blendDst=iT,this.blendEquation=bo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mU,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=of,this.stencilZFail=of,this.stencilZPass=of,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===bF;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==Ul&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dT extends Ec{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new N,Yc=new mt;class gi{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=W0,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new at),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new mt),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new N),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new Wt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yc.fromBufferAttribute(this,t),Yc.applyMatrix3(e),this.setXY(t,Yc.x,Yc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==W0&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class fT extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pT extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bn extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let CU=0;const Hn=new $t,Sf=new ti,fo=new N,On=new bc,Ba=new bc,Ut=new N;class xi extends Ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CU++}),this.uuid=xc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aT(e)?pT:fT)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yn().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _d);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ba.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(On.min,Ba.min),On.expandByPoint(Ut),Ut.addVectors(On.max,Ba.max),On.expandByPoint(Ut)):(On.expandByPoint(Ba.min),On.expandByPoint(Ba.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),Ut.add(fo)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let j=0;j<a;j++)c[j]=new N,u[j]=new N;const h=new N,d=new N,p=new N,g=new mt,m=new mt,f=new mt,_=new N,w=new N;function T(j,V,_e){h.fromArray(s,j*3),d.fromArray(s,V*3),p.fromArray(s,_e*3),g.fromArray(o,j*2),m.fromArray(o,V*2),f.fromArray(o,_e*2),d.sub(h),p.sub(h),m.sub(g),f.sub(g);const me=1/(m.x*f.y-f.x*m.y);!isFinite(me)||(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(me),w.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(me),c[j].add(_),c[V].add(_),c[_e].add(_),u[j].add(w),u[V].add(w),u[_e].add(w))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let j=0,V=M.length;j<V;++j){const _e=M[j],me=_e.start,U=_e.count;for(let ee=me,G=me+U;ee<G;ee+=3)T(i[ee+0],i[ee+1],i[ee+2])}const E=new N,R=new N,F=new N,S=new N;function A(j){F.fromArray(r,j*3),S.copy(F);const V=c[j];E.copy(V),E.sub(F.multiplyScalar(F.dot(V))).normalize(),R.crossVectors(S,V);const me=R.dot(u[j])<0?-1:1;l[j*4]=E.x,l[j*4+1]=E.y,l[j*4+2]=E.z,l[j*4+3]=me}for(let j=0,V=M.length;j<V;++j){const _e=M[j],me=_e.start,U=_e.count;for(let ee=me,G=me+U;ee<G;ee+=3)A(i[ee+0]),A(i[ee+1]),A(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(e.attributes[s]===void 0)continue;const o=i[s].array,a=e.attributes[s],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)d[g++]=c[p++]}return new gi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const sx=new $t,po=new p_,Ef=new _d,xs=new N,ws=new N,bs=new N,Mf=new N,Tf=new N,Cf=new N,Qc=new N,Zc=new N,Jc=new N,eu=new mt,tu=new mt,nu=new mt,If=new N,iu=new N;class Di extends ti{constructor(e=new xi,t=new dT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ef.copy(i.boundingSphere),Ef.applyMatrix4(r),e.ray.intersectsSphere(Ef)===!1)||(sx.copy(r).invert(),po.copy(e.ray).applyMatrix4(sx),i.boundingBox!==null&&po.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,d=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,f=p.length;m<f;m++){const _=p[m],w=s[_.materialIndex],T=Math.max(_.start,g.start),M=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let E=T,R=M;E<R;E+=3){const F=a.getX(E),S=a.getX(E+1),A=a.getX(E+2);o=su(this,w,e,po,l,c,u,h,d,F,S,A),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=m,w=f;_<w;_+=3){const T=a.getX(_),M=a.getX(_+1),E=a.getX(_+2);o=su(this,s,e,po,l,c,u,h,d,T,M,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,f=p.length;m<f;m++){const _=p[m],w=s[_.materialIndex],T=Math.max(_.start,g.start),M=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=T,R=M;E<R;E+=3){const F=E,S=E+1,A=E+2;o=su(this,w,e,po,l,c,u,h,d,F,S,A),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=m,w=f;_<w;_+=3){const T=_,M=_+1,E=_+2;o=su(this,s,e,po,l,c,u,h,d,T,M,E),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function IU(n,e,t,i,s,r,o,a){let l;if(e.side===mi?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side!==Gr,a),l===null)return null;iu.copy(a),iu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(iu);return c<t.near||c>t.far?null:{distance:c,point:iu.clone(),object:n}}function su(n,e,t,i,s,r,o,a,l,c,u,h){xs.fromBufferAttribute(s,c),ws.fromBufferAttribute(s,u),bs.fromBufferAttribute(s,h);const d=n.morphTargetInfluences;if(r&&d){Qc.set(0,0,0),Zc.set(0,0,0),Jc.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const f=d[g],_=r[g];f!==0&&(Mf.fromBufferAttribute(_,c),Tf.fromBufferAttribute(_,u),Cf.fromBufferAttribute(_,h),o?(Qc.addScaledVector(Mf,f),Zc.addScaledVector(Tf,f),Jc.addScaledVector(Cf,f)):(Qc.addScaledVector(Mf.sub(xs),f),Zc.addScaledVector(Tf.sub(ws),f),Jc.addScaledVector(Cf.sub(bs),f)))}xs.add(Qc),ws.add(Zc),bs.add(Jc)}n.isSkinnedMesh&&(n.boneTransform(c,xs),n.boneTransform(u,ws),n.boneTransform(h,bs));const p=IU(n,e,t,i,xs,ws,bs,If);if(p){a&&(eu.fromBufferAttribute(a,c),tu.fromBufferAttribute(a,u),nu.fromBufferAttribute(a,h),p.uv=Ki.getUV(If,xs,ws,bs,eu,tu,nu,new mt)),l&&(eu.fromBufferAttribute(l,c),tu.fromBufferAttribute(l,u),nu.fromBufferAttribute(l,h),p.uv2=Ki.getUV(If,xs,ws,bs,eu,tu,nu,new mt));const g={a:c,b:u,c:h,normal:new N,materialIndex:0};Ki.getNormal(xs,ws,bs,g.normal),p.face=g}return p}class Mc extends xi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(h,2));function g(m,f,_,w,T,M,E,R,F,S,A){const j=M/F,V=E/S,_e=M/2,me=E/2,U=R/2,ee=F+1,G=S+1;let $=0,q=0;const H=new N;for(let Y=0;Y<G;Y++){const le=Y*V-me;for(let se=0;se<ee;se++){const re=se*j-_e;H[m]=re*w,H[f]=le*T,H[_]=U,c.push(H.x,H.y,H.z),H[m]=0,H[f]=0,H[_]=R>0?1:-1,u.push(H.x,H.y,H.z),h.push(se/F),h.push(1-Y/S),$+=1}}for(let Y=0;Y<S;Y++)for(let le=0;le<F;le++){const se=d+le+ee*Y,re=d+le+ee*(Y+1),De=d+(le+1)+ee*(Y+1),L=d+(le+1)+ee*Y;l.push(se,re,L),l.push(re,De,L),q+=6}a.addGroup(p,q,A),p+=q,d+=$}}static fromJSON(e){return new Mc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=la(n[t]);for(const s in i)e[s]=i[s]}return e}const AU={clone:la,merge:on};var RU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Ec{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=RU,this.fragmentShader=PU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mT extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends mT{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=q0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(af*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return q0*2*Math.atan(Math.tan(af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(af*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mo=90,go=1;class DU extends ti{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new qn(mo,go,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(1,0,0)),this.add(s);const r=new qn(mo,go,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(-1,0,0)),this.add(r);const o=new qn(mo,go,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const a=new qn(mo,go,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new N(0,-1,0)),this.add(a);const l=new qn(mo,go,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const c=new qn(mo,go,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=is,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class gT extends yi{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ra,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LU extends $r{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gT(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mc(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:ks});r.uniforms.tEquirect.value=t;const o=new Di(s,r),a=t.minFilter;return t.minFilter===gd&&(t.minFilter=$n),new DU(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Af=new N,NU=new N,OU=new Yn;class rr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Af.subVectors(i,t).cross(NU.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Af),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||OU.getNormalMatrix(e),s=this.coplanarPoint(Af).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _o=new _d,ru=new N;class _T{constructor(e=new rr,t=new rr,i=new rr,s=new rr,r=new rr,o=new rr){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],d=i[8],p=i[9],g=i[10],m=i[11],f=i[12],_=i[13],w=i[14],T=i[15];return t[0].setComponents(a-s,h-l,m-d,T-f).normalize(),t[1].setComponents(a+s,h+l,m+d,T+f).normalize(),t[2].setComponents(a+r,h+c,m+p,T+_).normalize(),t[3].setComponents(a-r,h-c,m-p,T-_).normalize(),t[4].setComponents(a-o,h-u,m-g,T-w).normalize(),t[5].setComponents(a+o,h+u,m+g,T+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_o.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_o)}intersectsSprite(e){return _o.center.set(0,0,0),_o.radius=.7071067811865476,_o.applyMatrix4(e.matrixWorld),this.intersectsSphere(_o)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ru.x=s.normal.x>0?e.max.x:e.min.x,ru.y=s.normal.y>0?e.max.y:e.min.y,ru.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vT(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kU(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class g_ extends xi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],m=[],f=[];for(let _=0;_<u;_++){const w=_*d-o;for(let T=0;T<c;T++){const M=T*h-r;g.push(M,-w,0),m.push(0,0,1),f.push(T/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const T=w+c*_,M=w+c*(_+1),E=w+1+c*(_+1),R=w+1+c*_;p.push(T,M,R),p.push(M,E,R)}this.setIndex(p),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(m,3)),this.setAttribute("uv",new Bn(f,2))}static fromJSON(e){return new g_(e.width,e.height,e.widthSegments,e.heightSegments)}}var FU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,UU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zU=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,BU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HU="vec3 transformed = vec3( position );",WU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$U=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,qU=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,jU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,XU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ez=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tz=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nz=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,iz=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sz=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rz=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oz=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,az=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lz=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cz="gl_FragColor = linearToOutputTexel( gl_FragColor );",uz=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hz=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dz=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fz=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pz=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mz=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gz=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_z=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vz=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yz=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xz=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,wz=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bz=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sz=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Ez=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mz=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Tz=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cz=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Iz=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Az=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rz=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Pz=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dz=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lz=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nz=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Oz=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kz=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fz=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uz=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zz=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bz=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vz=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gz=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hz=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wz=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$z=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qz=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jz=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kz=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xz=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Yz=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zz=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jz=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eB=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,iB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rB=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oB=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,aB=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lB=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fB=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pB=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mB=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,gB=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_B=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vB=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yB=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xB=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EB=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MB=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,TB=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,CB=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,IB=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,AB=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,RB=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,PB=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,DB=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,LB=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OB=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FB=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UB=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zB=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BB=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VB=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HB=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,WB=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$B=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qB=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jB=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KB=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XB=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YB=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QB=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZB=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JB=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eV=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tV=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nV=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iV=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sV=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rV=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oV=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aV=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lV=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cV=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,uV=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hV=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:FU,alphamap_pars_fragment:UU,alphatest_fragment:zU,alphatest_pars_fragment:BU,aomap_fragment:VU,aomap_pars_fragment:GU,begin_vertex:HU,beginnormal_vertex:WU,bsdfs:$U,iridescence_fragment:qU,bumpmap_pars_fragment:jU,clipping_planes_fragment:KU,clipping_planes_pars_fragment:XU,clipping_planes_pars_vertex:YU,clipping_planes_vertex:QU,color_fragment:ZU,color_pars_fragment:JU,color_pars_vertex:ez,color_vertex:tz,common:nz,cube_uv_reflection_fragment:iz,defaultnormal_vertex:sz,displacementmap_pars_vertex:rz,displacementmap_vertex:oz,emissivemap_fragment:az,emissivemap_pars_fragment:lz,encodings_fragment:cz,encodings_pars_fragment:uz,envmap_fragment:hz,envmap_common_pars_fragment:dz,envmap_pars_fragment:fz,envmap_pars_vertex:pz,envmap_physical_pars_fragment:Mz,envmap_vertex:mz,fog_vertex:gz,fog_pars_vertex:_z,fog_fragment:vz,fog_pars_fragment:yz,gradientmap_pars_fragment:xz,lightmap_fragment:wz,lightmap_pars_fragment:bz,lights_lambert_vertex:Sz,lights_pars_begin:Ez,lights_toon_fragment:Tz,lights_toon_pars_fragment:Cz,lights_phong_fragment:Iz,lights_phong_pars_fragment:Az,lights_physical_fragment:Rz,lights_physical_pars_fragment:Pz,lights_fragment_begin:Dz,lights_fragment_maps:Lz,lights_fragment_end:Nz,logdepthbuf_fragment:Oz,logdepthbuf_pars_fragment:kz,logdepthbuf_pars_vertex:Fz,logdepthbuf_vertex:Uz,map_fragment:zz,map_pars_fragment:Bz,map_particle_fragment:Vz,map_particle_pars_fragment:Gz,metalnessmap_fragment:Hz,metalnessmap_pars_fragment:Wz,morphcolor_vertex:$z,morphnormal_vertex:qz,morphtarget_pars_vertex:jz,morphtarget_vertex:Kz,normal_fragment_begin:Xz,normal_fragment_maps:Yz,normal_pars_fragment:Qz,normal_pars_vertex:Zz,normal_vertex:Jz,normalmap_pars_fragment:eB,clearcoat_normal_fragment_begin:tB,clearcoat_normal_fragment_maps:nB,clearcoat_pars_fragment:iB,iridescence_pars_fragment:sB,output_fragment:rB,packing:oB,premultiplied_alpha_fragment:aB,project_vertex:lB,dithering_fragment:cB,dithering_pars_fragment:uB,roughnessmap_fragment:hB,roughnessmap_pars_fragment:dB,shadowmap_pars_fragment:fB,shadowmap_pars_vertex:pB,shadowmap_vertex:mB,shadowmask_pars_fragment:gB,skinbase_vertex:_B,skinning_pars_vertex:vB,skinning_vertex:yB,skinnormal_vertex:xB,specularmap_fragment:wB,specularmap_pars_fragment:bB,tonemapping_fragment:SB,tonemapping_pars_fragment:EB,transmission_fragment:MB,transmission_pars_fragment:TB,uv_pars_fragment:CB,uv_pars_vertex:IB,uv_vertex:AB,uv2_pars_fragment:RB,uv2_pars_vertex:PB,uv2_vertex:DB,worldpos_vertex:LB,background_vert:NB,background_frag:OB,cube_vert:kB,cube_frag:FB,depth_vert:UB,depth_frag:zB,distanceRGBA_vert:BB,distanceRGBA_frag:VB,equirect_vert:GB,equirect_frag:HB,linedashed_vert:WB,linedashed_frag:$B,meshbasic_vert:qB,meshbasic_frag:jB,meshlambert_vert:KB,meshlambert_frag:XB,meshmatcap_vert:YB,meshmatcap_frag:QB,meshnormal_vert:ZB,meshnormal_frag:JB,meshphong_vert:eV,meshphong_frag:tV,meshphysical_vert:nV,meshphysical_frag:iV,meshtoon_vert:sV,meshtoon_frag:rV,points_vert:oV,points_frag:aV,shadow_vert:lV,shadow_frag:cV,sprite_vert:uV,sprite_frag:hV},be={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yn},uv2Transform:{value:new Yn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yn}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yn}}},Ai={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.fog,be.lights,{emissive:{value:new at(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new at(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Yn},t2D:{value:null}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},cube:{uniforms:on([be.envmap,{opacity:{value:1}}]),vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Ai.physical={uniforms:on([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new mt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};function dV(n,e,t,i,s,r){const o=new at(0);let a=s===!0?0:1,l,c,u=null,h=0,d=null;function p(m,f){let _=!1,w=f.isScene===!0?f.background:null;w&&w.isTexture&&(w=e.get(w));const T=n.xr,M=T.getSession&&T.getSession();M&&M.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===md)?(c===void 0&&(c=new Di(new Mc(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:la(Ai.cube.uniforms),vertexShader:Ai.cube.vertexShader,fragmentShader:Ai.cube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(u!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Di(new g_(2,2),new Ui({name:"BackgroundMaterial",uniforms:la(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ul,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,h=w.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){t.buffers.color.setClear(m.r,m.g,m.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),a=f,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function fV(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null);let c=l,u=!1;function h(U,ee,G,$,q){let H=!1;if(o){const Y=m($,G,ee);c!==Y&&(c=Y,p(c.object)),H=_(U,$,G,q),H&&w(U,$,G,q)}else{const Y=ee.wireframe===!0;(c.geometry!==$.id||c.program!==G.id||c.wireframe!==Y)&&(c.geometry=$.id,c.program=G.id,c.wireframe=Y,H=!0)}q!==null&&t.update(q,34963),(H||u)&&(u=!1,S(U,ee,G,$),q!==null&&n.bindBuffer(34963,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function m(U,ee,G){const $=G.wireframe===!0;let q=a[U.id];q===void 0&&(q={},a[U.id]=q);let H=q[ee.id];H===void 0&&(H={},q[ee.id]=H);let Y=H[$];return Y===void 0&&(Y=f(d()),H[$]=Y),Y}function f(U){const ee=[],G=[],$=[];for(let q=0;q<s;q++)ee[q]=0,G[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:G,attributeDivisors:$,object:U,attributes:{},index:null}}function _(U,ee,G,$){const q=c.attributes,H=ee.attributes;let Y=0;const le=G.getAttributes();for(const se in le)if(le[se].location>=0){const De=q[se];let L=H[se];if(L===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(L=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(L=U.instanceColor)),De===void 0||De.attribute!==L||L&&De.data!==L.data)return!0;Y++}return c.attributesNum!==Y||c.index!==$}function w(U,ee,G,$){const q={},H=ee.attributes;let Y=0;const le=G.getAttributes();for(const se in le)if(le[se].location>=0){let De=H[se];De===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(De=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(De=U.instanceColor));const L={};L.attribute=De,De&&De.data&&(L.data=De.data),q[se]=L,Y++}c.attributes=q,c.attributesNum=Y,c.index=$}function T(){const U=c.newAttributes;for(let ee=0,G=U.length;ee<G;ee++)U[ee]=0}function M(U){E(U,0)}function E(U,ee){const G=c.newAttributes,$=c.enabledAttributes,q=c.attributeDivisors;G[U]=1,$[U]===0&&(n.enableVertexAttribArray(U),$[U]=1),q[U]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,ee),q[U]=ee)}function R(){const U=c.newAttributes,ee=c.enabledAttributes;for(let G=0,$=ee.length;G<$;G++)ee[G]!==U[G]&&(n.disableVertexAttribArray(G),ee[G]=0)}function F(U,ee,G,$,q,H){i.isWebGL2===!0&&(G===5124||G===5125)?n.vertexAttribIPointer(U,ee,G,q,H):n.vertexAttribPointer(U,ee,G,$,q,H)}function S(U,ee,G,$){if(i.isWebGL2===!1&&(U.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const q=$.attributes,H=G.getAttributes(),Y=ee.defaultAttributeValues;for(const le in H){const se=H[le];if(se.location>=0){let re=q[le];if(re===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){const De=re.normalized,L=re.itemSize,D=t.get(re);if(D===void 0)continue;const ae=D.buffer,ue=D.type,Ae=D.bytesPerElement;if(re.isInterleavedBufferAttribute){const he=re.data,Re=he.stride,we=re.offset;if(he.isInstancedInterleavedBuffer){for(let x=0;x<se.locationSize;x++)E(se.location+x,he.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let x=0;x<se.locationSize;x++)M(se.location+x);n.bindBuffer(34962,ae);for(let x=0;x<se.locationSize;x++)F(se.location+x,L/se.locationSize,ue,De,Re*Ae,(we+L/se.locationSize*x)*Ae)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<se.locationSize;he++)E(se.location+he,re.meshPerAttribute);U.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<se.locationSize;he++)M(se.location+he);n.bindBuffer(34962,ae);for(let he=0;he<se.locationSize;he++)F(se.location+he,L/se.locationSize,ue,De,L*Ae,L/se.locationSize*he*Ae)}}else if(Y!==void 0){const De=Y[le];if(De!==void 0)switch(De.length){case 2:n.vertexAttrib2fv(se.location,De);break;case 3:n.vertexAttrib3fv(se.location,De);break;case 4:n.vertexAttrib4fv(se.location,De);break;default:n.vertexAttrib1fv(se.location,De)}}}}R()}function A(){_e();for(const U in a){const ee=a[U];for(const G in ee){const $=ee[G];for(const q in $)g($[q].object),delete $[q];delete ee[G]}delete a[U]}}function j(U){if(a[U.id]===void 0)return;const ee=a[U.id];for(const G in ee){const $=ee[G];for(const q in $)g($[q].object),delete $[q];delete ee[G]}delete a[U.id]}function V(U){for(const ee in a){const G=a[ee];if(G[U.id]===void 0)continue;const $=G[U.id];for(const q in $)g($[q].object),delete $[q];delete G[U.id]}}function _e(){me(),u=!0,c!==l&&(c=l,p(c.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:_e,resetDefaultState:me,dispose:A,releaseStatesOfGeometry:j,releaseStatesOfProgram:V,initAttributes:T,enableAttribute:M,disableUnusedAttributes:R}}function pV(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(s)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function mV(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),d=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),f=n.getParameter(36347),_=n.getParameter(36348),w=n.getParameter(36349),T=d>0,M=o||e.has("OES_texture_float"),E=T&&M,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:T,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:R}}function gV(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new rr,a=new Yn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||i!==0||s;return s=d,t=u(h,p,0),i=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,_=n.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const w=r?0:i,T=w*4;let M=_.clippingState||null;l.value=M,M=u(g,d,T,p);for(let E=0;E!==T;++E)M[E]=t[E];_.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const m=h!==null?h.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const _=p+m*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<_)&&(f=new Float32Array(_));for(let T=0,M=p;T!==m;++T,M+=4)o.copy(h[T]).applyMatrix4(w,a),o.normal.toArray(f,M),f[M+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function _V(n){let e=new WeakMap;function t(o,a){return a===jp?o.mapping=ra:a===Kp&&(o.mapping=oa),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===jp||a===Kp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new LU(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class vV extends mT{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Io=4,rx=[.125,.215,.35,.446,.526,.582],cr=20,Rf=new vV,ox=new at;let Pf=null;const or=(1+Math.sqrt(5))/2,vo=1/or,ax=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,or,vo),new N(0,or,-vo),new N(vo,0,or),new N(-vo,0,or),new N(or,vo,0),new N(-or,vo,0)];class lx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Pf=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ux(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf),e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:zl,format:Pi,encoding:Wr,depthBuffer:!1},s=cx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cx(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yV(r)),this._blurMaterial=xV(r,e,t)}return s}_compileMaterial(e){const t=new Di(this._lodPlanes[0],e);this._renderer.compile(t,Rf)}_sceneToCubeUV(e,t,i,s){const a=new qn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ox),u.toneMapping=is,u.autoClear=!1;const p=new dT({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),g=new Di(new Mc,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(ox),m=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const T=this._cubeSize;ou(s,w*T,_>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ra||e.mapping===oa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ux());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Di(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ou(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Rf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ax[(s-1)%ax.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Di(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cr-1),m=r/g,f=isFinite(r)?1+Math.floor(u*m):cr;f>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${cr}`);const _=[];let w=0;for(let F=0;F<cr;++F){const S=F/m,A=Math.exp(-S*S/2);_.push(A),F===0?w+=A:F<f&&(w+=2*A)}for(let F=0;F<_.length;F++)_[F]=_[F]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const M=this._sizeLods[s],E=3*M*(s>T-Io?s-T+Io:0),R=4*(this._cubeSize-M);ou(t,E,R,3*M,2*M),l.setRenderTarget(t),l.render(h,Rf)}}function yV(n){const e=[],t=[],i=[];let s=n;const r=n-Io+1+rx.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Io?l=rx[o-n+Io-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,f=2,_=1,w=new Float32Array(m*g*p),T=new Float32Array(f*g*p),M=new Float32Array(_*g*p);for(let R=0;R<p;R++){const F=R%3*2/3-1,S=R>2?0:-1,A=[F,S,0,F+2/3,S,0,F+2/3,S+1,0,F,S,0,F+2/3,S+1,0,F,S+1,0];w.set(A,m*g*R),T.set(d,f*g*R);const j=[R,R,R,R,R,R];M.set(j,_*g*R)}const E=new xi;E.setAttribute("position",new gi(w,m)),E.setAttribute("uv",new gi(T,f)),E.setAttribute("faceIndex",new gi(M,_)),e.push(E),s>Io&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cx(n,e,t){const i=new $r(n,e,t);return i.texture.mapping=md,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ou(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xV(n,e,t){const i=new Float32Array(cr),s=new N(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function ux(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function hx(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function __(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wV(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===jp||l===Kp,u=l===ra||l===oa;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new lx(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new lx(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bV(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function SV(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)e.update(m[f],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let T=0,M=w.length;T<M;T+=3){const E=w[T+0],R=w[T+1],F=w[T+2];d.push(E,R,R,F,F,E)}}else{const w=g.array;m=g.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const E=T+0,R=T+1,F=T+2;d.push(E,R,R,F,F,E)}}const f=new(aT(d)?pT:fT)(d,1);f.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,f)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function EV(n,e,t,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(r,p,a,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,p,a,d*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function MV(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function TV(n,e){return n[0]-e[0]}function CV(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Df(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function IV(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==f){let G=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",G)};var g=G;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let j=0;M===!0&&(j=1),E===!0&&(j=2),R===!0&&(j=3);let V=u.attributes.position.count*j,_e=1;V>e.maxTextureSize&&(_e=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const me=new Float32Array(V*_e*4*f),U=new hT(me,V,_e,f);U.type=gr,U.needsUpdate=!0;const ee=j*4;for(let $=0;$<f;$++){const q=F[$],H=S[$],Y=A[$],le=V*_e*4*$;for(let se=0;se<q.count;se++){const re=se*ee;M===!0&&(o.fromBufferAttribute(q,se),q.normalized===!0&&Df(o,q),me[le+re+0]=o.x,me[le+re+1]=o.y,me[le+re+2]=o.z,me[le+re+3]=0),E===!0&&(o.fromBufferAttribute(H,se),H.normalized===!0&&Df(o,H),me[le+re+4]=o.x,me[le+re+5]=o.y,me[le+re+6]=o.z,me[le+re+7]=0),R===!0&&(o.fromBufferAttribute(Y,se),Y.normalized===!0&&Df(o,Y),me[le+re+8]=o.x,me[le+re+9]=o.y,me[le+re+10]=o.z,me[le+re+11]=Y.itemSize===4?o.w:1)}}_={count:f,texture:U,size:new mt(V,_e)},r.set(u,_),u.addEventListener("dispose",G)}let w=0;for(let M=0;M<p.length;M++)w+=p[M];const T=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let f=i[u.id];if(f===void 0||f.length!==m){f=[];for(let E=0;E<m;E++)f[E]=[E,0];i[u.id]=f}for(let E=0;E<m;E++){const R=f[E];R[0]=E,R[1]=p[E]}f.sort(CV);for(let E=0;E<8;E++)E<m&&f[E][1]?(a[E][0]=f[E][0],a[E][1]=f[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(TV);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let T=0;for(let E=0;E<8;E++){const R=a[E],F=R[0],S=R[1];F!==Number.MAX_SAFE_INTEGER&&S?(_&&u.getAttribute("morphTarget"+E)!==_[F]&&u.setAttribute("morphTarget"+E,_[F]),w&&u.getAttribute("morphNormal"+E)!==w[F]&&u.setAttribute("morphNormal"+E,w[F]),s[E]=S,T+=S):(_&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),w&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const M=u.morphTargetsRelative?1:1-T;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function AV(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const yT=new yi,xT=new hT,wT=new vU,bT=new gT,dx=[],fx=[],px=new Float32Array(16),mx=new Float32Array(9),gx=new Float32Array(4);function Ia(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=dx[s];if(r===void 0&&(r=new Float32Array(s),dx[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vd(n,e){let t=fx[e];t===void 0&&(t=new Int32Array(e),fx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function RV(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PV(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;n.uniform2fv(this.addr,e),Tn(t,e)}}function DV(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;n.uniform3fv(this.addr,e),Tn(t,e)}}function LV(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;n.uniform4fv(this.addr,e),Tn(t,e)}}function NV(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(Mn(t,i))return;gx.set(i),n.uniformMatrix2fv(this.addr,!1,gx),Tn(t,i)}}function OV(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(Mn(t,i))return;mx.set(i),n.uniformMatrix3fv(this.addr,!1,mx),Tn(t,i)}}function kV(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(Mn(t,i))return;px.set(i),n.uniformMatrix4fv(this.addr,!1,px),Tn(t,i)}}function FV(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UV(n,e){const t=this.cache;Mn(t,e)||(n.uniform2iv(this.addr,e),Tn(t,e))}function zV(n,e){const t=this.cache;Mn(t,e)||(n.uniform3iv(this.addr,e),Tn(t,e))}function BV(n,e){const t=this.cache;Mn(t,e)||(n.uniform4iv(this.addr,e),Tn(t,e))}function VV(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GV(n,e){const t=this.cache;Mn(t,e)||(n.uniform2uiv(this.addr,e),Tn(t,e))}function HV(n,e){const t=this.cache;Mn(t,e)||(n.uniform3uiv(this.addr,e),Tn(t,e))}function WV(n,e){const t=this.cache;Mn(t,e)||(n.uniform4uiv(this.addr,e),Tn(t,e))}function $V(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||yT,s)}function qV(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wT,s)}function jV(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bT,s)}function KV(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xT,s)}function XV(n){switch(n){case 5126:return RV;case 35664:return PV;case 35665:return DV;case 35666:return LV;case 35674:return NV;case 35675:return OV;case 35676:return kV;case 5124:case 35670:return FV;case 35667:case 35671:return UV;case 35668:case 35672:return zV;case 35669:case 35673:return BV;case 5125:return VV;case 36294:return GV;case 36295:return HV;case 36296:return WV;case 35678:case 36198:case 36298:case 36306:case 35682:return $V;case 35679:case 36299:case 36307:return qV;case 35680:case 36300:case 36308:case 36293:return jV;case 36289:case 36303:case 36311:case 36292:return KV}}function YV(n,e){n.uniform1fv(this.addr,e)}function QV(n,e){const t=Ia(e,this.size,2);n.uniform2fv(this.addr,t)}function ZV(n,e){const t=Ia(e,this.size,3);n.uniform3fv(this.addr,t)}function JV(n,e){const t=Ia(e,this.size,4);n.uniform4fv(this.addr,t)}function e4(n,e){const t=Ia(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function t4(n,e){const t=Ia(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n4(n,e){const t=Ia(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function i4(n,e){n.uniform1iv(this.addr,e)}function s4(n,e){n.uniform2iv(this.addr,e)}function r4(n,e){n.uniform3iv(this.addr,e)}function o4(n,e){n.uniform4iv(this.addr,e)}function a4(n,e){n.uniform1uiv(this.addr,e)}function l4(n,e){n.uniform2uiv(this.addr,e)}function c4(n,e){n.uniform3uiv(this.addr,e)}function u4(n,e){n.uniform4uiv(this.addr,e)}function h4(n,e,t){const i=e.length,s=vd(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2D(e[r]||yT,s[r])}function d4(n,e,t){const i=e.length,s=vd(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture3D(e[r]||wT,s[r])}function f4(n,e,t){const i=e.length,s=vd(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTextureCube(e[r]||bT,s[r])}function p4(n,e,t){const i=e.length,s=vd(t,i);n.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||xT,s[r])}function m4(n){switch(n){case 5126:return YV;case 35664:return QV;case 35665:return ZV;case 35666:return JV;case 35674:return e4;case 35675:return t4;case 35676:return n4;case 5124:case 35670:return i4;case 35667:case 35671:return s4;case 35668:case 35672:return r4;case 35669:case 35673:return o4;case 5125:return a4;case 36294:return l4;case 36295:return c4;case 36296:return u4;case 35678:case 36198:case 36298:case 36306:case 35682:return h4;case 35679:case 36299:case 36307:return d4;case 35680:case 36300:case 36308:case 36293:return f4;case 36289:case 36303:case 36311:case 36292:return p4}}class g4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=XV(t.type)}}class _4{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=m4(t.type)}}class v4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function _x(n,e){n.seq.push(e),n.map[e.id]=e}function y4(n,e,t){const i=n.name,s=i.length;for(Lf.lastIndex=0;;){const r=Lf.exec(i),o=Lf.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_x(t,c===void 0?new g4(a,n,e):new _4(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new v4(a),_x(t,h)),t=h}}}class Mu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);y4(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function vx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let x4=0;function w4(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function b4(n){switch(n){case Wr:return["Linear","( value )"];case Ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function yx(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+w4(n.getShaderSource(e),o)}else return s}function S4(n,e){const t=b4(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function E4(n,e){let t;switch(e){case WF:t="Linear";break;case $F:t="Reinhard";break;case qF:t="OptimizedCineon";break;case jF:t="ACESFilmic";break;case KF:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M4(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xa).join(`
`)}function T4(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function C4(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xa(n){return n!==""}function xx(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I4=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(n){return n.replace(I4,A4)}function A4(n,e){const t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jp(t)}const R4=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,P4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bx(n){return n.replace(P4,ST).replace(R4,D4)}function D4(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ST(n,e,t,i)}function ST(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L4(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tT?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wF?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ka&&(e="SHADOWMAP_TYPE_VSM"),e}function N4(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ra:case oa:e="ENVMAP_TYPE_CUBE";break;case md:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O4(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oa:e="ENVMAP_MODE_REFRACTION";break}return e}function k4(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sT:e="ENVMAP_BLENDING_MULTIPLY";break;case GF:e="ENVMAP_BLENDING_MIX";break;case HF:e="ENVMAP_BLENDING_ADD";break}return e}function F4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function U4(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=L4(t),c=N4(t),u=O4(t),h=k4(t),d=F4(t),p=t.isWebGL2?"":M4(t),g=T4(r),m=s.createProgram();let f,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Xa).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(Xa).join(`
`),_.length>0&&(_+=`
`)):(f=[Sx(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),_=[p,Sx(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Xe.tonemapping_pars_fragment:"",t.toneMapping!==is?E4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,S4("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),o=Jp(o),o=xx(o,t),o=wx(o,t),a=Jp(a),a=xx(a,t),a=wx(a,t),o=bx(o),a=bx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===$0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=w+f+o,M=w+_+a,E=vx(s,35633,T),R=vx(s,35632,M);if(s.attachShader(m,E),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),n.debug.checkShaderErrors){const A=s.getProgramInfoLog(m).trim(),j=s.getShaderInfoLog(E).trim(),V=s.getShaderInfoLog(R).trim();let _e=!0,me=!0;if(s.getProgramParameter(m,35714)===!1){_e=!1;const U=yx(s,E,"vertex"),ee=yx(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+U+`
`+ee)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(j===""||V==="")&&(me=!1);me&&(this.diagnostics={runnable:_e,programLog:A,vertexShader:{log:j,prefix:f},fragmentShader:{log:V,prefix:_}})}s.deleteShader(E),s.deleteShader(R);let F;this.getUniforms=function(){return F===void 0&&(F=new Mu(s,m)),F};let S;return this.getAttributes=function(){return S===void 0&&(S=C4(s,m)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=x4++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=R,this}let z4=0;class B4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new V4(e);t.set(e,i)}return t.get(e)}}class V4{constructor(e){this.id=z4++,this.code=e,this.usedTimes=0}}function G4(n,e,t,i,s,r,o){const a=new m_,l=new B4,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S,A,j,V,_e){const me=V.fog,U=_e.geometry,ee=S.isMeshStandardMaterial?V.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),$=!!G&&G.mapping===md?G.image.height:null,q=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const H=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Y=H!==void 0?H.length:0;let le=0;U.morphAttributes.position!==void 0&&(le=1),U.morphAttributes.normal!==void 0&&(le=2),U.morphAttributes.color!==void 0&&(le=3);let se,re,De,L;if(q){const Re=Ai[q];se=Re.vertexShader,re=Re.fragmentShader}else se=S.vertexShader,re=S.fragmentShader,l.update(S),De=l.getVertexShaderID(S),L=l.getFragmentShaderID(S);const D=n.getRenderTarget(),ae=S.alphaTest>0,ue=S.clearcoat>0,Ae=S.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:S.type,vertexShader:se,fragmentShader:re,defines:S.defines,customVertexShaderID:De,customFragmentShaderID:L,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:_e.isInstancedMesh===!0,instancingColor:_e.isInstancedMesh===!0&&_e.instanceColor!==null,supportsVertexTextures:d,outputEncoding:D===null?n.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Wr,map:!!S.map,matcap:!!S.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:$,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===pU,tangentSpaceNormalMap:S.normalMapType===fU,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Ct,clearcoat:ue,clearcoatMap:ue&&!!S.clearcoatMap,clearcoatRoughnessMap:ue&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!S.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!S.iridescenceMap,iridescenceThicknessMap:Ae&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===zo,alphaMap:!!S.alphaMap,alphaTest:ae,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!U.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!me,useFog:S.fog===!0,fogExp2:me&&me.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:_e.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:is,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gr,flipSided:S.side===mi,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)A.push(j),A.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(_(A,S),w(A,S),A.push(n.outputEncoding)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputEncoding),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.combine),S.push(A.vertexUvs),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function w(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),S.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),S.push(a.mask)}function T(S){const A=g[S.type];let j;if(A){const V=Ai[A];j=AU.clone(V.uniforms)}else j=S.uniforms;return j}function M(S,A){let j;for(let V=0,_e=c.length;V<_e;V++){const me=c[V];if(me.cacheKey===A){j=me,++j.usedTimes;break}}return j===void 0&&(j=new U4(n,A,S,r),c.push(j)),j}function E(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:M,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:F}}function H4(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function W4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ex(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mx(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,g,m,f){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:f},n[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=f),e++,_}function a(h,d,p,g,m,f){const _=o(h,d,p,g,m,f);p.transmission>0?i.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(h,d,p,g,m,f){const _=o(h,d,p,g,m,f);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||W4),i.length>1&&i.sort(d||Ex),s.length>1&&s.sort(d||Ex)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $4(){let n=new WeakMap;function e(i,s){let r;return n.has(i)===!1?(r=new Mx,n.set(i,[r])):s>=n.get(i).length?(r=new Mx,n.get(i).push(r)):r=n.get(i)[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function q4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new at};break;case"SpotLight":t={position:new N,direction:new N,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function j4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let K4=0;function X4(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Y4(n,e){const t=new q4,i=j4(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new N);const r=new N,o=new $t,a=new $t;function l(u,h){let d=0,p=0,g=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let m=0,f=0,_=0,w=0,T=0,M=0,E=0,R=0;u.sort(X4);const F=h!==!0?Math.PI:1;for(let A=0,j=u.length;A<j;A++){const V=u[A],_e=V.color,me=V.intensity,U=V.distance,ee=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=_e.r*me*F,p+=_e.g*me*F,g+=_e.b*me*F;else if(V.isLightProbe)for(let G=0;G<9;G++)s.probe[G].addScaledVector(V.sh.coefficients[G],me);else if(V.isDirectionalLight){const G=t.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity*F),V.castShadow){const $=V.shadow,q=i.get(V);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,s.directionalShadow[m]=q,s.directionalShadowMap[m]=ee,s.directionalShadowMatrix[m]=V.shadow.matrix,M++}s.directional[m]=G,m++}else if(V.isSpotLight){const G=t.get(V);if(G.position.setFromMatrixPosition(V.matrixWorld),G.color.copy(_e).multiplyScalar(me*F),G.distance=U,G.coneCos=Math.cos(V.angle),G.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),G.decay=V.decay,V.castShadow){const $=V.shadow,q=i.get(V);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,s.spotShadow[_]=q,s.spotShadowMap[_]=ee,s.spotShadowMatrix[_]=V.shadow.matrix,R++}s.spot[_]=G,_++}else if(V.isRectAreaLight){const G=t.get(V);G.color.copy(_e).multiplyScalar(me),G.halfWidth.set(V.width*.5,0,0),G.halfHeight.set(0,V.height*.5,0),s.rectArea[w]=G,w++}else if(V.isPointLight){const G=t.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity*F),G.distance=V.distance,G.decay=V.decay,V.castShadow){const $=V.shadow,q=i.get(V);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,s.pointShadow[f]=q,s.pointShadowMap[f]=ee,s.pointShadowMatrix[f]=V.shadow.matrix,E++}s.point[f]=G,f++}else if(V.isHemisphereLight){const G=t.get(V);G.skyColor.copy(V.color).multiplyScalar(me*F),G.groundColor.copy(V.groundColor).multiplyScalar(me*F),s.hemi[T]=G,T++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const S=s.hash;(S.directionalLength!==m||S.pointLength!==f||S.spotLength!==_||S.rectAreaLength!==w||S.hemiLength!==T||S.numDirectionalShadows!==M||S.numPointShadows!==E||S.numSpotShadows!==R)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=w,s.point.length=f,s.hemi.length=T,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=E,s.spotShadowMatrix.length=R,S.directionalLength=m,S.pointLength=f,S.spotLength=_,S.rectAreaLength=w,S.hemiLength=T,S.numDirectionalShadows=M,S.numPointShadows=E,S.numSpotShadows=R,s.version=K4++)}function c(u,h){let d=0,p=0,g=0,m=0,f=0;const _=h.matrixWorldInverse;for(let w=0,T=u.length;w<T;w++){const M=u[w];if(M.isDirectionalLight){const E=s.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),d++}else if(M.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const E=s.rectArea[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(_),p++}else if(M.isHemisphereLight){const E=s.hemi[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:s}}function Tx(n,e){const t=new Y4(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Q4(n,e){let t=new WeakMap;function i(r,o=0){let a;return t.has(r)===!1?(a=new Tx(n,e),t.set(r,[a])):o>=t.get(r).length?(a=new Tx(n,e),t.get(r).push(a)):a=t.get(r)[o],a}function s(){t=new WeakMap}return{get:i,dispose:s}}class Z4 extends Ec{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hU,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J4 extends Ec{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
      uniform float time;
      uniform float frequency;
      uniform float amplitude;

      varying vec3 worldPosition;
      varying float positionNoise;

      //	Classic Perlin 3D Noise
      //	by Stefan Gustavson
      //

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
        return 2.2 * n_xyz;
      }

      void main() {
        positionNoise = cnoise((position * frequency + time * 0.2)) * amplitude;

        worldPosition = position + positionNoise * position;
        vec4 mvPosition = modelViewMatrix * vec4(worldPosition, 1.);
        gl_Position = projectionMatrix * mvPosition;
      }
    `}fragmentShader(){return`
      uniform vec3 color;
      uniform float time;

      varying vec3 worldPosition;
      varying float positionNoise;

      void main() {
        gl_FragColor = vec4(color * 2. + positionNoise * 2., 1.);
      }
    `}}class xG extends MT{constructor(){super();gt(this,"torus",new vr);gt(this,"stars",new vr);gt(this,"torusMaterial");gt(this,"starsMaterials",[]);gt(this,"frequency",2);gt(this,"amplitude",.01);const t=new y_(10,8,32,200),i={color:{value:new at(2564431)},time:{value:0},frequency:{value:this.frequency},amplitude:{value:this.amplitude}};this.torusMaterial=new Ui({uniforms:i,fragmentShader:this.torusFragmentShader(),vertexShader:this.torusVertexShader(),side:Gr}),this.torus.add(new Di(t,this.torusMaterial)),this.object.add(this.torus);const s=(r,o,a)=>{const l=new xi,c=new Float32Array(r*3),u={color:{value:o},time:{value:0},eye:{value:new N(0,0,0)},size:{value:a}};for(let d=0;d<r;d++){const p=18-Math.random()*36,g=18-Math.random()*36,m=8-Math.random()*16;c.set([p,g,m],d*3)}l.setAttribute("position",new gi(c,3));const h=new Ui({uniforms:u,vertexShader:this.starsVertexShader(),fragmentShader:this.starsFragmentShader(),transparent:!0,depthWrite:!1});this.starsMaterials.push(h),this.stars.add(new mG(l,h))};this.object.add(this.stars),s(500,new at(16777215),40),s(150,new at(24167),70),s(150,new at(2564431),110),this.object.rotation.y=Math.PI/2,this.object.position.y=9.5}update(t,i,s){this.torus.rotation.z+=.1*t,this.stars.rotation.z+=.3*t,this.torusMaterial.uniforms.amplitude.value=this.amplitude,this.torusMaterial.uniforms.frequency.value=this.frequency,this.torusMaterial.uniforms.time.value=i;for(const r of this.starsMaterials)r.uniforms.time.value=i,r.uniforms.eye.value=s.camera.position}torusVertexShader(){return`   
      uniform float time;
      uniform float frequency;
      uniform float amplitude;

      varying float timeNoise;
      varying vec3 worldPosition;
      varying float positionNoise;

      //	Classic Perlin 3D Noise 
      //	by Stefan Gustavson
      //

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
      }

      void main() {
        timeNoise = cnoise(vec3(1,1,1) * 20. * time * 0.1);
        positionNoise = cnoise((position * frequency + time * 0.5)) * amplitude;

        worldPosition = position + (positionNoise) * position;
        vec4 mvPosition = modelViewMatrix * vec4(worldPosition, 1.);
        gl_Position = projectionMatrix * mvPosition;
      }
    `}torusFragmentShader(){return`
      uniform vec3 color;
      uniform float time;

      varying vec3 worldPosition;
      varying float positionNoise;
      varying float timeNoise;

      void main() {
        gl_FragColor = vec4((color * positionNoise * 100.), 1.);
      }
    `}starsVertexShader(){return`   
      varying vec3 worldPosition;

      uniform float time;
      uniform vec3 eye;
      uniform float size;

      //	Classic Perlin 3D Noise 
      //	by Stefan Gustavson
      //

      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P); // Integer part for indexing
        vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
      }

      void main() {
          worldPosition = (modelMatrix * vec4(position, 1.)).xyz;

          vec4 mvPosition = viewMatrix * vec4(worldPosition, 1.);

          float sizeNoise = size / 2. + cnoise(position) * size/2.;

          gl_PointSize = pow(sizeNoise - distance(eye, worldPosition),1.);

          gl_Position = projectionMatrix * mvPosition;
      }
    `}starsFragmentShader(){return`
      uniform vec3 color;
      uniform vec3 eye;
      varying vec3 worldPosition;

      void main() {

        vec2 cxy = gl_PointCoord * 2. - 1.;
        float alpha = (.99 - pow(dot(cxy,cxy), .1) + (-1.5/100. * distance(worldPosition, eye)));

        gl_FragColor = vec4( color, alpha );
      }
    `}}var Ln=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t};const wG=Cn({computed:{roomId(){return this.$route.params.id}},mounted(){const n=document.getElementById("webgl"),e=new vG(n);e.addEntity(new yG),e.addEntity(new xG),e.start()}}),bG={id:"webgl"};function SG(n,e,t,i,s,r){return Mt(),Ht("canvas",bG)}var EG=Ln(wG,[["render",SG]]);var TT=(n=>(n[n.SIGN_IN=0]="SIGN_IN",n[n.SIGN_UP=1]="SIGN_UP",n))(TT||{});const MG=Cn({setup(){return{ActiveTab:TT}},data(){return{emailSignIn:"",passwordSignIn:"",emailSignUp:"",userNameSignUp:"",passwordSignUp:"",passwordRepeatSignUp:"",activeTab:0}},methods:{signUp(){if(this.activeTab===1&&this.passwordSignUp.length!==0&&this.passwordSignUp===this.passwordRepeatSignUp){const n=gl(),e=ba();HC(n,this.emailSignUp,this.passwordSignUp).then(async t=>{const i=t.user;console.log("user",i);const s=qi(e,"users",`${i.uid}`);await V3(s,{userId:i.uid,displayName:this.userNameSignUp})}).catch(t=>{console.log(t),t.code,t.message})}},signIn(){if(this.activeTab!==0)return;const n=gl();WC(n,this.emailSignIn,this.passwordSignIn).then(e=>{e.user}).catch(e=>{console.log(e),e.code,e.message}),console.log("Sign in!")},changeTab(n){this.activeTab=n}},components:{Background:EG}}),ni=n=>(o_("data-v-05710100"),n=n(),a_(),n),TG={class:"background"},CG={class:"page-wrapper"},IG={class:"login-wrapper"},AG={class:"login-container"},RG=ni(()=>fe("h3",null,"Connect and play!",-1)),PG=ni(()=>fe("p",null,"Create your own room and share youtube videos with users from all around the world. Do this and much much more - sign up today.",-1)),DG=ni(()=>fe("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),LG=ni(()=>fe("p",null,"Already have an account?",-1)),NG=ni(()=>fe("h2",null,"Sign in",-1)),OG=ni(()=>fe("label",null,"Email",-1)),kG=["disabled"],FG=ni(()=>fe("label",null,"Password",-1)),UG=["disabled"],zG=["disabled"],BG=yc("Forgot password?"),VG=ni(()=>fe("h2",null,"Sign up",-1)),GG=ni(()=>fe("label",null,"Email",-1)),HG=["disabled"],WG=ni(()=>fe("label",null,"Username",-1)),$G=["disabled"],qG=ni(()=>fe("label",null,"Password",-1)),jG=["disabled"],KG=ni(()=>fe("label",null,"Repeat password",-1)),XG=["disabled"],YG=["disabled"];function QG(n,e,t,i,s,r){const o=xn("Background"),a=xn("RouterLink");return Mt(),Ht(yn,null,[fe("div",TG,[pt(o)]),fe("div",CG,[fe("div",IG,[fe("div",AG,[fe("div",{class:ns(["overlay",{right:n.activeTab===n.ActiveTab.SIGN_IN}])},[fe("div",{class:ns(["sign-in-info",{active:n.activeTab===n.ActiveTab.SIGN_IN,inactive:n.activeTab!==n.ActiveTab.SIGN_IN}])},[RG,PG,fe("button",{onClick:e[0]||(e[0]=()=>n.changeTab(n.ActiveTab.SIGN_UP))},"Sign up")],2),fe("div",{class:ns(["sign-up-info",{active:n.activeTab===n.ActiveTab.SIGN_UP,inactive:n.activeTab!==n.ActiveTab.SIGN_UP}])},[DG,LG,fe("button",{onClick:e[1]||(e[1]=()=>n.changeTab(n.ActiveTab.SIGN_IN))},"Sign in")],2)],2),fe("div",null,[NG,fe("form",{onSubmit:e[4]||(e[4]=kl((...l)=>n.signIn&&n.signIn(...l),["prevent"])),class:"sign-in-form"},[OG,Wn(fe("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>n.emailSignIn=l),disabled:n.activeTab!==n.ActiveTab.SIGN_IN},null,8,kG),[[Ii,n.emailSignIn]]),FG,Wn(fe("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=l=>n.passwordSignIn=l),disabled:n.activeTab!==n.ActiveTab.SIGN_IN},null,8,UG),[[Ii,n.passwordSignIn]]),fe("button",{type:"submit",disabled:n.activeTab!==n.ActiveTab.SIGN_IN},"Sign in",8,zG),pt(a,{to:""},{default:jn(()=>[BG]),_:1})],32)]),fe("div",null,[VG,fe("form",{onSubmit:e[9]||(e[9]=kl((...l)=>n.signUp&&n.signUp(...l),["prevent"])),class:"sign-up-form"},[GG,Wn(fe("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>n.emailSignUp=l),disabled:n.activeTab!==n.ActiveTab.SIGN_UP},null,8,HG),[[Ii,n.emailSignUp]]),WG,Wn(fe("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>n.userNameSignUp=l),disabled:n.activeTab!==n.ActiveTab.SIGN_UP},null,8,$G),[[Ii,n.userNameSignUp]]),qG,Wn(fe("input",{type:"password","onUpdate:modelValue":e[7]||(e[7]=l=>n.passwordSignUp=l),disabled:n.activeTab!==n.ActiveTab.SIGN_UP},null,8,jG),[[Ii,n.passwordSignUp]]),KG,Wn(fe("input",{type:"password","onUpdate:modelValue":e[8]||(e[8]=l=>n.passwordRepeatSignUp=l),disabled:n.activeTab!==n.ActiveTab.SIGN_UP},null,8,XG),[[Ii,n.passwordRepeatSignUp]]),fe("button",{type:"submit",disabled:n.activeTab!==n.ActiveTab.SIGN_UP},"Sign up",8,YG)],32)])])])])],64)}var ZG=Ln(MG,[["render",QG],["__scopeId","data-v-05710100"]]);const JG=Cn({props:{active:{type:Boolean,required:!0},activeBgColor:{type:String,required:!1},inactiveBgColor:{type:String,required:!1},activeTextColor:{type:String,required:!1},inactiveTextColor:{type:String,required:!1}},computed:{cssProps(){return{"--active-bg-color":this.activeBgColor,"--active-text-color":this.activeTextColor,"--inactive-bg-color":this.inactiveBgColor,"--inactive-text-color":this.inactiveTextColor}}}}),eH={class:"top-element"};function tH(n,e,t,i,s,r){return Mt(),Ht("div",{class:"wrapper",style:gc(n.cssProps)},[Mr(n.$slots,"element",{},void 0,!0),Mr(n.$slots,"extra-element",{},void 0,!0),fe("div",{class:ns(["top-wrapper",{active:n.active}])},[fe("div",eH,[Mr(n.$slots,"element",{},void 0,!0)])],2)],4)}var x_=Ln(JG,[["render",tH],["__scopeId","data-v-f312138a"]]);const nH=Cn({setup(){return{store:Jn("store")}},data(){return{player:null}},props:{room:{type:null,required:!0}},emits:["player-ready","player-state-change","player-playback-rate-change"],watch:{room:{handler(n,e){var t,i,s,r,o;if(n.videoId!==(e==null?void 0:e.videoId)&&n.videoId!==null&&((t=this.player)==null||t.loadVideoById(n.videoId,n.time)),n.host!==this.store.auth.userId){if(console.log(n.host,this.store.auth.userId),console.log("state",n),n.state!==(e==null?void 0:e.state))switch(n.state){case"playing":{(i=this.player)==null||i.playVideo(),(s=this.player)==null||s.seekTo(n.time,!0);break}case"paused":{(r=this.player)==null||r.pauseVideo();break}}n.rate!==(e==null?void 0:e.rate)&&((o=this.player)==null||o.setPlaybackRate(n.rate))}}}},beforeCreate(){window.onYouTubeIframeAPIReady=()=>{this.initYoutube()}},mounted(){if(document.getElementById("youtubeIframeApi"))this.initYoutube();else{const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",e.id="youtubeIframeApi";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},methods:{initYoutube(){const n=new window.YT.Player("player",{height:"100%",width:"100%",videoId:null,playerVars:{autoplay:0,playsinline:1,enablejsapi:1,modestbranding:1},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange,onPlaybackRateChange:this.onPlayerPlaybackRateChange,onError:e=>console.log("error",e)}});this.player=n},async onPlayerReady(){this.$emit("player-ready")},onPlayerStateChange(n){var e,t,i;n.data!==3&&this.store.auth.userId===((e=this.room)==null?void 0:e.host)&&(n.data===1?this.$emit("player-state-change",{state:"playing",time:(t=this.player)==null?void 0:t.getCurrentTime()}):n.data===2&&this.$emit("player-state-change",{state:"paused",time:(i=this.player)==null?void 0:i.getCurrentTime()}))},onPlayerPlaybackRateChange(n){this.$emit("player-playback-rate-change",{rate:n.data})}}}),iH={id:"player"};function sH(n,e,t,i,s,r){return Mt(),Ht("div",iH)}var rH=Ln(nH,[["render",sH]]);const Of=ba(),oH=Cn({setup(){return{store:Jn("store")}},data(){return{messages:[],messageInput:"",sendButtonHover:!1,unsubscribeOnMessageValue:null}},props:{roomId:{type:String,required:!1}},watch:{roomId:{async handler(n,e,t){if(this.messages=[],this.unsubscribeOnMessageValue&&this.unsubscribeOnMessageValue(),n){const i=Ls(Of,"rooms",`${n}`,"messages");this.unsubscribeOnMessageValue=ea(i,s=>{this.messages=s.docs.filter(r=>r.exists()).map(r=>r.data()).reverse()})}t(()=>{this.unsubscribeOnMessageValue&&this.unsubscribeOnMessageValue()})}}},created(){const n=Wg(Ls(Of,"rooms",`${this.roomId}`,"messages"),Cp("createdAt","desc"));this.unsubscribeOnMessageValue=ea(n,e=>{this.messages=e.docs.filter(t=>t.exists()).map(t=>t.data())})},methods:{async onSendMessage(){const n=Ls(Of,"rooms",`${this.roomId}`,"messages");console.log({senderId:this.store.auth.userId,senderName:this.store.auth.userName,text:this.messageInput,createdAt:It.now().valueOf()}),await qg(n,{senderId:this.store.auth.userId,senderName:this.store.auth.userName,text:this.messageInput,createdAt:It.now().valueOf()}),this.messageInput=""}},components:{ColorSlideEffect:x_}}),aH={class:"message-list"},lH={key:0,class:"message-sender"},cH={class:"message-bubble"},uH={class:"message-text"};function hH(n,e,t,i,s,r){const o=xn("ColorSlideEffect");return Mt(),Ht(yn,null,[fe("ul",aH,[(Mt(!0),Ht(yn,null,TM(n.messages,(a,l)=>(Mt(),Ht("li",{class:ns(["message-item",{"incoming-message":a.senderId!==n.store.auth.userId}])},[l===n.messages.length-1||n.messages[l+1].senderId!==a.senderId?(Mt(),Ht("p",lH,br(a.senderName),1)):AO("",!0),fe("div",cH,[fe("p",uH,br(a.text),1)])],2))),256))]),fe("form",{onSubmit:e[3]||(e[3]=kl((...a)=>n.onSendMessage&&n.onSendMessage(...a),["prevent"])),class:"send-message-form"},[Wn(fe("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>n.messageInput=a)},null,512),[[Ii,n.messageInput]]),pt(o,{active:n.sendButtonHover,"inactive-bg-color":"#6200ff","inactive-text-color":"white","active-bg-color":"#310080","active-text-color":"white"},{element:jn(()=>[fe("button",{type:"submit",onMouseover:e[1]||(e[1]=a=>n.sendButtonHover=!0),onMouseleave:e[2]||(e[2]=a=>n.sendButtonHover=!1)},"Send",32)]),_:1},8,["active"])],32)],64)}var dH=Ln(oH,[["render",hH],["__scopeId","data-v-611f3fce"]]);const tr=ba(),fH=Cn({setup(){return{store:Jn("store")}},data(){return{videoUrlInput:"",roomData:null,loadButtonHover:!1,unsubscribeOnRoomValue:null}},computed:{roomId(){return this.$route.params.id}},watch:{roomId:{async handler(n,e,t){if(this.roomData=null,this.unsubscribeOnRoomValue&&this.unsubscribeOnRoomValue(),e&&await this.removeUserFromRoom(e),n){const i=qi(tr,"rooms",`${n}`);this.unsubscribeOnRoomValue=ea(i,s=>{s.exists()&&(this.roomData=s.data())}),await this.addUserToRoom(n)}t(()=>{this.unsubscribeOnRoomValue&&this.unsubscribeOnRoomValue()})}}},created(){this.addUserToRoom(this.roomId)},methods:{async addUserToRoom(n){const e=Ls(tr,"rooms",`${n}`,"members");await qg(e,{userId:this.store.auth.userId})},async removeUserFromRoom(n){const e=Ls(tr,"rooms",`${n}`,"members"),t=Wg(e,vu("userId","==",this.store.auth.userId));(await VE(t)).forEach(async s=>{await G3(s.ref)})},async onPlayerReady(){const n=qi(tr,"rooms",`${this.roomId}`);this.unsubscribeOnRoomValue=ea(n,e=>{e.exists()&&(this.roomData=e.data()),console.log("roomchange",e.data())})},async onPlayerStateChange(n){const e=qi(tr,"rooms",`${this.roomId}`);await jd(e,n)},async onPlayerPlaybackRateChange(n){const e=qi(tr,"rooms",`${this.roomId}`);await jd(e,n)},async loadVideo(){const n=new URL(this.videoUrlInput),e=new URLSearchParams(n.search);if(e.has("v")){const t=e.get("v"),i=qi(tr,"rooms",`${this.roomId}`);await jd(i,{videoId:t})}}},components:{Video:rH,ColorSlideEffect:x_,Chat:dH}}),pH={class:"page-wrapper"},mH={class:"center"},gH={class:"player-container"},_H={class:"player-ratio-box"},vH={class:"player-wrapper"},yH={class:"chat-container"};function xH(n,e,t,i,s,r){const o=xn("Video"),a=xn("ColorSlideEffect"),l=xn("Chat");return Mt(),Ht("div",pH,[fe("div",mH,[fe("div",gH,[fe("div",_H,[fe("div",vH,[pt(o,{onPlayerReadyOnce:n.onPlayerReady,onPlayerStateChange:n.onPlayerStateChange,room:n.roomData},null,8,["onPlayerReadyOnce","onPlayerStateChange","room"])])])])]),fe("div",yH,[fe("form",{onSubmit:e[4]||(e[4]=kl(()=>{},["prevent"])),class:"load-video-container"},[Wn(fe("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>n.videoUrlInput=c),placeholder:"video url here"},null,512),[[Ii,n.videoUrlInput]]),pt(a,{active:n.loadButtonHover,"inactive-bg-color":"#6200ff","inactive-text-color":"white","active-bg-color":"#310080","active-text-color":"white"},{element:jn(()=>[fe("button",{onClick:e[1]||(e[1]=(...c)=>n.loadVideo&&n.loadVideo(...c)),onMouseover:e[2]||(e[2]=c=>n.loadButtonHover=!0),onMouseleave:e[3]||(e[3]=c=>n.loadButtonHover=!1)},"Load video",32)]),_:1},8,["active"])],32),pt(l,{roomId:n.roomId},null,8,["roomId"])])])}var wH=Ln(fH,[["render",xH],["__scopeId","data-v-39fb9464"]]);const bH={},SH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},EH=fe("path",{d:"M 16 5 C 12.144531 5 9 8.144531 9 12 C 9 14.410156 10.230469 16.550781 12.09375 17.8125 C 8.527344 19.34375 6 22.882813 6 27 L 8 27 C 8 22.570313 11.570313 19 16 19 C 20.429688 19 24 22.570313 24 27 L 26 27 C 26 22.882813 23.472656 19.34375 19.90625 17.8125 C 21.769531 16.550781 23 14.410156 23 12 C 23 8.144531 19.855469 5 16 5 Z M 16 7 C 18.773438 7 21 9.226563 21 12 C 21 14.773438 18.773438 17 16 17 C 13.226563 17 11 14.773438 11 12 C 11 9.226563 13.226563 7 16 7 Z"},null,-1),MH=[EH];function TH(n,e){return Mt(),Ht("svg",SH,MH)}var CH=Ln(bH,[["render",TH]]);const IH=Cn({props:{size:{type:Number,required:!0},color:{type:String,required:!1}},computed:{cssProps(){return{"--icon-color":this.color||"inherit","--icon-size":`${this.size}px`}}}});function AH(n,e,t,i,s,r){return Mt(),Ht("div",{class:"icon-wrapper",style:gc(n.cssProps)},[Mr(n.$slots,"default",{},void 0,!0)],4)}var RH=Ln(IH,[["render",AH],["__scopeId","data-v-a9ae993c"]]);const PH={},DH={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},LH=fe("path",{d:"M 16 3 C 14.355469 3 13 4.355469 13 6 C 13 7.125 13.632813 8.113281 14.5625 8.625 L 11.625 14.5 L 7.03125 11.21875 C 7.632813 10.667969 8 9.871094 8 9 C 8 7.355469 6.644531 6 5 6 C 3.355469 6 2 7.355469 2 9 C 2 10.347656 2.925781 11.46875 4.15625 11.84375 L 6 22 L 6 27 L 26 27 L 26 22 L 27.84375 11.84375 C 29.074219 11.46875 30 10.347656 30 9 C 30 7.355469 28.644531 6 27 6 C 25.355469 6 24 7.355469 24 9 C 24 9.871094 24.367188 10.667969 24.96875 11.21875 L 20.375 14.5 L 17.4375 8.625 C 18.367188 8.113281 19 7.125 19 6 C 19 4.355469 17.644531 3 16 3 Z M 16 5 C 16.5625 5 17 5.4375 17 6 C 17 6.5625 16.5625 7 16 7 C 15.4375 7 15 6.5625 15 6 C 15 5.4375 15.4375 5 16 5 Z M 5 8 C 5.5625 8 6 8.4375 6 9 C 6 9.5625 5.5625 10 5 10 C 4.4375 10 4 9.5625 4 9 C 4 8.4375 4.4375 8 5 8 Z M 27 8 C 27.5625 8 28 8.4375 28 9 C 28 9.5625 27.5625 10 27 10 C 26.4375 10 26 9.5625 26 9 C 26 8.4375 26.4375 8 27 8 Z M 16 10.25 L 19.09375 16.4375 L 20.59375 16.8125 L 25.59375 13.25 L 24.1875 21 L 7.8125 21 L 6.40625 13.25 L 11.40625 16.8125 L 12.90625 16.4375 Z M 8 23 L 24 23 L 24 25 L 8 25 Z"},null,-1),NH=[LH];function OH(n,e){return Mt(),Ht("svg",DH,NH)}var kH=Ln(PH,[["render",OH]]);const FH=Cn({data(){return{hover:!1}},props:{room:{type:Object,required:!0},onlineMembers:{type:Number,required:!0},hostDisplayName:{type:String,required:!0}},components:{User:CH,CustomIcon:RH,Crown:kH,ColorSlideEffect:x_}}),UH=n=>(o_("data-v-2c67511f"),n=n(),a_(),n),zH={class:"room-item"},BH={class:"top-row"},VH={class:"user-container"},GH={class:"host-container"},HH=UH(()=>fe("div",{class:"extra"},[fe("p",null,"Join")],-1));function WH(n,e,t,i,s,r){const o=xn("User"),a=xn("CustomIcon"),l=xn("Crown"),c=xn("ColorSlideEffect"),u=xn("RouterLink");return Mt(),vc(u,{to:{name:"room",params:{id:n.room.id}},class:"room-item-link",onMouseover:e[0]||(e[0]=h=>n.hover=!0),onMouseleave:e[1]||(e[1]=h=>n.hover=!1)},{default:jn(()=>[pt(c,{active:n.hover,"active-bg-color":"white","active-text-color":"#6200ff","inactive-bg-color":"#6200ff","inactive-text-color":"white"},{element:jn(()=>[fe("div",zH,[fe("div",BH,[fe("h4",null,br(n.room.name),1),fe("div",VH,[fe("div",null,br(n.onlineMembers),1),pt(a,{size:30},{default:jn(()=>[pt(o)]),_:1})])]),fe("div",GH,[fe("p",null,br(n.hostDisplayName),1),pt(a,{size:15},{default:jn(()=>[pt(l)]),_:1})])])]),"extra-element":jn(()=>[HH]),_:1},8,["active"])]),_:1},8,["to"])}var $H=Ln(FH,[["render",WH],["__scopeId","data-v-2c67511f"]]);const qH=Cn({props:{disableStartInView:{type:Boolean,required:!1},elementRef:{type:Object,required:!1}},mounted(){const n=this.elementRef.getBoundingClientRect();if(n.top<window.innerHeight+0&&n.bottom>0){const e=["been-in-view"];this.disableStartInView||e.push("start-in-view"),this.elementRef.classList.add(...e)}window.addEventListener("scroll",this.onScroll)},unmounted(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){if(this.elementRef){const n=this.elementRef.getBoundingClientRect();n.top<window.innerHeight+0&&n.bottom>0&&this.elementRef.classList.add("been-in-view")}}}});function jH(n,e,t,i,s,r){return Mr(n.$slots,"default")}var KH=Ln(qH,[["render",jH]]);const XH=Cn({data(){return{itemRefs:[],roomsExtended:[]}},props:{rooms:{type:Array,required:!0},membersByRoom:{type:Object,required:!0},hostByRoom:{type:Object,required:!0}},created(){this.roomsExtended=this.rooms.map(n=>({...n,addedWhileInView:!1}))},watch:{rooms:{handler(n,e){this.roomsExtended=n.map(t=>({...t,addedWhileInView:e.some(i=>i.id!==t.id)}))}}},methods:{setItemRef(n,e){n&&(this.itemRefs[e]=n)}},components:{RoomItem:$H,BeenInView:KH}}),YH={class:"room-list-wrapper"},QH={class:"room-list"};function ZH(n,e,t,i,s,r){const o=xn("RoomItem"),a=xn("BeenInView");return Mt(),Ht("div",YH,[fe("ul",QH,[(Mt(!0),Ht(yn,null,TM(n.roomsExtended,(l,c)=>(Mt(),vc(a,{elementRef:n.itemRefs[c],disableStartInView:l.addedWhileInView,key:l.id},{default:jn(()=>[fe("li",{ref_for:!0,ref:u=>n.setItemRef(u,c)},[pt(o,{room:l,onlineMembers:n.membersByRoom[l.id],hostDisplayName:n.hostByRoom[l.id]},null,8,["room","onlineMembers","hostDisplayName"])],512)]),_:2},1032,["elementRef","disableStartInView"]))),128))])])}var JH=Ln(XH,[["render",ZH],["__scopeId","data-v-3582401a"]]);const e5=Cn({props:{active:{type:Boolean,required:!0}}}),t5={class:"wrapper"},n5={class:"top-element"};function i5(n,e,t,i,s,r){return Mt(),Ht("div",t5,[Mr(n.$slots,"main-content",{},void 0,!0),fe("div",{class:ns(["top-wrapper",{active:n.active}])},[fe("div",n5,[Mr(n.$slots,"slide-content",{},void 0,!0)])],2)])}var s5=Ln(e5,[["render",i5],["__scopeId","data-v-3e8531af"]]);const cu=ba(),kf=2,r5=Cn({setup(){return{store:Jn("store")}},data(){return{unsubscribeOnRoomsValue:null,unsubscribeOnMemberByRoom:{},roomName:"",type:"private",rooms:[],membersByRoom:{},hostByRoom:{},hover:!1,firstVisible:null,lastVisible:null,userBasedQueryConstraints:new Map,search:""}},watch:{rooms:{handler(n,e){e.filter(s=>!n.some(r=>r.id===s.id)).forEach(s=>{var r,o;return(o=(r=this.unsubscribeOnMemberByRoom)[s.id])==null?void 0:o.call(r)}),n.filter(s=>!e.some(r=>r.id===s.id)).forEach(s=>{var o,a;(a=(o=this.unsubscribeOnMemberByRoom)[s.id])==null||a.call(o);const r=Ls(cu,"rooms",`${s.id}`,"members");this.unsubscribeOnMemberByRoom[s.id]=ea(r,async l=>{const c=l.docs.length;this.membersByRoom[s.id]=c})}),n.forEach(async s=>{if(!this.hostByRoom[s.id]){const r=qi(cu,"users",`${s.host}`),o=await BE(r);o.exists()?this.hostByRoom[s.id]=o.data().displayName:this.hostByRoom[s.id]="host not found"}})}},search:{handler(n){this.userBasedQueryConstraints.set("onSearch",[vu("name",">=",n),vu("name","<=",n+"\uF8FF")]),this.fetchRooms()}}},created(){this.fetchRooms()},unmounted(){this.unsubscribeOnRoomsValue&&this.unsubscribeOnRoomsValue()},methods:{async onCreateRoom(){const n=await this.createRoom();this.$router.push(`/rooms/${n}`)},async createRoom(){const n=Ls(cu,"rooms");return(await qg(n,{host:this.store.auth.userId,name:this.roomName,type:this.type,videoId:null,rate:1,time:0,state:"paused",createdAt:It.now().valueOf()})).id},changePage(n){this.lastVisible?(n==="previous"&&this.userBasedQueryConstraints.set("onPage",[z3(this.firstVisible),O3(kf)]),n==="next"&&this.userBasedQueryConstraints.set("onPage",[F3(this.lastVisible),wy(kf)])):this.userBasedQueryConstraints.delete("onPage"),this.fetchRooms()},switchTab(n){this.userBasedQueryConstraints.set("onType",[vu("type","==",`${n}`)]),this.fetchRooms()},async fetchRooms(){const n=Wg(Ls(cu,"rooms"),...this.userBasedQueryConstraints.has("onSearch")?[Cp("name")]:[],Cp("createdAt","desc"),...Array.from(this.userBasedQueryConstraints.values()).flatMap(t=>t),...this.userBasedQueryConstraints.has("onPage")?[]:[wy(kf)]),e=await VE(n);e.docs.length!==0&&(this.firstVisible=e.docs[0],this.lastVisible=e.docs[e.docs.length-1],this.unsubscribeOnRoomsValue&&this.unsubscribeOnRoomsValue(),this.unsubscribeOnRoomsValue=ea(n,async t=>{const i=t.docs.filter(s=>s.exists());this.rooms=i.map(s=>{const r=s.data();return{id:s.id,...r}})}))}},components:{RoomList:JH,ContentSlideEffect:s5}}),w_=n=>(o_("data-v-deb90e08"),n=n(),a_(),n),o5={class:"page-wrapper"},a5={class:"container"},l5={class:"create-room-wrapper"},c5={class:"input-container"},u5=w_(()=>fe("label",null,"Room name",-1)),h5={class:"input-container"},d5=w_(()=>fe("label",{for:"private"},"Private",-1)),f5=w_(()=>fe("label",{for:"public"},"Public",-1)),p5={class:"confirm-create-wrapper"},m5=yc("Are you sure you want to create "),g5={class:"type"},_5=yc(' room named "'),v5={class:"room-name"},y5=yc('"?'),x5={class:"room-list-wrapper"},w5={key:1};function b5(n,e,t,i,s,r){const o=xn("ContentSlideEffect"),a=xn("RoomList");return Mt(),Ht("div",o5,[fe("p",{onClick:e[0]||(e[0]=l=>n.changePage("previous"))},"Previous"),fe("p",{onClick:e[1]||(e[1]=l=>n.changePage("next"))},"Next"),fe("p",{onClick:e[2]||(e[2]=l=>n.switchTab("public"))},"public"),fe("p",{onClick:e[3]||(e[3]=l=>n.switchTab("private"))},"private"),Wn(fe("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>n.search=l)},null,512),[[Ii,n.search]]),fe("div",a5,[fe("div",null,[fe("div",l5,[pt(o,{active:n.hover},{"main-content":jn(()=>[fe("form",{onSubmit:e[8]||(e[8]=kl(()=>{},["prevent"]))},[fe("div",c5,[u5,Wn(fe("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=l=>n.roomName=l),required:""},null,512),[[Ii,n.roomName]])]),fe("div",h5,[Wn(fe("input",{type:"radio",id:"private",value:"private","onUpdate:modelValue":e[6]||(e[6]=l=>n.type=l)},null,512),[[Zy,n.type]]),d5,Wn(fe("input",{type:"radio",id:"public",value:"public","onUpdate:modelValue":e[7]||(e[7]=l=>n.type=l)},null,512),[[Zy,n.type]]),f5])],32)]),"slide-content":jn(()=>[fe("div",p5,[fe("p",null,[m5,fe("span",g5,br(n.type),1),_5,fe("span",v5,br(n.roomName),1),y5])])]),_:1},8,["active"]),fe("button",{onClick:e[9]||(e[9]=(...l)=>n.onCreateRoom&&n.onCreateRoom(...l)),onMouseover:e[10]||(e[10]=l=>n.hover=!0),onMouseleave:e[11]||(e[11]=l=>n.hover=!1)},"Create room",32)])]),fe("div",x5,[n.rooms.length?(Mt(),vc(a,{key:0,rooms:n.rooms,membersByRoom:n.membersByRoom,hostByRoom:n.hostByRoom},null,8,["rooms","membersByRoom","hostByRoom"])):(Mt(),Ht("p",w5,"No rooms found"))])])])}var S5=Ln(r5,[["render",b5],["__scopeId","data-v-deb90e08"]]);const b_=mF({history:Pk("/yt-watchmen/"),routes:[{path:"/",name:"login",component:ZG},{path:"/rooms",name:"rooms",component:S5,meta:{requiresAuth:!0}},{path:"/rooms/:id",name:"room",component:wH,meta:{requiresAuth:!0}}]}),E5=gl(),M5=()=>new Promise((n,e)=>{const t=cw(E5,i=>{t(),n(i)},e)});b_.beforeEach(async(n,e,t)=>{n.matched.some(s=>s.meta.requiresAuth)&&!await M5()?t("/"):t()});const T5=ba(),C5=gl(),nm=od(null),Tu=od(null),im=od(!1),I5=Ta({auth:{userId:nm,userName:Tu,loggedIn:im}});cw(C5,async n=>{if(n){nm.value=n.uid,Tu.value=n.displayName,im.value=!0;const e=qi(T5,"users",`${n.uid}`),t=await BE(e);t.exists()?(console.log("fetchUserMe",t.data().displayName),Tu.value=t.data().displayName):console.log("No such document!")}else nm.value=null,Tu.value=null,im.value=!1,b_.push("/")});const S_=hk(vF);S_.provide("store",I5);S_.use(b_);S_.mount("#app");