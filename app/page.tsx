import Navbar from "@/components/Navbar";
// import IntentModal from "@/components/IntentModal";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Principles from "@/components/Principles";
import Sectors from "@/components/Sectors";
import OurModel from "@/components/OurModel";
import InvestmentOpportunities from "@/components/InvestmentOpportunities";
import JobOpportunities from "@/components/JobOpportunities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* <IntentModal /> */}
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Principles />
      <Sectors />
      <OurModel />
      <InvestmentOpportunities />
      <JobOpportunities />
      <Contact />
      <Footer />
    </main>
  );
}
