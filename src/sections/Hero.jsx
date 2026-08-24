const Hero = () => {
    return (
        <section id='hero' className='w-full mt-36 flex flex-col gap-[80px]'>
            <div className="hero-heading px-12">
                <h1 className='font-[font2] text-[140px] leading-[110px] text-[#212121] uppercase '>
                    <div>
                        We Create
                    </div>
                    <div className='flex justify-start items-center gap-4'>
                        <div className='image w-[140px] h-[90px] overflow-hidden rounded-lg flex justify-center items-center relative top-2'>
                        <img src="/heroImg.jpg" alt="Hero" className='w-full h-full object-cover'/>
                        </div>
                        Eye-Opening
                    </div>
                    <div>
                        Presentations
                    </div>
                </h1>
            </div>
            <div className="info border-t border-t-[#D2D2D2]  flex justify-between w-full font-[font1] pt-4 px-12">
                <div className="text flex justify-center items-center">Presentation and storytelling agency</div>
                <div className="text flex justify-center items-center">For Innovation Teams and global brands</div>
                <div className="btn text-center">
                    <button className='group uppercase flex justify-center items-center cursor-pointer gap-1'>
                        <div className='group-hover:bg-[#212121] group-hover:text-white rounded-full px-3 py-0.5 border transition-all duration-300'>Start the project</div>
                        <div className='group-hover:bg-[#212121] rounded-full p-2 border transition-all duration-300'>
                            <img src="/arrow.png" alt="arrow" width={10} className="group-hover:invert transition-all duration-300" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="scroll-down text-[#C2C2C2] text-center">
                Scroll Down
            </div>
        </section>
    )
}

export default Hero