import got from 'got';
const tmdb_url = process.env.TMDB_V3_URL;
const tmdb_key = process.env.TMDB_KEY;
const locale = process.env.TMDB_LOCALE;
const include_adult = process.env.TMDB_INCLUDE_ADULT;
export const getters ={
    async getMovies (query_term) {
        let movies = [];
        let url = `${tmdb_url}search/movie?api_key=${tmdb_key}&language=${locale}&query=${encodeURIComponent(query_term)}&page=1&include_adult=${include_adult}`;
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