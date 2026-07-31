import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PremiumSections from "@/components/PremiumSections";
import About from "@/components/About";
import Courses from "@/components/Courses";
import LearningJourney from "@/components/LearningJourney";
import LearnerOutcomes from "@/components/LearnerOutcomes";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PremiumSections />
      <About />
      <Courses />
      <LearningJourney />
      <LearnerOutcomes />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
