import React from "react";
import MovieList from "./MovieLists/MovieList";
import MovieSlider from "./MovieSlider/MovieSlider";
import { Col, Row } from "react-bootstrap";
import useMovies from "../hooks/useMovies";
import { useEffect } from "react";

export default function Home() {
  const { popular, getPopular, topRated, getTopRated } = useMovies();

  useEffect(() => {
    getPopular();
    getTopRated();
  }, []);

  return (
    <>
      <MovieSlider />
      <Row>
        <Col className="mt-3">
          <MovieList data={popular} />
        </Col>
        {/* <Col className="mt-3">
          <MovieList data={topRated} />
        </Col> */}
      </Row>
    </>
  );
}
