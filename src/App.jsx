import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-movies" element={<NewMovies />}></Route>
          {/* <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
