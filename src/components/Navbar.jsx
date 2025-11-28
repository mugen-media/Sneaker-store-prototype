import { Search, User2 } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5 m-5">
            <div>
                <button><img src="logo" alt="not found" /></button>
            </div>
            <div className="flex gap-5 items-center">
                <ul className="bg-white-800 text-black text-sm flex gap-5 justify-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/men">Men</Link></li>
                    <li><Link to="/women">Women</Link></li>
                    {/* <li className="relative group">
                        <button className="flex items-center gap-1">
                            Brands
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white shadow-lg  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-xs flex justify-center">
                            <div>
                                <li><Link to="/brands/nike" className="block py-2 ">Nike</Link></li>
                                <li><Link to="/brands/adidas" className="block py-2 ">Adidas</Link></li>
                                <li><Link to="/brands/newbalance" className="block  py-2 ">New Balance</Link></li>
                                <li><Link to="/brands/puma" className="block py-2 ">Puma</Link></li>
                            </div>
                        </ul>
                    </li> */}
                </ul>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for anything"
                        className="focus:outline-none p-2.5 pl-5 pr-10 text-xs rounded bg-gray-100 w-80"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Search size={20} className="hover:cursor-pointer text-gray-500" />
                    </div>
                </div>
            </div>
            <div>
                <button className="border-b-black-500 border p-1 pl-5 pr-5 text-sm rounded-lg hover:bg-black hover:text-white hover:cursor-pointer transition duration-400 flex items-center gap-2">
                    <User2 size={16} />
                    Login
                </button>
            </div>
        </nav >
    );
}
