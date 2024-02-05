import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewMovies from "./pages/NewMovies";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import DetailMovie from "./components/MovieCatalogue/DetailMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detailMovie/:idMovie" element={<DetailMovie />} />
        </Routes>

        </>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
