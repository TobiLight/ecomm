import{s as C,o as d,q as D,e as k,b as E,d as w,f as y,i as g,j as T,p as F,k as _,x as V}from"../chunks/scheduler.d2feb51b.js";import{S as X,i as j,c as h,b as $,m as b,t as v,a as A,d as q,e as M}from"../chunks/index.0b5df535.js";import{s as P}from"../chunks/index.dd350c4d.js";import{A as z}from"../chunks/AppInput.1bb30858.js";import{a as B}from"../chunks/validation.f295058f.js";import{A as G}from"../chunks/AppForm.f2ebff29.js";import{A as H}from"../chunks/AppFileInput.2be5569b.js";import{p as J}from"../chunks/stores.fb76f506.js";function K(r){var c;let a,t,s,p,i,o,u;function l(e){r[9](e)}let f={input:{name:"name",placeholder:"SuperTech X1",errors:r[2].name,value:(c=r[0].item)==null?void 0:c.name}};return r[3].name!==void 0&&(f.value=r[3].name),t=new z({props:f}),D.push(()=>M(t,"value",l)),o=new H({props:{input:{name:"image",type:"file",min:5,multiple:!0,required:!r[4].params.id,errors:r[2].image}}}),{c(){a=k("div"),h(t.$$.fragment),p=E(),i=k("div"),h(o.$$.fragment),this.h()},l(e){a=w(e,"DIV",{class:!0});var m=y(a);$(t.$$.fragment,m),m.forEach(g),p=T(e),i=w(e,"DIV",{class:!0});var n=y(i);$(o.$$.fragment,n),n.forEach(g),this.h()},h(){F(a,"class","sm:col-span-2"),F(i,"class","col-span-2")},m(e,m){_(e,a,m),b(t,a,null),_(e,p,m),_(e,i,m),b(o,i,null),u=!0},p(e,m){var I;const n={};m&5&&(n.input={name:"name",placeholder:"SuperTech X1",errors:e[2].name,value:(I=e[0].item)==null?void 0:I.name}),!s&&m&8&&(s=!0,n.value=e[3].name,V(()=>s=!1)),t.$set(n);const S={};m&20&&(S.input={name:"image",type:"file",min:5,multiple:!0,required:!e[4].params.id,errors:e[2].image}),o.$set(S)},i(e){u||(v(t.$$.fragment,e),v(o.$$.fragment,e),u=!0)},o(e){A(t.$$.fragment,e),A(o.$$.fragment,e),u=!1},d(e){e&&(g(a),g(p),g(i)),q(t),q(o)}}}function L(r){let a,t;return a=new G({props:{enhance:r[8],enctype:"multipart/form-data",name:{singular:"category",plural:"categories"},submitting:r[1],$$slots:{default:[K]},$$scope:{ctx:r}}}),{c(){h(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,p){b(a,s,p),t=!0},p(s,[p]){const i={};p&2&&(i.submitting=s[1]),p&1053&&(i.$$scope={dirty:p,ctx:s}),a.$set(i)},i(s){t||(v(a.$$.fragment,s),t=!0)},o(s){A(a.$$.fragment,s),t=!1},d(s){q(a,s)}}}function N(r,a,t){let s,p,i,o;d(r,J,n=>t(4,o=n));let{data:u}=a;const{form:l,errors:f,submitting:c,enhance:e}=P(u.form,{validators:B,taintedMessage:null});d(r,l,n=>t(3,i=n)),d(r,f,n=>t(2,p=n)),d(r,c,n=>t(1,s=n));function m(n){r.$$.not_equal(i.name,n)&&(i.name=n,l.set(i))}return r.$$set=n=>{"data"in n&&t(0,u=n.data)},[u,s,p,i,o,l,f,c,e,m]}class ee extends X{constructor(a){super(),j(this,a,N,L,C,{data:0})}}export{ee as component};
