import React from 'react'
import Tags from '../components/Tags'
import { cards } from '../constants'

const Cards = () => {
    return (
        <section id='cards' className='mt-24'>
            <div className='container flex justify-center items-center gap-8 px-12 w-full '>
                <div className='w-1/2 h-[400px] relative bg-[#004D43] text-[#CDEA68] flex justify-center items-center text-3xl rounded-xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo" width={150} />
                    <span className="copyright absolute left-8 bottom-7 px-4 py-1 border border-[#CDEA68] rounded-full text-[16px]">©2019–2025</span>
                </div>
                <div className='right-cards w-1/2 flex justify-center items-center gap-4'>
                    {cards.map(({ img, btnText }) => (
                        <div className="w-1/2 h-[400px] bg-[#212121] rounded-xl flex justify-center items-center relative">
                            <img src={img} alt="Logo" width={150} />
                            <div className='absolute bottom-7 flex justify-center items-center'>
                                <Tags text={btnText} textClass="text-white group-hover:text-[#212121]" animateddivClass="bg-white" containerClass="border border-white/30 px-5 py-1" />
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Cards