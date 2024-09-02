import React from "react";
import { FloatingDock } from "@/Components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { TfiYoutube } from "react-icons/tfi";
import { FaSpotify,FaInstagram  } from "react-icons/fa";
import { SiAmazonmusic ,SiItunes  } from "react-icons/si";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Youtube",
      icon: (
        <TfiYoutube  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Spotify ",
      icon: (
        <FaSpotify  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Amazon Music ",
      icon: (
        <SiAmazonmusic  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
   
    {
      title: "Instagram ",
      icon: (
        <FaInstagram  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Itunes ",
      icon: (
        <SiItunes  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
   
  ];
  return (
    <div className="flex items-center  w-fit">
      <FloatingDock
              mobileClassName=""
        desktopClassName="   "      // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
