
import './App.css';
import './Responsive.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
// import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Skills from './Components/Skills';
function App() {
  
  return (
    <>
    <Router>
   <Navbar/>
   <Routes>

   <Route path="/" element={<Home />} />
    <Route path="/Skills" element={<Skills />} />
    <Route path="/Project" element={<Project />} />
    <Route path="/Contact" element={<Contact />} />
    </Routes>
   </Router>
  </>
  )
}

export default App;