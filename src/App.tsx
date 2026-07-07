import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Work from './components/Work'
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
          <Experience />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
