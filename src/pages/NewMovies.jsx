import React from 'react'
import MovieCatalogue from '../components/MovieCatalogue/MovieCatalogue'

export default function NewMovies() {
  return (
    <div>
        <Title>
            Ultimos Lanzamientos
        </Title>
        <MovieCatalogue category="now_playing" />
    </div>
  )
}
