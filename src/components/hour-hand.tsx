import { useEffect, useRef } from "react";

export interface Props {
    length: number;
    rotation: number;
    fill: number;
}
export default function HourHand({ length, fill, rotation }: Props) {
    const parent = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!parent.current) return;
        // parent.current.style.rotate = `${rotation}deg`;
    }, [rotation, parent]);
    return (
        <div
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 origin-top-left"
            style={{
                rotate: `${rotation}deg`,
            }}
            ref={parent}
        >
            <div className="ml-[50%] flex items-center pl-3">
                {new Array(length).fill(0).map(() => {
                    return (
                        <div
                            className="p-1 min-w-7"
                            style={{
                                rotate: `-${rotation}deg`,
                            }}
                        >
                            <span className="block">{fill}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
