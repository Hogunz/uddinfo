import React, { useState, useRef } from "react";
export default function Video() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVideoStart = () => {
        setIsPlaying(true);
    };

    return (
        <div className="video-player flex justify-center mb-8">
            <div className="relative">
                <video
                    ref={videoRef}
                    className="w-full rounded-lg object-cover object-center bg-cover"
                    autoPlay={false}
                    controls={isPlaying}
                    onClick={handlePlay}
                    onPlay={handleVideoStart}
                    onPause={() => setIsPlaying(false)}
                >
                    <source src="vid/enrollment.mp4" type="video/mp4" />
                </video>
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            className="relative flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-md hover:shadow-lg font-syne"
                            onClick={handlePlay}
                        >
                            Play
                            <span className="absolute inline-flex h-12 w-12 bg-blue-400 rounded-full animate-ping"></span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
