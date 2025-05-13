
import React from "react";
import { Book, User, Clock, Share } from "lucide-react";

interface FeatureCardProps {
  icon: "book" | "user" | "clock" | "share";
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const iconMap = {
    book: <Book className="w-6 h-6" />,
    user: <User className="w-6 h-6" />,
    clock: <Clock className="w-6 h-6" />,
    share: <Share className="w-6 h-6" />,
  };

  return (
    <div className="feature-card bg-krishna-cream p-8 rounded-2xl flex flex-col items-center text-center">
      <div className="icon-container mb-6">
        <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 bg-krishna-orange opacity-10 rounded-full"></div>
          <span className="text-krishna-orange">{iconMap[icon]}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-krishna-brown mb-3">{title}</h3>
      <p className="text-krishna-text text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
