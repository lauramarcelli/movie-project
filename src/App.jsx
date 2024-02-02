import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewMovies from "./pages/NewMovies";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Popular from "./pages/Popular";
import Search from "./pages/Search";

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
        </Routes>

        </>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
