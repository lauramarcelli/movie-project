import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import { Button, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

export default function MovieList({category}) {
  const { data, getMovies } = useMovies();
  useEffect(() => {
    getMovies(category);
  }, []);


  return (
    <>
      <ListGroup  style={{ marginBottom: "5px", marginTop: "20px",  maxHeight: '350px', overflowY: 'scroll' }} as="ol">
        {data.map((movie) => {
          return (
            <ListGroup.Item  className="listgroupitem-item d-flex justify-content-between "
              as="li"
              key={movie.id}
            >
              <div className="me-auto">
                <div className="mt-2 fw-bold">{movie.title}</div>
              </div>
              <Col xs={6} md={4}>
                <Avatar src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} size="50" round={true} />
              </Col>
              <Link  to={`/detailMovie/${movie.id}`}>
              <Button  bg="primary"><BsArrowRightCircle /></Button>
              </Link>
              
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}


