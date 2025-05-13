
import React from "react";
import { Settings, Phone, Share } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col items-center">
      <div className="bg-krishna-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6">
        {number}
      </div>
      <h3 className="text-krishna-brown text-xl font-bold mb-3">{title}</h3>
      <p className="text-krishna-text text-center mb-6">{description}</p>
      <div className="text-krishna-orange mt-auto">
        {icon}
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Preferences",
      description: "Select your preferred call time, language (Hindi, Telugu, or English), and enter your zodiac sign for personalized content.",
      icon: <Settings size={48} className="text-krishna-orange opacity-70" />
    },
    {
      number: 2,
      title: "Receive Your Daily Call",
      description: "At your chosen time, receive a beautifully narrated verse from the Bhagavad Gita with its meaning and relevance.",
      icon: <Phone size={48} className="text-krishna-orange opacity-70" />
    },
    {
      number: 3,
      title: "Reflect & Share",
      description: "Absorb the wisdom, apply it to your day, and easily share meaningful verses with friends and family.",
      icon: <Share size={48} className="text-krishna-orange opacity-70" />
    }
  ];

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 bg-krishna-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-krishna-brown mb-4">How GitaCall Works</h2>
          <p className="text-krishna-text max-w-3xl mx-auto">
            Simple, seamless, and spiritually enriching — here's how we bring the Bhagavad Gita to your daily routine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
