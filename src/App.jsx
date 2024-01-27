import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSlider from "./components/MovieSlider/MovieSlider";




function App() {


  return (
    <>
     <BrowserRouter>
        <Header />
        <MovieSlider  />
        <Routes>
          {/* <Route path="/" element={<ContainCard />} />
          <Route path="/detailCard/:id" element={<DetailCard />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
