import apiConfig from '../constants/api-config';


const { API_KEY, BASE_URL, SEARCH_PARAMS } = apiConfig;

export async function getFilm(query, page = 1, lang) {
    const url = new URL(BASE_URL + SEARCH_PARAMS);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('page', page);
    url.searchParams.set('query', query);
    url.searchParams.set('language', lang);
    url.searchParams.set('sort_by', sortBy);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const respJson = await response.json();
            throw new Error(respJson.status_message);
        }
        const data = await response.json();
        const collection = data;
        if (collection.results.length) {
            return collection;
        } else {
            throw new Error('Nothing is found. Wrong query.');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

