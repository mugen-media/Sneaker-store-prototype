import { Instagram, MessageCircle, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        const handleHighlight = () => {
            setHighlight(true);
            setTimeout(() => setHighlight(false), 2000);
        };

        window.addEventListener('highlightSupport', handleHighlight);
        return () => window.removeEventListener('highlightSupport', handleHighlight);
    }, []);

    return (
        <footer 
            id="footer" 
            className="flex flex-col lg:flex-row justify-around items-start lg:items-center text-black p-5 sm:p-8 lg:p-10 gap-8 lg:gap-4"
        >
            {/* Useful Links */}
            <div className="w-full lg:w-auto">
                <p className="mb-2 sm:mb-3 font-medium text-base sm:text-lg">Useful Links</p>
                <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                    <li className="hover:text-gray-950 transform duration-500"><a href="#">About</a></li>
                    <li className="hover:text-gray-950 transform duration-500"><a href="#">Shop</a></li>
                    <li className="hover:text-gray-950 transform duration-500"><a href="#">Terms and Conditions</a></li>
                    <li className="hover:text-gray-950 transform duration-500"><a href="#">Privacy Policy</a></li>
                    <li className="hover:text-gray-950 transform duration-500"><a href="#">Returns and Refunds</a></li>
                </ul>
            </div>

            {/* Socials */}
            <div className="w-full lg:w-auto text-center lg:text-left">
                <p className="mb-2 sm:mb-3 font-medium text-base sm:text-lg">Socials</p>
                <div className="flex gap-3 sm:gap-4 text-gray-400 justify-center lg:justify-start">
                    <a href="#"><Instagram className="hover:text-gray-950 transform duration-500 w-5 h-5 sm:w-6 sm:h-6"/></a>
                    <a href="#"><MessageCircle className="hover:text-gray-950 transform duration-500 w-5 h-5 sm:w-6 sm:h-6"/></a>
                    <a href="#"><Twitter className="hover:text-gray-950 transform duration-500 w-5 h-5 sm:w-6 sm:h-6"/></a>
                </div>
            </div>

            {/* Contact/Support */}
            <div 
                id="support-section"
                className={`w-full lg:w-auto transition-all duration-500 ${
                    highlight ? 'bg-gray-100 p-4 -m-4 rounded-lg' : ''
                }`}
            >
                <p className="mb-2 sm:mb-3 font-medium text-base sm:text-lg">Contact Us / Support</p>
                <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                    <li className="hover:text-gray-950 transform duration-500 break-all">
                        <a href="mailto:example@gmail.com">Email: businessmail@gmail.com</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="tel:8698659661">Phone: 6565245545</a>
                    </li>
                    <li className="hover:text-gray-950 transform duration-500">
                        <a href="https://wa.me/918698659661">Whatsapp: 1245578965</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}