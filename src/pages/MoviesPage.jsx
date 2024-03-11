import { useEffect, useState } from "react";
import { useSearchParams, useLocation, Link  } from "react-router-dom";
import {fetchMovieByName} from '../movies-api';
import SearchMovies from '../components/SearchMovies';
import { toast } from "react-hot-toast";


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();


    useEffect(() => {
      const query = searchParams.get('query') || '';
        if(!query.trim())return;

        const getMovie = async () => {
            try {
                const {result} = await fetchMovieByName(query);

                if(result.length === 0) {
                    toast.error('No movies found');
                    setMovies([]);
                } else {
                    setMovies(result);
                }
            }catch (error) {
                toast.error(error.message);
                setMovies([]);
            }
        };

        getMovie()
    }, [searchParams]);


    const handleSubmit = query => {
      setSearchParams('query', query);
    };

    return (
        <main>
        <section>
          <h1>Movies Page</h1>
          <SearchMovies onSubmit={handleSubmit} />{' '}
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
}

export default MoviesPage;