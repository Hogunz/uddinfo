import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
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
const topnotchers = [
    {
        imageLink1: [
            "img/topnotchers1/1.jpg",
            "img/topnotchers1/2.jpg",
            "img/topnotchers1/3.jpg",
            "img/topnotchers1/4.jpg",
            "img/topnotchers1/5.jpg",
            "img/topnotchers1/6.jpg",
            "img/topnotchers1/7.jpg",
            "img/topnotchers1/8.jpg",
            "img/topnotchers1/9.jpg",
            "img/topnotchers1/10.jpg",
            "img/topnotchers1/11.jpg",
            "img/topnotchers1/12.jpg",
            "img/topnotchers1/13.jpg",
            "img/topnotchers1/14.jpg",
        ],
    },
];
export const Carousel = () => {
    const swiperRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleVideoEnd = () => {
        setIsVideoPlaying(false);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
            <Swiper
                ref={swiperRef}
                slidesPerView={"auto"}
                spaceBetween={30}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className=" max-w-6xl rounded-2xl"
            >
                <SwiperSlide>
                    <video
                        className=""
                        controls={true}
                        autoPlay={isVideoPlaying}
                        onPause={() => setIsVideoPlaying(false)}
                        onPlay={handleVideoPlay}
                        onEnded={handleVideoEnd}
                    >
                        <source src="vid/udd-history.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video
                        className=""
                        controls={true}
                        autoPlay={isVideoPlaying}
                        onPause={() => setIsVideoPlaying(false)}
                        onPlay={handleVideoPlay}
                        onEnded={handleVideoEnd}
                    >
                        <source src="vid/enrollment.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/qs.jpg" alt="" />
                </SwiperSlide>
                {topnotchers[0].imageLink1.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}

                {portal[0].imageLink1.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
                {building[0].imageLink1.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
                {library[0].imageLink1.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
