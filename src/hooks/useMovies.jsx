import axios from "axios";
import { useState } from "react";

export default function useMovies() {
  const [data, setData] = useState([]);
  const apikey = import.meta.env.VITE_APP_MOVIE_KEY;

  const getMovies = async (category, page) => {
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
        `https://api.themoviedb.org/3/movie/${id}/?api_key=${apikey}&language=es-ES&page=1`
      );

      console.log(response.data);
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

  return { data, getMovies, getMovie, searchMovie };
}

