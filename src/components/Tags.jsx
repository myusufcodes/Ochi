const Tags = ({ text }) => {
    return (
        <div className="tag cursor-pointer relative group uppercase text-[14px] font-[font1] tracking-wide border border-[#212121]/30 rounded-full px-4 py-1.5 overflow-hidden select-none">
            <span className='relative z-10 block group-hover:text-white transition-colors duration-300 ease-out'>
                {text}
            </span>
            <div className='absolute inset-0 bg-[#212121] rounded-full translate-y-[102%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0' />
        </div>
    )
}

export default Tags
