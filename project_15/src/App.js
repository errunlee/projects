import './App.css';
import Allitems from './components/Allitems';
import About from './components/About'
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Info from './components/Info';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Allitems/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/info' element={<Info/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
