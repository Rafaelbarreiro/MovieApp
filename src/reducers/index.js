const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  //SE DEBEN CREAR 4 REDUCERS XA LAS 4 ACCIONES

  export default function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload),
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
//AUN FALTAN DOS ACCIONES
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
          ...state,
          movieDetail: action.payload
        };
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE"){
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter((movie)=>movie.id !== action.payload)
        }
    }

    return state;
  }