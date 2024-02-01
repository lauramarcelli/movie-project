import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewMovies from "./pages/NewMovies";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<NewMovies />} />
        </Routes>

        </Container>  
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
