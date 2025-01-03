import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import TimerPage from "./pages/TimerPage";
import Home2 from "./pages/Home2";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<Home2 />} />
      </Routes>
    </>
  );
}

export default App;
