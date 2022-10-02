import React from "react";
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from "../utils/data";

const HomeContainer = () => {
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className="flex items-center gap-2 justify-center bg-red-100
                px-4 py-1 rounded-full">
                    <p className="text-base text-red-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden
                    drop-shadow-xl">
                        <img 
                            src={Delivery}
                            className="w-full h-full object-contain"
                            alt="delivery" 
                        />
                    </div>
                </div>
                <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
                    The Fastest Delivery in 
                    <span className="text-cartNumBg text-[3rem] lg:text-[4.5rem]" >Your City</span>
                </p>
                <p className="text-base text-textColor text-center md:text-left md:w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus metus vel auctor 
                rhoncus. Quisque ac rutrum ipsum. Quisque sit amet mauris cursus, pellentesque libero 
                nec, efficitur lacus. Morbi non feugiat erat. Sed tempor felis eu venenatis finibus. 
                Pellentesque facilisis dui et leo consectetur, eu tristique felis rutrum. 
                </p>
                <button type="button" className="bg-gradient-to-br from-red-500
                to-red-600 w-full md:w-auto px-4 py-4 rounded-lg hover:shadow-lg transition-all
                ease-in-out duration-100 cursor-pointer text-white">Order Now</button>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg" />

                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 flex-wrap gap-4">
                    {heroData && heroData.map(n => (
                        <div key={n.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-2xl flex flex-col items-center justify-center">
                            <img src={n.imgSrc} className="w-20 lg:w-40 -mt-2 lg:-mt-20" alt="ice-cream-1" />

                            <p className="text-base lg:text-lg text-textColor mt-2 lg:mt-4 font-semibold">{n.name}</p>

                            <p className="text-[12px] lg:text-sm text-textColor font-semibold my-1 lg:my-2">{n.description}</p>

                            <p className="text-sm font-semibold text-headingColor">
                                <span className="text-xs text-red-600">$</span>{n.price}
                            </p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeContainer;