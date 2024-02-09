import useMovies from "../../hooks/useMovies";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button, Col, Row, Spinner } from "react-bootstrap";
import "./DetailMovie.css";
import { FaRegPlayCircle } from "react-icons/fa";
import TrailerModal from "./TrailerModal";
import { useContext } from "react";

export default function DetailMovie() {
  const [showModal, setShowModal] = useState(false);
  const { data, getMovie, getMovieTrailer } = useMovies();
  const params = useParams();
  const trailerUrl = "https://www.youtube.com/watch?v=o-YBDTqX_ZU";
  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  useEffect(() => {
    getMovieTrailer(params.idMovie);
    getMovie(params.idMovie);
  }, [params]);

  return (
    <>
      {data?.title ? (
        <div
          className="background-container"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        >
          {
            <Row className="container_dark">
              <Col>
                <img
                  className="movie-image"
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                />
              </Col>
              <Col>
                <Row className="d-flex justify-content-end  mt-4">
                  <Col xs={12} sm={18} md={8}>
                    <h3 className="title-movie">{data.title}</h3>
                    <p className="title-year">
                      {data.release_date.slice(0, 4)}
                    </p>
                  </Col>
                  <Col>
                    <Button
                      onClick={handleShowModal}
                      className="button-detail "
                    >
                      <FaRegPlayCircle /> Ver Trailer
                    </Button>{" "}
                    <TrailerModal
                      show={showModal}
                      onHide={handleHideModal}
                      trailerUrl={trailerUrl}
                    />
                  </Col>
                </Row>
                <Col>
                  <h5 className="title-sinopsis">Sinopsis</h5>
                  <p className="data-movie">{data.overview}</p>
                  <h6 className="data-gender">Generos</h6>
                  <Col>
                    <ul variant="flush" className="custom-list-group">
                      {data.genres.map((genre) => (
                        <li className="li-list" key={genre.name}>
                          <p className="list-group" style={{ color: "white" }}>
                            {genre.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Col>
              </Col>
            </Row>
          }
        </div>
      ) : (
        <Container>
          <Button className="button-spinner"variant="secondary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Cargando...
          </Button>
        </Container>
      )}
    </>
  );
}
