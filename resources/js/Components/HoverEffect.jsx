import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HoverEffect = () => {
    const dotRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;

        const handleMouseEnter = () => {
            gsap.to(dot, { scale: 1.5, duration: 0.3 });
            dot.textContent = "Hovering!";
        };

        const handleMouseLeave = () => {
            gsap.to(dot, { scale: 1, duration: 0.3 });
            dot.textContent = "";
        };

        dot.addEventListener("mouseenter", handleMouseEnter);
        dot.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            dot.removeEventListener("mouseenter", handleMouseEnter);
            dot.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="relative">
            <div
                ref={dotRef}
                className="w-6 h-6 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer"
            ></div>
        </div>
    );
};

export default HoverEffect;
