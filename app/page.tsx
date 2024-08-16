import AboutSection from "@/components/About/AboutSection";
import AppDownload from "@/components/AppDownload";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <AppDownload />
      <Footer />
    </>
  );
}
