import './App.css'
import Menu from './Menu'
export default function App() {
  return (
    <main>
      <div className='d-flex justify-content-center flex-column align-items-center my-3'>
        <h1>Our Menu</h1>
      <hr></hr>
      </div>
      <div className='container'>
      <Menu/>
      </div>
    </main>
  )
}
