import React, { useState } from 'react';

import './App.css';
import MoviesList from './components/MoviesList';

function App() {

  const [movies,setMovies] = useState([]);


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
    
        
  
  }
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataHandler}> Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
