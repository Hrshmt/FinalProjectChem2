import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components'
import Home from './pages/Home'
import RedoxEngine from './pages/RedoxEngine'
import GasLab from './pages/GasLab'
import ManitobaFuture from './pages/ManitobaFuture'

function App() {
    const location = useLocation()

    return (
        <div className="app">
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/redox-engine" element={<RedoxEngine />} />
                    <Route path="/gas-lab" element={<GasLab />} />
                    <Route path="/manitoba-future" element={<ManitobaFuture />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App
