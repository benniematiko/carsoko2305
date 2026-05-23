import { useState } from 'react'
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import CarsInStock from './pages/carsinstock/CarsInStock'
import IncomingCars from './pages/incomingcars/IncomingCars'
import Footer from './components/footer/Footer'
import ContactUs from './pages/contactus/ContactUs'
import AutoCare from './pages/autocare/AutoCare'
import ImportServices from './pages/importservices/ImportServices'
import Finance from './pages/finance/Finance'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carsinstock" element={<Home />} />
        <Route path="/carsinstock" element={<CarsInStock />} />
        <Route path="/incomingcars" element={<IncomingCars />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/importservices" element={<ImportServices />} />
        <Route path="/autocare" element={<AutoCare />} />
        <Route path="/contactus" element={<ContactUs />} />
        
      </Routes>

      <Footer />
    </Router>
       
   </div>
  )
}

export default App
