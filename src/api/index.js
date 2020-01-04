import axios from 'axios';
import stringify from '../utils/stringify';

const API_URL = 'https://api.punkapi.com/v2';

export async function getBeers(page, perPage) {
  const query = stringify({ page, per_page: perPage });
  try {
    const { data } = await axios.get(API_URL + `/beers?${query}`);
    return data;
  } catch (err) {
    throw err;
  }
}