/* eslint-disable no-useless-escape */
import { useLocation } from 'react-router-dom';

export const useSearchParam = (name: string) => {
  const location = useLocation();

  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(location.search);
  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
