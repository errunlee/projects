import './App.css'
import Reviews from './components/Reviews'
export default function App() {
  return (
    <main>
      <div className='d-flex flex-column align-items-center mt-4 '>
      <h1>Our Reviews</h1>
      <hr></hr>
      </div>
      <div className='container mt-5 d-flex flex-column justify-content-center align-items-center'>
      <Reviews/>
      </div>
    </main>
  )
}
