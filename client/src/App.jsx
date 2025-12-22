import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Project1 from "./components/Project1/Project1";
import Project2 from "./components/Project2/Project2";
import Project3 from "./components/Project3/Project3";
import Project4 from "./components/Project4/Project4";
import Project5 from "./components/Project5/Project5";
import SecretSanta from "./components/SecretSanta/SecretSanta";
import Rae from "./components/Rae/Rae";
import './App.css';

import {ContextProvider} from "./components/Context/Context";

function App() {
  

  return (
    <>
      <ContextProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/secretsanta" element={<SecretSanta />} />
          <Route path="/rae" element={<Rae />} />
      </Routes>
      </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
