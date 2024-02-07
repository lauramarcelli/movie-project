import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import { Button, Carousel, CarouselCaption } from "react-bootstrap";
import "./MovieSlider.css";

export default function MovieSlider({ category }) {
  const { data, getMovies } = useMovies();

  useEffect(() => {
    getMovies(category);
  }, []);

  return (
    <>
      <Carousel fade>
        {data.map((movie) => {
          return (
            <Carousel.Item
              className="carousel-item"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
              key={movie.id}
            >
              <CarouselCaption className="carousel-data">
                <div>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                  <Button className=" mb-2 btn btn-secondary">Ver más</Button>
                </div>
              </CarouselCaption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
