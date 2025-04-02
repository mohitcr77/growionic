import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Charts } from './components/Charts'
import { Pricing } from './components/pricing'
import { Footer } from './components/Footer'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Charts/>
      <Pricing/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
