import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
     <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<ContainCard />} />
          <Route path="/detailCard/:id" element={<DetailCard />} /> */}
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
