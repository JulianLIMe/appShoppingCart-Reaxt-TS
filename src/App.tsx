import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="container-app">
        <Navbar />
        <ShoppingCart />
        <div className="container-routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
