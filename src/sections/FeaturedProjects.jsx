import Tags from "../components/Tags"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import { useState } from "react"
import { featuredProjects } from "../constants"

const FeaturedProjects = () => {

    const [hoveredData, setHoveredData] = useState({title: '', index: ''})
    gsap.registerPlugin(SplitText)
    useGSAP(() => {
        if(!hoveredData.title || hoveredData.index === '') return;
        const targetSelector = `.project-pair-${hoveredData.index} .bigtitle`
        const BigTitle = new SplitText(targetSelector, { type: 'chars' })
        const timeline = gsap.timeline();
        timeline.from(BigTitle.chars, {
            y: 100,
            opacity: 0,
            duration: 0.1,
            stagger: 0.02,
            ease: 'power3.inOut',
        })

        return () => {
            BigTitle.revert()
        }

    }, [hoveredData])

    return (
        <section id="featured-projects" className='pt-20'>
            <h1 className='font-[font1] text-[50px] px-12 text-[#212121]'>
                Featured Projects
            </h1>
            <div className="projects-container border-t-2 border-t-[#BEBEBE] mt-8 pt-12 px-12 w-full flex flex-col gap-14">

                {featuredProjects.map(({project1, project2}, pairIndex) => {
                    return(
                        <div key={pairIndex} className={`project-pair project-pair-${pairIndex} flex gap-4 relative`}>

                    <div className="project-1 flex flex-col gap-3 w-1/2">
                        <div className="title flex gap-2 items-center">
                            <div className='w-3 h-3 rounded-full bg-[#212121]' />
                            <p className='uppercase font-[font1] text-[16px]'>{project1.title}</p>
                        </div>

                        <div onMouseEnter={() => setHoveredData({title: project1.title, index: pairIndex})} onMouseLeave={() => setHoveredData({title: '', index: ''})} className='overflow-hidden rounded-xl w-full h-full cursor-pointer'>
                            <img src={project1.img} alt="project1" className='w-full h-full object-cover ' />
                        </div>

                        <div className="tag-container flex items-center gap-3">
                          {project1.tags.map((tag) => (
                            <Tags text={tag} />
                          ))}
                        </div>
                    </div>

                    <div className="project-2 flex flex-col gap-3 w-1/2">
                        <div className="title flex gap-2 items-center">
                            <div className='w-3 h-3 rounded-full bg-[#212121]' />
                            <p className='uppercase font-[font1] text-[16px]'>{project2.title}</p>
                        </div>

                        <div onMouseEnter={() => setHoveredData({title:project2.title, index: pairIndex})} onMouseLeave={() => setHoveredData({title: '', index: ''})} className='overflow-hidden rounded-xl w-full h-full cursor-pointer'>
                            <img src={project2.img} alt="project1" className='w-full h-full object-cover' />
                        </div>

                        <div className="tag-container flex items-center gap-3">
                            {project2.tags.map((tag) => (
                                <Tags text={tag} />
                            ))}
                        </div>
                    </div>

                    <div key={`${hoveredData.title}-${pairIndex}`} className="bigtitle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center font-[font2] text-[150px] text-[#CDEA68] overflow-hidden text-nowrap leading-[130px] pb-2">
                    {hoveredData.index === pairIndex ? hoveredData.title : ''}
                    </div>
                </div>
                    )
                })}

            </div>
        </section>
    )
}

export default FeaturedProjects