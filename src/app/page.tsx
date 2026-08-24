import NavbarLanding from "./_component/LandingPageComponent/NavbarLanding";
import Hero from "./_component/LandingPageComponent/Hero";
import Stats from "./_component/LandingPageComponent/Stats";
import HowItWorks from "./_component/LandingPageComponent/HowItWorks";
import Features from "./_component/LandingPageComponent/Features";
import Pricing from "./_component/LandingPageComponent/Pricing";
import CTA from "./_component/LandingPageComponent/CTA";
import Footer from "./_component/LandingPageComponent/Footer";



export default function Home() {
  return (
    <>
      <NavbarLanding/>
      <Hero/>
      <Stats />
      <HowItWorks />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}