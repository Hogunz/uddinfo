import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
    Typography,
    Carousel,
    Card,
} from "@material-tailwind/react";
import AnimatedCursor from "react-animated-cursor";
import Video from "./Videos1";
gsap.registerPlugin(ScrollTrigger);
const Grid = () => {
    //image animation
    useEffect(() => {
        // Ensure GSAP and ScrollTrigger are ready
        if (gsap && ScrollTrigger) {
            // Target the image element
            const image = document.querySelector(".c1");
            // Ensure the image is found
            if (image) {
                // Set up the ScrollTrigger
                gsap.to(image, {
                    duration: 2,
                    x: "-100%",
                    scrollTrigger: {
                        trigger: image,
                        ease: "expo.inOut",
                        start: "top 80%",
                        end: "bottom top",
                        toggleActions: "reverse none none play", // Play the animation when it enters the viewport, reverse it when it leaves
                    },
                });
            }
        }
    }, []);
    //image animation2
    useEffect(() => {
        // Ensure GSAP and ScrollTrigger are ready
        if (gsap && ScrollTrigger) {
            // Target the image element
            const image = document.querySelector(".c2");
            // Ensure the image is found
            if (image) {
                // Set up the ScrollTrigger
                gsap.to(image, {
                    duration: 2,
                    x: "100%",
                    scrollTrigger: {
                        trigger: image,
                        ease: "expo.inOut",
                        start: "top 80%",
                        end: "bottom top",
                        toggleActions: "reverse none none play", // Play the animation when it enters the viewport, reverse it when it leaves
                    },
                });
            }
        }
    }, []);

    //text animation background clip
    const textElements = gsap.utils.toArray("#text");

    textElements.forEach((text) => {
        gsap.to(text, {
            backgroundSize: "100%",
            scrollTrigger: {
                trigger: text,
                start: "center 80%",
                end: "center 20%",
                scrub: true,
            },
        });
    });
    //video modal
    const [openEnroll, setOpenEnroll] = React.useState(false);
    const [openQueueing, setOpenQueueing] = React.useState(false);
    const [openLibrary, setOpenLibrary] = React.useState(false);
    const [openBuilding, setOpenBuilding] = React.useState(false);
    const [openPortal, setOpenPortal] = React.useState(false);

    const handleOpenEnroll = () => setOpenEnroll((cur) => !cur);
    const handleOpenQueueing = () => setOpenQueueing((cur) => !cur);
    const handleOpenLibrary = () => setOpenLibrary((cur) => !cur);
    const handleOpenBuilding = () => setOpenBuilding((cur) => !cur);
    const handleOpenPortal = () => setOpenPortal((cur) => !cur);
    //data
    const title = {
        name1: "Home of Topnotchers",
        name2: "How to Enroll",
        name3: "Queueing System",
        name4: "Library / Escalator",
        name5: "Student Portal",
        name6: "Buildings and Facilities",
        c1: "img/c1.jpg",
    };
    const library = [
        {
            imageLink1: [
                "/img/library/1.jpg",
                "/img/library/2.jpg",
                "/img/library/3.jpg",
                "/img/library/4.jpg",
                "/img/library/5.jpg",
                "/img/library/6.jpg",
                "/img/library/7.jpg",
                "/img/library/8.jpg",
                "/img/library/9.jpg",
                "/img/library/10.jpg",
            ],
        },
    ];
    const building = [
        {
            imageLink1: [
                "img/buildings/1.jpg",
                "img/buildings/2.jpg",
                "img/buildings/3.jpg",
                "img/buildings/4.jpg",
                "img/buildings/5.jpg",
                "img/buildings/6.jpg",
                "img/buildings/7.jpg",
                "img/buildings/8.jpg",
                "img/buildings/9.jpg",
                "img/buildings/10.jpg",
                "img/buildings/11.jpg",
                "img/buildings/12.jpg",
                "img/buildings/13.jpg",
                "img/buildings/14.jpg",
                "img/buildings/15.jpg",
                "img/buildings/16.jpg",
                "img/buildings/17.jpg",
                "img/buildings/18.jpg",
                "img/buildings/19.jpg",
                "img/buildings/20.jpg",
                "img/buildings/21.jpg",
                "img/buildings/22.jpg",
                "img/buildings/23.jpg",
                "img/buildings/24.jpg",
            ],
        },
    ];

    const portal = [
        {
            imageLink1: [
                "img/portal/1.jpg",
                "img/portal/2.jpg",
                "img/portal/3.jpg",
                "img/portal/4.jpg",
            ],
        },
    ];
    return (
        <>
            <div className="relative mx-auto flex py-5 items-center container ">
                <span className="flex-shrink mx-4 text-3xl text-dark dark:text-light">
                    Categories
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <section className="lg:p-8 w-full mx-auto ">
                <div className="mx-auto max-w-full ">
                    <div id="topnotchers" className="flex mx-auto">
                        <div className="flex items-center max-w-3xl">
                            <h1
                                style={{
                                    color: "rgb(182, 182, 182, 0.2)",
                                    background:
                                        " linear-gradient(to right, #3d5180 , #3b82f6 65%) no-repeat",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                }}
                                id="text"
                                className="text-left text-2xl font-bold font-syne md:text-[85px] mb-8 uppercase tracking-widest leading-[77px] text-transparent "
                            >
                                {title.name1}
                            </h1>
                        </div>

                        <div className="c1 flex items-center overflow-hidden object-cover bg-center bg-no-repeat bg-cover rounded-[28.8px] mb-[221.87px] mt-[110.94px]">
                            <a href="/topnotchers" className="href">
                                <img
                                    className=" cursor-pointer object-scale-down bg-cover transition duration-300 ease-in-out hover:opacity-75 w-[963.2px] h-full"
                                    src={title.c1}
                                    alt="pic1"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>

                    <div id="enroll" className="flex mx-auto">
                        <div className="flex items-center p-4 md:p-8 max-w-3xl order-2 ">
                            <h1
                                style={{
                                    color: "rgb(182, 182, 182, 0.2)",
                                    background:
                                        " linear-gradient(to right, #3d5180 , #3b82f6 65%) no-repeat",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                }}
                                id="text"
                                className="text-right text-2xl font-bold font-syne md:text-[90px] mb-8 uppercase tracking-widest leading-[77px] text-[#7895B2]"
                            >
                                {title.name2}
                            </h1>
                        </div>
                        <div className="c2 flex items-center overflow-hidden bg-center bg-no-repeat bg-cover rounded-[28.8px] mb-[221.87px] mt-[110.94px] lg:order-1 ">
                            <Video />
                        </div>
                    </div>

                    <div id="queueing" className="flex mx-auto">
                        <div className="flex items-center max-w-3xl">
                            <h1
                                style={{
                                    color: "rgb(182, 182, 182, 0.2)",
                                    background:
                                        " linear-gradient(to right, #3d5180 , #3b82f6 65%) no-repeat",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                }}
                                id="text"
                                className="text-left text-2xl font-bold font-syne md:text-[90px] mb-8 uppercase tracking-widest leading-[77px] text-[#E8DFCA]"
                            >
                                {title.name3}
                            </h1>
                        </div>

                        <Card
                            onClick={handleOpenQueueing}
                            className="c2 flex items-center overflow-hidden rounded-[28.8px] mb-[221.87px] mt-[110.94px] "
                        >
                            <img
                                className="cursor-pointer object-scale-down bg-cover transition duration-300 ease-in-out hover:opacity-75 w-[963.2px] h-full"
                                src="img/qs.jpg"
                                alt="pic1"
                                loading="lazy"
                            />
                        </Card>
                        <Dialog
                            size="lg"
                            open={openQueueing}
                            handler={handleOpenQueueing}
                        >
                            <AnimatedCursor
                                innerSize={25}
                                outerSize={40}
                                color="0, 0, 255"
                                outerAlpha={0.2}
                                innerScale={0.7}
                                outerScale={2}
                                clickables={[
                                    "a",
                                    'input[type="text"]',
                                    'input[type="email"]',
                                    'input[type="number"]',
                                    'input[type="submit"]',
                                    'input[type="image"]',
                                    "label[for]",
                                    "select",
                                    "textarea",
                                    "button",
                                    ".link",
                                    {
                                        target: ".custom",
                                        options: {
                                            innerSize: 10,
                                            outerSize: 30,
                                            color: "255, 255, 255",
                                            outerAlpha: 0.3,
                                            innerScale: 0.7,
                                            outerScale: 2,
                                        },
                                    },
                                ]}
                            />
                            <DialogBody className="">
                                <img src="img/qs.jpg" alt="" />
                            </DialogBody>
                        </Dialog>
                    </div>

                    <div id="library" className="flex mx-auto">
                        <div className="flex items-center p-4 md:p-8 max-w-3xl order-2 ">
                            <h1
                                style={{
                                    color: "rgb(182, 182, 182, 0.2)",
                                    background:
                                        " linear-gradient(to right, #3d5180 , #3b82f6 65%) no-repeat",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                }}
                                id="text"
                                className="text-right text-2xl font-bold font-syne md:text-[90px] mb-8 uppercase tracking-widest leading-[77px] text-[#7895B2]"
                            >
                                {title.name4}
                            </h1>
                        </div>
                        <Card
                            onClick={handleOpenLibrary}
                            className="flex items-center  overflow-hidden rounded-[28.8px] mb-[221.87px] mt-[110.94px] lg:order-1 "
                        >
                            <img
                                className="cursor-pointer object-scale-down bg-cover transition duration-300 ease-in-out hover:opacity-75 w-[963.2px] h-full"
                                src="/img/library/1.jpg"
                                alt="pic2"
                                loading="lazy"
                            />
                        </Card>
                        <Dialog
                            size="lg"
                            open={openLibrary}
                            handler={handleOpenLibrary}
                        >
                            <AnimatedCursor
                                innerSize={25}
                                outerSize={40}
                                color="0, 0, 255"
                                outerAlpha={0.2}
                                innerScale={0.7}
                                outerScale={2}
                                clickables={[
                                    "a",
                                    'input[type="text"]',
                                    'input[type="email"]',
                                    'input[type="number"]',
                                    'input[type="submit"]',
                                    'input[type="image"]',
                                    "label[for]",
                                    "select",
                                    "textarea",
                                    "button",
                                    ".link",
                                    {
                                        target: ".custom",
                                        options: {
                                            innerSize: 10,
                                            outerSize: 30,
                                            color: "255, 255, 255",
                                            outerAlpha: 0.3,
                                            innerScale: 0.7,
                                            outerScale: 2,
                                        },
                                    },
                                ]}
                            />
                            <DialogBody className="">
                                <Carousel autoplay autoplayDelay={5000}>
                                    {library.length > 0 &&
                                        library[0].imageLink1.map(
                                            (imagePath, index) => (
                                                <img
                                                    key={index}
                                                    src={imagePath}
                                                    alt={`Image ${index}`}
                                                />
                                            )
                                        )}
                                </Carousel>
                            </DialogBody>
                        </Dialog>
                    </div>

                    <div id="building" className="flex mx-auto">
                        <div className="flex items-center p-4 md:p-8 max-w-3xl order-1 ">
                            <h1
                                style={{
                                    color: "rgb(182, 182, 182, 0.2)",
                                    background:
                                        " linear-gradient(to right, #3d5180 , #3b82f6 65%) no-repeat",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                }}
                                id="text"
                                className="text-left text-2xl font-bold font-syne md:text-[90px] mb-8 uppercase tracking-widest leading-[77px] text-[#7895B2]"
                            >
                                {title.name6}
                            </h1>
                        </div>
                        <Card
                            onClick={handleOpenBuilding}
                            className="flex items-center overflow-hidden rounded-[28.8px] mb-[221.87px] mt-[110.94px] lg:order-2 "
                        >
                            <img
                                className="cursor-pointer object-scale-down bg-cover transition duration-300 ease-in-out hover:opacity-75 w-[963.2px] h-full"
                                src="img/buildings/4.jpg"
                                alt="pic2"
                                loading="lazy"
                            />
                        </Card>
                        <Dialog
                            size="lg"
                            open={openBuilding}
                            handler={handleOpenBuilding}
                        >
                            <AnimatedCursor
                                innerSize={25}
                                outerSize={40}
                                color="0, 0, 255"
                                outerAlpha={0.2}
                                innerScale={0.7}
                                outerScale={2}
                                clickables={[
                                    "a",
                                    'input[type="text"]',
                                    'input[type="email"]',
                                    'input[type="number"]',
                                    'input[type="submit"]',
                                    'input[type="image"]',
                                    "label[for]",
                                    "select",
                                    "textarea",
                                    "button",
                                    ".link",
                                    {
                                        target: ".custom",
                                        options: {
                                            innerSize: 10,
                                            outerSize: 30,
                                            color: "255, 255, 255",
                                            outerAlpha: 0.3,
                                            innerScale: 0.7,
                                            outerScale: 2,
                                        },
                                    },
                                ]}
                            />
                            <DialogBody className="">
                                <Carousel autoplay autoplayDelay={5000}>
                                    {building.length > 0 &&
                                        building[0].imageLink1.map(
                                            (imagePath, index) => (
                                                <img
                                                    key={index}
                                                    src={imagePath}
                                                    alt={`Image ${index}`}
                                                />
                                            )
                                        )}
                                </Carousel>
                            </DialogBody>
                        </Dialog>
                    </div>
                    <div id="portal" className="grid grid-cols-2 gap-4">
                        <div className="flex items-center p-4 md:p-8 max-w-3xl order-2 ">
                            <h1
                                style={{
                                    color: "rgb(182, 182, 182, 0.2)",
                                    background:
                                        " linear-gradient(to right, #3d5180 , #3b82f6 65%) no-repeat",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                }}
                                id="text"
                                className="text-right text-2xl font-bold font-syne md:text-[90px] mb-8 uppercase tracking-widest leading-[77px] text-[#7895B2] w-full"
                            >
                                {title.name5}
                            </h1>
                        </div>
                        <Card
                            onClick={handleOpenPortal}
                            className="flex items-center  overflow-hidden rounded-[28.8px] mb-[221.87px] mt-[110.94px] lg:order-1 "
                        >
                            <img
                                className="cursor-pointer object-scale-down bg-cover transition duration-300 ease-in-out hover:opacity-75 w-[963.2px] h-full"
                                src="img/grid/18.jpg"
                                alt="pic2"
                                loading="lazy"
                            />
                        </Card>
                        <Dialog
                            size="lg"
                            open={openPortal}
                            handler={handleOpenPortal}
                        >
                            <AnimatedCursor
                                innerSize={25}
                                outerSize={40}
                                color="0, 0, 255"
                                outerAlpha={0.2}
                                innerScale={0.7}
                                outerScale={2}
                                clickables={[
                                    "a",
                                    'input[type="text"]',
                                    'input[type="email"]',
                                    'input[type="number"]',
                                    'input[type="submit"]',
                                    'input[type="image"]',
                                    "label[for]",
                                    "select",
                                    "textarea",
                                    "button",
                                    ".link",
                                    {
                                        target: ".custom",
                                        options: {
                                            innerSize: 10,
                                            outerSize: 30,
                                            color: "255, 255, 255",
                                            outerAlpha: 0.3,
                                            innerScale: 0.7,
                                            outerScale: 2,
                                        },
                                    },
                                ]}
                            />

                            <DialogBody className="">
                                <Carousel autoplay autoplayDelay={5000}>
                                    {portal.length > 0 &&
                                        portal[0].imageLink1.map(
                                            (imagePath, index) => (
                                                <img
                                                    key={index}
                                                    src={imagePath}
                                                    alt={`Image ${index}`}
                                                />
                                            )
                                        )}
                                </Carousel>
                            </DialogBody>
                        </Dialog>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Grid;
