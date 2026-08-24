'use client'
import { useState } from "react"
import { about, socials } from "../constants"

const About = () => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <section id="about" className="bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl py-24 text-[#141f1a]">
        <div className="title font-[font1] text-[50px] leading-[52px] px-12">
            We craft category-defining presentations, brand <br />
            identities, and digital experiences that <span className="underline underline-offset-4 decoration-2">drive funding</span>, <br />
            <span className="underline underline-offset-4 decoration-2">sales</span>, and <span className="underline underline-offset-4 decoration-2">market leadership</span>.
        </div>
        <div className="expectations w-full flex mt-14 px-12 border-t-2 border-t-[#A6BD58] text-lg py-4">
            <div className="flex-50 text-[17px]">What you can expect:</div>
            <div className="flex-50 flex gap-40">
                <div className="about">
                    {about.map(({l1, l2, l3, l4}, index) => (
                        <div key={index} className={`${index === 1 && 'my-12'} text-[17px]`}>
                            {l1} <br />
                            {l2} <br />
                            {l3} <br />
                            {l4} <br />
                        </div>
                    ))}
                </div>
                <div className="socials text-[17px] flex justify-end flex-col">
                    S: 
                    <ul className="mt-4">
                        {socials.map(({social, link}, index) => (
                            <li key={index}>
                                <a className="relative group" href={link}>
                                    {social}
                                    <div className="absolute h-[1px] w-0 group-hover:w-[100%] transition-all duration-300 bg-[#212121] left-0 right-0 bottom-0" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="cta-image w-full border-t-2 border-t-[#A6BD58] mt-16 flex py-4 px-12 font-[font1]">
            <div className="cta flex-50">
                <h2 className="text-[55px]">How we can help:</h2>
                <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group cursor-pointer flex justify-between items-center bg-[#212121] hover:bg-black transition-colors duration-300 text-white rounded-full px-6 uppercase w-[200px] h-[60px]">
                    <p className="text-md font-medium whitespace-nowrap">Read More</p>
                    <div className="bg-white rounded-full w-3 h-3 group-hover:w-12 group-hover:h-12 transition-all duration-300 flex justify-center items-center">
                        <img src="/arrow.png" alt="arrow" className="w-[12px] hidden group-hover:block transition-all duration-300" />
                    </div>
                </button>
            </div>
            <div className={`image flex-50 rounded-xl overflow-hidden ${isHovered ? 'scale-[95%]' : 'scale-100'} transition-all duration-1000 ease-out`}>
                <img src="/about.jpg" alt="aboutImage" className="w-full h-full object-cover"/>
            </div>
        </div>
    </section>
  )
}

export default About