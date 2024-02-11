import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewMovies from "./pages/NewMovies";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import DetailMovie from "./components/MovieCatalogue/DetailMovie";
import FavoritesContextProvider from "./Context/FavoritesContext";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <FavoritesContextProvider>
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
              <Route path="*" element={<Error404 />}/>
            </Routes>
          </>
        </BrowserRouter>
      </FavoritesContextProvider>
    </>
  );
}

export default App;
