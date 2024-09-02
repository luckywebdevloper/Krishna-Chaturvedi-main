import Image from "next/image";
import React from "react";
import Project from "@/public/project_1.jpg";
import Project2 from "@/public/project_2.jpg";
import Project3 from "@/public/project_3.jpg";

import Link from "next/link";

const YoutubePlaylist = () => {
  const videoInfo = [
    {
      name: "Door Na Hona Shambhu Official Video",
      singer: "Krishna Chaturvedi",
      Lyrics: "Gourav Pawar Bhawsar",
      composer: " Pankaj VRK ",
      image: Project,
      link:"https://www.youtube.com/watch?v=ylcW9gGNmJY"

    },
    {
      name: "Mere Bhole Shankara",
      singer: "Krishna Chaturvedi",
      Lyrics: "Gourav Pawar Bhawsar",
      composer: "Bass guitar - Shubh Jha",
      
      image: Project2,
      link:"https://www.youtube.com/watch?v=ylcW9gGNmJY"

    },
    {
      name: "Mera Bholenath",
      singer: "Krishna Chaturvedi",
      Lyrics: "Pankaj VRK",
      composer: "Pankaj VRK",
      image: Project3,
      link:"https://www.youtube.com/watch?v=ylcW9gGNmJY"
    },
  ];

  return (
    <div className=" md:max-h-[900px] h-screen container m-auto">
      <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">
        <h2 className="text-2xl   z-20 md:text-4xl lg:text-7xl font-bold  text-center dark:text-white font-sans tracking-tight mb-10">
          Best PlayList
        </h2>
      </div>
      <div className=" flex">
        <div className=" flex flex-col  gap-5">
          {videoInfo.map((item, idx) => (
            <Link href={item.link}   key={item.name}>
              <div className=" videoContainer w-full   bg-gradient-to-r from-indigo-500  p-5  items-centerjustify-center via-purple-500 to-pink-500 rounded-xl">
              <div
                className=" bg-white w-full  flex  rounded-lg shadow-xl  shadow-gray-900 justify-between p-3 items-center border border-gray-500  "
              
              >
                <div className=" w-72">
                  <Image
                    src={item.image}
                    alt="Thamnail"
                    className=" rounded-md"
                  />
                </div>

                <div className=" w-3/4 ml-4">
                  <h2 className=" text-2xl md:text-4xl font-extrabold text-ellipsis overflow-hidden">
                    {item.name}
                  </h2>

                  <p className=" text-xl md:text-2xl font-extrabold text-gray-800">
                    Song : {item.Lyrics}
                  </p>
                  <p className=" text-xl md:text-2xl font-extrabold text-gray-800">
                    Singer : {item.singer}
                  </p>
                  <p className=" text-xl md:text-2xl font-extrabold text-gray-800">
                    Composer : {item.composer}
                  </p>
                </div>
              </div>
            </div></Link>
          ))}
        </div>
        <div>
          
      </div>
      </div>
    </div>
  );
};

export default YoutubePlaylist;
