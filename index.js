import{a as w,S as v,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const S="53351901-67f2d48607dfb534abaa6754b",R="https://pixabay.com/api/";async function u(e,t=1){const r={key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};try{const{data:s}=await w.get(R,{params:r});return s}catch(s){throw s}}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){const t=e.map(r=>`
     <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
    <div class="info">
        <p class="info-item">
         <b>Likes</b> ${r.likes}
        </p>
        <p class="info-item">
         <b>Views</b> ${r.views} 
        </p>
        <p class="info-item">
         <b>Comments</b> ${r.comments}
        </p>
        <p class="info-item">
         <b>Downloads</b> ${r.downloads}
        </p>
    </div>
    </li>
    `).join("");p.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){p.innerHTML=""}function y(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}const B=document.querySelector("#search-form"),$=document.querySelector(".load-more");let c="",a=1,f=0;B.addEventListener("submit",P);$.addEventListener("click",x);function O(){const e=document.querySelector(".gallery .gallery-item");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}async function P(e){if(e.preventDefault(),c=e.currentTarget.elements["search-text"].value.trim(),!c){n.warning({title:"Увага",message:"Введіть пошуковий запит!",position:"topRight"});return}a=1,M(),l(),y();try{const t=await u(c,a);if(!t||!t.hits.length){n.error({title:"Помилка",message:"Нічого не знайдено. Спробуйте інший запит.",position:"topRight"});return}g(t.hits),f=Math.ceil(t.totalHits/15),a<f?b():(l(),n.info({title:"Інформація",message:"Ви досягли кінця результатів пошуку.",position:"topRight"}))}catch(t){n.error({title:"Помилка",message:"Не вдалося завантажити зображення",position:"topRight"}),console.error("Помилка при завантаженні:",t)}finally{L()}}async function x(){a+=1,y(),l();try{const e=await u(c,a);e&&e.hits.length&&(g(e.hits),O()),a<f?b():(l(),n.info({title:"Інформація",message:"Ви досягли кінця результатів пошуку.",position:"topRight"}))}catch(e){n.error({title:"Помилка",message:"Не вдалося завантажити наступну сторінку",position:"topRight"}),console.error("Помилка при завантаженні:",e)}finally{L()}}
//# sourceMappingURL=index.js.map
