import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function WatchList({ movies, watchllist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchllist.map((id) => {
          const movie = movies.find((m) => m.id === id);
          return movie ? (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchisted={true}
              toggleWatchlist={toggleWatchlist}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
