import React, { useEffect } from "react";
import Header from "@/Components/Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "/resources/css/styles.css";
import { Card } from "flowbite-react";

const Topnotchers = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let revealContainers = document.querySelectorAll(".reveal");

        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "restart none none reset",
                },
            });

            tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: "power2.out",
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: "power2.out",
            });
        });
    }, []);

    // Data
    const accountant = [
        {
            name: "Ralley S. Paragas",
            top: "Top 1",
            percent: "92.86%",
            date: "October 2015",
            title: "CERTIFIED PUBLIC ACCOUNTANT LICENSURE EXAM",
        },
        {
            name: "Fern Adriel M. Velasco",
            top: "Top 8",
            percent: "91.14%",
            date: "October 2015",
            title: "CERTIFIED PUBLIC ACCOUNTANT LICENSURE EXAM",
        },
        {
            name: "Mark Francis Cagaoan",
            top: "Top 4",
            percent: "93.43%",
            date: "October 2012",
            title: "CERTIFIED PUBLIC ACCOUNTANT LICENSURE EXAM",
        },
    ];
    const engineer = [
        {
            name: "Engr. Hannah Joy D. Fadullon",
            top: "Top 2",
            percent: "91.80%",
            date: "October 2019",
            title: "LICENSURE EXAMINATION FOR ELECTRONICS ENGINEERS",
        },
        {
            name: "Engr. Ronnie Gee G. Alfonso",
            top: "Top 6",
            percent: "90.70%",
            date: "October 2017",
            title: "LICENSURE EXAMINATION FOR ELECTRONICS ENGINEERS",
        },
        {
            name: "Engr. Cherish Antoinette A. Ferrer",
            top: "Top 7",
            percent: "89.70%",
            date: "October 2019",
            title: "LICENSURE EXAMINATION FOR ELECTRONICS ENGINEERS",
        },
        {
            name: "Engr. Franz Reynald M. Velasco",
            top: "Top 4  Top 2",
            percent: "89.20% 93%",
            date: "April 2022",
            title: "LICENSURE EXAMINATION FOR ELECTRONICS ENGINEERS",
        },
        {
            name: "Engr. Ferren M. Velasco",
            top: "Top 8",
            percent: "89.30%",
            date: "October 2018",
            title: "LICENSURE EXAMINATION FOR ELECTRONICS ENGINEERS",
        },
        {
            name: "Engr. Neil Efren Villanueva",
            top: "Top 4",
            percent: "84.50%",
            date: "April 2013",
            title: "Registered Master Electricians Licensure Examination",
        },
        {
            name: "Engr. Marvin Columbino",
            top: "Top 6",
            percent: "80%",
            date: "April 2013",
            title: "Registered Master Electricians Licensure Examination",
        },
        // Add more data objects as needed
    ];
    const teacher = [
        {
            name: "Ellen May T. Lim",
            top: "Top 9",
            percent: "83.80%",
            date: "September 2011",
            title: "LICENSURE EXAMINATION FOR TEACHERS",
        },
        {
            name: "Carelea F. Rimorin",
            top: "Top 10",
            percent: "87.40%",
            date: "August 2014",
            title: "LICENSURE EXAMINATION FOR TEACHERS",
        },
    ];
    const nurse = [
        {
            name: "Rizza A. Tamayo",
            top: "Top 6",
            percent: "85%",
            date: "June 2008",
            title: "NURSE LICENSURE EXAMINATION",
        },
        {
            name: "Ruby Ann Prado",
            top: "Top 10",
            percent: "85.20%",
            date: "December 2010",
            title: "NURSE LICENSURE EXAMINATION",
        },
    ];
    return (
        <>
            <Header />
            <div className="font-anek">
                <div className="bg-[#F6F7C4] flex flex-col justify-center align-center h-[100vh] w-full relative">
                    <div className="flex text-center mx-48 mb-48">
                        <img
                            className="object-cover h-48 w-48 "
                            src="img/SBA-UDD.png"
                            alt=""
                        />
                        <span className=" my-4 text-[70px] font-bold leading-tight tracking-snug uppercase font-mont ">
                            School of Business and Accountancy
                        </span>
                    </div>
                    <div className="flex flex-nowrap justify-center gap-4 max-w-full  ">
                        {accountant.map((p, index) => (
                            <div
                                className="reveal flex justify-center w-full "
                                key={index}
                            >
                                <Card
                                    className="w-full h-full object-cover object-center bg-cover bg-light "
                                    imgSrc={`img/topnotchers/accountant/${
                                        index + 1
                                    }.png`}
                                    horizontal
                                >
                                    <h1 className="text-5xl font-bold font-mont uppercase tracking-wide text-dark dark:text-light">
                                        {p.top}{" "}
                                        <span className="text-2xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                            {p.percent}
                                        </span>
                                    </h1>
                                    <h5 className="text-2xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                        {p.name}
                                    </h5>

                                    <div>
                                        <h4 className="font-normal font-roboto text-[20px] text-gray-700 dark:text-gray-400 ">
                                            {p.date}
                                        </h4>
                                        <p className="font-normal font-roboto leading-snug text-[20px] text-gray-700 dark:text-gray-400">
                                            {p.title}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#FFCF81] flex flex-col justify-center align-center  w-full relative">
                    <div className="flex text-center mx-48 mb-8">
                        <img
                            className="object-cover h-48 w-48 "
                            src="img/SOE-UDD.png"
                            alt=""
                        />
                        <span className=" my-4 mx-[100px] text-[80px] items-center flex font-bold leading-tight tracking-snug uppercase font-mont ">
                            School of Engineering
                        </span>
                    </div>
                    <div className="grid grid-cols-3 justify-items-center gap-4 max-w-full mb-4">
                        {engineer.map((p, index) => (
                            <div
                                className="reveal flex justify-center w-full"
                                key={index}
                            >
                                <Card
                                    className="w-full h-full object-cover object-center bg-cover bg-light"
                                    imgSrc={`img/topnotchers/engineer/${
                                        index + 1
                                    }.png`}
                                    horizontal
                                >
                                    <h1 className="text-4xl font-bold font-mont uppercase tracking-wide text-dark dark:text-light">
                                        {p.top}{" "}
                                        <span className="text-2xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                            {p.percent}
                                        </span>
                                    </h1>
                                    <h5 className="text-xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                        {p.name}
                                    </h5>

                                    <div>
                                        <h4 className="font-normal font-roboto leading-snug text-[15px] text-gray-700 dark:text-gray-400">
                                            {p.date}
                                        </h4>
                                        <p className="font-normal font-roboto leading-snug text-[15px] text-gray-700 dark:text-gray-400">
                                            {p.title}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#9AD0EC] flex flex-col justify-center align-center h-[100vh] w-full relative">
                    <div className="flex text-center mx-60 mb-28">
                        <img
                            className="object-cover h-48 w-48 "
                            src="img/STE-UDD.png"
                            alt=""
                        />
                        <span className="mx-[100px] my-4 text-[70px] font-bold leading-tight tracking-snug uppercase font-mont ">
                            School of Teacher Education
                        </span>
                    </div>
                    <div className="flex flex-nowrap justify-center gap-4 max-w-full  ">
                        {teacher.map((p, index) => (
                            <div
                                className="reveal flex justify-center w-full "
                                key={index}
                            >
                                <Card
                                    className="w-full h-full object-cover object-center bg-cover bg-light "
                                    imgSrc={`img/topnotchers/teacher/${
                                        index + 1
                                    }.png`}
                                    horizontal
                                >
                                    <h1 className="text-5xl font-bold font-mont uppercase tracking-wide text-dark dark:text-light">
                                        {p.top}{" "}
                                        <span className="text-2xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                            {p.percent}
                                        </span>
                                    </h1>
                                    <h5 className="text-2xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                        {p.name}
                                    </h5>

                                    <div>
                                        <h4 className="font-normal font-roboto text-[20px] text-gray-700 dark:text-gray-400 ">
                                            {p.date}
                                        </h4>
                                        <p className="font-normal font-roboto leading-snug text-[20px] text-gray-700 dark:text-gray-400">
                                            {p.title}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#79AC78] flex flex-col justify-center align-center h-[100vh] w-full relative">
                    <div className="flex text-center mx-48 mb-28">
                        <img
                            className="object-cover h-48 w-48 "
                            src="img/SOHS-UDD.png"
                            alt=""
                        />
                        <span className="mx-[80px] my-4 text-[70px] items-center flex font-bold leading-tight tracking-snug uppercase font-mont ">
                            School of Health Sciences
                        </span>
                    </div>
                    <div className="flex flex-nowrap justify-center gap-4 max-w-full  ">
                        {nurse.map((p, index) => (
                            <div
                                className="reveal flex justify-center w-full "
                                key={index}
                            >
                                <Card
                                    className="w-full h-full object-cover object-center bg-cover bg-light "
                                    imgSrc={`img/topnotchers/nurse/${
                                        index + 1
                                    }.png`}
                                    horizontal
                                >
                                    <h1 className="text-5xl font-bold font-mont uppercase tracking-wide text-dark dark:text-light">
                                        {p.top}{" "}
                                        <span className="text-2xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                            {p.percent}
                                        </span>
                                    </h1>
                                    <h5 className="text-2xl font-bold uppercase font-mont tracking-tight text-dark dark:text-light">
                                        {p.name}
                                    </h5>

                                    <div>
                                        <h4 className="font-normal font-roboto text-[20px] text-gray-700 dark:text-gray-400 ">
                                            {p.date}
                                        </h4>
                                        <p className="font-normal font-roboto leading-snug text-[20px] text-gray-700 dark:text-gray-400">
                                            {p.title}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topnotchers;
