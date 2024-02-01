import React from 'react'
import MovieCatalogue from '../components/MovieCatalogue/MovieCatalogue'

export default function NewMovies() {
  return (
    <div>
        <h2>
            Ultimos Lanzamientos
        </h2>
        <MovieCatalogue category="now_playing" />
    </div>
  )
}
