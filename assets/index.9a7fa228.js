const pc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};pc();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gc=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,_=l&63;a||(_=64,o||(p=64)),r.push(n[f],n[d],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||d==null)throw Error();const p=i<<2|c>>4;if(r.push(p),l!==64){const _=c<<4&240|l>>2;if(r.push(_),d!==64){const S=l<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mc=function(t){const e=yo(t);return bo.encodeByteArray(e,!0)},Io=function(t){return mc(t).replace(/\./g,"")},_c=function(t){try{return bo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function bc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ic(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ec(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wc(){return typeof indexedDB=="object"}function Tc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rc,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sc(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,c,r)}}function Sc(t,e){return t.replace(Cc,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cc=/\{\$([^}]+)}/g;function Ac(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ii(i)&&ii(o)){if(!or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ii(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function un(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Oc(t,e){const n=new Pc(t,e);return n.subscribe.bind(n)}class Pc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kc(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xr),s.error===void 0&&(s.error=xr),s.complete===void 0&&(s.complete=xr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xr(){}/**
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
 */function xn(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vt="[DEFAULT]";/**
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
 */class Nc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dc(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mc(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mc(t){return t===vt?void 0:t}function Dc(t){return t.instantiationMode==="EAGER"}/**
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
 */class xc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Lc={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Uc=ne.INFO,Fc={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Bc=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Fc[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eo{constructor(e){this.name=e,this._logLevel=Uc,this._logHandler=Bc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const $c=(t,e)=>e.some(n=>t instanceof n);let oi,ai;function Hc(){return oi||(oi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jc(){return ai||(ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wo=new WeakMap,Jr=new WeakMap,To=new WeakMap,Lr=new WeakMap,ws=new WeakMap;function Wc(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wo.set(n,t)}).catch(()=>{}),ws.set(e,t),e}function Vc(t){if(Jr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Jr.set(t,e)}let Yr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||To.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zc(t){Yr=t(Yr)}function Kc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ur(this),e,...n);return To.set(r,e.sort?e.sort():[e]),ft(r)}:jc().includes(t)?function(...e){return t.apply(Ur(this),e),ft(wo.get(this))}:function(...e){return ft(t.apply(Ur(this),e))}}function qc(t){return typeof t=="function"?Kc(t):(t instanceof IDBTransaction&&Vc(t),$c(t,Hc())?new Proxy(t,Yr):t)}function ft(t){if(t instanceof IDBRequest)return Wc(t);if(Lr.has(t))return Lr.get(t);const e=qc(t);return e!==t&&(Lr.set(t,e),ws.set(e,t)),e}const Ur=t=>ws.get(t);function Gc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ft(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ft(o.result),a.oldVersion,a.newVersion,ft(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Jc=["get","getKey","getAll","getAllKeys","count"],Yc=["put","add","delete","clear"],Fr=new Map;function ci(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fr.get(e))return Fr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jc.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Fr.set(e,i),i}zc(t=>({...t,get:(e,n,r)=>ci(e,n)||t.get(e,n,r),has:(e,n)=>!!ci(e,n)||t.has(e,n)}));/**
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
 */class Xc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qc(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xr="@firebase/app",li="0.7.28";/**
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
 */const Ts=new Eo("@firebase/app"),Zc="@firebase/app-compat",el="@firebase/analytics-compat",tl="@firebase/analytics",nl="@firebase/app-check-compat",rl="@firebase/app-check",sl="@firebase/auth",il="@firebase/auth-compat",ol="@firebase/database",al="@firebase/database-compat",cl="@firebase/functions",ll="@firebase/functions-compat",ul="@firebase/installations",fl="@firebase/installations-compat",dl="@firebase/messaging",hl="@firebase/messaging-compat",pl="@firebase/performance",gl="@firebase/performance-compat",ml="@firebase/remote-config",_l="@firebase/remote-config-compat",vl="@firebase/storage",yl="@firebase/storage-compat",bl="@firebase/firestore",Il="@firebase/firestore-compat",El="firebase",wl="9.9.0";/**
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
 */const Ro="[DEFAULT]",Tl={[Xr]:"fire-core",[Zc]:"fire-core-compat",[tl]:"fire-analytics",[el]:"fire-analytics-compat",[rl]:"fire-app-check",[nl]:"fire-app-check-compat",[sl]:"fire-auth",[il]:"fire-auth-compat",[ol]:"fire-rtdb",[al]:"fire-rtdb-compat",[cl]:"fire-fn",[ll]:"fire-fn-compat",[ul]:"fire-iid",[fl]:"fire-iid-compat",[dl]:"fire-fcm",[hl]:"fire-fcm-compat",[pl]:"fire-perf",[gl]:"fire-perf-compat",[ml]:"fire-rc",[_l]:"fire-rc-compat",[vl]:"fire-gcs",[yl]:"fire-gcs-compat",[bl]:"fire-fst",[Il]:"fire-fst-compat","fire-js":"fire-js",[El]:"fire-js-all"};/**
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
 */const ar=new Map,Qr=new Map;function Rl(t,e){try{t.container.addComponent(e)}catch(n){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(Qr.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;Qr.set(e,t);for(const n of ar.values())Rl(n,t);return!0}function So(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Rt=new Mn("app","Firebase",Sl);/**
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
 */class Cl{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const vr=wl;function Al(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ro,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});const s=ar.get(r);if(s){if(or(t,s.options)&&or(n,s.config))return s;throw Rt.create("duplicate-app",{appName:r})}const i=new xc(r);for(const c of Qr.values())i.addComponent(c);const o=new Cl(t,n,i);return ar.set(r,o),o}function Ol(t=Ro){const e=ar.get(t);if(!e)throw Rt.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=Tl[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(c.join(" "));return}bn(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Pl="firebase-heartbeat-database",kl=1,In="firebase-heartbeat-store";let Br=null;function Co(){return Br||(Br=Gc(Pl,kl,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(In)}}}).catch(t=>{throw Rt.create("storage-open",{originalErrorMessage:t.message})})),Br}async function Nl(t){var e;try{return(await Co()).transaction(In).objectStore(In).get(Ao(t))}catch(n){throw Rt.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function ui(t,e){var n;try{const s=(await Co()).transaction(In,"readwrite");return await s.objectStore(In).put(e,Ao(t)),s.done}catch(r){throw Rt.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Ao(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ml=1024,Dl=30*24*60*60*1e3;class xl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ul(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Dl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fi(),{heartbeatsToSend:n,unsentEntries:r}=Ll(this._heartbeatsCache.heartbeats),s=Io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fi(){return new Date().toISOString().substring(0,10)}function Ll(t,e=Ml){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),di(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),di(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ul{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wc()?Tc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Nl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ui(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ui(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function di(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fl(t){bn(new Kt("platform-logger",e=>new Xc(e),"PRIVATE")),bn(new Kt("heartbeat",e=>new xl(e),"PRIVATE")),Bt(Xr,li,t),Bt(Xr,li,"esm2017"),Bt("fire-js","")}Fl("");var Bl="firebase",$l="9.9.0";/**
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
 */Bt(Bl,$l,"app");function Rs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Oo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hl=Oo,Po=new Mn("auth","Firebase",Oo());/**
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
 */const hi=new Eo("@firebase/auth");function Yn(t,...e){hi.logLevel<=ne.ERROR&&hi.error(`Auth (${vr}): ${t}`,...e)}/**
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
 */function Pe(t,...e){throw Ss(t,...e)}function Be(t,...e){return Ss(t,...e)}function jl(t,e,n){const r=Object.assign(Object.assign({},Hl()),{[e]:n});return new Mn("auth","Firebase",r).create(e,{appName:t.name})}function Ss(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Po.create(t,...e)}function D(t,e,...n){if(!t)throw Ss(e,...n)}function ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yn(e),new Error(e)}function Ge(t,e){t||ze(e)}/**
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
 */const pi=new Map;function Ke(t){Ge(t instanceof Function,"Expected a class definition");let e=pi.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pi.set(t,e),e)}/**
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
 */function Wl(t,e){const n=So(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(or(i,e!=null?e:{}))return s;Pe(s,"already-initialized")}return n.initialize({options:e})}function Vl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Zr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zl(){return gi()==="http:"||gi()==="https:"}function gi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Kl(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zl()||bc()||"connection"in navigator)?navigator.onLine:!0}function ql(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ln{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=yc()||Ic()}get(){return Kl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cs(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ko{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Jl=new Ln(3e4,6e4);function Un(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,r,s={}){return No(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Dn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ko.fetch()(Mo(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function No(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gl),e);try{const s=new Yl(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Vn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Vn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jl(t,f,l);Pe(t,f)}}catch(s){if(s instanceof Qt)throw s;Pe(t,"network-request-failed")}}async function Bn(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&Pe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mo(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cs(t.config,s):`${t.config.apiScheme}://${s}`}class Yl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),Jl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Be(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Xl(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function Ql(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function pn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zl(t,e=!1){const n=xn(t),r=await n.getIdToken(e),s=As(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pn($r(s.auth_time)),issuedAtTime:pn($r(s.iat)),expirationTime:pn($r(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $r(t){return Number(t)*1e3}function As(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Yn("JWT malformed, contained fewer than 3 sections"),null;try{const i=_c(r);return i?JSON.parse(i):(Yn("Failed to decode base64 JWT payload"),null)}catch(i){return Yn("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function eu(t){const e=As(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function En(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&tu(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tu({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Do{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await En(t,Ql(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?iu(i.providerUserInfo):[],c=su(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Do(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function ru(t){const e=xn(t);await cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function su(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function iu(t){return t.map(e=>{var{providerId:n}=e,r=Rs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ou(t,e){const n=await No(t,{},async()=>{const r=Dn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Mo(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ko.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):eu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ou(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wn;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
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
 */function Ze(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Et{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Do(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await En(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zl(this,e)}reload(){return ru(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await En(this,Xl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,A=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:oe,providerData:ae,stsTokenManager:Ie}=n;D(j&&Ie,e,"internal-error");const Qe=wn.fromJSON(this.name,Ie);D(typeof j=="string",e,"internal-error"),Ze(d,e.name),Ze(p,e.name),D(typeof z=="boolean",e,"internal-error"),D(typeof oe=="boolean",e,"internal-error"),Ze(_,e.name),Ze(S,e.name),Ze(L,e.name),Ze(A,e.name),Ze(C,e.name),Ze(U,e.name);const pe=new Et({uid:j,auth:e,email:p,emailVerified:z,displayName:d,isAnonymous:oe,photoURL:S,phoneNumber:_,tenantId:L,stsTokenManager:Qe,createdAt:C,lastLoginAt:U});return ae&&Array.isArray(ae)&&(pe.providerData=ae.map(Ne=>Object.assign({},Ne))),A&&(pe._redirectEventId=A),pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new wn;s.updateFromServerResponse(n);const i=new Et({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cr(i),i}}/**
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
 */class xo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xo.type="NONE";const mi=xo;/**
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
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class $t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $t(Ke(mi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ke(mi);const o=Xn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const d=Et._fromJSON(e,f);l!==i&&(c=d),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new $t(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new $t(i,e,r))}}/**
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
 */function _i(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($o(e))return"Blackberry";if(Ho(e))return"Webos";if(Os(e))return"Safari";if((e.includes("chrome/")||Uo(e))&&!e.includes("edge/"))return"Chrome";if(Bo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lo(t=fe()){return/firefox\//i.test(t)}function Os(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uo(t=fe()){return/crios\//i.test(t)}function Fo(t=fe()){return/iemobile/i.test(t)}function Bo(t=fe()){return/android/i.test(t)}function $o(t=fe()){return/blackberry/i.test(t)}function Ho(t=fe()){return/webos/i.test(t)}function yr(t=fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function au(t=fe()){var e;return yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cu(){return Ec()&&document.documentMode===10}function jo(t=fe()){return yr(t)||Bo(t)||Ho(t)||$o(t)||/windows phone/i.test(t)||Fo(t)}function lu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wo(t,e=[]){let n;switch(t){case"Browser":n=_i(fe());break;case"Worker":n=`${_i(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
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
 */class uu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class fu{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vi(this),this.idTokenSubscription=new vi(this),this.beforeStateQueue=new uu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Po,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ke(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $t.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await cr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ql()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xn(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ke(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[Ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function br(t){return xn(t)}class vi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oc(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ps{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,n){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}async function du(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function hu(t,e){return Bn(t,"POST","/v1/accounts:signInWithPassword",Un(t,e))}/**
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
 */async function pu(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}async function gu(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}/**
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
 */class Tn extends Ps{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Tn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Tn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return hu(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pu(e,{email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return du(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gu(e,{idToken:n,email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ht(t,e){return Bn(t,"POST","/v1/accounts:signInWithIdp",Un(t,e))}/**
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
 */const mu="http://localhost";class St extends Ps{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Rs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new St(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ht(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ht(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ht(e,n)}buildRequest(){const e={requestUri:mu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dn(n)}return e}}/**
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
 */function _u(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vu(t){const e=un(fn(t)).link,n=e?un(fn(e)).deep_link_id:null,r=un(fn(t)).deep_link_id;return(r?un(fn(r)).link:null)||r||n||e||t}class ks{constructor(e){var n,r,s,i,o,c;const a=un(fn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,d=_u((s=a.mode)!==null&&s!==void 0?s:null);D(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=vu(e);try{return new ks(n)}catch{return null}}}/**
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
 */class Zt{constructor(){this.providerId=Zt.PROVIDER_ID}static credential(e,n){return Tn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ks.parseLink(n);return D(r,"argument-error"),Tn._fromEmailAndCode(e,r.code,r.tenantId)}}Zt.PROVIDER_ID="password";Zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $n extends Vo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class at extends $n{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
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
 */class ct extends $n{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return St._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
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
 */class lt extends $n{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
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
 */class ut extends $n{constructor(){super("twitter.com")}static credential(e,n){return St._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
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
 */async function yu(t,e){return Bn(t,"POST","/v1/accounts:signUp",Un(t,e))}/**
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
 */class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Et._fromIdTokenResponse(e,r,s),o=yi(r);return new Ct({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yi(r);return new Ct({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lr extends Qt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lr(e,n,r,s)}}function zo(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lr._fromErrorAndOperation(t,i,e,r):i})}async function bu(t,e,n=!1){const r=await En(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ct._forOperation(t,"link",r)}/**
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
 */async function Iu(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await En(t,zo(s,i,e,t),n);D(o.idToken,s,"internal-error");const c=As(o.idToken);D(c,s,"internal-error");const{sub:a}=c;return D(t.uid===a,s,"user-mismatch"),Ct._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Pe(s,"user-mismatch"),o}}/**
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
 */async function Ko(t,e,n=!1){const r="signIn",s=await zo(t,r,e),i=await Ct._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Eu(t,e){return Ko(br(t),e)}async function wu(t,e,n){const r=br(t),s=await yu(r,{returnSecureToken:!0,email:e,password:n}),i=await Ct._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Tu(t,e,n){return Eu(xn(t),Zt.credential(e,n))}const ur="__sak";/**
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
 */class qo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ur,"1"),this.storage.removeItem(ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ru(){const t=fe();return Os(t)||yr(t)}const Su=1e3,Cu=10;class Go extends qo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ru()&&lu(),this.fallbackToPolling=jo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cu()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cu):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Su)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Go.type="LOCAL";const Au=Go;/**
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
 */class Jo extends qo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jo.type="SESSION";const Yo=Jo;/**
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
 */function Ou(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ir(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Ou(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ir.receivers=[];/**
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
 */function Ns(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Ns("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function ku(t){$e().location.href=t}/**
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
 */function Xo(){return typeof $e().WorkerGlobalScope!="undefined"&&typeof $e().importScripts=="function"}async function Nu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Du(){return Xo()?self:null}/**
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
 */const Qo="firebaseLocalStorageDb",xu=1,fr="firebaseLocalStorage",Zo="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Er(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function Lu(){const t=indexedDB.deleteDatabase(Qo);return new Hn(t).toPromise()}function es(){const t=indexedDB.open(Qo,xu);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fr,{keyPath:Zo})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fr)?e(r):(r.close(),await Lu(),e(await es()))})})}async function bi(t,e,n){const r=Er(t,!0).put({[Zo]:e,value:n});return new Hn(r).toPromise()}async function Uu(t,e){const n=Er(t,!1).get(e),r=await new Hn(n).toPromise();return r===void 0?null:r.value}function Ii(t,e){const n=Er(t,!0).delete(e);return new Hn(n).toPromise()}const Fu=800,Bu=3;class ea{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await es(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ir._getInstance(Du()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nu(),!this.activeServiceWorker)return;this.sender=new Pu(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await es();return await bi(e,ur,"1"),await Ii(e,ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Uu(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ii(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Er(s,!1).getAll();return new Hn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ea.type="LOCAL";const $u=ea;/**
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
 */function Hu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ju(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hu().appendChild(r)})}function Wu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ln(3e4,6e4);/**
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
 */function Vu(t,e){return e?Ke(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ms extends Ps{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ht(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ht(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zu(t){return Ko(t.auth,new Ms(t),t.bypassAuthState)}function Ku(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Iu(n,new Ms(t),t.bypassAuthState)}async function qu(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),bu(n,new Ms(t),t.bypassAuthState)}/**
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
 */class ta{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zu;case"linkViaPopup":case"linkViaRedirect":return qu;case"reauthViaPopup":case"reauthViaRedirect":return Ku;default:Pe(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gu=new Ln(2e3,1e4);class Ft extends ta{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Ns();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Gu.get())};e()}}Ft.currentPopupAction=null;/**
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
 */const Ju="pendingRedirect",Qn=new Map;class Yu extends ta{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qn.get(this.auth._key());if(!e){try{const r=await Xu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qn.set(this.auth._key(),e)}return this.bypassAuthState||Qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xu(t,e){const n=ef(e),r=Zu(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qu(t,e){Qn.set(t._key(),e)}function Zu(t){return Ke(t._redirectPersistence)}function ef(t){return Xn(Ju,t.config.apiKey,t.name)}async function tf(t,e,n=!1){const r=br(t),s=Vu(r,e),o=await new Yu(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nf=10*60*1e3;class rf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!na(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ei(e))}saveEventToCache(e){this.cachedEventUids.add(Ei(e)),this.lastProcessedEventTime=Date.now()}}function Ei(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function na({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return na(t);default:return!1}}/**
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
 */async function of(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const af=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cf=/^https?/;async function lf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await of(t);for(const n of e)try{if(uf(n))return}catch{}Pe(t,"unauthorized-domain")}function uf(t){const e=Zr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cf.test(n))return!1;if(af.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ff=new Ln(3e4,6e4);function wi(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function df(t){return new Promise((e,n)=>{var r,s,i;function o(){wi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wi(),n(Be(t,"network-request-failed"))},timeout:ff.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$e().gapi)===null||i===void 0)&&i.load)o();else{const c=Wu("iframefcb");return $e()[c]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},ju(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Zn=null,e})}let Zn=null;function hf(t){return Zn=Zn||df(t),Zn}/**
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
 */const pf=new Ln(5e3,15e3),gf="__/auth/iframe",mf="emulator/auth/iframe",_f={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yf(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cs(e,mf):`https://${t.config.authDomain}/${gf}`,r={apiKey:e.apiKey,appName:t.name,v:vr},s=vf.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Dn(r).slice(1)}`}async function bf(t){const e=await hf(t),n=$e().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:yf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_f,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),c=$e().setTimeout(()=>{i(o)},pf.get());function a(){$e().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const If={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ef=500,wf=600,Tf="_blank",Rf="http://localhost";class Ti{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sf(t,e,n,r=Ef,s=wf){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},If),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(c=Uo(l)?Tf:n),Lo(l)&&(e=e||Rf,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(au(l)&&c!=="_self")return Cf(e||"",c),new Ti(null);const d=window.open(e||"",c,f);D(d,t,"popup-blocked");try{d.focus()}catch{}return new Ti(d)}function Cf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Af="__/auth/handler",Of="emulator/auth/handler";function Ri(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vr,eventId:s};if(e instanceof Vo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ac(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,l]of Object.entries(i||{}))o[a]=l}if(e instanceof $n){const a=e.getScopes().filter(l=>l!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const a of Object.keys(c))c[a]===void 0&&delete c[a];return`${Pf(t)}?${Dn(c).slice(1)}`}function Pf({config:t}){return t.emulator?Cs(t,Of):`https://${t.authDomain}/${Af}`}/**
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
 */const Hr="webStorageSupport";class kf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yo,this._completeRedirectFn=tf,this._overrideRedirectResult=Qu}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ri(e,n,r,Zr(),s);return Sf(e,o,Ns())}async _openRedirect(e,n,r,s){return await this._originValidation(e),ku(Ri(e,n,r,Zr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bf(e),r=new rf(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hr,{type:Hr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Hr];o!==void 0&&n(!!o),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jo()||Os()||yr()}}const Nf=kf;var Si="@firebase/auth",Ci="0.20.5";/**
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
 */class Mf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Df(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xf(t){bn(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((c,a)=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:c.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:c.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wo(t)},f=new fu(c,a,l);return Vl(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bn(new Kt("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new Mf(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Si,Ci,Df(t)),Bt(Si,Ci,"esm2017")}/**
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
 */function ts(t=Ol()){const e=So(t,"auth");return e.isInitialized()?e.getImmediate():Wl(t,{popupRedirectResolver:Nf,persistence:[$u,Au,Yo]})}xf("Browser");const Lf={apiKey:"AIzaSyA7mlXL-RQizJ8YVA03pSNlAV9W7T07FpY",authDomain:"yt-watchmen.firebaseapp.com",projectId:"yt-watchmen",storageBucket:"yt-watchmen.appspot.com",messagingSenderId:"359895816834",appId:"1:359895816834:web:bb43560e3588066de1b29b"},Uf=Al(Lf);ts(Uf);function Ds(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ff="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bf=Ds(Ff);function ra(t){return!!t||t===""}function xs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?jf(r):xs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ce(t))return t;if(ie(t))return t}}const $f=/;(?![^(]*\))/g,Hf=/:(.+)/;function jf(t){const e={};return t.split($f).forEach(n=>{if(n){const r=n.split(Hf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jt(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=jt(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wf=t=>ce(t)?t:t==null?"":F(t)||ie(t)&&(t.toString===aa||!$(t.toString))?JSON.stringify(t,sa,2):String(t),sa=(t,e)=>e&&e.__v_isRef?sa(t,e.value):Vt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!F(e)&&!ca(e)?String(e):e,Q={},Wt=[],Ae=()=>{},Vf=()=>!1,zf=/^on[^a-z]/,wr=t=>zf.test(t),Ls=t=>t.startsWith("onUpdate:"),he=Object.assign,Us=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kf=Object.prototype.hasOwnProperty,W=(t,e)=>Kf.call(t,e),F=Array.isArray,Vt=t=>Tr(t)==="[object Map]",ia=t=>Tr(t)==="[object Set]",$=t=>typeof t=="function",ce=t=>typeof t=="string",Fs=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",oa=t=>ie(t)&&$(t.then)&&$(t.catch),aa=Object.prototype.toString,Tr=t=>aa.call(t),qf=t=>Tr(t).slice(8,-1),ca=t=>Tr(t)==="[object Object]",Bs=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,er=Ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gf=/-(\w)/g,qt=Rr(t=>t.replace(Gf,(e,n)=>n?n.toUpperCase():"")),Jf=/\B([A-Z])/g,en=Rr(t=>t.replace(Jf,"-$1").toLowerCase()),la=Rr(t=>t.charAt(0).toUpperCase()+t.slice(1)),jr=Rr(t=>t?`on${la(t)}`:""),Rn=(t,e)=>!Object.is(t,e),tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},dr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ai;const Yf=()=>Ai||(Ai=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Le;class Xf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Le&&(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Le;try{return Le=this,e()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Qf(t,e=Le){e&&e.active&&e.effects.push(t)}const $s=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ua=t=>(t.w&gt)>0,fa=t=>(t.n&gt)>0,Zf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gt},ed=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ua(s)&&!fa(s)?s.delete(t):e[n++]=s,s.w&=~gt,s.n&=~gt}e.length=n}},rs=new WeakMap;let dn=0,gt=1;const ss=30;let Se;const wt=Symbol(""),is=Symbol("");class Hs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qf(this,r)}run(){if(!this.active)return this.fn();let e=Se,n=dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Se,Se=this,dt=!0,gt=1<<++dn,dn<=ss?Zf(this):Oi(this),this.fn()}finally{dn<=ss&&ed(this),gt=1<<--dn,Se=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(Oi(this),this.onStop&&this.onStop(),this.active=!1)}}function Oi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dt=!0;const da=[];function tn(){da.push(dt),dt=!1}function nn(){const t=da.pop();dt=t===void 0?!0:t}function be(t,e,n){if(dt&&Se){let r=rs.get(t);r||rs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=$s()),ha(s)}}function ha(t,e){let n=!1;dn<=ss?fa(t)||(t.n|=gt,n=!ua(t)):n=!t.has(Se),n&&(t.add(Se),Se.deps.push(t))}function Je(t,e,n,r,s,i){const o=rs.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t))o.forEach((a,l)=>{(l==="length"||l>=r)&&c.push(a)});else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Bs(n)&&c.push(o.get("length")):(c.push(o.get(wt)),Vt(t)&&c.push(o.get(is)));break;case"delete":F(t)||(c.push(o.get(wt)),Vt(t)&&c.push(o.get(is)));break;case"set":Vt(t)&&c.push(o.get(wt));break}if(c.length===1)c[0]&&os(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);os($s(a))}}function os(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Pi(r);for(const r of n)r.computed||Pi(r)}function Pi(t,e){(t!==Se||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const td=Ds("__proto__,__v_isRef,__isVue"),pa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fs)),nd=js(),rd=js(!1,!0),sd=js(!0),ki=id();function id(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tn();const r=K(this)[e].apply(this,n);return nn(),r}}),t}function js(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Id:ya:e?va:_a).get(r))return r;const o=F(r);if(!t&&o&&W(ki,s))return Reflect.get(ki,s,i);const c=Reflect.get(r,s,i);return(Fs(s)?pa.has(s):td(s))||(t||be(r,"get",s),e)?c:ue(c)?o&&Bs(s)?c:c.value:ie(c)?t?ba(c):jn(c):c}}const od=ga(),ad=ga(!0);function ga(t=!1){return function(n,r,s,i){let o=n[r];if(Sn(o)&&ue(o)&&!ue(s))return!1;if(!t&&!Sn(s)&&(as(s)||(s=K(s),o=K(o)),!F(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const c=F(n)&&Bs(r)?Number(r)<n.length:W(n,r),a=Reflect.set(n,r,s,i);return n===K(i)&&(c?Rn(s,o)&&Je(n,"set",r,s):Je(n,"add",r,s)),a}}function cd(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Je(t,"delete",e,void 0),r}function ld(t,e){const n=Reflect.has(t,e);return(!Fs(e)||!pa.has(e))&&be(t,"has",e),n}function ud(t){return be(t,"iterate",F(t)?"length":wt),Reflect.ownKeys(t)}const ma={get:nd,set:od,deleteProperty:cd,has:ld,ownKeys:ud},fd={get:sd,set(t,e){return!0},deleteProperty(t,e){return!0}},dd=he({},ma,{get:rd,set:ad}),Ws=t=>t,Sr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&be(s,"get",e),be(s,"get",i));const{has:o}=Sr(s),c=r?Ws:n?Ks:Cn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Kn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&be(r,"has",t),be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qn(t,e=!1){return t=t.__v_raw,!e&&be(K(t),"iterate",wt),Reflect.get(t,"size",t)}function Ni(t){t=K(t);const e=K(this);return Sr(e).has.call(e,t)||(e.add(t),Je(e,"add",t,t)),this}function Mi(t,e){e=K(e);const n=K(this),{has:r,get:s}=Sr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Rn(e,o)&&Je(n,"set",t,e):Je(n,"add",t,e),this}function Di(t){const e=K(this),{has:n,get:r}=Sr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Je(e,"delete",t,void 0),i}function xi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Je(t,"clear",void 0,void 0),n}function Gn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=K(o),a=e?Ws:t?Ks:Cn;return!t&&be(c,"iterate",wt),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function Jn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Vt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Ws:e?Ks:Cn;return!e&&be(i,"iterate",a?is:wt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:c?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function hd(){const t={get(i){return zn(this,i)},get size(){return qn(this)},has:Kn,add:Ni,set:Mi,delete:Di,clear:xi,forEach:Gn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return qn(this)},has:Kn,add:Ni,set:Mi,delete:Di,clear:xi,forEach:Gn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Gn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jn(i,!1,!1),n[i]=Jn(i,!0,!1),e[i]=Jn(i,!1,!0),r[i]=Jn(i,!0,!0)}),[t,n,e,r]}const[pd,gd,md,_d]=hd();function Vs(t,e){const n=e?t?_d:md:t?gd:pd;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const vd={get:Vs(!1,!1)},yd={get:Vs(!1,!0)},bd={get:Vs(!0,!1)},_a=new WeakMap,va=new WeakMap,ya=new WeakMap,Id=new WeakMap;function Ed(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wd(t){return t.__v_skip||!Object.isExtensible(t)?0:Ed(qf(t))}function jn(t){return Sn(t)?t:zs(t,!1,ma,vd,_a)}function Td(t){return zs(t,!1,dd,yd,va)}function ba(t){return zs(t,!0,fd,bd,ya)}function zs(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wd(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function zt(t){return Sn(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function as(t){return!!(t&&t.__v_isShallow)}function Ia(t){return zt(t)||Sn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Ea(t){return dr(t,"__v_skip",!0),t}const Cn=t=>ie(t)?jn(t):t,Ks=t=>ie(t)?ba(t):t;function wa(t){dt&&Se&&(t=K(t),ha(t.dep||(t.dep=$s())))}function Ta(t,e){t=K(t),t.dep&&os(t.dep)}function ue(t){return!!(t&&t.__v_isRef===!0)}function rt(t){return Ra(t,!1)}function Rd(t){return Ra(t,!0)}function Ra(t,e){return ue(t)?t:new Sd(t,e)}class Sd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Cn(e)}get value(){return wa(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),Rn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Cn(e),Ta(this))}}function qe(t){return ue(t)?t.value:t}const Cd={get:(t,e,n)=>qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sa(t){return zt(t)?t:new Proxy(t,Cd)}class Ad{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Hs(e,()=>{this._dirty||(this._dirty=!0,Ta(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return wa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Od(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ae):(r=t.get,s=t.set),new Ad(r,s,i||!s,n)}function ht(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Cr(i,e,n)}return s}function Oe(t,e,n,r){if($(t)){const i=ht(t,e,n,r);return i&&oa(i)&&i.catch(o=>{Cr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Oe(t[i],e,n,r));return s}function Cr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){ht(a,null,10,[t,o,c]);return}}Pd(t,n,s,r)}function Pd(t,e,n,r=!0){console.error(t)}let hr=!1,cs=!1;const ye=[];let Ve=0;const gn=[];let hn=null,Dt=0;const mn=[];let st=null,xt=0;const Ca=Promise.resolve();let qs=null,ls=null;function Aa(t){const e=qs||Ca;return t?e.then(this?t.bind(this):t):e}function kd(t){let e=Ve+1,n=ye.length;for(;e<n;){const r=e+n>>>1;An(ye[r])<t?e=r+1:n=r}return e}function Oa(t){(!ye.length||!ye.includes(t,hr&&t.allowRecurse?Ve+1:Ve))&&t!==ls&&(t.id==null?ye.push(t):ye.splice(kd(t.id),0,t),Pa())}function Pa(){!hr&&!cs&&(cs=!0,qs=Ca.then(Ma))}function Nd(t){const e=ye.indexOf(t);e>Ve&&ye.splice(e,1)}function ka(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Pa()}function Md(t){ka(t,hn,gn,Dt)}function Dd(t){ka(t,st,mn,xt)}function Ar(t,e=null){if(gn.length){for(ls=e,hn=[...new Set(gn)],gn.length=0,Dt=0;Dt<hn.length;Dt++)hn[Dt]();hn=null,Dt=0,ls=null,Ar(t,e)}}function Na(t){if(Ar(),mn.length){const e=[...new Set(mn)];if(mn.length=0,st){st.push(...e);return}for(st=e,st.sort((n,r)=>An(n)-An(r)),xt=0;xt<st.length;xt++)st[xt]();st=null,xt=0}}const An=t=>t.id==null?1/0:t.id;function Ma(t){cs=!1,hr=!0,Ar(t),ye.sort((n,r)=>An(n)-An(r));const e=Ae;try{for(Ve=0;Ve<ye.length;Ve++){const n=ye[Ve];n&&n.active!==!1&&ht(n,null,14)}}finally{Ve=0,ye.length=0,Na(),hr=!1,qs=null,(ye.length||gn.length||mn.length)&&Ma(t)}}function xd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||Q;p&&(s=n.map(_=>_.trim())),d&&(s=n.map(ns))}let c,a=r[c=jr(e)]||r[c=jr(qt(e))];!a&&i&&(a=r[c=jr(en(e))]),a&&Oe(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Oe(l,t,6,s)}}function Da(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const f=Da(l,e,!0);f&&(c=!0,he(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):he(o,i),r.set(t,o),o)}function Or(t,e){return!t||!wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,en(e))||W(t,e))}let Fe=null,Pr=null;function pr(t){const e=Fe;return Fe=t,Pr=t&&t.type.__scopeId||null,e}function Ld(t){Pr=t}function Ud(){Pr=null}function us(t,e=Fe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Vi(-1);const i=pr(e),o=t(...s);return pr(i),r._d&&Vi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Wr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:f,renderCache:d,data:p,setupState:_,ctx:S,inheritAttrs:L}=t;let A,C;const U=pr(t);try{if(n.shapeFlag&4){const z=s||r;A=Ue(f.call(z,z,d,i,_,p,S)),C=a}else{const z=e;A=Ue(z.length>1?z(i,{attrs:a,slots:c,emit:l}):z(i,null)),C=e.props?a:Fd(a)}}catch(z){_n.length=0,Cr(z,t,1),A=me(On)}let j=A;if(C&&L!==!1){const z=Object.keys(C),{shapeFlag:oe}=j;z.length&&oe&7&&(o&&z.some(Ls)&&(C=Bd(C,o)),j=Gt(j,C))}return n.dirs&&(j=Gt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),A=j,pr(U),A}const Fd=t=>{let e;for(const n in t)(n==="class"||n==="style"||wr(n))&&((e||(e={}))[n]=t[n]);return e},Bd=(t,e)=>{const n={};for(const r in t)(!Ls(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $d(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Li(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Or(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Li(r,o,l):!0:!!o;return!1}function Li(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Or(n,i))return!0}return!1}function Hd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const jd=t=>t.__isSuspense;function Wd(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Dd(t)}function nr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function pt(t,e,n=!1){const r=le||Fe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}const Ui={};function rr(t,e,n){return xa(t,e,n)}function xa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const c=le;let a,l=!1,f=!1;if(ue(t)?(a=()=>t.value,l=as(t)):zt(t)?(a=()=>t,r=!0):F(t)?(f=!0,l=t.some(C=>zt(C)||as(C)),a=()=>t.map(C=>{if(ue(C))return C.value;if(zt(C))return It(C);if($(C))return ht(C,c,2)})):$(t)?e?a=()=>ht(t,c,2):a=()=>{if(!(c&&c.isUnmounted))return d&&d(),Oe(t,c,3,[p])}:a=Ae,e&&r){const C=a;a=()=>It(C())}let d,p=C=>{d=A.onStop=()=>{ht(C,c,4)}};if(kn)return p=Ae,e?n&&Oe(e,c,3,[a(),f?[]:void 0,p]):a(),Ae;let _=f?[]:Ui;const S=()=>{if(!!A.active)if(e){const C=A.run();(r||l||(f?C.some((U,j)=>Rn(U,_[j])):Rn(C,_)))&&(d&&d(),Oe(e,c,3,[C,_===Ui?void 0:_,p]),_=C)}else A.run()};S.allowRecurse=!!e;let L;s==="sync"?L=S:s==="post"?L=()=>ge(S,c&&c.suspense):L=()=>Md(S);const A=new Hs(a,L);return e?n?S():_=A.run():s==="post"?ge(A.run.bind(A),c&&c.suspense):A.run(),()=>{A.stop(),c&&c.scope&&Us(c.scope.effects,A)}}function Vd(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?La(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=le;Jt(this);const c=xa(s,i.bind(r),n);return o?Jt(o):Tt(),c}function La(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function It(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))It(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)It(t[n],e);else if(ia(t)||Vt(t))t.forEach(n=>{It(n,e)});else if(ca(t))for(const n in t)It(t[n],e);return t}function Wn(t){return $(t)?{setup:t,name:t.name}:t}const sr=t=>!!t.type.__asyncLoader,Ua=t=>t.type.__isKeepAlive;function zd(t,e){Fa(t,"a",e)}function Kd(t,e){Fa(t,"da",e)}function Fa(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(kr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ua(s.parent.vnode)&&qd(r,e,n,s),s=s.parent}}function qd(t,e,n,r){const s=kr(e,t,r,!0);Ba(()=>{Us(r[e],s)},n)}function kr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Jt(n);const c=Oe(e,n,t,o);return Tt(),nn(),c});return r?s.unshift(i):s.push(i),i}}const Ye=t=>(e,n=le)=>(!kn||t==="sp")&&kr(t,e,n),Gd=Ye("bm"),Jd=Ye("m"),Yd=Ye("bu"),Xd=Ye("u"),Qd=Ye("bum"),Ba=Ye("um"),Zd=Ye("sp"),eh=Ye("rtg"),th=Ye("rtc");function nh(t,e=le){kr("ec",t,e)}function on(t,e){const n=Fe;if(n===null)return t;const r=Mr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=Q]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&It(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l})}return t}function mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(tn(),Oe(a,n,8,[t.el,c,t,e]),nn())}}const rh=Symbol(),fs=t=>t?Ya(t)?Mr(t)||t.proxy:fs(t.parent):null,gr=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fs(t.parent),$root:t=>fs(t.root),$emit:t=>t.emit,$options:t=>Ha(t),$forceUpdate:t=>t.f||(t.f=()=>Oa(t.update)),$nextTick:t=>t.n||(t.n=Aa.bind(t.proxy)),$watch:t=>Vd.bind(t)}),sh={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&W(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];ds&&(o[e]=0)}}const f=gr[e];let d,p;if(f)return e==="$attrs"&&be(t,"get",e),f(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&W(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&W(t,o)||e!==Q&&W(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(gr,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ds=!0;function ih(t){const e=Ha(t),n=t.proxy,r=t.ctx;ds=!1,e.beforeCreate&&Fi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:d,mounted:p,beforeUpdate:_,updated:S,activated:L,deactivated:A,beforeDestroy:C,beforeUnmount:U,destroyed:j,unmounted:z,render:oe,renderTracked:ae,renderTriggered:Ie,errorCaptured:Qe,serverPrefetch:pe,expose:Ne,inheritAttrs:He,components:Te,directives:At,filters:Ot}=e;if(l&&oh(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const q=o[Z];$(q)&&(r[Z]=q.bind(n))}if(s){const Z=s.call(n,n);ie(Z)&&(t.data=jn(Z))}if(ds=!0,i)for(const Z in i){const q=i[Z],_e=$(q)?q.bind(n,n):$(q.get)?q.get.bind(n,n):Ae,kt=!$(q)&&$(q.set)?q.set.bind(n):Ae,je=we({get:_e,set:kt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>je.value,set:Me=>je.value=Me})}if(c)for(const Z in c)$a(c[Z],r,n,Z);if(a){const Z=$(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(q=>{nr(q,Z[q])})}f&&Fi(f,t,"c");function se(Z,q){F(q)?q.forEach(_e=>Z(_e.bind(n))):q&&Z(q.bind(n))}if(se(Gd,d),se(Jd,p),se(Yd,_),se(Xd,S),se(zd,L),se(Kd,A),se(nh,Qe),se(th,ae),se(eh,Ie),se(Qd,U),se(Ba,z),se(Zd,pe),F(Ne))if(Ne.length){const Z=t.exposed||(t.exposed={});Ne.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:_e=>n[q]=_e})})}else t.exposed||(t.exposed={});oe&&t.render===Ae&&(t.render=oe),He!=null&&(t.inheritAttrs=He),Te&&(t.components=Te),At&&(t.directives=At)}function oh(t,e,n=Ae,r=!1){F(t)&&(t=hs(t));for(const s in t){const i=t[s];let o;ie(i)?"default"in i?o=pt(i.from||s,i.default,!0):o=pt(i.from||s):o=pt(i),ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:c=>o.value=c}):e[s]=o}}function Fi(t,e,n){Oe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $a(t,e,n,r){const s=r.includes(".")?La(n,r):()=>n[r];if(ce(t)){const i=e[t];$(i)&&rr(s,i)}else if($(t))rr(s,t.bind(n));else if(ie(t))if(F(t))t.forEach(i=>$a(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&rr(s,i,t)}}function Ha(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>mr(a,l,o,!0)),mr(a,e,o)),i.set(e,a),a}function mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&mr(t,i,n,!0),s&&s.forEach(o=>mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=ah[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const ah={data:Bi,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:yt,directives:yt,watch:lh,provide:Bi,inject:ch};function Bi(t,e){return e?t?function(){return he($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function ch(t,e){return yt(hs(t),hs(e))}function hs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function yt(t,e){return t?he(he(Object.create(null),t),e):e}function lh(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function uh(t,e,n,r=!1){const s={},i={};dr(i,Nr,1),t.propsDefaults=Object.create(null),ja(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Td(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=K(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Or(t.emitsOptions,p))continue;const _=e[p];if(a)if(W(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const S=qt(p);s[S]=ps(a,c,S,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{ja(t,e,s,i)&&(l=!0);let f;for(const d in c)(!e||!W(e,d)&&((f=en(d))===d||!W(e,f)))&&(a?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=ps(a,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!W(e,d)&&!0)&&(delete i[d],l=!0)}l&&Je(t,"set","$attrs")}function ja(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(er(a))continue;const l=e[a];let f;s&&W(s,f=qt(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Or(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=K(n),l=c||Q;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ps(s,a,d,l[d],t,!W(l,d))}}return o}function ps(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&$(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Jt(s),r=l[n]=a.call(null,e),Tt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function Wa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const f=d=>{a=!0;const[p,_]=Wa(d,e,!0);he(o,p),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return r.set(t,Wt),Wt;if(F(i))for(let f=0;f<i.length;f++){const d=qt(i[f]);$i(d)&&(o[d]=Q)}else if(i)for(const f in i){const d=qt(f);if($i(d)){const p=i[f],_=o[d]=F(p)||$(p)?{type:p}:p;if(_){const S=Wi(Boolean,_.type),L=Wi(String,_.type);_[0]=S>-1,_[1]=L<0||S<L,(S>-1||W(_,"default"))&&c.push(d)}}}const l=[o,c];return r.set(t,l),l}function $i(t){return t[0]!=="$"}function Hi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ji(t,e){return Hi(t)===Hi(e)}function Wi(t,e){return F(e)?e.findIndex(n=>ji(n,t)):$(e)&&ji(e,t)?0:-1}const Va=t=>t[0]==="_"||t==="$stable",Gs=t=>F(t)?t.map(Ue):[Ue(t)],dh=(t,e,n)=>{if(e._n)return e;const r=us((...s)=>Gs(e(...s)),n);return r._c=!1,r},za=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Va(s))continue;const i=t[s];if($(i))e[s]=dh(s,i,r);else if(i!=null){const o=Gs(i);e[s]=()=>o}}},Ka=(t,e)=>{const n=Gs(e);t.slots.default=()=>n},hh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),dr(e,"_",n)):za(e,t.slots={})}else t.slots={},e&&Ka(t,e);dr(t.slots,Nr,1)},ph=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(he(s,e),!n&&c===1&&delete s._):(i=!e.$stable,za(e,s)),o=e}else e&&(Ka(t,e),o={default:1});if(i)for(const c in s)!Va(c)&&!(c in o)&&delete s[c]};function qa(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gh=0;function mh(t,e){return function(r,s=null){$(r)||(r=Object.assign({},r)),s!=null&&!ie(s)&&(s=null);const i=qa(),o=new Set;let c=!1;const a=i.app={_uid:gh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Dh,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...f)):$(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,d){if(!c){const p=me(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,d),c=!0,a._container=l,l.__vue_app__=a,Mr(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a}};return a}}function gs(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>gs(p,e&&(F(e)?e[_]:e),n,r,s));return}if(sr(r)&&!s)return;const i=r.shapeFlag&4?Mr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,d=c.setupState;if(l!=null&&l!==a&&(ce(l)?(f[l]=null,W(d,l)&&(d[l]=null)):ue(l)&&(l.value=null)),$(a))ht(a,c,12,[o,f]);else{const p=ce(a),_=ue(a);if(p||_){const S=()=>{if(t.f){const L=p?f[a]:a.value;s?F(L)&&Us(L,i):F(L)?L.includes(i)||L.push(i):p?(f[a]=[i],W(d,a)&&(d[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else p?(f[a]=o,W(d,a)&&(d[a]=o)):_&&(a.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,ge(S,n)):S()}}}const ge=Wd;function _h(t){return vh(t)}function vh(t,e){const n=Yf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:d,nextSibling:p,setScopeId:_=Ae,cloneNode:S,insertStaticContent:L}=t,A=(u,h,g,y=null,v=null,E=null,R=!1,I=null,w=!!h.dynamicChildren)=>{if(u===h)return;u&&!an(u,h)&&(y=k(u),Ee(u,v,E,!0),u=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=h;switch(b){case Js:C(u,h,g,y);break;case On:U(u,h,g,y);break;case Vr:u==null&&j(h,g,y,R);break;case We:At(u,h,g,y,v,E,R,I,w);break;default:O&1?ae(u,h,g,y,v,E,R,I,w):O&6?Ot(u,h,g,y,v,E,R,I,w):(O&64||O&128)&&b.process(u,h,g,y,v,E,R,I,w,ee)}N!=null&&v&&gs(N,u&&u.ref,E,h||u,!h)},C=(u,h,g,y)=>{if(u==null)r(h.el=c(h.children),g,y);else{const v=h.el=u.el;h.children!==u.children&&l(v,h.children)}},U=(u,h,g,y)=>{u==null?r(h.el=a(h.children||""),g,y):h.el=u.el},j=(u,h,g,y)=>{[u.el,u.anchor]=L(u.children,h,g,y,u.el,u.anchor)},z=({el:u,anchor:h},g,y)=>{let v;for(;u&&u!==h;)v=p(u),r(u,g,y),u=v;r(h,g,y)},oe=({el:u,anchor:h})=>{let g;for(;u&&u!==h;)g=p(u),s(u),u=g;s(h)},ae=(u,h,g,y,v,E,R,I,w)=>{R=R||h.type==="svg",u==null?Ie(h,g,y,v,E,R,I,w):Ne(u,h,v,E,R,I,w)},Ie=(u,h,g,y,v,E,R,I)=>{let w,b;const{type:N,props:O,shapeFlag:M,transition:x,patchFlag:V,dirs:J}=u;if(u.el&&S!==void 0&&V===-1)w=u.el=S(u.el);else{if(w=u.el=o(u.type,E,O&&O.is,O),M&8?f(w,u.children):M&16&&pe(u.children,w,null,y,v,E&&N!=="foreignObject",R,I),J&&mt(u,null,y,"created"),O){for(const re in O)re!=="value"&&!er(re)&&i(w,re,null,O[re],E,u.children,y,v,T);"value"in O&&i(w,"value",null,O.value),(b=O.onVnodeBeforeMount)&&xe(b,y,u)}Qe(w,u,u.scopeId,R,y)}J&&mt(u,null,y,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&x&&!x.persisted;Y&&x.beforeEnter(w),r(w,h,g),((b=O&&O.onVnodeMounted)||Y||J)&&ge(()=>{b&&xe(b,y,u),Y&&x.enter(w),J&&mt(u,null,y,"mounted")},v)},Qe=(u,h,g,y,v)=>{if(g&&_(u,g),y)for(let E=0;E<y.length;E++)_(u,y[E]);if(v){let E=v.subTree;if(h===E){const R=v.vnode;Qe(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},pe=(u,h,g,y,v,E,R,I,w=0)=>{for(let b=w;b<u.length;b++){const N=u[b]=I?it(u[b]):Ue(u[b]);A(null,N,h,g,y,v,E,R,I)}},Ne=(u,h,g,y,v,E,R)=>{const I=h.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:N}=h;w|=u.patchFlag&16;const O=u.props||Q,M=h.props||Q;let x;g&&_t(g,!1),(x=M.onVnodeBeforeUpdate)&&xe(x,g,h,u),N&&mt(h,u,g,"beforeUpdate"),g&&_t(g,!0);const V=v&&h.type!=="foreignObject";if(b?He(u.dynamicChildren,b,I,g,y,V,E):R||_e(u,h,I,null,g,y,V,E,!1),w>0){if(w&16)Te(I,h,O,M,g,y,v);else if(w&2&&O.class!==M.class&&i(I,"class",null,M.class,v),w&4&&i(I,"style",O.style,M.style,v),w&8){const J=h.dynamicProps;for(let Y=0;Y<J.length;Y++){const re=J[Y],Re=O[re],Nt=M[re];(Nt!==Re||re==="value")&&i(I,re,Re,Nt,v,u.children,g,y,T)}}w&1&&u.children!==h.children&&f(I,h.children)}else!R&&b==null&&Te(I,h,O,M,g,y,v);((x=M.onVnodeUpdated)||N)&&ge(()=>{x&&xe(x,g,h,u),N&&mt(h,u,g,"updated")},y)},He=(u,h,g,y,v,E,R)=>{for(let I=0;I<h.length;I++){const w=u[I],b=h[I],N=w.el&&(w.type===We||!an(w,b)||w.shapeFlag&70)?d(w.el):g;A(w,b,N,null,y,v,E,R,!0)}},Te=(u,h,g,y,v,E,R)=>{if(g!==y){for(const I in y){if(er(I))continue;const w=y[I],b=g[I];w!==b&&I!=="value"&&i(u,I,b,w,R,h.children,v,E,T)}if(g!==Q)for(const I in g)!er(I)&&!(I in y)&&i(u,I,g[I],null,R,h.children,v,E,T);"value"in y&&i(u,"value",g.value,y.value)}},At=(u,h,g,y,v,E,R,I,w)=>{const b=h.el=u?u.el:c(""),N=h.anchor=u?u.anchor:c("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:x}=h;x&&(I=I?I.concat(x):x),u==null?(r(b,g,y),r(N,g,y),pe(h.children,g,N,v,E,R,I,w)):O>0&&O&64&&M&&u.dynamicChildren?(He(u.dynamicChildren,M,g,v,E,R,I),(h.key!=null||v&&h===v.subTree)&&Ga(u,h,!0)):_e(u,h,g,N,v,E,R,I,w)},Ot=(u,h,g,y,v,E,R,I,w)=>{h.slotScopeIds=I,u==null?h.shapeFlag&512?v.ctx.activate(h,g,y,R,w):Pt(h,g,y,v,E,R,w):se(u,h,w)},Pt=(u,h,g,y,v,E,R)=>{const I=u.component=Ah(u,y,v);if(Ua(u)&&(I.ctx.renderer=ee),Oh(I),I.asyncDep){if(v&&v.registerDep(I,Z),!u.el){const w=I.subTree=me(On);U(null,w,h,g)}return}Z(I,u,h,g,v,E,R)},se=(u,h,g)=>{const y=h.component=u.component;if($d(u,h,g))if(y.asyncDep&&!y.asyncResolved){q(y,h,g);return}else y.next=h,Nd(y.update),y.update();else h.el=u.el,y.vnode=h},Z=(u,h,g,y,v,E,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:O,u:M,parent:x,vnode:V}=u,J=N,Y;_t(u,!1),N?(N.el=V.el,q(u,N,R)):N=V,O&&tr(O),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&xe(Y,x,N,V),_t(u,!0);const re=Wr(u),Re=u.subTree;u.subTree=re,A(Re,re,d(Re.el),k(Re),u,v,E),N.el=re.el,J===null&&Hd(u,re.el),M&&ge(M,v),(Y=N.props&&N.props.onVnodeUpdated)&&ge(()=>xe(Y,x,N,V),v)}else{let N;const{el:O,props:M}=h,{bm:x,m:V,parent:J}=u,Y=sr(h);if(_t(u,!1),x&&tr(x),!Y&&(N=M&&M.onVnodeBeforeMount)&&xe(N,J,h),_t(u,!0),O&&B){const re=()=>{u.subTree=Wr(u),B(O,u.subTree,u,v,null)};Y?h.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=Wr(u);A(null,re,g,y,u,v,E),h.el=re.el}if(V&&ge(V,v),!Y&&(N=M&&M.onVnodeMounted)){const re=h;ge(()=>xe(N,J,re),v)}(h.shapeFlag&256||J&&sr(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&ge(u.a,v),u.isMounted=!0,h=g=y=null}},w=u.effect=new Hs(I,()=>Oa(b),u.scope),b=u.update=()=>w.run();b.id=u.uid,_t(u,!0),b()},q=(u,h,g)=>{h.component=u;const y=u.vnode.props;u.vnode=h,u.next=null,fh(u,h.props,y,g),ph(u,h.children,g),tn(),Ar(void 0,u.update),nn()},_e=(u,h,g,y,v,E,R,I,w=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,O=h.children,{patchFlag:M,shapeFlag:x}=h;if(M>0){if(M&128){je(b,O,g,y,v,E,R,I,w);return}else if(M&256){kt(b,O,g,y,v,E,R,I,w);return}}x&8?(N&16&&T(b,v,E),O!==b&&f(g,O)):N&16?x&16?je(b,O,g,y,v,E,R,I,w):T(b,v,E,!0):(N&8&&f(g,""),x&16&&pe(O,g,y,v,E,R,I,w))},kt=(u,h,g,y,v,E,R,I,w)=>{u=u||Wt,h=h||Wt;const b=u.length,N=h.length,O=Math.min(b,N);let M;for(M=0;M<O;M++){const x=h[M]=w?it(h[M]):Ue(h[M]);A(u[M],x,g,null,v,E,R,I,w)}b>N?T(u,v,E,!0,!1,O):pe(h,g,y,v,E,R,I,w,O)},je=(u,h,g,y,v,E,R,I,w)=>{let b=0;const N=h.length;let O=u.length-1,M=N-1;for(;b<=O&&b<=M;){const x=u[b],V=h[b]=w?it(h[b]):Ue(h[b]);if(an(x,V))A(x,V,g,null,v,E,R,I,w);else break;b++}for(;b<=O&&b<=M;){const x=u[O],V=h[M]=w?it(h[M]):Ue(h[M]);if(an(x,V))A(x,V,g,null,v,E,R,I,w);else break;O--,M--}if(b>O){if(b<=M){const x=M+1,V=x<N?h[x].el:y;for(;b<=M;)A(null,h[b]=w?it(h[b]):Ue(h[b]),g,V,v,E,R,I,w),b++}}else if(b>M)for(;b<=O;)Ee(u[b],v,E,!0),b++;else{const x=b,V=b,J=new Map;for(b=V;b<=M;b++){const ve=h[b]=w?it(h[b]):Ue(h[b]);ve.key!=null&&J.set(ve.key,b)}let Y,re=0;const Re=M-V+1;let Nt=!1,ni=0;const sn=new Array(Re);for(b=0;b<Re;b++)sn[b]=0;for(b=x;b<=O;b++){const ve=u[b];if(re>=Re){Ee(ve,v,E,!0);continue}let De;if(ve.key!=null)De=J.get(ve.key);else for(Y=V;Y<=M;Y++)if(sn[Y-V]===0&&an(ve,h[Y])){De=Y;break}De===void 0?Ee(ve,v,E,!0):(sn[De-V]=b+1,De>=ni?ni=De:Nt=!0,A(ve,h[De],g,null,v,E,R,I,w),re++)}const ri=Nt?yh(sn):Wt;for(Y=ri.length-1,b=Re-1;b>=0;b--){const ve=V+b,De=h[ve],si=ve+1<N?h[ve+1].el:y;sn[b]===0?A(null,De,g,si,v,E,R,I,w):Nt&&(Y<0||b!==ri[Y]?Me(De,g,si,2):Y--)}}},Me=(u,h,g,y,v=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:b}=u;if(b&6){Me(u.component.subTree,h,g,y);return}if(b&128){u.suspense.move(h,g,y);return}if(b&64){R.move(u,h,g,ee);return}if(R===We){r(E,h,g);for(let O=0;O<w.length;O++)Me(w[O],h,g,y);r(u.anchor,h,g);return}if(R===Vr){z(u,h,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),r(E,h,g),ge(()=>I.enter(E),v);else{const{leave:O,delayLeave:M,afterLeave:x}=I,V=()=>r(E,h,g),J=()=>{O(E,()=>{V(),x&&x()})};M?M(E,V,J):J()}else r(E,h,g)},Ee=(u,h,g,y=!1,v=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:M}=u;if(I!=null&&gs(I,null,g,u,!0),N&256){h.ctx.deactivate(u);return}const x=N&1&&M,V=!sr(u);let J;if(V&&(J=R&&R.onVnodeBeforeUnmount)&&xe(J,h,u),N&6)P(u.component,g,y);else{if(N&128){u.suspense.unmount(g,y);return}x&&mt(u,null,h,"beforeUnmount"),N&64?u.type.remove(u,h,g,v,ee,y):b&&(E!==We||O>0&&O&64)?T(b,h,g,!1,!0):(E===We&&O&384||!v&&N&16)&&T(w,h,g),y&&rn(u)}(V&&(J=R&&R.onVnodeUnmounted)||x)&&ge(()=>{J&&xe(J,h,u),x&&mt(u,null,h,"unmounted")},g)},rn=u=>{const{type:h,el:g,anchor:y,transition:v}=u;if(h===We){m(g,y);return}if(h===Vr){oe(u);return}const E=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(g,E);I?I(u.el,E,w):w()}else E()},m=(u,h)=>{let g;for(;u!==h;)g=p(u),s(u),u=g;s(h)},P=(u,h,g)=>{const{bum:y,scope:v,update:E,subTree:R,um:I}=u;y&&tr(y),v.stop(),E&&(E.active=!1,Ee(R,u,h,g)),I&&ge(I,h),ge(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},T=(u,h,g,y=!1,v=!1,E=0)=>{for(let R=E;R<u.length;R++)Ee(u[R],h,g,y,v)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,h,g)=>{u==null?h._vnode&&Ee(h._vnode,null,null,!0):A(h._vnode||null,u,h,null,null,null,g),Na(),h._vnode=u},ee={p:A,um:Ee,m:Me,r:rn,mt:Pt,mc:pe,pc:_e,pbc:He,n:k,o:t};let H,B;return e&&([H,B]=e(ee)),{render:G,hydrate:H,createApp:mh(G,H)}}function _t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ga(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=it(s[i]),c.el=o.el),n||Ga(o,c))}}function yh(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const bh=t=>t.__isTeleport,We=Symbol(void 0),Js=Symbol(void 0),On=Symbol(void 0),Vr=Symbol(void 0),_n=[];let Ce=null;function Ys(t=!1){_n.push(Ce=t?null:[])}function Ih(){_n.pop(),Ce=_n[_n.length-1]||null}let Pn=1;function Vi(t){Pn+=t}function Eh(t){return t.dynamicChildren=Pn>0?Ce||Wt:null,Ih(),Pn>0&&Ce&&Ce.push(t),t}function Xs(t,e,n,r,s,i){return Eh(te(t,e,n,r,s,i,!0))}function ms(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Nr="__vInternal",Ja=({key:t})=>t!=null?t:null,ir=({ref:t,ref_key:e,ref_for:n})=>t!=null?ce(t)||ue(t)||$(t)?{i:Fe,r:t,k:e,f:!!n}:t:null;function te(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ja(e),ref:e&&ir(e),scopeId:Pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Zs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),Pn>0&&!o&&Ce&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ce.push(a),a}const me=wh;function wh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===rh)&&(t=On),ms(t)){const c=Gt(t,e,!0);return n&&Zs(c,n),Pn>0&&!i&&Ce&&(c.shapeFlag&6?Ce[Ce.indexOf(t)]=c:Ce.push(c)),c.patchFlag|=-2,c}if(Mh(t)&&(t=t.__vccOpts),e){e=Th(e);let{class:c,style:a}=e;c&&!ce(c)&&(e.class=jt(c)),ie(a)&&(Ia(a)&&!F(a)&&(a=he({},a)),e.style=xs(a))}const o=ce(t)?1:jd(t)?128:bh(t)?64:ie(t)?4:$(t)?2:0;return te(t,e,n,r,s,o,i,!0)}function Th(t){return t?Ia(t)||Nr in t?he({},t):t:null}function Gt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Rh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ja(c),ref:e&&e.ref?n&&s?F(s)?s.concat(ir(e)):[s,ir(e)]:ir(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor}}function Qs(t=" ",e=0){return me(Js,null,t,e)}function Ue(t){return t==null||typeof t=="boolean"?me(On):F(t)?me(We,null,t.slice()):typeof t=="object"?it(t):me(Js,null,String(t))}function it(t){return t.el===null||t.memo?t:Gt(t)}function Zs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Nr in e)?e._ctx=Fe:s===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),r&64?(n=16,e=[Qs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=jt([e.class,r.class]));else if(s==="style")e.style=xs([e.style,r.style]);else if(wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xe(t,e,n,r=null){Oe(t,e,7,[n,r])}const Sh=qa();let Ch=0;function Ah(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Sh,i={uid:Ch++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wa(r,s),emitsOptions:Da(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xd.bind(null,i),t.ce&&t.ce(i),i}let le=null;const Jt=t=>{le=t,t.scope.on()},Tt=()=>{le&&le.scope.off(),le=null};function Ya(t){return t.vnode.shapeFlag&4}let kn=!1;function Oh(t,e=!1){kn=e;const{props:n,children:r}=t.vnode,s=Ya(t);uh(t,n,s,e),hh(t,r);const i=s?Ph(t,e):void 0;return kn=!1,i}function Ph(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ea(new Proxy(t.ctx,sh));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Nh(t):null;Jt(t),tn();const i=ht(r,t,0,[t.props,s]);if(nn(),Tt(),oa(i)){if(i.then(Tt,Tt),e)return i.then(o=>{zi(t,o,e)}).catch(o=>{Cr(o,t,0)});t.asyncDep=i}else zi(t,i,e)}else Xa(t,e)}function zi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Sa(e)),Xa(t,n)}let Ki;function Xa(t,e,n){const r=t.type;if(!t.render){if(!e&&Ki&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=he(he({isCustomElement:i,delimiters:c},o),a);r.render=Ki(s,l)}}t.render=r.render||Ae}Jt(t),tn(),ih(t),nn(),Tt()}function kh(t){return new Proxy(t.attrs,{get(e,n){return be(t,"get","$attrs"),e[n]}})}function Nh(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=kh(t))},slots:t.slots,emit:t.emit,expose:e}}function Mr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sa(Ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gr)return gr[n](t)}}))}function Mh(t){return $(t)&&"__vccOpts"in t}const we=(t,e)=>Od(t,e,kn);function Qa(t,e,n){const r=arguments.length;return r===2?ie(e)&&!F(e)?ms(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ms(n)&&(n=[n]),me(t,e,n))}const Dh="3.2.37",xh="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,qi=bt&&bt.createElement("template"),Lh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bt.createElementNS(xh,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qi.innerHTML=r?`<svg>${t}</svg>`:t;const c=qi.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Uh(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Fh(t,e,n){const r=t.style,s=ce(n);if(n&&!s){for(const i in n)_s(r,i,n[i]);if(e&&!ce(e))for(const i in e)n[i]==null&&_s(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Gi=/\s*!important$/;function _s(t,e,n){if(F(n))n.forEach(r=>_s(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bh(t,e);Gi.test(n)?t.setProperty(en(r),n.replace(Gi,""),"important"):t[r]=n}}const Ji=["Webkit","Moz","ms"],zr={};function Bh(t,e){const n=zr[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return zr[e]=r;r=la(r);for(let s=0;s<Ji.length;s++){const i=Ji[s]+r;if(i in t)return zr[e]=i}return e}const Yi="http://www.w3.org/1999/xlink";function $h(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yi,e.slice(6,e.length)):t.setAttributeNS(Yi,e,n);else{const i=Bf(e);n==null||i&&!ra(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Hh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ra(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}const[Za,jh]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let vs=0;const Wh=Promise.resolve(),Vh=()=>{vs=0},zh=()=>vs||(Wh.then(Vh),vs=Za());function Lt(t,e,n,r){t.addEventListener(e,n,r)}function Kh(t,e,n,r){t.removeEventListener(e,n,r)}function qh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Gh(e);if(r){const l=i[e]=Jh(r,s);Lt(t,c,l,a)}else o&&(Kh(t,c,o,a),i[e]=void 0)}}const Xi=/(?:Once|Passive|Capture)$/;function Gh(t){let e;if(Xi.test(t)){e={};let n;for(;n=t.match(Xi);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[en(t.slice(2)),e]}function Jh(t,e){const n=r=>{const s=r.timeStamp||Za();(jh||s>=n.attached-1)&&Oe(Yh(r,n.value),e,5,[r])};return n.value=t,n.attached=zh(),n}function Yh(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qi=/^on[a-z]/,Xh=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?Uh(t,r,s):e==="style"?Fh(t,n,r):wr(e)?Ls(e)||qh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qh(t,e,r,s))?Hh(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$h(t,e,r,s))};function Qh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Qi.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qi.test(e)&&ce(n)?!1:e in t}const Zi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>tr(e,n):e};function Zh(t){t.target.composing=!0}function eo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Zi(s);const i=r||s.props&&s.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ns(c)),t._assign(c)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",Zh),Lt(t,"compositionend",eo),Lt(t,"change",eo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Zi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ns(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ep=["ctrl","shift","alt","meta"],tp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ep.some(n=>t[`${n}Key`]&&!e.includes(n))},to=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=tp[e[s]];if(i&&i(n,e))return}return t(n,...r)},np=he({patchProp:Xh},Lh);let no;function rp(){return no||(no=_h(np))}const sp=(...t)=>{const e=rp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ip(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ip(t){return ce(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ut=typeof window!="undefined";function op(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Kr(t,e){const n={};for(const r in e){const s=e[r];n[r]=ke(s)?s.map(t):t(s)}return n}const vn=()=>{},ke=Array.isArray,ap=/\/$/,cp=t=>t.replace(ap,"");function qr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=dp(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function lp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ro(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function up(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Yt(e.matched[r],n.matched[s])&&ec(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Yt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ec(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fp(t[n],e[n]))return!1;return!0}function fp(t,e){return ke(t)?so(t,e):ke(e)?so(e,t):t===e}function so(t,e){return ke(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Nn;(function(t){t.pop="pop",t.push="push"})(Nn||(Nn={}));var yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yn||(yn={}));function hp(t){if(!t)if(Ut){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cp(t)}const pp=/^[^#]+#/;function gp(t,e){return t.replace(pp,"#")+e}function mp(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dr=()=>({left:window.pageXOffset,top:window.pageYOffset});function _p(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mp(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function io(t,e){return(history.state?history.state.position-e:-1)+t}const ys=new Map;function vp(t,e){ys.set(t,e)}function yp(t){const e=ys.get(t);return ys.delete(t),e}let bp=()=>location.protocol+"//"+location.host;function tc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),ro(a,"")}return ro(n,t)+r+s}function Ip(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const _=tc(t,location),S=n.value,L=e.value;let A=0;if(p){if(n.value=_,e.value=p,o&&o===S){o=null;return}A=L?p.position-L.position:0}else r(_);s.forEach(C=>{C(n.value,S,{delta:A,type:Nn.pop,direction:A?A>0?yn.forward:yn.back:yn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const _=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Dr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:a,listen:l,destroy:d}}function oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dr():null}}function Ep(t){const{history:e,location:n}=window,r={value:tc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:bp()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(a,l){const f=X({},e.state,oo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=X({},s.value,e.state,{forward:a,scroll:Dr()});i(f.current,f,!0);const d=X({},oo(r.value,a,null),{position:f.position+1},l);i(a,d,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function wp(t){t=hp(t);const e=Ep(t),n=Ip(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:gp.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Tp(t){return typeof t=="string"||t&&typeof t=="object"}function nc(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rc=Symbol("");var ao;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ao||(ao={}));function Xt(t,e){return X(new Error,{type:t,[rc]:!0},e)}function nt(t,e){return t instanceof Error&&rc in t&&(e==null||!!(t.type&e))}const co="[^/]+?",Rp={sensitive:!1,strict:!1,start:!0,end:!0},Sp=/[.+*?^${}()[\]/\\]/g;function Cp(t,e){const n=X({},Rp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let _=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Sp,"\\$&"),_+=40;else if(p.type===1){const{value:S,repeatable:L,optional:A,regexp:C}=p;i.push({name:S,repeatable:L,optional:A});const U=C||co;if(U!==co){_+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+z.message)}}let j=L?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;d||(j=A&&l.length<2?`(?:/${j})`:"/"+j),A&&(j+="?"),s+=j,_+=20,A&&(_+=-8),L&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",S=i[p-1];d[S.name]=_&&S.repeatable?_.split("/"):_}return d}function a(l){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:L,optional:A}=_,C=S in l?l[S]:"";if(ke(C)&&!L)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=ke(C)?C.join("/"):C;if(!U)if(A)p.length<2&&t.length>1&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Ap(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Op(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ap(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(lo(r))return 1;if(lo(s))return-1}return s.length-r.length}function lo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pp={type:0,value:""},kp=/[a-zA-Z0-9_]/;function Np(t){if(!t)return[[]];if(t==="/")return[[Pp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:kp.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Mp(t,e,n){const r=Cp(Np(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Dp(t,e){const n=[],r=new Map;e=fo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,d,p){const _=!p,S=Lp(f);S.aliasOf=p&&p.record;const L=fo(e,f),A=[S];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of j)A.push(X({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let C,U;for(const j of A){const{path:z}=j;if(d&&z[0]!=="/"){const oe=d.record.path,ae=oe[oe.length-1]==="/"?"":"/";j.path=d.record.path+(z&&ae+z)}if(C=Mp(j,d,L),p?p.alias.push(C):(U=U||C,U!==C&&U.alias.push(C),_&&f.name&&!uo(C)&&o(f.name)),S.children){const oe=S.children;for(let ae=0;ae<oe.length;ae++)i(oe[ae],C,p&&p.children[ae])}p=p||C,a(C)}return U?()=>{o(U)}:vn}function o(f){if(nc(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let d=0;for(;d<n.length&&Op(f,n[d])>=0&&(f.record.path!==n[d].record.path||!sc(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!uo(f)&&r.set(f.record.name,f)}function l(f,d){let p,_={},S,L;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Xt(1,{location:f});L=p.record.name,_=X(xp(d.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),f.params),S=p.stringify(_)}else if("path"in f)S=f.path,p=n.find(U=>U.re.test(S)),p&&(_=p.parse(S),L=p.record.name);else{if(p=d.name?r.get(d.name):n.find(U=>U.re.test(d.path)),!p)throw Xt(1,{location:f,currentLocation:d});L=p.record.name,_=X({},d.params,f.params),S=p.stringify(_)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:L,path:S,params:_,matched:A,meta:Fp(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function xp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Up(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Up(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function uo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Fp(t){return t.reduce((e,n)=>X(e,n.meta),{})}function fo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function sc(t,e){return e.children.some(n=>n===t||sc(t,n))}const ic=/#/g,Bp=/&/g,$p=/\//g,Hp=/=/g,jp=/\?/g,oc=/\+/g,Wp=/%5B/g,Vp=/%5D/g,ac=/%5E/g,zp=/%60/g,cc=/%7B/g,Kp=/%7C/g,lc=/%7D/g,qp=/%20/g;function ei(t){return encodeURI(""+t).replace(Kp,"|").replace(Wp,"[").replace(Vp,"]")}function Gp(t){return ei(t).replace(cc,"{").replace(lc,"}").replace(ac,"^")}function bs(t){return ei(t).replace(oc,"%2B").replace(qp,"+").replace(ic,"%23").replace(Bp,"%26").replace(zp,"`").replace(cc,"{").replace(lc,"}").replace(ac,"^")}function Jp(t){return bs(t).replace(Hp,"%3D")}function Yp(t){return ei(t).replace(ic,"%23").replace(jp,"%3F")}function Xp(t){return t==null?"":Yp(t).replace($p,"%2F")}function _r(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Qp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(oc," "),o=i.indexOf("="),c=_r(o<0?i:i.slice(0,o)),a=o<0?null:_r(i.slice(o+1));if(c in e){let l=e[c];ke(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function ho(t){let e="";for(let n in t){const r=t[n];if(n=Jp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ke(r)?r.map(i=>i&&bs(i)):[r&&bs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Zp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const eg=Symbol(""),po=Symbol(""),ti=Symbol(""),uc=Symbol(""),Is=Symbol("");function ln(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=d=>{d===!1?c(Xt(4,{from:n,to:e})):d instanceof Error?c(d):Tp(d)?c(Xt(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,a);let f=Promise.resolve(l);t.length<3&&(f=f.then(a)),f.catch(d=>c(d))})}function Gr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(tg(c)){const l=(c.__vccOpts||c)[e];l&&s.push(ot(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=op(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ot(p,n,r,i,o)()}))}}return s}function tg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function go(t){const e=pt(ti),n=pt(uc),r=we(()=>e.resolve(qe(t.to))),s=we(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Yt.bind(null,f));if(p>-1)return p;const _=mo(a[l-2]);return l>1&&mo(f)===_&&d[d.length-1].path!==_?d.findIndex(Yt.bind(null,a[l-2])):p}),i=we(()=>s.value>-1&&sg(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&ec(n.params,r.value.params));function c(a={}){return rg(a)?e[qe(t.replace)?"replace":"push"](qe(t.to)).catch(vn):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const ng=Wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:go,setup(t,{slots:e}){const n=jn(go(t)),{options:r}=pt(ti),s=we(()=>({[_o(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_o(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Es=ng;function rg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function mo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _o=(t,e,n)=>t!=null?t:e!=null?e:n,ig=Wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pt(Is),s=we(()=>t.route||r.value),i=pt(po,0),o=we(()=>{let l=qe(i);const{matched:f}=s.value;let d;for(;(d=f[l])&&!d.components;)l++;return l}),c=we(()=>s.value.matched[o.value]);nr(po,we(()=>o.value+1)),nr(eg,c),nr(Is,s);const a=rt();return rr(()=>[a.value,c.value,t.name],([l,f,d],[p,_,S])=>{f&&(f.instances[d]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!Yt(f,_)||!p)&&(f.enterCallbacks[d]||[]).forEach(L=>L(l))},{flush:"post"}),()=>{const l=s.value,f=c.value,d=f&&f.components[t.name],p=t.name;if(!d)return vo(n.default,{Component:d,route:l});const _=f.props[t.name],S=_?_===!0?l.params:typeof _=="function"?_(l):_:null,A=Qa(d,X({},S,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[p]=null)},ref:a}));return vo(n.default,{Component:A,route:l})||A}}});function vo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fc=ig;function og(t){const e=Dp(t.routes,t),n=t.parseQuery||Qp,r=t.stringifyQuery||ho,s=t.history,i=ln(),o=ln(),c=ln(),a=Rd(tt);let l=tt;Ut&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Kr.bind(null,m=>""+m),d=Kr.bind(null,Xp),p=Kr.bind(null,_r);function _(m,P){let T,k;return nc(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function L(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=X({},P||a.value),typeof m=="string"){const B=qr(n,m,P.path),u=e.resolve({path:B.path},P),h=s.createHref(B.fullPath);return X(B,u,{params:p(u.params),hash:_r(B.hash),redirectedFrom:void 0,href:h})}let T;if("path"in m)T=X({},m,{path:qr(n,m.path,P.path).path});else{const B=X({},m.params);for(const u in B)B[u]==null&&delete B[u];T=X({},m,{params:d(m.params)}),P.params=d(P.params)}const k=e.resolve(T,P),G=m.hash||"";k.params=f(p(k.params));const ee=lp(r,X({},m,{hash:Gp(G),path:k.path})),H=s.createHref(ee);return X({fullPath:ee,hash:G,query:r===ho?Zp(m.query):m.query||{}},k,{redirectedFrom:void 0,href:H})}function U(m){return typeof m=="string"?qr(n,m,a.value.path):X({},m)}function j(m,P){if(l!==m)return Xt(8,{from:P,to:m})}function z(m){return Ie(m)}function oe(m){return z(X(U(m),{replace:!0}))}function ae(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=U(k):{path:k},k.params={}),X({query:m.query,hash:m.hash,params:"path"in k?{}:m.params},k)}}function Ie(m,P){const T=l=C(m),k=a.value,G=m.state,ee=m.force,H=m.replace===!0,B=ae(T);if(B)return Ie(X(U(B),{state:G,force:ee,replace:H}),P||T);const u=T;u.redirectedFrom=P;let h;return!ee&&up(r,k,T)&&(h=Xt(16,{to:u,from:k}),kt(k,k,!0,!1)),(h?Promise.resolve(h):pe(u,k)).catch(g=>nt(g)?nt(g,2)?g:_e(g):Z(g,u,k)).then(g=>{if(g){if(nt(g,2))return Ie(X(U(g.to),{state:G,force:ee,replace:H}),P||u)}else g=He(u,k,!0,H,G);return Ne(u,k,g),g})}function Qe(m,P){const T=j(m,P);return T?Promise.reject(T):Promise.resolve()}function pe(m,P){let T;const[k,G,ee]=ag(m,P);T=Gr(k.reverse(),"beforeRouteLeave",m,P);for(const B of k)B.leaveGuards.forEach(u=>{T.push(ot(u,m,P))});const H=Qe.bind(null,m,P);return T.push(H),Mt(T).then(()=>{T=[];for(const B of i.list())T.push(ot(B,m,P));return T.push(H),Mt(T)}).then(()=>{T=Gr(G,"beforeRouteUpdate",m,P);for(const B of G)B.updateGuards.forEach(u=>{T.push(ot(u,m,P))});return T.push(H),Mt(T)}).then(()=>{T=[];for(const B of m.matched)if(B.beforeEnter&&!P.matched.includes(B))if(ke(B.beforeEnter))for(const u of B.beforeEnter)T.push(ot(u,m,P));else T.push(ot(B.beforeEnter,m,P));return T.push(H),Mt(T)}).then(()=>(m.matched.forEach(B=>B.enterCallbacks={}),T=Gr(ee,"beforeRouteEnter",m,P),T.push(H),Mt(T))).then(()=>{T=[];for(const B of o.list())T.push(ot(B,m,P));return T.push(H),Mt(T)}).catch(B=>nt(B,8)?B:Promise.reject(B))}function Ne(m,P,T){for(const k of c.list())k(m,P,T)}function He(m,P,T,k,G){const ee=j(m,P);if(ee)return ee;const H=P===tt,B=Ut?history.state:{};T&&(k||H?s.replace(m.fullPath,X({scroll:H&&B&&B.scroll},G)):s.push(m.fullPath,G)),a.value=m,kt(m,P,T,H),_e()}let Te;function At(){Te||(Te=s.listen((m,P,T)=>{if(!rn.listening)return;const k=C(m),G=ae(k);if(G){Ie(X(G,{replace:!0}),k).catch(vn);return}l=k;const ee=a.value;Ut&&vp(io(ee.fullPath,T.delta),Dr()),pe(k,ee).catch(H=>nt(H,12)?H:nt(H,2)?(Ie(H.to,k).then(B=>{nt(B,20)&&!T.delta&&T.type===Nn.pop&&s.go(-1,!1)}).catch(vn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(H,k,ee))).then(H=>{H=H||He(k,ee,!1),H&&(T.delta?s.go(-T.delta,!1):T.type===Nn.pop&&nt(H,20)&&s.go(-1,!1)),Ne(k,ee,H)}).catch(vn)}))}let Ot=ln(),Pt=ln(),se;function Z(m,P,T){_e(m);const k=Pt.list();return k.length?k.forEach(G=>G(m,P,T)):console.error(m),Promise.reject(m)}function q(){return se&&a.value!==tt?Promise.resolve():new Promise((m,P)=>{Ot.add([m,P])})}function _e(m){return se||(se=!m,At(),Ot.list().forEach(([P,T])=>m?T(m):P()),Ot.reset()),m}function kt(m,P,T,k){const{scrollBehavior:G}=t;if(!Ut||!G)return Promise.resolve();const ee=!T&&yp(io(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Aa().then(()=>G(m,P,ee)).then(H=>H&&_p(H)).catch(H=>Z(H,m,P))}const je=m=>s.go(m);let Me;const Ee=new Set,rn={currentRoute:a,listening:!0,addRoute:_,removeRoute:S,hasRoute:A,getRoutes:L,resolve:C,options:t,push:z,replace:oe,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Pt.add,isReady:q,install(m){const P=this;m.component("RouterLink",Es),m.component("RouterView",fc),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>qe(a)}),Ut&&!Me&&a.value===tt&&(Me=!0,z(s.location).catch(G=>{}));const T={};for(const G in tt)T[G]=we(()=>a.value[G]);m.provide(ti,P),m.provide(uc,jn(T)),m.provide(Is,a);const k=m.unmount;Ee.add(m),m.unmount=function(){Ee.delete(m),Ee.size<1&&(l=tt,Te&&Te(),Te=null,a.value=tt,Me=!1,se=!1),k()}}};return rn}function Mt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ag(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Yt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Yt(l,a))||s.push(a))}return[n,r,s]}const cg={class:"app"},lg=Qs("Home"),ug=Qs("About"),fg=Wn({__name:"App",setup(t){return(e,n)=>(Ys(),Xs("div",cg,[te("header",null,[te("nav",null,[me(qe(Es),{to:"/"},{default:us(()=>[lg]),_:1}),me(qe(Es),{to:"/about"},{default:us(()=>[ug]),_:1})])]),me(qe(fc))]))}});var dc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const Xe=t=>(Ld("data-v-f46dfc76"),t=t(),Ud(),t),dg={class:"page-wrapper"},hg={class:"container"},pg=Xe(()=>te("p",null,"SIGN IN: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),gg=Xe(()=>te("p",null,"SIGN UP: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus blanditiis dignissimos officia! Officia, unde error sit possimus molestiae ullam, natus dolor, dolorem officiis eius dignissimos assumenda dicta neque exercitationem?",-1)),mg=["onSubmit"],_g=Xe(()=>te("label",null,"Email",-1)),vg=Xe(()=>te("label",null,"Password",-1)),yg=Xe(()=>te("button",{type:"submit"},"Sign in",-1)),bg=["onSubmit"],Ig=Xe(()=>te("label",null,"Email",-1)),Eg=Xe(()=>te("label",null,"Password",-1)),wg=Xe(()=>te("label",null,"Repeat password",-1)),Tg=Xe(()=>te("button",{type:"submit"},"Sign up",-1)),Rg=Wn({__name:"Login",setup(t){const e=rt(""),n=rt(""),r=rt(""),s=rt(""),i=rt(""),o=rt(0);rt(!1);function c(){if(s.value.length!==0&&s.value===i.value){const f=ts();wu(f,r.value,s.value).then(d=>{const p=d.user;console.log("user",p)}).catch(d=>{console.log(d),d.code,d.message})}}function a(){const f=ts();Tu(f,e.value,n.value).then(d=>{const p=d.user;console.log("user",p)}).catch(d=>{console.log(d),d.code,d.message}),console.log("Sign in!")}function l(f){o.value=f}return(f,d)=>(Ys(),Xs("div",dg,[te("div",hg,[te("div",{class:jt(["overlay",{right:o.value===0}])},[te("div",{class:jt(["sign-in-info",{active:o.value===0,inactive:o.value!==0}])},[pg,te("button",{onClick:d[0]||(d[0]=()=>l(1))},"Sign UP instead!")],2),te("div",{class:jt(["sign-up-info",{active:o.value===1,inactive:o.value!==1}])},[gg,te("button",{onClick:d[1]||(d[1]=()=>l(0))},"Sign IN instead!")],2)],2),te("form",{onSubmit:to(a,["prevent"]),class:"sign-in-form"},[_g,on(te("input",{"onUpdate:modelValue":d[2]||(d[2]=p=>e.value=p)},null,512),[[cn,e.value]]),vg,on(te("input",{type:"password","onUpdate:modelValue":d[3]||(d[3]=p=>n.value=p)},null,512),[[cn,n.value]]),yg],40,mg),te("form",{onSubmit:to(c,["prevent"]),class:"sign-up-form"},[Ig,on(te("input",{"onUpdate:modelValue":d[4]||(d[4]=p=>r.value=p)},null,512),[[cn,r.value]]),Eg,on(te("input",{type:"password","onUpdate:modelValue":d[5]||(d[5]=p=>s.value=p)},null,512),[[cn,s.value]]),wg,on(te("input",{type:"password","onUpdate:modelValue":d[6]||(d[6]=p=>i.value=p)},null,512),[[cn,i.value]]),Tg],40,bg)])]))}});var Sg=dc(Rg,[["__scopeId","data-v-f46dfc76"]]);const Cg=Wn({computed:{roomId(){return this.$route.params.id}},created(){console.log("created!")}});function Ag(t,e,n,r,s,i){return Ys(),Xs("p",null,Wf(t.roomId),1)}var Og=dc(Cg,[["render",Ag]]);const Pg=og({history:wp("/yt-watchmen/"),routes:[{path:"/",name:"home",component:Sg},{path:"/room/:id",name:"room",component:Og}]}),hc=sp(fg);hc.use(Pg);hc.mount("#app");
