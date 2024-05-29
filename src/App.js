import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact'; 
import Error from './Pages/Error';


// import Transition from './Components/Transition';


function App() {
  return (
    
    <div className="App">
   <Router>
        <Navbar/>
   
             <Routes>
                   <Route path="/"  element={<Home/>}/>
                   <Route path="/about" element={<About/>}/>
                   <Route path="/skills" element={<Skills/>}/>
                   <Route path="/portfolio" element={<Portfolio/>}/>
                   <Route path="/contact" element={<Contact/>}/>
                   <Route path="/*" element={<Error/>}/>
              </Routes>
              
     </Router>
   {/* <Transition/> */}
   
    </div>
    
  );
}

export default App;
