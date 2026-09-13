import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function Divider() {
  return <div className="divider" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Certifications />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-logo">Kelvin</div>
        <div className="footer-copy">
         <p>&copy;{new Date().getFullYear()} Kelvin Wambua Mwanzia. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
