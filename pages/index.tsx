import Script from "next/script";

// Layout
import Mainlayout from "@movit/ui-layout/Main";
// Sections
import SectionHero from "@movit/ui-section/Hero";
import SectionServices from "@movit/ui-section/Services";
import SectionSolutions from "@movit/ui-section/Solutions";
import SectionAboutUs from "@movit/ui-section/AboutUs";
import SectionAboutDetails from "@movit/ui-section/AboutDetails";
import SectionContactUs from "@movit/ui-section/ContactUs";


export default function Home() {
  return (
    <Mainlayout>
      <SectionHero/>
      <SectionServices/>
      <SectionSolutions />
      <SectionAboutUs />
      <SectionAboutDetails />
      <SectionContactUs />
      {/* <Script defer src={'script/rotating-words.js'} /> */}
    </Mainlayout>
  )
}
