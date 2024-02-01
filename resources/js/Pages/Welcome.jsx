import { AccordionCustomAnimation } from "@/Components/Accordion";
import Grid from "@/Components/Grid";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Guest from "@/Layouts/GuestLayout";
import AnimatedCursor from "react-animated-cursor";
import "/resources/css/styles.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Guest>
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
                        "img",
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

                <Header />
                <HeroSection />
                <Grid />
                <AccordionCustomAnimation />
            </Guest>
        </>
    );
}
