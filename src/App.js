import React, { useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';

function App() {

  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);


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
    const response = await fetch('https://swapi.dev/api/films');
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
    
      setIsLoading(false);

  
  }
  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataHandler}> Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
