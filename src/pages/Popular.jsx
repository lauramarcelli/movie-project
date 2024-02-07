import MovieCatalogue from '../components/MovieCatalogue/MovieCatalogue'
import Footer from '../components/Footer/Footer'

export default function Popular() {
  return (
    <div>
    <h3 className='mb-3 p-3'>
      Populares
    </h3>
    <MovieCatalogue category="popular" />
    <Footer/>
</div>
  )
}
