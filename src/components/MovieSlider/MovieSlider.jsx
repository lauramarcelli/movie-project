import { useState, useEffect } from "react";
import useMovies from "../hooks/useMovies";
import { Button, Carousel, CarouselCaption } from "react-bootstrap";
import "./MovieSlider.css"

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
      <Carousel fade data-bs-theme="dark">
        {data.map((movie) => {
          return (
            <Carousel.Item className="carousel-item" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}key={movie.id}>
              {/* <div className="">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="imagen1"
                style={{ object-fit: scale-down;
                  height: '50vh';
                  width: '100%'' }}
   
              />
              </div> */}
              <CarouselCaption className="opacity-75">
                <div className="w-25 p-3 mb-2 mx-auto bg-secondary-subtle">
                  <h3 className="text-center  text-dark-emphasis">{movie.title}</h3>
                  <p className="text-dark-emphasis">{movie.overview}</p>
                  <Button className=" mt-3 position-relative top-50 start-25 translate-middle">
                    Ver más
                  </Button>
                </div>
               </CarouselCaption>
           
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
