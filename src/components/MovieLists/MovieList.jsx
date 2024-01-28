import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import Badge from "react-bootstrap/Badge";
import { Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Avatar from "react-avatar";

export default function MovieList() {
  const { data, getPopular, getTopRated } = useMovies();

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <ListGroup as="ol">
        {data.map((movie) => {
          return (
            <ListGroup.Item  className="mt-2 d-flex justify-content-between align-items-start"
              as="li"
              key={movie.id}
            >
              <div className="me-auto">
                <div className="mt-2 fw-bold">{movie.title}</div>
              </div>
              <Col xs={6} md={4}>
                <Avatar src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} size="50" round={true} />
              </Col>
              <Badge bg="primary" pill>
                >
              </Badge>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}
