import{s as v,B as f,k as _,n as d,i as c,G as I,H as D,D as u,E as m,e as E,d as L,f as p,F as h,I as N,J as S,K as H,L as w,M as g,N as M}from"./scheduler.d2feb51b.js";import{c as j,a as q,g as y}from"./functions.187e9af0.js";import{S as A,i as B}from"./index.0b5df535.js";function b(o){let e;function t(n,l){return n[0].svg?F:C}let a=t(o),s=a(o);return{c(){s.c(),e=f()},l(n){s.l(n),e=f()},m(n,l){s.m(n,l),_(n,e,l)},p(n,l){a===(a=t(n))&&s?s.p(n,l):(s.d(1),s=a(n),s&&(s.c(),s.m(e.parentNode,e)))},d(n){n&&c(e),s.d(n)}}}function C(o){let e,t=[o[0].attributes],a={};for(let s=0;s<t.length;s+=1)a=u(a,t[s]);return{c(){e=E("span"),this.h()},l(s){e=L(s,"SPAN",{}),p(e).forEach(c),this.h()},h(){h(e,a)},m(s,n){_(s,e,n)},p(s,n){h(e,a=y(t,[n&1&&s[0].attributes]))},d(s){s&&c(e)}}}function F(o){let e,t,a=o[0].body+"",s=[o[0].attributes],n={};for(let l=0;l<s.length;l+=1)n=u(n,s[l]);return{c(){e=N("svg"),t=new S(!0),this.h()},l(l){e=H(l,"svg",{});var i=p(e);t=w(i,!0),i.forEach(c),this.h()},h(){t.a=null,g(e,n)},m(l,i){_(l,e,i),t.m(a,e)},p(l,i){i&1&&a!==(a=l[0].body+"")&&t.p(a),g(e,n=y(s,[i&1&&l[0].attributes]))},d(l){l&&c(e)}}}function G(o){let e,t=o[0]&&b(o);return{c(){t&&t.c(),e=f()},l(a){t&&t.l(a),e=f()},m(a,s){t&&t.m(a,s),_(a,e,s)},p(a,[s]){a[0]?t?t.p(a,s):(t=b(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:d,o:d,d(a){a&&c(e),t&&t.d(a)}}}function J(o,e,t){const a={name:"",loading:null,destroyed:!1};let s=!1,n=0,l;const i=r=>{typeof e.onLoad=="function"&&e.onLoad(r),M()("load",{icon:r})};function k(){t(3,n++,n)}return I(()=>{t(2,s=!0)}),D(()=>{t(1,a.destroyed=!0,a),a.loading&&(a.loading.abort(),t(1,a.loading=null,a))}),o.$$set=r=>{t(6,e=u(u({},e),m(r)))},o.$$.update=()=>{{const r=j(e.icon,a,s,k,i);t(0,l=r?q(r.data,e):null),l&&r.classes&&t(0,l.attributes.class=(typeof e.class=="string"?e.class+" ":"")+r.classes.join(" "),l)}},e=m(e),[l,a,s,n]}class O extends A{constructor(e){super(),B(this,e,J,G,v,{})}}export{O as I};