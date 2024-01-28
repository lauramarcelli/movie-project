import React from 'react'
import MovieList from './MovieLists/MovieList'
import MovieSlider from './MovieSlider/MovieSlider'
import { Col, Row } from 'react-bootstrap'

export default function Home() {
  return (
    <>
        <MovieSlider />
        <Row>
          <Col className='mt-3'>
          <div className="ms-3 mt-3 mb-3">
            <div className="fw-bold">Peliculas Populares</div>
          </div>
          <MovieList />
          </Col>
          <Col className='mt-3' >
          <div className="ms-3 mt-3 mb-3">
            <div className="fw-bold">Peliculas Mejor Puntuadas</div>
          </div>
          <MovieList />
          </Col>
        </Row>
    </>
  )
}
