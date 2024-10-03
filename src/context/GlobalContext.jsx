import { createContext, useEffect, useReducer } from "react";
import MovieReducer from "./MovieReducer";
import { showToast } from "../utility/toastHelper";


const getFromLocalStorage = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

const initialState = {
  watchList: getFromLocalStorage("watch-list"),
  watched: getFromLocalStorage("watched"),
  wishList: getFromLocalStorage("wish-list"),
};

export const MoviesContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watch-list", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("wish-list", JSON.stringify(state.wishList));
  }, [state]);
  
  

  // Actions 
  const addMovie = (movie) => {
    dispatch({ type: "ADD_TO_WATCH_LIST", payload: movie });
    showToast("Movie added to Watch List!"); 

  };

  const removeMovie = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCH_LIST", payload: id });
    showToast("Movie removed from Watch List!"); 

  };

  const watchedMovie = (movie) => {
    dispatch({ type: "ADD_WATCHED_MOVIE", payload: movie });
    showToast("Movie added to Watched List!"); 


  };

  const moveWatchedMovie = (movie) => {
    dispatch({ type: "MOVE_TO_WATCH_LIST", payload: movie });
    showToast("Movie moved back to Watch List!"); 

  };

  const removeWatchedMovie = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED_LIST", payload: id });
    showToast("Movie removed from Watched List!"); 

  };

  const addToWishList = (movie) => {
    console.log("Adding movie to wishList:", movie);
    
    dispatch({ type: "ADD_TO_WISH_LIST", payload: movie });
    showToast("Movie added to Wish List!"); 

  };

  const removeWishedMovie = (id) => {
    dispatch({ type: "REMOVE_FROM_WISH_LIST", payload: id });
    showToast("Movie removed from Wish List!"); 

  };

  return (
    <MoviesContext.Provider
      value={{
        watched: state.watched,
        watchList: state.watchList,
        wishList: state.wishList,
        addMovie,
        removeMovie,
        watchedMovie,
        moveWatchedMovie,
        removeWatchedMovie,
        addToWishList,
        removeWishedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
