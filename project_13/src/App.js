import './App.css';
import {AppProvider } from './Components/Context';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
// import Sidebar from './Components/Sidebar'
function App() {
  return (
   <>
   <AppProvider>
   <Navbar/>
   <div className="container position-relative">
   <Hero/>
   </div>
   </AppProvider>
   </>
  );
}

export default App;
