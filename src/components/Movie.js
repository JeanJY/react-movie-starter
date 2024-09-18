import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, year, summary, genres }) {
  return (
    <div>
      <Link to={"/movie-detail"}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2>
        <Link to={"/movie-detail"}>{title}</Link>
      </h2>
      <h4>{year}</h4>
      <p>{summary}</p>
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
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
