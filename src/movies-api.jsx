import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const API_KEY = '4aecf782393325fe8076ee4279bb6fc6';

export const fetchTrendMovies = async () => {
    const response = await axios.get(
        `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
    );

    return response.data.results;
};

export const fetchMovieByName = async query => {
    const response = await axios.get(
        `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
};

export const fetchMovieById = async movieId => {
    const response = await axios.get(
        `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return response.data;
};

export const fetchMovieCast = async movieId => {
    const response = await axios.get(
        `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US` 
    );

    return response.data;
};

export const fetchMovieReviews = async movieId => {
    const response = await axios.get(
        `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    return response.data;
};