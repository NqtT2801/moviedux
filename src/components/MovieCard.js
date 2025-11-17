import "../styles.css";

export default function MoviesGrid({ movie, isWatchisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg"; // Fallback image
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={`${movie.title} Poster`}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchisted}
            onChange={() => toggleWatchlist(movie.id)}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchisted ? "In WatchList" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
