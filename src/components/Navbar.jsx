'use client'
import { navLinks } from "../constants"
import NavBtn from "./NavBtn"
import { useRef, useEffect } from "react"

const Navbar = () => {
    const navRef = useRef(null)
    const lastScroll = useRef(0);
    useEffect(() => {
        function handleScroll() {
            const currentScroll = window.scrollY

            const delta = currentScroll - lastScroll.current
            if (delta > 0) {
                navRef.current.style.top = '-100px'
            }
            if (delta < 0) {
                navRef.current.style.top = '0px'
            } if (delta === 0) {
                navRef.current.style.top = '0px'
            }

            lastScroll.current = currentScroll
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <nav ref={navRef} className='w-screen flex justify-between px-12 py-4 fixed top-0 z-50 transition-all duration-150 text-[#212121] bg-white/30 backdrop-blur-md'>
            <a href="#"><img src="/logo.svg" alt="Logo" /></a>
            <ul className='flex gap-8'>
                {navLinks.map(({ title, href }) => (
                    <li key={title} className="flex justify-center items-center text-lg">
                        <NavBtn title={title} href={href} />
                    </li>
                ))}
            </ul>
            <NavBtn title='Contact Us' href="#" />
        </nav>
    )
}

export default Navbar
