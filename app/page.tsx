
import { Hero } from "@/components/component/hero";
import { Youtube_video } from "@/components/component/youtube_video";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" container mx-auto">
      <Hero />
      <Youtube_video/>
  </main>
  );
}
