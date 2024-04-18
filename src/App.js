import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Games from "./pages/Games";
import Header from "./comps/Header";
import Page404 from "./pages/Page404";
import Query from "./pages/Query";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games" element={<Games />} />
        <Route path="/query" element={<Query />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
