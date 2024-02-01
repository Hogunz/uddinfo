import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

export function AccordionCustomAnimation() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="relative mx-auto flex py-5 items-center container mb-12 ">
                <span className="flex-shrink mx-4 text-3xl text-dark dark:text-light">
                    FAQ's
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div id="faq" className="container mx-auto mb-[100px]">
                <div className="flex justify-around">
                    <div className="">
                        <h1 className="text-[32px] font-anek text-dark dark:text-light">
                            Let's answer some FAQ's
                        </h1>
                        <h2 className="text-[17px] font-anek text-dark dark:text-light leading-[1.6em]">
                            Don’t hesitate to reach out if you have any
                            questions
                        </h2>
                    </div>
                    <div></div>
                    <div className="flex flex-nowrap flex-col ">
                        <Accordion
                            className="justify-end"
                            open={open === 1}
                            animate={CUSTOM_ANIMATION}
                        >
                            <AccordionHeader
                                className="text-white bg-gray-800/50 font-anek p-8"
                                onClick={() => handleOpen(1)}
                            >
                                What is Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody className="text-dark dark:text-light">
                                We&apos;re not always in the position that we
                                want to be at. We&apos;re constantly growing.
                                We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            className=""
                            open={open === 2}
                            animate={CUSTOM_ANIMATION}
                        >
                            <AccordionHeader
                                className="text-white bg-gray-800/50 font-anek p-8"
                                onClick={() => handleOpen(2)}
                            >
                                How to use Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody className="text-dark dark:text-light">
                                We&apos;re not always in the position that we
                                want to be at. We&apos;re constantly growing.
                                We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            className=""
                            open={open === 3}
                            animate={CUSTOM_ANIMATION}
                        >
                            <AccordionHeader
                                className="text-white bg-gray-800/50 font-anek p-8"
                                onClick={() => handleOpen(3)}
                            >
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody className="text-dark dark:text-light">
                                We&apos;re not always in the position that we
                                want to be at. We&apos;re constantly growing.
                                We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}
