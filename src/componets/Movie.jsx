import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function Movie() {
  const movieId = useParams().id;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('Unable to get API data');
  const API_URL = 'http://www.omdbapi.com/?apikey=30fc2a7b';

  useEffect(() => {
    const API_DATA = async () => {
      try {
        const res = await fetch(`${API_URL}&i=${movieId}`);
        const DATA = await res.json();
        if (DATA.Response === 'True') {
          setMovie(DATA);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setMovie(null);
          setErrorMessage(DATA.Error);
          setError(true);
        }
      } catch (err) {
        setIsLoading(false);
        setMovie(null);
        setError(true);
      }
    };

    API_DATA();
  }, [movieId]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(errorMessage);
    return (
      <div className="mt-5 text-center alert alert-warning">{errorMessage}</div>
    );
  }

  // const movie = {
  //   Title: 'Adem',
  //   Year: '2010',
  //   Rated: 'Not Rated',
  //   Released: '08 Sep 2010',
  //   Runtime: '98 min',
  //   Genre: 'Drama',
  //   Director: 'Hans Van Nuffel',
  //   Writer: 'Jean-Claude Van Rijckeghem, Hans Van Nuffel',
  //   Actors: 'Stef Aerts, Wouter Hendrickx, Marie Vinck',
  //   Plot: 'Two young men share an incurable illness. Is their love for the women in their lives strong enough to conquer their fear of dying?',
  //   Language: 'Dutch',
  //   Country: 'Belgium, Netherlands',
  //   Awards: '10 wins & 11 nominations',
  //   Poster:
  //     'https://m.media-amazon.com/images/M/MV5BMTg3NTA0MzcxMF5BMl5BanBnXkFtZTcwNzQ5Mzk2Mw@@._V1_SX300.jpg',
  //   Ratings: [
  //     {
  //       Source: 'Internet Movie Database',
  //       Value: '7.1/10',
  //     },
  //   ],
  //   Metascore: 'N/A',
  //   imdbRating: '7.1',
  //   imdbVotes: '1,238',
  //   imdbID: 'tt1470860',
  //   Type: 'movie',
  //   DVD: 'N/A',
  //   BoxOffice: 'N/A',
  //   Production: 'Axia Films',
  //   Website: 'N/A',
  //   Response: 'True',
  // };
  return (
    <div className="movie">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 mx-auto col-md-3 poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="col-12 mt-5 mt-md-0 col-md-9 mx-auto">
            <div className="row">
              <h1 className="my-text-color"> {movie.Title} </h1>
              <div>
                <span>{movie.Year}</span> - <span>{movie.Runtime}</span>
              </div>
              <div className="mt-1 text-uppercase">{movie.Type}</div>
              <div className="col-12 mt-2">
                <span className="badge me-2 bg-secondary">{movie.Rated}</span>
                <span className="badge me-2 bg-secondary">
                  {' '}
                  imdb {movie.imdbRating}
                </span>
              </div>
              <p className="mt-4">{movie.Plot}</p>

              <div className="col-12">
                <div className="more-info row">
                  <span className="col-3 text-secondary">Directed By:</span>
                  <span className="col-6 offset-1">{movie.Director}</span>
                </div>
                <div className="more-info row">
                  <span className="col-3 text-secondary">Written By:</span>
                  <span className="col-6 offset-1">{movie.Writer}</span>
                </div>
                <div className="more-info row">
                  <span className="col-3 text-secondary">Studio:</span>
                  <span className="col-6 offset-1">{movie.Production}</span>
                </div>
                <div className="more-info row">
                  <span className="col-3 text-secondary">Genre:</span>
                  <span className="col-6 offset-1">{movie.Genre}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
