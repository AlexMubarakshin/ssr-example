import axios from 'axios';

const API_URL = 'https://api.punkapi.com/v2';

export async function getBeers() {
  try {
    const { data } = await axios.get(API_URL + '/beers');
    return data;
  } catch (err) {
    throw err;
  }
}