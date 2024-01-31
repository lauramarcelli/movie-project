import axios from "axios";
import { useState } from "react";

export default function useMovies() {
  
  const [data, setData] = useState([]);
  const apikey = import.meta.env.VITE_APP_MOVIE_KEY;

  const getMovies = async (category) => {
    try {
      
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${apikey}&language=es-ES&page=1`
      );

      setData(response.data.results);
    } catch (error) {
      console.log("Error fetching");
    }
  };

  const getMovie = async (id) => {
    try {
      
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/?api_key=${apikey}&language=es-ES&page=1`);

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, getMovies, getMovie };
}

  
// const [popular, setPopular] = useState([]);
// const [topRated, setTopRated] = useState([]);
// const apikey = import.meta.env.VITE_APP_MOVIE_KEY;

// const getPopular = async () => {
//   try {
    
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=es-ES&page=1`
//     );

//     setPopular(response.data.results);
//   } catch (error) {
//     console.log("Error fetching");
//   }
// };

// const getTopRated = async () => {
//   try {
    
//     const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=es-ES&page=1`);

//     console.log(response.data.results);
//     setTopRated(response.data.results);
//   } catch (error) {
//     console.log(error);
//   }
// };

// return { popular, getPopular, topRated, getTopRated };