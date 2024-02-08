import MovieList from "../components/MovieLists/MovieList";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <MovieSlider category="now_playing" />
      <Container>
        <Row>
          <Col className="mt-3">
            <h5>Peliculas más porpulares</h5>
            <MovieList category="popular" />
          </Col>

          <Col className="mt-3">
            <h5>Peliculas mejor puntuadas</h5>
            <MovieList category="top_rated" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
