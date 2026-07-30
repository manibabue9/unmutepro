import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import MentorJourney from "@/components/MentorJourney";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Courses />
      <MentorJourney />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}