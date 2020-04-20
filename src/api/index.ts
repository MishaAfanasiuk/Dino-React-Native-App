import {post, get} from './http';
import {AxiosResponse} from "axios";

export const login = (data) => {
  return post('/login', data)
};

export const register = (data): Promise<AxiosResponse> => {
  return post('/register', data)
};

export const getUser = (): Promise<AxiosResponse> => {
  return get(`/user`)
};

export const getEvent = (eventId: string): Promise<any> => {
  return get(`/events/${eventId}`)
};

export const getNews = (): Promise<any> => {
  return get('/news')
};

export const getMenu = (): Promise<any> => {
  return get('/menu')
};

export const getDiscounts = (): Promise<AxiosResponse> => {
  return get('/menu/discounts')
};

export const getPlaces = (): Promise<AxiosResponse> => {
  return get('/location')
};

export const getUserAchievements = (): Promise<AxiosResponse> => {
  return get('/user')
};
