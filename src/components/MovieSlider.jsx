import { useState, useEffect } from "react";
import useMovies from "../hooks/useMovies";
import { Carousel } from "react-bootstrap";


export default function MovieSlider() {
  const { data, getPopular } = useMovies();

  useEffect(() => {
    getPopular();
  }, []);

  // const [movies, setMovies] = useState([]);
  // const quantity = movieImage?.length;

  // const nextImage = () => {
  // 	setActualImage(image === quantity - 1 ? 0 : image + 1);
  // };

  // const previousImage = () => {
  // 	setActualImage(image === 0 ? quantity - 1 : image - 1);
  // };

  //

  return (
    <>
      <Carousel>
        {data.map((movie) => {
          return (
            <Carousel.Item key={movie.id}>
              <img
                src={"{https://image.tmdb.org/t/p/original/${backdrop_path}"}
                alt="imagen1"
                className="d-block w-100"
              />
              <h3 >{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
    // 	<Flex className={estilos.container}>
    // 		<Button onClick={previousImage}>←</Button>
    // 		{movieImage.map((imagen, index) => {
    // 			return (
    // 				<Box
    // 					className={
    // 						image === index
    // 							? `${estilos.slide} ${estilos.active}`
    // 							: estilos.slide
    // 					}>
    // 					{image === index && (
    // 						<img key={index} src={imagen} alt="imagen" />
    // 					)}
    // 				</Box>
    // 			);
    // 		})}
    // 		<Button onClick={nextImage}>→</Button>
    // 	</Flex>
  );
}
