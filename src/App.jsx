import { Route, Routes } from "react-router-dom";
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
    </div>
  );
};
export default App;
