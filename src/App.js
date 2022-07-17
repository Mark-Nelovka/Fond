import Header from "./Components/Header";
import Home from "./Components/Home";
import Help from "./Components/Help";
import Questions from "./Components/Questions";
import Support from "./Components/Support";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Fond" element={<Home />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
