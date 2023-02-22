import './App.css'
import Tabs from './Tabs'
export default function App() {
  return (
    <main>
      <div className='d-flex flex-column align-items-center my-5'>
      <h1>Experience</h1>
      <div className='hr'></div>
      </div>
      <div className='container'>
      <Tabs/>
      </div>
    </main>
  )
}
