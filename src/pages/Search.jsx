import { Container, Form, InputGroup, Button, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import useMovies from "../hooks/useMovies";
import MovieCatalogue from "../components/MovieCatalogue/MovieCatalogue";
import { TfiEye } from "react-icons/tfi";

export default function Search() {
  const [nameMovie, setNameMovie] = useState("");
  const { data, searchMovie } = useMovies();

  useEffect(() => {
    searchMovie(nameMovie);
  }, [nameMovie]);

  return (
    <Container>
      <InputGroup className="m-3  justify-content-md-center">
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
              <Col>
                <Card
                  key={movie.id}
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
   
    </Container>
  );
}

// import { useState } from "react";
// import { Input, Button, Center, Box, Flex } from "@chakra-ui/react";

// export default function Search({ addCity }) {
//   const [nameCity, setNameCity] = useState("");

//   return (
//     <Flex w="35%" justifyContent="space-around">
//       <Input
//         w="70%"
//         variant="filled"
//         placeholder="Ciudad..."
//         onChange={(e) => setNameCity(e.target.value)}
//         value={nameCity}
//       />
//       <Button
//         colorScheme="teal"
//         size="md"
//         onClick={() => {
//           setNameCity("");
//           addCity(nameCity);
//         }}
//       >
//         Buscar
//       </Button>
//     </Flex>
//   );
// }
