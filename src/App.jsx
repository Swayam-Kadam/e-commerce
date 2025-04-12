import './App.css'
import Navbar from './Navbar.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './Home/HomePage.jsx'
import Foter from './Foter.jsx'
import ShopPage from './Shop/ShopPage.jsx'
import AboutusPage from './Pages/About us/AboutusPage.jsx'
import Contectus from './Pages/Contect us/Contectus.jsx'
import FaqPage from './Pages/Faq/FaqPage.jsx'
import WhishlistPage from './Whishlist/WhishlistPage.jsx'
import FoterNav from './FoterNav.jsx'
import { useState } from 'react'
import LoginModal from './LoginModal.jsx'
import Signup from './Signup.jsx'

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignup,setSignup] = useState(false)

  const openLoginModal = () => setIsLoginOpen(true)
  const closeLoginModal = () => setIsLoginOpen(false)

  const openSignupModal = () => setSignup(true)
  const closeSignupModal = () => setSignup(false)

  return (
    <>
    <Router>
    <Navbar openLoginModal={openLoginModal} />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/about' element={<AboutusPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/contect' element={<Contectus/>}/>
        <Route path='/whishlist' element={<WhishlistPage/>}/>
        
      </Routes>
      <Foter/>
      <FoterNav/>
    </Router>

    <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} isOpenSignup={openSignupModal}/>
    <Signup isOpen={isSignup} onClose={closeSignupModal}/>
    </>
  )
}

export default App
