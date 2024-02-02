import MovieCatalogue from '../components/MovieCatalogue/MovieCatalogue'

export default function Popular() {
  return (
    <div>
    <h3 className='mb-3 p-3'>
      Populares
    </h3>
    <MovieCatalogue category="popular" />
</div>
  )
}
