import './App.css';
import Showlogin from './pages/Showlogin';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Error from './pages/Error';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Showlogin/>}/>
      <Route path='*' element={<Error/>}/>
    
    </Routes>
   </Router>
   </>
  );
}

export default App;
