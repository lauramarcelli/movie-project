import { Container, Form, InputGroup, Button } from 'react-bootstrap';

export default function Search() {
  return (
    <Container>
  <InputGroup className="m-3">
        <Form.Control
          placeholder="buscar pelicula"
          aria-label="buscar pelicula"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
  </Container>
  )
}
