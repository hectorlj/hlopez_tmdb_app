import got from 'got';
import bodyParser from 'body-parser';
const imdb_url = process.env.IMDB_V3_URL;
const imdb_key = process.env.IMDB_KEY;
const locale = process.env.IMDB_LOCALE;
const include_adult = process.env.IMDB_INCLUDE_ADULT;
export const getters ={
    async getMovies (query_term) {
        let movies = [];
        let url = `${imdb_url}search/movie?api_key=${imdb_key}&language=${locale}&query=${encodeURIComponent(query_term)}&page=1&include_adult=${include_adult}`;
        return got.get(url, {responseType:'json'})
        .then(res => {
            console.log('Status Code: ', res.statusCode);
            movies = res.body.results;
            if (movies.length > 10) {
                movies = movies.slice(0, 10);
            }
            return movies;
        })
        .catch(err => {
            console.log("There was an error: ", err.message, url);
            return {"error_message": err.message};
        })
    }
}