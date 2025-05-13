
import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: "book" as const,
      title: "Daily Shlokas & Insights",
      description: "Start each morning with a verse and its meaning, bringing ancient wisdom into your modern life.",
    },
    {
      icon: "user" as const,
      title: "Personalized to You",
      description: "Match content to your zodiac sign for extra resonance with your personal spiritual journey.",
    },
    {
      icon: "clock" as const,
      title: "Zero Hassle",
      description: "20 high-quality calls per month, no data needed. Just pick your time and receive divine wisdom.",
    },
    {
      icon: "share" as const,
      title: "Seamless Sharing",
      description: "Share inspirational verses with friends via a single tap. Spread the wisdom of the Gita.",
    },
  ];

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-krishna-brown mb-4">Why You'll Love It</h2>
        <p className="text-krishna-text max-w-3xl mx-auto">
          Experience the divine wisdom of Krishna in your daily life with these thoughtfully
          designed features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
