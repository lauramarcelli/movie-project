import Button from "react-bootstrap/Button";
import useMovies from "../../hooks/useMovies";
import { useEffect } from "react";
import { Col, Container, Card, Row } from "react-bootstrap";
import { TfiEye } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa"
import "./MovieCatalogue.css";
import { useNavigate } from "react-router-dom";


export default function MovieCatalogue({ category }) {
  const { data, getMovies } = useMovies();

  useEffect(() => {
    getMovies(category);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row>
          {data.map((movie) => {
            return (
              <Col  key={movie.id}>
                <Card
                 
                  className="custom-card"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                  />
                  <Card.Body>
                    <Card.Title className="custom-title">
                      {movie.title}
                    </Card.Title>
                    <Button onClick={() => navigate(`/detailMovie/${movie.id}`)}className="custom-btn"variant="secondary">
                      <TfiEye />
                    </Button>
                    <Button  className="custom-btn"variant="secondary">
                    <FaRegHeart />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
