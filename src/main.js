import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector("#search-form");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
let totalPages = 0;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);


async function onSearch(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  query = formData.get("search-text").trim();


  if (!query) return;

  page = 1;
  clearGallery();
  loadMoreBtn.classList.add("is-hidden");
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (!data || data.hits.length === 0) {
      alert("Нічого не знайдено!");
      return;
    }

    totalPages = Math.ceil(data.totalHits / 15);
    createGallery(data.hits);

    if (page < totalPages) {
      loadMoreBtn.classList.remove("is-hidden");
    }
  } catch (error) {
    console.error("Помилка при завантаженні зображень:", error);
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data && data.hits.length > 0) {
      createGallery(data.hits);
    }

    if (page >= totalPages) {
      loadMoreBtn.classList.add("is-hidden");
      alert("Це були всі результати за даним запитом");
    }
  } catch (error) {
    console.error("Помилка при завантаженні наступної сторінки:", error);
  } finally {
    hideLoader();
  }
}

    
// addEventListener('click', ()=>{
// getList()
// .then((list)=> renderHTML(list))
// .catch((error)=>console.log(error))
// })


// addEventListener('click', async event =>{



// const list = await getList()
// renderHTML(list)


// 