const API_KEY = "90c6a430303c60f76b341a7aaf500451";

export const requests ={
    feachTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    feactTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
    feactActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
    feactComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    feactHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    feactRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    feactDocumentMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
