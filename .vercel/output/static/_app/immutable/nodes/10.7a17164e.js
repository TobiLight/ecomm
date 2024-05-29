import{s as T,o as S,q as V,e as F,b as N,d as J,f as j,i as d,j as O,p as U,k as h,x as C}from"../chunks/scheduler.d2feb51b.js";import{S as W,i as X,c as b,b as w,m as q,t as A,a as D,d as I,e as M}from"../chunks/index.0b5df535.js";import{s as Y}from"../chunks/index.dd350c4d.js";import{A as P}from"../chunks/AppInput.1bb30858.js";import{A as Z}from"../chunks/AppForm.f2ebff29.js";import{u as y}from"../chunks/validation.f295058f.js";function x(a){var G,H;let t,s,i,o,n,m,l,_,f,u,$,c;function k(e){a[8](e)}let p={input:{name:"name",placeholder:"John Doe",errors:a[2].name,value:(G=a[0].item)==null?void 0:G.name}};a[3].name!==void 0&&(p.value=a[3].name),s=new P({props:p}),V.push(()=>M(s,"value",k));function Q(e){a[9](e)}let z={input:{name:"email",placeholder:"name@company.com",errors:a[2].email,value:(H=a[0].item)==null?void 0:H.email}};a[3].email!==void 0&&(z.value=a[3].email),m=new P({props:z}),V.push(()=>M(m,"value",Q));function R(e){a[10](e)}let B={input:{name:"password",type:"password",placeholder:"••••••••",errors:a[2].password}};return a[3].password!==void 0&&(B.value=a[3].password),u=new P({props:B}),V.push(()=>M(u,"value",R)),{c(){t=F("div"),b(s.$$.fragment),o=N(),n=F("div"),b(m.$$.fragment),_=N(),f=F("div"),b(u.$$.fragment),this.h()},l(e){t=J(e,"DIV",{class:!0});var r=j(t);w(s.$$.fragment,r),r.forEach(d),o=O(e),n=J(e,"DIV",{});var g=j(n);w(m.$$.fragment,g),g.forEach(d),_=O(e),f=J(e,"DIV",{});var v=j(f);w(u.$$.fragment,v),v.forEach(d),this.h()},h(){U(t,"class","sm:col-span-2")},m(e,r){h(e,t,r),q(s,t,null),h(e,o,r),h(e,n,r),q(m,n,null),h(e,_,r),h(e,f,r),q(u,f,null),c=!0},p(e,r){var K,L;const g={};r&5&&(g.input={name:"name",placeholder:"John Doe",errors:e[2].name,value:(K=e[0].item)==null?void 0:K.name}),!i&&r&8&&(i=!0,g.value=e[3].name,C(()=>i=!1)),s.$set(g);const v={};r&5&&(v.input={name:"email",placeholder:"name@company.com",errors:e[2].email,value:(L=e[0].item)==null?void 0:L.email}),!l&&r&8&&(l=!0,v.value=e[3].email,C(()=>l=!1)),m.$set(v);const E={};r&4&&(E.input={name:"password",type:"password",placeholder:"••••••••",errors:e[2].password}),!$&&r&8&&($=!0,E.value=e[3].password,C(()=>$=!1)),u.$set(E)},i(e){c||(A(s.$$.fragment,e),A(m.$$.fragment,e),A(u.$$.fragment,e),c=!0)},o(e){D(s.$$.fragment,e),D(m.$$.fragment,e),D(u.$$.fragment,e),c=!1},d(e){e&&(d(t),d(o),d(n),d(_),d(f)),I(s),I(m),I(u)}}}function ee(a){let t,s;return t=new Z({props:{name:{singular:"product"},enhance:a[7],submitting:a[1],$$slots:{default:[x]},$$scope:{ctx:a}}}),{c(){b(t.$$.fragment)},l(i){w(t.$$.fragment,i)},m(i,o){q(t,i,o),s=!0},p(i,[o]){const n={};o&2&&(n.submitting=i[1]),o&2061&&(n.$$scope={dirty:o,ctx:i}),t.$set(n)},i(i){s||(A(t.$$.fragment,i),s=!0)},o(i){D(t.$$.fragment,i),s=!1},d(i){I(t,i)}}}function ae(a,t,s){let i,o,n,{data:m}=t;const{form:l,errors:_,submitting:f,enhance:u}=Y(m.form,{validators:y,taintedMessage:null});S(a,l,p=>s(3,n=p)),S(a,_,p=>s(2,o=p)),S(a,f,p=>s(1,i=p));function $(p){a.$$.not_equal(n.name,p)&&(n.name=p,l.set(n))}function c(p){a.$$.not_equal(n.email,p)&&(n.email=p,l.set(n))}function k(p){a.$$.not_equal(n.password,p)&&(n.password=p,l.set(n))}return a.$$set=p=>{"data"in p&&s(0,m=p.data)},[m,i,o,n,l,_,f,u,$,c,k]}class oe extends W{constructor(t){super(),X(this,t,ae,ee,T,{data:0})}}export{oe as component};