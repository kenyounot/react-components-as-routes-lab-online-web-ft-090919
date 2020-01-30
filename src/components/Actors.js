import React from "react";
import { actors } from "../data";

const Actors = () => {
  const renderActors = actors => {
    return actors.map(actor => {
      return (
        <div>
          <h3>Name: {actor.name}</h3>
          Movies:
          <ul>
            {actor.movies.map(movie => {
              return <li>{movie}</li>;
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors(actors)}
    </div>
  );
};

export default Actors;
