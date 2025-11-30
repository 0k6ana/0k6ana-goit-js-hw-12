import axios from 'axios';

const API_KEY = '53351901-67f2d48607dfb534abaa6754b';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) { 
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page, 
  };

  try {
    const { data } = await axios.get(BASE_URL, { params });
    return data;
  } catch (error) {
    throw error;
  }
}




 