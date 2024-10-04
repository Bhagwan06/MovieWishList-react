import React, { useState, useRef } from 'react';
import { MovieCard } from './MovieCard';

export default function Add() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const debounceTimer = useRef(null);  // Using useRef to persist the debounce timer

    const changeQuery = (e) => {
        e.preventDefault();
        const newQuery = e.target.value;
        setQuery(newQuery);

        // Clear the previous debounce timer
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        // Debouncing the API call
        debounceTimer.current = setTimeout(() => {
            if (newQuery) {
                fetchMovies(newQuery);
            } else {
                setMovies([]);  // Clear movies if the query is empty
            }
        }, 300);  // 300ms delay before the fetch request
    };

    const fetchMovies = (searchQuery) => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;  // VITE api

          // Debugging API Key

    //   console.log("API Key: ", apiKey);


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setMovies(data.results);
                } else {
                    setMovies([]);
                }
            })
            .catch((error) =>{
                console.error('Failed to fetch movies:', error);
                   setMovies([]);
            });
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search for a movie..." 
                            value={query} 
                            onChange={changeQuery} 
                        />
                    </div>

                    {/* Display movies */}
                    {movies && movies.length > 0 && (
                        <ul className="results">
                            {movies.map((movie) => (
                                <li key={movie.id}>
                                    <MovieCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
