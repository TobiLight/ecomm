import{s as se,q as z,e as v,b as Y,d as $,f as y,r as re,j as A,i as c,p as I,k as ee,l as d,w as oe,x as G,o as K,t as ie,h as pe}from"../chunks/scheduler.d2feb51b.js";import{S as le,i as ue,e as L,c as F,b as j,m as J,t as B,a as H,d as M}from"../chunks/index.0b5df535.js";import{s as me}from"../chunks/index.2ff1c7f1.js";import{A as N}from"../chunks/AppInput.1bb30858.js";import{S as de}from"../chunks/SubmitButton.dba9cb2e.js";import{u as fe}from"../chunks/validation.f295058f.js";function ce(a){let o;return{c(){o=ie("Sign up")},l(r){o=pe(r,"Sign up")},m(r,p){ee(r,o,p)},d(r){r&&c(o)}}}function _e(a){let o,r,p,s,S="Create your account",b,n,_,l,q,D,w,m,t,O,V,f,P,R,g,C,x,Q;function ae(e){a[8](e)}let T={input:{name:"name",label:"Your name",placeholder:"John doe",errors:a[0].name}};a[1].name!==void 0&&(T.value=a[1].name),l=new N({props:T}),z.push(()=>L(l,"value",ae));function te(e){a[9](e)}let U={input:{name:"email",type:"email",label:"Your email",placeholder:"name@company.com",errors:a[0].email}};a[1].email!==void 0&&(U.value=a[1].email),m=new N({props:U}),z.push(()=>L(m,"value",te));function ne(e){a[10](e)}let W={input:{name:"password",type:"password",placeholder:"••••••••",errors:a[0].password}};return a[1].password!==void 0&&(W.value=a[1].password),f=new N({props:W}),z.push(()=>L(f,"value",ne)),g=new de({props:{submitting:a[2],wFull:!0,$$slots:{default:[ce]},$$scope:{ctx:a}}}),{c(){o=v("div"),r=v("div"),p=v("div"),s=v("h1"),s.textContent=S,b=Y(),n=v("form"),_=v("div"),F(l.$$.fragment),D=Y(),w=v("div"),F(m.$$.fragment),O=Y(),V=v("div"),F(f.$$.fragment),R=Y(),F(g.$$.fragment),this.h()},l(e){o=$(e,"DIV",{class:!0});var i=y(o);r=$(i,"DIV",{class:!0});var k=y(r);p=$(k,"DIV",{class:!0});var h=y(p);s=$(h,"H1",{class:!0,"data-svelte-h":!0}),re(s)!=="svelte-t01hqi"&&(s.textContent=S),b=A(h),n=$(h,"FORM",{method:!0,class:!0});var u=y(n);_=$(u,"DIV",{});var E=y(_);j(l.$$.fragment,E),E.forEach(c),D=A(u),w=$(u,"DIV",{});var X=y(w);j(m.$$.fragment,X),X.forEach(c),O=A(u),V=$(u,"DIV",{});var Z=y(V);j(f.$$.fragment,Z),Z.forEach(c),R=A(u),j(g.$$.fragment,u),u.forEach(c),h.forEach(c),k.forEach(c),i.forEach(c),this.h()},h(){I(s,"class","text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"),I(n,"method","post"),I(n,"class","space-y-4 md:space-y-6"),I(p,"class","space-y-4 p-6 sm:p-8 md:space-y-6"),I(r,"class","w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"),I(o,"class","mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0")},m(e,i){ee(e,o,i),d(o,r),d(r,p),d(p,s),d(p,b),d(p,n),d(n,_),J(l,_,null),d(n,D),d(n,w),J(m,w,null),d(n,O),d(n,V),J(f,V,null),d(n,R),J(g,n,null),C=!0,x||(Q=oe(a[6].call(null,n)),x=!0)},p(e,[i]){const k={};i&1&&(k.input={name:"name",label:"Your name",placeholder:"John doe",errors:e[0].name}),!q&&i&2&&(q=!0,k.value=e[1].name,G(()=>q=!1)),l.$set(k);const h={};i&1&&(h.input={name:"email",type:"email",label:"Your email",placeholder:"name@company.com",errors:e[0].email}),!t&&i&2&&(t=!0,h.value=e[1].email,G(()=>t=!1)),m.$set(h);const u={};i&1&&(u.input={name:"password",type:"password",placeholder:"••••••••",errors:e[0].password}),!P&&i&2&&(P=!0,u.value=e[1].password,G(()=>P=!1)),f.$set(u);const E={};i&4&&(E.submitting=e[2]),i&2048&&(E.$$scope={dirty:i,ctx:e}),g.$set(E)},i(e){C||(B(l.$$.fragment,e),B(m.$$.fragment,e),B(f.$$.fragment,e),B(g.$$.fragment,e),C=!0)},o(e){H(l.$$.fragment,e),H(m.$$.fragment,e),H(f.$$.fragment,e),H(g.$$.fragment,e),C=!1},d(e){e&&c(o),M(l),M(m),M(f),M(g),x=!1,Q()}}}function ge(a,o,r){let p,s,S,{data:b}=o;const{form:n,errors:_,delayed:l,enhance:q}=me(b.form,{validators:fe});K(a,n,t=>r(1,s=t)),K(a,_,t=>r(0,p=t)),K(a,l,t=>r(2,S=t));function D(t){a.$$.not_equal(s.name,t)&&(s.name=t,n.set(s))}function w(t){a.$$.not_equal(s.email,t)&&(s.email=t,n.set(s))}function m(t){a.$$.not_equal(s.password,t)&&(s.password=t,n.set(s))}return a.$$set=t=>{"data"in t&&r(7,b=t.data)},[p,s,S,n,_,l,q,b,D,w,m]}class ke extends le{constructor(o){super(),ue(this,o,ge,_e,se,{data:7})}}export{ke as component};