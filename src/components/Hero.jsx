import nike from "../images/image.png";

export default function Hero() {
    return (
        <div className="box-border px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20">
            <div className="max-w-6xl mx-auto">
                {/* Desktop: Side by side, Mobile: Stacked */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    
                    {/* Left Content - Text */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight mb-6">
                            Step into style and sustainability with{" "}
                            <span className="font-bold text-4xl sm:text-5xl lg:text-6xl">UrbanSteps.</span>
                        </h1>
                        
                        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                            Your go-to destination for premium footwear, where every step makes a{" "}
                            <strong className="text-black font-semibold">Difference!</strong>
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <button className="bg-gray-950 text-white text-base sm:text-lg py-3 px-8 rounded-full transform hover:scale-105 transition duration-300 hover:cursor-pointer font-medium">
                                Shop Now →
                            </button>
                            <button
                                onClick={() => {
                                    const footer = document.getElementById('footer');
                                    if (footer) {
                                        footer.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    setTimeout(() => {
                                        window.dispatchEvent(new Event('highlightSupport'));
                                    }, 500);
                                }}
                                className="bg-white text-black text-base sm:text-lg py-3 px-8 rounded-full border-2 border-gray-300 hover:bg-gray-950 hover:text-white hover:border-gray-950 transform hover:scale-105 transition duration-300 hover:cursor-pointer font-medium"
                            >
                                Support
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="flex-1 order-1 lg:order-2 w-full">
                        <img 
                            src={nike} 
                            alt="Nike shoe" 
                            className="w-full h-auto max-w-md lg:max-w-lg mx-auto transform hover:scale-105 hover:rotate-2 transition duration-500" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}