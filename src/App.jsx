import Navbar from './components/Navbar'
import About from './sections/About'
import Cards from './sections/Cards'
import Contact from './sections/Contact'
import FeaturedProjects from './sections/FeaturedProjects'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Play from './sections/Play'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className='w-full h-screen bg-zinc-900 relative'>
      <section className="main w-full min-h-full bg-[#F1F1F1] text-zinc-900 pt-1 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Play />
        <FeaturedProjects />
        <Cards />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}

export default App