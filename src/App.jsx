import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSlider from "./components/MovieSlider";


function App() {


  return (
    <>
     <BrowserRouter>
        <Header />
        <MovieSliderSlider images={movieImage} />
        <Routes>
          {/* <Route path="/" element={<ContainCard />} />
          <Route path="/detailCard/:id" element={<DetailCard />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
