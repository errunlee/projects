import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MovieDetail from './pages/MovieDetail'
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/movie/:id' element={<MovieDetail/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
