import React, { useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';

function App() {

  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);


  async function fetchDataHandler()
  {
    // fetch('https://swapi.dev/api/films')
    // .then(response => response.json())
    // .then( (data ) =>{
    //   const transferForm = data.results.map(movieData => {
    //     return{
    //       id : movieData.episode_id,
    //       title : movieData.title,
    //       openingText : movieData.opening_crawl,
    //       releaseDate : movieData.releaseDate
    //     }
    //   });

    // Now Using Async / Await 
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/filmes');
      if( !response.ok )
      {
        throw new Error('Server Issue. No Movie Found');
      }
    const data = await response.json();
    const transferForm = data.results.map(movieData => {
          return{
            id : movieData.episode_id,
            title : movieData.title,
            openingText : movieData.opening_crawl,
            releaseDate : movieData.releaseDate
          }
        });

      setMovies(transferForm);

    } catch (error) {

      setError(error.message);
    }
    
    setIsLoading(false);

  
  }
  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataHandler}> Fetch Movies</button>
      </section>
      <section>
      {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
      {!isLoading && movies.length == 0 && <p>No Movie Found</p> }
        {!isLoading && error != null && <p> {error}</p> }
        {isLoading && <p>Loading...</p>}

      </section>
    </React.Fragment>
  );
}

export default App;
