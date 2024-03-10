import { useEffect, useState } from "react";
import {fetchTrendMovies} from '../movies-api';
import MoviesList from '../components/MoviesList';

export default function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                const data = await fetchTrendMovies();
                setTrendingMovies(data);
            } catch(error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <div>
            { isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2> 
                    Sorry, we could not fetch the trending movies. Please try again later.
                </h2>
            ) : (
                <MoviesList trendingMovies={trendingMovies}/>
            )}
        </div>
    );
}