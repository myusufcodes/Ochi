import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'

const App = () => {
  return (
    <main className='w-full h-screen bg-zinc-900 relative'>
      <section className="main w-full min-h-full bg-[#F1F1F1] text-zinc-900 pt-1 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
      </section>
    </main>
  )
}

export default App