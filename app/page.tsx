import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SalesVideo from "@/components/SalesVideo";
import AudiencePathways from "@/components/AudiencePathways";
import PremiumSections from "@/components/PremiumSections";
import About from "@/components/About";
import Courses from "@/components/Courses";
import LearningJourney from "@/components/LearningJourney";
import LearnerOutcomes from "@/components/LearnerOutcomes";
import EvidenceStories from "@/components/EvidenceStories";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InstitutionEnquiry from "@/components/InstitutionEnquiry";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SalesVideo />
      <AudiencePathways />
      <PremiumSections />
      <About />
      <Courses />
      <LearningJourney />
      <LearnerOutcomes />
      <EvidenceStories />
      <GoogleReviews />
      <FAQ />
      <InstitutionEnquiry />
      <Contact />
      <Footer />
    </main>
  );
}
