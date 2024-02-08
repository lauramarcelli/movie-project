import { Container, Form, InputGroup, Button, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import useMovies from "../hooks/useMovies";
import { TfiEye } from "react-icons/tfi";
import Footer from "../components/Footer/Footer";

export default function Search() {
  const [nameMovie, setNameMovie] = useState("");
  const { data, searchMovie } = useMovies();

  useEffect(() => {
    searchMovie(nameMovie);
  }, [nameMovie]);

  return (
    <>
      <InputGroup className="m-5 w-75 justify-content-md-center">
        <Form.Control
          placeholder="buscar pelicula"
          aria-label="buscar pelicula"
          aria-describedby="basic-addon2"
          value={nameMovie}
          onChange={(e) => setNameMovie(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
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
              <Col   key={movie.id}>
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
                    <Button variant="secondary">
                      <TfiEye />
                    </Button>
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


