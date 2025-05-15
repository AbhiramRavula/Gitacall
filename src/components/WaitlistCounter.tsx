
import React from "react";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const WaitlistCounter: React.FC = () => {
  // This would typically come from an API call
  // For now we'll use a static number for demonstration
  const waitlistCount = 1247;
  
  return (
    <div className="py-12 bg-gradient-to-r from-krishna-orange/10 to-yellow-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="py-8 px-4 md:px-8 bg-white shadow-lg rounded-2xl inline-flex flex-col items-center">
          <div className="bg-krishna-orange/10 p-4 rounded-full mb-4">
            <Users className="w-8 h-8 text-krishna-orange" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-krishna-brown mb-2">
            Join <span className="text-krishna-orange">{waitlistCount.toLocaleString()}</span> devotees
          </h2>
          
          <p className="text-krishna-text text-lg max-w-md">
            Be part of our growing community receiving daily Bhagavad Gita wisdom
          </p>
        </Card>
      </div>
    </div>
  );
};

export default WaitlistCounter;
