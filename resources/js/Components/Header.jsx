import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import DarkMode from "./DarkModeToggle";
export default function Header() {
    return (
        <Navbar className="fixed z-20 w-full bg-light dark:bg-dark">
            <NavbarBrand href="/">
                <img
                    src="img/logo.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="UdD Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-blue-600 font-mont">
                    UNIVERSIDAD DE DAGUPAN
                </span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <DarkMode />

                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink
                    className="text-dark transition duration-300 ease-in-out"
                    href="#topnotchers"
                >
                    Home of Topnotchers
                </NavbarLink>
                <NavbarLink
                    className="text-dark  transition duration-300 ease-in-out"
                    href="#enroll"
                >
                    How to Enroll
                </NavbarLink>
                <NavbarLink
                    className="text-dark  transition duration-300 ease-in-out"
                    href="#queueing"
                >
                    Queueing System
                </NavbarLink>
                <NavbarLink
                    className="text-dark  transition duration-300 ease-in-out"
                    href="#faq"
                >
                    FAQ's
                </NavbarLink>
                <NavbarLink
                    className="text-dark  transition duration-300 ease-in-out"
                    href="#library"
                >
                    Library / Escalator
                </NavbarLink>
                <NavbarLink
                    className="text-dark transition duration-300 ease-in-out"
                    href="#portal"
                >
                    Portal
                </NavbarLink>
                <NavbarLink
                    className="text-dark transition duration-300 ease-in-out"
                    href="#building"
                >
                    Buildings and Facilities
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
