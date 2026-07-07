import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Toulouse, recalled — day / night swap with the theme */}
      <div className="bg-layer bg-day" aria-hidden />
      <div className="bg-layer bg-night" aria-hidden />
      <div className="bg-layer bg-glow" aria-hidden />

      <div className="shell">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Work />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
