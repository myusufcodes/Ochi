import { navLinks } from "../constants"
import NavBtn from "./NavBtn"

const Navbar = () => {
    
    return (
        <nav className='w-screen flex justify-between px-12 py-4 fixed top-0 z-50 text-[#212121]'>
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
