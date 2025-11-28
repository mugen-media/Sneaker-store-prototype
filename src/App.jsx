import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Men from "./pages/Men";
import Women from "./pages/Women";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />

    </Routes>

    
  )
}
export default App;