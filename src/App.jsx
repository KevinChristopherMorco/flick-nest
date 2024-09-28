import "typeface-inter";
import "typeface-poppins";
import "typeface-lato";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import HomeLayout from "./components/pages/home/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
