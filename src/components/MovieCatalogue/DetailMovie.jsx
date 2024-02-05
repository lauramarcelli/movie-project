import useMovies from "../../hooks/useMovies";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./DetailMovie.css";

export default function DetailMovie() {
  const { data, getMovie } = useMovies();
  const params = useParams();

  

  useEffect(() => {
    getMovie(params.idMovie);
  }, [data]);

  return (
    <>
      {data.title(
        <Container
          className="background-container"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        >
          <Container classname="movie-detail">
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              style={{ width: "270px", marginRight: "100px" }}
            />
            <Container>
              <Container>
                <Container>
                  <h3>{data.title}</h3>
                  <p>{data.release_date.slice(0, 4)}</p>
                </Container>
                <Button>Ver Peli</Button>
              </Container>
              <p>Sinopsis</p>
              <p>{data.overview}</p>
              <p>Genres</p>
              <ListGroup>
                {data.genres.map((genre) => (
                  <ListGroupItem key={genre.name}>
                    <p>- {genre.name}</p>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Container>
          </Container>
        </Container>
      )}
      ;
    </>
  );
}
