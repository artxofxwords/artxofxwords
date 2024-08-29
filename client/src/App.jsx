import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
