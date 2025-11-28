import bestselling from "../images/bestselling.png";
import nike1 from "../images/jordan1.webp";
import nike2 from "../images/jordan2.webp";
import adidas1 from "../images/adidas1.webp";
import puma1 from "../images/puma2.webp";

export default function Hero2() {
    return (
        <div className="border-b border-gray-700  mt-10  pb-10">
            <div className="box-border flex justify-center">
                <img src={bestselling} alt="" height={100} width={700} />
            </div>  
            <div className="mt-10">
                <ul className="flex justify-around pl-50 pr-50 gap-2">
                    <li><img src={nike1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={adidas1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={puma1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={nike2} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                </ul>
            </div>
            <div className="mt-10">
                <ul className="flex justify-around pl-50 pr-50 gap-2">
                    <li><img src={nike1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={adidas1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={puma1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={nike2} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                </ul>
            </div>
            <div className="mt-10">
                <ul className="flex justify-around pl-50 pr-50 gap-2">
                    <li><img src={nike1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={adidas1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={puma1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={nike2} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                </ul>
            </div>
            <div className="mt-10">
                <ul className="flex justify-around pl-50 pr-50 gap-2">
                    <li><img src={nike1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={adidas1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={puma1} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                    <li><img src={nike2} alt="" className="w-50 h-50 transform hover:scale-105 transition duration-300"/><a href=""></a></li>
                </ul>
            </div>
            <div className="mt-20 flex justify-center">
                <button className="bg-gray-950 text-white p-2 pl-2 pr-2 text-sm hover:cursor-pointer hover:scale-105 transition duration-300">View All</button>
            </div>
            
        </div>);    
}