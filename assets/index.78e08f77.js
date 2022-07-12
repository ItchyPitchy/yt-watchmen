const sc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};sc();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ao=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ic=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[f],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ao(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ic(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},oc=function(t){const e=ao(t);return co.encodeByteArray(e,!0)},lo=function(t){return oc(t).replace(/\./g,"")},ac=function(t){try{return co.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function uc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dc(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hc(){return typeof indexedDB=="object"}function pc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gc,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,a,r)}}function mc(t,e){return t.replace(_c,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _c=/\{\$([^}]+)}/g;function vc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Js(i)&&Js(o)){if(!Qn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Js(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bc(t,e){const n=new yc(t,e);return n.subscribe.bind(n)}class yc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ic(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ar),s.error===void 0&&(s.error=Ar),s.complete===void 0&&(s.complete=Ar);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ic(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ar(){}/**
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
 */function ur(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _t="[DEFAULT]";/**
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
 */class Ec{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tc(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wc(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wc(t){return t===_t?void 0:t}function Tc(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ec(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Sc={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Cc=te.INFO,Ac={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Oc=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ac[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=Cc,this._logHandler=Oc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Pc=(t,e)=>e.some(n=>t instanceof n);let Ys,Xs;function kc(){return Ys||(Ys=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nc(){return Xs||(Xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fo=new WeakMap,jr=new WeakMap,ho=new WeakMap,Or=new WeakMap,gs=new WeakMap;function Mc(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fo.set(n,t)}).catch(()=>{}),gs.set(e,t),e}function Dc(t){if(jr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ho.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xc(t){Wr=t(Wr)}function Lc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pr(this),e,...n);return ho.set(r,e.sort?e.sort():[e]),ut(r)}:Nc().includes(t)?function(...e){return t.apply(Pr(this),e),ut(fo.get(this))}:function(...e){return ut(t.apply(Pr(this),e))}}function Uc(t){return typeof t=="function"?Lc(t):(t instanceof IDBTransaction&&Dc(t),Pc(t,kc())?new Proxy(t,Wr):t)}function ut(t){if(t instanceof IDBRequest)return Mc(t);if(Or.has(t))return Or.get(t);const e=Uc(t);return e!==t&&(Or.set(t,e),gs.set(e,t)),e}const Pr=t=>gs.get(t);function Fc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ut(o.result),c.oldVersion,c.newVersion,ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Bc=["get","getKey","getAll","getAllKeys","count"],$c=["put","add","delete","clear"],kr=new Map;function Qs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kr.get(e))return kr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$c.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bc.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return kr.set(e,i),i}xc(t=>({...t,get:(e,n,r)=>Qs(e,n)||t.get(e,n,r),has:(e,n)=>!!Qs(e,n)||t.has(e,n)}));/**
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
 */class Hc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",Zs="0.7.28";/**
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
 */const ms=new uo("@firebase/app"),Wc="@firebase/app-compat",Vc="@firebase/analytics-compat",zc="@firebase/analytics",Kc="@firebase/app-check-compat",qc="@firebase/app-check",Gc="@firebase/auth",Jc="@firebase/auth-compat",Yc="@firebase/database",Xc="@firebase/database-compat",Qc="@firebase/functions",Zc="@firebase/functions-compat",el="@firebase/installations",tl="@firebase/installations-compat",nl="@firebase/messaging",rl="@firebase/messaging-compat",sl="@firebase/performance",il="@firebase/performance-compat",ol="@firebase/remote-config",al="@firebase/remote-config-compat",cl="@firebase/storage",ll="@firebase/storage-compat",ul="@firebase/firestore",fl="@firebase/firestore-compat",dl="firebase",hl="9.9.0";/**
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
 */const po="[DEFAULT]",pl={[Vr]:"fire-core",[Wc]:"fire-core-compat",[zc]:"fire-analytics",[Vc]:"fire-analytics-compat",[qc]:"fire-app-check",[Kc]:"fire-app-check-compat",[Gc]:"fire-auth",[Jc]:"fire-auth-compat",[Yc]:"fire-rtdb",[Xc]:"fire-rtdb-compat",[Qc]:"fire-fn",[Zc]:"fire-fn-compat",[el]:"fire-iid",[tl]:"fire-iid-compat",[nl]:"fire-fcm",[rl]:"fire-fcm-compat",[sl]:"fire-perf",[il]:"fire-perf-compat",[ol]:"fire-rc",[al]:"fire-rc-compat",[cl]:"fire-gcs",[ll]:"fire-gcs-compat",[ul]:"fire-fst",[fl]:"fire-fst-compat","fire-js":"fire-js",[dl]:"fire-js-all"};/**
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
 */const Zn=new Map,zr=new Map;function gl(t,e){try{t.container.addComponent(e)}catch(n){ms.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(zr.has(e))return ms.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of Zn.values())gl(n,t);return!0}function go(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ml={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Tt=new On("app","Firebase",ml);/**
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
 */class _l{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const fr=hl;function vl(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:po,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Tt.create("bad-app-name",{appName:String(r)});const s=Zn.get(r);if(s){if(Qn(t,s.options)&&Qn(n,s.config))return s;throw Tt.create("duplicate-app",{appName:r})}const i=new Rc(r);for(const a of zr.values())i.addComponent(a);const o=new _l(t,n,i);return Zn.set(r,o),o}function bl(t=po){const e=Zn.get(t);if(!e)throw Tt.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=pl[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ms.warn(a.join(" "));return}_n(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yl="firebase-heartbeat-database",Il=1,vn="firebase-heartbeat-store";let Nr=null;function mo(){return Nr||(Nr=Fc(yl,Il,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vn)}}}).catch(t=>{throw Tt.create("storage-open",{originalErrorMessage:t.message})})),Nr}async function El(t){var e;try{return(await mo()).transaction(vn).objectStore(vn).get(_o(t))}catch(n){throw Tt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function ei(t,e){var n;try{const s=(await mo()).transaction(vn,"readwrite");return await s.objectStore(vn).put(e,_o(t)),s.done}catch(r){throw Tt.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function _o(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wl=1024,Tl=30*24*60*60*1e3;class Rl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cl(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ti();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Tl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ti(),{heartbeatsToSend:n,unsentEntries:r}=Sl(this._heartbeatsCache.heartbeats),s=lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ti(){return new Date().toISOString().substring(0,10)}function Sl(t,e=wl){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ni(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ni(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hc()?pc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await El(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ei(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ei(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ni(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Al(t){_n(new zt("platform-logger",e=>new Hc(e),"PRIVATE")),_n(new zt("heartbeat",e=>new Rl(e),"PRIVATE")),Ft(Vr,Zs,t),Ft(Vr,Zs,"esm2017"),Ft("fire-js","")}Al("");var Ol="firebase",Pl="9.9.0";/**
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
 */Ft(Ol,Pl,"app");function _s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kl=vo,bo=new On("auth","Firebase",vo());/**
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
 */const ri=new uo("@firebase/auth");function jn(t,...e){ri.logLevel<=te.ERROR&&ri.error(`Auth (${fr}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw vs(t,...e)}function Fe(t,...e){return vs(t,...e)}function Nl(t,e,n){const r=Object.assign(Object.assign({},kl()),{[e]:n});return new On("auth","Firebase",r).create(e,{appName:t.name})}function vs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bo.create(t,...e)}function L(t,e,...n){if(!t)throw vs(e,...n)}function Ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jn(e),new Error(e)}function Ge(t,e){t||Ve(e)}/**
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
 */const si=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=si.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,si.set(t,e),e)}/**
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
 */function Ml(t,e){const n=go(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qn(i,e!=null?e:{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function Dl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xl(){return ii()==="http:"||ii()==="https:"}function ii(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ll(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xl()||uc()||"connection"in navigator)?navigator.onLine:!0}function Ul(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=lc()||fc()}get(){return Ll()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bs(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yo{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Bl=new kn(3e4,6e4);function $l(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dr(t,e,n,r,s={}){return Io(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Pn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),yo.fetch()(Eo(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Io(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fl),e);try{const s=new jl(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ln(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ln(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ln(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ln(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Nl(t,f,l);qe(t,f)}}catch(s){if(s instanceof Qt)throw s;qe(t,"network-request-failed")}}async function Hl(t,e,n,r,s={}){const i=await dr(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Eo(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bs(t.config,s):`${t.config.apiScheme}://${s}`}class jl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Bl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ln(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Wl(t,e){return dr(t,"POST","/v1/accounts:delete",e)}async function Vl(t,e){return dr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zl(t,e=!1){const n=ur(t),r=await n.getIdToken(e),s=ys(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fn(Mr(s.auth_time)),issuedAtTime:fn(Mr(s.iat)),expirationTime:fn(Mr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mr(t){return Number(t)*1e3}function ys(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return jn("JWT malformed, contained fewer than 3 sections"),null;try{const i=ac(r);return i?JSON.parse(i):(jn("Failed to decode base64 JWT payload"),null)}catch(i){return jn("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Kl(t){const e=ys(t);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&ql(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ql({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fn(this.lastLoginAt),this.creationTime=fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function er(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bn(t,Vl(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xl(i.providerUserInfo):[],a=Yl(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Jl(t){const e=ur(t);await er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yl(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xl(t){return t.map(e=>{var{providerId:n}=e,r=_s(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ql(t,e){const n=await Io(t,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Eo(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yo.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Kl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ql(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new yn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yn,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
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
 */function Qe(t,e){L(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zl(this,e)}reload(){return Jl(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await er(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bn(this,Wl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:oe,providerData:ae,stsTokenManager:Ie}=n;L(j&&Ie,e,"internal-error");const Xe=yn.fromJSON(this.name,Ie);L(typeof j=="string",e,"internal-error"),Qe(h,e.name),Qe(p,e.name),L(typeof z=="boolean",e,"internal-error"),L(typeof oe=="boolean",e,"internal-error"),Qe(_,e.name),Qe(S,e.name),Qe(x,e.name),Qe(A,e.name),Qe(C,e.name),Qe(U,e.name);const pe=new It({uid:j,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:oe,photoURL:S,phoneNumber:_,tenantId:x,stsTokenManager:Xe,createdAt:C,lastLoginAt:U});return ae&&Array.isArray(ae)&&(pe.providerData=ae.map(ke=>Object.assign({},ke))),A&&(pe._redirectEventId=A),pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new yn;s.updateFromServerResponse(n);const i=new It({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await er(i),i}}/**
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
 */class To{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}To.type="NONE";const oi=To;/**
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
 */function Wn(t,e,n){return`firebase:${t}:${e}:${n}`}class Bt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bt(ze(oi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ze(oi);const o=Wn(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=It._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Bt(i,e,r))}}/**
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
 */function ai(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Co(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ro(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Oo(e))return"Blackberry";if(Po(e))return"Webos";if(Is(e))return"Safari";if((e.includes("chrome/")||So(e))&&!e.includes("edge/"))return"Chrome";if(Ao(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ro(t=fe()){return/firefox\//i.test(t)}function Is(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function So(t=fe()){return/crios\//i.test(t)}function Co(t=fe()){return/iemobile/i.test(t)}function Ao(t=fe()){return/android/i.test(t)}function Oo(t=fe()){return/blackberry/i.test(t)}function Po(t=fe()){return/webos/i.test(t)}function hr(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zl(t=fe()){var e;return hr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eu(){return dc()&&document.documentMode===10}function ko(t=fe()){return hr(t)||Ao(t)||Po(t)||Oo(t)||/windows phone/i.test(t)||Co(t)}function tu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function No(t,e=[]){let n;switch(t){case"Browser":n=ai(fe());break;case"Worker":n=`${ai(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${r}`}/**
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
 */class nu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class ru{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ci(this),this.idTokenSubscription=new ci(this),this.beforeStateQueue=new nu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await er(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ul()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ur(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new On("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Bt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=No(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Mo(t){return ur(t)}class ci{constructor(e){this.auth=e,this.observer=null,this.addObserver=bc(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Do{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,n){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}/**
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
 */async function $t(t,e){return Hl(t,"POST","/v1/accounts:signInWithIdp",$l(t,e))}/**
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
 */const su="http://localhost";class Rt extends Do{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_s(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $t(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$t(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$t(e,n)}buildRequest(){const e={requestUri:su,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pn(n)}return e}}/**
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
 */class xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nn extends xo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ot extends Nn{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
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
 */class at extends Nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return at.credential(n,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
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
 */class ct extends Nn{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
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
 */class lt extends Nn{constructor(){super("twitter.com")}static credential(e,n){return Rt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
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
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await It._fromIdTokenResponse(e,r,s),o=li(r);return new Kt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=li(r);return new Kt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function li(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tr extends Qt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new tr(e,n,r,s)}}function Lo(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tr._fromErrorAndOperation(t,i,e,r):i})}async function iu(t,e,n=!1){const r=await bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}/**
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
 */async function ou(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await bn(t,Lo(s,i,e,t),n);L(o.idToken,s,"internal-error");const a=ys(o.idToken);L(a,s,"internal-error");const{sub:c}=a;return L(t.uid===c,s,"user-mismatch"),Kt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&qe(s,"user-mismatch"),o}}/**
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
 */async function au(t,e,n=!1){const r="signIn",s=await Lo(t,r,e),i=await Kt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}const nr="__sak";/**
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
 */class Uo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nr,"1"),this.storage.removeItem(nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cu(){const t=fe();return Is(t)||hr(t)}const lu=1e3,uu=10;class Fo extends Uo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cu()&&tu(),this.fallbackToPolling=ko(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eu()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uu):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fo.type="LOCAL";const fu=Fo;/**
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
 */class Bo extends Uo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bo.type="SESSION";const $o=Bo;/**
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
 */function du(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await du(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pr.receivers=[];/**
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
 */function Es(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Es("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Be(){return window}function pu(t){Be().location.href=t}/**
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
 */function Ho(){return typeof Be().WorkerGlobalScope!="undefined"&&typeof Be().importScripts=="function"}async function gu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _u(){return Ho()?self:null}/**
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
 */const jo="firebaseLocalStorageDb",vu=1,rr="firebaseLocalStorage",Wo="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gr(t,e){return t.transaction([rr],e?"readwrite":"readonly").objectStore(rr)}function bu(){const t=indexedDB.deleteDatabase(jo);return new Mn(t).toPromise()}function qr(){const t=indexedDB.open(jo,vu);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rr,{keyPath:Wo})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rr)?e(r):(r.close(),await bu(),e(await qr()))})})}async function ui(t,e,n){const r=gr(t,!0).put({[Wo]:e,value:n});return new Mn(r).toPromise()}async function yu(t,e){const n=gr(t,!1).get(e),r=await new Mn(n).toPromise();return r===void 0?null:r.value}function fi(t,e){const n=gr(t,!0).delete(e);return new Mn(n).toPromise()}const Iu=800,Eu=3;class Vo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Eu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ho()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pr._getInstance(_u()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gu(),!this.activeServiceWorker)return;this.sender=new hu(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qr();return await ui(e,nr,"1"),await fi(e,nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ui(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yu(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gr(s,!1).getAll();return new Mn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Iu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vo.type="LOCAL";const wu=Vo;/**
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
 */function Tu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ru(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Tu().appendChild(r)})}function Su(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new kn(3e4,6e4);/**
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
 */function Cu(t,e){return e?ze(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ws extends Do{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $t(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $t(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $t(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Au(t){return au(t.auth,new ws(t),t.bypassAuthState)}function Ou(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),ou(n,new ws(t),t.bypassAuthState)}async function Pu(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),iu(n,new ws(t),t.bypassAuthState)}/**
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
 */class zo{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Au;case"linkViaPopup":case"linkViaRedirect":return Pu;case"reauthViaPopup":case"reauthViaRedirect":return Ou;default:qe(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ku=new kn(2e3,1e4);class Ut extends zo{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Es();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ku.get())};e()}}Ut.currentPopupAction=null;/**
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
 */const Nu="pendingRedirect",Vn=new Map;class Mu extends zo{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vn.get(this.auth._key());if(!e){try{const r=await Du(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vn.set(this.auth._key(),e)}return this.bypassAuthState||Vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Du(t,e){const n=Uu(e),r=Lu(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xu(t,e){Vn.set(t._key(),e)}function Lu(t){return ze(t._redirectPersistence)}function Uu(t){return Wn(Nu,t.config.apiKey,t.name)}async function Fu(t,e,n=!1){const r=Mo(t),s=Cu(r,e),o=await new Mu(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Bu=10*60*1e3;class $u{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hu(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ko(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bu&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}}function di(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ko({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ko(t);default:return!1}}/**
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
 */async function ju(t,e={}){return dr(t,"GET","/v1/projects",e)}/**
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
 */const Wu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vu=/^https?/;async function zu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ju(t);for(const n of e)try{if(Ku(n))return}catch{}qe(t,"unauthorized-domain")}function Ku(t){const e=Kr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vu.test(n))return!1;if(Wu.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qu=new kn(3e4,6e4);function hi(){const t=Be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gu(t){return new Promise((e,n)=>{var r,s,i;function o(){hi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hi(),n(Fe(t,"network-request-failed"))},timeout:qu.get()})}if(!((s=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Be().gapi)===null||i===void 0)&&i.load)o();else{const a=Su("iframefcb");return Be()[a]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},Ru(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw zn=null,e})}let zn=null;function Ju(t){return zn=zn||Gu(t),zn}/**
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
 */const Yu=new kn(5e3,15e3),Xu="__/auth/iframe",Qu="emulator/auth/iframe",Zu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ef=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tf(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bs(e,Qu):`https://${t.config.authDomain}/${Xu}`,r={apiKey:e.apiKey,appName:t.name,v:fr},s=ef.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pn(r).slice(1)}`}async function nf(t){const e=await Ju(t),n=Be().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:tf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zu,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),a=Be().setTimeout(()=>{i(o)},Yu.get());function c(){Be().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const rf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sf=500,of=600,af="_blank",cf="http://localhost";class pi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lf(t,e,n,r=sf,s=of){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},rf),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(a=So(l)?af:n),Ro(l)&&(e=e||cf,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(Zl(l)&&a!=="_self")return uf(e||"",a),new pi(null);const h=window.open(e||"",a,f);L(h,t,"popup-blocked");try{h.focus()}catch{}return new pi(h)}function uf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ff="__/auth/handler",df="emulator/auth/handler";function gi(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fr,eventId:s};if(e instanceof xo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Nn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${hf(t)}?${Pn(a).slice(1)}`}function hf({config:t}){return t.emulator?bs(t,df):`https://${t.authDomain}/${ff}`}/**
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
 */const Dr="webStorageSupport";class pf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$o,this._completeRedirectFn=Fu,this._overrideRedirectResult=xu}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=gi(e,n,r,Kr(),s);return lf(e,o,Es())}async _openRedirect(e,n,r,s){return await this._originValidation(e),pu(gi(e,n,r,Kr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nf(e),r=new $u(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dr,{type:Dr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Dr];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ko()||Is()||hr()}}const gf=pf;var mi="@firebase/auth",_i="0.20.5";/**
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
 */class mf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _f(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vf(t){_n(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:No(t)},f=new ru(a,c,l);return Dl(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new zt("auth-internal",e=>{const n=Mo(e.getProvider("auth").getImmediate());return(r=>new mf(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(mi,_i,_f(t)),Ft(mi,_i,"esm2017")}/**
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
 */function bf(t=bl()){const e=go(t,"auth");return e.isInitialized()?e.getImmediate():Ml(t,{popupRedirectResolver:gf,persistence:[wu,fu,$o]})}vf("Browser");const yf={apiKey:"AIzaSyA7mlXL-RQizJ8YVA03pSNlAV9W7T07FpY",authDomain:"yt-watchmen.firebaseapp.com",projectId:"yt-watchmen",storageBucket:"yt-watchmen.appspot.com",messagingSenderId:"359895816834",appId:"1:359895816834:web:bb43560e3588066de1b29b"},If=vl(yf);bf(If);function Ts(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ef="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wf=Ts(Ef);function qo(t){return!!t||t===""}function Rs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?Sf(r):Rs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ce(t))return t;if(ie(t))return t}}const Tf=/;(?![^(]*\))/g,Rf=/:(.+)/;function Sf(t){const e={};return t.split(Tf).forEach(n=>{if(n){const r=n.split(Rf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ht(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ht(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cf=t=>ce(t)?t:t==null?"":F(t)||ie(t)&&(t.toString===Xo||!$(t.toString))?JSON.stringify(t,Go,2):String(t),Go=(t,e)=>e&&e.__v_isRef?Go(t,e.value):Wt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Jo(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!F(e)&&!Qo(e)?String(e):e,Q={},jt=[],Ae=()=>{},Af=()=>!1,Of=/^on[^a-z]/,mr=t=>Of.test(t),Ss=t=>t.startsWith("onUpdate:"),he=Object.assign,Cs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pf=Object.prototype.hasOwnProperty,W=(t,e)=>Pf.call(t,e),F=Array.isArray,Wt=t=>_r(t)==="[object Map]",Jo=t=>_r(t)==="[object Set]",$=t=>typeof t=="function",ce=t=>typeof t=="string",As=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Yo=t=>ie(t)&&$(t.then)&&$(t.catch),Xo=Object.prototype.toString,_r=t=>Xo.call(t),kf=t=>_r(t).slice(8,-1),Qo=t=>_r(t)==="[object Object]",Os=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kn=Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nf=/-(\w)/g,qt=vr(t=>t.replace(Nf,(e,n)=>n?n.toUpperCase():"")),Mf=/\B([A-Z])/g,Zt=vr(t=>t.replace(Mf,"-$1").toLowerCase()),Zo=vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),xr=vr(t=>t?`on${Zo(t)}`:""),In=(t,e)=>!Object.is(t,e),qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},sr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vi;const Df=()=>vi||(vi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let xe;class xf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&xe&&(this.parent=xe,this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Lf(t,e=xe){e&&e.active&&e.effects.push(t)}const Ps=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ea=t=>(t.w&pt)>0,ta=t=>(t.n&pt)>0,Uf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pt},Ff=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ea(s)&&!ta(s)?s.delete(t):e[n++]=s,s.w&=~pt,s.n&=~pt}e.length=n}},Jr=new WeakMap;let ln=0,pt=1;const Yr=30;let Se;const Et=Symbol(""),Xr=Symbol("");class ks{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lf(this,r)}run(){if(!this.active)return this.fn();let e=Se,n=ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Se,Se=this,ft=!0,pt=1<<++ln,ln<=Yr?Uf(this):bi(this),this.fn()}finally{ln<=Yr&&Ff(this),pt=1<<--ln,Se=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(bi(this),this.onStop&&this.onStop(),this.active=!1)}}function bi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ft=!0;const na=[];function en(){na.push(ft),ft=!1}function tn(){const t=na.pop();ft=t===void 0?!0:t}function ye(t,e,n){if(ft&&Se){let r=Jr.get(t);r||Jr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ps()),ra(s)}}function ra(t,e){let n=!1;ln<=Yr?ta(t)||(t.n|=pt,n=!ea(t)):n=!t.has(Se),n&&(t.add(Se),Se.deps.push(t))}function Je(t,e,n,r,s,i){const o=Jr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?Os(n)&&a.push(o.get("length")):(a.push(o.get(Et)),Wt(t)&&a.push(o.get(Xr)));break;case"delete":F(t)||(a.push(o.get(Et)),Wt(t)&&a.push(o.get(Xr)));break;case"set":Wt(t)&&a.push(o.get(Et));break}if(a.length===1)a[0]&&Qr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qr(Ps(c))}}function Qr(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&yi(r);for(const r of n)r.computed||yi(r)}function yi(t,e){(t!==Se||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bf=Ts("__proto__,__v_isRef,__isVue"),sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(As)),$f=Ns(),Hf=Ns(!1,!0),jf=Ns(!0),Ii=Wf();function Wf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){en();const r=K(this)[e].apply(this,n);return tn(),r}}),t}function Ns(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?id:la:e?ca:aa).get(r))return r;const o=F(r);if(!t&&o&&W(Ii,s))return Reflect.get(Ii,s,i);const a=Reflect.get(r,s,i);return(As(s)?sa.has(s):Bf(s))||(t||ye(r,"get",s),e)?a:ue(a)?o&&Os(s)?a:a.value:ie(a)?t?ua(a):Dn(a):a}}const Vf=ia(),zf=ia(!0);function ia(t=!1){return function(n,r,s,i){let o=n[r];if(En(o)&&ue(o)&&!ue(s))return!1;if(!t&&!En(s)&&(Zr(s)||(s=K(s),o=K(o)),!F(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=F(n)&&Os(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?In(s,o)&&Je(n,"set",r,s):Je(n,"add",r,s)),c}}function Kf(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Je(t,"delete",e,void 0),r}function qf(t,e){const n=Reflect.has(t,e);return(!As(e)||!sa.has(e))&&ye(t,"has",e),n}function Gf(t){return ye(t,"iterate",F(t)?"length":Et),Reflect.ownKeys(t)}const oa={get:$f,set:Vf,deleteProperty:Kf,has:qf,ownKeys:Gf},Jf={get:jf,set(t,e){return!0},deleteProperty(t,e){return!0}},Yf=he({},oa,{get:Hf,set:zf}),Ms=t=>t,br=t=>Reflect.getPrototypeOf(t);function Un(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&ye(s,"get",e),ye(s,"get",i));const{has:o}=br(s),a=r?Ms:n?Ls:wn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Fn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&ye(r,"has",t),ye(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Bn(t,e=!1){return t=t.__v_raw,!e&&ye(K(t),"iterate",Et),Reflect.get(t,"size",t)}function Ei(t){t=K(t);const e=K(this);return br(e).has.call(e,t)||(e.add(t),Je(e,"add",t,t)),this}function wi(t,e){e=K(e);const n=K(this),{has:r,get:s}=br(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?In(e,o)&&Je(n,"set",t,e):Je(n,"add",t,e),this}function Ti(t){const e=K(this),{has:n,get:r}=br(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Je(e,"delete",t,void 0),i}function Ri(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Je(t,"clear",void 0,void 0),n}function $n(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Ms:t?Ls:wn;return!t&&ye(a,"iterate",Et),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Hn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Wt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ms:e?Ls:wn;return!e&&ye(i,"iterate",c?Xr:Et),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function Xf(){const t={get(i){return Un(this,i)},get size(){return Bn(this)},has:Fn,add:Ei,set:wi,delete:Ti,clear:Ri,forEach:$n(!1,!1)},e={get(i){return Un(this,i,!1,!0)},get size(){return Bn(this)},has:Fn,add:Ei,set:wi,delete:Ti,clear:Ri,forEach:$n(!1,!0)},n={get(i){return Un(this,i,!0)},get size(){return Bn(this,!0)},has(i){return Fn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:$n(!0,!1)},r={get(i){return Un(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return Fn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),e[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[t,n,e,r]}const[Qf,Zf,ed,td]=Xf();function Ds(t,e){const n=e?t?td:ed:t?Zf:Qf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const nd={get:Ds(!1,!1)},rd={get:Ds(!1,!0)},sd={get:Ds(!0,!1)},aa=new WeakMap,ca=new WeakMap,la=new WeakMap,id=new WeakMap;function od(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ad(t){return t.__v_skip||!Object.isExtensible(t)?0:od(kf(t))}function Dn(t){return En(t)?t:xs(t,!1,oa,nd,aa)}function cd(t){return xs(t,!1,Yf,rd,ca)}function ua(t){return xs(t,!0,Jf,sd,la)}function xs(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ad(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vt(t){return En(t)?Vt(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function Zr(t){return!!(t&&t.__v_isShallow)}function fa(t){return Vt(t)||En(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function da(t){return sr(t,"__v_skip",!0),t}const wn=t=>ie(t)?Dn(t):t,Ls=t=>ie(t)?ua(t):t;function ha(t){ft&&Se&&(t=K(t),ra(t.dep||(t.dep=Ps())))}function pa(t,e){t=K(t),t.dep&&Qr(t.dep)}function ue(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return ga(t,!1)}function ld(t){return ga(t,!0)}function ga(t,e){return ue(t)?t:new ud(t,e)}class ud{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:wn(e)}get value(){return ha(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),In(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:wn(e),pa(this))}}function Ke(t){return ue(t)?t.value:t}const fd={get:(t,e,n)=>Ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ma(t){return Vt(t)?t:new Proxy(t,fd)}class dd{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ks(e,()=>{this._dirty||(this._dirty=!0,pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return ha(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function hd(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ae):(r=t.get,s=t.set),new dd(r,s,i||!s,n)}function dt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yr(i,e,n)}return s}function Oe(t,e,n,r){if($(t)){const i=dt(t,e,n,r);return i&&Yo(i)&&i.catch(o=>{yr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Oe(t[i],e,n,r));return s}function yr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){dt(c,null,10,[t,o,a]);return}}pd(t,n,s,r)}function pd(t,e,n,r=!0){console.error(t)}let ir=!1,es=!1;const be=[];let We=0;const dn=[];let un=null,Mt=0;const hn=[];let rt=null,Dt=0;const _a=Promise.resolve();let Us=null,ts=null;function va(t){const e=Us||_a;return t?e.then(this?t.bind(this):t):e}function gd(t){let e=We+1,n=be.length;for(;e<n;){const r=e+n>>>1;Tn(be[r])<t?e=r+1:n=r}return e}function ba(t){(!be.length||!be.includes(t,ir&&t.allowRecurse?We+1:We))&&t!==ts&&(t.id==null?be.push(t):be.splice(gd(t.id),0,t),ya())}function ya(){!ir&&!es&&(es=!0,Us=_a.then(wa))}function md(t){const e=be.indexOf(t);e>We&&be.splice(e,1)}function Ia(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ya()}function _d(t){Ia(t,un,dn,Mt)}function vd(t){Ia(t,rt,hn,Dt)}function Ir(t,e=null){if(dn.length){for(ts=e,un=[...new Set(dn)],dn.length=0,Mt=0;Mt<un.length;Mt++)un[Mt]();un=null,Mt=0,ts=null,Ir(t,e)}}function Ea(t){if(Ir(),hn.length){const e=[...new Set(hn)];if(hn.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,r)=>Tn(n)-Tn(r)),Dt=0;Dt<rt.length;Dt++)rt[Dt]();rt=null,Dt=0}}const Tn=t=>t.id==null?1/0:t.id;function wa(t){es=!1,ir=!0,Ir(t),be.sort((n,r)=>Tn(n)-Tn(r));const e=Ae;try{for(We=0;We<be.length;We++){const n=be[We];n&&n.active!==!1&&dt(n,null,14)}}finally{We=0,be.length=0,Ea(),ir=!1,Us=null,(be.length||dn.length||hn.length)&&wa(t)}}function bd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Q;p&&(s=n.map(_=>_.trim())),h&&(s=n.map(Gr))}let a,c=r[a=xr(e)]||r[a=xr(qt(e))];!c&&i&&(c=r[a=xr(Zt(e))]),c&&Oe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Oe(l,t,6,s)}}function Ta(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const f=Ta(l,e,!0);f&&(a=!0,he(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):he(o,i),r.set(t,o),o)}function Er(t,e){return!t||!mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Zt(e))||W(t,e))}let Ue=null,wr=null;function or(t){const e=Ue;return Ue=t,wr=t&&t.type.__scopeId||null,e}function yd(t){wr=t}function Id(){wr=null}function ns(t,e=Ue,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Di(-1);const i=or(e),o=t(...s);return or(i),r._d&&Di(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Lr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:_,ctx:S,inheritAttrs:x}=t;let A,C;const U=or(t);try{if(n.shapeFlag&4){const z=s||r;A=Le(f.call(z,z,h,i,_,p,S)),C=c}else{const z=e;A=Le(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),C=e.props?c:Ed(c)}}catch(z){pn.length=0,yr(z,t,1),A=me(Rn)}let j=A;if(C&&x!==!1){const z=Object.keys(C),{shapeFlag:oe}=j;z.length&&oe&7&&(o&&z.some(Ss)&&(C=wd(C,o)),j=Gt(j,C))}return n.dirs&&(j=Gt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),A=j,or(U),A}const Ed=t=>{let e;for(const n in t)(n==="class"||n==="style"||mr(n))&&((e||(e={}))[n]=t[n]);return e},wd=(t,e)=>{const n={};for(const r in t)(!Ss(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Td(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Si(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Er(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Si(r,o,l):!0:!!o;return!1}function Si(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Er(n,i))return!0}return!1}function Rd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sd=t=>t.__isSuspense;function Cd(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):vd(t)}function Gn(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function ht(t,e,n=!1){const r=le||Ue;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}const Ci={};function Jn(t,e,n){return Ra(t,e,n)}function Ra(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const a=le;let c,l=!1,f=!1;if(ue(t)?(c=()=>t.value,l=Zr(t)):Vt(t)?(c=()=>t,r=!0):F(t)?(f=!0,l=t.some(C=>Vt(C)||Zr(C)),c=()=>t.map(C=>{if(ue(C))return C.value;if(Vt(C))return yt(C);if($(C))return dt(C,a,2)})):$(t)?e?c=()=>dt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Oe(t,a,3,[p])}:c=Ae,e&&r){const C=c;c=()=>yt(C())}let h,p=C=>{h=A.onStop=()=>{dt(C,a,4)}};if(Cn)return p=Ae,e?n&&Oe(e,a,3,[c(),f?[]:void 0,p]):c(),Ae;let _=f?[]:Ci;const S=()=>{if(!!A.active)if(e){const C=A.run();(r||l||(f?C.some((U,j)=>In(U,_[j])):In(C,_)))&&(h&&h(),Oe(e,a,3,[C,_===Ci?void 0:_,p]),_=C)}else A.run()};S.allowRecurse=!!e;let x;s==="sync"?x=S:s==="post"?x=()=>ge(S,a&&a.suspense):x=()=>_d(S);const A=new ks(c,x);return e?n?S():_=A.run():s==="post"?ge(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Cs(a.scope.effects,A)}}function Ad(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?Sa(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=le;Jt(this);const a=Ra(s,i.bind(r),n);return o?Jt(o):wt(),a}function Sa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yt(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))yt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)yt(t[n],e);else if(Jo(t)||Wt(t))t.forEach(n=>{yt(n,e)});else if(Qo(t))for(const n in t)yt(t[n],e);return t}function xn(t){return $(t)?{setup:t,name:t.name}:t}const Yn=t=>!!t.type.__asyncLoader,Ca=t=>t.type.__isKeepAlive;function Od(t,e){Aa(t,"a",e)}function Pd(t,e){Aa(t,"da",e)}function Aa(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Tr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ca(s.parent.vnode)&&kd(r,e,n,s),s=s.parent}}function kd(t,e,n,r){const s=Tr(e,t,r,!0);Oa(()=>{Cs(r[e],s)},n)}function Tr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;en(),Jt(n);const a=Oe(e,n,t,o);return wt(),tn(),a});return r?s.unshift(i):s.push(i),i}}const Ye=t=>(e,n=le)=>(!Cn||t==="sp")&&Tr(t,e,n),Nd=Ye("bm"),Md=Ye("m"),Dd=Ye("bu"),xd=Ye("u"),Ld=Ye("bum"),Oa=Ye("um"),Ud=Ye("sp"),Fd=Ye("rtg"),Bd=Ye("rtc");function $d(t,e=le){Tr("ec",t,e)}function sn(t,e){const n=Ue;if(n===null)return t;const r=Sr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&yt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function gt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(en(),Oe(c,n,8,[t.el,a,t,e]),tn())}}const Hd=Symbol(),rs=t=>t?$a(t)?Sr(t)||t.proxy:rs(t.parent):null,ar=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rs(t.parent),$root:t=>rs(t.root),$emit:t=>t.emit,$options:t=>ka(t),$forceUpdate:t=>t.f||(t.f=()=>ba(t.update)),$nextTick:t=>t.n||(t.n=va.bind(t.proxy)),$watch:t=>Ad.bind(t)}),jd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&W(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];ss&&(o[e]=0)}}const f=ar[e];let h,p;if(f)return e==="$attrs"&&ye(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&W(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&W(t,o)||e!==Q&&W(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(ar,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ss=!0;function Wd(t){const e=ka(t),n=t.proxy,r=t.ctx;ss=!1,e.beforeCreate&&Ai(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:S,activated:x,deactivated:A,beforeDestroy:C,beforeUnmount:U,destroyed:j,unmounted:z,render:oe,renderTracked:ae,renderTriggered:Ie,errorCaptured:Xe,serverPrefetch:pe,expose:ke,inheritAttrs:$e,components:Te,directives:Ct,filters:At}=e;if(l&&Vd(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const q=o[Z];$(q)&&(r[Z]=q.bind(n))}if(s){const Z=s.call(n,n);ie(Z)&&(t.data=Dn(Z))}if(ss=!0,i)for(const Z in i){const q=i[Z],_e=$(q)?q.bind(n,n):$(q.get)?q.get.bind(n,n):Ae,Pt=!$(q)&&$(q.set)?q.set.bind(n):Ae,He=we({get:_e,set:Pt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>He.value,set:Ne=>He.value=Ne})}if(a)for(const Z in a)Pa(a[Z],r,n,Z);if(c){const Z=$(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(q=>{Gn(q,Z[q])})}f&&Ai(f,t,"c");function se(Z,q){F(q)?q.forEach(_e=>Z(_e.bind(n))):q&&Z(q.bind(n))}if(se(Nd,h),se(Md,p),se(Dd,_),se(xd,S),se(Od,x),se(Pd,A),se($d,Xe),se(Bd,ae),se(Fd,Ie),se(Ld,U),se(Oa,z),se(Ud,pe),F(ke))if(ke.length){const Z=t.exposed||(t.exposed={});ke.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:_e=>n[q]=_e})})}else t.exposed||(t.exposed={});oe&&t.render===Ae&&(t.render=oe),$e!=null&&(t.inheritAttrs=$e),Te&&(t.components=Te),Ct&&(t.directives=Ct)}function Vd(t,e,n=Ae,r=!1){F(t)&&(t=is(t));for(const s in t){const i=t[s];let o;ie(i)?"default"in i?o=ht(i.from||s,i.default,!0):o=ht(i.from||s):o=ht(i),ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ai(t,e,n){Oe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pa(t,e,n,r){const s=r.includes(".")?Sa(n,r):()=>n[r];if(ce(t)){const i=e[t];$(i)&&Jn(s,i)}else if($(t))Jn(s,t.bind(n));else if(ie(t))if(F(t))t.forEach(i=>Pa(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Jn(s,i,t)}}function ka(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>cr(c,l,o,!0)),cr(c,e,o)),i.set(e,c),c}function cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cr(t,i,n,!0),s&&s.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zd={data:Oi,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:vt,directives:vt,watch:qd,provide:Oi,inject:Kd};function Oi(t,e){return e?t?function(){return he($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Kd(t,e){return vt(is(t),is(e))}function is(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function vt(t,e){return t?he(he(Object.create(null),t),e):e}function qd(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function Gd(t,e,n,r=!1){const s={},i={};sr(i,Rr,1),t.propsDefaults=Object.create(null),Na(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Jd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Er(t.emitsOptions,p))continue;const _=e[p];if(c)if(W(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const S=qt(p);s[S]=os(c,a,S,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Na(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!W(e,h)&&((f=Zt(h))===h||!W(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=os(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&Je(t,"set","$attrs")}function Na(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Kn(c))continue;const l=e[c];let f;s&&W(s,f=qt(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Er(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=os(s,c,h,l[h],t,!W(l,h))}}return o}function os(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Jt(s),r=l[n]=c.call(null,e),wt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function Ma(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const f=h=>{c=!0;const[p,_]=Ma(h,e,!0);he(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,jt),jt;if(F(i))for(let f=0;f<i.length;f++){const h=qt(i[f]);Pi(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=qt(f);if(Pi(h)){const p=i[f],_=o[h]=F(p)||$(p)?{type:p}:p;if(_){const S=Mi(Boolean,_.type),x=Mi(String,_.type);_[0]=S>-1,_[1]=x<0||S<x,(S>-1||W(_,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Pi(t){return t[0]!=="$"}function ki(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ni(t,e){return ki(t)===ki(e)}function Mi(t,e){return F(e)?e.findIndex(n=>Ni(n,t)):$(e)&&Ni(e,t)?0:-1}const Da=t=>t[0]==="_"||t==="$stable",Fs=t=>F(t)?t.map(Le):[Le(t)],Yd=(t,e,n)=>{if(e._n)return e;const r=ns((...s)=>Fs(e(...s)),n);return r._c=!1,r},xa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Da(s))continue;const i=t[s];if($(i))e[s]=Yd(s,i,r);else if(i!=null){const o=Fs(i);e[s]=()=>o}}},La=(t,e)=>{const n=Fs(e);t.slots.default=()=>n},Xd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),sr(e,"_",n)):xa(e,t.slots={})}else t.slots={},e&&La(t,e);sr(t.slots,Rr,1)},Qd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(he(s,e),!n&&a===1&&delete s._):(i=!e.$stable,xa(e,s)),o=e}else e&&(La(t,e),o={default:1});if(i)for(const a in s)!Da(a)&&!(a in o)&&delete s[a]};function Ua(){return{app:null,config:{isNativeTag:Af,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zd=0;function eh(t,e){return function(r,s=null){$(r)||(r=Object.assign({},r)),s!=null&&!ie(s)&&(s=null);const i=Ua(),o=new Set;let a=!1;const c=i.app={_uid:Zd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vh,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...f)):$(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=me(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Sr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function as(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>as(p,e&&(F(e)?e[_]:e),n,r,s));return}if(Yn(r)&&!s)return;const i=r.shapeFlag&4?Sr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Q?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ce(l)?(f[l]=null,W(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),$(c))dt(c,a,12,[o,f]);else{const p=ce(c),_=ue(c);if(p||_){const S=()=>{if(t.f){const x=p?f[c]:c.value;s?F(x)&&Cs(x,i):F(x)?x.includes(i)||x.push(i):p?(f[c]=[i],W(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,W(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,ge(S,n)):S()}}}const ge=Cd;function th(t){return nh(t)}function nh(t,e){const n=Df();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=Ae,cloneNode:S,insertStaticContent:x}=t,A=(u,d,g,b=null,v=null,E=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!on(u,d)&&(b=k(u),Ee(u,v,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:O}=d;switch(y){case Bs:C(u,d,g,b);break;case Rn:U(u,d,g,b);break;case Ur:u==null&&j(d,g,b,R);break;case je:Ct(u,d,g,b,v,E,R,I,w);break;default:O&1?ae(u,d,g,b,v,E,R,I,w):O&6?At(u,d,g,b,v,E,R,I,w):(O&64||O&128)&&y.process(u,d,g,b,v,E,R,I,w,ee)}N!=null&&v&&as(N,u&&u.ref,E,d||u,!d)},C=(u,d,g,b)=>{if(u==null)r(d.el=a(d.children),g,b);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},U=(u,d,g,b)=>{u==null?r(d.el=c(d.children||""),g,b):d.el=u.el},j=(u,d,g,b)=>{[u.el,u.anchor]=x(u.children,d,g,b,u.el,u.anchor)},z=({el:u,anchor:d},g,b)=>{let v;for(;u&&u!==d;)v=p(u),r(u,g,b),u=v;r(d,g,b)},oe=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},ae=(u,d,g,b,v,E,R,I,w)=>{R=R||d.type==="svg",u==null?Ie(d,g,b,v,E,R,I,w):ke(u,d,v,E,R,I,w)},Ie=(u,d,g,b,v,E,R,I)=>{let w,y;const{type:N,props:O,shapeFlag:M,transition:D,patchFlag:V,dirs:J}=u;if(u.el&&S!==void 0&&V===-1)w=u.el=S(u.el);else{if(w=u.el=o(u.type,E,O&&O.is,O),M&8?f(w,u.children):M&16&&pe(u.children,w,null,b,v,E&&N!=="foreignObject",R,I),J&&gt(u,null,b,"created"),O){for(const ne in O)ne!=="value"&&!Kn(ne)&&i(w,ne,null,O[ne],E,u.children,b,v,T);"value"in O&&i(w,"value",null,O.value),(y=O.onVnodeBeforeMount)&&De(y,b,u)}Xe(w,u,u.scopeId,R,b)}J&&gt(u,null,b,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&D&&!D.persisted;Y&&D.beforeEnter(w),r(w,d,g),((y=O&&O.onVnodeMounted)||Y||J)&&ge(()=>{y&&De(y,b,u),Y&&D.enter(w),J&&gt(u,null,b,"mounted")},v)},Xe=(u,d,g,b,v)=>{if(g&&_(u,g),b)for(let E=0;E<b.length;E++)_(u,b[E]);if(v){let E=v.subTree;if(d===E){const R=v.vnode;Xe(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},pe=(u,d,g,b,v,E,R,I,w=0)=>{for(let y=w;y<u.length;y++){const N=u[y]=I?st(u[y]):Le(u[y]);A(null,N,d,g,b,v,E,R,I)}},ke=(u,d,g,b,v,E,R)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:y,dirs:N}=d;w|=u.patchFlag&16;const O=u.props||Q,M=d.props||Q;let D;g&&mt(g,!1),(D=M.onVnodeBeforeUpdate)&&De(D,g,d,u),N&&gt(d,u,g,"beforeUpdate"),g&&mt(g,!0);const V=v&&d.type!=="foreignObject";if(y?$e(u.dynamicChildren,y,I,g,b,V,E):R||_e(u,d,I,null,g,b,V,E,!1),w>0){if(w&16)Te(I,d,O,M,g,b,v);else if(w&2&&O.class!==M.class&&i(I,"class",null,M.class,v),w&4&&i(I,"style",O.style,M.style,v),w&8){const J=d.dynamicProps;for(let Y=0;Y<J.length;Y++){const ne=J[Y],Re=O[ne],kt=M[ne];(kt!==Re||ne==="value")&&i(I,ne,Re,kt,v,u.children,g,b,T)}}w&1&&u.children!==d.children&&f(I,d.children)}else!R&&y==null&&Te(I,d,O,M,g,b,v);((D=M.onVnodeUpdated)||N)&&ge(()=>{D&&De(D,g,d,u),N&&gt(d,u,g,"updated")},b)},$e=(u,d,g,b,v,E,R)=>{for(let I=0;I<d.length;I++){const w=u[I],y=d[I],N=w.el&&(w.type===je||!on(w,y)||w.shapeFlag&70)?h(w.el):g;A(w,y,N,null,b,v,E,R,!0)}},Te=(u,d,g,b,v,E,R)=>{if(g!==b){for(const I in b){if(Kn(I))continue;const w=b[I],y=g[I];w!==y&&I!=="value"&&i(u,I,y,w,R,d.children,v,E,T)}if(g!==Q)for(const I in g)!Kn(I)&&!(I in b)&&i(u,I,g[I],null,R,d.children,v,E,T);"value"in b&&i(u,"value",g.value,b.value)}},Ct=(u,d,g,b,v,E,R,I,w)=>{const y=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:D}=d;D&&(I=I?I.concat(D):D),u==null?(r(y,g,b),r(N,g,b),pe(d.children,g,N,v,E,R,I,w)):O>0&&O&64&&M&&u.dynamicChildren?($e(u.dynamicChildren,M,g,v,E,R,I),(d.key!=null||v&&d===v.subTree)&&Fa(u,d,!0)):_e(u,d,g,N,v,E,R,I,w)},At=(u,d,g,b,v,E,R,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,b,R,w):Ot(d,g,b,v,E,R,w):se(u,d,w)},Ot=(u,d,g,b,v,E,R)=>{const I=u.component=dh(u,b,v);if(Ca(u)&&(I.ctx.renderer=ee),hh(I),I.asyncDep){if(v&&v.registerDep(I,Z),!u.el){const w=I.subTree=me(Rn);U(null,w,d,g)}return}Z(I,u,d,g,v,E,R)},se=(u,d,g)=>{const b=d.component=u.component;if(Td(u,d,g))if(b.asyncDep&&!b.asyncResolved){q(b,d,g);return}else b.next=d,md(b.update),b.update();else d.el=u.el,b.vnode=d},Z=(u,d,g,b,v,E,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:O,u:M,parent:D,vnode:V}=u,J=N,Y;mt(u,!1),N?(N.el=V.el,q(u,N,R)):N=V,O&&qn(O),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&De(Y,D,N,V),mt(u,!0);const ne=Lr(u),Re=u.subTree;u.subTree=ne,A(Re,ne,h(Re.el),k(Re),u,v,E),N.el=ne.el,J===null&&Rd(u,ne.el),M&&ge(M,v),(Y=N.props&&N.props.onVnodeUpdated)&&ge(()=>De(Y,D,N,V),v)}else{let N;const{el:O,props:M}=d,{bm:D,m:V,parent:J}=u,Y=Yn(d);if(mt(u,!1),D&&qn(D),!Y&&(N=M&&M.onVnodeBeforeMount)&&De(N,J,d),mt(u,!0),O&&B){const ne=()=>{u.subTree=Lr(u),B(O,u.subTree,u,v,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Lr(u);A(null,ne,g,b,u,v,E),d.el=ne.el}if(V&&ge(V,v),!Y&&(N=M&&M.onVnodeMounted)){const ne=d;ge(()=>De(N,J,ne),v)}(d.shapeFlag&256||J&&Yn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&ge(u.a,v),u.isMounted=!0,d=g=b=null}},w=u.effect=new ks(I,()=>ba(y),u.scope),y=u.update=()=>w.run();y.id=u.uid,mt(u,!0),y()},q=(u,d,g)=>{d.component=u;const b=u.vnode.props;u.vnode=d,u.next=null,Jd(u,d.props,b,g),Qd(u,d.children,g),en(),Ir(void 0,u.update),tn()},_e=(u,d,g,b,v,E,R,I,w=!1)=>{const y=u&&u.children,N=u?u.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:D}=d;if(M>0){if(M&128){He(y,O,g,b,v,E,R,I,w);return}else if(M&256){Pt(y,O,g,b,v,E,R,I,w);return}}D&8?(N&16&&T(y,v,E),O!==y&&f(g,O)):N&16?D&16?He(y,O,g,b,v,E,R,I,w):T(y,v,E,!0):(N&8&&f(g,""),D&16&&pe(O,g,b,v,E,R,I,w))},Pt=(u,d,g,b,v,E,R,I,w)=>{u=u||jt,d=d||jt;const y=u.length,N=d.length,O=Math.min(y,N);let M;for(M=0;M<O;M++){const D=d[M]=w?st(d[M]):Le(d[M]);A(u[M],D,g,null,v,E,R,I,w)}y>N?T(u,v,E,!0,!1,O):pe(d,g,b,v,E,R,I,w,O)},He=(u,d,g,b,v,E,R,I,w)=>{let y=0;const N=d.length;let O=u.length-1,M=N-1;for(;y<=O&&y<=M;){const D=u[y],V=d[y]=w?st(d[y]):Le(d[y]);if(on(D,V))A(D,V,g,null,v,E,R,I,w);else break;y++}for(;y<=O&&y<=M;){const D=u[O],V=d[M]=w?st(d[M]):Le(d[M]);if(on(D,V))A(D,V,g,null,v,E,R,I,w);else break;O--,M--}if(y>O){if(y<=M){const D=M+1,V=D<N?d[D].el:b;for(;y<=M;)A(null,d[y]=w?st(d[y]):Le(d[y]),g,V,v,E,R,I,w),y++}}else if(y>M)for(;y<=O;)Ee(u[y],v,E,!0),y++;else{const D=y,V=y,J=new Map;for(y=V;y<=M;y++){const ve=d[y]=w?st(d[y]):Le(d[y]);ve.key!=null&&J.set(ve.key,y)}let Y,ne=0;const Re=M-V+1;let kt=!1,Ks=0;const rn=new Array(Re);for(y=0;y<Re;y++)rn[y]=0;for(y=D;y<=O;y++){const ve=u[y];if(ne>=Re){Ee(ve,v,E,!0);continue}let Me;if(ve.key!=null)Me=J.get(ve.key);else for(Y=V;Y<=M;Y++)if(rn[Y-V]===0&&on(ve,d[Y])){Me=Y;break}Me===void 0?Ee(ve,v,E,!0):(rn[Me-V]=y+1,Me>=Ks?Ks=Me:kt=!0,A(ve,d[Me],g,null,v,E,R,I,w),ne++)}const qs=kt?rh(rn):jt;for(Y=qs.length-1,y=Re-1;y>=0;y--){const ve=V+y,Me=d[ve],Gs=ve+1<N?d[ve+1].el:b;rn[y]===0?A(null,Me,g,Gs,v,E,R,I,w):kt&&(Y<0||y!==qs[Y]?Ne(Me,g,Gs,2):Y--)}}},Ne=(u,d,g,b,v=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:y}=u;if(y&6){Ne(u.component.subTree,d,g,b);return}if(y&128){u.suspense.move(d,g,b);return}if(y&64){R.move(u,d,g,ee);return}if(R===je){r(E,d,g);for(let O=0;O<w.length;O++)Ne(w[O],d,g,b);r(u.anchor,d,g);return}if(R===Ur){z(u,d,g);return}if(b!==2&&y&1&&I)if(b===0)I.beforeEnter(E),r(E,d,g),ge(()=>I.enter(E),v);else{const{leave:O,delayLeave:M,afterLeave:D}=I,V=()=>r(E,d,g),J=()=>{O(E,()=>{V(),D&&D()})};M?M(E,V,J):J()}else r(E,d,g)},Ee=(u,d,g,b=!1,v=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:y,shapeFlag:N,patchFlag:O,dirs:M}=u;if(I!=null&&as(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const D=N&1&&M,V=!Yn(u);let J;if(V&&(J=R&&R.onVnodeBeforeUnmount)&&De(J,d,u),N&6)P(u.component,g,b);else{if(N&128){u.suspense.unmount(g,b);return}D&&gt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,v,ee,b):y&&(E!==je||O>0&&O&64)?T(y,d,g,!1,!0):(E===je&&O&384||!v&&N&16)&&T(w,d,g),b&&nn(u)}(V&&(J=R&&R.onVnodeUnmounted)||D)&&ge(()=>{J&&De(J,d,u),D&&gt(u,null,d,"unmounted")},g)},nn=u=>{const{type:d,el:g,anchor:b,transition:v}=u;if(d===je){m(g,b);return}if(d===Ur){oe(u);return}const E=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(g,E);I?I(u.el,E,w):w()}else E()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:b,scope:v,update:E,subTree:R,um:I}=u;b&&qn(b),v.stop(),E&&(E.active=!1,Ee(R,u,d,g)),I&&ge(I,d),ge(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,b=!1,v=!1,E=0)=>{for(let R=E;R<u.length;R++)Ee(u[R],d,g,b,v)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,d,g)=>{u==null?d._vnode&&Ee(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),Ea(),d._vnode=u},ee={p:A,um:Ee,m:Ne,r:nn,mt:Ot,mc:pe,pc:_e,pbc:$e,n:k,o:t};let H,B;return e&&([H,B]=e(ee)),{render:G,hydrate:H,createApp:eh(G,H)}}function mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=st(s[i]),a.el=o.el),n||Fa(o,a))}}function rh(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sh=t=>t.__isTeleport,je=Symbol(void 0),Bs=Symbol(void 0),Rn=Symbol(void 0),Ur=Symbol(void 0),pn=[];let Ce=null;function $s(t=!1){pn.push(Ce=t?null:[])}function ih(){pn.pop(),Ce=pn[pn.length-1]||null}let Sn=1;function Di(t){Sn+=t}function oh(t){return t.dynamicChildren=Sn>0?Ce||jt:null,ih(),Sn>0&&Ce&&Ce.push(t),t}function Hs(t,e,n,r,s,i){return oh(re(t,e,n,r,s,i,!0))}function cs(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Rr="__vInternal",Ba=({key:t})=>t!=null?t:null,Xn=({ref:t,ref_key:e,ref_for:n})=>t!=null?ce(t)||ue(t)||$(t)?{i:Ue,r:t,k:e,f:!!n}:t:null;function re(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ba(e),ref:e&&Xn(e),scopeId:wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ws(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),Sn>0&&!o&&Ce&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ce.push(c),c}const me=ah;function ah(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Hd)&&(t=Rn),cs(t)){const a=Gt(t,e,!0);return n&&Ws(a,n),Sn>0&&!i&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(t)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(_h(t)&&(t=t.__vccOpts),e){e=ch(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=Ht(a)),ie(c)&&(fa(c)&&!F(c)&&(c=he({},c)),e.style=Rs(c))}const o=ce(t)?1:Sd(t)?128:sh(t)?64:ie(t)?4:$(t)?2:0;return re(t,e,n,r,s,o,i,!0)}function ch(t){return t?fa(t)||Rr in t?he({},t):t:null}function Gt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?lh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ba(a),ref:e&&e.ref?n&&s?F(s)?s.concat(Xn(e)):[s,Xn(e)]:Xn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor}}function js(t=" ",e=0){return me(Bs,null,t,e)}function Le(t){return t==null||typeof t=="boolean"?me(Rn):F(t)?me(je,null,t.slice()):typeof t=="object"?st(t):me(Bs,null,String(t))}function st(t){return t.el===null||t.memo?t:Gt(t)}function Ws(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ws(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Rr in e)?e._ctx=Ue:s===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),r&64?(n=16,e=[js(e)]):n=8);t.children=e,t.shapeFlag|=n}function lh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ht([e.class,r.class]));else if(s==="style")e.style=Rs([e.style,r.style]);else if(mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function De(t,e,n,r=null){Oe(t,e,7,[n,r])}const uh=Ua();let fh=0;function dh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uh,i={uid:fh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ma(r,s),emitsOptions:Ta(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bd.bind(null,i),t.ce&&t.ce(i),i}let le=null;const Jt=t=>{le=t,t.scope.on()},wt=()=>{le&&le.scope.off(),le=null};function $a(t){return t.vnode.shapeFlag&4}let Cn=!1;function hh(t,e=!1){Cn=e;const{props:n,children:r}=t.vnode,s=$a(t);Gd(t,n,s,e),Xd(t,r);const i=s?ph(t,e):void 0;return Cn=!1,i}function ph(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=da(new Proxy(t.ctx,jd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?mh(t):null;Jt(t),en();const i=dt(r,t,0,[t.props,s]);if(tn(),wt(),Yo(i)){if(i.then(wt,wt),e)return i.then(o=>{xi(t,o,e)}).catch(o=>{yr(o,t,0)});t.asyncDep=i}else xi(t,i,e)}else Ha(t,e)}function xi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=ma(e)),Ha(t,n)}let Li;function Ha(t,e,n){const r=t.type;if(!t.render){if(!e&&Li&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=he(he({isCustomElement:i,delimiters:a},o),c);r.render=Li(s,l)}}t.render=r.render||Ae}Jt(t),en(),Wd(t),tn(),wt()}function gh(t){return new Proxy(t.attrs,{get(e,n){return ye(t,"get","$attrs"),e[n]}})}function mh(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=gh(t))},slots:t.slots,emit:t.emit,expose:e}}function Sr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ma(da(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ar)return ar[n](t)}}))}function _h(t){return $(t)&&"__vccOpts"in t}const we=(t,e)=>hd(t,e,Cn);function ja(t,e,n){const r=arguments.length;return r===2?ie(e)&&!F(e)?cs(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cs(n)&&(n=[n]),me(t,e,n))}const vh="3.2.37",bh="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,Ui=bt&&bt.createElement("template"),yh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bt.createElementNS(bh,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ui.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ui.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ih(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Eh(t,e,n){const r=t.style,s=ce(n);if(n&&!s){for(const i in n)ls(r,i,n[i]);if(e&&!ce(e))for(const i in e)n[i]==null&&ls(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Fi=/\s*!important$/;function ls(t,e,n){if(F(n))n.forEach(r=>ls(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wh(t,e);Fi.test(n)?t.setProperty(Zt(r),n.replace(Fi,""),"important"):t[r]=n}}const Bi=["Webkit","Moz","ms"],Fr={};function wh(t,e){const n=Fr[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Fr[e]=r;r=Zo(r);for(let s=0;s<Bi.length;s++){const i=Bi[s]+r;if(i in t)return Fr[e]=i}return e}const $i="http://www.w3.org/1999/xlink";function Th(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($i,e.slice(6,e.length)):t.setAttributeNS($i,e,n);else{const i=wf(e);n==null||i&&!qo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Rh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Wa,Sh]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let us=0;const Ch=Promise.resolve(),Ah=()=>{us=0},Oh=()=>us||(Ch.then(Ah),us=Wa());function xt(t,e,n,r){t.addEventListener(e,n,r)}function Ph(t,e,n,r){t.removeEventListener(e,n,r)}function kh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Nh(e);if(r){const l=i[e]=Mh(r,s);xt(t,a,l,c)}else o&&(Ph(t,a,o,c),i[e]=void 0)}}const Hi=/(?:Once|Passive|Capture)$/;function Nh(t){let e;if(Hi.test(t)){e={};let n;for(;n=t.match(Hi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Zt(t.slice(2)),e]}function Mh(t,e){const n=r=>{const s=r.timeStamp||Wa();(Sh||s>=n.attached-1)&&Oe(Dh(r,n.value),e,5,[r])};return n.value=t,n.attached=Oh(),n}function Dh(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ji=/^on[a-z]/,xh=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Ih(t,r,s):e==="style"?Eh(t,n,r):mr(e)?Ss(e)||kh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lh(t,e,r,s))?Rh(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Th(t,e,r,s))};function Lh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ji.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ji.test(e)&&ce(n)?!1:e in t}const Wi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>qn(e,n):e};function Uh(t){t.target.composing=!0}function Vi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const an={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Wi(s);const i=r||s.props&&s.props.type==="number";xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gr(a)),t._assign(a)}),n&&xt(t,"change",()=>{t.value=t.value.trim()}),e||(xt(t,"compositionstart",Uh),xt(t,"compositionend",Vi),xt(t,"change",Vi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Wi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Gr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Fh=he({patchProp:xh},yh);let zi;function Bh(){return zi||(zi=th(Fh))}const $h=(...t)=>{const e=Bh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hh(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hh(t){return ce(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof window!="undefined";function jh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Br(t,e){const n={};for(const r in e){const s=e[r];n[r]=Pe(s)?s.map(t):t(s)}return n}const gn=()=>{},Pe=Array.isArray,Wh=/\/$/,Vh=t=>t.replace(Wh,"");function $r(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Gh(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function zh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ki(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yt(e.matched[r],n.matched[s])&&Va(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Va(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qh(t[n],e[n]))return!1;return!0}function qh(t,e){return Pe(t)?qi(t,e):Pe(e)?qi(e,t):t===e}function qi(t,e){return Pe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Gh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(t){t.pop="pop",t.push="push"})(An||(An={}));var mn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mn||(mn={}));function Jh(t){if(!t)if(Lt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vh(t)}const Yh=/^[^#]+#/;function Xh(t,e){return t.replace(Yh,"#")+e}function Qh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Qh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Gi(t,e){return(history.state?history.state.position-e:-1)+t}const fs=new Map;function ep(t,e){fs.set(t,e)}function tp(t){const e=fs.get(t);return fs.delete(t),e}let np=()=>location.protocol+"//"+location.host;function za(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ki(c,"")}return Ki(n,t)+r+s}function rp(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=za(t,location),S=n.value,x=e.value;let A=0;if(p){if(n.value=_,e.value=p,o&&o===S){o=null;return}A=x?p.position-x.position:0}else r(_);s.forEach(C=>{C(n.value,S,{delta:A,type:An.pop,direction:A?A>0?mn.forward:mn.back:mn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Cr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Ji(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Cr():null}}function sp(t){const{history:e,location:n}=window,r={value:za(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:np()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=X({},e.state,Ji(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=X({},s.value,e.state,{forward:c,scroll:Cr()});i(f.current,f,!0);const h=X({},Ji(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ip(t){t=Jh(t);const e=sp(t),n=rp(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Xh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function op(t){return typeof t=="string"||t&&typeof t=="object"}function Ka(t){return typeof t=="string"||typeof t=="symbol"}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qa=Symbol("");var Yi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yi||(Yi={}));function Xt(t,e){return X(new Error,{type:t,[qa]:!0},e)}function tt(t,e){return t instanceof Error&&qa in t&&(e==null||!!(t.type&e))}const Xi="[^/]+?",ap={sensitive:!1,strict:!1,start:!0,end:!0},cp=/[.+*?^${}()[\]/\\]/g;function lp(t,e){const n=X({},ap,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(cp,"\\$&"),_+=40;else if(p.type===1){const{value:S,repeatable:x,optional:A,regexp:C}=p;i.push({name:S,repeatable:x,optional:A});const U=C||Xi;if(U!==Xi){_+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+z.message)}}let j=x?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(j=A&&l.length<2?`(?:/${j})`:"/"+j),A&&(j+="?"),s+=j,_+=20,A&&(_+=-8),x&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",S=i[p-1];h[S.name]=_&&S.repeatable?_.split("/"):_}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:x,optional:A}=_,C=S in l?l[S]:"";if(Pe(C)&&!x)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=Pe(C)?C.join("/"):C;if(!U)if(A)p.length<2&&t.length>1&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function up(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function fp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=up(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qi(r))return 1;if(Qi(s))return-1}return s.length-r.length}function Qi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dp={type:0,value:""},hp=/[a-zA-Z0-9_]/;function pp(t){if(!t)return[[]];if(t==="/")return[[dp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:hp.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function gp(t,e,n){const r=lp(pp(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mp(t,e){const n=[],r=new Map;e=eo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const _=!p,S=vp(f);S.aliasOf=p&&p.record;const x=eo(e,f),A=[S];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of j)A.push(X({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let C,U;for(const j of A){const{path:z}=j;if(h&&z[0]!=="/"){const oe=h.record.path,ae=oe[oe.length-1]==="/"?"":"/";j.path=h.record.path+(z&&ae+z)}if(C=gp(j,h,x),p?p.alias.push(C):(U=U||C,U!==C&&U.alias.push(C),_&&f.name&&!Zi(C)&&o(f.name)),S.children){const oe=S.children;for(let ae=0;ae<oe.length;ae++)i(oe[ae],C,p&&p.children[ae])}p=p||C,c(C)}return U?()=>{o(U)}:gn}function o(f){if(Ka(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&fp(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Ga(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Zi(f)&&r.set(f.record.name,f)}function l(f,h){let p,_={},S,x;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Xt(1,{location:f});x=p.record.name,_=X(_p(h.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),f.params),S=p.stringify(_)}else if("path"in f)S=f.path,p=n.find(U=>U.re.test(S)),p&&(_=p.parse(S),x=p.record.name);else{if(p=h.name?r.get(h.name):n.find(U=>U.re.test(h.path)),!p)throw Xt(1,{location:f,currentLocation:h});x=p.record.name,_=X({},h.params,f.params),S=p.stringify(_)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:x,path:S,params:_,matched:A,meta:yp(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function _p(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yp(t){return t.reduce((e,n)=>X(e,n.meta),{})}function eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ga(t,e){return e.children.some(n=>n===t||Ga(t,n))}const Ja=/#/g,Ip=/&/g,Ep=/\//g,wp=/=/g,Tp=/\?/g,Ya=/\+/g,Rp=/%5B/g,Sp=/%5D/g,Xa=/%5E/g,Cp=/%60/g,Qa=/%7B/g,Ap=/%7C/g,Za=/%7D/g,Op=/%20/g;function Vs(t){return encodeURI(""+t).replace(Ap,"|").replace(Rp,"[").replace(Sp,"]")}function Pp(t){return Vs(t).replace(Qa,"{").replace(Za,"}").replace(Xa,"^")}function ds(t){return Vs(t).replace(Ya,"%2B").replace(Op,"+").replace(Ja,"%23").replace(Ip,"%26").replace(Cp,"`").replace(Qa,"{").replace(Za,"}").replace(Xa,"^")}function kp(t){return ds(t).replace(wp,"%3D")}function Np(t){return Vs(t).replace(Ja,"%23").replace(Tp,"%3F")}function Mp(t){return t==null?"":Np(t).replace(Ep,"%2F")}function lr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ya," "),o=i.indexOf("="),a=lr(o<0?i:i.slice(0,o)),c=o<0?null:lr(i.slice(o+1));if(a in e){let l=e[a];Pe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function to(t){let e="";for(let n in t){const r=t[n];if(n=kp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pe(r)?r.map(i=>i&&ds(i)):[r&&ds(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function xp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Lp=Symbol(""),no=Symbol(""),zs=Symbol(""),ec=Symbol(""),hs=Symbol("");function cn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function it(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Xt(4,{from:n,to:e})):h instanceof Error?a(h):op(h)?a(Xt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Hr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Up(a)){const l=(a.__vccOpts||a)[e];l&&s.push(it(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=jh(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&it(p,n,r,i,o)()}))}}return s}function Up(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ro(t){const e=ht(zs),n=ht(ec),r=we(()=>e.resolve(Ke(t.to))),s=we(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Yt.bind(null,f));if(p>-1)return p;const _=so(c[l-2]);return l>1&&so(f)===_&&h[h.length-1].path!==_?h.findIndex(Yt.bind(null,c[l-2])):p}),i=we(()=>s.value>-1&&$p(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&Va(n.params,r.value.params));function a(c={}){return Bp(c)?e[Ke(t.replace)?"replace":"push"](Ke(t.to)).catch(gn):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Fp=xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(t,{slots:e}){const n=Dn(ro(t)),{options:r}=ht(zs),s=we(()=>({[io(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[io(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ja("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ps=Fp;function Bp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $p(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function so(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const io=(t,e,n)=>t!=null?t:e!=null?e:n,Hp=xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ht(hs),s=we(()=>t.route||r.value),i=ht(no,0),o=we(()=>{let l=Ke(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=we(()=>s.value.matched[o.value]);Gn(no,we(()=>o.value+1)),Gn(Lp,a),Gn(hs,s);const c=nt();return Jn(()=>[c.value,a.value,t.name],([l,f,h],[p,_,S])=>{f&&(f.instances[h]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!Yt(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(x=>x(l))},{flush:"post"}),()=>{const l=s.value,f=a.value,h=f&&f.components[t.name],p=t.name;if(!h)return oo(n.default,{Component:h,route:l});const _=f.props[t.name],S=_?_===!0?l.params:typeof _=="function"?_(l):_:null,A=ja(h,X({},S,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[p]=null)},ref:c}));return oo(n.default,{Component:A,route:l})||A}}});function oo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tc=Hp;function jp(t){const e=mp(t.routes,t),n=t.parseQuery||Dp,r=t.stringifyQuery||to,s=t.history,i=cn(),o=cn(),a=cn(),c=ld(et);let l=et;Lt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Br.bind(null,m=>""+m),h=Br.bind(null,Mp),p=Br.bind(null,lr);function _(m,P){let T,k;return Ka(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function x(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=X({},P||c.value),typeof m=="string"){const B=$r(n,m,P.path),u=e.resolve({path:B.path},P),d=s.createHref(B.fullPath);return X(B,u,{params:p(u.params),hash:lr(B.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=X({},m,{path:$r(n,m.path,P.path).path});else{const B=X({},m.params);for(const u in B)B[u]==null&&delete B[u];T=X({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),G=m.hash||"";k.params=f(p(k.params));const ee=zh(r,X({},m,{hash:Pp(G),path:k.path})),H=s.createHref(ee);return X({fullPath:ee,hash:G,query:r===to?xp(m.query):m.query||{}},k,{redirectedFrom:void 0,href:H})}function U(m){return typeof m=="string"?$r(n,m,c.value.path):X({},m)}function j(m,P){if(l!==m)return Xt(8,{from:P,to:m})}function z(m){return Ie(m)}function oe(m){return z(X(U(m),{replace:!0}))}function ae(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=U(k):{path:k},k.params={}),X({query:m.query,hash:m.hash,params:"path"in k?{}:m.params},k)}}function Ie(m,P){const T=l=C(m),k=c.value,G=m.state,ee=m.force,H=m.replace===!0,B=ae(T);if(B)return Ie(X(U(B),{state:G,force:ee,replace:H}),P||T);const u=T;u.redirectedFrom=P;let d;return!ee&&Kh(r,k,T)&&(d=Xt(16,{to:u,from:k}),Pt(k,k,!0,!1)),(d?Promise.resolve(d):pe(u,k)).catch(g=>tt(g)?tt(g,2)?g:_e(g):Z(g,u,k)).then(g=>{if(g){if(tt(g,2))return Ie(X(U(g.to),{state:G,force:ee,replace:H}),P||u)}else g=$e(u,k,!0,H,G);return ke(u,k,g),g})}function Xe(m,P){const T=j(m,P);return T?Promise.reject(T):Promise.resolve()}function pe(m,P){let T;const[k,G,ee]=Wp(m,P);T=Hr(k.reverse(),"beforeRouteLeave",m,P);for(const B of k)B.leaveGuards.forEach(u=>{T.push(it(u,m,P))});const H=Xe.bind(null,m,P);return T.push(H),Nt(T).then(()=>{T=[];for(const B of i.list())T.push(it(B,m,P));return T.push(H),Nt(T)}).then(()=>{T=Hr(G,"beforeRouteUpdate",m,P);for(const B of G)B.updateGuards.forEach(u=>{T.push(it(u,m,P))});return T.push(H),Nt(T)}).then(()=>{T=[];for(const B of m.matched)if(B.beforeEnter&&!P.matched.includes(B))if(Pe(B.beforeEnter))for(const u of B.beforeEnter)T.push(it(u,m,P));else T.push(it(B.beforeEnter,m,P));return T.push(H),Nt(T)}).then(()=>(m.matched.forEach(B=>B.enterCallbacks={}),T=Hr(ee,"beforeRouteEnter",m,P),T.push(H),Nt(T))).then(()=>{T=[];for(const B of o.list())T.push(it(B,m,P));return T.push(H),Nt(T)}).catch(B=>tt(B,8)?B:Promise.reject(B))}function ke(m,P,T){for(const k of a.list())k(m,P,T)}function $e(m,P,T,k,G){const ee=j(m,P);if(ee)return ee;const H=P===et,B=Lt?history.state:{};T&&(k||H?s.replace(m.fullPath,X({scroll:H&&B&&B.scroll},G)):s.push(m.fullPath,G)),c.value=m,Pt(m,P,T,H),_e()}let Te;function Ct(){Te||(Te=s.listen((m,P,T)=>{if(!nn.listening)return;const k=C(m),G=ae(k);if(G){Ie(X(G,{replace:!0}),k).catch(gn);return}l=k;const ee=c.value;Lt&&ep(Gi(ee.fullPath,T.delta),Cr()),pe(k,ee).catch(H=>tt(H,12)?H:tt(H,2)?(Ie(H.to,k).then(B=>{tt(B,20)&&!T.delta&&T.type===An.pop&&s.go(-1,!1)}).catch(gn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(H,k,ee))).then(H=>{H=H||$e(k,ee,!1),H&&(T.delta?s.go(-T.delta,!1):T.type===An.pop&&tt(H,20)&&s.go(-1,!1)),ke(k,ee,H)}).catch(gn)}))}let At=cn(),Ot=cn(),se;function Z(m,P,T){_e(m);const k=Ot.list();return k.length?k.forEach(G=>G(m,P,T)):console.error(m),Promise.reject(m)}function q(){return se&&c.value!==et?Promise.resolve():new Promise((m,P)=>{At.add([m,P])})}function _e(m){return se||(se=!m,Ct(),At.list().forEach(([P,T])=>m?T(m):P()),At.reset()),m}function Pt(m,P,T,k){const{scrollBehavior:G}=t;if(!Lt||!G)return Promise.resolve();const ee=!T&&tp(Gi(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return va().then(()=>G(m,P,ee)).then(H=>H&&Zh(H)).catch(H=>Z(H,m,P))}const He=m=>s.go(m);let Ne;const Ee=new Set,nn={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,hasRoute:A,getRoutes:x,resolve:C,options:t,push:z,replace:oe,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ot.add,isReady:q,install(m){const P=this;m.component("RouterLink",ps),m.component("RouterView",tc),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(c)}),Lt&&!Ne&&c.value===et&&(Ne=!0,z(s.location).catch(G=>{}));const T={};for(const G in et)T[G]=we(()=>c.value[G]);m.provide(zs,P),m.provide(ec,Dn(T)),m.provide(hs,c);const k=m.unmount;Ee.add(m),m.unmount=function(){Ee.delete(m),Ee.size<1&&(l=et,Te&&Te(),Te=null,c.value=et,Ne=!1,se=!1),k()}}};return nn}function Nt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Wp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Yt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Yt(l,c))||s.push(c))}return[n,r,s]}const Vp={class:"app"},zp=js("Home"),Kp=js("About"),qp=xn({__name:"App",setup(t){return(e,n)=>($s(),Hs("div",Vp,[re("header",null,[re("nav",null,[me(Ke(ps),{to:"/"},{default:ns(()=>[zp]),_:1}),me(Ke(ps),{to:"/about"},{default:ns(()=>[Kp]),_:1})])]),me(Ke(tc))]))}});var nc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const St=t=>(yd("data-v-9fa27482"),t=t(),Id(),t),Gp={class:"page-wrapper"},Jp={class:"container"},Yp=St(()=>re("p",null,"SIGN IN: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),Xp=St(()=>re("p",null,"SIGN UP: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),Qp={class:"sign-in-form"},Zp=St(()=>re("label",null,"Email",-1)),eg=St(()=>re("label",null,"Password",-1)),tg={class:"sign-up-form"},ng=St(()=>re("label",null,"Email",-1)),rg=St(()=>re("label",null,"Password",-1)),sg=St(()=>re("label",null,"Repeat password",-1)),ig=xn({__name:"Login",setup(t){const e=nt(""),n=nt(""),r=nt(""),s=nt(""),i=nt(""),o=nt(0);nt(!1);function a(c){o.value=c}return(c,l)=>($s(),Hs("div",Gp,[re("div",Jp,[re("div",{class:Ht(["overlay",{right:o.value===0}])},[re("div",{class:Ht(["sign-in-info",{active:o.value===0,inactive:o.value!==0}])},[Yp,re("button",{onClick:l[0]||(l[0]=()=>a(1))},"Sign UP instead!")],2),re("div",{class:Ht(["sign-up-info",{active:o.value===1,inactive:o.value!==1}])},[Xp,re("button",{onClick:l[1]||(l[1]=()=>a(0))},"Sign IN instead!")],2)],2),re("form",Qp,[Zp,sn(re("input",{"onUpdate:modelValue":l[2]||(l[2]=f=>e.value=f)},null,512),[[an,e.value]]),eg,sn(re("input",{type:"password","onUpdate:modelValue":l[3]||(l[3]=f=>n.value=f)},null,512),[[an,n.value]])]),re("form",tg,[ng,sn(re("input",{"onUpdate:modelValue":l[4]||(l[4]=f=>r.value=f)},null,512),[[an,r.value]]),rg,sn(re("input",{type:"password","onUpdate:modelValue":l[5]||(l[5]=f=>s.value=f)},null,512),[[an,s.value]]),sg,sn(re("input",{type:"password","onUpdate:modelValue":l[6]||(l[6]=f=>i.value=f)},null,512),[[an,i.value]])])])]))}});var og=nc(ig,[["__scopeId","data-v-9fa27482"]]);const ag=xn({computed:{roomId(){return this.$route.params.id}},created(){console.log("created!")}});function cg(t,e,n,r,s,i){return $s(),Hs("p",null,Cf(t.roomId),1)}var lg=nc(ag,[["render",cg]]);const ug=jp({history:ip("/dist/"),routes:[{path:"/",name:"home",component:og},{path:"/room/:id",name:"room",component:lg}]}),rc=$h(qp);rc.use(ug);rc.mount("#app");
