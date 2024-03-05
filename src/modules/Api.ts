import axios from 'axios';

export const apiKey = process.env.REACT_APP_APIKEY;

// Movies Endpoints
export const trending = "https://api.themoviedb.org/3/trending/movie/week";
export const upcoming = "https://api.themoviedb.org/3/movie/upcoming";
export const popular = "https://api.themoviedb.org/3/movie/popular";
export const top_rated_movies = "https://api.themoviedb.org/3/movie/top_rated";
export const now_playing = "https://api.themoviedb.org/3/movie/now_playing";

// Series Endpoints
export const trendingSeries = "https://api.themoviedb.org/3/trending/tv/week";
export const popularSeries = "https://api.themoviedb.org/3/tv/popular";
export const top_rated_series = "https://api.themoviedb.org/3/tv/top_rated";
export const airing_today = "https://api.themoviedb.org/3/tv/airing_today";

export const fetchMovies = async (apiEndpoint: string, numberOfMovies: number) => {
    try {
        const response = await axios.get(apiEndpoint);
        // console.log("API Response:", response);
        const { results } = response.data;
        return {
            showItems: results.slice(0, numberOfMovies),
        };
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};