import * as axios from 'axios';

export const API_LINK = 'https://dino-backend.herokuapp.com/';

const instance = axios.default.create({
  baseURL: API_LINK
});

export const {get, post, put, delete: del} = instance;
