import bestselling from "../images/BestSelling.png";
import nike1 from "../images/jordan1.webp";
import nike2 from "../images/jordan2.webp";
import adidas1 from "../images/adidas1.webp";
import puma1 from "../images/puma2.webp";
import puma2 from "../images/jordan3.webp";
import nike3 from "../images/jordan4.webp";
import nike4 from "../images/jordan5.webp";
import adidas2 from "../images/jordan6.png";
import puma4 from "../images/yeezy.png";
import nike7 from "../images/adidas4.png";
import nike8 from "../images/adidas3.png";
import adidas4 from "../images/yeezy2.png";

export default function Hero2() {
    const products = [
        { img: nike1, name: "Air Jordan 1 Retro Low", subtitle: "OG 'Mocha'", price: "14,999" },
        { img: adidas1, name: "Adidas Sambas", subtitle: "OG 'White Black Gum'", price: "10,999" },
        { img: puma1, name: "Puma Palermo Unisex", subtitle: "Sneakers Ivory", price: "6,999" },
        { img: nike2, name: "Jordan 1 Low bred", subtitle: "Toe 2.0", price: "14,999" },
        { img: puma2, name: "Travis ScottxJordan 1", subtitle: "'Velvet Brown'", price: "42,999" },
        { img: nike3, name: "Dunk Low Medium", subtitle: "Curry", price: "13,999" },
        { img: nike4, name: "Dunk Low Lottery Pack", subtitle: "Malachite", price: "11,999" },
        { img: adidas2, name: "Dunk Low Union Argon", subtitle: "Passport Pack", price: "27,999" },
        { img: puma4, name: "Adidas Yeezy 350 V2", subtitle: "Carbon Beluga", price: "16,999" },
        { img: nike7, name: "Adidas Sambas OG", subtitle: "White Green", price: "8,499" },
        { img: adidas4, name: "Adidas Yeezy 350", subtitle: "Natural", price: "17,999" },
        { img: nike8, name: "Adidas Sambas OG", subtitle: "Collegiate Green", price: "14,999" }
    ];

    return (
        <div id="image_description" className="border-b border-gray-700 mt-10 pb-10 px-4 sm:px-6 lg:px-8">
            {/* Bestselling Header */}
            <div className="flex justify-center mb-8 sm:mb-12">
                <img 
                    src={bestselling} 
                    alt="Best Selling" 
                    className="w-full max-w-xs sm:max-w-md lg:max-w-2xl h-auto" 
                />
            </div>
            
            {/* Products Grid - 2 cols mobile, 3 cols tablet, 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-white p-2 sm:p-4 rounded-lg hover:shadow-lg transition duration-300">
                        <img 
                            src={product.img} 
                            alt={product.name}
                            className="w-full h-auto aspect-square object-cover transform hover:scale-105 transition duration-300 rounded-lg"
                        />
                        <a href="#" className="mt-2 sm:mt-4 text-xs sm:text-sm hover:underline">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-gray-600 text-xs sm:text-sm">{product.subtitle}</p>
                            <p className="font-semibold text-black mt-1 sm:mt-2">From Rs. {product.price}</p>
                        </a>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
                <button className="bg-gray-950 text-white px-6 sm:px-10 py-2.5 sm:py-4 text-sm sm:text-base hover:cursor-pointer hover:scale-105 transition duration-300 rounded-full font-medium">
                    View All Products
                </button>
            </div>
        </div>
    );
}