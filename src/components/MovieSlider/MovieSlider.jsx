import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import { Button, Carousel, CarouselCaption } from "react-bootstrap";
import "./MovieSlider.css";

export default function MovieSlider() {
  const { popular, getPopular } = useMovies();

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <Carousel fade>
        {popular.map((movie) => {
          return (
            <Carousel.Item
              className="carousel-item"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
              key={movie.id}
            >
              <CarouselCaption>
                <div
                  className="opacity-75"
                  style={{ backgroundColor: "#554f4fcf" }}
                >
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <Button className=" btn btn-secondary">Ver más</Button>
                </div>
              </CarouselCaption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
