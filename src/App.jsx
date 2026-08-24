import Navbar from './components/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className='w-full h-screen bg-zinc-900 relative'>
      <section className="main w-full h-full bg-[#F1F1F1] text-zinc-900 pt-1">
        <Navbar />
        <Hero />
      </section>
    </main>
  )
}

export default App