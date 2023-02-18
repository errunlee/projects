import './App.css'
import Home from './compo/Home'
import Sidebar from './compo/Sidebar'
import Modal from './compo/Modal'
import {AppProvider} from './compo/Context'
export default function App() {
  return (
    <main>
      <AppProvider>
      <Home/>    
      <Sidebar/>
        <Modal/>
      </AppProvider>
    </main>
  )
}
