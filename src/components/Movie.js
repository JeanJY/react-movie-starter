import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, summary, genres }) {
  const truncatedSummary =
    summary && summary.length > 300 ? summary.slice(0, 300) + "..." : summary;
  return (
    <div>
      <Link to={`/movie-detail/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2>
        <Link to={`/movie-detail/${id}`}>{title}</Link>
      </h2>
      <h4>{year}</h4>
      <p>{truncatedSummary}</p>
      <ul>
        {genres && genres.length > 0 ? (
          genres.map((g) => <li key={g}>{g}</li>)
        ) : (
          <li>No genres available</li>
        )}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
