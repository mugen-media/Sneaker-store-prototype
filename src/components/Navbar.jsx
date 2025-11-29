import { useState, useEffect } from 'react'; 
import { Search, User2, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import logo from '../images/logo2.png';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            setIsVisible(true);
        } 
        else if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const navbarClass = isVisible ? 'translate-y-0' : '-translate-y-full';

    return (
        <nav 
            id="nav" 
            className={`flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 bg-white fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${navbarClass}`}
        >
            {/* Logo */}
            <div className="flex-shrink-0">
                <button className='hover:cursor-pointer'>
                    <img src={logo} alt="UrbanSteps" className="w-16 sm:w-20" />
                </button>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center">
                <ul className="text-black text-sm flex gap-6 xl:gap-8">
                    <li className='hover:underline hover:underline-offset-5'><Link to="/">Home</Link></li>
                    <li className='hover:underline hover:underline-offset-5'><Link to="/men">Men</Link></li>
                    <li className='hover:underline hover:underline-offset-5'><Link to="/women">Women</Link></li>
                    <li className='hover:underline hover:underline-offset-5'><Link to="/featured">Featured</Link></li>
                </ul>
            </div>

            {/* Desktop Right Section - Hidden on mobile/tablet */}
            <div className='hidden lg:flex gap-2 items-center'>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="focus:outline-none p-2 pl-3 pr-10 text-xs rounded-full bg-gray-100 w-40 xl:w-48"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Search size={20} className="hover:cursor-pointer text-gray-500" />
                    </div>
                </div>
                <button className="border border-gray-300 p-1.5 px-3 text-sm rounded-full hover:bg-black hover:text-white hover:cursor-pointer transition duration-400 flex items-center gap-2">
                    <User2 size={16} />
                </button>
                <button className="border border-gray-300 p-1.5 px-3 text-sm rounded-full hover:bg-black hover:text-white hover:cursor-pointer transition duration-400 flex items-center gap-2">
                    <ShoppingCart size={16} />
                </button>
            </div>

            {/* Mobile Right Section - Visible on mobile/tablet only */}
            <div className="flex lg:hidden items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                    <Search size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                    <ShoppingCart size={20} />
                </button>
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
                    <ul className="flex flex-col p-4 space-y-4">
                        <li className='hover:bg-gray-50 p-2 rounded'>
                            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        </li>
                        <li className='hover:bg-gray-50 p-2 rounded'>
                            <Link to="/men" onClick={() => setMobileMenuOpen(false)}>Men</Link>
                        </li>
                        <li className='hover:bg-gray-50 p-2 rounded'>
                            <Link to="/women" onClick={() => setMobileMenuOpen(false)}>Women</Link>
                        </li>
                        <li className='hover:bg-gray-50 p-2 rounded'>
                            <Link to="/featured" onClick={() => setMobileMenuOpen(false)}>Featured</Link>
                        </li>
                        <li className='pt-4 border-t border-gray-200'>
                            <button className="w-full border border-gray-300 p-2 rounded-full hover:bg-black hover:text-white transition flex items-center justify-center gap-2">
                                <User2 size={16} />
                                <span>Account</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}