import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import TimerPage from "./pages/TimerPage";

function App() {
  return (
    <>
      <Sidebar />
      <RightPanel />
      <Routes>
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
