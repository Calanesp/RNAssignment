const routes = {
  base: "https://api.themoviedb.org/3",
  authentication: "/authentication/token/new?api_key=",
  approvedURL: "?redirect_to=https://www.RNAssignment.com/approved",
  authenticate: 'https://www.themoviedb.org/authenticate',
  session: '/authentication/session/new?api_key=',
  getAllMedia: '/trending/all/week?api_key=',
  getMostPopularMovies: '/discover/movie?api_key=',
  getMostPopularTVShow: '/discover/tv?api_key=',
  getMostPopular: '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
  getDocumentary: '&with_genres=99',
  getFamily: '&with_genres=10751',
  movieDetail: '/movie/',
  TVShowDetail:'/tv/',
  searchMovie:'/search/movie'
};



export const authenticationRoute = () => {
  const {base, authentication} = routes;
  return `${base}${authentication}`;
};
export const authenticateRoute = (token) => {
  const {authenticate, approvedURL} = routes;
  return `${authenticate}`+'/' + token + `${approvedURL}`;
};
export const sessionRoute = () => {
  const {base, session} = routes;
  return `${base}${session}`;
};
export const getAllMediaRoute = () => {
  const {base, getAllMedia} = routes;
  return `${base}${getAllMedia}`;
};
export const getMostPopularMoviesRoute = (apiV3) => {
  const {base, getMostPopularMovies, getMostPopular} = routes;
  return `${base}${getMostPopularMovies}`+ apiV3 + getMostPopular;
};
export const getMostPopularTVRoute = (apiV3) => {
  const {base, getMostPopularTVShow, getMostPopular} = routes;
  return `${base}${getMostPopularTVShow}`+ apiV3 + getMostPopular;
};
export const getDocumentaryMediaRoute = (apiV3) => {
  const {base, getMostPopularTVShow, getMostPopular, getDocumentary} = routes;
  return `${base}${getMostPopularTVShow}`+ apiV3 + getMostPopular + getDocumentary;
}
;
export const getFamilyMediaRoute = (apiV3) => {
  const {base, getMostPopularTVShow, getMostPopular, getFamily} = routes;
  return `${base}${getMostPopularTVShow}`+ apiV3 + getMostPopular + getFamily;
};
export const getMovieDetailRoute = (movieId, apiV3) => {
  const {base, movieDetail} = routes;
  return `${base}${movieDetail}` + movieId + '?api_key=' + apiV3;
};
export const getTVShowDetailRoute = (TVShowId,apiV3) => {
  const {base, TVShowDetail} = routes;
  return `${base}${TVShowDetail}` + TVShowId  + '?api_key=' + apiV3;
};

export const getSearchMovieRoute = (query ,apiV3) => {
  const {base, searchMovie} = routes;
  return `${base}${searchMovie}` + '?api_key=' + apiV3 + '&language=en-US&query='+ query + '&page=1&include_adult=false';
};





