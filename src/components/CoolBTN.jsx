const CoolBTN = ({text, containerClass}) => {
    return (
        <button
            className={`group cursor-pointer flex justify-between items-center bg-[#212121] hover:bg-black transition-colors duration-300 text-white rounded-full px-6 uppercase ${containerClass}`}>
            <p className="text-md font-medium whitespace-nowrap">{text}</p>
            <div className="bg-white rounded-full w-3 h-3 group-hover:w-12 group-hover:h-12 transition-all duration-300 flex justify-center items-center">
                <img src="/arrow.png" alt="arrow" className="w-[12px] hidden group-hover:block transition-all duration-300" />
            </div>
        </button>
    )
}

export default CoolBTN