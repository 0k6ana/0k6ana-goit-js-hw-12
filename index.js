import{a as d,S as u,i as a}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="53351901-67f2d48607dfb534abaa6754b",m="https://pixabay.com/api/";function h(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:o}).then(e=>e.data).catch(e=>{throw e})}const l=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function L(){f.classList.remove("is-hidden")}function c(){f.classList.add("is-hidden")}const w=document.querySelector("#search-form");w.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){a.warning({title:"Увага",message:"Введіть пошукове слово!",position:"topRight"});return}b(),L(),h(o).then(e=>{c();const i=e.hits;if(i.length===0){a.info({title:"Немає результатів",message:`Зображень за запитом "${o}" не знайдено.`,position:"topRight"});return}y(i)}).catch(()=>{c(),a.error({title:"Помилка",message:"Сталася помилка при завантаженні даних.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
