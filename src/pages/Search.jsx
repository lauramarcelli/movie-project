import {
  Container,
  Form,
  InputGroup,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import useMovies from "../hooks/useMovies";
import { TfiEye } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../Context/FavoritesContext";  
export default function Search() {
  const [nameMovie, setNameMovie] = useState("");
  const { data, searchMovie } = useMovies();
  const navigate = useNavigate();
  const { addFavs, delFavs, isFavs } = useContext(FavoritesContext);

  useEffect(() => {
    searchMovie(nameMovie);
  }, [nameMovie]);

  return (
    <>
      <InputGroup className="m-5 w-75 justify-content-md-center">
        <Form.Control
          placeholder="buscar pelicula"
         
          value={nameMovie}
          onChange={(e) => setNameMovie(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          onClick={() => {
            setNameMovie("");
            addMovie(nameMovie);
          }}
        >
          Buscar
        </Button>
      </InputGroup>
      <>
        <Container>
          <Row>
            {data.map((movie) => {
              return (
                <Col key={movie.id}>
                  <Card className="custom-card" style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    />
                    <Card.Body>
                      <Card.Title className="custom-title">
                        {movie.title}
                      </Card.Title>
                      <Button onClick={() => navigate(`/detailMovie/${movie.id}`)}
                          className="custom-btn"
                          variant="secondary">
                        <TfiEye />
                      </Button>
                      {isFavs(movie.id) ? (
                          <Button className="custom-btn" variant="secondary" onClick={(e) => delFavs(e, movie.id)}>
                            <FaHeart />
                          </Button>
                        ) : (
                          <Button className="custom-btn" variant="secondary" onClick={(e) => addFavs(e,  movie )}>
                            <FaRegHeart />
                          </Button>
                        )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
      <Footer />
    </>
  );
}
