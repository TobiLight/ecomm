import{s as v,e as k,b as A,d as y,f as I,j as S,i as m,p as f,k as d,l as R,w as $,A as q,B as h,t as g,h as C}from"./scheduler.d2feb51b.js";import{S as w,i as B,c as N,b as T,m as j,t as E,a as F,d as M}from"./index.0b5df535.js";import{e as O}from"./index.dca13775.js";import{S as P}from"./SubmitButton.dba9cb2e.js";function b(i){let t;return{c(){t=k("input"),this.h()},l(e){t=y(e,"INPUT",{type:!0,name:!0}),this.h()},h(){f(t,"type","hidden"),f(t,"name","quantity"),t.value="1"},m(e,n){d(e,t,n)},d(e){e&&m(t)}}}function U(i){let t;return{c(){t=g("Add to cart")},l(e){t=C(e,"Add to cart")},m(e,n){d(e,t,n)},d(e){e&&m(t)}}}function z(i){let t;return{c(){t=g("Remove from cart")},l(e){t=C(e,"Remove from cart")},m(e,n){d(e,t,n)},d(e){e&&m(t)}}}function D(i){let t;function e(a,c){return a[0]?z:U}let n=e(i),r=n(i);return{c(){r.c(),t=h()},l(a){r.l(a),t=h()},m(a,c){r.m(a,c),d(a,t,c)},p(a,c){n!==(n=e(a))&&(r.d(1),r=n(a),r&&(r.c(),r.m(t.parentNode,t)))},d(a){a&&m(t),r.d(a)}}}function G(i){let t,e,n,r,a,c,u,p,s=!i[0]&&b();return n=new P({props:{submitting:i[2],$$slots:{default:[D]},$$scope:{ctx:i}}}),{c(){t=k("form"),s&&s.c(),e=A(),N(n.$$.fragment),this.h()},l(o){t=y(o,"FORM",{method:!0,action:!0,class:!0});var l=I(t);s&&s.l(l),e=S(l),T(n.$$.fragment,l),l.forEach(m),this.h()},h(){f(t,"method","post"),f(t,"action",r="/product/"+i[1].id+"?/"+(i[0]?"remove":"add")),f(t,"class","flex gap-5")},m(o,l){d(o,t,l),s&&s.m(t,null),R(t,e),j(n,t,null),c=!0,u||(p=$(a=O.call(null,t,i[3])),u=!0)},p(o,[l]){o[0]?s&&(s.d(1),s=null):s||(s=b(),s.c(),s.m(t,e));const _={};l&4&&(_.submitting=o[2]),l&17&&(_.$$scope={dirty:l,ctx:o}),n.$set(_),(!c||l&3&&r!==(r="/product/"+o[1].id+"?/"+(o[0]?"remove":"add")))&&f(t,"action",r),a&&q(a.update)&&l&4&&a.update.call(null,o[3])},i(o){c||(E(n.$$.fragment,o),c=!0)},o(o){F(n.$$.fragment,o),c=!1},d(o){o&&m(t),s&&s.d(),M(n),u=!1,p()}}}function H(i,t,e){let{isInCart:n}=t,{product:r}=t,a=!1;const c=()=>(e(2,a=!0),async({update:u})=>(e(2,a=!1),u()));return i.$$set=u=>{"isInCart"in u&&e(0,n=u.isInCart),"product"in u&&e(1,r=u.product)},[n,r,a,c]}class V extends w{constructor(t){super(),B(this,t,H,G,v,{isInCart:0,product:1})}}export{V as A};
