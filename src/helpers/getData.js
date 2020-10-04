import Axois from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?';
const KEY = 'api_key=8d4e0a5a0c37d4780eefdf617d0feea1';

const getData = () => {
    return Axois.get( `${BASE_URL}${KEY}` );
}

export default getData;