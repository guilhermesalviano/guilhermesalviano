type CutdownProps = {
    timeLeft: Array<string>
}
export function Cutdown({ timeLeft }: CutdownProps) {
    const [days, hours, minutes, seconds] = timeLeft;

    return (
        <div className="grid max-sm:grid-cols-[auto_14px_auto_14px_auto_14px_auto] grid-cols-[auto_40px_auto_40px_auto_40px_auto] grid-rows-2 justify-center max-sm:gap-0 gap-1 max-sm:px-4 px-8 text-center align-middle text-neutral-900 max-sm:text-xl text-4xl pt-6">
            <h3 className="day flex text-center justify-center border-2 font-bold border-purple-400 rounded-2xl p-6">
                {days}
            </h3>
            <h3 className="flex text-center justify-center items-center pb-2">:</h3>
            <h3 className="hour flex text-center justify-center border-2 font-bold border-purple-400 rounded-2xl p-6">
                {hours}
            </h3>
            <h3 className="flex text-center justify-center items-center pb-2">:</h3>
            <h3 className="minutes flex text-center justify-center border-2 font-bold border-purple-400 rounded-2xl p-6">
                {minutes}
            </h3>
            <h3 className="flex text-center justify-center items-center pb-2">:</h3>
            <h3 className="secodes flex text-center justify-center border-2 font-bold border-purple-400 rounded-2xl p-6">
                {seconds}
            </h3>
            <p className="text-2xl max-md:text-xl max-sm:text-xs">Days</p>
            <div></div>
            <p className="text-2xl max-md:text-xl max-sm:text-xs">Hours</p>
            <div></div>
            <p className="text-2xl max-md:text-xl max-sm:text-xs">Minutes</p>
            <div></div>
            <p className="text-2xl max-md:text-xl max-sm:text-xs">Seconds</p>
        </div>
    )
}