const kf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};kf();/**
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
 */const wu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw as(e)},as=function(t){return new Error("Firebase Database ("+wu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const bu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Of=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Of(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Cu=function(t){const e=bu(t);return ra.encodeByteArray(e,!0)},Tu=function(t){return Cu(t).replace(/\./g,"")},fo=function(t){try{return ra.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xf(t){return Su(void 0,t)}function Su(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mf(n)||(t[n]=Su(t[n],e[n]));return t}function Mf(t){return t!=="__proto__"}/**
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
 */class ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Df(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ru(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lf(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nu(){return wu.NODE_ADMIN===!0}function Ff(){return typeof indexedDB=="object"}function Uf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Wf="FirebaseError";class ls extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wf,Object.setPrototypeOf(this,ls.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Bf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ls(i,a,s)}}function Bf(t,e){return t.replace(Hf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Hf=/\{\$([^}]+)}/g;/**
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
 */function Hs(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
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
 */const Au=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Hs(fo(r[0])||""),n=Hs(fo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},$f=function(t){const e=Au(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vf=function(t){const e=Au(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function po(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Hi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rl(r)&&Rl(o)){if(!Hi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rl(t){return t!==null&&typeof t=="object"}/**
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
 */function cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ss(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class jf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qf(t,e){const n=new zf(t,e);return n.subscribe.bind(n)}class zf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Kf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=qr),i.error===void 0&&(i.error=qr),i.complete===void 0&&(i.complete=qr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qr(){}function hr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Gf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Yf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ai;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jf(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qf(t){return t===tn?void 0:t}function Jf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Zf={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},ep=oe.INFO,tp={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},np=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=tp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=ep,this._logHandler=np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const sp=(t,e)=>e.some(n=>t instanceof n);let Nl,Al;function ip(){return Nl||(Nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rp(){return Al||(Al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pu=new WeakMap,_o=new WeakMap,ku=new WeakMap,zr=new WeakMap,la=new WeakMap;function op(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Vt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pu.set(n,t)}).catch(()=>{}),la.set(e,t),e}function ap(t){if(_o.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_o.set(t,e)}let go={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ku.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lp(t){go=t(go)}function cp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Kr(this),e,...n);return ku.set(s,e.sort?e.sort():[e]),Vt(s)}:rp().includes(t)?function(...e){return t.apply(Kr(this),e),Vt(Pu.get(this))}:function(...e){return Vt(t.apply(Kr(this),e))}}function up(t){return typeof t=="function"?cp(t):(t instanceof IDBTransaction&&ap(t),sp(t,ip())?new Proxy(t,go):t)}function Vt(t){if(t instanceof IDBRequest)return op(t);if(zr.has(t))return zr.get(t);const e=up(t);return e!==t&&(zr.set(t,e),la.set(e,t)),e}const Kr=t=>la.get(t);function hp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Vt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Vt(o.result),l.oldVersion,l.newVersion,Vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const dp=["get","getKey","getAll","getAllKeys","count"],fp=["put","add","delete","clear"],Gr=new Map;function Pl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gr.get(e))return Gr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||dp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Gr.set(e,r),r}lp(t=>({...t,get:(e,n,s)=>Pl(e,n)||t.get(e,n,s),has:(e,n)=>!!Pl(e,n)||t.has(e,n)}));/**
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
 */class pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_p(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _p(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",kl="0.7.28";/**
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
 */const ca=new aa("@firebase/app"),gp="@firebase/app-compat",mp="@firebase/analytics-compat",vp="@firebase/analytics",yp="@firebase/app-check-compat",Ep="@firebase/app-check",Ip="@firebase/auth",wp="@firebase/auth-compat",bp="@firebase/database",Cp="@firebase/database-compat",Tp="@firebase/functions",Sp="@firebase/functions-compat",Rp="@firebase/installations",Np="@firebase/installations-compat",Ap="@firebase/messaging",Pp="@firebase/messaging-compat",kp="@firebase/performance",Op="@firebase/performance-compat",xp="@firebase/remote-config",Mp="@firebase/remote-config-compat",Dp="@firebase/storage",Lp="@firebase/storage-compat",Fp="@firebase/firestore",Up="@firebase/firestore-compat",Wp="firebase",Bp="9.9.0";/**
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
 */const Ou="[DEFAULT]",Hp={[mo]:"fire-core",[gp]:"fire-core-compat",[vp]:"fire-analytics",[mp]:"fire-analytics-compat",[Ep]:"fire-app-check",[yp]:"fire-app-check-compat",[Ip]:"fire-auth",[wp]:"fire-auth-compat",[bp]:"fire-rtdb",[Cp]:"fire-rtdb-compat",[Tp]:"fire-fn",[Sp]:"fire-fn-compat",[Rp]:"fire-iid",[Np]:"fire-iid-compat",[Ap]:"fire-fcm",[Pp]:"fire-fcm-compat",[kp]:"fire-perf",[Op]:"fire-perf-compat",[xp]:"fire-rc",[Mp]:"fire-rc-compat",[Dp]:"fire-gcs",[Lp]:"fire-gcs-compat",[Fp]:"fire-fst",[Up]:"fire-fst-compat","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
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
 */const $i=new Map,vo=new Map;function $p(t,e){try{t.container.addComponent(e)}catch(n){ca.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(vo.has(e))return ca.debug(`There were multiple attempts to register component ${e}.`),!1;vo.set(e,t);for(const n of $i.values())$p(n,t);return!0}function ua(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Vp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},_n=new li("app","Firebase",Vp);/**
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
 */class jp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=Bp;function qp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});const i=$i.get(s);if(i){if(Hi(t,i.options)&&Hi(n,i.config))return i;throw _n.create("duplicate-app",{appName:s})}const r=new Xf(s);for(const a of vo.values())r.addComponent(a);const o=new jp(t,n,r);return $i.set(s,o),o}function xu(t=Ou){const e=$i.get(t);if(!e)throw _n.create("no-app",{appName:t});return e}function jt(t,e,n){var s;let i=(s=Hp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ca.warn(a.join(" "));return}Yn(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zp="firebase-heartbeat-database",Kp=1,$s="firebase-heartbeat-store";let Yr=null;function Mu(){return Yr||(Yr=hp(zp,Kp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($s)}}}).catch(t=>{throw _n.create("storage-open",{originalErrorMessage:t.message})})),Yr}async function Gp(t){var e;try{return(await Mu()).transaction($s).objectStore($s).get(Du(t))}catch(n){throw _n.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Ol(t,e){var n;try{const i=(await Mu()).transaction($s,"readwrite");return await i.objectStore($s).put(e,Du(t)),i.done}catch(s){throw _n.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Du(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yp=1024,Qp=30*24*60*60*1e3;class Jp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Qp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xl(),{heartbeatsToSend:n,unsentEntries:s}=Xp(this._heartbeatsCache.heartbeats),i=Tu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xl(){return new Date().toISOString().substring(0,10)}function Xp(t,e=Yp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ml(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ml(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ff()?Uf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ml(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function e_(t){Yn(new pn("platform-logger",e=>new pp(e),"PRIVATE")),Yn(new pn("heartbeat",e=>new Jp(e),"PRIVATE")),jt(mo,kl,t),jt(mo,kl,"esm2017"),jt("fire-js","")}e_("");var t_="firebase",n_="9.9.0";/**
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
 */jt(t_,n_,"app");function ha(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Lu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s_=Lu,Fu=new li("auth","Firebase",Lu());/**
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
 */const Dl=new aa("@firebase/auth");function Pi(t,...e){Dl.logLevel<=oe.ERROR&&Dl.error(`Auth (${ci}): ${t}`,...e)}/**
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
 */function tt(t,...e){throw da(t,...e)}function dt(t,...e){return da(t,...e)}function i_(t,e,n){const s=Object.assign(Object.assign({},s_()),{[e]:n});return new li("auth","Firebase",s).create(e,{appName:t.name})}function da(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fu.create(t,...e)}function U(t,e,...n){if(!t)throw da(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pi(e),new Error(e)}function Tt(t,e){t||Et(e)}/**
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
 */const Ll=new Map;function It(t){Tt(t instanceof Function,"Expected a class definition");let e=Ll.get(t);return e?(Tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ll.set(t,e),e)}/**
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
 */function r_(t,e){const n=ua(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Hi(r,e!=null?e:{}))return i;tt(i,"already-initialized")}return n.initialize({options:e})}function o_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(It);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function yo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function a_(){return Fl()==="http:"||Fl()==="https:"}function Fl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function l_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a_()||Df()||"connection"in navigator)?navigator.onLine:!0}function c_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tt(n>e,"Short delay should be less than long delay!"),this.isMobile=oa()||Ru()}get(){return l_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fa(t,e){Tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Uu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const u_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const h_=new ui(3e4,6e4);function hi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function di(t,e,n,s,i={}){return Wu(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=cs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Uu.fetch()(Bu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Wu(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},u_),e);try{const i=new d_(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw wi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw i_(t,u,c);tt(t,u)}}catch(i){if(i instanceof ls)throw i;tt(t,"network-request-failed")}}async function fi(t,e,n,s,i={}){const r=await di(t,e,n,s,i);return"mfaPendingCredential"in r&&tt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Bu(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?fa(t.config,i):`${t.config.apiScheme}://${i}`}class d_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(dt(this.auth,"network-request-failed")),h_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=dt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function f_(t,e){return di(t,"POST","/v1/accounts:delete",e)}async function p_(t,e){return di(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ps(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function __(t,e=!1){const n=it(t),s=await n.getIdToken(e),i=pa(s);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ps(Qr(i.auth_time)),issuedAtTime:Ps(Qr(i.iat)),expirationTime:Ps(Qr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qr(t){return Number(t)*1e3}function pa(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const r=fo(s);return r?JSON.parse(r):(Pi("Failed to decode base64 JWT payload"),null)}catch(r){return Pi("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function g_(t){const e=pa(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ls&&m_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function m_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class v_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Vs(t,p_(n,{idToken:s}));U(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?I_(r.providerUserInfo):[],a=E_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Hu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function y_(t){const e=it(t);await Vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E_(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function I_(t){return t.map(e=>{var{providerId:n}=e,s=ha(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function w_(t,e){const n=await Wu(t,{},async()=>{const s=cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Bu(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):g_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await w_(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new js;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function kt(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class un{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ha(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Hu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Vs(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return __(this,e)}reload(){return y_(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Vi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vs(this,f_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,P=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:Q,isAnonymous:Ee,providerData:Ie,stsTokenManager:He}=n;U(V&&He,e,"internal-error");const Pt=js.fromJSON(this.name,He);U(typeof V=="string",e,"internal-error"),kt(h,e.name),kt(d,e.name),U(typeof Q=="boolean",e,"internal-error"),U(typeof Ee=="boolean",e,"internal-error"),kt(_,e.name),kt(m,e.name),kt(A,e.name),kt(S,e.name),kt(P,e.name),kt(F,e.name);const xe=new un({uid:V,auth:e,email:d,emailVerified:Q,displayName:h,isAnonymous:Ee,photoURL:m,phoneNumber:_,tenantId:A,stsTokenManager:Pt,createdAt:P,lastLoginAt:F});return Ie&&Array.isArray(Ie)&&(xe.providerData=Ie.map(rt=>Object.assign({},rt))),S&&(xe._redirectEventId=S),xe}static async _fromIdTokenResponse(e,n,s=!1){const i=new js;i.updateFromServerResponse(n);const r=new un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Vi(r),r}}/**
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
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$u.type="NONE";const Ul=$u;/**
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
 */function ki(t,e,n){return`firebase:${t}:${e}:${n}`}class Bn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ki(this.userKey,i.apiKey,r),this.fullPersistenceKey=ki("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Bn(It(Ul),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||It(Ul);const o=ki(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=un._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Bn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Bn(r,e,s))}}/**
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
 */function Wl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ku(e))return"Blackberry";if(Gu(e))return"Webos";if(_a(e))return"Safari";if((e.includes("chrome/")||ju(e))&&!e.includes("edge/"))return"Chrome";if(zu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vu(t=Se()){return/firefox\//i.test(t)}function _a(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ju(t=Se()){return/crios\//i.test(t)}function qu(t=Se()){return/iemobile/i.test(t)}function zu(t=Se()){return/android/i.test(t)}function Ku(t=Se()){return/blackberry/i.test(t)}function Gu(t=Se()){return/webos/i.test(t)}function fr(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b_(t=Se()){var e;return fr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function C_(){return Lf()&&document.documentMode===10}function Yu(t=Se()){return fr(t)||zu(t)||Gu(t)||Ku(t)||/windows phone/i.test(t)||qu(t)}function T_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qu(t,e=[]){let n;switch(t){case"Browser":n=Wl(Se());break;case"Worker":n=`${Wl(Se())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${s}`}/**
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
 */class S_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class R_{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bl(this),this.idTokenSubscription=new Bl(this),this.beforeStateQueue=new S_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Vi(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&It(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function pr(t){return it(t)}class Bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=qf(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class ga{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function N_(t,e){return di(t,"POST","/v1/accounts:update",e)}/**
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
 */async function A_(t,e){return fi(t,"POST","/v1/accounts:signInWithPassword",hi(t,e))}/**
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
 */async function P_(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}async function k_(t,e){return fi(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}/**
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
 */class qs extends ga{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return A_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return P_(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return N_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return k_(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hn(t,e){return fi(t,"POST","/v1/accounts:signInWithIdp",hi(t,e))}/**
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
 */const O_="http://localhost";class gn extends ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ha(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new gn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Hn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hn(e,n)}buildRequest(){const e={requestUri:O_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cs(n)}return e}}/**
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
 */function x_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M_(t){const e=Ss(Rs(t)).link,n=e?Ss(Rs(e)).deep_link_id:null,s=Ss(Rs(t)).deep_link_id;return(s?Ss(Rs(s)).link:null)||s||n||e||t}class ma{constructor(e){var n,s,i,r,o,a;const l=Ss(Rs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=x_((i=l.mode)!==null&&i!==void 0?i:null);U(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=M_(e);try{return new ma(n)}catch{return null}}}/**
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
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ma.parseLink(n);return U(s,"argument-error"),qs._fromEmailAndCode(e,s.code,s.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ju{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pi extends Ju{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ut extends pi{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Wt.credential(n,s)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class Bt extends pi{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class Ht extends pi{constructor(){super("twitter.com")}static credential(e,n){return gn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ht.credential(n,s)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function D_(t,e){return fi(t,"POST","/v1/accounts:signUp",hi(t,e))}/**
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
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await un._fromIdTokenResponse(e,s,i),o=Hl(s);return new mn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Hl(s);return new mn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Hl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ji extends ls{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ji(e,n,s,i)}}function Xu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(t,r,e,s):r})}async function L_(t,e,n=!1){const s=await Vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",s)}/**
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
 */async function F_(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await Vs(t,Xu(i,r,e,t),n);U(o.idToken,i,"internal-error");const a=pa(o.idToken);U(a,i,"internal-error");const{sub:l}=a;return U(t.uid===l,i,"user-mismatch"),mn._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&tt(i,"user-mismatch"),o}}/**
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
 */async function Zu(t,e,n=!1){const s="signIn",i=await Xu(t,s,e),r=await mn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function U_(t,e){return Zu(pr(t),e)}async function W_(t,e,n){const s=pr(t),i=await D_(s,{returnSecureToken:!0,email:e,password:n}),r=await mn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function B_(t,e,n){return U_(it(t),us.credential(e,n))}function H_(t,e,n,s){return it(t).onAuthStateChanged(e,n,s)}const qi="__sak";/**
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
 */class eh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $_(){const t=Se();return _a(t)||fr(t)}const V_=1e3,j_=10;class th extends eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$_()&&T_(),this.fallbackToPolling=Yu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);C_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,j_):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},V_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}th.type="LOCAL";const q_=th;/**
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
 */class nh extends eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nh.type="SESSION";const sh=nh;/**
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
 */function z_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new _r(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await z_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_r.receivers=[];/**
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
 */function va(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class K_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=va("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ft(){return window}function G_(t){ft().location.href=t}/**
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
 */function ih(){return typeof ft().WorkerGlobalScope!="undefined"&&typeof ft().importScripts=="function"}async function Y_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Q_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J_(){return ih()?self:null}/**
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
 */const rh="firebaseLocalStorageDb",X_=1,zi="firebaseLocalStorage",oh="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gr(t,e){return t.transaction([zi],e?"readwrite":"readonly").objectStore(zi)}function Z_(){const t=indexedDB.deleteDatabase(rh);return new _i(t).toPromise()}function Eo(){const t=indexedDB.open(rh,X_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(zi,{keyPath:oh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(zi)?e(s):(s.close(),await Z_(),e(await Eo()))})})}async function $l(t,e,n){const s=gr(t,!0).put({[oh]:e,value:n});return new _i(s).toPromise()}async function eg(t,e){const n=gr(t,!1).get(e),s=await new _i(n).toPromise();return s===void 0?null:s.value}function Vl(t,e){const n=gr(t,!0).delete(e);return new _i(n).toPromise()}const tg=800,ng=3;class ah{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ng)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ih()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_r._getInstance(J_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Y_(),!this.activeServiceWorker)return;this.sender=new K_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Q_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eo();return await $l(e,qi,"1"),await Vl(e,qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$l(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=gr(i,!1).getAll();return new _i(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ah.type="LOCAL";const sg=ah;/**
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
 */function ig(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=dt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",ig().appendChild(s)})}function og(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ui(3e4,6e4);/**
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
 */function ag(t,e){return e?It(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ya extends ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lg(t){return Zu(t.auth,new ya(t),t.bypassAuthState)}function cg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),F_(n,new ya(t),t.bypassAuthState)}async function ug(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),L_(n,new ya(t),t.bypassAuthState)}/**
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
 */class lh{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lg;case"linkViaPopup":case"linkViaRedirect":return ug;case"reauthViaPopup":case"reauthViaRedirect":return cg;default:tt(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hg=new ui(2e3,1e4);class Un extends lh{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hg.get())};e()}}Un.currentPopupAction=null;/**
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
 */const dg="pendingRedirect",Oi=new Map;class fg extends lh{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Oi.get(this.auth._key());if(!e){try{const s=await pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Oi.set(this.auth._key(),e)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pg(t,e){const n=mg(e),s=gg(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function _g(t,e){Oi.set(t._key(),e)}function gg(t){return It(t._redirectPersistence)}function mg(t){return ki(dg,t.config.apiKey,t.name)}async function vg(t,e,n=!1){const s=pr(t),i=ag(s,e),o=await new fg(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const yg=10*60*1e3;class Eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ig(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ch(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yg&&this.cachedEventUids.clear(),this.cachedEventUids.has(jl(e))}saveEventToCache(e){this.cachedEventUids.add(jl(e)),this.lastProcessedEventTime=Date.now()}}function jl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ch({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ig(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ch(t);default:return!1}}/**
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
 */async function wg(t,e={}){return di(t,"GET","/v1/projects",e)}/**
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
 */const bg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cg=/^https?/;async function Tg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wg(t);for(const n of e)try{if(Sg(n))return}catch{}tt(t,"unauthorized-domain")}function Sg(t){const e=yo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Cg.test(n))return!1;if(bg.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Rg=new ui(3e4,6e4);function ql(){const t=ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ng(t){return new Promise((e,n)=>{var s,i,r;function o(){ql(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ql(),n(dt(t,"network-request-failed"))},timeout:Rg.get()})}if(!((i=(s=ft().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ft().gapi)===null||r===void 0)&&r.load)o();else{const a=og("iframefcb");return ft()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},rg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xi=null,e})}let xi=null;function Ag(t){return xi=xi||Ng(t),xi}/**
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
 */const Pg=new ui(5e3,15e3),kg="__/auth/iframe",Og="emulator/auth/iframe",xg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fa(e,Og):`https://${t.config.authDomain}/${kg}`,s={apiKey:e.apiKey,appName:t.name,v:ci},i=Mg.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${cs(s).slice(1)}`}async function Lg(t){const e=await Ag(t),n=ft().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Dg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xg,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=ft().setTimeout(()=>{r(o)},Pg.get());function l(){ft().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Fg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ug=500,Wg=600,Bg="_blank",Hg="http://localhost";class zl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $g(t,e,n,s=Ug,i=Wg){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Fg),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Se().toLowerCase();n&&(a=ju(c)?Bg:n),Vu(c)&&(e=e||Hg,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(b_(c)&&a!=="_self")return Vg(e||"",a),new zl(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new zl(h)}function Vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const jg="__/auth/handler",qg="emulator/auth/handler";function Kl(t,e,n,s,i,r){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ci,eventId:i};if(e instanceof Ju){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",po(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof pi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${zg(t)}?${cs(a).slice(1)}`}function zg({config:t}){return t.emulator?fa(t,qg):`https://${t.authDomain}/${jg}`}/**
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
 */const Jr="webStorageSupport";class Kg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sh,this._completeRedirectFn=vg,this._overrideRedirectResult=_g}async _openPopup(e,n,s,i){var r;Tt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Kl(e,n,s,yo(),i);return $g(e,o,va())}async _openRedirect(e,n,s,i){return await this._originValidation(e),G_(Kl(e,n,s,yo(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Tt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Lg(e),s=new Eg(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jr,{type:Jr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Jr];o!==void 0&&n(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yu()||_a()||fr()}}const Gg=Kg;var Gl="@firebase/auth",Yl="0.20.5";/**
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
 */class Yg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jg(t){Yn(new pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{U(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qu(t)},u=new R_(a,l,c);return o_(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new pn("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(s=>new Yg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Gl,Yl,Qg(t)),jt(Gl,Yl,"esm2017")}/**
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
 */function Qn(t=xu()){const e=ua(t,"auth");return e.isInitialized()?e.getImmediate():r_(t,{popupRedirectResolver:Gg,persistence:[sg,q_,sh]})}Jg("Browser");const Ql="@firebase/database",Jl="0.13.3";/**
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
 */let uh="";function Xg(t){uh=t}/**
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
 */class Zg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class em{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const hh=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zg(e)}}catch{}return new em},ln=hh("localStorage"),Io=hh("sessionStorage");/**
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
 */const $n=new aa("@firebase/database"),tm=function(){let t=1;return function(){return t++}}(),dh=function(t){const e=Gf(t),n=new jf;n.update(e);const s=n.digest();return ra.encodeByteArray(s)},gi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=gi.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let hn=null,Xl=!0;const nm=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?($n.logLevel=oe.VERBOSE,hn=$n.log.bind($n),e&&Io.set("logging_enabled",!0)):typeof t=="function"?hn=t:(hn=null,Io.remove("logging_enabled"))},we=function(...t){if(Xl===!0&&(Xl=!1,hn===null&&Io.get("logging_enabled")===!0&&nm(!0)),hn){const e=gi.apply(null,t);hn(e)}},mi=function(t){return function(...e){we(t,...e)}},wo=function(...t){const e="FIREBASE INTERNAL ERROR: "+gi(...t);$n.error(e)},vn=function(...t){const e=`FIREBASE FATAL ERROR: ${gi(...t)}`;throw $n.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+gi(...t);$n.warn(e)},sm=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ea=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},im=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jn="[MIN_NAME]",yn="[MAX_NAME]",bn=function(t,e){if(t===e)return 0;if(t===Jn||e===yn)return-1;if(e===Jn||t===yn)return 1;{const n=Zl(t),s=Zl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},rm=function(t,e){return t===e?0:t<e?-1:1},Es=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},Ia=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ye(e[s]),n+=":",n+=Ia(t[e[s]]);return n+="}",n},fh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ph=function(t){w(!Ea(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},om=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},am=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const cm=new RegExp("^-?(0*)\\d{1,10}$"),um=-2147483648,hm=2147483647,Zl=function(t){if(cm.test(t)){const e=Number(t);if(e>=um&&e<=hm)return e}return null},hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},dm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class fm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class bo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bo.OWNER="owner";/**
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
 */const wa="5",_h="v",gh="s",mh="r",vh="f",yh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Eh="ls",Ih="p",Co="ac",wh="websocket",bh="long_polling";/**
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
 */class _m{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ch(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===wh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gm(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class mm{constructor(){this.counters_={}}incrementCounter(e,n=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xf(this.counters_)}}/**
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
 */const Xr={},Zr={};function ba(t){const e=t.toString();return Xr[e]||(Xr[e]=new mm),Xr[e]}function vm(t,e){const n=t.toString();return Zr[n]||(Zr[n]=e()),Zr[n]}/**
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
 */class ym{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&hs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ec="start",Em="close",Im="pLPCommand",wm="pRTLPCB",Th="id",Sh="pw",Rh="ser",bm="cb",Cm="seg",Tm="ts",Sm="d",Rm="dframe",Nh=1870,Ah=30,Nm=Nh-Ah,Am=25e3,Pm=3e4;class Wn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mi(e),this.stats_=ba(n),this.urlFn=l=>(this.appCheckToken&&(l[Co]=this.appCheckToken),Ch(n,bh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ym(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Pm)),im(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ca((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ec)this.id=a,this.password=l;else if(o===Em)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ec]="t",s[Rh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_h]=wa,this.transportSessionId&&(s[gh]=this.transportSessionId),this.lastSessionId&&(s[Eh]=this.lastSessionId),this.applicationId&&(s[Ih]=this.applicationId),this.appCheckToken&&(s[Co]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&yh.test(location.hostname)&&(s[mh]=vh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wn.forceAllow_=!0}static forceDisallow(){Wn.forceDisallow_=!0}static isAvailable(){return Wn.forceAllow_?!0:!Wn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!om()&&!am()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cu(n),i=fh(s,Nm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Rm]="t",s[Th]=e,s[Sh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ca{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tm(),window[Im+this.uniqueCallbackIdentifier]=e,window[wm+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ca.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Th]=this.myID,e[Sh]=this.myPW,e[Rh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ah+s.length<=Nh;){const o=this.pendingSegs.shift();s=s+"&"+Cm+i+"="+o.seg+"&"+Tm+i+"="+o.ts+"&"+Sm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Am)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const km=16384,Om=45e3;let Ki=null;typeof MozWebSocket!="undefined"?Ki=MozWebSocket:typeof WebSocket!="undefined"&&(Ki=WebSocket);class Ke{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mi(this.connId),this.stats_=ba(n),this.connURL=Ke.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_h]=wa,typeof location!="undefined"&&location.hostname&&yh.test(location.hostname)&&(o[mh]=vh),n&&(o[gh]=n),s&&(o[Eh]=s),i&&(o[Co]=i),r&&(o[Ih]=r),Ch(e,wh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ln.set("previous_websocket_failure",!0);try{let s;Nu(),this.mySock=new Ki(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ki!==null&&!Ke.forceDisallow_}static previouslyFailed(){return ln.isInMemoryStorage||ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Hs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=fh(n,km);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Om))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
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
 */class zs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of zs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zs.globalTransportInitialized_=!1;/**
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
 */const xm=6e4,Mm=5e3,Dm=10*1024,Lm=100*1024,eo="t",tc="d",Fm="s",nc="r",Um="e",sc="o",ic="a",rc="n",oc="p",Wm="h";class Bm{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mi("c:"+this.id+":"),this.transportManager_=new zs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(eo in e){const n=e[eo];n===ic?this.upgradeIfSecondaryHealthy_():n===nc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Es("t",e),s=Es("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:oc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ic,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Es("t",e),s=Es("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Es(eo,e);if(tc in e){const s=e[tc];if(n===Wm)this.onHandshake_(s);else if(n===rc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fm?this.onConnectionShutdown_(s):n===nc?this.onReset_(s):n===Um?wo("Server Error: "+s):n===sc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wa!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:oc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ph{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class kh{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Gi extends kh{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!oa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gi}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ac=32,lc=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ee("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Yt(t){return t.pieces_.length-t.pieceNum_}function he(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Ta(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Hm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ks(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Oh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function fe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=j(t),s=j(e);if(n===null)return e;if(n===s)return De(he(t),he(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $m(t,e){const n=Ks(t,0),s=Ks(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=bn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Sa(t,e){if(Yt(t)!==Yt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Yt(t)>Yt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Vm{constructor(e,n){this.errorPrefix_=n,this.parts_=Ks(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dr(this.parts_[s]);xh(this)}}function jm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dr(e),xh(t)}function qm(t){const e=t.parts_.pop();t.byteLength_-=dr(e),t.parts_.length>0&&(t.byteLength_-=1)}function xh(t){if(t.byteLength_>lc)throw new Error(t.errorPrefix_+"has a key path longer than "+lc+" bytes ("+t.byteLength_+").");if(t.parts_.length>ac)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ac+") or object contains a cycle "+nn(t))}function nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ra extends kh{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ra}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Is=1e3,zm=60*5*1e3,cc=30*1e3,Km=1.3,Gm=3e4,Ym="server_kill",uc=3;class bt extends Ph{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=bt.nextPersistentConnectionId_++,this.log_=mi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Is,this.maxReconnectDelay_=zm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Nu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ra.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ye(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ai,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;bt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_t(e,"w")){const s=Gn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$f(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wo("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gm&&(this.reconnectDelay_=Is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Km)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+bt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Bm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ym)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],po(this.interruptReasons_)&&(this.reconnectDelay_=Is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ia(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uc&&(this.reconnectDelay_=cc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uh.replace(/\./g,"-")]=1,oa()?e["framework.cordova"]=1:Ru()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gi.getInstance().currentlyOnline();return po(this.interruptReasons_)&&e}}bt.nextPersistentConnectionId_=0;bt.nextConnectionId_=0;/**
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
 */class mr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(Jn,e),i=new q(Jn,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
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
 */let bi;class Mh extends mr{static get __EMPTY_NODE(){return bi}static set __EMPTY_NODE(e){bi=e}compare(e,n){return bn(e.name,n.name)}isDefinedOn(e){throw as("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(yn,bi)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,bi)}toString(){return".key"}}const Vn=new Mh;/**
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
 */class Ci{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:me.RED,this.left=i!=null?i:Le.EMPTY_NODE,this.right=r!=null?r:Le.EMPTY_NODE}copy(e,n,s,i,r){return new me(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class Qm{copy(e,n,s,i,r){return this}insert(e,n,s){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ci(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ci(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new Qm;/**
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
 */function Jm(t,e){return bn(t.name,e.name)}function Na(t,e){return bn(t,e)}/**
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
 */let To;function Xm(t){To=t}const Dh=function(t){return typeof t=="number"?"number:"+ph(t):"string:"+t},Lh=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else w(t===To||t.isEmpty(),"priority of unexpected type.");w(t===To||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let hc;class ge{constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lh(this.priorityNode_)}static set __childrenNodeConstructor(e){hc=e}static get __childrenNodeConstructor(){return hc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:j(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=j(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Yt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(he(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ph(this.value_):e+=this.value_,this.lazyHash_=dh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),r=ge.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fh,Uh;function Zm(t){Fh=t}function ev(t){Uh=t}class tv extends mr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?bn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(yn,new ge("[PRIORITY-POST]",Uh))}makePost(e,n){const s=Fh(e);return new q(n,new ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new tv;/**
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
 */const nv=Math.log(2);class sv{constructor(e){const n=r=>parseInt(Math.log(r)/nv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new me(d,h.node,me.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),A=i(_+1,c);return h=t[_],d=n?n(h):h,new me(d,h.node,me.BLACK,m,A)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,A){const S=h-m,P=h;h-=m;const F=i(S+1,P),V=t[S],Q=n?n(V):V;_(new me(Q,V.node,A,null,F))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const A=l.nextBitIsOne(),S=Math.pow(2,l.count-(m+1));A?d(S,me.BLACK):(d(S,me.BLACK),d(S,me.RED))}return u},o=new sv(t.length),a=r(o);return new Le(s||e,a)};/**
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
 */let to;const kn={};class wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(kn&&pe,"ChildrenNode.ts has not been loaded"),to=to||new wt({".priority":kn},{".priority":pe}),to}get(e){const n=Gn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,n){w(e!==Vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Yi(s,e.getCompare()):a=kn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new wt(u,c)}addToIndexes(e,n){const s=Bi(this.indexes_,(i,r)=>{const o=Gn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===kn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Yi(a,o.getCompare())}else return kn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new wt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Bi(this.indexes_,i=>{if(i===kn)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new wt(s,this.indexSet_)}}/**
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
 */let ws;class L{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Lh(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ws||(ws=new L(new Le(Na),null,wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ws}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ws:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(he(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ws:this.priorityNode_;return new L(i,o,r)}}updateChild(e,n){const s=j(e);if(s===null)return n;{w(j(e)!==".priority"||Yt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(he(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,a)=>{n[o]=a.val(e),s++,r&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dh(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":dh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vi?-1:0}withIndex(e){if(e===Vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iv extends L{constructor(){super(new Le(Na),L.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const vi=new iv;Object.defineProperties(q,{MIN:{value:new q(Jn,L.EMPTY_NODE)},MAX:{value:new q(yn,vi)}});Mh.__EMPTY_NODE=L.EMPTY_NODE;ge.__childrenNodeConstructor=L;Xm(vi);ev(vi);/**
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
 */const rv=!0;function ve(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,ve(e))}if(!(t instanceof Array)&&rv){const n=[];let s=!1;if(Ce(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ve(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return L.EMPTY_NODE;const r=Yi(n,Jm,o=>o.name,Na);if(s){const o=Yi(n,pe.getCompare());return new L(r,ve(e),new wt({".priority":o},{".priority":pe}))}else return new L(r,ve(e),wt.Default)}else{let n=L.EMPTY_NODE;return Ce(t,(s,i)=>{if(_t(t,s)&&s.substring(0,1)!=="."){const r=ve(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ve(e))}}Zm(ve);/**
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
 */class ov extends mr{constructor(e){super(),this.indexPath_=e,w(!K(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?bn(e.name,n.name):r}makePost(e,n){const s=ve(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,vi);return new q(yn,e)}toString(){return Ks(this.indexPath_,0).join("/")}}/**
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
 */class av extends mr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?bn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=ve(e);return new q(n,s)}toString(){return".value"}}const lv=new av;/**
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
 */const dc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cv=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=dc.charAt(n%64),n=Math.floor(n/64);w(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=dc.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function Wh(t){return{type:"value",snapshotNode:t}}function Xn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ys(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Aa{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Gs(n,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xn(n,s)):o.trackChildChange(Ys(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Gs(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ys(i,r,o))}else s.trackChildChange(Xn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Qs{constructor(e){this.indexedFilter_=new Aa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qs.getStartPost_(e),this.endPost_=Qs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,a)=>{r.matches(new q(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class hv{constructor(e){this.rangedFilter_=new Qs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=L.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,_)=>h(_,d)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(r,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:i=i.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const l=new q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ys(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Gs(n,h));const A=a.updateImmediateChild(n,L.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Xn(d.name,d.node)),A.updateImmediateChild(d.name,d.node)):A}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Gs(c.name,c.node)),r.trackChildChange(Xn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
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
 */class Pa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new Pa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dv(t){return t.loadsAllData()?new Aa(t.getIndex()):t.hasLimit()?new hv(t):new Qs(t)}function fc(t){const e={};if(t.isDefault())return e;let n;return t.index_===pe?n="$priority":t.index_===lv?n="$value":t.index_===Vn?n="$key":(w(t.index_ instanceof ov,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_&&(e.startAt=ye(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ye(t.indexStartName_))),t.endSet_&&(e.endAt=ye(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ye(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function pc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
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
 */class Qi extends Ph{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=mi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qi.getListenId_(e,s),a={};this.listens_[o]=a;const l=fc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Gn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Qi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fc(e._queryParams),s=e._path.toString(),i=new ai;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+cs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hs(a.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class fv{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ji(){return{value:null,children:new Map}}function Bh(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=j(e);t.children.has(s)||t.children.set(s,Ji());const i=t.children.get(s);e=he(e),Bh(i,e,n)}}function So(t,e,n){t.value!==null?n(e,t.value):pv(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);So(i,r,n)})}function pv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class _v{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const _c=10*1e3,gv=30*1e3,mv=5*60*1e3;class vv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new _v(e);const s=_c+(gv-_c)*Math.random();ks(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ce(e,(i,r)=>{r>0&&_t(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*mv))}}/**
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
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function ka(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Xi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=ka()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new Xi(X(),n,this.revert)}}else return w(j(this.path)===e,"operationForChild called for unrelated child."),new Xi(he(this.path),this.affectedTree,this.revert)}}/**
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
 */class Js{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Js(this.source,X()):new Js(this.source,he(this.path))}}/**
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
 */class En{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return K(this.path)?new En(this.source,X(),this.snap.getImmediateChild(e)):new En(this.source,he(this.path),this.snap)}}/**
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
 */class Zn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new En(this.source,X(),n.value):new Zn(this.source,X(),n)}else return w(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zn(this.source,he(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class In{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class yv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ev(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(uv(o.childName,o.snapshotNode))}),bs(t,i,"child_removed",e,s,n),bs(t,i,"child_added",e,s,n),bs(t,i,"child_moved",r,s,n),bs(t,i,"child_changed",e,s,n),bs(t,i,"value",e,s,n),i}function bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>wv(t,a,l)),o.forEach(a=>{const l=Iv(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Iv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wv(t,e,n){if(e.childName==null||n.childName==null)throw as("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function vr(t,e){return{eventCache:t,serverCache:e}}function Os(t,e,n,s){return vr(new In(e,n,s),t.serverCache)}function Hh(t,e,n,s){return vr(t.eventCache,new In(e,n,s))}function Ro(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function wn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let no;const bv=()=>(no||(no=new Le(rm)),no);class ue{constructor(e,n=bv()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return Ce(e,(s,i)=>{n=n.set(new ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(K(e))return null;{const s=j(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(he(e),n);return r!=null?{path:fe(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=j(e),s=this.children.get(n);return s!==null?s.subtree(he(e)):new ue(null)}}set(e,n){if(K(e))return new ue(n,this.children);{const s=j(e),r=(this.children.get(s)||new ue(null)).set(he(e),n),o=this.children.insert(s,r);return new ue(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=j(e),s=this.children.get(n);if(s){const i=s.remove(he(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ue(null):new ue(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=j(e),s=this.children.get(n);return s?s.get(he(e)):null}}setTree(e,n){if(K(e))return n;{const s=j(e),r=(this.children.get(s)||new ue(null)).setTree(he(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ue(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(fe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=j(e),o=this.children.get(r);return o?o.findOnPath_(he(e),fe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=j(e),r=this.children.get(i);return r?r.foreachOnPath_(he(e),fe(n,i),s):new ue(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(fe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ue(null))}}function xs(t,e,n){if(K(e))return new Xe(new ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=De(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new ue(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function No(t,e,n){let s=t;return Ce(n,(i,r)=>{s=xs(s,fe(e,i),r)}),s}function gc(t,e){if(K(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new Xe(n)}}function Ao(t,e){return Cn(t,e)!=null}function Cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function mc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function qt(t,e){if(K(e))return t;{const n=Cn(t,e);return n!=null?new Xe(new ue(n)):new Xe(t.writeTree_.subtree(e))}}function Po(t){return t.writeTree_.isEmpty()}function es(t,e){return $h(X(),t.writeTree_,e)}function $h(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=$h(fe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(fe(t,".priority"),s)),n}}/**
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
 */function Ma(t,e){return zh(e,t)}function Cv(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=xs(t.visibleWrites,e,n)),t.lastWriteId=s}function Tv(t,e,n,s){w(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=No(t.visibleWrites,e,n),t.lastWriteId=s}function Sv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Rv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Nv(a,s.path)?i=!1:je(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Av(t),!0;if(s.snap)t.visibleWrites=gc(t.visibleWrites,s.path);else{const a=s.children;Ce(a,l=>{t.visibleWrites=gc(t.visibleWrites,fe(s.path,l))})}return!0}else return!1}function Nv(t,e){if(t.snap)return je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&je(fe(t.path,n),e))return!0;return!1}function Av(t){t.visibleWrites=Vh(t.allWrites,Pv,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Pv(t){return t.visible}function Vh(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)je(n,o)?(a=De(n,o),s=xs(s,a,r.snap)):je(o,n)&&(a=De(o,n),s=xs(s,X(),r.snap.getChild(a)));else if(r.children){if(je(n,o))a=De(n,o),s=No(s,a,r.children);else if(je(o,n))if(a=De(o,n),K(a))s=No(s,X(),r.children);else{const l=Gn(r.children,j(a));if(l){const c=l.getChild(he(a));s=xs(s,X(),c)}}}else throw as("WriteRecord should have .snap or .children")}}return s}function jh(t,e,n,s,i){if(!s&&!i){const r=Cn(t.visibleWrites,e);if(r!=null)return r;{const o=qt(t.visibleWrites,e);if(Po(o))return n;if(n==null&&!Ao(o,X()))return null;{const a=n||L.EMPTY_NODE;return es(o,a)}}}else{const r=qt(t.visibleWrites,e);if(!i&&Po(r))return n;if(!i&&n==null&&!Ao(r,X()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(je(c.path,e)||je(e,c.path))},a=Vh(t.allWrites,o,e),l=n||L.EMPTY_NODE;return es(a,l)}}}function kv(t,e,n){let s=L.EMPTY_NODE;const i=Cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=qt(t.visibleWrites,e);return n.forEachChild(pe,(o,a)=>{const l=es(qt(r,new ee(o)),a);s=s.updateImmediateChild(o,l)}),mc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=qt(t.visibleWrites,e);return mc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ov(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=fe(e,n);if(Ao(t.visibleWrites,r))return null;{const o=qt(t.visibleWrites,r);return Po(o)?i.getChild(n):es(o,i.getChild(n))}}function xv(t,e,n,s){const i=fe(e,n),r=Cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=qt(t.visibleWrites,i);return es(o,s.getNode().getImmediateChild(n))}else return null}function Mv(t,e){return Cn(t.visibleWrites,e)}function Dv(t,e,n,s,i,r,o){let a;const l=qt(t.visibleWrites,e),c=Cn(l,X());if(c!=null)a=c;else if(n!=null)a=es(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Lv(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function Zi(t,e,n,s){return jh(t.writeTree,t.treePath,e,n,s)}function Da(t,e){return kv(t.writeTree,t.treePath,e)}function vc(t,e,n,s){return Ov(t.writeTree,t.treePath,e,n,s)}function er(t,e){return Mv(t.writeTree,fe(t.treePath,e))}function Fv(t,e,n,s,i,r){return Dv(t.writeTree,t.treePath,e,n,s,i,r)}function La(t,e,n){return xv(t.writeTree,t.treePath,e,n)}function qh(t,e){return zh(fe(t.treePath,e),t.writeTree)}function zh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Uv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ys(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Gs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Xn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ys(s,e.snapshotNode,i.oldSnap));else throw as("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Wv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Kh=new Wv;class Fa{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new In(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return La(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wn(this.viewCache_),r=Fv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Bv(t){return{filter:t}}function Hv(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $v(t,e,n,s,i){const r=new Uv;let o,a;if(n.type===Ye.OVERWRITE){const c=n;c.source.fromUser?o=ko(t,e,c.path,c.snap,s,i,r):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=tr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ye.MERGE){const c=n;c.source.fromUser?o=jv(t,e,c.path,c.children,s,i,r):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Oo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ye.ACK_USER_WRITE){const c=n;c.revert?o=Kv(t,e,c.path,s,i,r):o=qv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=zv(t,e,n.path,s,r);else throw as("Unknown operation type: "+n.type);const l=r.getChanges();return Vv(e,o,l),{viewCache:o,changes:l}}function Vv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ro(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Wh(Ro(e)))}}function Gh(t,e,n,s,i,r){const o=e.eventCache;if(er(s,n)!=null)return e;{let a,l;if(K(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=wn(e),u=c instanceof L?c:L.EMPTY_NODE,h=Da(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Zi(s,wn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=j(n);if(c===".priority"){w(Yt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=vc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=he(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=vc(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=La(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Os(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function tr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=j(n);if(!l.isCompleteForPath(n)&&Yt(n)>1)return e;const m=he(n),S=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),_,S,m,Kh,null)}const h=Hh(e,c,l.isFullyInitialized()||K(n),u.filtersNodes()),d=new Fa(i,h,r);return Gh(t,h,n,i,d,a)}function ko(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Fa(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Os(e,c,!0,t.filter.filtersNodes());else{const h=j(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Os(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=he(n),_=a.getNode().getImmediateChild(h);let m;if(K(d))m=s;else{const A=u.getCompleteChild(h);A!=null?Ta(d)===".priority"&&A.getChild(Oh(d)).isEmpty()?m=A:m=A.updateChild(d,s):m=L.EMPTY_NODE}if(_.equals(m))l=e;else{const A=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Os(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function yc(t,e){return t.eventCache.isCompleteForChild(e)}function jv(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=fe(n,l);yc(e,j(u))&&(a=ko(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=fe(n,l);yc(e,j(u))||(a=ko(t,a,u,c,i,r,o))}),a}function Ec(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Oo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;K(n)?c=s:c=new ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Ec(t,_,d);l=tr(t,l,new ee(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),A=Ec(t,m,d);l=tr(t,l,new ee(h),A,i,r,o,a)}}),l}function qv(t,e,n,s,i,r,o){if(er(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return tr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(K(n)){let c=new ue(null);return l.getNode().forEachChild(Vn,(u,h)=>{c=c.set(new ee(u),h)}),Oo(t,e,n,c,i,r,a,o)}else return e}else{let c=new ue(null);return s.foreach((u,h)=>{const d=fe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Oo(t,e,n,c,i,r,a,o)}}function zv(t,e,n,s,i){const r=e.serverCache,o=Hh(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return Gh(t,o,n,s,Kh,i)}function Kv(t,e,n,s,i,r){let o;if(er(s,n)!=null)return e;{const a=new Fa(s,e,i),l=e.eventCache.getNode();let c;if(K(n)||j(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zi(s,wn(e));else{const h=e.serverCache.getNode();w(h instanceof L,"serverChildren would be complete if leaf node"),u=Da(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=j(n);let h=La(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,he(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,L.EMPTY_NODE,he(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zi(s,wn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||er(s,X())!=null,Os(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Gv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Aa(s.getIndex()),r=dv(s);this.processor_=Bv(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new In(l,o.isFullyInitialized(),i.filtersNodes()),h=new In(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=vr(h,u),this.eventGenerator_=new yv(this.query_)}get query(){return this.query_}}function Yv(t){return t.viewCache_.serverCache.getNode()}function Qv(t,e){const n=wn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function Ic(t){return t.eventRegistrations_.length===0}function Jv(t,e){t.eventRegistrations_.push(e)}function wc(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function bc(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(w(wn(t.viewCache_),"We should always have a full cache before handling merges"),w(Ro(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=$v(t.processor_,i,e,n,s);return Hv(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Yh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Xv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(Xn(r,o))}),n.isFullyInitialized()&&s.push(Wh(n.getNode())),Yh(t,s,n.getNode(),e)}function Yh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ev(t.eventGenerator_,e,n,i)}/**
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
 */let nr;class Zv{constructor(){this.views=new Map}}function ey(t){w(!nr,"__referenceConstructor has already been defined"),nr=t}function ty(){return w(nr,"Reference.ts has not been loaded"),nr}function ny(t){return t.views.size===0}function Ua(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),bc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(bc(o,e,n,s));return r}}function sy(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Zi(n,i?s:null),l=!1;a?l=!0:s instanceof L?(a=Da(n,s),l=!1):(a=L.EMPTY_NODE,l=!1);const c=vr(new In(a,l,!1),new In(s,i,!1));return new Gv(e,c)}return o}function iy(t,e,n,s,i,r){const o=sy(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Jv(o,n),Xv(o,n)}function ry(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Qt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(wc(c,n,s)),Ic(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(wc(l,n,s)),Ic(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Qt(t)&&r.push(new(ty())(e._repo,e._path)),{removed:r,events:o}}function Qh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jn(t,e){let n=null;for(const s of t.views.values())n=n||Qv(s,e);return n}function Jh(t,e){if(e._queryParams.loadsAllData())return yr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Xh(t,e){return Jh(t,e)!=null}function Qt(t){return yr(t)!=null}function yr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let sr;function oy(t){w(!sr,"__referenceConstructor has already been defined"),sr=t}function ay(){return w(sr,"Reference.ts has not been loaded"),sr}let ly=1;class Cc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=Lv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zh(t,e,n,s,i){return Cv(t.pendingWriteTree_,e,n,s,i),i?ds(t,new En(ka(),e,n)):[]}function cy(t,e,n,s){Tv(t.pendingWriteTree_,e,n,s);const i=ue.fromObject(n);return ds(t,new Zn(ka(),e,i))}function $t(t,e,n=!1){const s=Sv(t.pendingWriteTree_,e);if(Rv(t.pendingWriteTree_,e)){let r=new ue(null);return s.snap!=null?r=r.set(X(),!0):Ce(s.children,o=>{r=r.set(new ee(o),!0)}),ds(t,new Xi(s.path,r,n))}else return[]}function Er(t,e,n){return ds(t,new En(Oa(),e,n))}function uy(t,e,n){const s=ue.fromObject(n);return ds(t,new Zn(Oa(),e,s))}function hy(t,e){return ds(t,new Js(Oa(),e))}function dy(t,e,n){const s=Ba(t,n);if(s){const i=Ha(s),r=i.path,o=i.queryId,a=De(r,e),l=new Js(xa(o),a);return $a(t,r,l)}else return[]}function xo(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||Xh(r,e))){const a=ry(r,e,n,s);ny(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,d)=>Qt(d));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=gy(h);for(let _=0;_<d.length;++_){const m=d[_],A=m.query,S=nd(t,m);t.listenProvider_.startListening(Ms(A),ir(t,A),S.hashFn,S.onComplete)}}}!u&&l.length>0&&!s&&(c?t.listenProvider_.stopListening(Ms(e),null):l.forEach(h=>{const d=t.queryToTagMap.get(Ir(h));t.listenProvider_.stopListening(Ms(h),d)})),my(t,l)}return o}function fy(t,e,n,s){const i=Ba(t,s);if(i!=null){const r=Ha(i),o=r.path,a=r.queryId,l=De(o,e),c=new En(xa(a),l,n);return $a(t,o,c)}else return[]}function py(t,e,n,s){const i=Ba(t,s);if(i){const r=Ha(i),o=r.path,a=r.queryId,l=De(o,e),c=ue.fromObject(n),u=new Zn(xa(a),l,c);return $a(t,o,u)}else return[]}function _y(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=De(c,n);s=s||jn(u,h),i=i||Qt(u)});let r=e.syncPointTree_.get(n);r?(i=i||Qt(r),s=s||jn(r,X())):(r=new Zv,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=L.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const d=jn(h,X());d&&(s=s.updateImmediateChild(u,d))}));const a=Xh(r,t);if(!a&&!t._queryParams.loadsAllData()){const c=Ir(t);w(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=vy();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const l=Ma(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:l,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:a}}function Tc(t,e,n){const{syncPoint:s,serverCache:i,writesCache:r,serverCacheComplete:o,viewAlreadyExists:a,foundAncestorDefaultView:l}=_y(e,t);let c=iy(s,e,n,r,i,o);if(!a&&!l){const u=Jh(s,e);c=c.concat(yy(t,e,u))}return c}function Wa(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=De(o,e),c=jn(a,l);if(c)return c});return jh(i,e,r,n,!0)}function ds(t,e){return ed(e,t.syncPointTree_,null,Ma(t.pendingWriteTree_,X()))}function ed(t,e,n,s){if(K(t.path))return td(t,e,n,s);{const i=e.get(X());n==null&&i!=null&&(n=jn(i,X()));let r=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=qh(s,o);r=r.concat(ed(a,l,c,u))}return i&&(r=r.concat(Ua(i,t,s,n))),r}}function td(t,e,n,s){const i=e.get(X());n==null&&i!=null&&(n=jn(i,X()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=qh(s,o),u=t.operationForChild(o);u&&(r=r.concat(td(u,a,l,c)))}),i&&(r=r.concat(Ua(i,t,s,n))),r}function nd(t,e){const n=e.query,s=ir(t,n);return{hashFn:()=>(Yv(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?dy(t,n._path,s):hy(t,n._path);{const r=lm(i,n);return xo(t,n,null,r)}}}}function ir(t,e){const n=Ir(e);return t.queryToTagMap.get(n)}function Ir(t){return t._path.toString()+"$"+t._queryIdentifier}function Ba(t,e){return t.tagToQueryMap.get(e)}function Ha(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function $a(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Ma(t.pendingWriteTree_,e);return Ua(s,n,i,null)}function gy(t){return t.fold((e,n,s)=>{if(n&&Qt(n))return[yr(n)];{let i=[];return n&&(i=Qh(n)),Ce(s,(r,o)=>{i=i.concat(o)}),i}})}function Ms(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ay())(t._repo,t._path):t}function my(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ir(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function vy(){return ly++}function yy(t,e,n){const s=e._path,i=ir(t,e),r=nd(t,n),o=t.listenProvider_.startListening(Ms(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)w(!Qt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!K(c)&&u&&Qt(u))return[yr(u).query];{let d=[];return u&&(d=d.concat(Qh(u).map(_=>_.query))),Ce(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ms(u),ir(t,u))}}return o}/**
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
 */class Va{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Va(n)}node(){return this.node_}}class ja{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new ja(this.syncTree_,n)}node(){return Wa(this.syncTree_,this.path_)}}const Ey=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sc=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Iy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wy(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Iy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},wy=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},sd=function(t,e,n,s){return qa(e,new ja(n,t),s)},id=function(t,e,n){return qa(t,new Va(e),n)};function qa(t,e,n){const s=t.getPriority().val(),i=Sc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Sc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ge(a,ve(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ge(i))),o.forEachChild(pe,(a,l)=>{const c=qa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class za{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ka(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=j(n);for(;i!==null;){const r=Gn(s.node.children,i)||{children:{},childCount:0};s=new za(i,s,r),n=he(n),i=j(n)}return s}function fs(t){return t.node.value}function rd(t,e){t.node.value=e,Mo(t)}function od(t){return t.node.childCount>0}function by(t){return fs(t)===void 0&&!od(t)}function wr(t,e){Ce(t.node.children,(n,s)=>{e(new za(n,t,s))})}function ad(t,e,n,s){n&&!s&&e(t),wr(t,i=>{ad(i,e,!0,s)}),n&&s&&e(t)}function Cy(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function yi(t){return new ee(t.parent===null?t.name:yi(t.parent)+"/"+t.name)}function Mo(t){t.parent!==null&&Ty(t.parent,t.name,t)}function Ty(t,e,n){const s=by(n),i=_t(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Mo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Mo(t))}/**
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
 */const Sy=/[\[\].#$\/\u0000-\u001F\u007F]/,Ry=/[\[\].#$\u0000-\u001F\u007F]/,so=10*1024*1024,Ga=function(t){return typeof t=="string"&&t.length!==0&&!Sy.test(t)},ld=function(t){return typeof t=="string"&&t.length!==0&&!Ry.test(t)},Ny=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ld(t)},Ay=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ea(t)||t&&typeof t=="object"&&_t(t,".sv")},cd=function(t,e,n,s){s&&e===void 0||br(hr(t,"value"),e,n)},br=function(t,e,n){const s=n instanceof ee?new Vm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nn(s));if(typeof e=="function")throw new Error(t+"contains a function "+nn(s)+" with contents = "+e.toString());if(Ea(e))throw new Error(t+"contains "+e.toString()+" "+nn(s));if(typeof e=="string"&&e.length>so/3&&dr(e)>so)throw new Error(t+"contains a string greater than "+so+" utf8 bytes "+nn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ce(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ga(o)))throw new Error(t+" contains an invalid key ("+o+") "+nn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jm(s,o),br(t,a,s),qm(s)}),i&&r)throw new Error(t+' contains ".value" child '+nn(s)+" in addition to actual children.")}},Py=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ks(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ga(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($m);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&je(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ky=function(t,e,n,s){if(s&&e===void 0)return;const i=hr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ce(e,(o,a)=>{const l=new ee(o);if(br(i,a,fe(n,l)),Ta(l)===".priority"&&!Ay(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Py(i,r)},ud=function(t,e,n,s){if(!(s&&n===void 0)&&!ld(n))throw new Error(hr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Oy=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ud(t,e,n,s)},hd=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ga(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ny(n))throw new Error(hr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class My{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cr(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Sa(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function dd(t,e,n){Cr(t,n),fd(t,s=>Sa(s,e))}function nt(t,e,n){Cr(t,n),fd(t,s=>je(s,e)||je(e,s))}function fd(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Dy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Dy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();hn&&we("event: "+n.toString()),hs(s)}}}/**
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
 */const Ly="repo_interrupt",Fy=25;class Uy{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new My,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ji(),this.transactionQueueTree_=new za,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wy(t,e,n){if(t.stats_=ba(t.repoInfo_),t.forceRestClient_||dm())t.server_=new Qi(t.repoInfo_,(s,i,r,o)=>{Rc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Nc(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new bt(t.repoInfo_,e,(s,i,r,o)=>{Rc(t,s,i,r,o)},s=>{Nc(t,s)},s=>{By(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vm(t.repoInfo_,()=>new vv(t.stats_,t.server_)),t.infoData_=new fv,t.infoSyncTree_=new Cc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Er(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ya(t,"connected",!1),t.serverSyncTree_=new Cc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function pd(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tr(t){return Ey({timestamp:pd(t)})}function Rc(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Bi(n,c=>ve(c));o=py(t.serverSyncTree_,r,l,i)}else{const l=ve(n);o=fy(t.serverSyncTree_,r,l,i)}else if(s){const l=Bi(n,c=>ve(c));o=uy(t.serverSyncTree_,r,l)}else{const l=ve(n);o=Er(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ts(t,r)),nt(t.eventQueue_,a,o)}function Nc(t,e){Ya(t,"connected",e),e===!1&&Vy(t)}function By(t,e){Ce(e,(n,s)=>{Ya(t,n,s)})}function Ya(t,e,n){const s=new ee("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(s,i);const r=Er(t.infoSyncTree_,s,i);nt(t.eventQueue_,s,r)}function Qa(t){return t.nextWriteId_++}function Hy(t,e,n,s,i){Sr(t,"set",{path:e.toString(),value:n,priority:s});const r=Tr(t),o=ve(n,s),a=Wa(t.serverSyncTree_,e),l=id(o,a,r),c=Qa(t),u=Zh(t.serverSyncTree_,e,l,c,!0);Cr(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||ke("set at "+e+" failed: "+d);const A=$t(t.serverSyncTree_,c,!m);nt(t.eventQueue_,e,A),Do(t,i,d,_)});const h=Xa(t,e);ts(t,h),nt(t.eventQueue_,h,[])}function $y(t,e,n,s){Sr(t,"update",{path:e.toString(),value:n});let i=!0;const r=Tr(t),o={};if(Ce(n,(a,l)=>{i=!1,o[a]=sd(fe(e,a),ve(l),t.serverSyncTree_,r)}),i)we("update() called with empty data.  Don't do anything."),Do(t,s,"ok",void 0);else{const a=Qa(t),l=cy(t.serverSyncTree_,e,o,a);Cr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||ke("update at "+e+" failed: "+c);const d=$t(t.serverSyncTree_,a,!h),_=d.length>0?ts(t,e):e;nt(t.eventQueue_,_,d),Do(t,s,c,u)}),Ce(n,c=>{const u=Xa(t,fe(e,c));ts(t,u)}),nt(t.eventQueue_,e,[])}}function Vy(t){Sr(t,"onDisconnectEvents");const e=Tr(t),n=Ji();So(t.onDisconnect_,X(),(i,r)=>{const o=sd(i,r,t.serverSyncTree_,e);Bh(n,i,o)});let s=[];So(n,X(),(i,r)=>{s=s.concat(Er(t.serverSyncTree_,i,r));const o=Xa(t,i);ts(t,o)}),t.onDisconnect_=Ji(),nt(t.eventQueue_,X(),s)}function jy(t,e,n){let s;j(e._path)===".info"?s=Tc(t.infoSyncTree_,e,n):s=Tc(t.serverSyncTree_,e,n),dd(t.eventQueue_,e._path,s)}function Ac(t,e,n){let s;j(e._path)===".info"?s=xo(t.infoSyncTree_,e,n):s=xo(t.serverSyncTree_,e,n),dd(t.eventQueue_,e._path,s)}function qy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ly)}function Sr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Do(t,e,n,s){e&&hs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function _d(t,e,n){return Wa(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Ja(t,e=t.transactionQueueTree_){if(e||Rr(t,e),fs(e)){const n=md(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zy(t,yi(e),n)}else od(e)&&wr(e,n=>{Ja(t,n)})}function zy(t,e,n){const s=n.map(c=>c.currentWriteId),i=_d(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=De(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Sr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat($t(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Rr(t,Ka(t.transactionQueueTree_,e)),Ja(t,t.transactionQueueTree_),nt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)hs(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ts(t,e)}},o)}function ts(t,e){const n=gd(t,e),s=yi(n),i=md(t,n);return Ky(t,i,s),s}function Ky(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=De(n,l.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat($t(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Fy)u=!0,h="maxretry",i=i.concat($t(t.serverSyncTree_,l.currentWriteId,!0));else{const d=_d(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){br("transaction failed: Data returned ",_,l.path);let m=ve(_);typeof _=="object"&&_!=null&&_t(_,".priority")||(m=m.updatePriority(d.getPriority()));const S=l.currentWriteId,P=Tr(t),F=id(m,d,P);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=F,l.currentWriteId=Qa(t),o.splice(o.indexOf(S),1),i=i.concat(Zh(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat($t(t.serverSyncTree_,S,!0))}else u=!0,h="nodata",i=i.concat($t(t.serverSyncTree_,l.currentWriteId,!0))}nt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Rr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)hs(s[a]);Ja(t,t.transactionQueueTree_)}function gd(t,e){let n,s=t.transactionQueueTree_;for(n=j(e);n!==null&&fs(s)===void 0;)s=Ka(s,n),e=he(e),n=j(e);return s}function md(t,e){const n=[];return vd(t,e,n),n.sort((s,i)=>s.order-i.order),n}function vd(t,e,n){const s=fs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);wr(e,i=>{vd(t,i,n)})}function Rr(t,e){const n=fs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,rd(e,n.length>0?n:void 0)}wr(e,s=>{Rr(t,s)})}function Xa(t,e){const n=yi(gd(t,e)),s=Ka(t.transactionQueueTree_,e);return Cy(s,i=>{io(t,i)}),io(t,s),ad(s,i=>{io(t,i)}),n}function io(t,e){const n=fs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($t(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?rd(e,void 0):n.length=r+1,nt(t.eventQueue_,yi(e),i);for(let o=0;o<s.length;o++)hs(s[o])}}/**
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
 */function Gy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Yy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Pc=function(t,e){const n=Qy(t),s=n.namespace;n.domain==="firebase.com"&&vn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _m(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},Qy=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Gy(t.substring(u,h)));const d=Yy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class yd{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class Ed{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Jy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Za{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Ta(this._path)}get ref(){return new Rt(this._repo,this._path)}get _queryIdentifier(){const e=pc(this._queryParams),n=Ia(e);return n==="{}"?"default":n}get _queryObject(){return pc(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof Za))return!1;const n=this._repo===e._repo,s=Sa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hm(this._path)}}class Rt extends Za{constructor(e,n){super(e,n,new Pa,!1)}get parent(){const e=Oh(this._path);return e===null?null:new Rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=ns(this.ref,e);return new Xs(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xs(i,ns(this.ref,s),pe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vt(t,e){return t=it(t),t._checkNotDeleted("ref"),e!==void 0?ns(t._root,e):t._root}function ns(t,e){return t=it(t),j(t._path)===null?Oy("child","path",e,!1):ud("child","path",e,!1),new Rt(t._repo,fe(t._path,e))}function Xy(t,e){t=it(t),hd("push",t._path),cd("push",e,t._path,!0);const n=pd(t._repo),s=cv(n),i=ns(t,s),r=ns(t,s);let o;return e!=null?o=Nr(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Nr(t,e){t=it(t),hd("set",t._path),cd("set",e,t._path,!1);const n=new ai;return Hy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function On(t,e){ky("update",e,t._path,!1);const n=new ai;return $y(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class el{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new yd("value",this,new Xs(e.snapshotNode,new Rt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ed(this,e,n):null}matches(e){return e instanceof el?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class tl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ed(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const s=ns(new Rt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new yd(e.type,this,new Xs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof tl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Zy(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Ac(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Jy(n,r||void 0),a=e==="value"?new el(o):new tl(e,o);return jy(t._repo,t,a),()=>Ac(t._repo,t,a)}function eE(t,e,n,s){return Zy(t,"value",e,n,s)}ey(Rt);oy(Rt);/**
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
 */const tE="FIREBASE_DATABASE_EMULATOR_HOST",Lo={};let nE=!1;function sE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Pc(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[tE]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Pc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new bo(bo.OWNER):new pm(t.name,t.options,e);xy("Invalid Firebase Database URL",o),K(o.path)||vn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rE(a,t,u,new fm(t.name,n));return new oE(h,t)}function iE(t,e){const n=Lo[e];(!n||n[t.key]!==t)&&vn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qy(t),delete n[t.key]}function rE(t,e,n,s){let i=Lo[e.name];i||(i={},Lo[e.name]=i);let r=i[t.toURLString()];return r&&vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Uy(t,nE,n,s),i[t.toURLString()]=r,r}class oE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rt(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vn("Cannot call "+e+" on a deleted database.")}}function Ar(t=xu(),e){return ua(t,"database").getImmediate({identifier:e})}/**
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
 */function aE(t){Xg(ci),Yn(new pn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),jt(Ql,Jl,t),jt(Ql,Jl,"esm2017")}bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};aE();const lE={apiKey:"AIzaSyA7mlXL-RQizJ8YVA03pSNlAV9W7T07FpY",authDomain:"yt-watchmen.firebaseapp.com",databaseURL:"https://yt-watchmen-default-rtdb.europe-west1.firebasedatabase.app",projectId:"yt-watchmen",storageBucket:"yt-watchmen.appspot.com",messagingSenderId:"359895816834",appId:"1:359895816834:web:bb43560e3588066de1b29b"},Id=qp(lE);Qn(Id);Ar(Id);function nl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const cE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uE=nl(cE);function wd(t){return!!t||t===""}function sl(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Re(s)?fE(s):sl(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Re(t))return t;if(Ne(t))return t}}const hE=/;(?![^(]*\))/g,dE=/:(.+)/;function fE(t){const e={};return t.split(hE).forEach(n=>{if(n){const s=n.split(dE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qn(t){let e="";if(Re(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=qn(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ae={},zn=[],Ze=()=>{},pE=()=>!1,_E=/^on[^a-z]/,Pr=t=>_E.test(t),il=t=>t.startsWith("onUpdate:"),Oe=Object.assign,rl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gE=Object.prototype.hasOwnProperty,G=(t,e)=>gE.call(t,e),$=Array.isArray,Ds=t=>kr(t)==="[object Map]",mE=t=>kr(t)==="[object Set]",H=t=>typeof t=="function",Re=t=>typeof t=="string",ol=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",bd=t=>Ne(t)&&H(t.then)&&H(t.catch),vE=Object.prototype.toString,kr=t=>vE.call(t),yE=t=>kr(t).slice(8,-1),EE=t=>kr(t)==="[object Object]",al=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mi=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},IE=/-(\w)/g,pt=Or(t=>t.replace(IE,(e,n)=>n?n.toUpperCase():"")),wE=/\B([A-Z])/g,ps=Or(t=>t.replace(wE,"-$1").toLowerCase()),xr=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),ro=Or(t=>t?`on${xr(t)}`:""),Zs=(t,e)=>!Object.is(t,e),Di=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},rr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kc;const bE=()=>kc||(kc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ct;class CE{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ct&&(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function TE(t,e=ct){e&&e.active&&e.effects.push(t)}const ll=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cd=t=>(t.w&Jt)>0,Td=t=>(t.n&Jt)>0,SE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},RE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Cd(i)&&!Td(i)?i.delete(t):e[n++]=i,i.w&=~Jt,i.n&=~Jt}e.length=n}},Uo=new WeakMap;let Ns=0,Jt=1;const Wo=30;let Ge;const dn=Symbol(""),Bo=Symbol("");class cl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,TE(this,s)}run(){if(!this.active)return this.fn();let e=Ge,n=zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ge,Ge=this,zt=!0,Jt=1<<++Ns,Ns<=Wo?SE(this):Oc(this),this.fn()}finally{Ns<=Wo&&RE(this),Jt=1<<--Ns,Ge=this.parent,zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(Oc(this),this.onStop&&this.onStop(),this.active=!1)}}function Oc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zt=!0;const Sd=[];function _s(){Sd.push(zt),zt=!1}function gs(){const t=Sd.pop();zt=t===void 0?!0:t}function Be(t,e,n){if(zt&&Ge){let s=Uo.get(t);s||Uo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ll()),Rd(i)}}function Rd(t,e){let n=!1;Ns<=Wo?Td(t)||(t.n|=Jt,n=!Cd(t)):n=!t.has(Ge),n&&(t.add(Ge),Ge.deps.push(t))}function St(t,e,n,s,i,r){const o=Uo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?al(n)&&a.push(o.get("length")):(a.push(o.get(dn)),Ds(t)&&a.push(o.get(Bo)));break;case"delete":$(t)||(a.push(o.get(dn)),Ds(t)&&a.push(o.get(Bo)));break;case"set":Ds(t)&&a.push(o.get(dn));break}if(a.length===1)a[0]&&Ho(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ho(ll(l))}}function Ho(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&xc(s);for(const s of n)s.computed||xc(s)}function xc(t,e){(t!==Ge||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const NE=nl("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ol)),AE=ul(),PE=ul(!1,!0),kE=ul(!0),Mc=OE();function OE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)Be(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_s();const s=Z(this)[e].apply(this,n);return gs(),s}}),t}function ul(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?GE:xd:e?Od:kd).get(s))return s;const o=$(s);if(!t&&o&&G(Mc,i))return Reflect.get(Mc,i,r);const a=Reflect.get(s,i,r);return(ol(i)?Nd.has(i):NE(i))||(t||Be(s,"get",i),e)?a:Te(a)?o&&al(i)?a:a.value:Ne(a)?t?Md(a):ms(a):a}}const xE=Ad(),ME=Ad(!0);function Ad(t=!1){return function(n,s,i,r){let o=n[s];if(ei(o)&&Te(o)&&!Te(i))return!1;if(!t&&!ei(i)&&($o(i)||(i=Z(i),o=Z(o)),!$(n)&&Te(o)&&!Te(i)))return o.value=i,!0;const a=$(n)&&al(s)?Number(s)<n.length:G(n,s),l=Reflect.set(n,s,i,r);return n===Z(r)&&(a?Zs(i,o)&&St(n,"set",s,i):St(n,"add",s,i)),l}}function DE(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&St(t,"delete",e,void 0),s}function LE(t,e){const n=Reflect.has(t,e);return(!ol(e)||!Nd.has(e))&&Be(t,"has",e),n}function FE(t){return Be(t,"iterate",$(t)?"length":dn),Reflect.ownKeys(t)}const Pd={get:AE,set:xE,deleteProperty:DE,has:LE,ownKeys:FE},UE={get:kE,set(t,e){return!0},deleteProperty(t,e){return!0}},WE=Oe({},Pd,{get:PE,set:ME}),hl=t=>t,Mr=t=>Reflect.getPrototypeOf(t);function Ti(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(e!==r&&Be(i,"get",e),Be(i,"get",r));const{has:o}=Mr(i),a=s?hl:n?pl:ti;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Si(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(t!==i&&Be(s,"has",t),Be(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ri(t,e=!1){return t=t.__v_raw,!e&&Be(Z(t),"iterate",dn),Reflect.get(t,"size",t)}function Dc(t){t=Z(t);const e=Z(this);return Mr(e).has.call(e,t)||(e.add(t),St(e,"add",t,t)),this}function Lc(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=Mr(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Zs(e,o)&&St(n,"set",t,e):St(n,"add",t,e),this}function Fc(t){const e=Z(this),{has:n,get:s}=Mr(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&St(e,"delete",t,void 0),r}function Uc(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&St(t,"clear",void 0,void 0),n}function Ni(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Z(o),l=e?hl:t?pl:ti;return!t&&Be(a,"iterate",dn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Ai(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=Ds(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?hl:e?pl:ti;return!e&&Be(r,"iterate",l?Bo:dn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ot(t){return function(...e){return t==="delete"?!1:this}}function BE(){const t={get(r){return Ti(this,r)},get size(){return Ri(this)},has:Si,add:Dc,set:Lc,delete:Fc,clear:Uc,forEach:Ni(!1,!1)},e={get(r){return Ti(this,r,!1,!0)},get size(){return Ri(this)},has:Si,add:Dc,set:Lc,delete:Fc,clear:Uc,forEach:Ni(!1,!0)},n={get(r){return Ti(this,r,!0)},get size(){return Ri(this,!0)},has(r){return Si.call(this,r,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:Ni(!0,!1)},s={get(r){return Ti(this,r,!0,!0)},get size(){return Ri(this,!0)},has(r){return Si.call(this,r,!0)},add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ai(r,!1,!1),n[r]=Ai(r,!0,!1),e[r]=Ai(r,!1,!0),s[r]=Ai(r,!0,!0)}),[t,n,e,s]}const[HE,$E,VE,jE]=BE();function dl(t,e){const n=e?t?jE:VE:t?$E:HE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(G(n,i)&&i in s?n:s,i,r)}const qE={get:dl(!1,!1)},zE={get:dl(!1,!0)},KE={get:dl(!0,!1)},kd=new WeakMap,Od=new WeakMap,xd=new WeakMap,GE=new WeakMap;function YE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function QE(t){return t.__v_skip||!Object.isExtensible(t)?0:YE(yE(t))}function ms(t){return ei(t)?t:fl(t,!1,Pd,qE,kd)}function JE(t){return fl(t,!1,WE,zE,Od)}function Md(t){return fl(t,!0,UE,KE,xd)}function fl(t,e,n,s,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=QE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Kn(t){return ei(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function ei(t){return!!(t&&t.__v_isReadonly)}function $o(t){return!!(t&&t.__v_isShallow)}function Dd(t){return Kn(t)||ei(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Ld(t){return rr(t,"__v_skip",!0),t}const ti=t=>Ne(t)?ms(t):t,pl=t=>Ne(t)?Md(t):t;function Fd(t){zt&&Ge&&(t=Z(t),Rd(t.dep||(t.dep=ll())))}function Ud(t,e){t=Z(t),t.dep&&Ho(t.dep)}function Te(t){return!!(t&&t.__v_isRef===!0)}function Dr(t){return Wd(t,!1)}function XE(t){return Wd(t,!0)}function Wd(t,e){return Te(t)?t:new ZE(t,e)}class ZE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:ti(e)}get value(){return Fd(this),this._value}set value(e){e=this.__v_isShallow?e:Z(e),Zs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ti(e),Ud(this))}}function Kt(t){return Te(t)?t.value:t}const eI={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Bd(t){return Kn(t)?t:new Proxy(t,eI)}class tI{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new cl(e,()=>{this._dirty||(this._dirty=!0,Ud(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return Fd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function nI(t,e,n=!1){let s,i;const r=H(t);return r?(s=t,i=Ze):(s=t.get,i=t.set),new tI(s,i,r||!i,n)}function Gt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Lr(r,e,n)}return i}function et(t,e,n,s){if(H(t)){const r=Gt(t,e,n,s);return r&&bd(r)&&r.catch(o=>{Lr(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(et(t[r],e,n,s));return i}function Lr(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Gt(l,null,10,[t,o,a]);return}}sI(t,n,i,s)}function sI(t,e,n,s=!0){console.error(t)}let or=!1,Vo=!1;const We=[];let yt=0;const Ls=[];let As=null,Mn=0;const Fs=[];let Dt=null,Dn=0;const Hd=Promise.resolve();let _l=null,jo=null;function $d(t){const e=_l||Hd;return t?e.then(this?t.bind(this):t):e}function iI(t){let e=yt+1,n=We.length;for(;e<n;){const s=e+n>>>1;ni(We[s])<t?e=s+1:n=s}return e}function Vd(t){(!We.length||!We.includes(t,or&&t.allowRecurse?yt+1:yt))&&t!==jo&&(t.id==null?We.push(t):We.splice(iI(t.id),0,t),jd())}function jd(){!or&&!Vo&&(Vo=!0,_l=Hd.then(Kd))}function rI(t){const e=We.indexOf(t);e>yt&&We.splice(e,1)}function qd(t,e,n,s){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),jd()}function oI(t){qd(t,As,Ls,Mn)}function aI(t){qd(t,Dt,Fs,Dn)}function Fr(t,e=null){if(Ls.length){for(jo=e,As=[...new Set(Ls)],Ls.length=0,Mn=0;Mn<As.length;Mn++)As[Mn]();As=null,Mn=0,jo=null,Fr(t,e)}}function zd(t){if(Fr(),Fs.length){const e=[...new Set(Fs)];if(Fs.length=0,Dt){Dt.push(...e);return}for(Dt=e,Dt.sort((n,s)=>ni(n)-ni(s)),Dn=0;Dn<Dt.length;Dn++)Dt[Dn]();Dt=null,Dn=0}}const ni=t=>t.id==null?1/0:t.id;function Kd(t){Vo=!1,or=!0,Fr(t),We.sort((n,s)=>ni(n)-ni(s));const e=Ze;try{for(yt=0;yt<We.length;yt++){const n=We[yt];n&&n.active!==!1&&Gt(n,null,14)}}finally{yt=0,We.length=0,zd(),or=!1,_l=null,(We.length||Ls.length||Fs.length)&&Kd(t)}}function lI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ae;d&&(i=n.map(_=>_.trim())),h&&(i=n.map(Fo))}let a,l=s[a=ro(e)]||s[a=ro(pt(e))];!l&&r&&(l=s[a=ro(ps(e))]),l&&et(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,et(c,t,6,i)}}function Gd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=Gd(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(s.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Oe(o,r),s.set(t,o),o)}function Ur(t,e){return!t||!Pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,ps(e))||G(t,e))}let Qe=null,Wr=null;function ar(t){const e=Qe;return Qe=t,Wr=t&&t.type.__scopeId||null,e}function cI(t){Wr=t}function uI(){Wr=null}function gl(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Gc(-1);const r=ar(e),o=t(...i);return ar(r),s._d&&Gc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function oo(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:A}=t;let S,P;const F=ar(t);try{if(n.shapeFlag&4){const Q=i||s;S=ht(u.call(Q,Q,h,r,_,d,m)),P=l}else{const Q=e;S=ht(Q.length>1?Q(r,{attrs:l,slots:a,emit:c}):Q(r,null)),P=e.props?l:hI(l)}}catch(Q){Us.length=0,Lr(Q,t,1),S=Pe(si)}let V=S;if(P&&A!==!1){const Q=Object.keys(P),{shapeFlag:Ee}=V;Q.length&&Ee&7&&(o&&Q.some(il)&&(P=dI(P,o)),V=ss(V,P))}return n.dirs&&(V=ss(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),S=V,ar(F),S}const hI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pr(n))&&((e||(e={}))[n]=t[n]);return e},dI=(t,e)=>{const n={};for(const s in t)(!il(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function fI(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Wc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ur(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wc(s,o,c):!0:!!o;return!1}function Wc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ur(n,r))return!0}return!1}function pI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _I=t=>t.__isSuspense;function gI(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):aI(t)}function Li(t,e){if(be){let n=be.provides;const s=be.parent&&be.parent.provides;s===n&&(n=be.provides=Object.create(s)),n[t]=e}}function Ct(t,e,n=!1){const s=be||Qe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(s.proxy):e}}const Bc={};function Fi(t,e,n){return Yd(t,e,n)}function Yd(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ae){const a=be;let l,c=!1,u=!1;if(Te(t)?(l=()=>t.value,c=$o(t)):Kn(t)?(l=()=>t,s=!0):$(t)?(u=!0,c=t.some(P=>Kn(P)||$o(P)),l=()=>t.map(P=>{if(Te(P))return P.value;if(Kn(P))return cn(P);if(H(P))return Gt(P,a,2)})):H(t)?e?l=()=>Gt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),et(t,a,3,[d])}:l=Ze,e&&s){const P=l;l=()=>cn(P())}let h,d=P=>{h=S.onStop=()=>{Gt(P,a,4)}};if(ri)return d=Ze,e?n&&et(e,a,3,[l(),u?[]:void 0,d]):l(),Ze;let _=u?[]:Bc;const m=()=>{if(!!S.active)if(e){const P=S.run();(s||c||(u?P.some((F,V)=>Zs(F,_[V])):Zs(P,_)))&&(h&&h(),et(e,a,3,[P,_===Bc?void 0:_,d]),_=P)}else S.run()};m.allowRecurse=!!e;let A;i==="sync"?A=m:i==="post"?A=()=>Me(m,a&&a.suspense):A=()=>oI(m);const S=new cl(l,A);return e?n?m():_=S.run():i==="post"?Me(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&rl(a.scope.effects,S)}}function mI(t,e,n){const s=this.proxy,i=Re(t)?t.includes(".")?Qd(s,t):()=>s[t]:t.bind(s,s);let r;H(e)?r=e:(r=e.handler,n=e);const o=be;is(this);const a=Yd(i,r.bind(s),n);return o?is(o):fn(),a}function Qd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function cn(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))cn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)cn(t[n],e);else if(mE(t)||Ds(t))t.forEach(n=>{cn(n,e)});else if(EE(t))for(const n in t)cn(t[n],e);return t}function Tn(t){return H(t)?{setup:t,name:t.name}:t}const Ui=t=>!!t.type.__asyncLoader,Jd=t=>t.type.__isKeepAlive;function vI(t,e){Xd(t,"a",e)}function yI(t,e){Xd(t,"da",e)}function Xd(t,e,n=be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Br(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Jd(i.parent.vnode)&&EI(s,e,n,i),i=i.parent}}function EI(t,e,n,s){const i=Br(e,t,s,!0);Zd(()=>{rl(s[e],i)},n)}function Br(t,e,n=be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_s(),is(n);const a=et(e,n,t,o);return fn(),gs(),a});return s?i.unshift(r):i.push(r),r}}const Nt=t=>(e,n=be)=>(!ri||t==="sp")&&Br(t,e,n),II=Nt("bm"),wI=Nt("m"),bI=Nt("bu"),CI=Nt("u"),TI=Nt("bum"),Zd=Nt("um"),SI=Nt("sp"),RI=Nt("rtg"),NI=Nt("rtc");function AI(t,e=be){Br("ec",t,e)}function rn(t,e){const n=Qe;if(n===null)return t;const s=$r(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ae]=e[r];H(o)&&(o={mounted:o,updated:o}),o.deep&&cn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Xt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(_s(),et(l,n,8,[t.el,a,t,e]),gs())}}const ef="components";function tf(t,e){return kI(ef,t,!0,e)||t}const PI=Symbol();function kI(t,e,n=!0,s=!1){const i=Qe||be;if(i){const r=i.type;if(t===ef){const a=aw(r,!1);if(a&&(a===e||a===pt(e)||a===xr(pt(e))))return r}const o=Hc(i[t]||r[t],e)||Hc(i.appContext[t],e);return!o&&s?r:o}}function Hc(t,e){return t&&(t[e]||t[pt(e)]||t[xr(pt(e))])}const qo=t=>t?ff(t)?$r(t)||t.proxy:qo(t.parent):null,lr=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qo(t.parent),$root:t=>qo(t.root),$emit:t=>t.emit,$options:t=>sf(t),$forceUpdate:t=>t.f||(t.f=()=>Vd(t.update)),$nextTick:t=>t.n||(t.n=$d.bind(t.proxy)),$watch:t=>mI.bind(t)}),OI={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ae&&G(s,e))return o[e]=1,s[e];if(i!==ae&&G(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,r[e];if(n!==ae&&G(n,e))return o[e]=4,n[e];zo&&(o[e]=0)}}const u=lr[e];let h,d;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&G(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,G(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ae&&G(i,e)?(i[e]=n,!0):s!==ae&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ae&&G(t,o)||e!==ae&&G(e,o)||(a=r[0])&&G(a,o)||G(s,o)||G(lr,o)||G(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zo=!0;function xI(t){const e=sf(t),n=t.proxy,s=t.ctx;zo=!1,e.beforeCreate&&$c(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:A,deactivated:S,beforeDestroy:P,beforeUnmount:F,destroyed:V,unmounted:Q,render:Ee,renderTracked:Ie,renderTriggered:He,errorCaptured:Pt,serverPrefetch:xe,expose:rt,inheritAttrs:gt,components:qe,directives:Sn,filters:Rn}=e;if(c&&MI(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const te=o[le];H(te)&&(s[le]=te.bind(n))}if(i){const le=i.call(n,n);Ne(le)&&(t.data=ms(le))}if(zo=!0,r)for(const le in r){const te=r[le],Fe=H(te)?te.bind(n,n):H(te.get)?te.get.bind(n,n):Ze,An=!H(te)&&H(te.set)?te.set.bind(n):Ze,mt=Ve({get:Fe,set:An});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>mt.value,set:ot=>mt.value=ot})}if(a)for(const le in a)nf(a[le],s,n,le);if(l){const le=H(l)?l.call(n):l;Reflect.ownKeys(le).forEach(te=>{Li(te,le[te])})}u&&$c(u,t,"c");function _e(le,te){$(te)?te.forEach(Fe=>le(Fe.bind(n))):te&&le(te.bind(n))}if(_e(II,h),_e(wI,d),_e(bI,_),_e(CI,m),_e(vI,A),_e(yI,S),_e(AI,Pt),_e(NI,Ie),_e(RI,He),_e(TI,F),_e(Zd,Q),_e(SI,xe),$(rt))if(rt.length){const le=t.exposed||(t.exposed={});rt.forEach(te=>{Object.defineProperty(le,te,{get:()=>n[te],set:Fe=>n[te]=Fe})})}else t.exposed||(t.exposed={});Ee&&t.render===Ze&&(t.render=Ee),gt!=null&&(t.inheritAttrs=gt),qe&&(t.components=qe),Sn&&(t.directives=Sn)}function MI(t,e,n=Ze,s=!1){$(t)&&(t=Ko(t));for(const i in t){const r=t[i];let o;Ne(r)?"default"in r?o=Ct(r.from||i,r.default,!0):o=Ct(r.from||i):o=Ct(r),Te(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function $c(t,e,n){et($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nf(t,e,n,s){const i=s.includes(".")?Qd(n,s):()=>n[s];if(Re(t)){const r=e[t];H(r)&&Fi(i,r)}else if(H(t))Fi(i,t.bind(n));else if(Ne(t))if($(t))t.forEach(r=>nf(r,e,n,s));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&Fi(i,r,t)}}function sf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>cr(l,c,o,!0)),cr(l,e,o)),r.set(e,l),l}function cr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&cr(t,r,n,!0),i&&i.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=DI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const DI={data:Vc,props:sn,emits:sn,methods:sn,computed:sn,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:sn,directives:sn,watch:FI,provide:Vc,inject:LI};function Vc(t,e){return e?t?function(){return Oe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function LI(t,e){return sn(Ko(t),Ko(e))}function Ko(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function sn(t,e){return t?Oe(Oe(Object.create(null),t),e):e}function FI(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function UI(t,e,n,s=!1){const i={},r={};rr(r,Hr,1),t.propsDefaults=Object.create(null),rf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:JE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function WI(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Z(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ur(t.emitsOptions,d))continue;const _=e[d];if(l)if(G(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=pt(d);i[m]=Go(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{rf(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!G(e,h)&&((u=ps(h))===h||!G(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Go(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!G(e,h)&&!0)&&(delete r[h],c=!0)}c&&St(t,"set","$attrs")}function rf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Mi(l))continue;const c=e[l];let u;i&&G(i,u=pt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ur(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Z(n),c=a||ae;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Go(i,l,h,c[h],t,!G(c,h))}}return o}function Go(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(is(i),s=c[n]=l.call(null,e),fn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ps(n))&&(s=!0))}return s}function of(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!H(t)){const u=h=>{l=!0;const[d,_]=of(h,e,!0);Oe(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return s.set(t,zn),zn;if($(r))for(let u=0;u<r.length;u++){const h=pt(r[u]);jc(h)&&(o[h]=ae)}else if(r)for(const u in r){const h=pt(u);if(jc(h)){const d=r[u],_=o[h]=$(d)||H(d)?{type:d}:d;if(_){const m=Kc(Boolean,_.type),A=Kc(String,_.type);_[0]=m>-1,_[1]=A<0||m<A,(m>-1||G(_,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function jc(t){return t[0]!=="$"}function qc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function zc(t,e){return qc(t)===qc(e)}function Kc(t,e){return $(e)?e.findIndex(n=>zc(n,t)):H(e)&&zc(e,t)?0:-1}const af=t=>t[0]==="_"||t==="$stable",ml=t=>$(t)?t.map(ht):[ht(t)],BI=(t,e,n)=>{if(e._n)return e;const s=gl((...i)=>ml(e(...i)),n);return s._c=!1,s},lf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(af(i))continue;const r=t[i];if(H(r))e[i]=BI(i,r,s);else if(r!=null){const o=ml(r);e[i]=()=>o}}},cf=(t,e)=>{const n=ml(e);t.slots.default=()=>n},HI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),rr(e,"_",n)):lf(e,t.slots={})}else t.slots={},e&&cf(t,e);rr(t.slots,Hr,1)},$I=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Oe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,lf(e,i)),o=e}else e&&(cf(t,e),o={default:1});if(r)for(const a in i)!af(a)&&!(a in o)&&delete i[a]};function uf(){return{app:null,config:{isNativeTag:pE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VI=0;function jI(t,e){return function(s,i=null){H(s)||(s=Object.assign({},s)),i!=null&&!Ne(i)&&(i=null);const r=uf(),o=new Set;let a=!1;const l=r.app={_uid:VI++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:cw,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...u)):H(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Pe(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,$r(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Yo(t,e,n,s,i=!1){if($(t)){t.forEach((d,_)=>Yo(d,e&&($(e)?e[_]:e),n,s,i));return}if(Ui(s)&&!i)return;const r=s.shapeFlag&4?$r(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,G(h,c)&&(h[c]=null)):Te(c)&&(c.value=null)),H(l))Gt(l,a,12,[o,u]);else{const d=Re(l),_=Te(l);if(d||_){const m=()=>{if(t.f){const A=d?u[l]:l.value;i?$(A)&&rl(A,r):$(A)?A.includes(r)||A.push(r):d?(u[l]=[r],G(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,G(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Me(m,n)):m()}}}const Me=gI;function qI(t){return zI(t)}function zI(t,e){const n=bE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Ze,cloneNode:m,insertStaticContent:A}=t,S=(f,p,g,E=null,y=null,C=null,N=!1,b=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Cs(f,p)&&(E=x(f),$e(f,y,C,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:M,shapeFlag:k}=p;switch(I){case vl:P(f,p,g,E);break;case si:F(f,p,g,E);break;case ao:f==null&&V(p,g,E,N);break;case ut:Sn(f,p,g,E,y,C,N,b,T);break;default:k&1?Ie(f,p,g,E,y,C,N,b,T):k&6?Rn(f,p,g,E,y,C,N,b,T):(k&64||k&128)&&I.process(f,p,g,E,y,C,N,b,T,ce)}M!=null&&y&&Yo(M,f&&f.ref,C,p||f,!p)},P=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const y=p.el=f.el;p.children!==f.children&&c(y,p.children)}},F=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},V=(f,p,g,E)=>{[f.el,f.anchor]=A(f.children,p,g,E,f.el,f.anchor)},Q=({el:f,anchor:p},g,E)=>{let y;for(;f&&f!==p;)y=d(f),s(f,g,E),f=y;s(p,g,E)},Ee=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},Ie=(f,p,g,E,y,C,N,b,T)=>{N=N||p.type==="svg",f==null?He(p,g,E,y,C,N,b,T):rt(f,p,y,C,N,b,T)},He=(f,p,g,E,y,C,N,b)=>{let T,I;const{type:M,props:k,shapeFlag:D,transition:W,patchFlag:Y,dirs:se}=f;if(f.el&&m!==void 0&&Y===-1)T=f.el=m(f.el);else{if(T=f.el=o(f.type,C,k&&k.is,k),D&8?u(T,f.children):D&16&&xe(f.children,T,null,E,y,C&&M!=="foreignObject",N,b),se&&Xt(f,null,E,"created"),k){for(const de in k)de!=="value"&&!Mi(de)&&r(T,de,null,k[de],C,f.children,E,y,R);"value"in k&&r(T,"value",null,k.value),(I=k.onVnodeBeforeMount)&&lt(I,E,f)}Pt(T,f,f.scopeId,N,E)}se&&Xt(f,null,E,"beforeMount");const ie=(!y||y&&!y.pendingBranch)&&W&&!W.persisted;ie&&W.beforeEnter(T),s(T,p,g),((I=k&&k.onVnodeMounted)||ie||se)&&Me(()=>{I&&lt(I,E,f),ie&&W.enter(T),se&&Xt(f,null,E,"mounted")},y)},Pt=(f,p,g,E,y)=>{if(g&&_(f,g),E)for(let C=0;C<E.length;C++)_(f,E[C]);if(y){let C=y.subTree;if(p===C){const N=y.vnode;Pt(f,N,N.scopeId,N.slotScopeIds,y.parent)}}},xe=(f,p,g,E,y,C,N,b,T=0)=>{for(let I=T;I<f.length;I++){const M=f[I]=b?Lt(f[I]):ht(f[I]);S(null,M,p,g,E,y,C,N,b)}},rt=(f,p,g,E,y,C,N)=>{const b=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:M}=p;T|=f.patchFlag&16;const k=f.props||ae,D=p.props||ae;let W;g&&Zt(g,!1),(W=D.onVnodeBeforeUpdate)&&lt(W,g,p,f),M&&Xt(p,f,g,"beforeUpdate"),g&&Zt(g,!0);const Y=y&&p.type!=="foreignObject";if(I?gt(f.dynamicChildren,I,b,g,E,Y,C):N||Fe(f,p,b,null,g,E,Y,C,!1),T>0){if(T&16)qe(b,p,k,D,g,E,y);else if(T&2&&k.class!==D.class&&r(b,"class",null,D.class,y),T&4&&r(b,"style",k.style,D.style,y),T&8){const se=p.dynamicProps;for(let ie=0;ie<se.length;ie++){const de=se[ie],ze=k[de],Pn=D[de];(Pn!==ze||de==="value")&&r(b,de,ze,Pn,y,f.children,g,E,R)}}T&1&&f.children!==p.children&&u(b,p.children)}else!N&&I==null&&qe(b,p,k,D,g,E,y);((W=D.onVnodeUpdated)||M)&&Me(()=>{W&&lt(W,g,p,f),M&&Xt(p,f,g,"updated")},E)},gt=(f,p,g,E,y,C,N)=>{for(let b=0;b<p.length;b++){const T=f[b],I=p[b],M=T.el&&(T.type===ut||!Cs(T,I)||T.shapeFlag&70)?h(T.el):g;S(T,I,M,null,E,y,C,N,!0)}},qe=(f,p,g,E,y,C,N)=>{if(g!==E){for(const b in E){if(Mi(b))continue;const T=E[b],I=g[b];T!==I&&b!=="value"&&r(f,b,I,T,N,p.children,y,C,R)}if(g!==ae)for(const b in g)!Mi(b)&&!(b in E)&&r(f,b,g[b],null,N,p.children,y,C,R);"value"in E&&r(f,"value",g.value,E.value)}},Sn=(f,p,g,E,y,C,N,b,T)=>{const I=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:k,dynamicChildren:D,slotScopeIds:W}=p;W&&(b=b?b.concat(W):W),f==null?(s(I,g,E),s(M,g,E),xe(p.children,g,M,y,C,N,b,T)):k>0&&k&64&&D&&f.dynamicChildren?(gt(f.dynamicChildren,D,g,y,C,N,b),(p.key!=null||y&&p===y.subTree)&&hf(f,p,!0)):Fe(f,p,g,M,y,C,N,b,T)},Rn=(f,p,g,E,y,C,N,b,T)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?y.ctx.activate(p,g,E,N,T):Nn(p,g,E,y,C,N,T):_e(f,p,T)},Nn=(f,p,g,E,y,C,N)=>{const b=f.component=nw(f,E,y);if(Jd(f)&&(b.ctx.renderer=ce),sw(b),b.asyncDep){if(y&&y.registerDep(b,le),!f.el){const T=b.subTree=Pe(si);F(null,T,p,g)}return}le(b,f,p,g,y,C,N)},_e=(f,p,g)=>{const E=p.component=f.component;if(fI(f,p,g))if(E.asyncDep&&!E.asyncResolved){te(E,p,g);return}else E.next=p,rI(E.update),E.update();else p.el=f.el,E.vnode=p},le=(f,p,g,E,y,C,N)=>{const b=()=>{if(f.isMounted){let{next:M,bu:k,u:D,parent:W,vnode:Y}=f,se=M,ie;Zt(f,!1),M?(M.el=Y.el,te(f,M,N)):M=Y,k&&Di(k),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&lt(ie,W,M,Y),Zt(f,!0);const de=oo(f),ze=f.subTree;f.subTree=de,S(ze,de,h(ze.el),x(ze),f,y,C),M.el=de.el,se===null&&pI(f,de.el),D&&Me(D,y),(ie=M.props&&M.props.onVnodeUpdated)&&Me(()=>lt(ie,W,M,Y),y)}else{let M;const{el:k,props:D}=p,{bm:W,m:Y,parent:se}=f,ie=Ui(p);if(Zt(f,!1),W&&Di(W),!ie&&(M=D&&D.onVnodeBeforeMount)&&lt(M,se,p),Zt(f,!0),k&&B){const de=()=>{f.subTree=oo(f),B(k,f.subTree,f,y,null)};ie?p.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=oo(f);S(null,de,g,E,f,y,C),p.el=de.el}if(Y&&Me(Y,y),!ie&&(M=D&&D.onVnodeMounted)){const de=p;Me(()=>lt(M,se,de),y)}(p.shapeFlag&256||se&&Ui(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Me(f.a,y),f.isMounted=!0,p=g=E=null}},T=f.effect=new cl(b,()=>Vd(I),f.scope),I=f.update=()=>T.run();I.id=f.uid,Zt(f,!0),I()},te=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,WI(f,p.props,E,g),$I(f,p.children,g),_s(),Fr(void 0,f.update),gs()},Fe=(f,p,g,E,y,C,N,b,T=!1)=>{const I=f&&f.children,M=f?f.shapeFlag:0,k=p.children,{patchFlag:D,shapeFlag:W}=p;if(D>0){if(D&128){mt(I,k,g,E,y,C,N,b,T);return}else if(D&256){An(I,k,g,E,y,C,N,b,T);return}}W&8?(M&16&&R(I,y,C),k!==I&&u(g,k)):M&16?W&16?mt(I,k,g,E,y,C,N,b,T):R(I,y,C,!0):(M&8&&u(g,""),W&16&&xe(k,g,E,y,C,N,b,T))},An=(f,p,g,E,y,C,N,b,T)=>{f=f||zn,p=p||zn;const I=f.length,M=p.length,k=Math.min(I,M);let D;for(D=0;D<k;D++){const W=p[D]=T?Lt(p[D]):ht(p[D]);S(f[D],W,g,null,y,C,N,b,T)}I>M?R(f,y,C,!0,!1,k):xe(p,g,E,y,C,N,b,T,k)},mt=(f,p,g,E,y,C,N,b,T)=>{let I=0;const M=p.length;let k=f.length-1,D=M-1;for(;I<=k&&I<=D;){const W=f[I],Y=p[I]=T?Lt(p[I]):ht(p[I]);if(Cs(W,Y))S(W,Y,g,null,y,C,N,b,T);else break;I++}for(;I<=k&&I<=D;){const W=f[k],Y=p[D]=T?Lt(p[D]):ht(p[D]);if(Cs(W,Y))S(W,Y,g,null,y,C,N,b,T);else break;k--,D--}if(I>k){if(I<=D){const W=D+1,Y=W<M?p[W].el:E;for(;I<=D;)S(null,p[I]=T?Lt(p[I]):ht(p[I]),g,Y,y,C,N,b,T),I++}}else if(I>D)for(;I<=k;)$e(f[I],y,C,!0),I++;else{const W=I,Y=I,se=new Map;for(I=Y;I<=D;I++){const Ue=p[I]=T?Lt(p[I]):ht(p[I]);Ue.key!=null&&se.set(Ue.key,I)}let ie,de=0;const ze=D-Y+1;let Pn=!1,Cl=0;const ys=new Array(ze);for(I=0;I<ze;I++)ys[I]=0;for(I=W;I<=k;I++){const Ue=f[I];if(de>=ze){$e(Ue,y,C,!0);continue}let at;if(Ue.key!=null)at=se.get(Ue.key);else for(ie=Y;ie<=D;ie++)if(ys[ie-Y]===0&&Cs(Ue,p[ie])){at=ie;break}at===void 0?$e(Ue,y,C,!0):(ys[at-Y]=I+1,at>=Cl?Cl=at:Pn=!0,S(Ue,p[at],g,null,y,C,N,b,T),de++)}const Tl=Pn?KI(ys):zn;for(ie=Tl.length-1,I=ze-1;I>=0;I--){const Ue=Y+I,at=p[Ue],Sl=Ue+1<M?p[Ue+1].el:E;ys[I]===0?S(null,at,g,Sl,y,C,N,b,T):Pn&&(ie<0||I!==Tl[ie]?ot(at,g,Sl,2):ie--)}}},ot=(f,p,g,E,y=null)=>{const{el:C,type:N,transition:b,children:T,shapeFlag:I}=f;if(I&6){ot(f.component.subTree,p,g,E);return}if(I&128){f.suspense.move(p,g,E);return}if(I&64){N.move(f,p,g,ce);return}if(N===ut){s(C,p,g);for(let k=0;k<T.length;k++)ot(T[k],p,g,E);s(f.anchor,p,g);return}if(N===ao){Q(f,p,g);return}if(E!==2&&I&1&&b)if(E===0)b.beforeEnter(C),s(C,p,g),Me(()=>b.enter(C),y);else{const{leave:k,delayLeave:D,afterLeave:W}=b,Y=()=>s(C,p,g),se=()=>{k(C,()=>{Y(),W&&W()})};D?D(C,Y,se):se()}else s(C,p,g)},$e=(f,p,g,E=!1,y=!1)=>{const{type:C,props:N,ref:b,children:T,dynamicChildren:I,shapeFlag:M,patchFlag:k,dirs:D}=f;if(b!=null&&Yo(b,null,g,f,!0),M&256){p.ctx.deactivate(f);return}const W=M&1&&D,Y=!Ui(f);let se;if(Y&&(se=N&&N.onVnodeBeforeUnmount)&&lt(se,p,f),M&6)O(f.component,g,E);else{if(M&128){f.suspense.unmount(g,E);return}W&&Xt(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,g,y,ce,E):I&&(C!==ut||k>0&&k&64)?R(I,p,g,!1,!0):(C===ut&&k&384||!y&&M&16)&&R(T,p,g),E&&vs(f)}(Y&&(se=N&&N.onVnodeUnmounted)||W)&&Me(()=>{se&&lt(se,p,f),W&&Xt(f,null,p,"unmounted")},g)},vs=f=>{const{type:p,el:g,anchor:E,transition:y}=f;if(p===ut){v(g,E);return}if(p===ao){Ee(f);return}const C=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:N,delayLeave:b}=y,T=()=>N(g,C);b?b(f.el,C,T):T()}else C()},v=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},O=(f,p,g)=>{const{bum:E,scope:y,update:C,subTree:N,um:b}=f;E&&Di(E),y.stop(),C&&(C.active=!1,$e(N,f,p,g)),b&&Me(b,p),Me(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(f,p,g,E=!1,y=!1,C=0)=>{for(let N=C;N<f.length;N++)$e(f[N],p,g,E,y)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ne=(f,p,g)=>{f==null?p._vnode&&$e(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,g),zd(),p._vnode=f},ce={p:S,um:$e,m:ot,r:vs,mt:Nn,mc:xe,pc:Fe,pbc:gt,n:x,o:t};let z,B;return e&&([z,B]=e(ce)),{render:ne,hydrate:z,createApp:jI(ne,z)}}function Zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hf(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Lt(i[r]),a.el=o.el),n||hf(o,a))}}function KI(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const GI=t=>t.__isTeleport,ut=Symbol(void 0),vl=Symbol(void 0),si=Symbol(void 0),ao=Symbol(void 0),Us=[];let Je=null;function Ei(t=!1){Us.push(Je=t?null:[])}function YI(){Us.pop(),Je=Us[Us.length-1]||null}let ii=1;function Gc(t){ii+=t}function QI(t){return t.dynamicChildren=ii>0?Je||zn:null,YI(),ii>0&&Je&&Je.push(t),t}function Ii(t,e,n,s,i,r){return QI(J(t,e,n,s,i,r,!0))}function Qo(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Hr="__vInternal",df=({key:t})=>t!=null?t:null,Wi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||Te(t)||H(t)?{i:Qe,r:t,k:e,f:!!n}:t:null;function J(t,e=null,n=null,s=0,i=null,r=t===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&df(e),ref:e&&Wi(e),scopeId:Wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(El(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),ii>0&&!o&&Je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Je.push(l),l}const Pe=JI;function JI(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===PI)&&(t=si),Qo(t)){const a=ss(t,e,!0);return n&&El(a,n),ii>0&&!r&&Je&&(a.shapeFlag&6?Je[Je.indexOf(t)]=a:Je.push(a)),a.patchFlag|=-2,a}if(lw(t)&&(t=t.__vccOpts),e){e=XI(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=qn(a)),Ne(l)&&(Dd(l)&&!$(l)&&(l=Oe({},l)),e.style=sl(l))}const o=Re(t)?1:_I(t)?128:GI(t)?64:Ne(t)?4:H(t)?2:0;return J(t,e,n,s,i,o,r,!0)}function XI(t){return t?Dd(t)||Hr in t?Oe({},t):t:null}function ss(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?ZI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&df(a),ref:e&&e.ref?n&&i?$(i)?i.concat(Wi(e)):[i,Wi(e)]:Wi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ss(t.ssContent),ssFallback:t.ssFallback&&ss(t.ssFallback),el:t.el,anchor:t.anchor}}function yl(t=" ",e=0){return Pe(vl,null,t,e)}function ht(t){return t==null||typeof t=="boolean"?Pe(si):$(t)?Pe(ut,null,t.slice()):typeof t=="object"?Lt(t):Pe(vl,null,String(t))}function Lt(t){return t.el===null||t.memo?t:ss(t)}function El(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),El(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Hr in e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[yl(e)]):n=8);t.children=e,t.shapeFlag|=n}function ZI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=qn([e.class,s.class]));else if(i==="style")e.style=sl([e.style,s.style]);else if(Pr(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){et(t,e,7,[n,s])}const ew=uf();let tw=0;function nw(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ew,r={uid:tw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new CE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:of(s,i),emitsOptions:Gd(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=lI.bind(null,r),t.ce&&t.ce(r),r}let be=null;const is=t=>{be=t,t.scope.on()},fn=()=>{be&&be.scope.off(),be=null};function ff(t){return t.vnode.shapeFlag&4}let ri=!1;function sw(t,e=!1){ri=e;const{props:n,children:s}=t.vnode,i=ff(t);UI(t,n,i,e),HI(t,s);const r=i?iw(t,e):void 0;return ri=!1,r}function iw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ld(new Proxy(t.ctx,OI));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ow(t):null;is(t),_s();const r=Gt(s,t,0,[t.props,i]);if(gs(),fn(),bd(r)){if(r.then(fn,fn),e)return r.then(o=>{Yc(t,o,e)}).catch(o=>{Lr(o,t,0)});t.asyncDep=r}else Yc(t,r,e)}else pf(t,e)}function Yc(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Bd(e)),pf(t,n)}let Qc;function pf(t,e,n){const s=t.type;if(!t.render){if(!e&&Qc&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:r,delimiters:a},o),l);s.render=Qc(i,c)}}t.render=s.render||Ze}is(t),_s(),xI(t),gs(),fn()}function rw(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function ow(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=rw(t))},slots:t.slots,emit:t.emit,expose:e}}function $r(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bd(Ld(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lr)return lr[n](t)}}))}function aw(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function lw(t){return H(t)&&"__vccOpts"in t}const Ve=(t,e)=>nI(t,e,ri);function _f(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!$(e)?Qo(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qo(n)&&(n=[n]),Pe(t,e,n))}const cw="3.2.37",uw="http://www.w3.org/2000/svg",on=typeof document!="undefined"?document:null,Jc=on&&on.createElement("template"),hw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?on.createElementNS(uw,t):on.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Jc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Jc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fw(t,e,n){const s=t.style,i=Re(n);if(n&&!i){for(const r in n)Jo(s,r,n[r]);if(e&&!Re(e))for(const r in e)n[r]==null&&Jo(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Xc=/\s*!important$/;function Jo(t,e,n){if($(n))n.forEach(s=>Jo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pw(t,e);Xc.test(n)?t.setProperty(ps(s),n.replace(Xc,""),"important"):t[s]=n}}const Zc=["Webkit","Moz","ms"],lo={};function pw(t,e){const n=lo[e];if(n)return n;let s=pt(e);if(s!=="filter"&&s in t)return lo[e]=s;s=xr(s);for(let i=0;i<Zc.length;i++){const r=Zc[i]+s;if(r in t)return lo[e]=r}return e}const eu="http://www.w3.org/1999/xlink";function _w(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(eu,e.slice(6,e.length)):t.setAttributeNS(eu,e,n);else{const r=uE(e);n==null||r&&!wd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function gw(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[gf,mw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Xo=0;const vw=Promise.resolve(),yw=()=>{Xo=0},Ew=()=>Xo||(vw.then(yw),Xo=gf());function Ln(t,e,n,s){t.addEventListener(e,n,s)}function Iw(t,e,n,s){t.removeEventListener(e,n,s)}function ww(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=bw(e);if(s){const c=r[e]=Cw(s,i);Ln(t,a,c,l)}else o&&(Iw(t,a,o,l),r[e]=void 0)}}const tu=/(?:Once|Passive|Capture)$/;function bw(t){let e;if(tu.test(t)){e={};let n;for(;n=t.match(tu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ps(t.slice(2)),e]}function Cw(t,e){const n=s=>{const i=s.timeStamp||gf();(mw||i>=n.attached-1)&&et(Tw(s,n.value),e,5,[s])};return n.value=t,n.attached=Ew(),n}function Tw(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const nu=/^on[a-z]/,Sw=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?dw(t,s,i):e==="style"?fw(t,n,s):Pr(e)?il(e)||ww(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rw(t,e,s,i))?gw(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_w(t,e,s,i))};function Rw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&nu.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||nu.test(e)&&Re(n)?!1:e in t}const su=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>Di(e,n):e};function Nw(t){t.target.composing=!0}function iu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const an={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=su(i);const r=s||i.props&&i.props.type==="number";Ln(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Fo(a)),t._assign(a)}),n&&Ln(t,"change",()=>{t.value=t.value.trim()}),e||(Ln(t,"compositionstart",Nw),Ln(t,"compositionend",iu),Ln(t,"change",iu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=su(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Fo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Aw=["ctrl","shift","alt","meta"],Pw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Aw.some(n=>t[`${n}Key`]&&!e.includes(n))},ru=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Pw[e[i]];if(r&&r(n,e))return}return t(n,...s)},kw=Oe({patchProp:Sw},hw);let ou;function Ow(){return ou||(ou=qI(kw))}const xw=(...t)=>{const e=Ow().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Mw(s);if(!i)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mw(t){return Re(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Fn=typeof window!="undefined";function Dw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const re=Object.assign;function co(t,e){const n={};for(const s in e){const i=e[s];n[s]=st(i)?i.map(t):t(i)}return n}const Ws=()=>{},st=Array.isArray,Lw=/\/$/,Fw=t=>t.replace(Lw,"");function uo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Hw(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Uw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function au(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ww(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&rs(e.matched[s],n.matched[i])&&mf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bw(t[n],e[n]))return!1;return!0}function Bw(t,e){return st(t)?lu(t,e):st(e)?lu(e,t):t===e}function lu(t,e){return st(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Hw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var oi;(function(t){t.pop="pop",t.push="push"})(oi||(oi={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function $w(t){if(!t)if(Fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fw(t)}const Vw=/^[^#]+#/;function jw(t,e){return t.replace(Vw,"#")+e}function qw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Vr=()=>({left:window.pageXOffset,top:window.pageYOffset});function zw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=qw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cu(t,e){return(history.state?history.state.position-e:-1)+t}const Zo=new Map;function Kw(t,e){Zo.set(t,e)}function Gw(t){const e=Zo.get(t);return Zo.delete(t),e}let Yw=()=>location.protocol+"//"+location.host;function vf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),au(l,"")}return au(n,t)+s+i}function Qw(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=vf(t,location),m=n.value,A=e.value;let S=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}S=A?d.position-A.position:0}else s(_);i.forEach(P=>{P(n.value,m,{delta:S,type:oi.pop,direction:S?S>0?Bs.forward:Bs.back:Bs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;!d.state||d.replaceState(re({},d.state,{scroll:Vr()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function uu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Vr():null}}function Jw(t){const{history:e,location:n}=window,s={value:vf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Yw()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=re({},e.state,uu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=re({},i.value,e.state,{forward:l,scroll:Vr()});r(u.current,u,!0);const h=re({},uu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Xw(t){t=$w(t);const e=Jw(t),n=Qw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=re({location:"",base:t,go:s,createHref:jw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Zw(t){return typeof t=="string"||t&&typeof t=="object"}function yf(t){return typeof t=="string"||typeof t=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ef=Symbol("");var hu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hu||(hu={}));function os(t,e){return re(new Error,{type:t,[Ef]:!0},e)}function Mt(t,e){return t instanceof Error&&Ef in t&&(e==null||!!(t.type&e))}const du="[^/]+?",eb={sensitive:!1,strict:!1,start:!0,end:!0},tb=/[.+*?^${}()[\]/\\]/g;function nb(t,e){const n=re({},eb,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(tb,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:A,optional:S,regexp:P}=d;r.push({name:m,repeatable:A,optional:S});const F=P||du;if(F!==du){_+=10;try{new RegExp(`(${F})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+Q.message)}}let V=A?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(V=S&&c.length<2?`(?:/${V})`:"/"+V),S&&(V+="?"),i+=V,_+=20,S&&(_+=-8),A&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:A,optional:S}=_,P=m in c?c[m]:"";if(st(P)&&!A)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=st(P)?P.join("/"):P;if(!F)if(S)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u}return{re:o,score:s,keys:r,parse:a,stringify:l}}function sb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ib(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=sb(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(fu(s))return 1;if(fu(i))return-1}return i.length-s.length}function fu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rb={type:0,value:""},ob=/[a-zA-Z0-9_]/;function ab(t){if(!t)return[[]];if(t==="/")return[[rb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:ob.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function lb(t,e,n){const s=nb(ab(t.path),n),i=re(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cb(t,e){const n=[],s=new Map;e=_u({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=hb(u);m.aliasOf=d&&d.record;const A=_u(e,u),S=[m];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const Q of V)S.push(re({},m,{components:d?d.record.components:m.components,path:Q,aliasOf:d?d.record:m}))}let P,F;for(const V of S){const{path:Q}=V;if(h&&Q[0]!=="/"){const Ee=h.record.path,Ie=Ee[Ee.length-1]==="/"?"":"/";V.path=h.record.path+(Q&&Ie+Q)}if(P=lb(V,h,A),d?d.alias.push(P):(F=F||P,F!==P&&F.alias.push(P),_&&u.name&&!pu(P)&&o(u.name)),m.children){const Ee=m.children;for(let Ie=0;Ie<Ee.length;Ie++)r(Ee[Ie],P,d&&d.children[Ie])}d=d||P,l(P)}return F?()=>{o(F)}:Ws}function o(u){if(yf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&ib(u,n[h])>=0&&(u.record.path!==n[h].record.path||!If(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!pu(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,A;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw os(1,{location:u});A=d.record.name,_=re(ub(h.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(F=>F.re.test(m)),d&&(_=d.parse(m),A=d.record.name);else{if(d=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!d)throw os(1,{location:u,currentLocation:h});A=d.record.name,_=re({},h.params,u.params),m=d.stringify(_)}const S=[];let P=d;for(;P;)S.unshift(P.record),P=P.parent;return{name:A,path:m,params:_,matched:S,meta:fb(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ub(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function hb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:db(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function db(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function pu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fb(t){return t.reduce((e,n)=>re(e,n.meta),{})}function _u(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function If(t,e){return e.children.some(n=>n===t||If(t,n))}const wf=/#/g,pb=/&/g,_b=/\//g,gb=/=/g,mb=/\?/g,bf=/\+/g,vb=/%5B/g,yb=/%5D/g,Cf=/%5E/g,Eb=/%60/g,Tf=/%7B/g,Ib=/%7C/g,Sf=/%7D/g,wb=/%20/g;function Il(t){return encodeURI(""+t).replace(Ib,"|").replace(vb,"[").replace(yb,"]")}function bb(t){return Il(t).replace(Tf,"{").replace(Sf,"}").replace(Cf,"^")}function ea(t){return Il(t).replace(bf,"%2B").replace(wb,"+").replace(wf,"%23").replace(pb,"%26").replace(Eb,"`").replace(Tf,"{").replace(Sf,"}").replace(Cf,"^")}function Cb(t){return ea(t).replace(gb,"%3D")}function Tb(t){return Il(t).replace(wf,"%23").replace(mb,"%3F")}function Sb(t){return t==null?"":Tb(t).replace(_b,"%2F")}function ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Rb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(bf," "),o=r.indexOf("="),a=ur(o<0?r:r.slice(0,o)),l=o<0?null:ur(r.slice(o+1));if(a in e){let c=e[a];st(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gu(t){let e="";for(let n in t){const s=t[n];if(n=Cb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&ea(r)):[s&&ea(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Nb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=st(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Ab=Symbol(""),mu=Symbol(""),wl=Symbol(""),Rf=Symbol(""),ta=Symbol("");function Ts(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ft(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(os(4,{from:n,to:e})):h instanceof Error?a(h):Zw(h)?a(os(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ho(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Pb(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Ft(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Dw(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ft(d,n,s,r,o)()}))}}return i}function Pb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vu(t){const e=Ct(wl),n=Ct(Rf),s=Ve(()=>e.resolve(Kt(t.to))),i=Ve(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(rs.bind(null,u));if(d>-1)return d;const _=yu(l[c-2]);return c>1&&yu(u)===_&&h[h.length-1].path!==_?h.findIndex(rs.bind(null,l[c-2])):d}),r=Ve(()=>i.value>-1&&xb(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&mf(n.params,s.value.params));function a(l={}){return Ob(l)?e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(Ws):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const kb=Tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vu,setup(t,{slots:e}){const n=ms(vu(t)),{options:s}=Ct(wl),i=Ve(()=>({[Eu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Eu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:_f("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Nf=kb;function Ob(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xb(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!st(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function yu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Eu=(t,e,n)=>t!=null?t:e!=null?e:n,Mb=Tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ct(ta),i=Ve(()=>t.route||s.value),r=Ct(mu,0),o=Ve(()=>{let c=Kt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ve(()=>i.value.matched[o.value]);Li(mu,Ve(()=>o.value+1)),Li(Ab,a),Li(ta,i);const l=Dr();return Fi(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!rs(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=i.value,u=a.value,h=u&&u.components[t.name],d=t.name;if(!h)return Iu(n.default,{Component:h,route:c});const _=u.props[t.name],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,S=_f(h,re({},m,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return Iu(n.default,{Component:S,route:c})||S}}});function Iu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Af=Mb;function Db(t){const e=cb(t.routes,t),n=t.parseQuery||Rb,s=t.stringifyQuery||gu,i=t.history,r=Ts(),o=Ts(),a=Ts(),l=XE(xt);let c=xt;Fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=co.bind(null,v=>""+v),h=co.bind(null,Sb),d=co.bind(null,ur);function _(v,O){let R,x;return yf(v)?(R=e.getRecordMatcher(v),x=O):x=v,e.addRoute(x,R)}function m(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function A(){return e.getRoutes().map(v=>v.record)}function S(v){return!!e.getRecordMatcher(v)}function P(v,O){if(O=re({},O||l.value),typeof v=="string"){const B=uo(n,v,O.path),f=e.resolve({path:B.path},O),p=i.createHref(B.fullPath);return re(B,f,{params:d(f.params),hash:ur(B.hash),redirectedFrom:void 0,href:p})}let R;if("path"in v)R=re({},v,{path:uo(n,v.path,O.path).path});else{const B=re({},v.params);for(const f in B)B[f]==null&&delete B[f];R=re({},v,{params:h(v.params)}),O.params=h(O.params)}const x=e.resolve(R,O),ne=v.hash||"";x.params=u(d(x.params));const ce=Uw(s,re({},v,{hash:bb(ne),path:x.path})),z=i.createHref(ce);return re({fullPath:ce,hash:ne,query:s===gu?Nb(v.query):v.query||{}},x,{redirectedFrom:void 0,href:z})}function F(v){return typeof v=="string"?uo(n,v,l.value.path):re({},v)}function V(v,O){if(c!==v)return os(8,{from:O,to:v})}function Q(v){return He(v)}function Ee(v){return Q(re(F(v),{replace:!0}))}function Ie(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let x=typeof R=="function"?R(v):R;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=F(x):{path:x},x.params={}),re({query:v.query,hash:v.hash,params:"path"in x?{}:v.params},x)}}function He(v,O){const R=c=P(v),x=l.value,ne=v.state,ce=v.force,z=v.replace===!0,B=Ie(R);if(B)return He(re(F(B),{state:ne,force:ce,replace:z}),O||R);const f=R;f.redirectedFrom=O;let p;return!ce&&Ww(s,x,R)&&(p=os(16,{to:f,from:x}),An(x,x,!0,!1)),(p?Promise.resolve(p):xe(f,x)).catch(g=>Mt(g)?Mt(g,2)?g:Fe(g):le(g,f,x)).then(g=>{if(g){if(Mt(g,2))return He(re(F(g.to),{state:ne,force:ce,replace:z}),O||f)}else g=gt(f,x,!0,z,ne);return rt(f,x,g),g})}function Pt(v,O){const R=V(v,O);return R?Promise.reject(R):Promise.resolve()}function xe(v,O){let R;const[x,ne,ce]=Lb(v,O);R=ho(x.reverse(),"beforeRouteLeave",v,O);for(const B of x)B.leaveGuards.forEach(f=>{R.push(Ft(f,v,O))});const z=Pt.bind(null,v,O);return R.push(z),xn(R).then(()=>{R=[];for(const B of r.list())R.push(Ft(B,v,O));return R.push(z),xn(R)}).then(()=>{R=ho(ne,"beforeRouteUpdate",v,O);for(const B of ne)B.updateGuards.forEach(f=>{R.push(Ft(f,v,O))});return R.push(z),xn(R)}).then(()=>{R=[];for(const B of v.matched)if(B.beforeEnter&&!O.matched.includes(B))if(st(B.beforeEnter))for(const f of B.beforeEnter)R.push(Ft(f,v,O));else R.push(Ft(B.beforeEnter,v,O));return R.push(z),xn(R)}).then(()=>(v.matched.forEach(B=>B.enterCallbacks={}),R=ho(ce,"beforeRouteEnter",v,O),R.push(z),xn(R))).then(()=>{R=[];for(const B of o.list())R.push(Ft(B,v,O));return R.push(z),xn(R)}).catch(B=>Mt(B,8)?B:Promise.reject(B))}function rt(v,O,R){for(const x of a.list())x(v,O,R)}function gt(v,O,R,x,ne){const ce=V(v,O);if(ce)return ce;const z=O===xt,B=Fn?history.state:{};R&&(x||z?i.replace(v.fullPath,re({scroll:z&&B&&B.scroll},ne)):i.push(v.fullPath,ne)),l.value=v,An(v,O,R,z),Fe()}let qe;function Sn(){qe||(qe=i.listen((v,O,R)=>{if(!vs.listening)return;const x=P(v),ne=Ie(x);if(ne){He(re(ne,{replace:!0}),x).catch(Ws);return}c=x;const ce=l.value;Fn&&Kw(cu(ce.fullPath,R.delta),Vr()),xe(x,ce).catch(z=>Mt(z,12)?z:Mt(z,2)?(He(z.to,x).then(B=>{Mt(B,20)&&!R.delta&&R.type===oi.pop&&i.go(-1,!1)}).catch(Ws),Promise.reject()):(R.delta&&i.go(-R.delta,!1),le(z,x,ce))).then(z=>{z=z||gt(x,ce,!1),z&&(R.delta?i.go(-R.delta,!1):R.type===oi.pop&&Mt(z,20)&&i.go(-1,!1)),rt(x,ce,z)}).catch(Ws)}))}let Rn=Ts(),Nn=Ts(),_e;function le(v,O,R){Fe(v);const x=Nn.list();return x.length?x.forEach(ne=>ne(v,O,R)):console.error(v),Promise.reject(v)}function te(){return _e&&l.value!==xt?Promise.resolve():new Promise((v,O)=>{Rn.add([v,O])})}function Fe(v){return _e||(_e=!v,Sn(),Rn.list().forEach(([O,R])=>v?R(v):O()),Rn.reset()),v}function An(v,O,R,x){const{scrollBehavior:ne}=t;if(!Fn||!ne)return Promise.resolve();const ce=!R&&Gw(cu(v.fullPath,0))||(x||!R)&&history.state&&history.state.scroll||null;return $d().then(()=>ne(v,O,ce)).then(z=>z&&zw(z)).catch(z=>le(z,v,O))}const mt=v=>i.go(v);let ot;const $e=new Set,vs={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:S,getRoutes:A,resolve:P,options:t,push:Q,replace:Ee,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Nn.add,isReady:te,install(v){const O=this;v.component("RouterLink",Nf),v.component("RouterView",Af),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(l)}),Fn&&!ot&&l.value===xt&&(ot=!0,Q(i.location).catch(ne=>{}));const R={};for(const ne in xt)R[ne]=Ve(()=>l.value[ne]);v.provide(wl,O),v.provide(Rf,ms(R)),v.provide(ta,l);const x=v.unmount;$e.add(v),v.unmount=function(){$e.delete(v),$e.size<1&&(c=xt,qe&&qe(),qe=null,l.value=xt,ot=!1,_e=!1),x()}}};return vs}function xn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Lb(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>rs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>rs(c,l))||i.push(l))}return[n,s,i]}const Fb={class:"app"},Ub=yl("Home"),Wb=Tn({__name:"App",setup(t){return(e,n)=>(Ei(),Ii("div",Fb,[J("header",null,[J("nav",null,[Pe(Kt(Nf),{to:"/"},{default:gl(()=>[Ub]),_:1})])]),Pe(Kt(Af))]))}});var jr=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Pf=(t=>(t[t.SIGN_IN=0]="SIGN_IN",t[t.SIGN_UP=1]="SIGN_UP",t))(Pf||{});const Bb=Tn({setup(){return{ActiveTab:Pf}},data(){return{emailSignIn:"",passwordSignIn:"",emailSignUp:"",passwordSignUp:"",passwordRepeatSignUp:"",activeTab:0,isChangingTab:!1}},methods:{signUp(){if(this.passwordSignUp.length!==0&&this.passwordSignUp===this.passwordRepeatSignUp){const t=Qn(),e=Ar();W_(t,this.emailSignUp,this.passwordSignUp).then(async n=>{const s=n.user;console.log("user",s);const i=vt(e,`users/${s.uid}`);await Nr(i,{userId:s.uid,displayName:"Karlsson p\xE5 taket"})}).catch(n=>{console.log(n),n.code,n.message})}},signIn(){const t=Qn();B_(t,this.emailSignIn,this.passwordSignIn).then(e=>{const n=e.user;console.log("user",n)}).catch(e=>{console.log(e),e.code,e.message}),console.log("Sign in!")},changeTab(t){this.activeTab=t}}}),At=t=>(cI("data-v-ecc3efb8"),t=t(),uI(),t),Hb={class:"page-wrapper"},$b={class:"container"},Vb=At(()=>J("p",null,"SIGN IN: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),jb=At(()=>J("p",null,"SIGN UP: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),qb=At(()=>J("label",null,"Email",-1)),zb=At(()=>J("label",null,"Password",-1)),Kb=At(()=>J("button",{type:"submit"},"Sign in",-1)),Gb=At(()=>J("label",null,"Email",-1)),Yb=At(()=>J("label",null,"Password",-1)),Qb=At(()=>J("label",null,"Repeat password",-1)),Jb=At(()=>J("button",{type:"submit"},"Sign up",-1));function Xb(t,e,n,s,i,r){return Ei(),Ii("div",Hb,[J("div",$b,[J("div",{class:qn(["overlay",{right:t.activeTab===t.ActiveTab.SIGN_IN}])},[J("div",{class:qn(["sign-in-info",{active:t.activeTab===t.ActiveTab.SIGN_IN,inactive:t.activeTab!==t.ActiveTab.SIGN_IN}])},[Vb,J("button",{onClick:e[0]||(e[0]=()=>t.changeTab(t.ActiveTab.SIGN_UP))},"Sign UP instead!")],2),J("div",{class:qn(["sign-up-info",{active:t.activeTab===t.ActiveTab.SIGN_UP,inactive:t.activeTab!==t.ActiveTab.SIGN_UP}])},[jb,J("button",{onClick:e[1]||(e[1]=()=>t.changeTab(t.ActiveTab.SIGN_IN))},"Sign IN instead!")],2)],2),J("form",{onSubmit:e[4]||(e[4]=ru((...o)=>t.signIn&&t.signIn(...o),["prevent"])),class:"sign-in-form"},[qb,rn(J("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.emailSignIn=o)},null,512),[[an,t.emailSignIn]]),zb,rn(J("input",{type:"password","onUpdate:modelValue":e[3]||(e[3]=o=>t.passwordSignIn=o)},null,512),[[an,t.passwordSignIn]]),Kb],32),J("form",{onSubmit:e[8]||(e[8]=ru((...o)=>t.signUp&&t.signUp(...o),["prevent"])),class:"sign-up-form"},[Gb,rn(J("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.emailSignUp=o)},null,512),[[an,t.emailSignUp]]),Yb,rn(J("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=o=>t.passwordSignUp=o)},null,512),[[an,t.passwordSignUp]]),Qb,rn(J("input",{type:"password","onUpdate:modelValue":e[7]||(e[7]=o=>t.passwordRepeatSignUp=o)},null,512),[[an,t.passwordRepeatSignUp]]),Jb],32)])])}var Zb=jr(Bb,[["render",Xb],["__scopeId","data-v-ecc3efb8"]]);Qn();const en=Ar(),eC=Tn({setup(){return{store:Ct("store")}},data(){return{room:null,autogeneratedMemberKey:null,unsubscribeOnValue:null,player:null,videoUrlInput:"",done:!1}},computed:{roomId(){return this.$route.params.id}},watch:{roomId:{async handler(t,e,n){this.unsubscribeOnValue&&this.unsubscribeOnValue(),console.log(t,e),e&&await this.removeUserFromRoom(e),t&&this.onJoinRoom(t),n(()=>{this.unsubscribeOnValue&&this.unsubscribeOnValue()})}},"room.videoId":{handler(t){var e;console.log("videoId",t),(e=this.player)==null||e.loadVideoById(t)}},"room.state":{handler(t){var e,n,s;this.room&&this.room.host!==this.store.auth.userId&&(console.log("state",t),t==="paused"&&((e=this.player)==null?void 0:e.getPlayerState())!==2?(n=this.player)==null||n.pauseVideo():t==="playing"&&(console.log("seeking"),(s=this.player)==null||s.seekTo(this.room.time)))}}},beforeCreate(){window.onYouTubeIframeAPIReady=()=>{this.initYoutube()}},created(){this.onJoinRoom(this.roomId)},mounted(){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)},methods:{async onJoinRoom(t){await this.addUserToRoom(t)},async addUserToRoom(t){console.log("roomId",t);const e=vt(en,`users/${this.store.auth.userId}`);await On(e,{room:t});const n=vt(en,`rooms/${t}/members`);await On(n,{[this.store.auth.userId]:!0})},async removeUserFromRoom(t){const e=vt(en,`users/${this.store.auth.userId}`);await On(e,{room:null});const n=vt(en,`rooms/${t}/members`);await On(n,{[this.store.auth.userId]:!1})},initYoutube(){const t=new window.YT.Player("player",{height:"390",width:"640",videoId:null,playerVars:{playsinline:1,enablejsapi:1,disablekb:1},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange,onError:e=>console.log("error",e)}});this.player=t},async onPlayerReady(){const t=vt(en,`rooms/${this.roomId}`);this.unsubscribeOnValue=eE(t,e=>{const n=e.val();console.log("roomchange",n),this.room=n})},onPlayerStateChange(t){var n,s;if(console.log(t.data),t.data===3)return;const e=vt(en,`rooms/${this.roomId}`);t.data===1?On(e,{state:"playing",time:(n=this.player)==null?void 0:n.getCurrentTime()}):t.data===2&&On(e,{state:"paused",time:(s=this.player)==null?void 0:s.getCurrentTime()})},async loadVideo(){const t=new URL(this.videoUrlInput),e=new URLSearchParams(t.search);if(e.has("v")){const n=e.get("v"),s=vt(en,`rooms/${this.roomId}/videoId`);await Nr(s,n)}}}}),tC=J("div",{id:"player"},null,-1),nC=yl("Go to other Id");function sC(t,e,n,s,i,r){const o=tf("router-link");return Ei(),Ii(ut,null,[rn(J("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.videoUrlInput=a),placeholder:"video url here"},null,512),[[an,t.videoUrlInput]]),J("button",{onClick:e[1]||(e[1]=(...a)=>t.loadVideo&&t.loadVideo(...a))},"Load video"),tC,Pe(o,{to:"/yt-watchmen/rooms/4"},{default:gl(()=>[nC]),_:1})],64)}var iC=jr(eC,[["render",sC]]);const rC=Tn({computed:{roomId(){return this.$route.params.id}},components:{Video:iC}}),oC={class:"page-wrapper"};function aC(t,e,n,s,i,r){const o=tf("Video");return Ei(),Ii("div",oC,[Pe(o)])}var lC=jr(rC,[["render",aC]]);const cC=Tn({data(){return{roomName:""}},methods:{async onCreateRoom(){const t=await this.createRoom();this.$router.push(`/yt-watchmen/rooms/${t}`)},async createRoom(){const t=Ar(),e=Qn(),n=vt(t,"rooms"),s=await Xy(n);return await Nr(s,{host:e.currentUser.uid,name:this.roomName}),s.key}}}),uC={class:"page-wrapper"};function hC(t,e,n,s,i,r){return Ei(),Ii("div",uC,[rn(J("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.roomName=o),placeholder:"room name",required:""},null,512),[[an,t.roomName]]),J("button",{onClick:e[1]||(e[1]=(...o)=>t.onCreateRoom&&t.onCreateRoom(...o))},"Create room")])}var dC=jr(cC,[["render",hC]]);const fC=Db({history:Xw("/yt-watchmen/"),routes:[{path:"/",redirect:{name:"login"}},{path:"/yt-watchmen/",name:"login",component:Zb},{path:"/yt-watchmen/rooms/:id",name:"room",component:lC,meta:{requiresAuth:!0}},{path:"/yt-watchmen/rooms",name:"rooms",component:dC,meta:{requiresAuth:!0}}]}),pC=Qn(),na=Dr(null),sa=Dr(null),ia=Dr(!1),_C=ms({auth:{userId:na,userName:sa,loggedIn:ia}});H_(pC,t=>{t?(console.log("user",t),na.value=t.uid,sa.value=t.displayName,ia.value=!0):(console.log("sign out"),na.value=null,sa.value=null,ia.value=!1)});const bl=xw(Wb);bl.provide("store",_C);bl.use(fC);setTimeout(()=>{bl.mount("#app")},1e3);
