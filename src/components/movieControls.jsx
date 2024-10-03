import React, { useContext } from 'react';
import { MoviesContext } from '../context/GlobalContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGift, faEye, faEyeSlash, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';


const MovieControls = ({movie, type}) => {
    const {
        removeMovie,
        watchedMovie,
        moveWatchedMovie,
        removeWatchedMovie,
        addToWishList,
        removeWishedMovie,
        wishList
    } = useContext(MoviesContext);

    // Ensure movie is defined and has an ID
    if (!movie || !movie.id) {
        console.error("Invalid movie object", movie);
        return null; // or return a loading/error component
    }

    const wishListed = wishList.find((movies) => movies.id === movie.id);
    const wishExists = !!wishListed; // Simplified boolean logic

    return (
        <div className="inner-card-controls">

            {type === "watchList" && (
                <>
                    <button 
                    disabled={wishExists} 
                    className="ctrl-btn" 
                    onClick={() => addToWishList(movie)}
                    >
                        <FontAwesomeIcon icon={faGift} />
                    </button>

                    <button 
                    className="ctrl-btn" 
                    onClick={() => watchedMovie(movie)}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </button>

                    <button 
                    className="ctrl-btn" 
                    onClick={() => removeMovie(movie.id)}
                    >
                     <FontAwesomeIcon icon={faTrash}
                     />                    
                     </button>

                    
                </>
            )}

            {type === "watched" && (
                <>
                    <button 
                    className="ctrl-btn" 
                    onClick={() => moveWatchedMovie(movie)}
                    >
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </button>

                    <button 
                    className="ctrl-btn" 
                    onClick={() => removeWatchedMovie(movie.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </>
            )}

            {type === "wish" && (
                <>
                    <button 
                    className="ctrl-btn" 
                    onClick={() => {removeWishedMovie(movie.id)}}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </>
            )}
        </div>

        
    );
};

export default MovieControls;
