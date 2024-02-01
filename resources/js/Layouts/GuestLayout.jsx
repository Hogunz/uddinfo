import { DarkThemeToggle, Flowbite } from "flowbite-react";
import React, { useEffect } from "react";

export default function Guest({ children }) {
    return (
        <Flowbite>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white dark:bg-[#26282c] font-anek scroll-smooth">
                <div className="w-full">{children}</div>
            </div>
        </Flowbite>
    );
}
