import React from "react";
import { BackgroundBeamsWithCollision } from "@/Components/ui/background-beams-with-collision";

import Image from "next/image";
import portfolioImage from "@/public/portfolio_image.png";
import { SiAmazonmusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FloatingDock } from "./ui/floating-dock";
import { FloatingDockDemo } from "./ui/FloatingDockDemo";
export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className=" flex md:flex-row flex-col items-center md:justify-between justify-center h-screen w-full container  md:h-full m-auto  md:max-h-[800px] ">
        <div className=" md:w-[50%]  flex  flex-col md:items-start  items-center justify-center md:gap-10">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold md:text-start text-center  text-black dark:text-white font-sans tracking-tight">
            Hy I am
            
          </h2>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold md:text-start text-center  text-black dark:text-white font-sans tracking-tight"><div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"> 
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                
                <span className="">krishna Chaturvedi</span>
              </div>
            </div></h2>
          <FloatingDockDemo />
        </div>
        <div className=" md:w-[50%] ">
          {/* <Spline scene="https://prod.spline.design/C5p8r68WH5aYK3UB/scene.splinecode" /> */}
          <Image
            src={portfolioImage}
            className=" w-full"
            alt="krishna Chaturvedi"
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
