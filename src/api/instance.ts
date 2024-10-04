import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? '' : process.env.VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
