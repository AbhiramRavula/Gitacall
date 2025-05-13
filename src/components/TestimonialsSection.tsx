
import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  initial: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, initial, quote }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="bg-[#FFE5C4] text-krishna-orange w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg mr-4">
          {initial}
        </div>
        <div>
          <p className="font-bold text-krishna-brown">{name}</p>
          <div className="flex text-yellow-400">
            <Star size={16} fill="currentColor" strokeWidth={0} />
            <Star size={16} fill="currentColor" strokeWidth={0} />
            <Star size={16} fill="currentColor" strokeWidth={0} />
            <Star size={16} fill="currentColor" strokeWidth={0} />
            <Star size={16} fill="currentColor" strokeWidth={0} />
          </div>
        </div>
      </div>
      <p className="text-krishna-text italic">{quote}</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Ananya P.",
      initial: "A",
      quote: "Starting my day with Gitacall has completely transformed my morning routine. The personalized verses for my zodiac sign are surprisingly relevant to my daily challenges."
    },
    {
      name: "Rahul M.",
      initial: "R",
      quote: "I love that I can listen to the Gita in Telugu. The voice narration is so clear and soothing. It's like having a spiritual guide right in my pocket."
    },
    {
      name: "Priya S.",
      initial: "P",
      quote: "The sharing feature is brilliant! I've been sending verses to my family group chat, and now we have meaningful spiritual discussions almost every day."
    }
  ];

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-krishna-brown mb-4">What Early Users Are Saying</h2>
          <p className="text-krishna-text max-w-3xl mx-auto">
            Our beta testers have experienced the transformative power of daily Gita wisdom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              initial={testimonial.initial}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
