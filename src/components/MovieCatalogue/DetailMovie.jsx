import useMovies from "../../hooks/useMovies";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import "./DetailMovie.css";
import { FaRegPlayCircle } from "react-icons/fa";
import TrailerModal from "./TrailerModal";

export default function DetailMovie() {
  const [showModal, setShowModal] = useState(false);
  const trailerUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const { data, getMovie } = useMovies();
  const params = useParams();

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  useEffect(() => {
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
          <Row>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            />
            <Col>
              <Container className="d-flex justify-content-end mt-5">
                <Col xs={12} md={8}>
                  <h3 className="title-movie">{data.title}</h3>
                  <p className="title-year">{data.release_date.slice(0, 4)}</p>
                </Col>

                <Col xs={6} md={4}>
                  <Button onClick={handleShowModal} className="button-detail ">
                    <FaRegPlayCircle /> Ver Trailer
                  </Button>{" "}
                  <TrailerModal
                    show={showModal}
                    onHide={handleHideModal}
                    trailerUrl={trailerUrl}
                  />
                </Col>
              </Container>
              <Container>
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
              </Container>
            </Col>
          </Row>
        </div>
      ) : (
        <Container>
          <h5>hacer spinner</h5>
        </Container>
      )}
    </>
  );
}

// {data?.title?(
//   <div
//     className="background-container"
//     style={{
//       backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`
//     }}
//   >
//     <Container classname="movie-detail">
//       <img
//         src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
//         style={{ width: "270px", marginRight: "100px" }}
//       />
//       <Container>
//         <Container>
//           <Container>
//             <h3>{data.title}</h3>
//             <p>{data.release_date.slice(0, 4)}</p>
//           </Container>
//           <Button>Ver Peli</Button>
//         </Container>
//         <p>Sinopsis</p>
//         <p>{data.overview}</p>
//         <p>Genres</p>
//         <ListGroup>
//           {data.genres.map((genre) => (
//             <ListGroupItem key={genre.name}>
//               <p>- {genre.name}</p>
//             </ListGroupItem>
//           ))}
//         </ListGroup>
//       </Container>
//     </Container>
//   </div>
// ):(<Container>
//   <h5>hacer spinner</h5>
//   </Container>)}
