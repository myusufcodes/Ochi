const Marquee = () => {
  return (
    <section id="marquee" className='bg-[#004D43] rounded-tl-2xl rounded-tr-2xl text-white py-20'>
        <div className="marquee border-y-2 border-y-[#3A756E]">
            <div className="marquee-container flex gap-14 whitespace-nowrap justify-center items-center -pb-8">
            <div className='marquee-text text-[400px] font-[font2] uppercase leading-[350px]'>We are ochi</div>
            <div className='marquee-text text-[400px] font-[font2] uppercase leading-[350px]'>We are ochi</div>
            <div className='marquee-text text-[400px] font-[font2] uppercase leading-[350px]'>We are ochi</div>
            </div>
        </div>
    </section>
  )
}

export default Marquee