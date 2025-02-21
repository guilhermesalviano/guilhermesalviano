export default function page() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl"><span className="text-purple-600 font-extrabold">JADE</span> IN SP</h1>
            <div className="grid grid-cols-7 grid-rows-2 gap-4">
                <div className="text-center align-middle text-neutral-900 max-md:text-xl max-sm:text-xl text-6xl pt-6 gap-4">
                    <div>
                        <h3 className="day flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">33</h3>
                    </div>
                    <div>
                        <h3  className="dots flex text-center justify-center">:</h3>
                    </div>
                    <div>
                        <h3 className="hour flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">00</h3>
                    </div>
                    <div>
                        <h3  className="dots flex text-center justify-center">:</h3>
                    </div>
                    <div>
                        <h3 className="minutes flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">00</h3>
                    </div>
                    <div>
                        <h3  className="dots flex text-center justify-center">:</h3>
                    </div>
                    <div>
                        <h3 className="secodes flex text-center justify-center border-2 border-purple-400 rounded-2xl p-6">00</h3>
                    </div>
                </div>
                <div className="flex text-center items-center justify-center align-middle max-md:text-xl max-sm:text-xl text-2xl max-md:gap-10 gap-12">
                    <p>Days</p>
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Secods</p>
                </div>
            </div>
        </div>
    )
}