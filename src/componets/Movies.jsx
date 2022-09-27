import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../assets/img/film.jpg';
import Loading from './Loading';
import SearchBar from './SearchBar';

const MovieList = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, SetErrorMessage] = useState(
    'Please enter a movie Title'
  );
  const [search, setSearch] = useState('');
  const API_URL =
    'https://www.omdbapi.com/?apikey=' + process.env.REACT_APP_SECRET_KEY;
  useEffect(() => {
    const API_DATA = async () => {
      try {
        const res = await fetch(`${API_URL}&s=${search}`);
        const DATA = await res.json();
        if (DATA.Response === 'True') {
          setMovies(DATA.Search);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setMovies(null);
          SetErrorMessage(DATA.Error);
        }
      } catch (err) {
        setIsLoading(false);
        setMovies(null);
      }
    };

    if (search !== '') {
      API_DATA();
      setIsLoading(true);
    }
  }, [search, API_URL]);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <div className="MovieList">
        <div className="container mt-3">
          {isLoading && <Loading />}

          {movies ? (
            <div className="d-flex flex-wrap justify-content-between">
              {movies.map((movie) => (
                <Link
                  to={'/' + movie.imdbID}
                  className="card mb-4 mx-auto"
                  key={movie.imdbID}
                >
                  <img
                    src={movie.Poster === 'N/A' ? defaultImg : movie.Poster}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong> Title </strong>: {movie.Title}
                    </p>
                    <p className="card-text text-capitalize">
                      <strong> Type </strong>: {movie.Type}
                    </p>
                    <p className="card-text">
                      <strong> Year </strong>: {movie.Year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="alert alert-warning"> {errorMessage} </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;
