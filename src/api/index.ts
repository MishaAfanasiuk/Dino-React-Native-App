import {post, get, put} from './http';
import {AxiosResponse} from "axios";
import {AsyncStorage} from "react-native";

export const login = (data) => {
  return post('/auth/login', data)
};

export const register = (data): Promise<AxiosResponse> => {
  return post('/auth/register', data)
};

export const getUser = async (token: string): Promise<AxiosResponse> => {
  console.log(token)
  return get(`/user`, {headers: {Authorization: `Bearer ${token}`}})
};

export const editUser = (userId: string, data): Promise<any> => {
  console.log(data.email)
  return put(`/user/${userId}`, data)
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

export const getDiscount = (eventId: string): Promise<any> => {
  return get(`/discounts/${eventId}`)
};
export const getDiscounts = (): Promise<any> => {
  return get(`/discounts`)
};

export const getPlaces = (): Promise<AxiosResponse> => {
  return get('/location')
};

export const getUserAchievements = (): Promise<AxiosResponse> => {
  return get('/user')
};

export const getFullImage = (imageSrc: string): Promise<any> => {
  console.log(imageSrc);
  return get('/assets/' + imageSrc)
};
