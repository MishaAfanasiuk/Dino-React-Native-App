import {API_LINK} from "../api/http";


export const getFullImageUrl = (imageSrc: string): string => {
  return API_LINK + 'assets/' + imageSrc;
}
