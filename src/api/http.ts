import * as axios from 'axios';

export const API_LINK = 'https://dino-backend.herokuapp.com/';
export const ASSETS_PATH_LINK = API_LINK + 'assets/';
const instance = axios.default.create({
  baseURL: API_LINK
});

export const {get, post, put, delete: del} = instance;
