import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Buttons from "./pages/Buttons";
import Inputs from "./pages/Inputs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Buttons />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="inputs" element={<Inputs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
