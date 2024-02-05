import Button from "react-bootstrap/Button";
import useMovies from "../../hooks/useMovies";
import { useEffect, useState } from "react";
import { Col, Container, Card, Row } from "react-bootstrap";
import { TfiEye } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa"
import "./MovieCatalogue.css";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

export default function MovieCatalogue({ category }) {
  const [page, setPage] = useState(1);
  const { data, getMovies } = useMovies();

  useEffect(() => {
    getMovies(category, page);
  }, [page]);

  const navigate = useNavigate();

  return (
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
        <Pagination>
          <Pagination.First />
          <Pagination.Prev onClick={() => setPage(page - 1)} />
          <Pagination.Item onClick={() => setPage(1)} active>
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item onClick={() => setPage(2)}>
            {2}
          </Pagination.Item>
          <Pagination.Item onClick={() => setPage(3)}>
            {3}
          </Pagination.Item>
          <Pagination.Item onClick={() => setPage(4)}>
            {4}
          </Pagination.Item>
          <Pagination.Item onClick={() => setPage(5)}>
            {5}
          </Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item onClick={() => setPage(160)}>
            {160}
          </Pagination.Item>
          <Pagination.Next onClick={() => setPage(page + 1)} />
        </Pagination>
        
      </Container>
    </>
  );
}
