import './App.css';
import Slider from './Slider';

function App() {
  return (
 <div className='container'>
  <div className="title">
    <h1 className='text-center mt-5 mb-4' style={{color:'#324d67'}}>/ Reviews</h1>
  </div>
  <div className="box position-relative">
    <Slider/>
  </div>
 </div>
  )
}

export default App;
