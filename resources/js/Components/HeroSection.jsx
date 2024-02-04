import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const HeroSection = () => {
    //Universidad de Dagupan
    const textRef = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });

        // Animate the appearance of each letter
        tl.from(textRef.current, {
            duration: 0.5,
            opacity: 2,
            scale: 2,
            stagger: 0.1, // Adjust the stagger for a sequential appearance
        });

        // Add smooth zoom-in and zoom-out effect
        tl.to(textRef.current, {
            opacity: 0,
            duration: 1, // Adjust the duration for a smoother zoom effect
            scale: 1.1, // Zoom in slightly
            ease: "power2.inOut", // Use a smooth easing function
        });

        return () => {
            tl.kill(); // Kill the animation on component unmount
        };
    }, []);

    //hover
    useEffect(() => {
        let mouseX, mouseY;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Add GSAP Effect
            gsap.to("#header-banner", {
                // The '30' value below corresponds to the effect power, change it as you want
                x: (mouseX / window.innerWidth - 0.5) * 30,
                y: (mouseY / window.innerHeight - 0.5) * 30,
                delay: 0.1,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    return (
        <div>
            {/* <style>
                {`
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .spin-animation {
                    animation: spin 20s linear infinite;
                }

                `}
            </style> */}
            <section>
                <div
                    id="hero"
                    className="w-screen h-screen text-blue-600 dark:text-light"
                >
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img
                            className="lg:w-80 md:w-3/6 w-5/6 mb-10 object-cover object-center "
                            alt="hero"
                            src="img/logo.png"
                        />
                        <div ref={textRef} className="text-center  w-full">
                            <h1
                                id="header-banner"
                                className=" my-4 mx-48 text-[110px] font-bold leading-tight tracking-widest uppercase font-mont "
                            >
                                Universidad
                                <span>
                                    <hr className="border-4 rounded-lg w-[84%] container mx-auto border-gray-600 dark:border-light " />
                                </span>{" "}
                                <span className="tracking-[15px]">
                                    de Dagupan
                                </span>
                            </h1>
                        </div>
                        <a
                            href="#faq"
                            aria-label="Scroll down"
                            className="animate-bounce flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
                        >
                            <svg
                                className=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 12 12"
                                fill="currentColor"
                            >
                                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
