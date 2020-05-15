import {post, get} from './http';
import {AxiosResponse} from "axios";
import {AsyncStorage} from "react-native";

export const login = (data) => {
  return post('/auth/login', data)
};

export const register = (data): Promise<AxiosResponse> => {
  return post('/auth/register', data)
};

export const getUser = async (token: string): Promise<AxiosResponse> => {
  return get(`/user`, {headers: {Authorization: `Bearer ${token}`}})
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
