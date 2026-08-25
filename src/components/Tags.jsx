const Tags = ({ text, textClass, animateddivClass, containerClass }) => {
    return (
        <div className={`tag cursor-pointer relative group uppercase text-[14px] font-[font1] tracking-wide ${containerClass} rounded-full overflow-hidden select-none`}>
            <span className={`relative z-10 block ${textClass} transition-colors duration-300 ease-out`}>
                {text}
            </span>
            <div className={`absolute inset-0 ${animateddivClass}  rounded-full translate-y-[102%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0`} />
        </div>
    )
}

export default Tags
