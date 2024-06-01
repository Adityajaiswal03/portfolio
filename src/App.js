import './App.css';
import "./Navbar.js"
import Navbar from "./Navbar";
import About from './About/About.js'
import Education from './Education/Education.js'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Education" element={<Education />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
