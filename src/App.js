import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Home/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Tools/Products';
import Signup from './Pages/Home/Login/Signup';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
