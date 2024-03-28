import { useEffect, useLayoutEffect, useState } from "react";
import HourHand from "./components/hour-hand";
function convertToDeg(number: number) {
    return number % 360;
}
export function SecondsHand() {
    const [curSeconds, setSeconds] = useState(new Date().getSeconds());
    useEffect(() => {
        const timeout = setInterval(() => {
            setSeconds(new Date().getSeconds());
        }, 1000);
        return () => clearInterval(timeout);
    }, []);
    return (
        <HourHand
            length={6}
            rotation={convertToDeg((curSeconds / 60) * 360)}
            fill={curSeconds}
        />
    );
}
export function MinutesHand() {
    const [curMinutes, setMinutes] = useState(new Date().getMinutes());
    useEffect(() => {
        const timeout = setInterval(() => {
            setMinutes(new Date().getMinutes());
        }, 1000);
        return () => clearInterval(timeout);
    }, []);
    return (
        <HourHand
            length={5}
            rotation={convertToDeg((curMinutes / 60) * 360)}
            fill={curMinutes}
        />
    );
}
export function HoursHand() {
    const [curHours, setHours] = useState(new Date().getHours());
    useEffect(() => {
        const timeout = setInterval(() => {
            setHours(new Date().getHours());
        }, 1000);
        return () => clearInterval(timeout);
    }, []);
    return (
        <HourHand
            length={3}
            rotation={convertToDeg((curHours / 12) * 360)}
            fill={curHours}
        />
    );
}
function formatDateToTime(date: Date) {
    return date.toLocaleTimeString("en-US", { hour12: false });
}

function App() {
    const [date, setDate] = useState(new Date());
    useLayoutEffect(() => {
        const timeout = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timeout);
    }, []);
    return (
        <>
            <div className="min-h-screen p-5 flex justify-center items-center">
                <div>
                    <div className="">
                        <h2 className="text-center text-xl pb-5 font-semibold">
                            A Wall clock
                        </h2>
                    </div>
                    <div className="relative w-96 aspect-square border border-solid border-black rounded-full">
                        <HoursHand />
                        <MinutesHand />
                        <SecondsHand />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-1"></div>
                    </div>
                    <p className="text-center mt-3 text-2xl font-semibold">{formatDateToTime(date)}</p>
                </div>
            </div>
        </>
    );
}

export default App;
