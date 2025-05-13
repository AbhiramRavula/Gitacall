
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navbar from "../components/Navbar";
import PhoneMockup from "../components/PhoneMockup";
import FeatureSection from "../components/FeatureSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WaitlistForm from "../components/WaitlistForm";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-krishna-brown">Daily Bhagavad Gita Wisdom,</span>
              <br />
              <span className="text-krishna-orange">Straight to Your Phone</span>
            </h1>
            
            <p className="text-krishna-text text-lg mt-6 mb-8">
              Gitacall brings the timeless wisdom of the Bhagavad Gita straight to your phone—every morning—using beautifully narrated, pre-recorded verses tailored to your language, time zone, and even your horoscope.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="bg-krishna-orange/10 rounded-full p-1 mt-1">
                  <Check className="text-krishna-orange w-4 h-4" />
                </div>
                <p className="text-krishna-text">No downloads</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="bg-krishna-orange/10 rounded-full p-1 mt-1">
                  <Check className="text-krishna-orange w-4 h-4" />
                </div>
                <p className="text-krishna-text">Hindi, Telugu & English</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="bg-krishna-orange/10 rounded-full p-1 mt-1">
                  <Check className="text-krishna-orange w-4 h-4" />
                </div>
                <p className="text-krishna-text">Personalized content</p>
              </div>
            </div>
            
            <Button className="mt-8 bg-krishna-orange hover:bg-krishna-orange/90 text-white text-lg px-8 py-6 h-auto rounded-full">
              Join the Waitlist
            </Button>
          </div>
          
          <div className="flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Waitlist Form */}
      <WaitlistForm />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
