import React from "react";
import { movies } from "../data";

const Movies = () => {
  const renderMovies = movies => {
    return movies.map(movie => {
      return (
        <div>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          Genres:
          <ul>
            {movie.genres.map(genre => {
              return <li>{genre}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies(movies)}
    </div>
  );
};

export default Movies;
