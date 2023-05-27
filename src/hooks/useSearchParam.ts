import { useLocation } from 'react-router-dom';

export const useSearchParam = (name: string): string | null => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(name) || null;
  // name = name.replace(/[\[\]]/g, '\\$&');
  // const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  // const results = regex.exec(location.search);
  // if (!results) return null;
  // if (!results[2]) return '';

  // return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
