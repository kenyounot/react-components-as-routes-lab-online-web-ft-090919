import React from "react";
import { directors } from "../data";

const Directors = () => {
  const renderDirectors = directors => {
    return directors.map(director => {
      return (
        <div>
          <h3>Name: {director.name}</h3>
          Movies:
          <ul>
            {director.movies.map(movie => {
              return <li>{movie}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors(directors)}
    </div>
  );
};

export default Directors;
