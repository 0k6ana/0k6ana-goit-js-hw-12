import{a as L,S as w}from"./assets/vendor-BprjmLGJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const v="53351901-67f2d48607dfb534abaa6754b",S="https://pixabay.com/api/";async function f(e,t=1){const o={key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};try{const{data:n}=await L.get(S,{params:o});return n}catch(n){throw n}}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function m(e){const t=e.map(o=>`
     <li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
    <div class="info">
        <p class="info-item">
         <b>Likes</b> ${o.likes}
        </p>
        <p class="info-item">
         <b>Views</b> ${o.views} 
        </p>
        <p class="info-item">
         <b>Comments</b> ${o.comments}
        </p>
        <p class="info-item">
         <b>Downloads</b> ${o.downloads}
        </p>
    </div>
    </li>
    `).join("");h.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){h.innerHTML=""}function p(){y.classList.remove("is-hidden")}function g(){y.classList.add("is-hidden")}const B=document.querySelector("#search-form"),u=document.querySelector(".load-more");let i="",a=1,d=0;B.addEventListener("submit",$);u.addEventListener("click",O);function c(){u.classList.add("is-hidden")}function b(){u.classList.remove("is-hidden")}function P(){const e=document.querySelector(".gallery");if(!e)return;const t=e.getBoundingClientRect().height/15;window.scrollBy({top:t*2,behavior:"smooth"})}async function $(e){if(e.preventDefault(),i=e.currentTarget.elements["search-text"].value.trim(),!!i){a=1,M(),c(),p();try{const t=await f(i,a);if(!t||!t.hits.length){alert("Sorry, no images found. Please try another query.");return}m(t.hits),d=Math.ceil(t.totalHits/15),a<d?b():(c(),alert("We're sorry, but you've reached the end of search results."))}catch(t){console.error("Помилка при завантаженні:",t)}finally{g()}}}async function O(){a+=1,p(),c();try{const e=await f(i,a);e&&e.hits.length&&(m(e.hits),P()),a<d?b():(c(),alert("We're sorry, but you've reached the end of search results."))}catch(e){console.error("Помилка при завантаженні:",e)}finally{g()}}
//# sourceMappingURL=index.js.map
