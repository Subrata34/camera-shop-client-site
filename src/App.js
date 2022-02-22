import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ProductsEntry from './Components/ProductsEntry/ProductsEntry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="About" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="products" element={<Products />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="entry" element={<ProductsEntry />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
