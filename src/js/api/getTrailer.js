import apiConfig from '../constants/api-config';

const { API_KEY, BASE_URL } = apiConfig;

export async function getTrailer(filmID, lang) {
    try {
        const response = await fetch(

            `${BASE_URL}/movie/${filmID}/videos?api_key=${API_KEY}&language=${lang}`
        );
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