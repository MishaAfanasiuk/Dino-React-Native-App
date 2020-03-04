import {post, get} from './http';
import {AxiosResponse} from "axios";
function run(g) {
  const it = g();

  (function _iterate(res) {

    !res.done && res.value
      .then(data => _iterate(it.next(data)))
      .catch(data => it.throw(data));

  })(it.next());
}

export const login = (data) => {
  return post('/login', data)
};

export const register = (data): Promise<AxiosResponse> => {
  return post('/register', data)
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
