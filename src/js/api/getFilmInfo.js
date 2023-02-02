
import apiConfig from '../constants/api-config';


const { API_KEY, BASE_URL, DETAILS_PARAMS } = apiConfig;

export async function getFilmInfo(id, lang = 'en-US') {
    const acceptedLanguages = ['en-US', 'uk-UA'];
    lang = acceptedLanguages.includes(lang) ? lang : 'en-US';

    const url = new URL(BASE_URL + DETAILS_PARAMS + id);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', lang);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const respJson = await response.json();
            throw new Error(respJson.status_message);
        }
        const movieInfo = await response.json();
        return movieInfo;
    } catch (error) {
        console.log(error);
    }
}