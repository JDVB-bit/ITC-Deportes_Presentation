import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sports from './components/Sports'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import SportsRules from './components/SportsRules'
import PlatformPreview from './components/PlatformPreview'
import TrustMessage from './components/TrustMessage'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import TournamentGallery from './components/TournamentGallery'

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('itc-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('itc-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-green-deep text-gray-900 dark:text-gray-100 font-body transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className={`transition-[padding] duration-300 ${sidebarOpen ? 'xl:pl-64' : ''}`}>
        <Hero />
        <About />
        <Sports />
        <TournamentGallery />
        <Benefits />
        <HowItWorks />
        <SportsRules />
        <PlatformPreview />
        <TrustMessage />
        <FAQ />
        <FinalCTA />
      </main>
      <div className={`transition-[padding] duration-300 ${sidebarOpen ? 'xl:pl-64' : ''}`}>
        <Footer />
      </div>
    </div>
  )
}
