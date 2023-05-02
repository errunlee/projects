import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MovieDetail from './pages/MovieDetail'
import Searchresults from './pages/Searchresults';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/:id' element={<MovieDetail/>}/>
      <Route exact path='/search/:query' element={<Searchresults/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;