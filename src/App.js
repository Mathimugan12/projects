import './App.css';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import Menu from './components/menu';
import About from './components/about';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      
       <Router>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
