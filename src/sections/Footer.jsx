import { location, navLinks, socials } from '../constants'

const Footer = () => {
    return (
        <footer data-scroll data-scroll-speed="-.4" className='overflow-hidden reltaive z-15'>
            <div className='px-12 py-24 flex'>
                <div className='heading font-[font2] text-[150px] leading-[120px] w-1/2 uppercase'>
                    Eye- <br />
                    Opening
                </div>
                <div className='info w-1/2 flex flex-col gap-12'>
                    <div className='heading font-[font2] text-[150px] leading-[120px] uppercase'>
                        Presentations
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='info flex flex-col gap-8'>
                            <div className="socials text-[17px] flex justify-end flex-col">
                                S:
                                <ul className="mt-4">
                                    {socials.map(({ social, link }, index) => (
                                        <li key={index}>
                                            <a className="relative group" href={link}>
                                                {social}
                                                <div className="absolute h-[1px] w-0 group-hover:w-[100%] transition-all duration-300 bg-[#212121] left-0 right-0 bottom-0" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="Location text-[17px] flex justify-end flex-col">
                                L:
                                <ul className="mt-4 flex flex-col gap-4">
                                    {location.map(({ line1, line2 }, index) => (
                                        <li key={index}>
                                            <div className="relative group">
                                                {line1}
                                                <div className="absolute h-[1px] w-0 group-hover:w-[100%] transition-all duration-300 bg-[#212121] left-0 right-0 bottom-0" />
                                            </div>
                                            <div className="relative group">
                                                {line2}
                                                <div className="absolute h-[1px] w-0 group-hover:w-[100%] transition-all duration-300 bg-[#212121] left-0 right-0 bottom-0" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mail text-[17px] flex justify-end flex-col">
                                E:
                                <ul className="mt-4">
                                    <li>
                                        <a className="relative group" href="mailto:yusuf.dev.pk@gmail.com">
                                            yusuf.dev.pk@gmail.com
                                            <div className="absolute h-[1px] w-0 group-hover:w-[100%] transition-all duration-300 bg-[#212121] left-0 right-0 bottom-0" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-1/2 flex items-end justify-end'>
                            <div className="socials text-[17px] text-left ">
                                M:
                                <ul className="mt-4">
                                    {navLinks.map(({ title, href }, index) => (
                                        <li key={index}>
                                            <a className="relative group" href={href}>
                                                {title}
                                                <div className="absolute h-[1px] w-0 group-hover:w-[100%] transition-all duration-300 bg-[#212121] left-0 right-0 bottom-0" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-copyrights w-full flex justify-between items-center px-12 pb-4'>
                <img src="/logo.svg" alt="Logo" />
                <span className='flex justify-center items-center gap-2 text-[#b7b6b6]'>
                    © ochi design 2026. <span className='underline'><a href="#">Legal Terms</a></span>
                </span>
                <span className="underline text-[#b7b6b6] cursor-pointer">Website by Obys</span>
            </div>
        </footer>
    )
}

export default Footer