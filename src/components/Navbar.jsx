import { useEffect } from "react";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Container from "./Ui/Container";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })
    return (
        <div>
            <div className="w-full bg-[#212428] z-10 text-[#c4cfde] fixed top-0 left-0 right-0 transition-all ease-in duration-300">
                <Container>
                    <nav className={`py-6 px-5 ${isSticky ? "sticky shadow-lg top-0 left-0 right-0  transition-all duration-300 ease-in" : "transition-all duration-300 ease-in"}`}>
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-4xl">Sultan</div>
                            <div >
                                <ul className="hidden md:flex gap-6 font-medium ">
                                    <li><HashLink className="hover:text-[#ff014f]" to="/#home">Home</HashLink></li>
                                    <li><HashLink className="hover:text-[#ff014f]" to="/#about">About</HashLink></li>
                                    <li><HashLink className="hover:text-[#ff014f]" to="/#projects">Projects</HashLink></li>
                                    <li><HashLink className="hover:text-[#ff014f]" to="/#mySkills">My Skills</HashLink></li>
                                    <li><HashLink className="hover:text-[#ff014f]" to="/#contact">Contact</HashLink></li>
                                </ul>
                            </div>
                            <div className="md:hidden focus:outline-none transition-all ease-in duration-300">
                                <button
                                    className="text-[#c4cfde]"
                                    onClick={toggleMenu}
                                >
                                    {
                                        menuOpen ? <FaXmark className="w-6 h-6"></FaXmark> : <FaBarsStaggered className="w-6 h-6"></FaBarsStaggered>
                                    }
                                </button>
                            </div>
                        </div>
                        <div className={`${menuOpen ? "flex flex-col space-y-2 lg:hidden mt-5" : "hidden"}`}>
                            <ul className="space-y-3 font-medium">
                                <li><HashLink className="hover:text-[#ff014f]" to="/#home">Home</HashLink></li>
                                <li><HashLink className="hover:text-[#ff014f]" to="/#about">About</HashLink></li>
                                <li><HashLink className="hover:text-[#ff014f]" to="/#projects">Projects</HashLink></li>
                                <li><HashLink className="hover:text-[#ff014f]" to="/#mySkills">My Skills</HashLink></li>
                                <li><HashLink className="hover:text-[#ff014f]" to="/#contact">Contact</HashLink></li>
                            </ul>
                        </div>

                    </nav>
                </Container>
            </div>

        </div>
    );
};

export default Navbar;