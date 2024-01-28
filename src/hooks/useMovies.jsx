import axios from "axios";
import { useState } from "react";

export default function useMovies() {
  
  const [data, setData] = useState([]);
  const [mejorPuntuadas, setMejorPuntuadas] = useState([]);
  const apikey = import.meta.env.VITE_APP_MOVIE_KEY;

  const getPopular = async () => {
    try {
      
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=es-ES&page=1`
      );

      setData(response.data.results);
    } catch (error) {
      console.log("Error fetching");
    }
  };

  const getTopRated = async () => {
    try {
      
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=es-ES&page=1`);

      console.log(response.mejorPuntuadas.results);
      setMejorPuntuadas(response.mejorPuntuadas.results);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, getPopular, mejorPuntuadas, getTopRated };
}
