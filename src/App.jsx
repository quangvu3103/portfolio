import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Skill from './components/Skill'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antiliased  selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full" ></div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      
      <div className="container mx-auto px-8" >

        <Navbar />
        <Hero />
        <About />
        <Skill/>
        <Project />
        <Technologies />
        
        
        
        
      </div>
    </div>
  )
}

export default App