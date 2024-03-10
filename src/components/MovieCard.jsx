import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const {
      original_title,
      release_date,
      poster_path,
      vote_average,
      overview,
      genres,
    } = movie;
    const location = useLocation();
    const releaseDate = new Date(release_date);
  
    const releaseYear = isNaN(releaseDate)
      ? 'Unknown'
      : releaseDate.getFullYear();
  
    const posterUrl = poster_path
      ? `https://image.tmdb.org/t/p/w400/${poster_path}`
      : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';
  
    const userScore = vote_average
      ? `${(vote_average * 10).toFixed(0)}%`
      : 'Not rated yet';
  
    if (!original_title) {
      return ('loading..');
    }
  
    return (
      <>
        <div>
          <img src={posterUrl} alt={`${original_title} poster`} />
  
          <div>
            <h2>
              {original_title ?? 'Unknown'} ({releaseYear})
            </h2>
            <p>User Score: {userScore}</p>
            <p>
              <span>Overview:</span> {overview}
            </p>
  
            {genres && genres.length > 0 && (
              <p>
                <span>Genres:</span>
                {genres.map(genre => genre.name).join(', ')}
              </p>
            )}
          </div>
        </div>
  
        <div>
          <h3>Additional information</h3>
  
          <ul>
            <li>
              <Link
                to="cast"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Cast
              </Link>
            </li>
  
            <li>
              <Link
                to="reviews"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  };
  

  export default MovieCard;