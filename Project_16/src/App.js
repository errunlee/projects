import './App.css';
import Showlogin from './pages/Showlogin';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Privateroutes from './components/Privateroutes';
import Error from './pages/Error';
import Authwrapper from './components/Authwrapper';
function App() {
  return (
   <>
   <Authwrapper>
   <Router>
    <Routes>
      
      <Route path='/' element={<Privateroutes><Dashboard/></Privateroutes>}/>
      <Route path='/login' element={<Showlogin/>}/>
      <Route path='*' element={<Error/>}/>
    
    </Routes>
   </Router>
   </Authwrapper>

   </>
  );
}

export default App;
