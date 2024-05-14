
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { HomePage, AboutUs, ServicesPage, SustainabilityPage, LithiumPage, GoldPage, Assets,
  Team, Reports, Contact, Careers, Contract } from './pages';
import { NavBar } from './components';

function App() {

  return (

    <BrowserRouter>

      <NavBar/>
      
      <Routes>
      <Route path='/' element= {<HomePage/>}/>
      <Route path='/about-us' element= {<AboutUs/>}/>
      <Route path='/services-page' element={<ServicesPage/>} />
      <Route path='/sustainability-page' element={<SustainabilityPage/>} />
      <Route path='/product-lithium' element={<LithiumPage/>} />
      <Route path='/product-gold' element={<GoldPage/>} />
      <Route path='/assets' element={<Assets/>} />
      <Route path='/contact-us' element={<Contact/>} />
      <Route path='/careers' element={<Careers/>} />
      <Route path='/reports' element={<Reports/>} />
      <Route path='/contract' element={<Contract/>} />
      <Route path='/team' element={<Team/>} />
      </Routes>


    </BrowserRouter>
    
  )
}

export default App
