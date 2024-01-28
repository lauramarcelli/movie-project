import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer"



function App() {


  return (
    <>
     <BrowserRouter>
        <Header />
        <Home />
        <Footer />
        <Routes>
          {/* <Route path="/" element={<ContainCard />} />
          <Route path="/detailCard/:id" element={<DetailCard />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
