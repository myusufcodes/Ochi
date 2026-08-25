import Eyes from '../components/Eyes'
import Tags from '../components/Tags'

const Contact = () => {
  return (
    <section id="contact" className='bg-[#CDEA68] flex justify-center items-center mt-44 relative rounded-tl-2xl rounded-tr-2xl'>
        <div className="container flex flex-col gap-12 justify-center items-center py-34">
            <h1 className='font-[font2] text-[240px] leading-[180px] uppercase text-center '>
                Ready <br />
                To Start <br />
                The Project?
            </h1>

            <div className="cta flex flex-col justify-center items-center font-[font1] gap-4">
                <Tags 
                text='Start the project'
                textClass="text-white group-hover:text-[#212121]"
                animateddivClass="bg-white"
                containerClass="border border-[#212121]/30 bg-[#212121] px-6 py-3"
                />
                OR
                <Tags 
                text='yusuf.dev.pk@gmail.com'
                textClass="group-hover:text-white"
                animateddivClass="bg-[#212121]"
                containerClass="border border-[#212121]/30 px-6 py-3"
                />
            </div>
        </div>

        <div className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
        <Eyes />
        </div>
    </section>
  )
}

export default Contact