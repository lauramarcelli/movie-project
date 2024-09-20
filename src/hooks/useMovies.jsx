import axios from "axios";
import { useState } from "react";

export default function useMovies() {
  const [data, setData] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState();
  const apikey = import.meta.env.VITE_APP_MOVIE_KEY;

  const getMovies = async (category, page = 1) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${apikey}&language=es-ES&page=${page}`
      );

      setData(response.data.results);
    } catch (error) {
      console.log("Error fetching");
    }
  };

  const getMovie = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=es-ES`
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (nameMovie) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=${apikey}&language=es-ES&page=1`
      );

      setData(response.data.results);
    } catch (error) {
      console.log("Error fetching");
    }
  };
  
  const fetchTrailer = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`
      );
     
      setMovieTrailer(response.data.results.find((movie) => movie.type === "Trailer"))
    } catch (error) {
      console.error("Error al obtener el trailer:", error);
    }
  };

  return { data, getMovies, getMovie, searchMovie, fetchTrailer, movieTrailer };
}
