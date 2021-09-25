
const API_KEY = '49ef91acf94ea7653018d0c5d6d68b56';

const requests = {
    
    "​fetchTrending": `/trending/all/week?api_key=${API_KEY}`, "fetchNetflixOriginals": `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    "fetchTopRated": `/tv/latest?api_key=${API_KEY}&language=en-US`,
    "​fetchActionMovies": `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    "fetchComedyMovies": `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    "​fetchHorrorMovies": `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    "fetchRomanceMovies": `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    "​fetchDocumentaries": `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests;