import { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";
import { Card, Container, Col, Button, Row } from "react-bootstrap";
import { TfiEye } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useMovies from "../hooks/useMovies";

const Favorites = () => {
  const { addFavs, delFavs, isFavs } = useContext(FavoritesContext);
  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const { data, getMovies } = useMovies();

  return (
    <Container>
      <h5 className="m-3">Mis Peliculas Favoritas</h5>
      {favorites.length === 0 ? (
        <p>No hay peliculas guardadas</p>
      ) : (
        <Container >
          
            <Row >
            {favorites.map((movie) => (
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
                    <Button
                      onClick={() => navigate(`/detailMovie/${movie.id}`)}
                      className="custom-btn"
                      variant="secondary"
                    >
                      <TfiEye />
                    </Button>
                    {isFavs(movie.id) ? (
                      <Button
                        className="custom-btn"
                        variant="secondary"
                        onClick={(e) => delFavs(e, movie.id)}
                      >
                        <FaHeart />
                      </Button>
                    ) : (
                      <Button
                        className="custom-btn"
                        variant="secondary"
                        onClick={(e) => addFavs(e,  movie )}
                      >
                        <FaRegHeart />
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
               ))}
            </Row>
         
        </Container>
      )}
    </Container>
  );
};

export default Favorites;

