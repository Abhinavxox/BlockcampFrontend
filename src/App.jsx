import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import { Publish } from "./components/Publish";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="m-0">
      <Navbar />
      <div className="h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
