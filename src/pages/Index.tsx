
import React from "react";
import FeatureSection from "../components/FeatureSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero section or any other content can go here */}
      <div className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-krishna-brown mb-6">
            Krishna's Divine Wisdom
          </h1>
          <p className="text-xl text-krishna-text max-w-3xl mx-auto">
            Connect with the timeless teachings of Lord Krishna and transform your daily life
            through ancient wisdom.
          </p>
        </div>
      </div>
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* More sections can be added below */}
    </div>
  );
};

export default Index;
