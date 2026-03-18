import { Hero } from "@/components/sections/Hero";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { About } from "@/components/sections/About";
import { TechnicalDepth } from "@/components/sections/TechnicalDepth";
import { UrbanSystems } from "@/components/sections/UrbanSystems";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <About />
      <TechnicalDepth />
      <UrbanSystems />
      <Contact />
    </>
  );
}
