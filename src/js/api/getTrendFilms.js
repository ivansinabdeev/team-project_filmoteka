
import apiConfig from '../constants/api-config';

export async function getTrendFilms(page = 1, lang = 'en-US') {
    const { API_KEY, BASE_URL, TRENDING_PARAMS_DAY } = apiConfig;
    const url = new URL(BASE_URL + TRENDING_PARAMS_DAY);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('page', page);
    url.searchParams.set('language', lang);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const respJson = await response.json();
            throw new Error(respJson.status_message);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}