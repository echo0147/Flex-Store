import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { LoginSignup } from "./Pages/LoginSignup";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer/Footer";
import supplement_banner from "./Components/Assets/banner_supplements.png";
import snacks_banner from "./Components/Assets/banner_snacks.png";
import accessories_banner from "./Components/Assets/banner_accessories.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/Supplements"
            element={<ShopCategory banner={supplement_banner} category="Supplements" />}
          />
          <Route
            path="/Accessories"
            element={<ShopCategory banner={accessories_banner} category="Accessories" />}
          />
          <Route path="/Snacks" element={<ShopCategory banner={snacks_banner} category="Snacks" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
