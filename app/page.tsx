import Navbar from "@/components/Navbar";
// import IntentModal from "@/components/IntentModal";
import Hero from "@/components/Hero";
import InvestmentOpportunities from "@/components/InvestmentOpportunities";
import JobOpportunities from "@/components/JobOpportunities";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Sectors from "@/components/Sectors";
import OurModel from "@/components/OurModel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <IntentModal /> */}
      <Navbar />
      <Hero />
      <InvestmentOpportunities />
      <JobOpportunities />
      <About />
      <MissionVision />
      <Sectors />
      <OurModel />
      <Contact />
      <Footer />
    </main>
  );
}
