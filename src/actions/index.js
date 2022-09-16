export function getMovies(title) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=f071d776&s=" + title)
        .then(response => response.json()) //recibo la info de la API
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        }); //para mandarla al estado global, LEER BIEN EL TEST EN EL CHECK, el type:GET_MOVIES
    };
  }

//2.traer detalles "getMovieDetail"     NOSE SI ESTARA BIEN, DESPUES COMPROBAR
export function getMovieDetail (id) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=f071d776&i=" + id)
      .then(response => response.json()) //recibo la info de la API
      .then(json => dispatch ({ type: "GET_MOVIE_DETAIL", payload: json }));
      }; 
    };


//3.agregarla a FAV "addMovieFavorite"
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
//4.eliminarla de FAV "removeMovieFavorite"
export function removeMovieFavorite(id) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload:id };
  }