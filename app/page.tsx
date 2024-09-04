
import { Contact_form } from "@/components/component/contact_form";
import { Hero } from "@/components/component/hero";
import { Video_section } from "@/components/component/video_section";
import { Youtube_video } from "@/components/component/youtube_video";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" container mx-auto">
      <Hero />
      <Youtube_video />
      <Video_section/>
      <Contact_form/>
  </main>
  );
}
