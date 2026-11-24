import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{A as t,C as n,I as r,L as i,O as a,R as o,_ as s,b as c,c as l,j as u,k as d,l as f,o as p,p as m,s as h,w as g,x as _,y as v}from"./react.Dxe_2v0O.mjs";import{a as y,r as b,t as x,x as ee}from"./motion.DYjC_Hbv.mjs";import{B as te,D as ne,G as re,H as ie,K as ae,S as oe,U as se,W as ce,X as le,a as ue,d as de,g as S,m as fe,n as pe,nt as me,p as he,q as ge,r as C,t as _e}from"./framer.DR4ExGRe.mjs";function w(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function ve(e){return G.call(Vn,e)?!0:G.call(Bn,e)?!1:zn.test(e)?Vn[e]=!0:(Bn[e]=!0,!1)}function T(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}function ye(e){return e[1].toUpperCase()}function E(e){if(typeof e==`boolean`||typeof e==`number`)return``+e;e=``+e;var t=Gn.exec(e);if(t){var n,r=``,i=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==n&&(r+=e.substring(i,n)),i=n+1,r+=t}e=i===n?r:r+e.substring(i,n)}return e}function D(e,t){return{insertionMode:e,selectedValue:t}}function be(e,t,n){switch(t){case`select`:return D(1,n.value==null?n.defaultValue:n.value);case`svg`:return D(2,null);case`math`:return D(3,null);case`foreignObject`:return D(1,null);case`table`:return D(4,null);case`thead`:case`tbody`:case`tfoot`:return D(5,null);case`colgroup`:return D(7,null);case`tr`:return D(6,null)}return 4<=e.insertionMode||e.insertionMode===0?D(1,null):e}function xe(e,t,n){if(typeof n!=`object`)throw Error(w(62));for(var r in t=!0,n)if(G.call(n,r)){var i=n[r];if(i!=null&&typeof i!=`boolean`&&i!==``){if(r.indexOf(`--`)===0){var a=E(r);i=E((``+i).trim())}else{a=r;var o=Yn.get(a);o!==void 0||(o=E(a.replace(Kn,`-$1`).toLowerCase().replace(qn,`-ms-`)),Yn.set(a,o)),a=o,i=typeof i==`number`?i===0||G.call(Un,r)?``+i:i+`px`:E((``+i).trim())}t?(t=!1,e.push(` style="`,a,`:`,i)):e.push(`;`,a,`:`,i)}}t||e.push(`"`)}function O(e,t,n,r){switch(n){case`style`:xe(e,t,r);return;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:return}if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`){if(t=K.hasOwnProperty(n)?K[n]:null,t!==null){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(` `,n,`=""`);break;case 4:!0===r?e.push(` `,n,`=""`):!1!==r&&e.push(` `,n,`="`,E(r),`"`);break;case 5:isNaN(r)||e.push(` `,n,`="`,E(r),`"`);break;case 6:!isNaN(r)&&1<=r&&e.push(` `,n,`="`,E(r),`"`);break;default:t.sanitizeURL&&(r=``+r),e.push(` `,n,`="`,E(r),`"`)}}else if(ve(n)){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(t=n.toLowerCase().slice(0,5),t!==`data-`&&t!==`aria-`)return}e.push(` `,n,`="`,E(r),`"`)}}}function Se(e,t,n){if(t!=null){if(n!=null)throw Error(w(60));if(typeof t!=`object`||!(`__html`in t))throw Error(w(61));t=t.__html,t!=null&&e.push(``+t)}}function Ce(e){var t=``;return Rn.Children.forEach(e,(function(e){e!=null&&(t+=e)})),t}function we(e,t,n,r){e.push(k(n));var i,a=n=null;for(i in t)if(G.call(t,i)){var o=t[i];if(o!=null)switch(i){case`children`:n=o;break;case`dangerouslySetInnerHTML`:a=o;break;default:O(e,r,i,o)}}return e.push(`>`),Se(e,a,n),typeof n==`string`?(e.push(E(n)),null):n}function k(e){var t=Zn.get(e);if(t===void 0){if(!Xn.test(e))throw Error(w(65,e));t=`<`+e,Zn.set(e,t)}return t}function Te(e,t,n,r,i){switch(t){case`select`:e.push(k(`select`));var a=null,o=null;for(u in n)if(G.call(n,u)){var s=n[u];if(s!=null)switch(u){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`defaultValue`:case`value`:break;default:O(e,r,u,s)}}return e.push(`>`),Se(e,o,a),a;case`option`:o=i.selectedValue,e.push(k(`option`));var c=s=null,l=null,u=null;for(a in n)if(G.call(n,a)){var d=n[a];if(d!=null)switch(a){case`children`:s=d;break;case`selected`:l=d;break;case`dangerouslySetInnerHTML`:u=d;break;case`value`:c=d;default:O(e,r,a,d)}}if(o!=null){if(n=c===null?Ce(s):``+c,Jn(o)){for(r=0;r<o.length;r++)if(``+o[r]===n){e.push(` selected=""`);break}}else``+o===n&&e.push(` selected=""`)}else l&&e.push(` selected=""`);return e.push(`>`),Se(e,u,s),s;case`textarea`:for(s in e.push(k(`textarea`)),u=o=a=null,n)if(G.call(n,s)&&(c=n[s],c!=null))switch(s){case`children`:u=c;break;case`value`:a=c;break;case`defaultValue`:o=c;break;case`dangerouslySetInnerHTML`:throw Error(w(91));default:O(e,r,s,c)}if(a===null&&o!==null&&(a=o),e.push(`>`),u!=null){if(a!=null)throw Error(w(92));if(Jn(u)&&1<u.length)throw Error(w(93));a=``+u}return typeof a==`string`&&a[0]===`
`&&e.push(`
`),a!==null&&e.push(E(``+a)),null;case`input`:for(o in e.push(k(`input`)),c=u=s=a=null,n)if(G.call(n,o)&&(l=n[o],l!=null))switch(o){case`children`:case`dangerouslySetInnerHTML`:throw Error(w(399,`input`));case`defaultChecked`:c=l;break;case`defaultValue`:s=l;break;case`checked`:u=l;break;case`value`:a=l;break;default:O(e,r,o,l)}return u===null?c!==null&&O(e,r,`checked`,c):O(e,r,`checked`,u),a===null?s!==null&&O(e,r,`value`,s):O(e,r,`value`,a),e.push(`/>`),null;case`menuitem`:for(var f in e.push(k(`menuitem`)),n)if(G.call(n,f)&&(a=n[f],a!=null))switch(f){case`children`:case`dangerouslySetInnerHTML`:throw Error(w(400));default:O(e,r,f,a)}return e.push(`>`),null;case`title`:for(d in e.push(k(`title`)),a=null,n)if(G.call(n,d)&&(o=n[d],o!=null))switch(d){case`children`:a=o;break;case`dangerouslySetInnerHTML`:throw Error(w(434));default:O(e,r,d,o)}return e.push(`>`),a;case`listing`:case`pre`:for(c in e.push(k(t)),o=a=null,n)if(G.call(n,c)&&(s=n[c],s!=null))switch(c){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;default:O(e,r,c,s)}if(e.push(`>`),o!=null){if(a!=null)throw Error(w(60));if(typeof o!=`object`||!(`__html`in o))throw Error(w(61));n=o.__html,n!=null&&(typeof n==`string`&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(``+n))}return typeof a==`string`&&a[0]===`
`&&e.push(`
`),a;case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:for(var p in e.push(k(t)),n)if(G.call(n,p)&&(a=n[p],a!=null))switch(p){case`children`:case`dangerouslySetInnerHTML`:throw Error(w(399,t));default:O(e,r,p,a)}return e.push(`/>`),null;case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return we(e,n,t,r);case`html`:return i.insertionMode===0&&e.push(`<!DOCTYPE html>`),we(e,n,t,r);default:if(t.indexOf(`-`)===-1&&typeof n.is!=`string`)return we(e,n,t,r);for(l in e.push(k(t)),o=a=null,n)if(G.call(n,l)&&(s=n[l],s!=null))switch(l){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`style`:xe(e,r,s);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:break;default:ve(l)&&typeof s!=`function`&&typeof s!=`symbol`&&e.push(` `,l,`="`,E(s),`"`)}return e.push(`>`),Se(e,o,a),a}}function Ee(e,t,n){if(e.push(`<!--$?--><template id="`),n===null)throw Error(w(395));return e.push(n),e.push(`"></template>`)}function De(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push(`<div hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 2:return e.push(`<svg aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 3:return e.push(`<math aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 4:return e.push(`<table hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 5:return e.push(`<table hidden><tbody id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 6:return e.push(`<table hidden><tr id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 7:return e.push(`<table hidden><colgroup id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);default:throw Error(w(397))}}function Oe(e,t){switch(t.insertionMode){case 0:case 1:return e.push(`</div>`);case 2:return e.push(`</svg>`);case 3:return e.push(`</math>`);case 4:return e.push(`</table>`);case 5:return e.push(`</tbody></table>`);case 6:return e.push(`</tr></table>`);case 7:return e.push(`</colgroup></table>`);default:throw Error(w(397))}}function ke(e){return JSON.stringify(e).replace(Qn,(function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}))}function Ae(e,t){return t=t===void 0?``:t,{bootstrapChunks:[],startInlineScript:`<script>`,placeholderPrefix:t+`P:`,segmentPrefix:t+`S:`,boundaryPrefix:t+`B:`,idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function je(e,t,n,r){return n.generateStaticMarkup?(e.push(E(t)),!1):(t===``?e=r:(r&&e.push(`<!-- -->`),e.push(E(t)),e=!0),e)}function Me(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case nr:return`Fragment`;case tr:return`Portal`;case ir:return`Profiler`;case rr:return`StrictMode`;case cr:return`Suspense`;case lr:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case or:return(e.displayName||`Context`)+`.Consumer`;case ar:return(e._context.displayName||`Context`)+`.Provider`;case sr:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ur:return t=e.displayName||null,t===null?Me(e.type)||`Memo`:t;case dr:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}function Ne(e,t){if(e=e.contextTypes,!e)return _r;var n,r={};for(n in e)r[n]=t[n];return r}function Pe(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(w(401))}else{if(n===null)throw Error(w(401));Pe(e,n)}t.context._currentValue2=t.value}}function Fe(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Fe(e)}function Ie(e){var t=e.parent;t!==null&&Ie(t),e.context._currentValue2=e.value}function Le(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(w(402));e.depth===t.depth?Pe(e,t):Le(e,t)}function Re(e,t){var n=t.parent;if(n===null)throw Error(w(402));e.depth===n.depth?Pe(e,n):Re(e,n),t.context._currentValue2=t.value}function ze(e){var t=vr;t!==e&&(t===null?Ie(e):e===null?Fe(t):t.depth===e.depth?Pe(t,e):t.depth>e.depth?Le(t,e):Re(t,e),vr=e)}function Be(e,t,n,r){var i=e.state===void 0?null:e.state;e.updater=yr,e.props=n,e.state=i;var a={queue:[],replace:!1};e._reactInternals=a;var o=t.contextType;if(e.context=typeof o==`object`&&o?o._currentValue2:r,o=t.getDerivedStateFromProps,typeof o==`function`&&(o=o(n,i),i=o==null?i:$n({},i,o),e.state=i),typeof t.getDerivedStateFromProps!=`function`&&typeof e.getSnapshotBeforeUpdate!=`function`&&(typeof e.UNSAFE_componentWillMount==`function`||typeof e.componentWillMount==`function`)){if(t=e.state,typeof e.componentWillMount==`function`&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount==`function`&&e.UNSAFE_componentWillMount(),t!==e.state&&yr.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length){if(t=a.queue,o=a.replace,a.queue=null,a.replace=!1,o&&t.length===1)e.state=t[0];else{for(a=o?t[0]:e.state,i=!0,o=+!!o;o<t.length;o++){var s=t[o];s=typeof s==`function`?s.call(e,a,n,r):s,s!=null&&(i?(i=!1,a=$n({},a,s)):$n(a,s))}e.state=a}}else a.queue=null}}function Ve(e,t,n){var r=e.id;e=e.overflow;var i=32-xr(r)-1;r&=~(1<<i),n+=1;var a=32-xr(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-xr(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}function He(e){return e>>>=0,e===0?32:31-(Sr(e)/Cr|0)|0}function Ue(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function We(){if(Tr===null)throw Error(w(321));return Tr}function Ge(){if(0<Mr)throw Error(w(312));return{memoizedState:null,queue:null,next:null}}function Ke(){return q===null?Dr===null?(Or=!1,Dr=q=Ge()):(Or=!0,q=Dr):q.next===null?(Or=!1,q=q.next=Ge()):(Or=!0,q=q.next),q}function qe(){Er=Tr=null,kr=!1,Dr=null,Mr=0,q=jr=null}function Je(e,t){return typeof t==`function`?t(e):t}function Ye(e,t,n){if(Tr=We(),q=Ke(),Or){var r=q.queue;if(t=r.dispatch,jr!==null&&(n=jr.get(r),n!==void 0)){jr.delete(r),r=q.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return q.memoizedState=r,[r,t]}return[q.memoizedState,t]}return e=e===Je?typeof t==`function`?t():t:n===void 0?t:n(t),q.memoizedState=e,e=q.queue={last:null,dispatch:null},e=e.dispatch=Ze.bind(null,Tr,e),[q.memoizedState,e]}function Xe(e,t){if(Tr=We(),q=Ke(),t=t===void 0?null:t,q!==null){var n=q.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!wr(t[i],r[i])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),q.memoizedState=[e,t],e}function Ze(e,t,n){if(25<=Mr)throw Error(w(301));if(e===Tr){if(kr=!0,e={action:n,next:null},jr===null&&(jr=/* @__PURE__ */ new Map),n=jr.get(t),n===void 0)jr.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}}function Qe(){throw Error(w(394))}function $e(){}function et(e){return console.error(e),null}function tt(){}function nt(e,t,n,r,i,a,o,s,c){var l=[],u=/* @__PURE__ */ new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:l,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:i===void 0?et:i,onAllReady:a===void 0?tt:a,onShellReady:o===void 0?tt:o,onShellError:s===void 0?tt:s,onFatalError:c===void 0?tt:c},n=it(t,0,null,n,!1,!1),n.parentFlushed=!0,e=rt(t,e,null,n,u,_r,null,br),l.push(e),t}function rt(e,t,n,r,i,a,o,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var c={node:t,ping:function(){var t=e.pingedTasks;t.push(c),t.length===1&&gt(e)},blockedBoundary:n,blockedSegment:r,abortSet:i,legacyContext:a,context:o,treeContext:s};return i.add(c),c}function it(e,t,n,r,i,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function at(e,t){if(e=e.onError(t),e!=null&&typeof e!=`string`)throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "`+typeof e+`" instead`);return e}function ot(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination===null?(e.status=1,e.fatalError=t):(e.status=2,e.destination.destroy(t))}function st(e,t,n,r,i){for(Tr={},Er=t,Ar=0,e=n(r,i);kr;)kr=!1,Ar=0,Mr+=1,q=null,e=n(r,i);return qe(),e}function ct(e,t,n,r){var i=n.render(),a=r.childContextTypes;if(a!=null){var o=t.legacyContext;if(typeof n.getChildContext!=`function`)r=o;else{for(var s in n=n.getChildContext(),n)if(!(s in a))throw Error(w(108,Me(r)||`Unknown`,s));r=$n({},o,n)}t.legacyContext=r,A(e,t,i),t.legacyContext=o}else A(e,t,i)}function lt(e,t){if(e&&e.defaultProps){for(var n in t=$n({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ut(e,t,n,r,i){if(typeof n==`function`){if(n.prototype&&n.prototype.isReactComponent){i=Ne(n,t.legacyContext);var a=n.contextType;a=new n(r,typeof a==`object`&&a?a._currentValue2:i),Be(a,n,r,i),ct(e,t,a,n)}else{a=Ne(n,t.legacyContext),i=st(e,t,n,r,a);var o=Ar!==0;if(typeof i==`object`&&i&&typeof i.render==`function`&&i.$$typeof===void 0)Be(i,n,r,a),ct(e,t,i,n);else if(o){r=t.treeContext,t.treeContext=Ve(r,1,0);try{A(e,t,i)}finally{t.treeContext=r}}else A(e,t,i)}}else{if(typeof n!=`string`){switch(n){case mr:case pr:case rr:case ir:case nr:A(e,t,r.children);return;case lr:A(e,t,r.children);return;case fr:throw Error(w(343));case cr:e:{n=t.blockedBoundary,i=t.blockedSegment,a=r.fallback,r=r.children,o=/* @__PURE__ */ new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=it(e,i.chunks.length,s,i.formatContext,!1,!1);i.children.push(c),i.lastPushedText=!1;var l=it(e,0,null,i.formatContext,!1,!1);l.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=l;try{if(dt(e,t,r),e.responseState.generateStaticMarkup||l.lastPushedText&&l.textEmbedded&&l.chunks.push(`<!-- -->`),l.status=1,mt(s,l),s.pendingTasks===0)break e}catch(t){l.status=4,s.forceClientRender=!0,s.errorDigest=at(e,t)}finally{t.blockedBoundary=n,t.blockedSegment=i}t=rt(e,a,n,c,o,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n==`object`&&n)switch(n.$$typeof){case sr:if(r=st(e,t,n.render,r,i),Ar!==0){n=t.treeContext,t.treeContext=Ve(n,1,0);try{A(e,t,r)}finally{t.treeContext=n}}else A(e,t,r);return;case ur:n=n.type,r=lt(n,r),ut(e,t,n,r,i);return;case ar:if(i=r.children,n=n._context,r=r.value,a=n._currentValue2,n._currentValue2=r,o=vr,vr=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:a,value:r},t.context=r,A(e,t,i),e=vr,e===null)throw Error(w(403));r=e.parentValue,e.context._currentValue2=r===hr?e.context._defaultValue:r,e=vr=e.parent,t.context=e;return;case or:r=r.children,r=r(n._currentValue2),A(e,t,r);return;case dr:i=n._init,n=i(n._payload),r=lt(n,r),ut(e,t,n,r,void 0);return}throw Error(w(130,n==null?n:typeof n,``))}switch(i=t.blockedSegment,a=Te(i.chunks,n,r,e.responseState,i.formatContext),i.lastPushedText=!1,o=i.formatContext,i.formatContext=be(o,n,r),dt(e,t,a),i.formatContext=o,n){case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break;default:i.chunks.push(`</`,n,`>`)}i.lastPushedText=!1}}function A(e,t,n){if(t.node=n,typeof n==`object`&&n){switch(n.$$typeof){case er:ut(e,t,n.type,n.props,n.ref);return;case tr:throw Error(w(257));case dr:var r=n._init;n=r(n._payload),A(e,t,n);return}if(Jn(n)){j(e,t,n);return}if(typeof n!=`object`||!n?r=null:(r=gr&&n[gr]||n[`@@iterator`],r=typeof r==`function`?r:null),r&&=r.call(n)){if(n=r.next(),!n.done){var i=[];do i.push(n.value),n=r.next();while(!n.done);j(e,t,i)}return}throw e=Object.prototype.toString.call(n),Error(w(31,e===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:e))}typeof n==`string`?(r=t.blockedSegment,r.lastPushedText=je(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n==`number`&&(r=t.blockedSegment,r.lastPushedText=je(t.blockedSegment.chunks,``+n,e.responseState,r.lastPushedText))}function j(e,t,n){for(var r=n.length,i=0;i<r;i++){var a=t.treeContext;t.treeContext=Ve(a,r,i);try{dt(e,t,n[i])}finally{t.treeContext=a}}}function dt(e,t,n){var r=t.blockedSegment.formatContext,i=t.legacyContext,a=t.context;try{return A(e,t,n)}catch(c){if(qe(),typeof c!=`object`||!c||typeof c.then!=`function`)throw t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,ze(a),c;n=c;var o=t.blockedSegment,s=it(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(s),o.lastPushedText=!1,e=rt(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,ze(a)}}function ft(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,ht(this,t,e)}function pt(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(w(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach((function(e){return pt(e,t,n)})),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function mt(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&mt(e,n)}else e.completedSegments.push(t)}function ht(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(w(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=tt,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&mt(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(ft,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(mt(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function gt(e){if(e.status!==2){var t=vr,n=Fr.current;Fr.current=Nr;var r=Pr;Pr=e.responseState;try{var i,a=e.pingedTasks;for(i=0;i<a.length;i++){var o=a[i],s=e,c=o.blockedSegment;if(c.status===0){ze(o.context);try{A(s,o,o.node),s.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push(`<!-- -->`),o.abortSet.delete(o),c.status=1,ht(s,o.blockedBoundary,c)}catch(e){if(qe(),typeof e==`object`&&e&&typeof e.then==`function`){var l=o.ping;e.then(l,l)}else{o.abortSet.delete(o),c.status=4;var u=o.blockedBoundary,d=e,f=at(s,d);if(u===null?ot(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}}}a.splice(0,i),e.destination!==null&&St(e,e.destination)}catch(t){at(e,t),ot(e,t)}finally{Pr=r,Fr.current=n,n===Nr&&ze(t)}}}function _t(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push(`<template id="`),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push(`"></template>`);case 1:n.status=2;var i=!0;r=n.chunks;var a=0;n=n.children;for(var o=0;o<n.length;o++){for(i=n[o];a<i.index;a++)t.push(r[a]);i=vt(e,t,i)}for(;a<r.length-1;a++)t.push(r[a]);return a<r.length&&(i=t.push(r[a])),i;default:throw Error(w(390))}}function vt(e,t,n){var r=n.boundary;if(r===null)return _t(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push(`<!--$!-->`),t.push(`<template`),r&&(t.push(` data-dgst="`),r=E(r),t.push(r),t.push(`"`)),t.push(`></template>`)),_t(e,t,n),e=!!e.responseState.generateStaticMarkup||t.push(`<!--/$-->`),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var i=e.responseState,a=i.nextSuspenseID++;return i=i.boundaryPrefix+a.toString(16),r=r.id=i,Ee(t,e.responseState,r),_t(e,t,n),t.push(`<!--/$-->`)}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Ee(t,e.responseState,r.id),_t(e,t,n),t.push(`<!--/$-->`);if(e.responseState.generateStaticMarkup||t.push(`<!--$-->`),n=r.completedSegments,n.length!==1)throw Error(w(391));return vt(e,t,n[0]),e=!!e.responseState.generateStaticMarkup||t.push(`<!--/$-->`),e}function yt(e,t,n){return De(t,e.responseState,n.formatContext,n.id),vt(e,t,n),Oe(t,n.formatContext)}function bt(e,t,n){for(var r=n.completedSegments,i=0;i<r.length;i++)xt(e,t,n,r[i]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push(`$RC("`):(e.sentCompleteBoundaryFunction=!0,t.push(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`)),r===null)throw Error(w(395));return n=n.toString(16),t.push(r),t.push(`","`),t.push(e.segmentPrefix),t.push(n),t.push(`")<\/script>`)}function xt(e,t,n,r){if(r.status===2)return!0;var i=r.id;if(i===-1){if((r.id=n.rootSegmentID)===-1)throw Error(w(392));return yt(e,t,r)}return yt(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push(`$RS("`):(e.sentCompleteSegmentFunction=!0,t.push(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`)),t.push(e.segmentPrefix),i=i.toString(16),t.push(i),t.push(`","`),t.push(e.placeholderPrefix),t.push(i),t.push(`")<\/script>`)}function St(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){vt(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var i,a=e.clientRenderedBoundaries;for(i=0;i<a.length;i++){var o=a[i];r=t;var s=e.responseState,c=o.id,l=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push(`$RX("`):(s.sentClientRenderFunction=!0,r.push(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`)),c===null)throw Error(w(395));if(r.push(c),r.push(`"`),l||u||d){r.push(`,`);var f=ke(l||``);r.push(f)}if(u||d){r.push(`,`);var p=ke(u||``);r.push(p)}if(d){r.push(`,`);var m=ke(d);r.push(m)}if(!r.push(`)<\/script>`)){e.destination=null,i++,a.splice(0,i);return}}a.splice(0,i);var h=e.completedBoundaries;for(i=0;i<h.length;i++)if(!bt(e,t,h[i])){e.destination=null,i++,h.splice(0,i);return}h.splice(0,i);var g=e.partialBoundaries;for(i=0;i<g.length;i++){var _=g[i];e:{a=e,o=t;var v=_.completedSegments;for(s=0;s<v.length;s++)if(!xt(a,o,_,v[s])){s++,v.splice(0,s);var y=!1;break e}v.splice(0,s),y=!0}if(!y){e.destination=null,i++,g.splice(0,i);return}}g.splice(0,i);var b=e.completedBoundaries;for(i=0;i<b.length;i++)if(!bt(e,t,b[i])){e.destination=null,i++,b.splice(0,i);return}b.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function Ct(e,t){try{var n=e.abortableTasks;n.forEach((function(n){return pt(n,e,t)})),n.clear(),e.destination!==null&&St(e,e.destination)}catch(t){at(e,t),ot(e,t)}}function wt(){}function Tt(e,t,n,r){var i=!1,a=null,o=``,s={push:function(e){return e!==null&&(o+=e),!0},destroy:function(e){i=!0,a=e}},c=!1;if(e=nt(e,Ae(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,wt,void 0,(function(){c=!0}),void 0,void 0),gt(e),Ct(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{St(e,s)}catch(t){at(e,t),ot(e,t)}}if(i)throw a;if(!c)throw Error(w(426));return o}function M(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function N(e,t){if(t.length!==0){if(512<t.length)0<Y&&(e.enqueue(new Uint8Array(J.buffer,0,Y)),J=/* @__PURE__ */ new Uint8Array(512),Y=0),e.enqueue(t);else{var n=J.length-Y;n<t.length&&(n===0?e.enqueue(J):(J.set(t.subarray(0,n),Y),e.enqueue(J),t=t.subarray(n)),J=/* @__PURE__ */ new Uint8Array(512),Y=0),J.set(t,Y),Y+=t.length}}}function P(e,t){return N(e,t),!0}function Et(e){J&&0<Y&&(e.enqueue(new Uint8Array(J.buffer,0,Y)),J=null,Y=0)}function F(e){return zr.encode(e)}function I(e){return zr.encode(e)}function Dt(e,t){typeof e.error==`function`?e.error(t):e.close()}function Ot(e){return X.call(Hr,e)?!0:X.call(Vr,e)?!1:Br.test(e)?Hr[e]=!0:(Vr[e]=!0,!1)}function L(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}function kt(e){return e[1].toUpperCase()}function R(e){if(typeof e==`boolean`||typeof e==`number`)return``+e;e=``+e;var t=Kr.exec(e);if(t){var n,r=``,i=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==n&&(r+=e.substring(i,n)),i=n+1,r+=t}e=i===n?r:r+e.substring(i,n)}return e}function At(e,t,n,r){return t+(n===`s`?`\\u0073`:`\\u0053`)+r}function jt(e,t,n,r,i){e=e===void 0?``:e,t=t===void 0?Xr:I(`<script nonce="`+R(t)+`">`);var a=[];if(n!==void 0&&a.push(t,F((``+n).replace(ti,At)),Zr),r!==void 0)for(n=0;n<r.length;n++)a.push(Qr,F(R(r[n])),ei);if(i!==void 0)for(r=0;r<i.length;r++)a.push($r,F(R(i[r])),ei);return{bootstrapChunks:a,startInlineScript:t,placeholderPrefix:I(e+`P:`),segmentPrefix:I(e+`S:`),boundaryPrefix:e+`B:`,idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function z(e,t){return{insertionMode:e,selectedValue:t}}function Mt(e){return z(e===`http://www.w3.org/2000/svg`?2:e===`http://www.w3.org/1998/Math/MathML`?3:0,null)}function Nt(e,t,n){switch(t){case`select`:return z(1,n.value==null?n.defaultValue:n.value);case`svg`:return z(2,null);case`math`:return z(3,null);case`foreignObject`:return z(1,null);case`table`:return z(4,null);case`thead`:case`tbody`:case`tfoot`:return z(5,null);case`colgroup`:return z(7,null);case`tr`:return z(6,null)}return 4<=e.insertionMode||e.insertionMode===0?z(1,null):e}function B(e,t,n,r){return t===``?r:(r&&e.push(ni),e.push(F(R(t))),!0)}function V(e,t,n){if(typeof n!=`object`)throw Error(M(62));for(var r in t=!0,n)if(X.call(n,r)){var i=n[r];if(i!=null&&typeof i!=`boolean`&&i!==``){if(r.indexOf(`--`)===0){var a=F(R(r));i=F(R((``+i).trim()))}else{a=r;var o=ri.get(a);o!==void 0||(o=I(R(a.replace(qr,`-$1`).toLowerCase().replace(Jr,`-ms-`))),ri.set(a,o)),a=o,i=typeof i==`number`?i===0||X.call(Wr,r)?F(``+i):F(i+`px`):F(R((``+i).trim()))}t?(t=!1,e.push(ii,a,ai,i)):e.push(oi,a,ai,i)}}t||e.push(li)}function H(e,t,n,r){switch(n){case`style`:V(e,t,r);return;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:return}if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`){if(t=Z.hasOwnProperty(n)?Z[n]:null,t!==null){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(!t.acceptsBooleans)return}switch(n=F(t.attributeName),t.type){case 3:r&&e.push(si,n,ui);break;case 4:!0===r?e.push(si,n,ui):!1!==r&&e.push(si,n,ci,F(R(r)),li);break;case 5:isNaN(r)||e.push(si,n,ci,F(R(r)),li);break;case 6:!isNaN(r)&&1<=r&&e.push(si,n,ci,F(R(r)),li);break;default:t.sanitizeURL&&(r=``+r),e.push(si,n,ci,F(R(r)),li)}}else if(Ot(n)){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(t=n.toLowerCase().slice(0,5),t!==`data-`&&t!==`aria-`)return}e.push(si,F(n),ci,F(R(r)),li)}}}function U(e,t,n){if(t!=null){if(n!=null)throw Error(M(60));if(typeof t!=`object`||!(`__html`in t))throw Error(M(61));t=t.__html,t!=null&&e.push(F(``+t))}}function Pt(e){var t=``;return Rr.Children.forEach(e,(function(e){e!=null&&(t+=e)})),t}function Ft(e,t,n,r){e.push(It(n));var i,a=n=null;for(i in t)if(X.call(t,i)){var o=t[i];if(o!=null)switch(i){case`children`:n=o;break;case`dangerouslySetInnerHTML`:a=o;break;default:H(e,r,i,o)}}return e.push(di),U(e,a,n),typeof n==`string`?(e.push(F(R(n))),null):n}function It(e){var t=gi.get(e);if(t===void 0){if(!hi.test(e))throw Error(M(65,e));t=I(`<`+e),gi.set(e,t)}return t}function Lt(e,t,n,r,i){switch(t){case`select`:e.push(It(`select`));var a=null,o=null;for(u in n)if(X.call(n,u)){var s=n[u];if(s!=null)switch(u){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`defaultValue`:case`value`:break;default:H(e,r,u,s)}}return e.push(di),U(e,o,a),a;case`option`:o=i.selectedValue,e.push(It(`option`));var c=s=null,l=null,u=null;for(a in n)if(X.call(n,a)){var d=n[a];if(d!=null)switch(a){case`children`:s=d;break;case`selected`:l=d;break;case`dangerouslySetInnerHTML`:u=d;break;case`value`:c=d;default:H(e,r,a,d)}}if(o!=null){if(n=c===null?Pt(s):``+c,Yr(o)){for(r=0;r<o.length;r++)if(``+o[r]===n){e.push(pi);break}}else``+o===n&&e.push(pi)}else l&&e.push(pi);return e.push(di),U(e,u,s),s;case`textarea`:for(s in e.push(It(`textarea`)),u=o=a=null,n)if(X.call(n,s)&&(c=n[s],c!=null))switch(s){case`children`:u=c;break;case`value`:a=c;break;case`defaultValue`:o=c;break;case`dangerouslySetInnerHTML`:throw Error(M(91));default:H(e,r,s,c)}if(a===null&&o!==null&&(a=o),e.push(di),u!=null){if(a!=null)throw Error(M(92));if(Yr(u)&&1<u.length)throw Error(M(93));a=``+u}return typeof a==`string`&&a[0]===`
`&&e.push(mi),a!==null&&e.push(F(R(``+a))),null;case`input`:for(o in e.push(It(`input`)),c=u=s=a=null,n)if(X.call(n,o)&&(l=n[o],l!=null))switch(o){case`children`:case`dangerouslySetInnerHTML`:throw Error(M(399,`input`));case`defaultChecked`:c=l;break;case`defaultValue`:s=l;break;case`checked`:u=l;break;case`value`:a=l;break;default:H(e,r,o,l)}return u===null?c!==null&&H(e,r,`checked`,c):H(e,r,`checked`,u),a===null?s!==null&&H(e,r,`value`,s):H(e,r,`value`,a),e.push(fi),null;case`menuitem`:for(var f in e.push(It(`menuitem`)),n)if(X.call(n,f)&&(a=n[f],a!=null))switch(f){case`children`:case`dangerouslySetInnerHTML`:throw Error(M(400));default:H(e,r,f,a)}return e.push(di),null;case`title`:for(d in e.push(It(`title`)),a=null,n)if(X.call(n,d)&&(o=n[d],o!=null))switch(d){case`children`:a=o;break;case`dangerouslySetInnerHTML`:throw Error(M(434));default:H(e,r,d,o)}return e.push(di),a;case`listing`:case`pre`:for(c in e.push(It(t)),o=a=null,n)if(X.call(n,c)&&(s=n[c],s!=null))switch(c){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;default:H(e,r,c,s)}if(e.push(di),o!=null){if(a!=null)throw Error(M(60));if(typeof o!=`object`||!(`__html`in o))throw Error(M(61));n=o.__html,n!=null&&(typeof n==`string`&&0<n.length&&n[0]===`
`?e.push(mi,F(n)):e.push(F(``+n)))}return typeof a==`string`&&a[0]===`
`&&e.push(mi),a;case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:for(var p in e.push(It(t)),n)if(X.call(n,p)&&(a=n[p],a!=null))switch(p){case`children`:case`dangerouslySetInnerHTML`:throw Error(M(399,t));default:H(e,r,p,a)}return e.push(fi),null;case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return Ft(e,n,t,r);case`html`:return i.insertionMode===0&&e.push(_i),Ft(e,n,t,r);default:if(t.indexOf(`-`)===-1&&typeof n.is!=`string`)return Ft(e,n,t,r);for(l in e.push(It(t)),o=a=null,n)if(X.call(n,l)&&(s=n[l],s!=null))switch(l){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`style`:V(e,r,s);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:break;default:Ot(l)&&typeof s!=`function`&&typeof s!=`symbol`&&e.push(si,F(l),ci,F(R(s)),li)}return e.push(di),U(e,o,a),a}}function Rt(e,t,n){if(N(e,Ci),n===null)throw Error(M(395));return N(e,n),P(e,wi)}function zt(e,t,n,r){switch(n.insertionMode){case 0:case 1:return N(e,ji),N(e,t.segmentPrefix),N(e,F(r.toString(16))),P(e,Mi);case 2:return N(e,Pi),N(e,t.segmentPrefix),N(e,F(r.toString(16))),P(e,Fi);case 3:return N(e,Li),N(e,t.segmentPrefix),N(e,F(r.toString(16))),P(e,Ri);case 4:return N(e,Bi),N(e,t.segmentPrefix),N(e,F(r.toString(16))),P(e,Vi);case 5:return N(e,Ui),N(e,t.segmentPrefix),N(e,F(r.toString(16))),P(e,Wi);case 6:return N(e,Ki),N(e,t.segmentPrefix),N(e,F(r.toString(16))),P(e,qi);case 7:return N(e,Yi),N(e,t.segmentPrefix),N(e,F(r.toString(16))),P(e,Xi);default:throw Error(M(397))}}function Bt(e,t){switch(t.insertionMode){case 0:case 1:return P(e,Ni);case 2:return P(e,Ii);case 3:return P(e,zi);case 4:return P(e,Hi);case 5:return P(e,Gi);case 6:return P(e,Ji);case 7:return P(e,Zi);default:throw Error(M(397))}}function Vt(e){return JSON.stringify(e).replace(da,(function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}))}function Ht(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ha:return`Fragment`;case ma:return`Portal`;case _a:return`Profiler`;case ga:return`StrictMode`;case xa:return`Suspense`;case Sa:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ya:return(e.displayName||`Context`)+`.Consumer`;case va:return(e._context.displayName||`Context`)+`.Provider`;case ba:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Ca:return t=e.displayName||null,t===null?Ht(e.type)||`Memo`:t;case wa:t=e._payload,e=e._init;try{return Ht(e(t))}catch{}}return null}function Ut(e,t){if(e=e.contextTypes,!e)return Aa;var n,r={};for(n in e)r[n]=t[n];return r}function Wt(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(M(401))}else{if(n===null)throw Error(M(401));Wt(e,n)}t.context._currentValue=t.value}}function Gt(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&Gt(e)}function Kt(e){var t=e.parent;t!==null&&Kt(t),e.context._currentValue=e.value}function qt(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(M(402));e.depth===t.depth?Wt(e,t):qt(e,t)}function Jt(e,t){var n=t.parent;if(n===null)throw Error(M(402));e.depth===n.depth?Wt(e,n):Jt(e,n),t.context._currentValue=t.value}function Yt(e){var t=ja;t!==e&&(t===null?Kt(e):e===null?Gt(t):t.depth===e.depth?Wt(t,e):t.depth>e.depth?qt(t,e):Jt(t,e),ja=e)}function Xt(e,t,n,r){var i=e.state===void 0?null:e.state;e.updater=Ma,e.props=n,e.state=i;var a={queue:[],replace:!1};e._reactInternals=a;var o=t.contextType;if(e.context=typeof o==`object`&&o?o._currentValue:r,o=t.getDerivedStateFromProps,typeof o==`function`&&(o=o(n,i),i=o==null?i:fa({},i,o),e.state=i),typeof t.getDerivedStateFromProps!=`function`&&typeof e.getSnapshotBeforeUpdate!=`function`&&(typeof e.UNSAFE_componentWillMount==`function`||typeof e.componentWillMount==`function`)){if(t=e.state,typeof e.componentWillMount==`function`&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount==`function`&&e.UNSAFE_componentWillMount(),t!==e.state&&Ma.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length){if(t=a.queue,o=a.replace,a.queue=null,a.replace=!1,o&&t.length===1)e.state=t[0];else{for(a=o?t[0]:e.state,i=!0,o=+!!o;o<t.length;o++){var s=t[o];s=typeof s==`function`?s.call(e,a,n,r):s,s!=null&&(i?(i=!1,a=fa({},a,s)):fa(a,s))}e.state=a}}else a.queue=null}}function Zt(e,t,n){var r=e.id;e=e.overflow;var i=32-Pa(r)-1;r&=~(1<<i),n+=1;var a=32-Pa(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-Pa(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}function Qt(e){return e>>>=0,e===0?32:31-(Fa(e)/Ia|0)|0}function $t(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function en(){if(Ra===null)throw Error(M(321));return Ra}function tn(){if(0<Ga)throw Error(M(312));return{memoizedState:null,queue:null,next:null}}function nn(){return Q===null?Ba===null?(Va=!1,Ba=Q=tn()):(Va=!0,Q=Ba):Q.next===null?(Va=!1,Q=Q.next=tn()):(Va=!0,Q=Q.next),Q}function rn(){za=Ra=null,Ha=!1,Ba=null,Ga=0,Q=Wa=null}function an(e,t){return typeof t==`function`?t(e):t}function on(e,t,n){if(Ra=en(),Q=nn(),Va){var r=Q.queue;if(t=r.dispatch,Wa!==null&&(n=Wa.get(r),n!==void 0)){Wa.delete(r),r=Q.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return Q.memoizedState=r,[r,t]}return[Q.memoizedState,t]}return e=e===an?typeof t==`function`?t():t:n===void 0?t:n(t),Q.memoizedState=e,e=Q.queue={last:null,dispatch:null},e=e.dispatch=cn.bind(null,Ra,e),[Q.memoizedState,e]}function sn(e,t){if(Ra=en(),Q=nn(),t=t===void 0?null:t,Q!==null){var n=Q.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!La(t[i],r[i])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),Q.memoizedState=[e,t],e}function cn(e,t,n){if(25<=Ga)throw Error(M(301));if(e===Ra){if(Ha=!0,e={action:n,next:null},Wa===null&&(Wa=/* @__PURE__ */ new Map),n=Wa.get(t),n===void 0)Wa.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}}function ln(){throw Error(M(394))}function un(){}function dn(e){return console.error(e),null}function fn(){}function pn(e,t,n,r,i,a,o,s,c){var l=[],u=/* @__PURE__ */ new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:l,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:i===void 0?dn:i,onAllReady:a===void 0?fn:a,onShellReady:o===void 0?fn:o,onShellError:s===void 0?fn:s,onFatalError:c===void 0?fn:c},n=hn(t,0,null,n,!1,!1),n.parentFlushed=!0,e=mn(t,e,null,n,u,Aa,null,Na),l.push(e),t}function mn(e,t,n,r,i,a,o,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var c={node:t,ping:function(){var t=e.pingedTasks;t.push(c),t.length===1&&On(e)},blockedBoundary:n,blockedSegment:r,abortSet:i,legacyContext:a,context:o,treeContext:s};return i.add(c),c}function hn(e,t,n,r,i,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function gn(e,t){if(e=e.onError(t),e!=null&&typeof e!=`string`)throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "`+typeof e+`" instead`);return e}function _n(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination===null?(e.status=1,e.fatalError=t):(e.status=2,Dt(e.destination,t))}function vn(e,t,n,r,i){for(Ra={},za=t,Ua=0,e=n(r,i);Ha;)Ha=!1,Ua=0,Ga+=1,Q=null,e=n(r,i);return rn(),e}function yn(e,t,n,r){var i=n.render(),a=r.childContextTypes;if(a!=null){var o=t.legacyContext;if(typeof n.getChildContext!=`function`)r=o;else{for(var s in n=n.getChildContext(),n)if(!(s in a))throw Error(M(108,Ht(r)||`Unknown`,s));r=fa({},o,n)}t.legacyContext=r,W(e,t,i),t.legacyContext=o}else W(e,t,i)}function bn(e,t){if(e&&e.defaultProps){for(var n in t=fa({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xn(e,t,n,r,i){if(typeof n==`function`){if(n.prototype&&n.prototype.isReactComponent){i=Ut(n,t.legacyContext);var a=n.contextType;a=new n(r,typeof a==`object`&&a?a._currentValue:i),Xt(a,n,r,i),yn(e,t,a,n)}else{a=Ut(n,t.legacyContext),i=vn(e,t,n,r,a);var o=Ua!==0;if(typeof i==`object`&&i&&typeof i.render==`function`&&i.$$typeof===void 0)Xt(i,n,r,a),yn(e,t,i,n);else if(o){r=t.treeContext,t.treeContext=Zt(r,1,0);try{W(e,t,i)}finally{t.treeContext=r}}else W(e,t,i)}}else{if(typeof n!=`string`){switch(n){case Da:case Ea:case ga:case _a:case ha:W(e,t,r.children);return;case Sa:W(e,t,r.children);return;case Ta:throw Error(M(343));case xa:e:{n=t.blockedBoundary,i=t.blockedSegment,a=r.fallback,r=r.children,o=/* @__PURE__ */ new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=hn(e,i.chunks.length,s,i.formatContext,!1,!1);i.children.push(c),i.lastPushedText=!1;var l=hn(e,0,null,i.formatContext,!1,!1);l.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=l;try{if(Cn(e,t,r),l.lastPushedText&&l.textEmbedded&&l.chunks.push(ni),l.status=1,En(s,l),s.pendingTasks===0)break e}catch(t){l.status=4,s.forceClientRender=!0,s.errorDigest=gn(e,t)}finally{t.blockedBoundary=n,t.blockedSegment=i}t=mn(e,a,n,c,o,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n==`object`&&n)switch(n.$$typeof){case ba:if(r=vn(e,t,n.render,r,i),Ua!==0){n=t.treeContext,t.treeContext=Zt(n,1,0);try{W(e,t,r)}finally{t.treeContext=n}}else W(e,t,r);return;case Ca:n=n.type,r=bn(n,r),xn(e,t,n,r,i);return;case va:if(i=r.children,n=n._context,r=r.value,a=n._currentValue,n._currentValue=r,o=ja,ja=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:a,value:r},t.context=r,W(e,t,i),e=ja,e===null)throw Error(M(403));r=e.parentValue,e.context._currentValue=r===Oa?e.context._defaultValue:r,e=ja=e.parent,t.context=e;return;case ya:r=r.children,r=r(n._currentValue),W(e,t,r);return;case wa:i=n._init,n=i(n._payload),r=bn(n,r),xn(e,t,n,r,void 0);return}throw Error(M(130,n==null?n:typeof n,``))}switch(i=t.blockedSegment,a=Lt(i.chunks,n,r,e.responseState,i.formatContext),i.lastPushedText=!1,o=i.formatContext,i.formatContext=Nt(o,n,r),Cn(e,t,a),i.formatContext=o,n){case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break;default:i.chunks.push(vi,F(n),yi)}i.lastPushedText=!1}}function W(e,t,n){if(t.node=n,typeof n==`object`&&n){switch(n.$$typeof){case pa:xn(e,t,n.type,n.props,n.ref);return;case ma:throw Error(M(257));case wa:var r=n._init;n=r(n._payload),W(e,t,n);return}if(Yr(n)){Sn(e,t,n);return}if(typeof n!=`object`||!n?r=null:(r=ka&&n[ka]||n[`@@iterator`],r=typeof r==`function`?r:null),r&&=r.call(n)){if(n=r.next(),!n.done){var i=[];do i.push(n.value),n=r.next();while(!n.done);Sn(e,t,i)}return}throw e=Object.prototype.toString.call(n),Error(M(31,e===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:e))}typeof n==`string`?(r=t.blockedSegment,r.lastPushedText=B(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n==`number`&&(r=t.blockedSegment,r.lastPushedText=B(t.blockedSegment.chunks,``+n,e.responseState,r.lastPushedText))}function Sn(e,t,n){for(var r=n.length,i=0;i<r;i++){var a=t.treeContext;t.treeContext=Zt(a,r,i);try{Cn(e,t,n[i])}finally{t.treeContext=a}}}function Cn(e,t,n){var r=t.blockedSegment.formatContext,i=t.legacyContext,a=t.context;try{return W(e,t,n)}catch(c){if(rn(),typeof c!=`object`||!c||typeof c.then!=`function`)throw t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,Yt(a),c;n=c;var o=t.blockedSegment,s=hn(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(s),o.lastPushedText=!1,e=mn(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,Yt(a)}}function wn(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Dn(this,t,e)}function Tn(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(M(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach((function(e){return Tn(e,t,n)})),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function En(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&En(e,n)}else e.completedSegments.push(t)}function Dn(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(M(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=fn,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&En(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(wn,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(En(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function On(e){if(e.status!==2){var t=ja,n=Ja.current;Ja.current=Ka;var r=qa;qa=e.responseState;try{var i,a=e.pingedTasks;for(i=0;i<a.length;i++){var o=a[i],s=e,c=o.blockedSegment;if(c.status===0){Yt(o.context);try{W(s,o,o.node),c.lastPushedText&&c.textEmbedded&&c.chunks.push(ni),o.abortSet.delete(o),c.status=1,Dn(s,o.blockedBoundary,c)}catch(e){if(rn(),typeof e==`object`&&e&&typeof e.then==`function`){var l=o.ping;e.then(l,l)}else{o.abortSet.delete(o),c.status=4;var u=o.blockedBoundary,d=e,f=gn(s,d);if(u===null?_n(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}}}a.splice(0,i),e.destination!==null&&Pn(e,e.destination)}catch(t){gn(e,t),_n(e,t)}finally{qa=r,Ja.current=n,n===Ka&&Yt(t)}}}function kn(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,N(t,bi),N(t,e.placeholderPrefix),e=F(r.toString(16)),N(t,e),P(t,xi);case 1:n.status=2;var i=!0;r=n.chunks;var a=0;n=n.children;for(var o=0;o<n.length;o++){for(i=n[o];a<i.index;a++)N(t,r[a]);i=An(e,t,i)}for(;a<r.length-1;a++)N(t,r[a]);return a<r.length&&(i=P(t,r[a])),i;default:throw Error(M(390))}}function An(e,t,n){var r=n.boundary;if(r===null)return kn(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,P(t,Ti),N(t,Di),r&&(N(t,ki),N(t,F(R(r))),N(t,Oi)),P(t,Ai),kn(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var i=e.responseState,a=i.nextSuspenseID++;i=I(i.boundaryPrefix+a.toString(16)),r=r.id=i,Rt(t,e.responseState,r),kn(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Rt(t,e.responseState,r.id),kn(e,t,n);else{if(P(t,Si),n=r.completedSegments,n.length!==1)throw Error(M(391));An(e,t,n[0])}return P(t,Ei)}function jn(e,t,n){return zt(t,e.responseState,n.formatContext,n.id),An(e,t,n),Bt(t,n.formatContext)}function Mn(e,t,n){for(var r=n.completedSegments,i=0;i<r.length;i++)Nn(e,t,n,r[i]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,N(t,e.startInlineScript),e.sentCompleteBoundaryFunction?N(t,ra):(e.sentCompleteBoundaryFunction=!0,N(t,na)),r===null)throw Error(M(395));return n=F(n.toString(16)),N(t,r),N(t,ia),N(t,e.segmentPrefix),N(t,n),P(t,aa)}function Nn(e,t,n,r){if(r.status===2)return!0;var i=r.id;if(i===-1){if((r.id=n.rootSegmentID)===-1)throw Error(M(392));return jn(e,t,r)}return jn(e,t,r),e=e.responseState,N(t,e.startInlineScript),e.sentCompleteSegmentFunction?N(t,$i):(e.sentCompleteSegmentFunction=!0,N(t,Qi)),N(t,e.segmentPrefix),i=F(i.toString(16)),N(t,i),N(t,ea),N(t,e.placeholderPrefix),N(t,i),P(t,ta)}function Pn(e,t){J=/* @__PURE__ */ new Uint8Array(512),Y=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){An(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)N(t,r[n]);n<r.length&&P(t,r[n])}var i,a=e.clientRenderedBoundaries;for(i=0;i<a.length;i++){var o=a[i];r=t;var s=e.responseState,c=o.id,l=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(N(r,s.startInlineScript),s.sentClientRenderFunction?N(r,sa):(s.sentClientRenderFunction=!0,N(r,oa)),c===null)throw Error(M(395));if(N(r,c),N(r,ca),(l||u||d)&&(N(r,ua),N(r,F(Vt(l||``)))),(u||d)&&(N(r,ua),N(r,F(Vt(u||``)))),d&&(N(r,ua),N(r,F(Vt(d)))),!P(r,la)){e.destination=null,i++,a.splice(0,i);return}}a.splice(0,i);var f=e.completedBoundaries;for(i=0;i<f.length;i++)if(!Mn(e,t,f[i])){e.destination=null,i++,f.splice(0,i);return}f.splice(0,i),Et(t),J=/* @__PURE__ */ new Uint8Array(512),Y=0;var p=e.partialBoundaries;for(i=0;i<p.length;i++){var m=p[i];e:{a=e,o=t;var h=m.completedSegments;for(s=0;s<h.length;s++)if(!Nn(a,o,m,h[s])){s++,h.splice(0,s);var g=!1;break e}h.splice(0,s),g=!0}if(!g){e.destination=null,i++,p.splice(0,i);return}}p.splice(0,i);var _=e.completedBoundaries;for(i=0;i<_.length;i++)if(!Mn(e,t,_[i])){e.destination=null,i++,_.splice(0,i);return}_.splice(0,i)}finally{Et(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Fn(e,t){try{var n=e.abortableTasks;n.forEach((function(n){return Tn(n,e,t)})),n.clear(),e.destination!==null&&Pn(e,e.destination)}catch(t){gn(e,t),_n(e,t)}}var In,Ln,Rn,G,zn,Bn,Vn,K,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,q,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,J,Y,zr,X,Br,Vr,Hr,Z,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Q,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,$,Ya,Xa,Za;function Qa(){return(Qa=e((()=>{g(),In=d;try{`default`in d&&(In=_)}catch{}Ln={},Rn=In,G=Object.prototype.hasOwnProperty,zn=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bn={},Vn={},K={},`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function(e){K[e]=new T(e,0,!1,e,null,!1,!1)})),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach((function(e){var t=e[0];K[t]=new T(t,1,!1,e[1],null,!1,!1)})),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach((function(e){K[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)})),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach((function(e){K[e]=new T(e,2,!1,e,null,!1,!1)})),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function(e){K[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)})),[`checked`,`multiple`,`muted`,`selected`].forEach((function(e){K[e]=new T(e,3,!0,e,null,!1,!1)})),[`capture`,`download`].forEach((function(e){K[e]=new T(e,4,!1,e,null,!1,!1)})),[`cols`,`rows`,`size`,`span`].forEach((function(e){K[e]=new T(e,6,!1,e,null,!1,!1)})),[`rowSpan`,`start`].forEach((function(e){K[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)})),Hn=/[\-:]([a-z])/g,`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function(e){var t=e.replace(Hn,ye);K[t]=new T(t,1,!1,e,null,!1,!1)})),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function(e){var t=e.replace(Hn,ye);K[t]=new T(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)})),[`xml:base`,`xml:lang`,`xml:space`].forEach((function(e){var t=e.replace(Hn,ye);K[t]=new T(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)})),[`tabIndex`,`crossOrigin`].forEach((function(e){K[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)})),K.xlinkHref=new T(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach((function(e){K[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)})),Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wn=[`Webkit`,`ms`,`Moz`,`O`],Object.keys(Un).forEach((function(e){Wn.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]}))})),Gn=/["'&<>]/,Kn=/([A-Z])/g,qn=/^ms-/,Jn=Array.isArray,Yn=/* @__PURE__ */ new Map,Xn=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Zn=/* @__PURE__ */ new Map,Qn=/[<\u2028\u2029]/g,$n=Object.assign,er=Symbol.for(`react.element`),tr=Symbol.for(`react.portal`),nr=Symbol.for(`react.fragment`),rr=Symbol.for(`react.strict_mode`),ir=Symbol.for(`react.profiler`),ar=Symbol.for(`react.provider`),or=Symbol.for(`react.context`),sr=Symbol.for(`react.forward_ref`),cr=Symbol.for(`react.suspense`),lr=Symbol.for(`react.suspense_list`),ur=Symbol.for(`react.memo`),dr=Symbol.for(`react.lazy`),fr=Symbol.for(`react.scope`),pr=Symbol.for(`react.debug_trace_mode`),mr=Symbol.for(`react.legacy_hidden`),hr=Symbol.for(`react.default_value`),gr=Symbol.iterator,_r={},vr=null,yr={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},br={id:1,overflow:``},xr=Math.clz32?Math.clz32:He,Sr=Math.log,Cr=Math.LN2,wr=typeof Object.is==`function`?Object.is:Ue,Tr=null,Er=null,Dr=null,q=null,Or=!1,kr=!1,Ar=0,jr=null,Mr=0,Nr={readContext:function(e){return e._currentValue2},useContext:function(e){return We(),e._currentValue2},useMemo:Xe,useReducer:Ye,useRef:function(e){Tr=We(),q=Ke();var t=q.memoizedState;return t===null?(e={current:e},q.memoizedState=e):t},useState:function(e){return Ye(Je,e)},useInsertionEffect:$e,useLayoutEffect:function(){},useCallback:function(e,t){return Xe((function(){return e}),t)},useImperativeHandle:$e,useEffect:$e,useDebugValue:$e,useDeferredValue:function(e){return We(),e},useTransition:function(){return We(),[!1,Qe]},useId:function(){var e=Er.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-xr(e)-1)).toString(32)+t;var n=Pr;if(n===null)throw Error(w(404));return t=Ar++,e=`:`+n.idPrefix+`R`+e,0<t&&(e+=`H`+t.toString(32)),e+`:`},useMutableSource:function(e,t){return We(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(w(407));return n()}},Pr=null,Fr=Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,Ln.renderToNodeStream=function(){throw Error(w(207))},Ln.renderToStaticMarkup=function(e,t){return Tt(e,t,!0,`The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},Ln.renderToStaticNodeStream=function(){throw Error(w(208))},Ln.renderToString=function(e,t){return Tt(e,t,!1,`The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},Ln.version=`18.3.1`,Ir=d;try{`default`in d&&(Ir=_)}catch{}Lr={},Rr=Ir,J=null,Y=0,zr=new TextEncoder,X=Object.prototype.hasOwnProperty,Br=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vr={},Hr={},Z={},`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function(e){Z[e]=new L(e,0,!1,e,null,!1,!1)})),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach((function(e){var t=e[0];Z[t]=new L(t,1,!1,e[1],null,!1,!1)})),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach((function(e){Z[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)})),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach((function(e){Z[e]=new L(e,2,!1,e,null,!1,!1)})),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function(e){Z[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)})),[`checked`,`multiple`,`muted`,`selected`].forEach((function(e){Z[e]=new L(e,3,!0,e,null,!1,!1)})),[`capture`,`download`].forEach((function(e){Z[e]=new L(e,4,!1,e,null,!1,!1)})),[`cols`,`rows`,`size`,`span`].forEach((function(e){Z[e]=new L(e,6,!1,e,null,!1,!1)})),[`rowSpan`,`start`].forEach((function(e){Z[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)})),Ur=/[\-:]([a-z])/g,`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function(e){var t=e.replace(Ur,kt);Z[t]=new L(t,1,!1,e,null,!1,!1)})),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function(e){var t=e.replace(Ur,kt);Z[t]=new L(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)})),[`xml:base`,`xml:lang`,`xml:space`].forEach((function(e){var t=e.replace(Ur,kt);Z[t]=new L(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)})),[`tabIndex`,`crossOrigin`].forEach((function(e){Z[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)})),Z.xlinkHref=new L(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach((function(e){Z[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)})),Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gr=[`Webkit`,`ms`,`Moz`,`O`],Object.keys(Wr).forEach((function(e){Gr.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]}))})),Kr=/["'&<>]/,qr=/([A-Z])/g,Jr=/^ms-/,Yr=Array.isArray,Xr=I(`<script>`),Zr=I(`<\/script>`),Qr=I(`<script src="`),$r=I(`<script type="module" src="`),ei=I(`" async=""><\/script>`),ti=/(<\/|<)(s)(cript)/gi,ni=I(`<!-- -->`),ri=/* @__PURE__ */ new Map,ii=I(` style="`),ai=I(`:`),oi=I(`;`),si=I(` `),ci=I(`="`),li=I(`"`),ui=I(`=""`),di=I(`>`),fi=I(`/>`),pi=I(` selected=""`),mi=I(`
`),hi=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,gi=/* @__PURE__ */ new Map,_i=I(`<!DOCTYPE html>`),vi=I(`</`),yi=I(`>`),bi=I(`<template id="`),xi=I(`"></template>`),Si=I(`<!--$-->`),Ci=I(`<!--$?--><template id="`),wi=I(`"></template>`),Ti=I(`<!--$!-->`),Ei=I(`<!--/$-->`),Di=I(`<template`),Oi=I(`"`),ki=I(` data-dgst="`),I(` data-msg="`),I(` data-stck="`),Ai=I(`></template>`),ji=I(`<div hidden id="`),Mi=I(`">`),Ni=I(`</div>`),Pi=I(`<svg aria-hidden="true" style="display:none" id="`),Fi=I(`">`),Ii=I(`</svg>`),Li=I(`<math aria-hidden="true" style="display:none" id="`),Ri=I(`">`),zi=I(`</math>`),Bi=I(`<table hidden id="`),Vi=I(`">`),Hi=I(`</table>`),Ui=I(`<table hidden><tbody id="`),Wi=I(`">`),Gi=I(`</tbody></table>`),Ki=I(`<table hidden><tr id="`),qi=I(`">`),Ji=I(`</tr></table>`),Yi=I(`<table hidden><colgroup id="`),Xi=I(`">`),Zi=I(`</colgroup></table>`),Qi=I(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`),$i=I(`$RS("`),ea=I(`","`),ta=I(`")<\/script>`),na=I(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`),ra=I(`$RC("`),ia=I(`","`),aa=I(`")<\/script>`),oa=I(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`),sa=I(`$RX("`),ca=I(`"`),la=I(`)<\/script>`),ua=I(`,`),da=/[<\u2028\u2029]/g,fa=Object.assign,pa=Symbol.for(`react.element`),ma=Symbol.for(`react.portal`),ha=Symbol.for(`react.fragment`),ga=Symbol.for(`react.strict_mode`),_a=Symbol.for(`react.profiler`),va=Symbol.for(`react.provider`),ya=Symbol.for(`react.context`),ba=Symbol.for(`react.forward_ref`),xa=Symbol.for(`react.suspense`),Sa=Symbol.for(`react.suspense_list`),Ca=Symbol.for(`react.memo`),wa=Symbol.for(`react.lazy`),Ta=Symbol.for(`react.scope`),Ea=Symbol.for(`react.debug_trace_mode`),Da=Symbol.for(`react.legacy_hidden`),Oa=Symbol.for(`react.default_value`),ka=Symbol.iterator,Aa={},ja=null,Ma={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},Na={id:1,overflow:``},Pa=Math.clz32?Math.clz32:Qt,Fa=Math.log,Ia=Math.LN2,La=typeof Object.is==`function`?Object.is:$t,Ra=null,za=null,Ba=null,Q=null,Va=!1,Ha=!1,Ua=0,Wa=null,Ga=0,Ka={readContext:function(e){return e._currentValue},useContext:function(e){return en(),e._currentValue},useMemo:sn,useReducer:on,useRef:function(e){Ra=en(),Q=nn();var t=Q.memoizedState;return t===null?(e={current:e},Q.memoizedState=e):t},useState:function(e){return on(an,e)},useInsertionEffect:un,useLayoutEffect:function(){},useCallback:function(e,t){return sn((function(){return e}),t)},useImperativeHandle:un,useEffect:un,useDebugValue:un,useDeferredValue:function(e){return en(),e},useTransition:function(){return en(),[!1,ln]},useId:function(){var e=za.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Pa(e)-1)).toString(32)+t;var n=qa;if(n===null)throw Error(M(404));return t=Ua++,e=`:`+n.idPrefix+`R`+e,0<t&&(e+=`H`+t.toString(32)),e+`:`},useMutableSource:function(e,t){return en(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(M(407));return n()}},qa=null,Ja=Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,Lr.renderToReadableStream=function(e,t){return new Promise((function(n,r){var i,a,o=new Promise((function(e,t){a=e,i=t})),s=pn(e,jt(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),Mt(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,a,(function(){var e=new ReadableStream({type:`bytes`,pull:function(e){if(s.status===1)s.status=2,Dt(e,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=e;try{Pn(s,e)}catch(e){gn(s,e),_n(s,e)}}},cancel:function(){Fn(s)}},{highWaterMark:0});e.allReady=o,n(e)}),(function(e){o.catch((function(){})),r(e)}),i);if(t&&t.signal){var c=t.signal,l=function(){Fn(s,c.reason),c.removeEventListener(`abort`,l)};c.addEventListener(`abort`,l)}On(s)}))},Lr.version=`18.3.1`,$={},Ya=Ln,Xa=Lr,$.version=Ya.version,$.renderToString=Ya.renderToString,$.renderToStaticMarkup=Ya.renderToStaticMarkup,$.renderToNodeStream=Ya.renderToNodeStream,$.renderToStaticNodeStream=Ya.renderToStaticNodeStream,$.renderToReadableStream=Xa.renderToReadableStream,$.version,$.renderToString,$.renderToStaticMarkup,$.renderToNodeStream,$.renderToStaticNodeStream,Za=$.renderToReadableStream})))()}function $a(e){let{kicker:t=`CVPR 2027 · Face Relight`,title:n=`LightPlug: Bringing out Facial Structure in Avatar Relighting via a Lightweight Plug-and-Play Prior`,lede:r=`LightPlug is a lightweight plug-and-play module, which enables cast-shadow-aware face relighting and adjust for every codec avatars.`,panelBlur:i=20,panelOpacity:a=.2,cardOpacity:s=.55,figureUrl:l=``,abstractText:u=``,demoVideoUrl:d=``,explanationVideoUrl:m=``,demoNote:h=`The interactive demo can be found and tried on the Hugging Face project page.`,style:g}=e,_=c(null),y=c(()=>{});v(()=>{let e=_.current;if(!e||me.current()===me.canvas||o.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let t=0,n=!1,r=0,i=0,a=o.scrollY,s=!0,c=1,l=0,u=0,d=0,f=0,p=()=>{t=Math.max(1,e.getBoundingClientRect().top+o.scrollY)},m=(t,i,s)=>{let u=o.scrollY;if(Math.abs(t-u)<1)return;n=!0,c=t>=u?1:-1,l=performance.now(),e.classList.add(`isFlying`);let d=u,f=0,p=performance.now(),m=c=>{let l=Math.min(.05,Math.max(.001,(c-p)/1e3));p=c,f+=((t-d)*i-f*s)*l,d+=f*l;let u=t<=0?Math.max(0,d):d;o.scrollTo({top:u,behavior:`instant`}),Math.abs(t-d)<.6&&Math.abs(f)<3?(o.scrollTo({top:t,behavior:`instant`}),e.classList.remove(`isFlying`),n=!1,r=0,a=o.scrollY,t<=0&&h()):r=o.requestAnimationFrame(m)};r=o.requestAnimationFrame(m)},h=()=>{let t=Math.max(14,(o.innerHeight||800)*.024);i&&o.cancelAnimationFrame(i);let n=-t,r=0,a=performance.now(),s=t=>{let c=Math.min(.05,Math.max(.001,(t-a)/1e3));a=t,r+=((0-n)*170-r*9)*c,n+=r*c,e.style.setProperty(`--paper-lift`,`${n.toFixed(2)}px`),Math.abs(n)<.12&&Math.abs(r)<1.5?(e.style.setProperty(`--paper-lift`,`0px`),i=0):i=o.requestAnimationFrame(s)};i=o.requestAnimationFrame(s)},g=()=>{r&&o.cancelAnimationFrame(r),r=0,n=!1,e.classList.remove(`isFlying`),a=o.scrollY};y.current=()=>{let t=o.scrollY;if(t<2)return;r&&o.cancelAnimationFrame(r),r=0,n=!0,c=-1,l=performance.now(),e.classList.add(`isFlying`);let i=Math.min(900,340+t*.22),s=performance.now(),u=c=>{let l=Math.min(1,(c-s)/i),d=l<.5?2*l*l:1-(-2*l+2)**2/2;o.scrollTo({top:t*(1-d),behavior:`instant`}),l<1?r=o.requestAnimationFrame(u):(o.scrollTo({top:0,behavior:`instant`}),n=!1,r=0,e.classList.remove(`isFlying`),a=o.scrollY,h())};r=o.requestAnimationFrame(u)};let v=e=>{if(n){Math.sign(e.deltaY)===-c&&performance.now()-l>90&&g();return}if(performance.now()<f)return;let r=o.scrollY;if(r>=t*1.6||(e.deltaY>0?r>=t*.98:r>=t*.72))return;e.preventDefault();let i=performance.now();if(i-d>200&&(u=0),d=i,u+=e.deltaY,Math.abs(u)<18)return;let a=u>0;u=0,a?m(t,130,15):m(0,110,20)},b=()=>{let e=o.scrollY;n||(s=e>=a),a=e,!(n||e>=t*1.6)&&(performance.now()<f||(s&&e>16&&e<t*.98?m(t,130,15):!s&&e>0&&e<t*.72&&m(0,110,20)))},x=()=>p(),ee=e=>{let t=e.target;t&&t.closest&&t.closest(`a[href^="#"]`)&&(f=performance.now()+700)},te=()=>{f=performance.now()+700},ne=()=>{n&&g()},re=e=>{n&&/^(Arrow|Page|Home|End| |Spacebar)/.test(e.key)&&g()};return p(),o.addEventListener(`scroll`,b,{passive:!0}),o.addEventListener(`resize`,x,{passive:!0}),o.addEventListener(`wheel`,v,{passive:!1}),o.addEventListener(`pointerdown`,ne,{passive:!0}),o.addEventListener(`keydown`,re,{passive:!0}),document.addEventListener(`click`,ee,!0),o.addEventListener(`hashchange`,te),()=>{o.removeEventListener(`scroll`,b),o.removeEventListener(`resize`,x),o.removeEventListener(`wheel`,v),o.removeEventListener(`pointerdown`,ne),o.removeEventListener(`keydown`,re),document.removeEventListener(`click`,ee,!0),o.removeEventListener(`hashchange`,te),r&&o.cancelAnimationFrame(r),i&&o.cancelAnimationFrame(i)}},[]);let b=(u||``).trim()||eo,x={...g,"--paper-panel-blur":`${i}px`,"--paper-panel-alpha":a,"--paper-card-alpha":s};return/*#__PURE__*/ f(`section`,{className:`paperSection`,ref:_,style:x,children:[/*#__PURE__*/ p(`style`,{children:no}),/*#__PURE__*/ p(`div`,{className:`paperAurora`,"aria-hidden":`true`}),/*#__PURE__*/ f(`div`,{className:`paperInner`,children:[/*#__PURE__*/ f(`header`,{className:`paperMasthead`,children:[/*#__PURE__*/ f(`button`,{className:`backToCover`,type:`button`,onClick:()=>y.current(),children:[/*#__PURE__*/ p(`svg`,{className:`backArrow`,viewBox:`0 0 12 12`,"aria-hidden":`true`,children:/*#__PURE__*/ p(`path`,{d:`M6 10.6V1.7M6 1.7 1.9 5.8M6 1.7 10.1 5.8`})}),/*#__PURE__*/ p(`span`,{children:`Back`})]}),/*#__PURE__*/ p(`p`,{className:`paperKicker`,children:t}),/*#__PURE__*/ p(`h2`,{className:`paperTitle`,children:n}),/*#__PURE__*/ p(`p`,{className:`paperLede`,children:r})]}),/*#__PURE__*/ f(`div`,{className:`paperCards glassColumn`,children:[/*#__PURE__*/ f(`section`,{className:`glassCard paperBlockCard`,id:`abstract`,children:[/*#__PURE__*/ f(`div`,{className:`cardTop`,children:[/*#__PURE__*/ p(`span`,{className:`cardIndex`,children:`[ 01 ]`}),/*#__PURE__*/ p(`h3`,{className:`cardTitle`,children:`Abstract`})]}),/*#__PURE__*/ p(`p`,{className:`abstractBody`,children:to(b)})]}),/*#__PURE__*/ f(`figure`,{className:`glassCard paperBlockCard`,id:`overview`,children:[/*#__PURE__*/ f(`div`,{className:`cardTop`,children:[/*#__PURE__*/ p(`span`,{className:`cardIndex`,children:`[ 02 ]`}),/*#__PURE__*/ p(`h3`,{className:`cardTitle`,children:`LightPlug reuses OLAT-learned facial responses for avatar`})]}),l?/*#__PURE__*/ p(`a`,{className:`cardMedia figureMedia`,href:l,target:`_blank`,rel:`noreferrer noopener`,"aria-label":`Open the teaser figure full size`,children:/*#__PURE__*/ p(`img`,{src:l,alt:`LightPlug teaser figure`})}):null]}),/*#__PURE__*/ f(`section`,{className:`glassCard paperBlockCard`,id:`demo`,children:[/*#__PURE__*/ f(`div`,{className:`cardTop`,children:[/*#__PURE__*/ p(`span`,{className:`cardIndex`,children:`[ 03 ]`}),/*#__PURE__*/ p(`h3`,{className:`cardTitle`,children:`Demo`})]}),/*#__PURE__*/ p(`div`,{className:`cardMedia videoMedia`,children:d?/*#__PURE__*/ p(`video`,{src:d,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,preload:`metadata`}):/*#__PURE__*/ p(`span`,{className:`cardPlaceholder`,children:`Video goes here`})})]}),/*#__PURE__*/ f(`section`,{className:`glassCard paperBlockCard`,id:`explanation`,children:[/*#__PURE__*/ f(`div`,{className:`cardTop`,children:[/*#__PURE__*/ p(`span`,{className:`cardIndex`,children:`[ 04 ]`}),/*#__PURE__*/ p(`h3`,{className:`cardTitle`,children:`LightPlug Explanation`})]}),/*#__PURE__*/ p(`div`,{className:`cardMedia videoMedia`,children:m?/*#__PURE__*/ p(`video`,{src:m,controls:!0,playsInline:!0,preload:`metadata`}):/*#__PURE__*/ p(`span`,{className:`cardPlaceholder`,children:`Video goes here`})})]})]})]})]})}var eo,to,no;function ro(){return(ro=e((()=>{r(),h(),ne(),g(),eo=`Realistic avatar relighting must reproduce **local shading variations** and cast shadows around facial structures to convey facial depth. **However, methods trained on in-the-wild images often lack sufficient observations under varied illumination to recover these responses, resulting in overly smooth facial shading.**

Although one-light-at-a-time (OLAT) captures provide measured illumination responses, their acquisition is costly, **highlighting the need for a lightweight, reusable prior for existing avatar renderers.** We introduce **LightPlug**, a lightweight, plug-and-play module that transfers structure-dependent responses learned from OLAT observations across avatar representations.

Conditioned on facial albedo and a light embedding, LightPlug learns local illumination responses in **canonical UV space**, where corresponding facial regions are aligned across observations. During deployment, a selected response is converted into a relative spatial prior, aligned with the renderer's shading locations through a framework-specific mapping, and used to multiplicatively modulate its native diffuse response under the target illumination. This modular design enables reuse across avatar representations while preserving the base renderer's target illumination computation, geometry, material parameters, and specular branch.

Experiments on multiple facial datasets, avatar frameworks, and unseen identities demonstrate improved local shading around facial structures and the applicability of the learned prior across rendering pipelines. With approximately **1.12 ms** per prior inference, LightPlug provides an efficient approach to enhancing structure-dependent facial shading in existing avatar relighting pipelines.`,to=e=>e.split(`**`).map((e,t)=>t%2==1?/*#__PURE__*/ p(`strong`,{children:e},t):e),no=`
.paperSection {
    position: relative;
    isolation: isolate;
    width: 100%;
    overflow: clip;
    border-radius: 34px 34px 0 0;
    padding: clamp(64px, 7.5vw, 112px) clamp(20px, 4.2vw, 72px) clamp(120px, 16vh, 220px);
    transform: translate3d(0, var(--paper-lift, 0px), 0);
    font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #1B2750;
    background: linear-gradient(168deg, #FFFFFF 0%, #F8FCFF 38%, #F2FAFA 68%, #FCFEFF 100%);
}
/* Aurora: one dominant soft cobalt glow (upper left) + an off-centre
   teal / sky / violet mesh orb (right), everything else stays white. */
.paperAurora {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: min(118vh, 1180px);
    z-index: 0;
    pointer-events: none;
    background:
        radial-gradient(40% 38% at 83% 22%, rgba(128,242,219,0.95) 0%, rgba(128,242,219,0) 68%),
        radial-gradient(34% 34% at 93% 35%, rgba(120,196,255,0.95) 0%, rgba(120,196,255,0) 66%),
        radial-gradient(30% 31% at 73% 41%, rgba(158,150,250,0.9) 0%, rgba(158,150,250,0) 64%),
        radial-gradient(26% 27% at 88% 51%, rgba(58,102,236,0.72) 0%, rgba(58,102,236,0) 62%),
        radial-gradient(30% 36% at 10% 16%, rgba(118,232,214,0.55) 0%, rgba(118,232,214,0) 68%),
        radial-gradient(48% 50% at 3% 6%, rgba(58,102,236,0.62) 0%, rgba(58,102,236,0.2) 32%, rgba(58,102,236,0) 66%);
    filter: saturate(1.06);
}
.paperInner {
    position: relative;
    z-index: 1;
    max-width: 1080px;
    margin: 0 auto;
}
.paperMasthead { position: relative; }
/* Back to cover — a small glass pill, centred over the masthead. */
.backToCover {
    position: absolute;
    top: -46px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 11px 22px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.55);
    background: rgba(255, 255, 255, var(--paper-card-alpha, 0.55));
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 20px rgba(22, 38, 92, 0.06);
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #4169E8;
    cursor: pointer;
    transition: color 0.2s ease, border-color 0.2s ease;
}
.backToCover:hover { color: #16265C; border-color: rgba(65, 105, 232, 0.4); }
.backArrow {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.25s cubic-bezier(0.22, 1.1, 0.36, 1);
}
.backToCover:hover .backArrow { transform: translateY(-3px); }

.paperKicker {
    margin: 0 0 20px;
    text-align: center;
    font-size: clamp(11px, 0.82vw, 12.5px);
    font-weight: 600;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #4169E8;
}
.paperTitle {
    margin: 0;
    max-width: none;
    font-size: clamp(24px, 3.4vw, 40px);
    line-height: 1.07;
    letter-spacing: -0.028em;
    font-weight: 700;
    color: #16265C;
    text-wrap: balance;
    text-align: center;
}
.paperLede {
    margin: 26px auto 0;
    max-width: 64ch;
    text-align: center;
    font-size: clamp(14px, 1.05vw, 17px);
    line-height: 1.62;
    color: #4A5678;
}
.paperRule {
    margin: 44px 0 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(65,105,232,0.34), rgba(65,105,232,0));
}

/* Outer glass panel */
.glassShell {
    margin-top: 44px;
    padding: clamp(18px, 2.1vw, 32px);
    border-radius: 30px;
    background: rgba(255, 255, 255, var(--paper-panel-alpha, 0.2));
    -webkit-backdrop-filter: blur(var(--paper-panel-blur, 20px)) saturate(1.25);
    backdrop-filter: blur(var(--paper-panel-blur, 20px)) saturate(1.25);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 30px 90px rgba(22, 38, 92, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.55);
}
/* While the panel is flying, skip the expensive backdrop blurs. */
.paperSection.isFlying .glassShell,
.paperSection.isFlying .glassCard {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
}

/* Single column: one block after another, so the page is long. */
.glassColumn {
    display: flex;
    flex-direction: column;
    gap: clamp(16px, 1.6vw, 24px);
}
/* Inner content card — clearer and less transparent than the shell */
.glassCard {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: clamp(22px, 2.4vw, 40px) clamp(22px, 2.6vw, 44px);
    border-radius: 22px;
    background: rgba(255, 255, 255, var(--paper-card-alpha, 0.55));
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 10px 26px rgba(22, 38, 92, 0.05);
}
.cardTop { display: flex; align-items: baseline; gap: 10px; }
.cardIndex {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #4169E8;
    font-variant-numeric: tabular-nums;
}
.cardLabel {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #6C7BA8;
}
.cardTitle {
    margin: 0;
    font-size: clamp(19px, 1.6vw, 26px);
    line-height: 1.24;
    letter-spacing: -0.012em;
    font-weight: 650;
    color: #1B2750;
}
.cardBody {
    margin: 0;
    max-width: 66ch;
    font-size: clamp(13.5px, 0.98vw, 16px);
    line-height: 1.64;
    color: #525C82;
}

/* One glass frame per block, identical spacing between them. */
.paperCards { margin: clamp(26px, 3.2vw, 42px) 0 0; }
.paperBlockCard { scroll-margin-top: clamp(16px, 3vh, 34px); }
.paperBlockCard .cardTop {
    align-items: center;
    gap: 14px;
    margin: 0 0 clamp(14px, 1.4vw, 20px);
}
.paperBlockCard .cardIndex {
    font-size: 12px;
    letter-spacing: 0.1em;
    color: #4169E8;
}
.paperBlockCard .cardTitle {
    margin: 0;
    font-size: clamp(18px, 1.5vw, 24px);
    line-height: 1.26;
    letter-spacing: -0.018em;
    font-weight: 680;
    color: #16265C;
    text-wrap: balance;
}
.cardMedia {
    display: block;
    border-radius: 18px;
    overflow: hidden;
    text-decoration: none;
}
.figureMedia {
    background: #FFFFFF;
    border: 1px solid rgba(22, 38, 92, 0.06);
    box-shadow: 0 10px 26px rgba(22, 38, 92, 0.06);
    cursor: zoom-in;
}
.figureMedia img { display: block; width: 100%; height: auto; }
.videoMedia {
    position: relative;
    aspect-ratio: 16 / 9;
    background: #0D1224;
    border: 1px solid rgba(255, 255, 255, 0.45);
    box-shadow: 0 14px 34px rgba(22, 38, 92, 0.12);
}
.videoMedia video { display: block; width: 100%; height: 100%; object-fit: contain; }
.cardPlaceholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.38);
    font-size: 13px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}
.abstractBody {
    margin: 0;
    font-size: clamp(14.5px, 1.02vw, 16.5px);
    line-height: 1.78;
    color: #414D77;
    text-align: justify;
    hyphens: manual;
    white-space: pre-line;
}
.abstractBody strong {
    font-weight: 720;
    color: #16265C;
}
/* Connect — the page's closing block, targeted by the nav's #connect link. */
.connectBlock {
    position: relative;
    z-index: 1;
    margin-top: clamp(72px, 9vw, 132px);
    padding-top: clamp(28px, 3vw, 44px);
    border-top: 1px solid rgba(65, 105, 232, 0.18);
    scroll-margin-top: 28px;
}
.connectKicker {
    margin: 0 0 14px;
    font-size: clamp(11px, 0.82vw, 12.5px);
    font-weight: 600;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #4169E8;
}
.connectTitle {
    margin: 0;
    font-size: clamp(24px, 2.6vw, 38px);
    line-height: 1.12;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: #16265C;
}
.connectLede {
    margin: 16px 0 0;
    max-width: 52ch;
    font-size: clamp(14px, 1vw, 16px);
    line-height: 1.62;
    color: #4A5678;
}
.connectList {
    display: flex;
    flex-wrap: wrap;
    gap: 14px 40px;
    margin: 30px 0 0;
    padding: 0;
    list-style: none;
}
.connectList li { display: flex; align-items: baseline; gap: 10px; }
.connectList span {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #6C7BA8;
}
.connectList a {
    font-size: clamp(14px, 1vw, 16px);
    color: #16265C;
    text-decoration: none;
    border-bottom: 1px solid rgba(65, 105, 232, 0.35);
    padding-bottom: 1px;
}
.connectList a:hover { border-bottom-color: #4169E8; }

`,fe($a,{kicker:{type:C.String,title:`Kicker`,defaultValue:`CVPR 2027 · Face Relight`},title:{type:C.String,title:`Title`,defaultValue:`LightPlug: Bringing out Facial Structure in Avatar Relighting via a Lightweight Plug-and-Play Prior`,displayTextArea:!0},lede:{type:C.String,title:`Lede`,defaultValue:`LightPlug is a lightweight plug-and-play module, which enables cast-shadow-aware face relighting and adjust for every codec avatars.`,displayTextArea:!0},panelBlur:{type:C.Number,title:`Panel Blur`,defaultValue:20,min:0,max:40,step:1,unit:`px`},panelOpacity:{type:C.Number,title:`Panel Alpha`,defaultValue:.2,min:.05,max:.4,step:.01},cardOpacity:{type:C.Number,title:`Card Alpha`,defaultValue:.55,min:.3,max:.85,step:.01},figureUrl:{type:C.String,title:`Figure Url`,defaultValue:``},abstractText:{type:C.String,title:`Abstract Text`,defaultValue:``,displayTextArea:!0},explanationVideoUrl:{type:C.String,title:`Explanation Video Url`,defaultValue:``},demoVideoUrl:{type:C.String,title:`Demo Video Url`,defaultValue:``},demoNote:{type:C.String,title:`Demo Note`,defaultValue:`The interactive demo can be found and tried on the Hugging Face project page.`,displayTextArea:!0}})})))()}function io(e){if(!e)return{};let{fontSize:t,lineHeight:n,letterSpacing:r,textAlign:i,...a}=e;return a}function ao({className:e,style:t}){return/*#__PURE__*/ f(`div`,{className:`rhScene ${e}`,style:t,"aria-hidden":`true`,children:[/*#__PURE__*/ p(`div`,{className:`rhAtmosphere`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhBlobLeft`,"data-shape-id":`left`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhArchTop`,"data-shape-id":`top`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhBlobRight`,"data-shape-id":`right`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhWaveBottom`,"data-shape-id":`bottom`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhOrb rhOrbOne`,"data-shape-id":`orbOne`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhOrb rhOrbTwo`,"data-shape-id":`orbTwo`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhOrb rhOrbThree`,"data-shape-id":`orbThree`}),/*#__PURE__*/ p(`div`,{className:`rhSculpture rhOrb rhOrbFour`,"data-shape-id":`orbFour`})]})}function oo(e){let{eventName:t=`CVPR 2027`,eyebrow:n=`Face Relight`,titleLineOne:r=`LightPlug`,titleLineTwo:u=`Bringing out Facial Structure
in Avatar Relighting via a
Lightweight Plug-and-Play Prior`,subtitleLineOne:d=`See the World`,subtitleLineTwo:m=`in a Different Light`,ctaLabel:h=`Learn More`,ctaLink:g=`#paper`,applicationLabel:_=`Application`,applicationVideoUrl:y=`https://framerusercontent.com/assets/SdAxc5sKnatXAPnD855HIjgUoFw.mp4`,githubLink:b=`#`,huggingFaceLink:x=`#`,demoLink:ee=`#`,arxivLink:te=``,supportingText:ne=`CVPR 2027`,backgroundStart:re=`#DEDEDD`,backgroundMiddle:ie=`#F4F4F2`,backgroundEnd:ae=`#D9DAD9`,textColor:oe=`#202124`,mutedTextColor:se=`#66686D`,buttonColor:ce=`#2D2E30`,buttonTextColor:le=`#F7F7F5`,showColorScene:ue=!1,enablePointerReveal:de=!0,revealRadius:S=180,revealSoftness:fe=.7,followSmoothness:pe=.16,trailCount:he=4,trailSpacing:ge=.4,trailSizeFalloff:C=.82,trailFade:_e=.75,enableFloat:w=!0,floatDistance:ve=18,floatSpeed:T=.35,enableRepel:ye=!0,repelAmount:E=18,repelRange:D=240,fadeInDuration:be=200,fadeOutDuration:xe=300,fluorescenceIntensity:O=1.25,iridescenceIntensity:Se=1.15,specularIntensity:Ce=1.1,colorSaturation:we=1.25,editShapes:k=!1,leftX:Te=0,leftY:Ee=0,leftScale:De=1,topX:Oe=0,topY:ke=0,topScale:Ae=1,rightX:je=0,rightY:Me=0,rightScale:Ne=1,bottomX:Pe=0,bottomY:Fe=0,bottomScale:Ie=1,orbOneX:Le=0,orbOneY:Re=0,orbOneScale:ze=1,orbTwoX:Be=0,orbTwoY:Ve=0,orbTwoScale:He=1,orbThreeX:Ue=0,orbThreeY:We=0,orbThreeScale:Ge=1,orbFourX:Ke=0,orbFourY:qe=0,orbFourScale:Je=1,wordmarkScale:Ye=2.1,descScale:Xe=.62,titleFont:Ze,eyebrowFont:Qe,headingFont:$e,bodyFont:et,style:tt}=e,[nt,rt]=s(!1);v(()=>{if(!nt)return;let e=e=>{e.key===`Escape`&&rt(!1)},t=document.body.style.overflow;return document.body.style.overflow=`hidden`,o.addEventListener(`keydown`,e),()=>{o.removeEventListener(`keydown`,e),document.body.style.overflow=t}},[nt]);let it=io($e),at=io(et),ot=c(null),st=c(null),ct=c(/* @__PURE__ */ new Map),lt=e=>{let t=String(g||``),n=t.indexOf(`#`),r=n>=0?t.slice(n+1):``,i=n>=0?t.slice(0,n):t,a=i===``||i===`/`||i===o.location.pathname;if(!r||!a)return;let s=document.getElementById(r)||document.querySelector(`.paperSection`);s&&(e.preventDefault(),o.location.hash=r,s.scrollIntoView({behavior:`smooth`,block:`start`}))},ut=[{label:so.github,href:b,external:!0},{label:so.huggingFace,href:x,external:!0},{label:so.demo,href:`#demo`,external:!1},{label:so.arxiv,href:te,external:!0}],A=me.current()===me.canvas,j=k&&A,dt={left:{x:Te,y:Ee,scale:De},top:{x:Oe,y:ke,scale:Ae},right:{x:je,y:Me,scale:Ne},bottom:{x:Pe,y:Fe,scale:Ie},orbOne:{x:Le,y:Re,scale:ze},orbTwo:{x:Be,y:Ve,scale:He},orbThree:{x:Ue,y:We,scale:Ge},orbFour:{x:Ke,y:qe,scale:Je}},ft=co.map(({id:e})=>{let t=dt[e];return`${t.x},${t.y},${t.scale}`}).join(`|`),pt=c(ft),[mt,ht]=s(()=>dt),[gt,_t]=s(`left`),[vt,yt]=s(``),[bt,xt]=s({width:1200,height:900}),[St,Ct]=s({}),wt=c(null),Tt=c(null),M=c(null);v(()=>{pt.current!==ft&&(pt.current=ft,ht(dt))},[ft]),v(()=>{let e=ot.current;if(!e||o===void 0)return;let t=()=>{let t=e.getBoundingClientRect();xt(e=>Math.abs(e.width-t.width)<.1&&Math.abs(e.height-t.height)<.1?e:{width:t.width,height:t.height})};if(t(),typeof ResizeObserver>`u`)return o.addEventListener(`resize`,t,{passive:!0}),()=>o.removeEventListener(`resize`,t);let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let N=a(()=>{let e=ot.current;if(!e)return;let t=e.getBoundingClientRect(),n={};for(let{id:r}of co){let i=e.querySelector(`.rhGrayScene [data-shape-id="${r}"]`);if(!i)continue;let a=i.getBoundingClientRect(),o=Math.max(8,Math.min(t.width-32,a.left-t.left)),s=Math.max(8,Math.min(t.height-32,a.top-t.top)),c=Math.max(o+24,Math.min(t.width-8,a.right-t.left)),l=Math.max(s+24,Math.min(t.height-8,a.bottom-t.top));n[r]={left:o,top:s,width:c-o,height:l-s}}Ct(n)},[]),P=co.map(({id:e})=>{let t=mt[e];return`${t.x},${t.y},${t.scale}`}).join(`|`),Et=j?`editing`:P;v(()=>{if(!j||o===void 0)return;let e=o.requestAnimationFrame(N);return()=>o.cancelAnimationFrame(e)},[j,bt.width,bt.height,P,N]);let F=a(()=>{M.current=null;let e=Tt.current;e&&ht(t=>({...t,[e.id]:e.value}))},[]),I=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.setPointerCapture(e.pointerId);let r=St[t],i=ot.current?.getBoundingClientRect(),a=i&&r?i.left+r.left+r.width/2:e.clientX,o=i&&r?i.top+r.top+r.height/2:e.clientY;_t(t),yt(``),wt.current={id:t,mode:n,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,centerX:a,centerY:o,startDistance:Math.max(20,Math.hypot(e.clientX-a,e.clientY-o)),base:{...mt[t]}}},Dt=e=>{let t=wt.current;if(!t||t.pointerId!==e.pointerId)return;e.preventDefault(),e.stopPropagation();let n={...t.base};if(t.mode===`move`)n.x=Math.round((t.base.x+(e.clientX-t.startX)/Math.max(bt.width,1)*100)*10)/10,n.y=Math.round((t.base.y+(e.clientY-t.startY)/Math.max(bt.height,1)*100)*10)/10;else{let r=Math.max(8,Math.hypot(e.clientX-t.centerX,e.clientY-t.centerY));n.scale=Math.round(Math.max(.25,Math.min(3,t.base.scale*(r/t.startDistance)))*100)/100}Tt.current={id:t.id,value:n},M.current===null&&o!==void 0&&(M.current=o.requestAnimationFrame(F))},Ot=e=>{let t=wt.current;t&&t.pointerId===e.pointerId&&(Dt(e),M.current!==null&&o!==void 0&&o.cancelAnimationFrame(M.current),F(),e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),wt.current=null)};v(()=>()=>{M.current!==null&&o!==void 0&&o.cancelAnimationFrame(M.current)},[]);let L=co.find(({id:e})=>e===gt)??co[0],kt=mt[gt],R=async()=>{let e=`${L.label}: X ${kt.x}%, Y ${kt.y}%, Scale ${kt.scale}`;try{if(i===void 0||!i.clipboard)throw Error(`Clipboard unavailable`);await i.clipboard.writeText(e),yt(`Copied`)}catch{yt(`Copy unavailable — enter the shown values`)}},At=async()=>{let e=co.map(({id:e,label:t})=>{let n=mt[e];return`${t}: X ${n.x}%, Y ${n.y}%, Scale ${n.scale}`}).join(`
`);try{if(i===void 0||!i.clipboard)throw Error(`Clipboard unavailable`);await i.clipboard.writeText(e),yt(`All copied`)}catch{yt(`Copy unavailable — enter the shown values`)}};v(()=>{let e=ot.current,t=st.current;if(!e)return;let n=Array.from(e.querySelectorAll(`.rhColorScene .rhSculpture`));e.style.setProperty(`--reveal-opacity`,`0`),t?.style.setProperty(`--title-mouse-x`,`-10000px`),t?.style.setProperty(`--title-mouse-y`,`-10000px`);for(let e of n)e.style.setProperty(`--surface-light-strength`,`0`);if(j||ue||!de||o===void 0)return;let r=o.matchMedia(`(hover: hover) and (pointer: fine)`),i=o.matchMedia(`(prefers-reduced-motion: reduce)`);if(!r.matches||i.matches)return;let a=null,s=0,c=e.clientWidth/2,l=e.clientHeight/2,u=c,d=l,f=Math.max(0,90-Math.max(0,Math.min(1,fe))*100),p=100-f,m=f+p*.1875,h=f+p*.4375,g=f+p*.6875,_=Math.max(0,Math.round(he)),v=Math.max(4,S*Math.max(.05,ge)),y=[],b=1,x=!1,ee=w&&ve>0&&!i.matches,te=e=>{let t=0;for(let n=0;n<y.length-1;n+=1){let r=y[n],i=y[n+1],a=Math.hypot(r.x-i.x,r.y-i.y);if(t+a>=e){let n=a>0?(e-t)/a:0;return{x:r.x+(i.x-r.x)*n,y:r.y+(i.y-r.y)*n}}t+=a}return y[y.length-1]??{x:u,y:d}},ne=t=>{let n=[];n.push(lo(S,u+`px`,d+`px`,1,f,m,h,g));for(let e=1;e<=_;e+=1){let r=Math.max(2,S*C**+e),i=_e**+e*t,a=te(v*e);n.push(lo(r,a.x+`px`,a.y+`px`,i,f,m,h,g))}e.style.setProperty(`--reveal-mask`,n.join(`, `))},re=0,ie=0,ae=[],oe=e=>{if(t){let n=t.getBoundingClientRect();re=n.left-e.left,ie=n.top-e.top}ae=n.map(t=>{let n=t.getBoundingClientRect(),r=t.dataset.shapeId??``,i=ct.current.get(r)??{x:0,y:0};return{element:t,shapeId:r,left:n.left-e.left-i.x,top:n.top-e.top-i.y,width:n.width,height:n.height}})},se=()=>{for(let e of ae){let t=ct.current.get(e.shapeId)??{x:0,y:0},n=e.left+t.x,r=e.top+t.y,i=n+e.width,a=r+e.height,o=Math.max(n,Math.min(u,i)),s=Math.max(r,Math.min(d,a)),c=Math.hypot(u-o,d-s),l=S*1.35,f=Math.min(1,c/l),p=1-f*f*(3-2*f),m=o-n,h=s-r,g=e.width-m,_=e.height-h,v=m*.82+e.width*.06,y=h*.82+e.height*.06,b=e.width?m/e.width:.5,x=e.height?h/e.height:.5,ee=Math.min(1,Math.abs(b-.5)*2),te=Math.min(1,Math.abs(x-.5)*2),ne=e.width*(.018+(1-te)*.018),re=e.height*(.01+ee*.012),ie=e.width*(.54+(1-te)*.18),ae=e.height*(.48+ee*.2);e.element.style.setProperty(`--surface-light-x`,`${m}px`),e.element.style.setProperty(`--surface-light-y`,`${h}px`),e.element.style.setProperty(`--surface-opposite-x`,`${g}px`),e.element.style.setProperty(`--surface-opposite-y`,`${_}px`),e.element.style.setProperty(`--surface-specular-x`,`${v}px`),e.element.style.setProperty(`--surface-specular-y`,`${y}px`),e.element.style.setProperty(`--surface-specular-w`,`${ne}px`),e.element.style.setProperty(`--surface-specular-h`,`${re}px`),e.element.style.setProperty(`--surface-color-w`,`${ie}px`),e.element.style.setProperty(`--surface-color-h`,`${ae}px`),e.element.style.setProperty(`--surface-light-strength`,p.toFixed(3))}},ce=()=>{for(let e of n)e.style.setProperty(`--surface-light-strength`,`0`)},le=n=>{let r=1e3/60,i=s===0?r:Math.min(n-s,64);s=n;let f=1-(1-pe)**(i/r);u+=(c-u)*f,d+=(l-d)*f,y.unshift({x:u,y:d}),y.length>900&&(y.length=900);let p=Math.abs(c-u)>.15||Math.abs(l-d)>.15;b+=(+!!p-b)*Math.min(1,i/110),!p&&b<.02&&(b=0),ne(b),e.style.setProperty(`--mouse-x`,`${u}px`),e.style.setProperty(`--mouse-y`,`${d}px`),t&&(t.style.setProperty(`--title-mouse-x`,`${u-re}px`),t.style.setProperty(`--title-mouse-y`,`${d-ie}px`)),se(),Math.abs(c-u)>.15||Math.abs(l-d)>.15||b>0||ee&&x?a=o.requestAnimationFrame(le):(a=null,s=0)},me=()=>{a===null&&(s=0,a=o.requestAnimationFrame(le))},T=t=>{let n=e.getBoundingClientRect();c=t.clientX-n.left,l=t.clientY-n.top,me()},ye=n=>{let r=e.getBoundingClientRect();c=n.clientX-r.left,l=n.clientY-r.top,oe(r),u=c,d=l,e.style.setProperty(`--mouse-x`,`${u}px`),e.style.setProperty(`--mouse-y`,`${d}px`),t&&(t.style.setProperty(`--title-mouse-x`,`${u-re}px`),t.style.setProperty(`--title-mouse-y`,`${d-ie}px`)),se(),e.style.setProperty(`--reveal-duration`,`${be}ms`),e.style.setProperty(`--reveal-opacity`,`1`),x=!0,y.length=0,b=1,ne(1),me()},E=()=>{e.style.setProperty(`--reveal-duration`,`${xe}ms`),e.style.setProperty(`--reveal-opacity`,`0`),t?.style.setProperty(`--title-mouse-x`,`-10000px`),t?.style.setProperty(`--title-mouse-y`,`-10000px`),x=!1,ce(),a!==null&&(o.cancelAnimationFrame(a),a=null,s=0)},D=()=>oe(e.getBoundingClientRect());return oe(e.getBoundingClientRect()),e.addEventListener(`pointerenter`,ye),e.addEventListener(`pointermove`,T),e.addEventListener(`pointerleave`,E),o.addEventListener(`resize`,D,{passive:!0}),()=>{e.removeEventListener(`pointerenter`,ye),e.removeEventListener(`pointermove`,T),e.removeEventListener(`pointerleave`,E),o.removeEventListener(`resize`,D),a!==null&&o.cancelAnimationFrame(a),e.style.setProperty(`--reveal-opacity`,`0`),t?.style.setProperty(`--title-mouse-x`,`-10000px`),t?.style.setProperty(`--title-mouse-y`,`-10000px`),ce()}},[de,ue,S,fe,pe,he,ge,C,_e,w,ve,be,xe,j,Et]),v(()=>{let e=ot.current;if(!e)return;let t=w&&ve>0,n=ye&&E>0;if(!t&&!n||j||o===void 0||o.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let r=Array.from(e.querySelectorAll(`.rhSculpture`)).filter(e=>!!e.dataset.shapeId),i=Array.from(new Set(r.map(e=>e.dataset.shapeId))),a=i.map((e,t)=>({px:t*1.7,py:t*2.3+.9,sx:.9+t%3*.07,sy:1.1+t%2*.09})),s=/* @__PURE__ */ new Map;for(let e of r){let t=e.dataset.shapeId;s.has(t)||s.set(t,e)}let c=[],l=()=>{let t=e.getBoundingClientRect();c=i.map(e=>{let n=s.get(e);if(!n)return null;let r=n.getBoundingClientRect(),i=ct.current.get(e)??{x:0,y:0};return{id:e,cx:r.left-t.left-i.x+r.width/2,cy:r.top-t.top-i.y+r.height/2,radius:Math.max(r.width,r.height)/2}}).filter(e=>e!==null)};l();let u=/* @__PURE__ */ new Map,d=-1e5,f=-1e5,p=!1,m=t=>{let n=e.getBoundingClientRect();d=t.clientX-n.left,f=t.clientY-n.top,p=!0},h=()=>{p=!1},g=()=>l();e.addEventListener(`pointermove`,m,{passive:!0}),e.addEventListener(`pointerenter`,m,{passive:!0}),e.addEventListener(`pointerleave`,h,{passive:!0}),o.addEventListener(`resize`,g,{passive:!0});let _=null,v=performance.now(),y=0,b=e=>{let i=(e-v)/1e3,s=y?Math.min(e-y,64):16.67;y=e;let l=1-.001**(s/1e3),m=/* @__PURE__ */ new Map;c.forEach((e,r)=>{let o=a[r%a.length],s=0,c=0;t&&(s=Math.sin(i*T*o.sx+o.px)*ve,c=Math.cos(i*T*o.sy+o.py)*ve*.8);let h=0,g=0;if(n&&p){let t=e.cx-d,n=e.cy-f,r=Math.hypot(t,n),i=Math.max(0,r-e.radius),a=Math.max(0,1-i/Math.max(1,D));if(a>0&&r>.001){let e=E*a*a;h=t/r*e,g=n/r*e}}let _=u.get(e.id)??{x:0,y:0},v=_.x+(h-_.x)*l,y=_.y+(g-_.y)*l;u.set(e.id,{x:v,y}),m.set(e.id,{x:s+v,y:c+y})});for(let e of r){let t=m.get(e.dataset.shapeId);t&&(e.style.setProperty(`--float-x`,t.x.toFixed(2)+`px`),e.style.setProperty(`--float-y`,t.y.toFixed(2)+`px`))}ct.current=m,_=o.requestAnimationFrame(b)};return _=o.requestAnimationFrame(b),()=>{_!==null&&o.cancelAnimationFrame(_),e.removeEventListener(`pointermove`,m),e.removeEventListener(`pointerenter`,m),e.removeEventListener(`pointerleave`,h),o.removeEventListener(`resize`,g);for(let e of r)e.style.removeProperty(`--float-x`),e.style.removeProperty(`--float-y`);ct.current=/* @__PURE__ */ new Map}},[w,ve,T,ye,E,D,j]);let jt=Math.max(0,90-Math.max(0,Math.min(1,fe))*100),z=100-jt,Mt=`radial-gradient(circle var(--reveal-radius) at var(--mouse-x) var(--mouse-y), rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${jt}%, rgba(0,0,0,.85) ${jt+z*.1875}%, rgba(0,0,0,.55) ${jt+z*.4375}%, rgba(0,0,0,.2) ${jt+z*.6875}%, rgba(0,0,0,0) 100%)`,Nt={opacity:ue?1:`var(--reveal-opacity)`,WebkitMaskImage:ue?`none`:`var(--reveal-mask)`,maskImage:ue?`none`:`var(--reveal-mask)`},B=(e,t,n)=>Math.max(t,Math.min(n,e)),V=B(O,0,2),H=B(Se,0,2),U=B(Ce,0,2),Pt={"--material-saturation":B(we,.5,2),"--film-opacity":B(.34+H*.42,0,1),"--ambient-fluorescence-opacity":B(.38+V*.34,0,1),"--bloom-opacity":B(.28+V*.42,0,1),"--specular-strong":`rgba(255,253,254,${B(.58+U*.24,0,.94)})`,"--specular-medium":`rgba(255,253,254,${B(.3+U*.2,0,.72)})`,"--specular-weak":`rgba(255,253,254,${B(.06+U*.08,0,.24)})`,"--specular-soft-strong":`rgba(255,253,254,${B(.12+U*.1,0,.34)})`,"--specular-soft-medium":`rgba(255,253,254,${B(.08+U*.06,0,.23)})`,"--specular-soft-weak":`rgba(255,253,254,${B(.02+U*.025,0,.09)})`,"--cyan-film":`rgba(120,240,255,${B(.1+H*.23,0,.62)})`,"--blue-film":`rgba(103,183,255,${B(.1+H*.22,0,.6)})`,"--pink-film":`rgba(255,99,214,${B(.09+H*.22,0,.6)})`,"--violet-film":`rgba(200,168,255,${B(.1+H*.21,0,.58)})`,"--cyan-glow":`rgba(120,240,255,${B(.22+V*.38,0,.92)})`,"--blue-glow":`rgba(103,183,255,${B(.2+V*.36,0,.9)})`,"--pink-glow":`rgba(248,87,200,${B(.23+V*.39,0,.94)})`,"--violet-glow":`rgba(200,168,255,${B(.21+V*.36,0,.9)})`,"--cyan-counter":`rgba(120,240,255,${B(.2+V*.34,0,.86)})`,"--blue-counter":`rgba(103,183,255,${B(.23+V*.35,0,.88)})`,"--blue-shadow":`rgba(72,92,184,${B(.1+H*.17,0,.4)})`,"--rim-cyan":`rgba(120,240,255,${B(.16+V*.25,0,.68)})`},Ft=co.reduce((e,{id:t})=>{let n=mt[t];return e[`--shape-${t}-x`]=`${n.x/100*bt.width}px`,e[`--shape-${t}-y`]=`${n.y/100*bt.height}px`,e[`--shape-${t}-scale`]=n.scale,e},{});return/*#__PURE__*/ f(`section`,{ref:ot,id:`hero`,className:`relightingHero${j?` isEditingShapes`:``}`,style:{...tt,"--text":oe,"--muted":se,"--rh-wordmark":Ye,"--rh-desc":Xe,"--rh-desc-font":Ze?.fontFamily,"--rh-eyebrow-font":Qe?.fontFamily,"--button":ce,"--buttonText":le,"--bgStart":re,"--bgMiddle":ie,"--bgEnd":ae,"--mouse-x":`50%`,"--mouse-y":`50%`,"--reveal-radius":`${S}px`,"--reveal-width":`${S}px`,"--reveal-height":`${S}px`,"--reveal-opacity":0,"--reveal-mask":Mt,"--title-mouse-x":`-10000px`,"--title-mouse-y":`-10000px`,"--title-reveal-radius":`${S}px`,"--reveal-duration":`${xe}ms`,...Pt,...Ft},children:[/*#__PURE__*/ p(`style`,{children:`

                .relightingHero {

                    position: relative;

                    isolation: isolate;

                    display: grid;

                    grid-template-rows: auto 1fr auto;

                    width: 100%;

                    height: 100%;

                    min-height: 560px;

                    overflow: hidden;

                    color: var(--text);

                    background: var(--bgMiddle);

                    font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;

                    box-sizing: border-box;

                }

                .relightingHero *, .relightingHero *::before, .relightingHero *::after { box-sizing: border-box; }

                .rhScene {

                    position: absolute;

                    inset: 0;

                    overflow: hidden;

                    pointer-events: none;

                    transform: translateZ(0);

                    transition: opacity var(--reveal-duration) ease;

                }

                .rhGrayScene {

                    z-index: -2;

                    opacity: 1;

                    --surfaceHigh: #fbfbfa;

                    --surfaceMid: #dedfdf;

                    --surfaceLow: #aeb0b1;

                    --pinkLight: rgba(255,255,255,.34);

                    --blueLight: rgba(212,214,216,.18);

                    --violetLight: rgba(194,196,199,.12);

                    --castShadow: rgba(74,76,79,.24);

                }

                .rhColorScene {
                    z-index: -1;
                    opacity: 0;
                    --surfaceHigh: #FFFDFE;
                    --surfaceMid: #e8e0eb;
                    --surfaceLow: #aeb3bf;
                    --pinkLight: rgba(255,253,254,.3);
                    --blueLight: rgba(224,234,247,.16);
                    --violetLight: rgba(238,229,246,.14);
                    --castShadow: rgba(68,72,91,.24);
                }
                .rhColorScene .rhAtmosphere {
                    background:
                        radial-gradient(ellipse 82% 94% at 8% 42%, rgba(127,231,255,.78) 0%, rgba(195,139,255,.48) 48%, transparent 90%),
                        radial-gradient(ellipse 84% 90% at 49% 47%, rgba(255,95,210,.68) 0%, rgba(195,139,255,.58) 43%, rgba(90,168,255,.32) 74%, transparent 97%),
                        radial-gradient(ellipse 82% 94% at 92% 43%, rgba(90,168,255,.72) 0%, rgba(127,231,255,.58) 35%, rgba(248,87,200,.42) 64%, transparent 92%),
                        radial-gradient(ellipse 96% 60% at 50% 104%, rgba(195,139,255,.66) 0%, rgba(90,168,255,.5) 56%, transparent 95%),
                        linear-gradient(145deg, #FFFDFE 0%, #f2e4f8 37%, #e2ecff 69%, #FFFDFE 100%);
                }
                .rhColorScene .rhSculpture:not(.rhOrb) {
                    background:
                        radial-gradient(circle at 34% 24%, rgba(255,255,255,.95) 0%, transparent 28%),
                        linear-gradient(145deg, #ffffff 2%, #FFFDFE 25%, #e8e0eb 59%, #aeb3bf 100%);
                }
                .rhColorScene .rhOrb {
                    background: radial-gradient(circle at 30% 26%, #ffffff 0%, #FFFDFE 28%, #e8e0eb 62%, #aeb3bf 100%);
                }
                .rhColorScene .rhSculpture { overflow: hidden; }
                .rhColorScene .rhSculpture::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    background:
                        radial-gradient(ellipse 22% 17% at var(--surface-specular-x,50%) var(--surface-specular-y,50%), rgba(255,253,254,.98) 0%, rgba(255,253,254,.72) 24%, transparent 66%),
                        radial-gradient(ellipse 74% 66% at var(--surface-light-x,50%) var(--surface-light-y,50%), rgba(248,87,200,.82) 0%, rgba(248,87,200,.66) 16%, rgba(195,139,255,.58) 38%, rgba(90,168,255,.34) 58%, transparent 79%),
                        radial-gradient(ellipse 64% 78% at var(--surface-opposite-x,50%) var(--surface-opposite-y,50%), rgba(127,231,255,.62) 0%, rgba(90,168,255,.4) 34%, rgba(195,139,255,.2) 56%, transparent 78%),
                        radial-gradient(ellipse 105% 105% at 50% 50%, transparent 56%, rgba(127,231,255,.28) 78%, rgba(248,87,200,.22) 100%);
                    box-shadow:
                        inset 0 0 0 1px rgba(255,253,254,.44),
                        inset 16px 10px 28px rgba(255,253,254,.2),
                        inset -18px -10px 34px rgba(90,168,255,.16);
                    mix-blend-mode: screen;
                    filter: saturate(1.16);
                    opacity: var(--surface-light-strength,0);
                    transition: opacity var(--reveal-duration) ease;
                    will-change: opacity;
                }
                .rhColorScene .rhSculpture[data-shape-id="left"],
                .rhColorScene .rhSculpture[data-shape-id="right"] {
                    background:
                        radial-gradient(ellipse 46% 36% at 27% 28%, rgba(255,253,254,.24) 0%, rgba(246,199,232,.22) 38%, transparent 78%),
                        radial-gradient(ellipse 78% 84% at 78% 68%, rgba(189,238,255,.58) 0%, rgba(169,217,255,.46) 38%, rgba(217,203,255,.32) 66%, transparent 88%),
                        linear-gradient(142deg, #f8d8ef 0%, #ddc9f8 38%, #c7e4ff 72%, #a9d9ff 100%);
                }

                .rhColorScene .rhSculpture[data-shape-id="left"]::after,
                .rhColorScene .rhSculpture[data-shape-id="right"]::after {
                    background:
                        radial-gradient(ellipse var(--surface-specular-w,4%) var(--surface-specular-h,2%) at var(--surface-specular-x,50%) var(--surface-specular-y,50%), rgba(255,253,254,.18) 0%, rgba(255,253,254,.06) 40%, transparent 84%),
                        radial-gradient(ellipse 58% 52% at var(--surface-light-x,50%) var(--surface-light-y,50%), rgba(248,87,200,.42) 0%, rgba(195,139,255,.34) 38%, rgba(90,168,255,.18) 66%, transparent 90%),
                        radial-gradient(ellipse 54% 68% at var(--surface-opposite-x,50%) var(--surface-opposite-y,50%), rgba(127,231,255,.36) 0%, rgba(90,168,255,.24) 42%, transparent 86%),
                        radial-gradient(ellipse 108% 108% at 50% 50%, transparent 62%, rgba(127,231,255,.15) 84%, rgba(248,87,200,.10) 100%);
                    box-shadow:
                        inset 0 0 0 1px rgba(255,253,254,.14),
                        inset -14px -8px 30px rgba(90,168,255,.12);
                    filter: saturate(1.08);
                }

                .rhColorScene .rhSculpture[data-shape-id="left"]::before,
                .rhColorScene .rhSculpture[data-shape-id="right"]::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    background:
                        radial-gradient(ellipse var(--surface-specular-w,4%) var(--surface-specular-h,2%) at var(--surface-specular-x,50%) var(--surface-specular-y,50%), rgba(255,253,254,.16) 0%, rgba(255,253,254,.05) 42%, transparent 82%),
                        radial-gradient(ellipse var(--surface-color-w,72%) var(--surface-color-h,62%) at var(--surface-light-x,50%) var(--surface-light-y,50%), rgba(248,87,200,.70) 0%, rgba(242,183,227,.60) 30%, rgba(195,139,255,.48) 58%, transparent 90%),
                        radial-gradient(ellipse 82% 92% at var(--surface-opposite-x,50%) var(--surface-opposite-y,50%), rgba(127,231,255,.72) 0%, rgba(90,168,255,.60) 40%, rgba(195,139,255,.36) 68%, transparent 90%),
                        radial-gradient(ellipse 116% 116% at 50% 50%, transparent 48%, rgba(127,231,255,.38) 76%, rgba(248,87,200,.30) 100%);
                    box-shadow:
                        inset 0 0 0 1px rgba(255,253,254,.18),
                        inset 15px 9px 30px rgba(246,199,232,.14),
                        inset -18px -11px 36px rgba(90,168,255,.28);
                    mix-blend-mode: normal;
                    filter: saturate(1.22);
                    opacity: var(--surface-light-strength,0);
                    transition: opacity var(--reveal-duration) ease;
                    will-change: opacity;
                }

                .rhColorScene .rhSculpture[data-shape-id="bottom"]::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    background:
                        radial-gradient(ellipse 18% 12% at var(--surface-specular-x,50%) var(--surface-specular-y,50%), rgba(255,253,254,.88) 0%, rgba(255,253,254,.46) 30%, transparent 72%),
                        radial-gradient(ellipse 78% 64% at var(--surface-light-x,50%) var(--surface-light-y,50%), rgba(246,199,232,.30) 0%, rgba(242,183,227,.24) 22%, rgba(217,203,255,.18) 48%, transparent 82%),
                        radial-gradient(ellipse 68% 78% at var(--surface-opposite-x,50%) var(--surface-opposite-y,50%), rgba(189,238,255,.28) 0%, rgba(169,217,255,.22) 35%, rgba(217,203,255,.12) 58%, transparent 82%),
                        radial-gradient(ellipse 112% 112% at 50% 50%, transparent 56%, rgba(189,238,255,.16) 80%, rgba(246,199,232,.13) 100%);
                    box-shadow:
                        inset 0 0 0 1px rgba(255,253,254,.34),
                        inset 10px 6px 22px rgba(255,253,254,.14),
                        inset -12px -8px 26px rgba(169,217,255,.10);
                    mix-blend-mode: screen;
                    filter: saturate(1.04);
                    opacity: var(--surface-light-strength,0);
                    transition: opacity var(--reveal-duration) ease;
                    will-change: opacity;
                }
                .rhColorScene .rhSculpture[data-shape-id="orbOne"]::before,
                .rhColorScene .rhSculpture[data-shape-id="orbTwo"]::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    background:
                        radial-gradient(ellipse 20% 15% at var(--surface-specular-x,50%) var(--surface-specular-y,50%), rgba(255,253,254,.76) 0%, rgba(255,253,254,.34) 34%, transparent 72%),
                        radial-gradient(ellipse 72% 66% at var(--surface-light-x,50%) var(--surface-light-y,50%), rgba(246,199,232,.23) 0%, rgba(217,203,255,.17) 42%, transparent 80%),
                        radial-gradient(ellipse 66% 76% at var(--surface-opposite-x,50%) var(--surface-opposite-y,50%), rgba(189,238,255,.22) 0%, rgba(169,217,255,.16) 40%, transparent 80%),
                        radial-gradient(ellipse 108% 108% at 50% 50%, transparent 60%, rgba(189,238,255,.13) 84%, rgba(246,199,232,.10) 100%);
                    box-shadow: inset 0 0 0 1px rgba(255,253,254,.30);
                    mix-blend-mode: screen;
                    filter: saturate(1.03);
                    opacity: var(--surface-light-strength,0);
                    transition: opacity var(--reveal-duration) ease;
                    will-change: opacity;
                }
                .rhColorScene::before {
                    content: "";
                    position: absolute;
                    z-index: 2;
                    inset: -10%;
                    pointer-events: none;
                    background:
                        radial-gradient(ellipse 80% 90% at 8% 38%, rgba(127,231,255,.84) 0%, rgba(195,139,255,.58) 49%, transparent 91%),
                        radial-gradient(ellipse 86% 86% at 49% 47%, rgba(255,95,210,.78) 0%, rgba(195,139,255,.7) 43%, rgba(90,168,255,.4) 74%, transparent 98%),
                        radial-gradient(ellipse 78% 90% at 93% 42%, rgba(90,168,255,.84) 0%, rgba(127,231,255,.68) 36%, rgba(248,87,200,.54) 64%, transparent 93%),
                        radial-gradient(ellipse 98% 58% at 50% 104%, rgba(195,139,255,.76) 0%, rgba(90,168,255,.58) 58%, transparent 96%);
                    mix-blend-mode: color;
                    opacity: .9;
                }
                .rhColorScene::after {
                    content: "";
                    position: absolute;
                    z-index: 3;
                    inset: -9%;
                    pointer-events: none;
                    background:
                        radial-gradient(ellipse 48% 56% at 65% 47%, rgba(255,95,210,.78) 0%, rgba(195,139,255,.5) 36%, transparent 82%),
                        radial-gradient(ellipse 46% 60% at 78% 52%, rgba(90,168,255,.76) 0%, rgba(127,231,255,.4) 40%, transparent 84%),
                        radial-gradient(ellipse 58% 64% at 52% 52%, rgba(248,87,200,.38) 0%, rgba(195,139,255,.24) 48%, transparent 90%);
                    mix-blend-mode: screen;
                    filter: blur(28px) saturate(1.22);
                    opacity: .86;
                }
                                .rhAtmosphere {

                    position: absolute;

                    inset: 0;

                    background:

                        radial-gradient(circle at 50% 43%, rgba(255,255,255,.98) 0%, rgba(249,249,248,.82) 28%, transparent 58%),

                        radial-gradient(circle at 63% 43%, var(--pinkLight) 0%, transparent 22%),

                        radial-gradient(circle at 82% 49%, var(--blueLight) 0%, transparent 25%),

                        radial-gradient(circle at 71% 63%, var(--violetLight) 0%, transparent 22%),

                        linear-gradient(145deg, var(--bgStart) 0%, var(--bgMiddle) 47%, var(--bgEnd) 100%);

                }

                .rhAtmosphere::after {

                    content: "";

                    position: absolute;

                    inset: 0;

                    background: linear-gradient(180deg, rgba(255,255,255,.26), transparent 32%, rgba(80,82,86,.08));

                    mix-blend-mode: soft-light;

                }

                .rhSculpture {

                    position: absolute;

                    translate: calc(var(--shape-offset-x, 0px) + var(--float-x, 0px)) calc(var(--shape-offset-y, 0px) + var(--float-y, 0px));

                    scale: var(--shape-scale, 1);

                    transform-origin: center;

                    background:

                        radial-gradient(circle at 34% 24%, rgba(255,255,255,.9) 0%, transparent 24%),

                        radial-gradient(circle at 54% 44%, var(--pinkLight) 0%, transparent 31%),

                        radial-gradient(circle at 78% 67%, var(--blueLight) 0%, transparent 34%),

                        radial-gradient(circle at 43% 79%, var(--violetLight) 0%, transparent 28%),

                        linear-gradient(145deg, var(--surfaceHigh) 2%, var(--surfaceMid) 50%, var(--surfaceLow) 100%);

                    box-shadow:

                        inset 22px 24px 42px rgba(255,255,255,.52),

                        inset -28px -34px 52px rgba(72,74,79,.18),

                        0 34px 70px var(--castShadow);

                    filter: saturate(.94);

                    will-change: opacity;

                }

                .rhSculpture[data-shape-id="left"] { --shape-offset-x: var(--shape-left-x); --shape-offset-y: var(--shape-left-y); --shape-scale: var(--shape-left-scale); }

                .rhSculpture[data-shape-id="top"] { --shape-offset-x: var(--shape-top-x); --shape-offset-y: var(--shape-top-y); --shape-scale: var(--shape-top-scale); }

                .rhSculpture[data-shape-id="right"] { --shape-offset-x: var(--shape-right-x); --shape-offset-y: var(--shape-right-y); --shape-scale: var(--shape-right-scale); }

                .rhSculpture[data-shape-id="bottom"] { --shape-offset-x: var(--shape-bottom-x); --shape-offset-y: var(--shape-bottom-y); --shape-scale: var(--shape-bottom-scale); }

                .rhSculpture[data-shape-id="orbOne"] { --shape-offset-x: var(--shape-orbOne-x); --shape-offset-y: var(--shape-orbOne-y); --shape-scale: var(--shape-orbOne-scale); }

                .rhSculpture[data-shape-id="orbTwo"] { --shape-offset-x: var(--shape-orbTwo-x); --shape-offset-y: var(--shape-orbTwo-y); --shape-scale: var(--shape-orbTwo-scale); }

                .rhSculpture[data-shape-id="orbThree"] { --shape-offset-x: var(--shape-orbThree-x); --shape-offset-y: var(--shape-orbThree-y); --shape-scale: var(--shape-orbThree-scale); }

                .rhSculpture[data-shape-id="orbFour"] { --shape-offset-x: var(--shape-orbFour-x); --shape-offset-y: var(--shape-orbFour-y); --shape-scale: var(--shape-orbFour-scale); }
                .rhSculpture[data-shape-id="right"] {
                    background:
                        radial-gradient(ellipse 31% 24% at 34% 24%, rgba(255,255,255,.9) 0%, transparent 100%),
                        radial-gradient(circle at 54% 44%, var(--pinkLight) 0%, transparent 31%),
                        radial-gradient(circle at 78% 67%, var(--blueLight) 0%, transparent 34%),
                        radial-gradient(circle at 43% 79%, var(--violetLight) 0%, transparent 28%),
                        linear-gradient(145deg, var(--surfaceHigh) 2%, var(--surfaceMid) 50%, var(--surfaceLow) 100%);
                }
                .rhColorScene .rhSculpture[data-shape-id="right"] {
                    background:
                        radial-gradient(ellipse 31% 24% at 27% 28%, rgba(255,253,254,.24) 0%, rgba(246,199,232,.22) 38%, transparent 78%),
                        radial-gradient(ellipse 78% 84% at 78% 68%, rgba(189,238,255,.58) 0%, rgba(169,217,255,.46) 38%, rgba(217,203,255,.32) 66%, transparent 88%),
                        linear-gradient(142deg, #f8d8ef 0%, #ddc9f8 38%, #c7e4ff 72%, #a9d9ff 100%);
                }

                .relightingHero.isEditingShapes {

                    user-select: none;

                    -webkit-user-select: none;

                }

                .rhShapeEditorLayer {

                    position: absolute;

                    inset: 0;

                    z-index: 8;

                    overflow: hidden;

                    pointer-events: none;

                }

                .rhShapeHit {

                    position: absolute;

                    box-sizing: border-box;

                    min-width: 24px;

                    min-height: 24px;

                    border: 1px dashed rgba(67,157,255,.34);

                    border-radius: 10px;

                    background: rgba(67,157,255,.018);

                    cursor: move;

                    pointer-events: auto;

                    touch-action: none;

                    transition: border-color .14s ease, background-color .14s ease, box-shadow .14s ease;

                }

                .rhShapeHit:hover {

                    border-color: rgba(67,157,255,.72);

                    background: rgba(67,157,255,.035);

                }

                .rhShapeHit.isSelected {

                    border: 1.5px solid #439dff;

                    background: rgba(67,157,255,.05);

                    box-shadow: 0 0 0 1px rgba(255,255,255,.75), 0 8px 30px rgba(67,157,255,.16);

                }

                .rhShapeResizeHandle {

                    position: absolute;

                    right: -7px;

                    bottom: -7px;

                    width: 14px;

                    height: 14px;

                    padding: 0;

                    border: 2px solid white;

                    border-radius: 3px;

                    background: #439dff;

                    box-shadow: 0 2px 8px rgba(32,33,36,.22);

                    cursor: nwse-resize;

                    pointer-events: auto;

                    touch-action: none;

                }

                .rhShapeEditorPanel {

                    position: absolute;

                    top: 14px;

                    left: 50%;

                    z-index: 9;

                    display: flex;

                    align-items: center;

                    gap: 10px;

                    max-width: calc(100% - 28px);

                    padding: 8px 10px 8px 13px;

                    border: 1px solid rgba(32,33,36,.12);

                    border-radius: 999px;

                    color: #202124;

                    background: rgba(255,255,255,.9);

                    box-shadow: 0 9px 30px rgba(32,33,36,.14);

                    backdrop-filter: blur(14px);

                    transform: translateX(-50%);

                    font: 600 11px/1.2 Inter, "Helvetica Neue", Arial, sans-serif;

                    white-space: nowrap;

                    pointer-events: auto;

                }

                .rhShapeEditorName { font-weight: 700; }

                .rhShapeEditorValues { color: #676b73; font-variant-numeric: tabular-nums; }

                .rhShapeEditorAction {

                    padding: 5px 8px;

                    border: 0;

                    border-radius: 999px;

                    color: white;

                    background: #202124;

                    font: inherit;

                    cursor: pointer;

                }

                .rhShapeEditorAction.secondary { color: #202124; background: #eceef2; }

                .rhShapeEditorStatus { color: #2f7be5; }

                .rhBlobLeft {

                    width: clamp(300px,32vw,520px);

                    height: clamp(540px,76vh,840px);

                    left: clamp(-260px,-14vw,-140px);

                    top: clamp(-210px,-16vh,-80px);

                    border-radius: 28% 72% 76% 24% / 20% 36% 64% 80%;

                    transform: rotate(17deg);

                }

                .rhArchTop {

                    width: clamp(270px,28vw,470px);

                    height: clamp(300px,45vh,510px);

                    left: 48%;

                    top: clamp(-330px,-31vh,-190px);

                    border-radius: 18% 82% 57% 43% / 68% 24% 76% 32%;

                    transform: translateX(-50%) rotate(-11deg);

                }

                .rhBlobRight {

                    width: clamp(330px,36vw,610px);

                    height: clamp(410px,61vh,670px);

                    right: clamp(-300px,-18vw,-155px);

                    top: 26%;

                    border-radius: 78% 22% 34% 66% / 19% 58% 42% 81%;

                    transform: rotate(-9deg);

                }

                .rhWaveBottom {

                    width: clamp(510px,68vw,1040px);

                    height: clamp(230px,38vh,410px);

                    left: 26%;

                    bottom: clamp(-290px,-24vh,-135px);

                    border-radius: 74% 26% 63% 37% / 82% 67% 33% 18%;

                    transform: translateX(-32%) rotate(-8deg);

                }

                .rhOrb { border-radius: 64% 36% 58% 42% / 39% 61% 39% 61%; }

                .rhOrbOne { width: clamp(92px,11vw,166px); aspect-ratio: 1; left: 29%; top: 12%; border-radius: 69% 31% 57% 43% / 36% 66% 34% 64%; transform: rotate(-10deg) scale(1.04,.93); }

                .rhOrbTwo { width: clamp(52px,6vw,94px); aspect-ratio: 1; left: 29%; bottom: 10%; border-radius: 73% 27% 41% 59% / 31% 63% 37% 69%; transform: rotate(22deg) scale(.91,1.08); }

                .rhOrbThree { width: clamp(72px,8vw,126px); aspect-ratio: 1; right: 29%; bottom: 15%; border-radius: 37% 63% 71% 29% / 62% 34% 66% 38%; transform: rotate(-18deg) scale(1.06,.92); }

                .rhOrbFour { width: clamp(118px,14vw,210px); aspect-ratio: 1; right: 7%; bottom: -5%; border-radius: 62% 38% 31% 69% / 43% 68% 32% 57%; transform: rotate(12deg) scale(.94,1.05); }



                .rhNav { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: clamp(24px,4vw,60px) clamp(20px,4.4vw,64px); z-index: 1; }

                .rhMark, .rhNav a { color: inherit; text-decoration: none; }

                .rhMark { font-size: clamp(16px,1.55vw,22px); font-weight: 600; letter-spacing: -.02em; white-space: nowrap; }

                .rhLinks { display: flex; align-items: center; gap: clamp(18px,3vw,48px); margin: 0; padding: 0; list-style: none; }

                .rhLinks span { color: var(--muted); font-size: clamp(12px,1vw,15px); font-weight: 500; transition: color .18s ease; }

                .rhLinks li:hover span { color: var(--text); }

                .rhContent { align-self: center; display: flex; flex-direction: column; align-items: center; width: min(92%,1216px); margin: -24px auto 0; padding: 32px 16px; text-align: center; z-index: 1; }

                                .rhEyebrow { margin: 0 0 clamp(7px,1vh,12px); font-family: var(--rh-eyebrow-font, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif); font-size: clamp(13px,1.15vw,17px); font-weight: 650; letter-spacing: .38em; text-indent: .38em; }

                .rhTitle { position: relative; margin: 0; color: var(--text); font-size: clamp(36px,5.6vw,74px); font-weight: 680; line-height: .98; letter-spacing: -.035em; text-wrap: balance; }

                .rhTitle { padding: 0.28em 0.1em 0.46em; }

                .rhTitle span, .rhSubtitle span { display: block; }

                .rhTitle span { white-space: pre-line; }
                    .rhTitle span:last-child { font-family: var(--rh-desc-font, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif); font-weight: 680; letter-spacing: -.028em; font-size: calc(var(--rh-desc, 0.62) * 1em); line-height: 1.15; white-space: normal; text-wrap: balance; }

                .rhTitle span:first-child { font-size: calc(var(--rh-wordmark, 2.1) * 1em); line-height: 0.95; letter-spacing: -.045em; margin-bottom: 0.09em; }


                @supports ((-webkit-background-clip: text) or (background-clip: text)) {

                    .rhTitle {

                        background-image: radial-gradient(circle var(--title-reveal-radius) at var(--title-mouse-x) var(--title-mouse-y), #F857C8 0%, #B58CFF 30%, #439DFF 56%, #75DDFF 72%, var(--text) 100%);

                        background-repeat: no-repeat;

                        background-clip: text;

                        -webkit-background-clip: text;

                        color: transparent;

                        -webkit-text-fill-color: transparent;

                    }

                }

                .rhSubtitle { display: flex; flex-direction: column; align-items: center; margin: clamp(10px,1.6vh,20px) 0 0; color: var(--muted); font-size: clamp(16px,1.55vw,22px); font-weight: 430; line-height: 1.38; letter-spacing: -.025em; }

                .rhSubtitle span { display: block; }

                .rhSubtitle span + span::before { content: none; }

                .rhCta { display: inline-flex; align-items: center; justify-content: center; gap: 20px; min-width: 172px; margin-top: clamp(29px,4.5vh,48px); padding: 15px 22px; border-radius: 999px; color: var(--buttonText); background: var(--button); box-shadow: 0 10px 29px rgba(25,25,27,.13); font-size: 14px; font-weight: 520; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease, filter .18s ease; }

                .rhCta:hover, .rhCta:focus-visible { transform: translateY(-2px); box-shadow: 0 14px 35px rgba(25,25,27,.2); filter: brightness(.78); }

                .rhArrow { font-size: 1.1em; transition: transform .18s ease; }

                .rhCta:hover .rhArrow { transform: translateX(3px); }

                .rhActions { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; margin-top: clamp(29px,4.5vh,48px); }

                .rhActions .rhCta { margin-top: 0; }

                .rhAppCta { display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 15px 24px; border-radius: 999px; border: 1px solid rgba(25,25,27,.16); background: rgba(255,255,255,.62); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); color: var(--text); font: inherit; font-size: 14px; font-weight: 560; cursor: pointer; transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease; }

                .rhAppCta:hover, .rhAppCta:focus-visible { transform: translateY(-2px); background: rgba(255,255,255,.9); border-color: rgba(25,25,27,.28); box-shadow: 0 12px 26px rgba(25,25,27,.1); }

                .rhPlay { width: 0; height: 0; margin-left: 2px; border-left: 8px solid currentColor; border-top: 5.5px solid transparent; border-bottom: 5.5px solid transparent; }

                .rhAppModal { position: fixed; inset: 0; z-index: 60; display: flex; align-items: center; justify-content: center; padding: clamp(14px,4vw,48px); background: rgba(10,14,26,.62); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); }

                .rhAppFrame { position: relative; width: min(1100px,100%); border-radius: 20px; overflow: hidden; background: #0D1224; box-shadow: 0 40px 120px rgba(8,12,24,.45); }

                .rhAppFrame video { display: block; width: 100%; height: auto; }

                .rhAppClose { position: absolute; top: 10px; right: 10px; z-index: 2; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; border: 0; border-radius: 50%; background: rgba(255,255,255,.92); color: #16265C; font-size: 20px; line-height: 1; cursor: pointer; }

                .rhSupporting { justify-self: center; margin: 0; padding: 24px 16px clamp(24px,4vw,48px); color: var(--muted); font-size: clamp(10px,.8vw,12px); font-weight: 520; line-height: 1.5; letter-spacing: .29em; text-align: center; z-index: 1; }

                .relightingHero :focus-visible { outline: 2px solid var(--text); outline-offset: 4px; }

                @media (max-width: 720px) {

                    .rhBlobLeft { left: -225px; top: -160px; width: 330px; height: 610px; }

                    .rhArchTop { left: 72%; top: -240px; width: 290px; height: 380px; }

                    .rhBlobRight { right: -255px; top: 31%; width: 360px; height: 500px; }

                    .rhWaveBottom { left: 42%; bottom: -215px; width: 570px; height: 300px; }

                    .rhOrbOne { width: 82px; left: 72%; top: 16%; }

                    .rhOrbTwo { width: 58px; left: 10%; bottom: 11%; }

                    .rhOrbThree { width: 72px; right: 12%; bottom: 14%; }

                    .rhOrbFour { display: none; }

                    .rhNav { align-items: flex-start; padding-top: 22px; }

                    .rhLinks { gap: 16px; }

                    .rhLinks li:nth-child(3), .rhLinks li:nth-child(4), .rhLinks li:nth-child(5), .rhLinks li:nth-child(6) { display: none; }

                    .rhContent { width: min(100%,608px); margin-top: -4px; padding-inline: 20px; }

                    .rhTitle { font-size: clamp(26px,6vw,40px); line-height: 1.02; letter-spacing: -.01em; }

                    .rhSubtitle { max-width: 464px; }

                }

                @media (max-width: 430px) {

                    .rhNav { padding-inline: 16px; }

                    .rhMark { font-size: 14px; }

                    .rhLinks { gap: 12px; }

                    .rhLinks a { font-size: 11px; }

                    .rhEyebrow { letter-spacing: .3em; text-indent: .3em; }

                    .rhTitle { font-size: clamp(21px,6.6vw,27px); }

                    .rhSubtitle span { display: block; }

                    .rhSubtitle span + span::before { content: none; }

                    .rhSupporting { max-width: 90%; letter-spacing: .2em; }

                }

                @media (hover: none), (pointer: coarse) {

                    .rhTitle { background-image: none; color: var(--text); -webkit-text-fill-color: currentColor; }

                }

                @media (prefers-reduced-motion: reduce) { .rhLinks a, .rhCta, .rhArrow, .rhColorScene { transition: none; } }

            `}),/*#__PURE__*/ p(ao,{className:`rhGrayScene`,style:{opacity:1}}),/*#__PURE__*/ p(ao,{className:`rhColorScene`,style:Nt}),j&&/*#__PURE__*/ f(l,{children:[/*#__PURE__*/ p(`div`,{className:`rhShapeEditorLayer`,"aria-label":`Shape position editor`,children:co.map(({id:e,label:t})=>{let n=St[e];if(!n)return null;let r=gt===e;return/*#__PURE__*/ p(`div`,{className:`rhShapeHit${r?` isSelected`:``}`,style:{left:n.left,top:n.top,width:n.width,height:n.height},role:`button`,tabIndex:0,"aria-label":`Drag ${t}`,onPointerDown:t=>I(t,e,`move`),onPointerMove:Dt,onPointerUp:Ot,onPointerCancel:Ot,children:r&&/*#__PURE__*/ p(`button`,{className:`rhShapeResizeHandle`,type:`button`,"aria-label":`Resize ${t}`,onPointerDown:t=>I(t,e,`scale`),onPointerMove:Dt,onPointerUp:Ot,onPointerCancel:Ot})},e)})}),/*#__PURE__*/ f(`div`,{className:`rhShapeEditorPanel`,role:`status`,children:[/*#__PURE__*/ p(`span`,{className:`rhShapeEditorName`,children:L.label}),/*#__PURE__*/ f(`span`,{className:`rhShapeEditorValues`,children:[`X `,kt.x,`% · Y `,kt.y,`% · S `,kt.scale]}),/*#__PURE__*/ p(`button`,{className:`rhShapeEditorAction`,type:`button`,onClick:R,children:`Copy`}),/*#__PURE__*/ p(`button`,{className:`rhShapeEditorAction secondary`,type:`button`,onClick:At,children:`Copy All`}),/*#__PURE__*/ p(`button`,{className:`rhShapeEditorAction secondary`,type:`button`,onClick:()=>{ht(dt),yt(`Preview reset`)},children:`Reset`}),vt&&/*#__PURE__*/ p(`span`,{className:`rhShapeEditorStatus`,children:vt})]})]}),/*#__PURE__*/ f(`header`,{className:`rhNav`,children:[/*#__PURE__*/ p(`span`,{className:`rhMark`,children:t}),/*#__PURE__*/ p(`nav`,{"aria-label":`Primary navigation`,children:/*#__PURE__*/ p(`ul`,{className:`rhLinks`,children:ut.map(e=>/*#__PURE__*/ p(`li`,{children:/*#__PURE__*/ p(`span`,{children:e.label})},e.label))})})]}),/*#__PURE__*/ f(`main`,{className:`rhContent`,style:at,children:[/*#__PURE__*/ p(`p`,{className:`rhEyebrow`,children:n}),/*#__PURE__*/ f(`h1`,{ref:st,className:`rhTitle`,style:it,children:[/*#__PURE__*/ p(`span`,{children:r}),/*#__PURE__*/ p(`span`,{children:u.replace(/\s+/g,` `).trim()})]}),/*#__PURE__*/ f(`p`,{className:`rhSubtitle`,children:[/*#__PURE__*/ p(`span`,{children:d}),/*#__PURE__*/ p(`span`,{children:m})]}),/*#__PURE__*/ f(`div`,{className:`rhActions`,children:[/*#__PURE__*/ f(`button`,{className:`rhAppCta`,type:`button`,onClick:()=>rt(!0),children:[/*#__PURE__*/ p(`span`,{className:`rhPlay`,"aria-hidden":`true`}),/*#__PURE__*/ p(`span`,{children:_})]}),/*#__PURE__*/ f(`a`,{className:`rhCta`,href:g,onClick:lt,children:[/*#__PURE__*/ p(`span`,{children:h}),/*#__PURE__*/ p(`span`,{className:`rhArrow`,"aria-hidden":`true`,children:`↓`})]})]})]}),/*#__PURE__*/ p(`p`,{className:`rhSupporting`,style:at,children:ne}),nt?/*#__PURE__*/ p(`div`,{className:`rhAppModal`,role:`dialog`,"aria-modal":`true`,"aria-label":`Application video`,onClick:()=>rt(!1),onWheel:e=>e.stopPropagation(),children:/*#__PURE__*/ f(`div`,{className:`rhAppFrame`,onClick:e=>e.stopPropagation(),children:[/*#__PURE__*/ p(`button`,{className:`rhAppClose`,type:`button`,onClick:()=>rt(!1),"aria-label":`Close`,children:`×`}),/*#__PURE__*/ p(`video`,{src:y,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0,preload:`metadata`})]})}):null]})}var so,co,lo;function uo(){return(uo=e((()=>{r(),h(),g(),ne(),so={application:`Application`,github:`GitHub`,huggingFace:`Hugging Face`,demo:`Interactive Demo`,arxiv:`ArXiv`,connect:`Connect`},co=[{id:`left`,label:`Left Fluid`},{id:`top`,label:`Top Fluid`},{id:`right`,label:`Right Fluid`},{id:`bottom`,label:`Bottom Fluid`},{id:`orbOne`,label:`Orb One`},{id:`orbTwo`,label:`Orb Two`},{id:`orbThree`,label:`Orb Three`},{id:`orbFour`,label:`Orb Four`}],lo=(e,t,n,r,i,a,o,s)=>`radial-gradient(circle ${e.toFixed(1)}px at ${t} ${n}, rgba(0,0,0,${r.toFixed(3)}) 0%, rgba(0,0,0,${r.toFixed(3)}) ${i}%, rgba(0,0,0,${(r*.85).toFixed(3)}) ${a}%, rgba(0,0,0,${(r*.55).toFixed(3)}) ${o}%, rgba(0,0,0,${(r*.2).toFixed(3)}) ${s}%, rgba(0,0,0,0) 100%)`,fe(oo,{headingFont:{type:C.Font,title:`Heading Font`,controls:`extended`,defaultFontType:`sans-serif`,displayFontSize:!1,displayTextAlignment:!1,defaultValue:{variant:`Bold`}},bodyFont:{type:C.Font,title:`Body Font`,controls:`extended`,defaultFontType:`sans-serif`,displayFontSize:!1,displayTextAlignment:!1,defaultValue:{variant:`Regular`}},wordmarkScale:{type:C.Number,title:`Wordmark Size`,defaultValue:2.1,min:1,max:4,step:.05},descScale:{type:C.Number,title:`Title Size`,defaultValue:.62,min:.3,max:1.5,step:.02},titleFont:{type:C.Font,title:`Title Font`,controls:`extended`,defaultFontType:`sans-serif`,displayFontSize:!1,displayTextAlignment:!1},eyebrowFont:{type:C.Font,title:`Eyebrow Font`,controls:`extended`,defaultFontType:`sans-serif`,displayFontSize:!1,displayTextAlignment:!1},eventName:{type:C.String,title:`Event`,defaultValue:`CVPR 2027`},eyebrow:{type:C.String,title:`Eyebrow`,defaultValue:`CVPR 2027 WORKSHOP`},titleLineOne:{type:C.String,title:`Title 1`,displayTextArea:!0,defaultValue:`LightPlug`},titleLineTwo:{type:C.String,title:`Title 2`,displayTextArea:!0,defaultValue:`Bringing out Facial Structure
in Avatar Relighting via a
Lightweight Plug-and-Play Prior`},subtitleLineOne:{type:C.String,title:`Subtitle 1`,defaultValue:`See the World`},subtitleLineTwo:{type:C.String,title:`Subtitle 2`,defaultValue:`in a Different Light`},ctaLabel:{type:C.String,title:`Button`,defaultValue:`Learn More`},ctaLink:{type:C.String,title:`Button Link`,defaultValue:`#paper`},applicationLabel:{type:C.String,title:`Application Label`,defaultValue:`Application`},applicationVideoUrl:{type:C.String,title:`Application Video Url`,defaultValue:`https://framerusercontent.com/assets/SdAxc5sKnatXAPnD855HIjgUoFw.mp4`},githubLink:{type:C.Link,title:`GitHub Link`,defaultValue:`#`},huggingFaceLink:{type:C.Link,title:`Hugging Face`,defaultValue:`#`},demoLink:{type:C.Link,title:`Demo Link`,defaultValue:`#`},arxivLink:{type:C.Link,title:`ArXiv Link`,defaultValue:``},supportingText:{type:C.String,title:`Footer`,defaultValue:`CVPR 2027`},backgroundStart:{type:C.Color,title:`BG Start`,defaultValue:`#DEDEDD`},backgroundMiddle:{type:C.Color,title:`BG Middle`,defaultValue:`#F4F4F2`},backgroundEnd:{type:C.Color,title:`BG End`,defaultValue:`#D9DAD9`},textColor:{type:C.Color,title:`Text`,defaultValue:`#202124`},mutedTextColor:{type:C.Color,title:`Muted Text`,defaultValue:`#66686D`},buttonColor:{type:C.Color,title:`Button Fill`,defaultValue:`#2D2E30`},buttonTextColor:{type:C.Color,title:`Button Text`,defaultValue:`#F7F7F5`},showColorScene:{type:C.Boolean,title:`Show Color Scene`,defaultValue:!1,enabledTitle:`Color`,disabledTitle:`Gray`},fluorescenceIntensity:{type:C.Number,title:`Fluorescence Intensity`,defaultValue:1.25,min:0,max:2,step:.05},iridescenceIntensity:{type:C.Number,title:`Iridescence Intensity`,defaultValue:1.15,min:0,max:2,step:.05},specularIntensity:{type:C.Number,title:`Specular Intensity`,defaultValue:1.1,min:0,max:2,step:.05},colorSaturation:{type:C.Number,title:`Color Saturation`,defaultValue:1.25,min:.5,max:2,step:.05},enablePointerReveal:{type:C.Boolean,title:`Pointer Reveal`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},revealRadius:{type:C.Number,title:`Reveal Radius`,defaultValue:180,min:100,max:350,step:10,unit:`px`,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},revealSoftness:{type:C.Number,title:`Reveal Softness`,defaultValue:.7,min:0,max:1,step:.05,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},followSmoothness:{type:C.Number,title:`Follow Smooth`,defaultValue:.16,min:.05,max:.4,step:.01,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},trailCount:{type:C.Number,title:`Trail Count`,defaultValue:4,min:0,max:8,step:1,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},trailSpacing:{type:C.Number,title:`Trail Spacing`,defaultValue:.4,min:.3,max:2.5,step:.05,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},trailSizeFalloff:{type:C.Number,title:`Trail Size`,defaultValue:.82,min:.4,max:1,step:.02,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},trailFade:{type:C.Number,title:`Trail Fade`,defaultValue:.75,min:.2,max:1,step:.02,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},enableFloat:{type:C.Boolean,title:`Float`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},floatDistance:{type:C.Number,title:`Float Drift`,defaultValue:18,min:0,max:60,step:1,unit:`px`,hidden:({enableFloat:e})=>!e},floatSpeed:{type:C.Number,title:`Float Speed`,defaultValue:.35,min:.05,max:1.5,step:.05,hidden:({enableFloat:e})=>!e},enableRepel:{type:C.Boolean,title:`Repel`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},repelAmount:{type:C.Number,title:`Repel Push`,defaultValue:18,min:0,max:60,step:1,unit:`px`,hidden:({enableRepel:e})=>!e},repelRange:{type:C.Number,title:`Repel Range`,defaultValue:240,min:40,max:600,step:10,unit:`px`,hidden:({enableRepel:e})=>!e},fadeInDuration:{type:C.Number,title:`Fade In`,defaultValue:200,min:0,max:800,step:10,unit:`ms`,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},fadeOutDuration:{type:C.Number,title:`Fade Out`,defaultValue:300,min:0,max:1e3,step:10,unit:`ms`,hidden:({showColorScene:e,enablePointerReveal:t})=>e||!t},editShapes:{type:C.Boolean,title:`Edit Shapes`,defaultValue:!1,enabledTitle:`Edit`,disabledTitle:`Off`},leftX:{type:C.Number,title:`Left X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},leftY:{type:C.Number,title:`Left Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},leftScale:{type:C.Number,title:`Left Scale`,defaultValue:1,min:.25,max:3,step:.05},topX:{type:C.Number,title:`Top X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},topY:{type:C.Number,title:`Top Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},topScale:{type:C.Number,title:`Top Scale`,defaultValue:1,min:.25,max:3,step:.05},rightX:{type:C.Number,title:`Right X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},rightY:{type:C.Number,title:`Right Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},rightScale:{type:C.Number,title:`Right Scale`,defaultValue:1,min:.25,max:3,step:.05},bottomX:{type:C.Number,title:`Bottom X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},bottomY:{type:C.Number,title:`Bottom Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},bottomScale:{type:C.Number,title:`Bottom Scale`,defaultValue:1,min:.25,max:3,step:.05},orbOneX:{type:C.Number,title:`Orb 1 X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbOneY:{type:C.Number,title:`Orb 1 Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbOneScale:{type:C.Number,title:`Orb 1 Scale`,defaultValue:1,min:.25,max:3,step:.05},orbTwoX:{type:C.Number,title:`Orb 2 X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbTwoY:{type:C.Number,title:`Orb 2 Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbTwoScale:{type:C.Number,title:`Orb 2 Scale`,defaultValue:1,min:.25,max:3,step:.05},orbThreeX:{type:C.Number,title:`Orb 3 X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbThreeY:{type:C.Number,title:`Orb 3 Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbThreeScale:{type:C.Number,title:`Orb 3 Scale`,defaultValue:1,min:.25,max:3,step:.05},orbFourX:{type:C.Number,title:`Orb 4 X`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbFourY:{type:C.Number,title:`Orb 4 Y`,defaultValue:0,min:-100,max:100,step:.5,unit:`%`},orbFourScale:{type:C.Number,title:`Orb 4 Scale`,defaultValue:1,min:.25,max:3,step:.05}})})))()}function fo(e,t){return{breakpoints:[{hash:`72rtr7`,mediaQuery:`(min-width: 1200px)`},{hash:`xzl73z`,mediaQuery:`(min-width: 810px) and (max-width: 1199.98px)`},{hash:`1gmc613`,mediaQuery:`(max-width: 809.98px)`}],description:`CVPR 2027 workshop on physical appearance modeling and relighting in the age of generative AI.`,elements:{wb2dQUcX1:`paper`},robots:`max-image-preview:large`,serializationId:`framer-1CIKG`,title:`See the World in a Different Light · CVPR 2027`,viewport:`width=device-width`}}var po,mo;function ho(){return(ho=e((()=>{po=1,mo={exports:{default:{type:`function`,annotations:{framerContractVersion:`1`}},metadataVersion:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})))()}var go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do;function Oo(){return(Oo=e((()=>{h(),ne(),x(),g(),ro(),uo(),ho(),go=oe(oo),_o=oe($a),vo={IGnikc_rZ:`(max-width: 809.98px)`,UJ2Gyj_CB:`(min-width: 810px) and (max-width: 1199.98px)`,WQLkyLRf1:`(min-width: 1200px)`},yo=[`title-2`],bo=`framer-1CIKG`,xo={IGnikc_rZ:`framer-v-1gmc613`,UJ2Gyj_CB:`framer-v-xzl73z`,WQLkyLRf1:`framer-v-72rtr7`},So=(e,t,n)=>e&&t?`position`:n,Co={Desktop:`WQLkyLRf1`,Phone:`IGnikc_rZ`,Tablet:`UJ2Gyj_CB`},wo=({value:e})=>ce()?null:/*#__PURE__*/ p(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),To=({height:e,id:t,width:n,...r})=>({...r,variant:Co[r.variant]??r.variant??`WQLkyLRf1`}),Eo=le(/* @__PURE__ */ m(function(e,r){let i=c(null),a=r??i;n();let{activeLocale:o,contentLocale:s,setLocale:l}=re();te();let{style:d,className:m,layoutId:h,variant:g,..._}=To(e),v=u(()=>fo({},s),[s]);ae(v);let[x,ne]=se(g,vo,!1),oe=S(bo),ce=t(ue)?.isLayoutTemplate,le=!!t(y)?.transition?.layout,fe=So(ce,le),me=ge(`wb2dQUcX1`),he=c(null);return ie({}),/*#__PURE__*/ p(ue.Provider,{value:{activeVariantId:x,humanReadableVariantMap:Co,primaryVariantId:`WQLkyLRf1`,variantClassNames:xo},children:/*#__PURE__*/ f(b,{id:h??`augiA20Il`,children:[/*#__PURE__*/ p(wo,{value:`html body { background: rgb(244, 244, 242); }`}),/*#__PURE__*/ f(ee.div,{..._,className:S(oe,`framer-72rtr7`,m),ref:a,style:{...d},children:[/*#__PURE__*/ p(_e,{children:/*#__PURE__*/ p(pe,{className:`framer-alcfvf-container`,"data-code-component-plugin-id":`api`,id:`alcfvf`,isAuthoredByUser:!0,layout:fe,nodeId:`loEfspV85`,scopeId:`augiA20Il`,children:/*#__PURE__*/ p(de,{breakpoint:x,overrides:{UJ2Gyj_CB:{followSmoothness:.2,leftX:3,revealRadius:180,revealSoftness:.9}},children:/*#__PURE__*/ p(oo,{applicationLabel:`Application`,applicationVideoUrl:`https://framerusercontent.com/assets/SdAxc5sKnatXAPnD855HIjgUoFw.mp4`,backgroundEnd:`rgb(217, 218, 217)`,backgroundMiddle:`rgb(244, 244, 242)`,backgroundStart:`rgb(222, 222, 221)`,bodyFont:{fontFamily:`"Inter", "Inter Placeholder", sans-serif`,fontStyle:`normal`,fontWeight:400,letterSpacing:`0em`,lineHeight:`1em`},bottomScale:1.15,bottomX:3,bottomY:-2,buttonColor:`rgb(45, 46, 48)`,buttonTextColor:`rgb(247, 247, 245)`,colorSaturation:1.25,ctaLabel:`Learn More`,ctaLink:`#paper`,demoLink:`#`,descScale:.44,editShapes:!1,enableFloat:!0,enablePointerReveal:!0,enableRepel:!0,eventName:`CVPR 2027`,eyebrow:`Face Relight`,eyebrowFont:{fontFamily:`"DM Retrograde", "DM Retrograde Placeholder", sans-serif`,fontStyle:`normal`,fontWeight:400,letterSpacing:`0em`,lineHeight:`1em`},fadeInDuration:260,fadeOutDuration:350,floatDistance:18,floatSpeed:.35,fluorescenceIntensity:1.25,followSmoothness:.22,githubLink:`#`,headingFont:{fontFamily:`"Climate Crisis", "Climate Crisis Placeholder", sans-serif`,fontStyle:`normal`,fontWeight:400,letterSpacing:`0em`,lineHeight:`1em`},height:`100%`,huggingFaceLink:`#`,id:`loEfspV85`,iridescenceIntensity:1.15,layoutId:`loEfspV85`,leftScale:1,leftX:4.5,leftY:15,mutedTextColor:`rgb(102, 104, 109)`,orbFourScale:1.55,orbFourX:3,orbFourY:-2,orbOneScale:.9,orbOneX:8,orbOneY:3,orbThreeScale:1.1,orbThreeX:5.5,orbThreeY:-4.5,orbTwoScale:2.35,orbTwoX:-17,orbTwoY:-9.5,repelAmount:18,repelRange:240,revealRadius:230,revealSoftness:1,rightScale:.95,rightX:-2,rightY:-9.5,showColorScene:!1,specularIntensity:1.1,style:{height:`100%`,width:`100%`},subtitleLineOne:`See the World in a Different Light`,subtitleLineTwo:``,supportingText:`CVPR 2027`,textColor:`rgb(32, 33, 36)`,titleFont:{fontFamily:`"Days One", "Days One Placeholder", sans-serif`,fontStyle:`normal`,fontWeight:400,letterSpacing:`0em`,lineHeight:`1em`},titleLineOne:`LightPlug`,titleLineTwo:`Bringing out Facial Structure
in Avatar Relighting via a
Lightweight Plug-and-Play Prior`,topScale:.95,topX:27.5,topY:12.5,trailCount:5,trailFade:.75,trailSizeFalloff:.82,trailSpacing:.4,width:`100%`,wordmarkScale:2.15})})})}),/*#__PURE__*/ p(_e,{children:/*#__PURE__*/ p(pe,{className:`framer-va4fa3-container`,"data-code-component-plugin-id":`api`,id:me,isAuthoredByUser:!0,layout:fe,nodeId:`wb2dQUcX1`,ref:he,scopeId:`augiA20Il`,children:/*#__PURE__*/ p($a,{abstractText:``,cardOpacity:.55,demoNote:`The interactive demo can be found and tried on the Hugging Face project page.`,demoVideoUrl:`https://framerusercontent.com/assets/YLofNZUXcN07cditDOUIRbgSIHw.mp4`,explanationVideoUrl:`https://framerusercontent.com/assets/yZeJuolsolvOHqHrQX4LE57nxs.mp4`,figureUrl:`https://framerusercontent.com/images/v9kPrkEo2B7XH1n445XVn3pAZRw.png`,height:`100%`,id:`wb2dQUcX1`,kicker:`CVPR 2027 · Face Relight`,layoutId:`wb2dQUcX1`,lede:`LightPlug is a lightweight plug-and-play module, which enables cast-shadow-aware face relighting and adjust for every codec avatars.`,panelBlur:20,panelOpacity:.2,style:{width:`100%`},title:`LightPlug: Bringing out Facial Structure in Avatar Relighting via a Lightweight Plug-and-Play Prior`,width:`100%`})})})]}),/*#__PURE__*/ p(`div`,{id:`overlay`})]})})}),[`.framer-1CIKG.framer-lux5qc, .framer-1CIKG .framer-lux5qc { display: block; }`,`.framer-1CIKG.framer-72rtr7 { align-content: center; align-items: center; background-color: #f4f4f2; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-1CIKG .framer-alcfvf-container { flex: none; height: 100vh; min-height: 700px; position: relative; width: 100%; }`,`.framer-1CIKG .framer-va4fa3-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-1CIKG.framer-72rtr7 { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-1CIKG.framer-72rtr7 { width: 390px; }}`],`framer-1CIKG`),Eo.displayName=`Home`,Eo.defaultProps={height:4029,width:1200},he(Eo,[{explicitInter:!0,fonts:[{cssFamilyName:`Climate Crisis`,source:`google`,style:`normal`,uiFamilyName:`Climate Crisis`,url:`https://fonts.gstatic.com/s/climatecrisis/v15/wEOpEB3AntNeKCPBVW9XOKlmp3AUgWFN1DvIvcM0gFp6iKUrGb7PsQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`},{cssFamilyName:`Days One`,source:`google`,style:`normal`,uiFamilyName:`Days One`,url:`https://fonts.gstatic.com/s/daysone/v19/mem9YaCnxnKRiYZOCLYQeLkWVNBt.woff2`,weight:`400`},{cssFamilyName:`DM Retrograde`,source:`builtIn`,style:`normal`,uiFamilyName:`DM Retrograde`,url:`https://framerusercontent.com/assets/AsxleeWh5ZhW5L1QUxbSeyNRNLw.woff2`,weight:`400`}]},...go,..._o],{supportsExplicitInterCodegen:!0}),Do={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FrameraugiA20Il`,slots:[],annotations:{framerScrollSections:`{"wb2dQUcX1":{"pattern":":wb2dQUcX1","name":"paper"}}`,framerDisplayContentsDiv:`false`,framerLayoutTemplateFlowEffect:`true`,framerAutoSizeImages:`true`,framerImmutableVariables:`true`,framerAcceptsLayoutTemplate:`true`,framerComponentViewportWidth:`true`,framerResponsiveScreen:`true`,framerColorSyntax:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"UJ2Gyj_CB":{"layout":["fixed","auto"]},"IGnikc_rZ":{"layout":["fixed","auto"]}}}`,framerContractVersion:`1`,framerIntrinsicHeight:`4029`,framerIntrinsicWidth:`1200`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})))()}async function ko(e,t,n){let r=jo[e],i=r?await r(t,n):void 0,a={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]};for(let t of Ao){if(t.pageIds&&!t.pageIds.has(e))continue;let n=t.code(i);n&&a[t.placement].push({...t,code:n})}return a}var Ao,jo,Mo,No;function Po(){return(Po=e((()=>{Ao=[],jo={},Mo={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]},No={exports:{snippetsSorting:{type:`variable`,annotations:{framerContractVersion:`1`}},getSnippets:{type:`function`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})))()}export{Eo as a,yo as c,fo as d,po as f,Mo as i,mo as l,Qa as m,ko as n,Do as o,Za as p,Po as r,Oo as s,No as t,ho as u};
//# sourceMappingURL=shared-lib.D0B9PDkP.mjs.map