
import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

interface WaitlistCounterProps {
  triggerAnimation: boolean;
}

const WaitlistCounter: React.FC<WaitlistCounterProps> = ({ triggerAnimation }) => {
  // This would typically come from an API call
  // For now we'll use a static number for demonstration
  const targetCount = 1247;
  const [displayCount, setDisplayCount] = useState(0);
  const animationTriggered = useRef(false);
  
  useEffect(() => {
    // Only run the animation if it's triggered
    if (!triggerAnimation || animationTriggered.current) return;
    
    // Mark that we've started the animation
    animationTriggered.current = true;
    
    // Start with zero
    setDisplayCount(0);
    
    // Animation duration in milliseconds
    const duration = 2000;
    // Number of steps in the animation
    const steps = 60;
    // Time between each step in milliseconds
    const stepTime = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      
      // Calculate the current count based on easeOutQuad easing function
      // for a smoother animation that slows down near the end
      const progress = currentStep / steps;
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.round(easedProgress * targetCount);
      
      setDisplayCount(currentCount);
      
      // Clear interval when animation is complete
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayCount(targetCount);
      }
    }, stepTime);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [triggerAnimation, targetCount]);
  
  return (
    <div className="py-12 bg-gradient-to-r from-krishna-orange/10 to-yellow-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="py-8 px-4 md:px-8 bg-white shadow-lg rounded-2xl inline-flex flex-col items-center">
          <div className="bg-krishna-orange/10 p-4 rounded-full mb-4">
            <Users className="w-8 h-8 text-krishna-orange" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-krishna-brown mb-2">
            Join <span className="text-krishna-orange">{displayCount.toLocaleString()}</span> devotees
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
