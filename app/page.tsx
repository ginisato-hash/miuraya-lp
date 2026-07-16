import Hero from "@/components/Hero/Hero";
import Facts from "@/components/Facts/Facts";
import Philosophy from "@/components/Philosophy/Philosophy";
import About from "@/components/About/About";
import Architecture from "@/components/Architecture/Architecture";
import Town from "@/components/Town/Town";
import Rooms from "@/components/Rooms/Rooms";
import Facilities from "@/components/Facilities/Facilities";
import Amenities from "@/components/Amenities/Amenities";
import StayStyle from "@/components/StayStyle/StayStyle";
import Precautions from "@/components/Precautions/Precautions";
import Access from "@/components/Access/Access";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <Philosophy />
      <About />
      <Architecture />
      <Town />
      <Rooms />
      <Facilities />
      <Amenities />
      <StayStyle />
      <Precautions />
      <Access />
      <Contact />
    </>
  );
}
