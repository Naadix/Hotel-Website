import React from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaSearch } from 'react-icons/fa';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { FaBook } from "react-icons/fa";


const Navbar = () => {

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Hotels', path: '/hotels' },
        { name: 'Experience', path: '/experience' },
    ];


    const { openSignIn } = useClerk();
    const { user } = useUser();
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isHero = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                setIsScrolled(window.scrollY > 10);
            } else {
                setIsScrolled(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);


    return (
        <header className={`fixed  h-24 w-full top-0 left-0 bg-transparent flex justify-center items-center px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? " shadow-md bg-white backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>
            <nav className='absolute overflow-y-hidden h-full w-full flex items-center justify-between px-2 my-font'>
                {/* Logo */}
                <div className='flex-shrink mt-5'>
                    <Link to='/' >
                        <img src="src\assets\logo.png" alt="logo" className={`h-36 w-36 object-contain  ${isScrolled && " invert-0 opacity-90"} ${!isHero && "invert"} `} />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className={`hidden md:flex items-center gap-4 lg:gap-8`} >
                    {navLinks.map((link, i) => (
                        <NavLink key={i} to={link.path} className={`group flex flex-col mr-2 gap-0.5  ${isScrolled ? "text-[#d28a19]" : "text-white"} hover:text-[#e69138] transition-all duration-300 font-semibold `}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-[#d28a19]" : "bg-[#e69138]"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </NavLink>
                    ))}

                    {user && (
                        <button className={`relative border overflow-hidden  border-[#e69138] px-6 py-2 text-sm font-semibold rounded-full ${isScrolled ? 'text-[#084276]' : 'text-white'} transition-all  hover:text-white
                        after:absolute after:-z-10 after:content-[''] after:left-0 after:top-0 after:w-0 after:h-full after:rounded-full after:bg-[#e69138]   after:transition-all after:duration-300 hover:after:w-full `}
                            onClick={() => navigate('/dashboard')}>
                            Dashboard
                        </button>
                    )}
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4 text-white ">
                    <button className={`text-xl ${isScrolled ? 'text-[#e69138]' : 'text-white'} hover:scale-110 transition-all duration-300`}>
                        <FaSearch />
                    </button>
                    {user ? (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action labelIcon={<FaBook />} label='My Bookings' onClick={() => { navigate('/my-booking') }} />
                            </UserButton.MenuItems>
                        </UserButton>
                    ) : (
                        <button onClick={openSignIn} className={` relative px-6 overflow-hidden py-2 rounded-full border text-white  font-semibold border-[#e69138]  hover:text-white transition-all duration-500 ${isScrolled ? "text-[#084276]" : " text-black"}
                    after:absolute after:-z-10 after:content-[''] after:left-0 after:top-0 after:w-0 after:h-full after:rounded-full after:bg-[#e69138] hover:after:w-full after:transition-all after:duration-300`}>
                            Login
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="text-4xl flex justify-center items-center gap-3 text-white cursor-pointer md:hidden">
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action labelIcon={<FaBook />} label='My Bookings' onClick={() => { navigate('/my-booking') }}>
                            </UserButton.Action>
                        </UserButton.MenuItems>
                    </UserButton>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isScrolled ? 'text-[#e69138]' : 'text-white'}`}>
                        <HiBars3BottomRight />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-[#eba75f] text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} `}>
                    <button className="absolute top-6 right-4 text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
                        <IoIosCloseCircleOutline />
                    </button>

                    {navLinks.map((link, i) => (
                        <NavLink key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className={`text-white relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300`}>
                            {link.name}
                        </NavLink>
                    ))}

                    {user && (
                        <button className="relative overflow-hidden border border-[#8a5721] px-5 py-2 text-white font-semibold mt-2 rounded-full cursor-pointer transition-all
                    after:absolute after:-z-10 after:content-[''] after:left-0 after:top-0 after:w-0 after:h-full after:rounded-full after:bg-[#8a5721] hover:after:w-full after:transition-all after:duration-300"
                            onClick={() => navigate('/dashboard')}>
                            Dashboard
                        </button>
                    )}
                    {!user && (
                        <button onClick={openSignIn} className="relative overflow-hidden border border-[#8a5721] px-5 py-2 text-white font-semibold mt-2 rounded-full cursor-pointer transition-all
                    after:absolute after:-z-10 after:content-[''] after:right-0 after:top-0 after:w-0 after:h-full after:rounded-full after:bg-[#8a5721] hover:after:w-full after:transition-all after:duration-300">
                            Login
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar