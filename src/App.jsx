import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'

function App() {

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
