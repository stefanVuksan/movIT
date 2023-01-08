import Script from "next/script";

// Layout
import NavBar from "@movit/ui-layout/Navbar/NavBar";
// Sections
import SectionHero from "@movit/ui-section/Hero";
import SectionServices from "@movit/ui-section/Services";
import Solutions from "@movit/ui-section/Solutions";


export default function Home() {
  return (
    <>
      <NavBar/>
      <SectionHero/>
      <SectionServices/>
      <Solutions />
      <Script defer src={'script/rotating-words.js'} />
    </>
  )
}
