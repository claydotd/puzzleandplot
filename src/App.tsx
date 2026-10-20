import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Media from './pages/Media'
import FAQ from './pages/FAQ'
import Weddings from './pages/services/Weddings'
import VirtualRooms from './pages/services/VirtualRooms'
import PuzzleTrail from './pages/services/PuzzleTrail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="media" element={<Media />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/virtual-rooms" element={<VirtualRooms />} />
        <Route path="/puzzle-trail" element={<PuzzleTrail />} />
      </Route>
    </Routes>
  )
}
