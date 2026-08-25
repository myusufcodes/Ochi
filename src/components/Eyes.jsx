import { useEffect, useState } from "react"

const Eyes = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - (window.innerWidth / 2);
            let deltaY = mouseY - (window.innerHeight / 2);

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

            setRotate(angle - 180)
        })
    }, [rotate])
    return (
        <div className="eye-container flex gap-6 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="left-eye flex justify-center items-center left-eye w-50 h-50 bg-white rounded-full">
                <div className="relative w-[60%] h-[60%] rounded-full bg-zinc-900">
                    <div style={{ transform: ` rotate(${rotate}deg)` }} className={`line w-full absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}>
                        <div className="pupil  bg-white rounded-full w-[20px] h-[20px]"></div>
                    </div>
                </div>
            </div>

            <div className="right-eye flex justify-center items-center left-eye w-50 h-50 bg-white rounded-full">
                <div className="relative w-[60%] h-[60%] rounded-full bg-zinc-900">
                    <div style={{ transform: ` rotate(${rotate}deg)` }} className={`line w-full absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}>
                        <div className="pupil  bg-white rounded-full w-[20px] h-[20px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes