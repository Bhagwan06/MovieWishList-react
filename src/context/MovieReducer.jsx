
const MovieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCH_LIST":
 
    return {
        ...state,
        watchList:[action.payload, ...state.watchList]
    }

    case "REMOVE_FROM_WATCH_LIST":

      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "ADD_WATCHED_MOVIE":

      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched]
      };

    case "MOVE_TO_WATCH_LIST":

      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [action.payload, ...state.watchList]
      };

    case "REMOVE_FROM_WATCHED_LIST":

      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    case "ADD_TO_WISH_LIST":

      return {
        ...state,
        wishList: [action.payload, ...state.wishList]
      };

    case "REMOVE_FROM_WISH_LIST":

      return {
        ...state,
        wishList: state.wishList.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

export default MovieReducer;
