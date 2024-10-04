import axios from 'axios';

const { DEV, VITE_API_BASE_URL } = import.meta.env;

const baseURL = DEV ? '' : VITE_API_BASE_URL;

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
