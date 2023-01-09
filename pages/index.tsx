import Script from "next/script";

// Layout
import NavBar from "@movit/ui-layout/Navbar/NavBar";
// Sections
import SectionHero from "@movit/ui-section/Hero";
import SectionServices from "@movit/ui-section/Services";
import Solutions from "@movit/ui-section/Solutions";
import AboutUs from "@movit/ui-section/AboutUs";
import AboutDetails from "@movit/ui-section/AboutDetails";
import ContactUs from "@movit/ui-section/ContactUs";


export default function Home() {
  return (
    <>
      <NavBar/>
      <SectionHero/>
      <SectionServices/>
      <Solutions />
      <AboutUs />
      <AboutDetails />
      <ContactUs />
      <Script defer src={'script/rotating-words.js'} />
    </>
  )
}
