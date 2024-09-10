import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Like from "./pages/like/Like";
import Boxs from "./pages/boxs/Boxs";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/like" element={<Like />} />
        <Route path="/boxs" element={<Boxs />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
