const NavBtn = ({title, href}) => {
    return (
        <a href={href} className='group relative h-[30px] text-center px-1 font-[font1] font-light transition-all duration-300 overflow-hidden text-lg'>
            <div className='group-hover:translate-y-[-30px] transition-all duration-150'>{title}</div>
            <div className='group-hover:translate-y-[-28px] transition-all duration-150'>{title}</div>
            <div className="absolute h-[1px] w-0 group-hover:w-[100%] transition-all duration-150 bg-zinc-900 left-0 right-0 bottom-0"></div>
        </a>
    )
}

export default NavBtn