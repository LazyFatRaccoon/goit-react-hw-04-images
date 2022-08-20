import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28779576-100bff5fe30acba8bf909e20d';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';

export const getImages = async (query, page, per_page) => {

    const response = await axios.get('',{params: {q: query, page: page, key: API_KEY, image_type: IMAGE_TYPE, orientation: ORIENTATION, per_page: per_page}})
    return response.data;
}