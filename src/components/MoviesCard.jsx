import React from 'react';
import MovieControls from './movieControls';

 export const MoviesCard = ({movie,type}) => {
  if (!movie) {
    return <div className="movie-card">Movie data not available.</div>;
  }

    // Log to check the values
    console.log("MoviesCard - type:", type, "movie:", movie);
    
  return (
    <div className="movie-card">
        <div className="overlay"></div>
       
       
        {
            movie.poster_path?(
                <img src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`}/>
            ):(
              <div className="filler-poster">
                            <img src="/path/to/placeholder-image.png" alt="No poster available" /> {/* Filler image */}

              </div>
            )
          }

        

          

         <MovieControls type={type} movie={movie} />

        </div>
                
  );
};

// export default MoviesCard;
