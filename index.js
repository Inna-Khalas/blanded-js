var m=t=>{throw TypeError(t)};var y=(t,e,r)=>e.has(t)||m("Cannot "+r);var a=(t,e,r)=>(y(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),P=(t,e,r,n)=>(y(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);import{a as L,P as v}from"./assets/vendor-3c4hCVKJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var i,c,l;class b{constructor(){u(this,i,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58");u(this,c,"https://api.unsplash.com/search/photos");u(this,l,"")}async fetchPopularPhotos(e=1){return(await L(a(this,c),{params:{query:"popular",page:e,per_page:12,orientation:"portrait"},headers:{Authorization:`Client-ID ${a(this,i)}`}})).data}async fetchPhotosByQuery(e=1){return(await L(a(this,c),{params:{query:a(this,l),page:e,per_page:12,orientation:"portrait"},headers:{Authorization:`Client-ID ${a(this,i)}`}})).data}set query(e){P(this,l,e)}}i=new WeakMap,c=new WeakMap,l=new WeakMap;function d(t){return t.reduce((e,{alt_description:r,urls:{small:n}})=>e+`   <li class="gallery-item">
            <img src="${n}" alt="${r}" class="gallery-img" />
          </li>
      `,"")}const I={totalItems:0,itemsPerPage:12,visiblePages:5,page:1},g=document.querySelector(".gallery"),M=document.getElementById("pagination"),h=new v(M,I),q=h.getCurrentPage(),A=document.querySelector(".search-form");h.on("afterMove",t=>{const e=t.page;p.fetchPopularPhotos(e).then(r=>{g.innerHTML=d(r.results)})});const p=new b;p.fetchPopularPhotos(q).then(t=>{g.innerHTML=d(t.results),h.reset(t.total)}).catch(console.log);A.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.query.value.trim();e!==""&&(p.query=e,p.fetchPhotosByQuery(q).then(r=>{g.innerHTML=d(r.results),h.reset(r.total)}).catch(r=>console.log(r)))});
//# sourceMappingURL=index.js.map
