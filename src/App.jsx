import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <main>
    <Hero />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    </main>
    <p className="text-center py-4 text-sm">&copy; {new Date().getFullYear()} Youssef Marey.All Rights Reserved.</p>
    </>
  )
}

export default App