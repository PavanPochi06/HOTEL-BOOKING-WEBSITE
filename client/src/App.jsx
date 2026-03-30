import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
