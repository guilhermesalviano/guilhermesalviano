"use client"
import { useState, useEffect } from "react";

function dateCalculator(date: Date): number[] {
    const now = new Date();

    const diffMs = date.getTime() - now.getTime();

    if (diffMs <= 0) return [0, 0, 0, 0];

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
}

export default function page() {
    const dateToJadeInSP = new Date('2025-03-27T00:00');

    const [timeLeft, setTimeLeft] = useState(() => dateCalculator(dateToJadeInSP));
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const delay = 50;
        const timeoutId = setTimeout(() => {
            setHasStarted(true);

            const intervalId = setInterval(() => {
                setTimeLeft(dateCalculator(dateToJadeInSP));
            }, 1000);

            return () => clearInterval(intervalId);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    const [days, hours, minutes, seconds] = timeLeft.map((value) =>
        String(value).padStart(2, '0')
    );

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl"><span className="text-purple-600 font-extrabold">JADE</span> IN SP</h1>
            { hasStarted && (
                <div className="grid max-sm:grid-cols-[auto_14px_auto_14px_auto_14px_auto] grid-cols-[auto_40px_auto_40px_auto_40px_auto] grid-rows-2 justify-center max-sm:gap-0 gap-1 max-sm:px-4 px-8 text-center align-middle text-neutral-900 max-sm:text-xl text-4xl pt-6">
                    <h3 className="day flex text-center justify-center border-2 font-bold border-purple-400 rounded-2xl p-6">
                        {days}
                    </h3>
                    <h3  className="flex text-center justify-center items-center pb-2">:</h3>
                    <h3 className="hour flex text-center justify-center border-2 font-bold border-purple-400 rounded-2xl p-6">
                        {hours}
                    </h3>
                    <h3  className="flex text-center justify-center items-center pb-2">:</h3>
                    <h3 className="minutes flex text-center justify-center border-2 font-bold border-purple-400 rounded-2xl p-6">
                        {minutes}
                    </h3>
                    <h3  className="flex text-center justify-center items-center pb-2">:</h3>
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
            )}
        </div>
    )
}