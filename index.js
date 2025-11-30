import{a as g,S as L}from"./assets/vendor-BprjmLGJ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const b="53351901-67f2d48607dfb534abaa6754b",w="https://pixabay.com/api/";async function f(r,a=1){const e={key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a};try{const{data:s}=await g.get(w,{params:e});return s}catch(s){throw s}}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),v=new L(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){const a=r.map(e=>`
     <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
    <div class="info">
        <p class="info-item">
         <b>Likes</b> ${e.likes}
        </p>
        <p class="info-item">
         <b>Views</b> ${e.views} 
        </p>
        <p class="info-item">
         <b>Comments</b> ${e.comments}
        </p>
        <p class="info-item">
         <b>Downloads</b> ${e.downloads}
        </p>
    </div>
    </li>
    `).join("");u.insertAdjacentHTML("beforeend",a),v.refresh()}function S(){u.innerHTML=""}function h(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}const q=document.querySelector("#search-form"),c=document.querySelector(".load-more");let i="",n=1,d=0;q.addEventListener("submit",D);c.addEventListener("click",$);async function D(r){if(r.preventDefault(),i=new FormData(r.currentTarget).get("search-text").trim(),!!i){n=1,S(),c.classList.add("is-hidden"),h();try{const e=await f(i,n);if(!e||e.hits.length===0){alert("Нічого не знайдено!");return}d=Math.ceil(e.totalHits/15),p(e.hits),n<d&&c.classList.remove("is-hidden")}catch(e){console.error("Помилка при завантаженні зображень:",e)}finally{y()}}}async function $(){n+=1,h();try{const r=await f(i,n);r&&r.hits.length>0&&p(r.hits),n>=d&&(c.classList.add("is-hidden"),alert("Це були всі результати за даним запитом"))}catch(r){console.error("Помилка при завантаженні наступної сторінки:",r)}finally{y()}}
//# sourceMappingURL=index.js.map
