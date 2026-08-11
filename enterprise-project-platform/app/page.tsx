import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/landing/hero";
import Problem from "@/components/landing/problem";
import Solution from "@/components/landing/solution";
import Features from "@/components/landing/features";
import Workflow from "@/components/landing/workflow";
import AIFeatures from "@/components/landing/ai-features";
import ClientCollaboration from "@/components/landing/client-collaboration";
import Security from "@/components/landing/security";
import FinalCTA from "@/components/landing/final-cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Workflow />
      <AIFeatures />
      <ClientCollaboration />
      <Security />
      <FinalCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}