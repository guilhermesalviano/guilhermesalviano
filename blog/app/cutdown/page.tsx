export default function page() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl"><span className="text-purple-600 font-extrabold">JADE</span> IN SP</h1>
            
            <div className="grid max-sm:grid-cols-[auto_14px_auto_14px_auto_14px_auto] grid-cols-[auto_40px_auto_40px_auto_40px_auto] grid-rows-2 justify-center max-sm:gap-0 max-sm:px-4 px-8 text-center align-middle text-neutral-900 max-sm:text-xl text-6xl pt-6">
                <h3 className="day flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">33</h3>
                <h3  className="flex text-center justify-center items-center pb-2">:</h3>
                <h3 className="hour flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">00</h3>
                <h3  className="flex text-center justify-center items-center pb-2">:</h3>
                <h3 className="minutes flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">00</h3>
                <h3  className="flex text-center justify-center items-center pb-2">:</h3>
                <h3 className="secodes flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">00</h3>
                <p className="text-2xl max-md:text-xl max-sm:text-xs">Days</p>
                <div></div>
                <p className="text-2xl max-md:text-xl max-sm:text-xs">Hours</p>
                <div></div>
                <p className="text-2xl max-md:text-xl max-sm:text-xs">Minutes</p>
                <div></div>
                <p className="text-2xl max-md:text-xl max-sm:text-xs">Seconds</p>
            </div>
        </div>
    )
}