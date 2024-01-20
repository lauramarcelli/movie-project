import axios from "axios";
import { useState } from "react";

export default function useMovies() {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const apikey = import.meta.env.VITE_APP_MOVIE_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/11?api_key=${apikey}`
      );

      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.log("Error fetching");
    }
  };

  const getMovie = async (id) => {
    try {
      const apikey = import.meta.env.VITE_APP_MOVIE_KEY;
      const info = await axios.get(`https://api.themoviedb.org/3/movie/${id}`);

      console.log(info.data);
      setData(info.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, getMovies, getMovie };
}
