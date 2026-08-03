import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudiencePathways from "@/components/AudiencePathways";
import PremiumSections from "@/components/PremiumSections";
import About from "@/components/About";
import Courses from "@/components/Courses";
import LearningJourney from "@/components/LearningJourney";
import LearnerOutcomes from "@/components/LearnerOutcomes";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstitutionEnquiry from "@/components/InstitutionEnquiry";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AudiencePathways />
      <PremiumSections />
      <About />
      <Courses />
      <LearningJourney />
      <LearnerOutcomes />
      <GoogleReviews />
      <FAQ />
      <InstitutionEnquiry />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
