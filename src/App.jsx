import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useScrollTop from './hooks/useScrollTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'

import Home from './pages/Home'
import About from './pages/About'
import Vision from './pages/Vision'
import EveryPerson from './pages/EveryPerson'
import Tips from './pages/Tips'
import Services from './pages/Services'
import Team from './pages/Team'
import HostileActs from './pages/HostileActs'
import Contact from './pages/Contact'
import News from './pages/News'

export default function App() {
  const location = useLocation()
  useScrollTop()

  const isHome = location.pathname === '/'

  return (
    <>
      <Navbar solid={!isHome} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/every-person" element={<EveryPerson />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/hostile-acts" element={<HostileActs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingElements />
    </>
  )
}
