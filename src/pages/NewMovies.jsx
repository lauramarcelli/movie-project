import MovieCatalogue from "../components/MovieCatalogue/MovieCatalogue";
import Footer from "../components/Footer/Footer";

export default function NewMovies() {
  return (
    <div>
      <h3 className="mb-3 p-3">Ultimos Lanzamientos</h3>
      <MovieCatalogue category="now_playing" />
      <Footer />
    </div>
  );
}
