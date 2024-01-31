import React from "react";
import MovieList from "../components/MovieLists/MovieList";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import { Col, Row } from "react-bootstrap";


export default function Home() {


  return (
    <>
      <MovieSlider category="now_playing"/>
      <Row>
        <Col className="mt-3">
          <MovieList category="popular" />
        </Col>
        <Col className="mt-3">
          <MovieList category="top_rated" />
        </Col>
      </Row>
    </>
  );
}
